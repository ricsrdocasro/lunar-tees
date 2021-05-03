import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { api } from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import styles from './episode.module.scss'
import Link from 'next/link' 
import Head from 'next/head';

type Episode = {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    publishedAt: string;
    duration: number;
    durationAsString: string; 
    url: string;
    description: string;
}

type EpisodeProps = {
    episode: Episode;
}


export default function Episode({ episode }: EpisodeProps) {

    return (
        <div></div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get("episodes", {
        params: {
          _sort: "published_at",
          _order: "desc"
        }
      })
    
    const paths = data.map(episode => {
        return {
            params : {
                slug: episode.id
            }
        }
    })
    
    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const { data } = await api.get(`/episodes/${slug}`)
    
    const episode = {
          id: data.id,
          title: data.title,
          thumbnail: data.thumbnail,
          price: data.price,
          publishedAt: format(parseISO(data.published_at), 'd MMM yy', {locale: ptBR}),
          duration: Number(data.file.duration),
          durationAsString: convertDurationToTimeString(Number(data.file.duration)),
          description: data.description,
          url: data.file.url,
    };

    return {
        props: {
            episode
        },
        revalidate: 60 * 60 *24,
    }
}