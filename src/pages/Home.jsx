import Features from "@/components/pages/Home/Features";
import MostPlayedGames from "@/components/pages/Home/MostPlayedGames";
import TopCategories from "@/components/pages/Home/TopCategories";
import TrendingGames from "@/components/pages/Home/TrendingGames";

const Home = () => {
  return (
    <>
      <Features />
      <TrendingGames />
      <MostPlayedGames />
      <TopCategories />
    </>
  );
};

export default Home;
