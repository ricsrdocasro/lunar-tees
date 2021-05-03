import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
        locale: ptBR
    });


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
            <Link href={"/pages/sobre"}>
            <button type="button">
                <h2>Sobre</h2>
            </button>
            </Link>
            <Link href={"/pages/capitaosovietico"}>
            <button type="button">
                <h2>Sobre</h2>
            </button>
            </Link>
            <Link href={"/pages/portfolio"}>
            <button type="button">
                <h2>Sobre</h2>
            </button>
            </Link>
            <button type="button">
                <h2>Sobre</h2>
            </button>
        </header>
      </div>
    ); 
}