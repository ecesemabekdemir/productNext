import Link from "next/link";

export default async function Category({ params }) {
  const { category, id } = params;
  const { products } = await fetch(
    `https://dummyjson.com/products/category/${category}`
  ).then((res) => res.json());

  return (
    <div className="productContainer ">
      <ul className="productsCard">
        {products.map((product) => (
          <li className="product " key={product.id}>
            <img src={product.thumbnail} alt="" />
            <div className="productTitle">
            <h3>{product.title}</h3>
            </div>
            <div className="product-rating">
              <p>{product.rating}</p>
            </div>
            <div className="productPrice">
              <h4><span>$</span>{product.price}</h4>
            </div>
            <Link className="detail" href={`/products/${id}`}>
              Click to see comments
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
