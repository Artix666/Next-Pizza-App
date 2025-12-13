"use client";
import { FC, ReactElement } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "@/components/ui";

type Item = FilterCheckboxProps;

interface CheckboxFiltersGroupProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: FC<CheckboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}): ReactElement => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, i) => (
          <FilterCheckbox
            key={i}
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
    </div>
  );
};
