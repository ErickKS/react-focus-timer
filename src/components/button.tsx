import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center h-9 w-24 rounded-md outline-none ring-2 ring-transparent transition-all",
        "text-sm font-medium",
        "focus-visible:ring-white disabled:opacity-60 disabled:cursor-not-allowed",
        { "bg-white text-black hover:bg-white/90 disabled:hover:bg-white": variant === "primary" },
        { "bg-red text-white hover:bg-red/90": variant === "secondary" }
      )}
      {...props}
    >
      {children}
    </button>
  );
}
