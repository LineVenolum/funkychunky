import React, { useState, useEffect } from "react";
import Client from "shopify-buy";

export const ShopContext = React.createContext();
export const ShopConsumer = ShopContext.Consumer;

const client = Client.buildClient({
  domain: "funkychunkystrikk.myshopify.com",
  storefrontAccessToken: "7a5c4599b87dc7df900973d4b72fe943",
});

export const Shop = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState({ lineItems: [] });
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchAllProducts();
    fecthHomeCollection();

    /*





*/
  }, []);

  const checkCheckout = () => {
    if (localStorage.checkout) {
      fetchCheckout(localStorage.checkout);
    } else {
      createCheckout();
    }
  };

  const createCheckout = async () => {
    client.checkout.create().then((checkout) => {
      //   console.log(checkout);
      localStorage.setItem("checkout", checkout.id);
      setCheckout(checkout);
    });
    /*
     */
  };

  //FETCH A CHECKOUT
  const fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        setCheckout(checkout);
      })
      .catch((err) => console.log(err));
  };

  //ADD TO CART
  const addItemToCheckout = async (variantId, quantity) => {
    openCloseCart();
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    return client.checkout
      .addLineItems(checkout.id, lineItemsToAdd)
      .then((checkout) => {
        setCheckout(checkout.lineItems);
        console.log(checkout.lineItems);
      });
  };

  //REMOVE LINE ITEM
  const removeLineItem = async () => {
    const id = checkout.lineItems[0].id;
    await client.checkout.removeLineItems(checkout.id, id).then((checkout) => {
      setCheckout(checkout);
      console.log(checkout);
    });
  };

  const fetchAllProducts = async () => {
    await client.product.fetchAll().then((products) => {
      setProducts(products);
<<<<<<< Updated upstream
      //  console.log(products);
=======
>>>>>>> Stashed changes
    });
  };

  const fetchSingleProduct = (id) => {
    client.product.fetch(id).then((product) => {
      console.log(product);
<<<<<<< Updated upstream
      //  console.log(product.id);
=======
>>>>>>> Stashed changes
      setProduct(product);
    });
  };

  const openCloseCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const fecthHomeCollection = async () => {
    await client.collection.fetchAllWithProducts().then((collections) => {
<<<<<<< Updated upstream
      // Do something with the collections
      // console.log(collections);
      //console.log(collections[0].products);
=======
>>>>>>> Stashed changes
      setCollections(collections[0].products);
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        product: product,
        openCloseCart: openCloseCart,
        checkout: checkout,
        fetchAllProducts: fetchAllProducts,
        fetchSingleProduct: fetchSingleProduct,
        isCartOpen: isCartOpen,
        addItemToCheckout: addItemToCheckout,
        fecthHomeCollection: fecthHomeCollection,
        collections: collections,
        checkCheckout: checkCheckout,
        removeLineItem: removeLineItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
