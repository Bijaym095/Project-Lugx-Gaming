import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/common/Button";
import TopGameCard from "@/components/shared/TopGameCard";
import { topGames } from "@/data";

const MostPlayedGames = () => {
  return (
    <section className="bg-lx-gray rounded-[5rem] mt-10">
        <div className="container py-8 md:py-14">
            <header className="flex justify-between items-center gap-6 mb-6">
                <div>
                    <small className="block font-bold text-[0.875rem] text-primary uppercase">TOP GAMES</small>
                    <h2>Most Played</h2>
                </div>
                <div>
                <Link to="/" className={buttonVariants({variant: "primary", className: "[&:not(:hover)]:text-white"})}>View All</Link>
                </div>
            </header>

            <div className="flex flex-wrap justify-center gap-y-12 -mx-3">
                {topGames.map((topGame, index)=> (
                    <div key={index} className="w-full md:w-1/3 lg:w-1/4 px-3">
                        <TopGameCard {...topGame}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MostPlayedGames;