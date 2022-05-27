import React from 'react';

const Intro = () => {
    return (
        <section className=" pb-6 md:pb-8 lg:pb-12">
            <div className='bg-white dark:bg-gray-900'>
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                            Md Neamul Haque
                        </h2>

                        <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                            I am a student, I love programming, as I am a dedicated learner of programming I was try to learn programming by myself after some learning i found Programming hero community a great place to learn programming.
                            Now I am a junior web developer. <br />
                            <b>My Project like bellow</b>
                        </p>

                        <div className="mt-6 sm:-mx-2">
                            <div className="inline-flex gap-4 w-full overflow-hidden sm:w-auto sm:mx-2">
                                <p className="font-bold rounded-lg shadow"><a href="https://gadget-hub-2022.web.app/">Gadget Hub</a></p>
                                <p className="font-bold rounded-lg shadow"><a href="https://genious-car-services-25222.web.app/">Genious Car Services</a></p>
                                <p className="font-bold rounded-lg shadow"><a href="https://doctors-portal-52022.web.app/">Gadget Hub</a></p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;