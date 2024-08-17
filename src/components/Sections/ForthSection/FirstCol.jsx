import { HeaderConstants } from "../../../assets/constants/headerConstants";
import { HeaderCSS } from "../../../assets/css/headerCSS";
import { MasterCSS } from "../../../assets/css/masterCSS";
import Check from "../../../assets/icon/jam-icons/outline & logos/Check";
import SingleButton from "../../Buttons/singleButton";
import List from "../../List";
import ListItem from "../../ListItem";

const FirstCol = () => {
    return (
        <div className="flex flex-col space-y-10">
            <div>
                <h1 className="font-extrabold text-[56px]/[61.6px]">Why join us</h1>
            </div>
            <div>
                <List>
                    <ListItem 
                        svg={<Check />}
                        text={`Est et in pharetra magna adipiscing ornare aliquam.`}
                    />
                    <ListItem 
                        svg={<Check />}
                        text={`Tellus arcu sed consequat ac velit ut eu blandit.`}
                    />
                    <ListItem 
                        svg={<Check />}
                        text={`Ullamcorper ornare in et egestas dolor orci.`}
                    />
                </List>
            </div>
            <div>
                <SingleButton
                    btnClassName={`${HeaderCSS.signUpButton} ${MasterCSS.secondTextColor}`}
                    title={`${HeaderConstants.signUp.title}`}
                    padding={`px-6 py-0`}
                />
            </div>
        </div>
    )
}

export default FirstCol;