import React from 'react';
import HorizontalGallery from 'react-dynamic-carousel'

const Review = () => {
    const example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className='my-6 md:my-8 lg:my-24'>
            <HorizontalGallery
                tiles={example.map((value) => (
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
                        <h1>{value}</h1>
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