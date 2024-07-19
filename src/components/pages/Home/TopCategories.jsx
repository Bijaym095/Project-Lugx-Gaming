import CategoriesCard from "@/components/shared/CategoriesCard";
import { topCategory } from "@/data";

const TopCategories = () => {
  return (
    <section className="container py-10 lg:py-16">
      <header className="text-center mb-8">
        <small className="block font-bold text-[0.875rem] text-primary uppercase">
          CATEGORIES
        </small>
        <h2>Top Categories</h2>
      </header>

      <div className="flex flex-wrap justify-center -mx-3 gap-y-6">
        {topCategory.map((category, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-3">
            <CategoriesCard {...category}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
