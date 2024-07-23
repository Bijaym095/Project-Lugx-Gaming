import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/common/Button";

const TopGameCard = ({ imgSrc, imgAltText, category, name }) => {
  return (
    <div className="group relative flex flex-col max-md:max-w-[360px] max-md:mx-auto h-full mb-5 bg-white">
      <picture className="mb-0 overflow-hidden [&_img]:w-full [&_img]:h-[190px] [&_img]:object-cover [&_img]:object-top [&_img]:transition-all [&_img]:duration-300 [&_img]:ease-in-out group-hover:[&_img]:scale-105">
        <source srcSet={imgSrc} type="image/jpg" />
        <img src={imgSrc} width={190} height={190} alt={imgAltText} loading="lazy"
        />
      </picture>
      <div className="grow p-[20px_15px] text-center">
            <span className="inline-block">{category}</span>
            <h3 className="text-[1.125rem]"><Link to="/" className="stretched-link transition-all duration-300 ease-in-out group-hover:text-secondary">{name}</Link></h3>
            <div className="absolute left-1/2 -bottom-5 -translate-x-1/2">
                <Link to="/" className={buttonVariants({variant: "primary", className: "[&:not(:hover)]:text-white group-hover:bg-secondary group-hover:hover:text-secondary group-hover:hover:bg-white group-hover:hover:border-secondary"})}>Explore</Link>
            </div>
        </div>
    </div>
  );
};

export default TopGameCard;

TopGameCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
