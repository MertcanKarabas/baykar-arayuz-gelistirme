import React from 'react';
import SingleButton from '../../Buttons/singleButton';
import LeftArrow from '../../../assets/icon/iconoir/leftArrow';
import RightArrow from '../../../assets/icon/iconoir/rightArrow';

const SliderControls = ({ nextSlide, prevSlide }) => {
  return (
    <div className="flex flex-row space-x-4">
      <SingleButton 
        click={prevSlide}
        btnClassName='border-2 rounded-full border-[#78350F]'
        svg={<LeftArrow />}
        padding='p-2'
        textColor='bg-[#78350F]'
      />
      <SingleButton 
        click={nextSlide}
        btnClassName='border-2 rounded-full border-[#78350F]'
        svg={<RightArrow />}
        padding='p-2'
        textColor='bg-[#78350F]'
      />
    </div>
  );
};

export default SliderControls;