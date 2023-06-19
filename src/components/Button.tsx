import Link from "next/link";
import clsx from "clsx";

const baseStyles: Record<string, string> = {
  solid:
    "inline-flex justify-center rounded-full py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  gradient:
    "inline-flex justify-center rounded-full py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-full border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles: Record<string, string> = {
  link: "bg-transparent text-white hover:text-metloblue/100",
  solid:
    "relative overflow-hidden bg-metloblue text-white before:absolute before:inset-0 active:before:bg-transparent hover:bg-metlobluehover active:text-white/80 before:transition-colors",
  gradient:
    "bg-gradient-to-r from-metloblue to-metloblueGradientEnd text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
  outline:
    "bg-dark border-metloblue text-metloblue hover:border-metlobluehover",
};

interface ButtonProps {
  variant?: string;
  color?: string;
  className?: string;
  href?: string;
  [e: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "gray",
  className,
  href,
  ...props
}) => {
  className = clsx(baseStyles[variant], variantStyles[variant], className);

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};

export default Button;
