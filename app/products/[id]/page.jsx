import ClientSideComponent from "@/client";
import { notFound } from "next/navigation";

export default async function ProductsDetail({ params }) {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/products/${id}`); // idsine göre mesajın detayı

  if (response.status === 500) {
    throw new Error("Sunucuda bir hata oluştu"); // istediğimiz bir hata mesajını atmamızı sağlıyor.
  }

  if (!response.ok) {
    // 200 degilse not found  cağır
    return notFound();
  }

  const data = await response.json();

  console.log(response);

  return (
    <div className="productDetailContainer">
      <img src={data.thumbnail} alt="" />
      <div className="productDescription">
        <p>Products Company</p>
        <h1>{data.title}</h1>
        <h4>{data.description}</h4>
        <div className="prices">
          <div className="discount">
            <h3>${data.price}</h3>
            <h5>50%</h5>
          </div>
          <h6>$250.00</h6>
        </div>
        <div className="btns">
          <ClientSideComponent stock={data.stock} />
          <button className="addBtn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
