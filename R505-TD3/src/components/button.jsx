import { cva } from "class-variance-authority";

const base = "w-fit h-fit";

const buttonVariants = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-blue-100",
        "text-grey-800",
        "hover:bg-blue-200",
      ],
      outline: [
        "bg-none",
        "text-blue-100",
        "border-2",
        "border-blue-100",
        "hover:bg-blue-800",
      ],
      ghost: [
        "bg-blue-800",
        "text-black",
        "opacity-30",
      ],
    },
    size: {
      small: [
        "text-sm", 
        "py-1", 
        "px-2"
      ],
      medium: [
        "text-base", 
        "py-2", 
        "px-4"
      ],
      large: [
        "text-xl", 
        "py-4", 
        "px-8"
      ],
    },
    rounde: {
      rd: "rounded-md",
      full: "rounded-full py-4 px-4",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", rounde: 'rd'}],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    rounde: 'rd',
  },
});

export default function ButtonCVA({
  className,
  intent,
  size,
  rounde,
  children,
  ...props
}) {
  return (
    <button
      className={buttonVariants({ intent, size, rounde, className })}
      {...props}
    >
      {children}
    </button>
  );
}