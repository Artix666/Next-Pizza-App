import { cn } from "@/lib/utils";
import { FC, ReactElement, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({
  className,
  children,
}): ReactElement => {
  return (
    <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>
  );
};
