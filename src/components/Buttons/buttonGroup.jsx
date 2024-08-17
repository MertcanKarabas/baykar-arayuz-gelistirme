import { HeaderCSS } from "../../assets/css/headerCSS";

const ButtonGroup = (props) => {
    return (
        <div className={`flex flex-row space-x-5 items-center ${HeaderCSS.buttonGroup}`}>
            {props.children}
        </div>
    )
}
export default ButtonGroup;