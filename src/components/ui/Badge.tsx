import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLProps<HTMLSpanElement> {}

const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        `text-xs px-2 py-1 m-1 rounded-xl bg-blue-500 text-slate-300`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
