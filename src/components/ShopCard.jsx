import { HeaderCSS } from "../assets/css/headerCSS";
import ShoppingCardSVG from "../assets/icon/jam-icons/outline & logos/shopping-cart";
import ButtonGroup from "./Buttons/buttonGroup";
import SingleButton from "./Buttons/singleButton";

const ShopCard = (props) => {
    return (
        <div className="flex flex-col justify-center items-start shadow-lg shadow-white/25 rounded-md">
            <div>
                <img className="object-cover h-full w-full " src={`${props.img}`} alt="" />
            </div>
            <div className="flex flex-col space-y-5 p-5">
                <div className="flex flex-col space-y-5">
                    <h1 className="font-bold text-[24px]/[26.4px]">Title</h1>
                    <p>
                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                    </p>
                </div>
                <div>
                    <ButtonGroup>
                        <SingleButton
                            svg={<ShoppingCardSVG />}
                            title='Buy Now'
                            btnClassName={`text-center font-medium text-[20px]/[24px] border-2 border-[#FFFFFF] rounded-lg `}
                            padding='px-28 py-3'
                        />
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default ShopCard;