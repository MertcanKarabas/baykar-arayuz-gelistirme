import { MasterCSS } from "../../../assets/css/masterCSS";
import Rectangle31 from "../../../assets/rectangels/rectangle31";
import FirstColumn from "./Columns/FirstColumn";
import SecondColumn from "./Columns/SecondColumn";

const FirstSection = () => {
    return (
        <div className={`px-20 py-20 z-10`}>
            <section className="flex flex-row- space-x-20 items-center justify-center">
                <FirstColumn
                    basis='basis-3/5'
                />
                <SecondColumn
                    basis='basis-2/5'
                />
                
            </section>
            <Rectangle31 />
        </div>
    )
}

export default FirstSection;