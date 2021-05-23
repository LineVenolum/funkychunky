import { useContext } from "react";
import styles from "./Products.module.scss";
import { ShopContext } from "../../shop/Shop";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const { products, addItemToCheckout } = useContext(ShopContext);

  return (
    <div className={styles.products}>
      {products.map((product) => {
        return (
          <ProductCard
            id={product.id}
            imagetwo={product.images[1].src}
            image={product.images[0].src}
            title={product.title}
            price={parseInt(product.variants[0].price)}
            description={product.description}
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          />
        );
      })}
    </div>
  );
};
