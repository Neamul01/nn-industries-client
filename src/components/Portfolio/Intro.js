import React from 'react';

const Intro = () => {
    return (
        <section class=" pb-6 md:pb-8 lg:pb-12">
            <div className='bg-white dark:bg-gray-900'>
                <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div class="flex justify-center xl:w-1/2">
                        <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
                    </div>

                    <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                            Download our free mobile app
                        </h2>

                        <p class="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae </p>

                        <div class="mt-6 sm:-mx-2">
                            <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                                <a href="!#" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
                                    {/*  */}
                                    <span class="mx-2">
                                        Get it on the App Store
                                    </span>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;