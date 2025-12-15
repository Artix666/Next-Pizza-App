import {
  Container,
  ProductCard,
  ProductsGroupList,
  Title,
} from "@/components/shared";
import { Filters } from "@/components/shared";

import { TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-20">
          <div className="w-62.5">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                categoryId={1}
                title="Пиццы"
                products={[
                  {
                    id: 1,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 2,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 3,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 4,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 5,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 6,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                ]}
              />
              <ProductsGroupList
                categoryId={2}
                title="Комбо"
                products={[
                  {
                    id: 1,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 2,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 3,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 4,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 5,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                  {
                    id: 6,
                    name: "Пицца с хреном ",
                    imageUrl: "/pizza-demo.avif",
                    items: [{ price: 419 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
