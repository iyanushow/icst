import clsx from "clsx";
import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "filled" | "outline";
  size?: "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, size = "sm", variant = "filled", ...props },
  ref
) {
  return (
    <button
      className={clsx(getBtnStyles(variant, size, className))}
      ref={ref}
      {...props}>
      {children}
    </button>
  );
});

export default Button;

function getBtnStyles(
  variant: ButtonProps["variant"],
  size: ButtonProps["size"],
  className: string = ""
) {
  const sharedStyles =
    "rounded-lg cursor-pointer px-4 text-xs font-bold leading-6 flex items-center justify-center";

  return [
    sharedStyles,
    ...getBtnSizeStyles(size),
    ...getBtnVariantStyles(variant, className),
  ];
}

function getBtnSizeStyles(size: ButtonProps["size"]) {
  switch (size) {
    case "lg":
      return ["py-2 w-[148px] h-8 text-sm font-bold leading-4"];
    default:
      return ["w-[88px] h-[28px] text-xs font-bold leading-6"];
  }
}

function getBtnVariantStyles(
  variant: ButtonProps["variant"],
  className: string = ""
) {
  switch (variant) {
    case "filled":
      return ["border-none text-white py-1.5", className];
    default:
      return ["border-2 bg-transparent py-1", className];
  }
}

// function getCondStyles(aiz:type) {

// }
