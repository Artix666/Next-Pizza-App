"use client";

import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";
import { Title } from "./title";
import { Input } from "@/components/ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useQueryFilters, useIngredients, useFilters } from "@/hooks";

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }): ReactElement => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("firstPrice", prices[0]);
    filters.setPrices("secondPrice", prices[1]);
  };
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selectedValues={filters.pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaSizes}
        selectedValues={filters.sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            step={10}
            value={filters.prices.firstPrice}
            onChange={(e) =>
              filters.setPrices("firstPrice", Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={100}
            max={1000}
            step={10}
            placeholder="1000"
            value={filters.prices.secondPrice}
            onChange={(e) =>
              filters.setPrices("secondPrice", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.firstPrice || 0,
            filters.prices.secondPrice || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        name="ingredients"
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedValues={filters.selectedIngredients}
      />
    </div>
  );
};
