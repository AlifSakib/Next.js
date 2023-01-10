import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Details About prodct {productId}</div>;
};

export default ProductDetail;
