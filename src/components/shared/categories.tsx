"use client";
import { cn } from "@/lib/utils";
import { FC, ReactElement, useState } from "react";
import Link from "next/link";

interface CategoryProps {
  className?: string;
}

export const Category: FC<CategoryProps> = ({ className }): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {[
        "Пиццы",
        "Комбо",
        "Закуски",
        "Коктейли",
        "Кофе",
        "Напитки",
        "Десерты",
      ].map((category, i) => (
        <Link
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === i &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={i}
          href={""}
          onClick={() => setActiveIndex(i)}
        >
          <span className="cursor-pointer">{category}</span>
        </Link>
      ))}
    </div>
  );
};
