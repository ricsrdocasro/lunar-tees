import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
    return (
        <div>
            <header className={styles.HeaderContainer}>
                <Link href={`/`}>
                    <button type="button">
                        <img src="/logo.jpg" alt="Lunar Tees" />
                    </button>
                </Link>

                <div className={styles.searchBar}>
                    
                </div>

                <div className={styles.comprasContainer}>
                    <a>
                        <h2>Login</h2>
                    </a>
                    <a>
                        <h2>Cadastre-se</h2>
                    </a>
                    <button type="button">
                        <img src="/carrinho.png" alt="Ir ao carrinho"/>
                    </button>
                </div>
            </header>

            <header className={styles.optionsBar}>
            <Link href={"/pages/sobre"}>
                <button type="button">
                    <h2>Sobre</h2>
                </button>
            </Link>
            <Link href={"/products/all"}>
                <button type="button">
                    <h2>Produtos</h2>
                </button>
            </Link>
            <Link href={"/"}>
                <button type="button">
                    <h2>Ofertas</h2>
                </button>
            </Link>
            <Link href={"/products/lancamentos"}>
                <button type="button">
                    <h2>Lançamentos</h2>
                </button>
            </Link>
            <Link href={"/"}>
                <button type="button">
                    <h2>Contato</h2>
                </button>
            </Link>
            </header>
        </div>
    ); 
}