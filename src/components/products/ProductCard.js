import { useState, useEffect } from "react";
import Client from 'shopify-buy';
import styles from './ProductCard.module.scss';
import {Link} from "react-router-dom";


const client = Client.buildClient({
  domain: 'funkychunkystrikk.myshopify.com',
  storefrontAccessToken: '7a5c4599b87dc7df900973d4b72fe943'
});


export const ProductCard = () => {

  const [products, setProducts] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

	useEffect( () => {
  
	  client.product.fetchAll().then((products) => {

		console.log(products);
		setProducts(products);
	  });
  
	}, [])


  function handleMouseEnter(e){
    setIsHovering(true);
  }

  function handleMouseLeave(){
    setIsHovering(false);
  }


 return( 
 <div>
    {products.map((product) => {
      return (
        <div  className={styles.productCard} key={product.id}>
          {isHovering ? <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.cardWrapper}> <div className={styles.expandedCard}>
        <div className={styles.productCard} key={product.id}>
          <section className={styles.imageSection}>
                     <img src={product.images[0].src} alt="something"></img>
         </section>
         <section className={styles.information}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price} >{product.variants[0].price}</p>
          </section>
          <section className={styles.information}>
            <p>{product.description}</p>
          </section>
          <section className={styles.information}>
            <button> <Link className={styles.link} to={`/detail/{${product.id}`}>OPPSKRIFTER</Link></button>
            <button>MER INFO</button>
          </section>
        </div> </div> </div> : <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.cardWrapper}>  <div  className={styles.productCard} key={product.id}>
          <section>
                     <img src={product.images[0].src} alt="something"></img>
         </section>
         <section className={styles.information}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price} >{product.variants[0].price}</p>
          </section>
        </div> </div> }
        </div> 
      )
    })}
  </div>

 )
}