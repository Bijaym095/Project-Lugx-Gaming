import PropTypes from "prop-types";

const TextArea = ({className, ...rest}) => {
  return (
      <textarea className={`w-full h-[135px] p-4 bg-lx-gray-400 border border-lx-gray-500 rounded-lg hover:border-black transition-all resize-none  ${className ? className : ""}`} {...rest}></textarea>
  );
};

TextArea.propTypes = {
    className: PropTypes.string,
  };

export default TextArea;
