import { useSearchParams } from "next/navigation";

import { useSet } from "react-use";
import { useCallback, useMemo, useState } from "react";

export interface PriceProps {
  firstPrice?: number;
  secondPrice?: number;
}
export interface SearchParamsProps extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setPizzaSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof SearchParamsProps,
    string
  >;

  /* фильтр ингредиентов */
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  /* фильтр размера пиццы */
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );
  /* фильтр типа пиццы */
  const [pizzaTypes, { toggle: toggleTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );
  /* фильтр цены пиццы */
  const [prices, setPrices] = useState<PriceProps>({
    firstPrice: Number(searchParams.get("firstPrice")) ?? undefined,
    secondPrice: Number(searchParams.get("secondPrice")) ?? undefined,
  });

  const updatePrice = useCallback((name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return useMemo(
    () => ({
      selectedIngredients,
      sizes,
      pizzaTypes,
      prices,
      setPrices: updatePrice,
      setSelectedIngredients: toggleIngredients,
      setPizzaSizes: toggleSizes,
      setPizzaTypes: toggleTypes,
    }),
    [
      sizes,
      pizzaTypes,
      prices,
      selectedIngredients,
      updatePrice,
      toggleIngredients,
      toggleSizes,
      toggleTypes,
    ]
  );
};
