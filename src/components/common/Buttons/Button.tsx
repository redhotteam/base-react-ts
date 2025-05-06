import { useState } from "react";

interface SubmitButtonProps {
  text?: string;
  title?: string;
  type?: "submit" | "reset" | "button" | undefined;
  id?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  delayed?: boolean;
}
export const Button: React.FC<SubmitButtonProps> = ({
  text = "",
  title = "",
  id = "",
  type = "button",
  className,
  onClick,
  disabled,
  icon,
  delayed,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      event.preventDefault(); // Prevent event propagation
      onClick();
    }
    if (delayed) {
      setIsDisabled(true);
      setTimeout(() => setIsDisabled(false), 2000); // Re-enable after 3 seconds
    }
  };

  return (
    <button
      type={type}
      id={id}
      className={`cursor-pointer rounded-4xl border border-black p-2 transition-colors duration-300 lg:hover:border-blue-500 ${className} ${disabled || isDisabled ? "cursor-not-allowed [&&&]:bg-gray-500 [&&&]:hover:bg-gray-600" : ""}`}
      onClick={handleClick}
      disabled={!!disabled || isDisabled}
      title={title ? title : text}
    >
      {icon && icon}
      {text && <span>{text}</span>}
    </button>
  );
};
