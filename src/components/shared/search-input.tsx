"use client";

import { useEffect, useRef, useState, type FC, type ReactElement } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import Image from "next/image";

interface SearchInputProps {
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  className,
}): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useDebounce(
    () => {
      Api.products.search(searchValue).then((items) => {
        setProducts(items);
      });
    },
    200,
    [searchValue]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchValue("");
    setProducts([]);
  };

  useClickAway(divRef, () => {
    setFocused(false);
  });
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30 " />
      )}

      <div
        ref={divRef}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400 " />
        <input
          className="rounded-xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((p) => (
              <Link
                key={p.id}
                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-primary/10"
                href={`/product/${p.id}`}
                onClick={onClickItem}
              >
                <Image src={p.imageUrl} alt={p.name} width={32} height={32} />
                <span>{p.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
