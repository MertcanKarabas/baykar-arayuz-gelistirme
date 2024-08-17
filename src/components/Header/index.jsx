import { HeaderConstants } from "../../assets/constants/headerConstants";
import { HeaderCSS } from "../../assets/css/headerCSS";
import { MasterCSS } from "../../assets/css/masterCSS";
import ButtonGroup from "../Buttons/buttonGroup";
import SingleButton from "../Buttons/singleButton";
import CompanyTitle from './companyTitle'
const Header = () => {
    return (
        <header className={`${HeaderCSS.index} ${MasterCSS.paddings}`}>
            <CompanyTitle />
            <ButtonGroup>
                {
                    HeaderConstants.navLinks.map((navLink, index) => {
                        return (
                            <SingleButton
                                btnClassName=''
                                title={`${navLink.title}`}
                                padding={`px-2 py-3`}
                                key={index}
                            />
                        )
                    })
                }
                <SingleButton
                    btnClassName={`${HeaderCSS.signUpButton}`}
                    title={`${HeaderConstants.signUp.title}`}
                    padding={`px-3 py-0`}
                />
            </ButtonGroup>
        </header>
    )
}

export default Header;