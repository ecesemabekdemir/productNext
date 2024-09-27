import Link from "next/link";

export default async function Products() {
  const { products } = await fetch("https://dummyjson.com/products").then(
    (res) => res.json()
  );
  console.log(products);

  return (
    <div className="productContainer">
      <ul className="productsCard">
        {products.map((x) => (
          <li className="product" key={x.id}>
            <img src={x.thumbnail} alt="" />
            <div className="productTitle">
              <h3>{x.title}</h3>
            </div>
            <div className="product-rating">
              <p>{x.rating}</p>
            </div>
            <div className="productPrice">
              <h4>
                <span>$</span>
                {x.price}
              </h4>
            </div>
            <Link className="detail" href={`/products/${x.id}`}>
              Click to see comments
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
