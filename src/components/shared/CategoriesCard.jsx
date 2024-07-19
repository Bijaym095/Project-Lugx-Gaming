import PropTypes from "prop-types"

const CategoriesCard = ({category, imgSrc, imgAltText}) => {
  return (
    <div className="flex flex-col max-sm:max-w-[360px] max-sm:mx-auto h-full bg-secondary rounded-[1.5625rem] overflow-hidden">
        <span className="grow block font-semibold text-[1.125rem] p-4 lg:p-[1.375rem] text-center">
          <a href="#" className="!text-white">{category}</a>
        </span>
        <picture className="mb-0 [&_img]:w-full [&_img]:h-[190px] [&_img]:object-cover [&_img]:rounded-[1.5625rem]">
          <source srcSet={imgSrc} type="image/jpg" />
          <img src={imgSrc} width={204} height={190} alt={imgAltText} loading="lazy" />
        </picture>
    </div>
  )
}

export default CategoriesCard;

CategoriesCard.propTypes = {
  category: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
}