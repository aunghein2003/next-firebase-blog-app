import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          `w-full h-10 py-2 px-3 rounded-xl shadow-sm placeholder:text-slate-400 bg-transparent border border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
