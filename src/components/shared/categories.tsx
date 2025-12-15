"use client";
import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";

import { useCategoryStore } from "@/store/category";
import Link from "next/link";

interface CategoryProps {
  className?: string;
}

export const Category: FC<CategoryProps> = ({ className }): ReactElement => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const categories = [
    { name: "Пиццы", id: 1 },
    { name: "Комбо", id: 2 },
    { name: "Закуски", id: 3 },
    { name: "Коктейли", id: 4 },
    { name: "Кофе", id: 5 },
    { name: "Напитки", id: 6 },
    { name: "Десерты", id: 7 },
  ];
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((category) => (
        <Link
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === category.id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={category.id}
          href={`#${category.name}`}
        >
          <span className="cursor-pointer">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};
