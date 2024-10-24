import React from 'react';

interface ButtonProps {
  label: string;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, href, className }) => {
  const baseClasses = "inline-block text-lg font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out";
  const buttonStyle = "bg-blue-500 text-white hover:bg-blue-700";

  const combinedClasses = `${baseClasses} ${buttonStyle} ${className}`;

  return href ? (
    <a href={href} className={combinedClasses}>
      {label}
    </a>
  ) : (
    <button className={combinedClasses}>
      {label}
    </button>
  );
};

export default Button;
