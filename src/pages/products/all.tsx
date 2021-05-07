import styles from "./all.module.scss"
import Link from "next/link"
import { GetStaticProps } from "next"
import { api } from "../../services/api"
import Image from "next/image"

type products = {
    slug: string; 
    title: string; 
    price: number; 
    published_at: string; 
    thumbnail: string; 
    description: string;
    
}

type HomeProps = {
    productList: products[];
  }

function allProducts({productList}:HomeProps) {
    return (
        <div>
        {productList.map(product => {
            return (
                <div key={product.slug} className={styles.wholeProduct}>
                    <Link href={`${product.slug}`}>
                            <div className={styles.productRow}>
                                <button>
                                    <div className={styles.productColumnImage}>
                                        <Image
                                            width={250}
                                            height={250}
                                            objectFit="cover"
                                            src={product.thumbnail} 
                                            alt={product.title}
                                        />
                                    </div>
                                </button>
                                <div className={styles.productColumn}>
                                    <a><strong>{product.title}</strong></a> <p>{product.price}</p>
                                </div>
                            </div>
                    </Link>
                </div>
        )}
    )}
    </div>
    )
}

export const getStaticProps : GetStaticProps = async () => {
    const { data } = await api.get("products", {
      params: {
        _limit: 12,
        _sort: "price",
      }
    })
  
    const products = data.map(product => {
      return {
        slug: product.slug,
        title: product.title, 
        price: (Math.round(product.price * 100) / 100).toFixed(2),
        published_at: product.published_at,
        thumbnail: product.thumbnail, 
        description: product.description,
      }
    })

    const productList = products.slice(0, products.length);
  
    return {
      props: {
        productList,
      },
      revalidate: 60,
    }
  }

export default allProducts

export function page(allProducts){
    return (
        allProducts()
    )
}