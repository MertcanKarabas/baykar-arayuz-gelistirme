import SliderControls from "./SliderControl";

const FirstRow = ({ nextSlide, prevSlide }) => {
    return (
        <div className="flex flex-row items-center justify-between font-roboto font-bold text-[56px]/[61.6px]">
            <h1>Because they love us</h1>
            <SliderControls nextSlide={nextSlide} prevSlide={prevSlide}/>
        </div>
    )
}

export default FirstRow;