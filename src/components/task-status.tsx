import clsx from "clsx";

interface TaskStatusProps {
  status: "concluded" | "in-progress" | "interrupted";
}

export function TaskStatus({ status }: TaskStatusProps) {
  return (
    <span
      className={clsx(
        "flex items-center gap-2",
        "before:content-[''] before:size-2 before:rounded-full",
        { "before:bg-[#04D361]": status === "concluded" },
        { "before:bg-[#FBA94C]": status === "in-progress" },
        { "before:bg-[#AB222E]": status === "interrupted" }
      )}
    >
      {status === "concluded" && "Concluded"}
      {status === "in-progress" && "In Progress"}
      {status === "interrupted" && "Interrupted"}
    </span>
  );
}
