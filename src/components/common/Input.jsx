import PropTypes from "prop-types";

const Input = ({ className, ...rest }) => {
  return (
    <input className={`block w-full h-[50px] text-[14px] py-2 px-4 bg-lx-gray-400 border border-lx-gray-500 hover:border-black rounded-lg outline-1 focus:outline-black transition-all ${className ? className: ''}`} {...rest}/>
  );
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
