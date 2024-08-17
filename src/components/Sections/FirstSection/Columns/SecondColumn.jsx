import section1_1 from '../../../../assets/photos/section1-1.png';
import section1_2 from '../../../../assets/photos/section1-2.png';
const SecondColumn = (props) => {
    return (
        <div className={`${props.basis} relative w-96 h-96`}>
            <img
                src={section1_1}
                alt="bg 1"
                className="absolute top-0 left-0 w-full h-[350px] z-20 "
            />
            <img
                src={section1_2}
                alt="bg 2"
                className="absolute bottom-0 left-1/4 w-80 h-80 z-10 opacity-100"
            />
        </div>
    )
}

export default SecondColumn;