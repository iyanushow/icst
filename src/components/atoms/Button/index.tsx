import clsx from "clsx";
import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "filled" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, variant = "filled", ...props },
  ref
) {
  return (
    <button className={clsx("", className)} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button;
