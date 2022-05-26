import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { request } from '../utils/axios-utils';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const CheckoutForm = ({ singleOrder, setProcessing }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, paid, email, price, quantity } = singleOrder;
    const [user] = useAuthState(auth);

    const totalPrice = Number(price) * Number(quantity);


    //---------------------------why not working when i used request(custom axios) ------------------------------------
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [totalPrice])
    // -------------------my problem------------------------------------

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Your Payment is completed...');

            //store payment on server
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            request({ url: `/orders/${_id}`, method: 'patch', data: payment })
                .then(res => {
                    setProcessing(false)
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className=' btn btn-md btn-success mt-4' disabled={!stripe || !clientSecret || paid === true}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;