"use client";
import { FC, ReactElement, RefObject, useEffect, useRef } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  items: { price: number }[];
}

interface ProductsGroupListProps {
  title: string;
  products: Product[];
  listClassName?: string;
  categoryId?: number;
  className?: string;
}

export const ProductsGroupList: FC<ProductsGroupListProps> = ({
  className,
  title,
  products,
  listClassName,
  categoryId,
}): ReactElement => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(
    intersectionRef as RefObject<HTMLDivElement>,
    {
      threshold: 0.4,
    }
  );
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId ?? 1);
      console.log(categoryId);
    }
  }, [intersection, categoryId, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <ul className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
