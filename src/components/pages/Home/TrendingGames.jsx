import { Link } from "react-router-dom";
import GamesCard from "@/components/shared/GamesCard";
import { trendingGames } from "@/data";
import { buttonVariants } from "@/components/common/Button";

const TrendingGames = () => {
  return (
    <section className="container py-10 lg:py-16">
      <header className="flex justify-between items-center gap-6 mb-6">
        <div>
          <small className="block font-bold text-[0.875rem] text-primary uppercase">TRENDING</small>
          <h2>Trending Games</h2>
        </div>
        <div>
          <Link to="/" className={buttonVariants({variant: "primary", className: "[&:not(:hover)]:text-white"})}>View All</Link>
        </div>
      </header>

      <div className="flex flex-wrap justify-center gap-y-6 -mx-3">
        {trendingGames.map((game, index) => (
          <div className="w-full md:w-1/2 lg:w-1/4 px-3" key={index}>
            <GamesCard game={game}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;

