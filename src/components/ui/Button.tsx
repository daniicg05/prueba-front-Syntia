import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-muted shadow-sm",
  ghost: "text-foreground-muted hover:text-foreground hover:bg-surface-muted",
  danger: "bg-destructive-light text-destructive hover:bg-red-100 border border-red-200",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-4 py-2.5 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}
      {children}
    </button>
  );
}
