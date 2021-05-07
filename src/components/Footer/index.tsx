import Link from 'next/link';
import styles from './styles.module.scss';

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <img src="/logo.jpg" alt="logo Lunar Tees"/>
            <div className={styles.navegar}>
                <ul>
                    <header>
                        <h3>Navegar</h3>
                    </header>
                    <a href="/">
                        <h5>Home</h5>
                    </a>
                    <a href="/products/all">
                        <h5>Todos os produtos</h5>
                    </a>
                </ul>
                <ul>
                    <header>
                        <h3>Sobre</h3>
                    </header>
                    <a href='/pages/sobre#qs?'>
                        <h5>Quem somos?</h5>
                    </a>
                </ul>
            </div>
            <div className={styles.redes}>
                <ul>
                    <header>
                        <h3>Redes</h3>
                    </header>
                    <div className={styles.icons}>
                        <Link href="https://www.instagram.com/lunar.tees/">
                            <button>
                                <img src="/instagram-icon.png" alt="Instagram"/>
                            </button>
                        </Link>
                        <Link href="/">
                            <button>
                                <img src="/facebook-icon.png" alt="Facebook"/>
                            </button>
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=5555991911979&text=Quero%20comprar%20minha%20tee%20%E2%9C%A8">
                            <button>
                                <img src="/whatsapp-icon.png" alt="Whatsapp"/>
                            </button>
                        </Link>
                    </div>
                </ul>
            </div>
        </footer>
    )
}