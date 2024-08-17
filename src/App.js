import FifthSection from "./components/Sections/FifthSection/FifthSection";
import FirstSection from "./components/Sections/FirstSection/FirstSection";
import ForthSection from "./components/Sections/ForthSection/ForthSection";
import SecondSection from "./components/Sections/SecondSection/SecondSection";
import SixthSection from "./components/Sections/SixthSection/SixthSection";
import ThirdSection from "./components/Sections/ThirdSection/ThirdSection";
import MasterLayout from "./layouts/MasterLayout";

function App() {
  return (
    <div className={``}>
      <MasterLayout>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
      </MasterLayout>
    </div>
  );
}

export default App;
