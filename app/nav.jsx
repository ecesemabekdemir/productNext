import Link from "next/link";
export default function Nav() {
  return (
    <>
      <div className="nav">
        <Link href="/">Home</Link>
        <Link href="/products">Product</Link>
        <Link href="/products/category/beauty">Beauty</Link>
        <Link href="/products/category/groceries">Groceries</Link>
        <Link href="/products/category/fragrances">Fragrances</Link>
        <Link href="//products/category/furniture">furniture</Link>
      </div>
    </>
  );
}
