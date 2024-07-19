import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const GamesCard = ({ game }) => {
  const {
    totalPrice,
    totalPriceAfterDiscount,
    imgUrl,
    imgAltText,
    category,
    name,
  } = game;

  return (
    <div className="group relative flex flex-col max-md:max-w-[360px] max-md:mx-auto h-full bg-lx-gray rounded-[1.5625rem]">
      <div className="relative rounded-[1.5625rem] overflow-hidden">
        <span className="absolute z-[1] top-5 right-5 inline-block p-2.5 font-bold text-white bg-secondary rounded">
          {totalPriceAfterDiscount && <em className="block line-through font-normal not-italic">${totalPrice}</em>}
          ${totalPriceAfterDiscount ? totalPriceAfterDiscount : totalPrice}
        </span>
        <picture className="mb-0 [&_img]:w-full [&_img]:h-[214px] [&_img]:object-cover [&_img]:object-top [&_img]:transition-all [&_img]:duration-300 [&_img]:ease-in-out [&_img]:group-hover:scale-105">
          <source srcSet={imgUrl} type="image/jpg" />
          <img src={imgUrl} width="306" height="214" alt={imgAltText} loading="lazy" />
        </picture>
      </div>

      {/* Card Content */}
      <div className="grow flex justify-between gap-4 p-5">
        <div>
          <span className="inline-block text-[0.875rem] mb-1">{category}</span>
          <h3 className="text-[1.0625rem]">
            <NavLink to="/" className="stretched-link text-black group-hover:text-secondary">
              {name}
            </NavLink>
          </h3>
        </div>

        <NavLink to="/" className="block w-10 h-10 rounded-full bg-primary group-hover:bg-secondary flex-none"></NavLink>
      </div>
      {/* Card Content */}
    </div>
  );
};

export default GamesCard;

GamesCard.propTypes = {
  game: PropTypes.shape({
    totalPrice: PropTypes.string.isRequired,
    totalPriceAfterDiscount: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imgAltText: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
