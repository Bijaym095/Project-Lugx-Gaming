import PropTypes from "prop-types";
import Icon from "@/components/common/Icon";

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="group relative p-[2.1875rem] text-center rounded-lg shadow-[0_0_15px_rgba(0,0,0,.15)]">
      <i className="inline-grid place-items-center w-[90px] h-[90px] mb-4 text-white bg-secondary  rounded-full transition-all group-hover:bg-primary">
        <Icon icon={icon} size={32}/>
      </i>
      <strong className="block">
        <a href="/" className="stretched-link  text-[#1e1e1e]">
          {title}
        </a>
      </strong>
    </div>
  );
};

export default FeatureCard;

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
