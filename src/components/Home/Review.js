import React from 'react';
import HorizontalGallery from 'react-dynamic-carousel'
import { useQuery } from 'react-query';
import {request} from '../utils/axios-utils.js'
import LoadingSpinner from "../Shared/LoadingSpinner";
import {toast} from 'react-toastify'
import ReactStars from "react-rating-stars-component";


const Review = () => {
    const {data:reviews, isLoading, error}=useQuery('reviews',async()=>await request({url:'/reviews',method:'get'}))

    if(isLoading){
        return <LoadingSpinner/>
    }
    if(error){
        toast.error(error?.message)
    }
    
    let displayReview
    if(reviews.length){
        displayReview = reviews.slice(-5);
    }
    // console.log(displayReview)


    return (
        <div className='my-6 md:my-8 lg:my-24'>
            <h2 className="text-3xl text-center text-primary mb-3 md:mb-8 font-bold">Latest Reviews</h2>
            <HorizontalGallery
                tiles={displayReview?.map((value) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 440,
                            height: 450,
                            backgroundColor: '#D0D0D0',
                            borderRadius: 10
                        }}
                    >
                        <div className="card  justify-center items-center">
                            <div className="avatar">
                                <div className="w-24 m-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                 <img src="https://api.lorem.space/image/face?hash=3174" />
                                </div>
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{value?.name}</h2>
                                <p>{value?.description}</p>
                                <ReactStars
                                    count={value?.ratings}
                                    color={'#000000'}
                                    size={32}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                elementWidth={450}
                fadeDistance={30}
                minPadding={20}
            />
        </div>
    );
};

export default Review;