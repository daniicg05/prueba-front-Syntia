interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md";
}

function getScoreColor(score: number) {
  if (score >= 80) return "bg-primary-light text-primary border-primary/20";
  if (score >= 60) return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-600 border-red-200";
}

export function ScoreBadge({ score, size = "md" }: ScoreBadgeProps) {
  const sizeClass = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-2.5 py-1";
  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full border ${getScoreColor(
        score
      )} ${sizeClass} whitespace-nowrap`}
    >
      {score}%
    </span>
  );
}

interface StatusBadgeProps {
  label: string;
  variant?: "default" | "success" | "warning" | "danger";
}

const variantMap = {
  default: "bg-surface-muted text-foreground-muted border-border",
  success: "bg-primary-light text-primary border-primary/20",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  danger: "bg-red-50 text-red-600 border-red-200",
};

export function StatusBadge({ label, variant = "default" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full border ${variantMap[variant]}`}
    >
      {label}
    </span>
  );
}
