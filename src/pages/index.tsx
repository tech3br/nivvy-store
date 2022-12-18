import Banners from "../components/Banners";
import BillsAndUtility from "../components/BillsAndUtility";
import Categories from "../components/Categories";
import Header from "../components/Header";
import TopSearch from "../components/TopSearch";

function Home() {
  return (
    <>
      <Header />
      <TopSearch />
      {/* Body Section */}
      <Banners />
      <BillsAndUtility />
      <Categories />
    </>
  );
}

export default Home;
