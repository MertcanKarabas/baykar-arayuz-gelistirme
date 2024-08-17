import { HeaderCSS } from "../../../../assets/css/headerCSS";
import { MasterCSS } from "../../../../assets/css/masterCSS";
import WatchDemoSVG from "../../../../assets/icon/jam-icons/outline & logos/vector";
import ButtonGroup from "../../../Buttons/buttonGroup";
import SingleButton from "../../../Buttons/singleButton";

const FirstColumn = (props) => {
    return (
        <div className={`${props.basis} flex flex-col space-y-7 text-left`}>
            <div className="flex flex-col ">
                <h1>

                </h1>
                <h1 className={`text-7xl ${MasterCSS.firstTextColor} ${MasterCSS.fontRoboto} font-extrabold`}>
                    Collectible Sneakers
                </h1>
                <h1>

                </h1>
            </div>
            <div>
                <p className={`text-lg ${MasterCSS.firstTextColor} font-normal`}>
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                </p>
            </div>
            <div>
                <ButtonGroup>
                    <SingleButton
                        btnClassName={`${HeaderCSS.signUpButton}`}
                        title='Sign up now'
                        textColor={`${MasterCSS.secondTextColor}`}
                        padding='px-4'
                    />
                    <SingleButton
                        svg={<WatchDemoSVG />}
                        title='Watch Demo'
                        textColor={`${MasterCSS.secondTextColor}`}
                    />
                </ButtonGroup>
            </div>
        </div>
    )
}

export default FirstColumn;