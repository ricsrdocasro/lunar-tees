import Head from 'next/head';
import Link from 'next/link';
import styles from './sobre.module.scss';

export default function sobre() {
    return (
        <div className={styles.sobre}>
            <div>
                <Head>
                    <title>Sobre</title>
                </Head>
            </div>
            <div className={styles.parteSobre}>
                <h1>Sobre</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores quos perspiciatis commodi eaque ut obcaecati atque, sunt minima corrupti a laudantium est nobis ab aliquid quas blanditiis assumenda quo.
                </p>
            </div>
            <div className={styles.parteQuemSomos}>
                <h1 id="qs?">Quem Somos?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores quos perspiciatis commodi eaque ut obcaecati atque, sunt minima corrupti a laudantium est nobis ab aliquid quas blanditiis assumenda quo.
                </p>
                <ul>
                    <img src='/gabi-foto.jpg'/>
                    <li>
                        <h1>Gabriela de Castro</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi, iste vel aliquid neque, quam earum ab labore veritatis velit sed delectus quo sequi vitae molestias? Exercitationem nulla beatae magni.</p>
                        <Link href="https://www.instagram.com/gaabicastrop/">
                            <button>
                                <img src="/instagram-icon.png" alt="Instagram"/>
                            </button>
                        </Link>
                    </li>
                    <img src='/ricardo-foto(eu).jpg'/>
                    <li>
                        <h1>Ricardo de Castro</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi, iste vel aliquid neque, quam earum ab labore veritatis velit sed delectus quo sequi vitae molestias? Exercitationem nulla beatae magni.</p>
                        <Link href="https://www.instagram.com/ricsrdo.casro/">
                            <button>
                                <img src="/instagram-icon.png" alt="Instagram"/>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}