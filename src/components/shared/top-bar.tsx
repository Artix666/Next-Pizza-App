import { cn } from "@/lib/utils";

import { FC, ReactElement } from "react";
import { Category } from "./categories";
import { SortPopup } from "./sort-popup";
import { Container } from "./container";

interface TopBarProps {
  className?: string;
}

export const TopBar: FC<TopBarProps> = ({ className }): ReactElement => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Category />
        <SortPopup />
      </Container>
    </div>
  );
};
