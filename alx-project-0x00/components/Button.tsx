// components/Button.tsx
import React from "react";
import classNames from "classnames";
import type { ButtonSize, ButtonShape } from "@/interfaces";

interface ButtonProps {
  title: string;
  size?: ButtonSize;
  shape?: ButtonShape;
}

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md" }) => {
  const sizeClasses: Record<ButtonSize, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const buttonClass = classNames(
    "bg-blue-600 text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-700",
    sizeClasses[size],
    shape
  );

  return <button className={buttonClass}>{title}</button>;
};

export default Button;