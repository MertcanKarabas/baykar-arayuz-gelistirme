import { MasterCSS } from "../../../assets/css/masterCSS";
import FirstCol from "./FirstCol";
import ScreenDesktop from "./ScreenDesktop";

const ForthSection = () => {
    return (
        <section className={`px-20 py-20 bg-[#FFFBEB] `}>
            <div className="container flex flex-row space-x-20 p-20 bg-white rounded-[30px]">
                <div className="">
                    <FirstCol />
                </div>
                <div className="shadow-2xl rounded-xl p-1">
                    <ScreenDesktop />
                </div>
            </div>
        </section>
    )
}

export default ForthSection;