import { MasterCSS } from "../../../assets/css/masterCSS";
import Rectangle from "./Rectangle";

const Group = (props) => {
    return (
        <div className={`flex flex-col text-left items-start space-y-3 ${MasterCSS.fontRoboto} ${MasterCSS.firstTextColor} z-50`}>
            <div className="relative">
                {/* Rectangle sağ üst köşede ve z-index olarak icon'un altında olacak */}
                <div className="absolute top-0 left-4 z-10">
                    <Rectangle rect={props.rectangle} />
                </div>
                {/* Icon z-index olarak üstte olacak */}
                <div className="relative z-20">
                    {props.icon}
                </div>
            </div>
            <div>
                <h1 className={`font-medium text-[20px]/[22px]`}>
                    {props.title}
                </h1>
            </div>
            <div>
                <p className={`font-normal text-[18px]/[28.8px]`}>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default Group;