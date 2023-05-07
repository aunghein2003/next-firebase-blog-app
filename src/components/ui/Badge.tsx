import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLProps<HTMLSpanElement> {}

const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        `text-[10px] md:text-xs px-1.5 md:px-2 py-1 mr-1 rounded-xl shadow-sm bg-blue-500 text-slate-50 tracking-wide`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
