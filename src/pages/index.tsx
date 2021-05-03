import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api';
import styles from './home.module.scss';
import Head from 'next/head';
import { Slide } from 'react-slideshow-image';

export default function Home() {

  return(
    <div>
      <div className={styles.homepage}>
        <Head>
          <title>Home</title>
        </Head>

        <section className={styles.latestEpisodes}> 
          <div className={styles.thumbnailContainer}>
          </div>
        </section>
      </div>
    </div>
  );
}
