import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex justify-between items-center min-w-[6rem] py-2 px-5 font-medium text-white bg-primary border border-transparent rounded-[5rem] text-center align-top transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:bg-primary/80 hover:opacity-100",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-primary hover:text-primary hover:bg-white hover:border-primary",
      },
    },
  }
);

const Button = (props) => {
  const { variant, className, children, ...rest } = props;

  return (
    <button {...rest} className={buttonVariants({ variant, className })} >
      {children}
    </button>
  );
};

Button.displayName = "Button";

Button.propTypes = {
  variant: PropTypes.oneOf(["primary"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
