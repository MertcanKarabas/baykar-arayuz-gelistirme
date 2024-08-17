import { MasterCSS } from "../../../assets/css/masterCSS";
import Trophy from "../../../assets/icon/iconoir/trophy";
import Tunnel from "../../../assets/icon/iconoir/tunnel";
import Tv from "../../../assets/icon/iconoir/tv";
import Rectangle25 from "../../../assets/rectangels/rectangle25";
import Rectangle26 from "../../../assets/rectangels/rectangle26";
import Rectangle27 from "../../../assets/rectangels/rectangle27";
import Group from "./Group";

const SecondSection = () => {
    return (
        <section className={`px-20 py-20 ${MasterCSS.colors}`}>
            <div className="grid grid-cols-3 gap-14 ">
                <Group 
                    rectangle={<Rectangle25 />}
                    icon={<Trophy />}
                    title='Nibh viverra'
                    description='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
                />
                <Group 
                    rectangle={<Rectangle26 />}
                    icon={<Tunnel />}
                    title='Cursus amet'
                    description='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
                />
                <Group 
                    rectangle={<Rectangle27 />}
                    icon={<Tv />}
                    title='Ipsum fermentum'
                    description='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
                />
            </div>
        </section>
    )
}

export default SecondSection;