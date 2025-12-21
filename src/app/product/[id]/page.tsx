interface ProductPageParams {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageParams) {
  const { id } = await params;

  return <h1>страница продукта: {id}</h1>;
}
