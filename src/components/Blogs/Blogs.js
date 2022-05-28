import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <h2 className="text-3xl font-bold text-center">Blogs</h2>
            <div className="flex flex-col justify-center items-center max-w-5xl my-4">
                <div className='w-full py-8 px-4 shadow-lg'>
                    <h2 className='font-bold mb-4'> <b>1.</b> How will you improve the performance of a React Application?</h2>
                    <p> I will implement lazy loading, control unnecessary re rendaring , I will keep state local where neccessary to improve performance of a react application.</p>
                </div>

                <div className='w-full py-8 px-4 shadow-lg'>
                    <h2 className='font-bold mb-4'><b>2.</b> What are the different ways to manage a state in a React application?</h2>
                    <p>
                        Four ways to manage react state. <br />
                        1.Local Stete <br />
                        2.Global state <br />
                        3.Server state <br />
                        4.URL state <br />
                    </p>
                </div>

                <div className='w-full py-8 px-4 shadow-lg'>
                    <h2 className='font-bold mb-4'><b>3.</b> How does prototypical inheritance work?</h2>
                    <p>
                        Prototopical inheritance used to add method and properties on objects.  It is a method by which an object can inherit the properties and methods of another object.
                    </p>
                </div>

                <div className='w-full py-8 px-4 shadow-lg'>
                    <h2 className='font-bold mb-4'><b>4.</b>  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>
                        I don set setProduct instead of products spread elements because setProducts is a react fuction that allows me to update elements live. when i change its element it render backgroud also call api if need and show result in display without reloading.
                    </p>
                </div>

                <div className='w-full py-8 px-4 shadow-lg'>
                    <h2 className='font-bold mb-4'><b>5.</b> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </h2>
                    <p>
                        I will use filter and in the filter condition i will set array condition like arr.filter(a =&gt;a.name==='search name').
                    </p>
                </div>

                <div className='w-full py-8 px-4 shadow-lg'>
                    <h2 className='font-bold mb-4'><b>6.</b> What is a unit test? Why should write unit tests?
                    </h2>
                    <p>
                        Unit test is first test of an application . This test is made by developers, developers tests every parts of application individually for this developers can find the problem of the programme easily and improve application performance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;