import React, { useState } from 'react';
import { cards } from '../../../assets/sliderCards';
import FirstRow from './FirstRow';
import { MasterCSS } from '../../../assets/css/masterCSS';
import Slider from '../../Slider';
import Rectangle28 from '../../../assets/rectangels/rectangle28';

const FifthSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < cards.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className={`${MasterCSS.colors}`}>

            <div className="flex flex-col">
                <div className='z-10 px-20 py-20'>
                    <FirstRow nextSlide={nextSlide} prevSlide={prevSlide} />
                </div>
                <div className="relative mx-10">
                    <div className='absolute z-0 -top-10'>
                        <Rectangle28 />
                    </div>
                </div>
                <div>
                    <div className="container py-20">
                        <Slider
                            cards={cards}
                            currentIndex={currentIndex}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FifthSection;