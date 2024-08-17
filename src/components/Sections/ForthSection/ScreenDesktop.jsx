import GreenCircle from "../../../assets/icon/jam-icons/outline & logos/greenCircle";
import RedCircle from "../../../assets/icon/jam-icons/outline & logos/redCircle";
import YellowCircle from "../../../assets/icon/jam-icons/outline & logos/yellowCircle";
import section4_1 from "../../../assets/photos/section4-1.png"
const ScreenDesktop = () => {
    return (
        <div className=" bg-white flex flex-col shadow-black">
            <div className="basis-1/12">
                <div className="flex flex-row space-x-1 items-center justify-start ml-2 mt-2">
                    <RedCircle />
                    <YellowCircle />
                    <GreenCircle />
                </div>
            </div>
            <div className="basis-11/12">
                <img src={section4_1} alt="video" className="rounded-b-lg"/>
            </div>
        </div>
    )
}

export default ScreenDesktop;