"use client";
import { cn } from "@/lib/utils";
import { FC, ReactElement, useState } from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "@/components/ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }): ReactElement => {
  const [isPizzasBasket, setIsPizzasBasket] = useState(true);

  return (
    <div className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href={"/"}>
          <Image src="logo.svg" width={202} height={51} alt="Логотип" />
        </Link>
        {/* <Input width={764} placeholder="Поиск пиццы..." /> */}
        <div className="flex items-center gap-4">
          <Button className="flex items-center gap-1" variant={"outline"}>
            <User size={16} />
            Войти
          </Button>
          {isPizzasBasket ? (
            <Button className="group relative flex items-center justify-between gap-0.5">
              <b>520 ₽</b>
              <span className="h-full w-px bg-white/30 mx-3"></span>
              <span className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} />
                <span>3</span>
              </span>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          ) : (
            <Button variant={"outline"}>
              <ShoppingCart size={16} />
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};
