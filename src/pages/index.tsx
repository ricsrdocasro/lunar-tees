import styles from './home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Home() {


  return(
    <div>
      <div className={styles.homepage}>
        <Head>
          <title>Home</title>
        </Head>

        <div className={styles.carousel}>
          <Slider
            width={150}
            dots={false}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
          >
            <Image
              width={150}
              height={150}
              objectFit="cover"
              src="/gabi-foto.jpg" 
              alt="Gabriela"
            />
            <Image 
              width={150}
              height={150}
              objectFit="cover"
              src="/ricardo-foto(eu).jpg" 
              alt="Gabriela"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}