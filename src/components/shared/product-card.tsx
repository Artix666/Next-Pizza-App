import Image from "next/image";
import Link from "next/link";

import { Title } from "./title";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
import { FC, ReactElement } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}): ReactElement => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-65">
          <Image src={imageUrl} width={215} height={215} alt={name}></Image>
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-5">
            от <b>{price}</b> ₽
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
