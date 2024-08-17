import { MasterCSS } from "../../../assets/css/masterCSS";
import ShopCard from "../../ShopCard";
import section3_1 from "../../../assets/photos/section3-1.png"
import section3_2 from "../../../assets/photos/section3-2.png"
import section3_3 from "../../../assets/photos/section3-3.png"
import SingleButton from "../../Buttons/singleButton";
import { HeaderCSS } from "../../../assets/css/headerCSS";
const ThirdSection = () => {
    return (
        <section className={`px-20 py-20 bg-[#0F172A] text-[#E2E8F0] font-roboto flex flex-col space-y-16`}>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-[56px]/[61.6px] font-extrabold">The best of the best</h1>
                </div>
                <div>
                    <SingleButton 
                        btnClassName={`border-2 border-[#E2E8F0] rounded-lg p-3 font-medium`}
                        title='Sign up now'
                        padding='px-4'
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-14">
                <ShopCard 
                    img={section3_1}
                />
                <ShopCard 
                    img={section3_2}
                />
                <ShopCard 
                    img={section3_3}
                />
            </div>
        </section>
    )
}

export default ThirdSection;