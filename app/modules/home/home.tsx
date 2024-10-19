import Header from "@/app/shared/widgets/header/header";
import Banner from "./features/banner";
import Branding from "./features/branding";
import Benefits from "./features/benefits";


const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
    </div>
  );
};

export default Home;
