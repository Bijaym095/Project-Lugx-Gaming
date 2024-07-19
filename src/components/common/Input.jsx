import PropTypes from "prop-types";

const Input = ({ className, ...rest }) => {
  return <input {...rest} className={`${className ?? className}`} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
