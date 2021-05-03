import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';
import styles from './home.module.scss';
import Head from 'next/head';
import { Slide } from 'react-slideshow-image';

type Episode = {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    publishedAt: string;
    duration: number;
    durationAsString: string; 
    url: string;
}

type HomeProps = {
  latestEpisodes: Episode[];
}


export default function Home({latestEpisodes}: HomeProps) {

  return(
    <div>
      <div className={styles.homepage}>
        <Head>
          <title>Home</title>
        </Head>

        <section className={styles.latestEpisodes}> 
          <div className={styles.thumbnailContainer}>
            <ul>
                {latestEpisodes.map((Episode) => {
                    return (
                      <Slide>
                        <div className="each-slide">
                          <div style={{'backgroundImage': `url(${Episode.thumbnail[0]})`}}>
                            <span>Slide 1</span>
                          </div>
                        </div>
                        <div className="each-slide">
                          <div style={{'backgroundImage': `url(${Episode.thumbnail[1]})`}}>
                            <span>Slide 2</span>
                          </div>
                        </div>
                      </Slide> 
                      )
                    })}
            </ul>
          </div>
        </section>

        <section>


        </section>
      </div>
    </div>
  );
}

export const getStaticProps : GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc"
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      price: episode.price,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url
    }
  })

  const latestEpisodes = episodes.slice(0, 2);

  return {
    props: {
      latestEpisodes,
    },
    revalidate: 60*60*8,
  }
}