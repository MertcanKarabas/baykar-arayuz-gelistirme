import { HeaderConstants } from "../../assets/constants/headerConstants";
import { HeaderCSS } from "../../assets/css/headerCSS";

const CompanyTitle = () => {
    return (
        <div>
            <div>
                <h1 className={`${HeaderCSS.companyTitle}`}>
                    {HeaderConstants.company.title}
                </h1>
            </div>
        </div>
    )
}

export default CompanyTitle;