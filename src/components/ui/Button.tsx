import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariant = cva(
  `p-1 px-2 md:p-2 md:px-4 border rounded-md shadow-md inline-flex justify-center items-center text-base text-slate-200 transition-colors duration-75 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95`,
  {
    variants: {
      variant: {
        primary: `bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-500`,
        secondary: `bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:ring-slate-500`,
        danger: `bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-red-500`,
      },
      outline: {
        true: `bg-transparent text-slate-500 hover:text-slate-200 border`,
      },
      // size: {
      //   default: `py-2 px-4`,
      //   sm: `p-2 h-9`,
      //   lg: `px-6 py-3`,
      // },
    },
    defaultVariants: {
      variant: "primary",
    },
    compoundVariants: [
      {
        variant: "primary",
        outline: true,
        class: `border-blue-500`,
      },
      {
        variant: "secondary",
        outline: true,
        class: `border-slate-500`,
      },
      {
        variant: "danger",
        outline: true,
        class: `border-red-500`,
      },
    ],
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

const Button: React.FC<ButtonProps> = ({
  variant,
  // size,
  outline,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariant({ variant, outline, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
