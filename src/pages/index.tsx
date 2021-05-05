import styles from './home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Home() {

  const arrowLeft = '/arrow-left.png'
  const arrowRight = '/arrow-right.png'

  return(
    <div>
      <div className={styles.homepage}>
        <Head>
          <title>Home</title>
        </Head>

        <div className={styles.carousel}>
          <Slider
            arrows={true}
            className="center"
            centerPadding="60px"
            focusOnSelect={true}
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            infinite={true}
            autoplay={true}
            autoplaySpeed={3000}
          >
            <div>
              <Image 
                width={450}
                height={500}
                src="/foto-carrosel.jpg"
                objectFit='cover'
              />
            </div>
            <div>
              <Image 
                width={450}
                height={500}
                src="/foto-carrosel2.jpg"
                objectFit='cover'
              />
            </div>
            <div>
              <Image 
                width={450}
                height={500}
                src="/foto-carrosel3.jpg"
                objectFit='cover'
              />
            </div>
            <div>
              <Image 
                width={450}
                height={500}
                src="/foto-carrosel4.jpg"
                objectFit='cover'
              />
            </div>
            <div>
              <Image 
                width={450}
                height={500}
                src="/foto-carrosel5.jpg"
                objectFit='cover'
              />
            </div>
            <div>
              <Image 
                width={450}
                height={500}
                src="/foto-carrosel6.jpg"
                objectFit='cover'
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}