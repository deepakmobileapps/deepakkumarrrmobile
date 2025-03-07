
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}: ButtonProps) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500";
  
  // Size variations
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  // Variant styles
  const variantStyles = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md active:bg-brand-800",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300",
    outline: "border border-brand-500 text-brand-600 hover:bg-brand-50 active:bg-brand-100",
    text: "text-brand-600 hover:text-brand-700 hover:bg-brand-50 active:bg-brand-100 shadow-none"
  };
  
  // Determine styles based on props
  const buttonStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );
  
  return (
    <button className={buttonStyles} {...props}>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;
