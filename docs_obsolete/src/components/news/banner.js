import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion"
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import news from "./news.json";

export default function NewsSlider() {
  return (
    <section className="news-container">
        <motion.h2
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
            viewport={{ once: true}}
            style={{marginBottom: 30}}
        >
            Company News
        </motion.h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },   // mobile
          768: { slidesPerView: 3 }, // desktop
        }}
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ width: "100%", display: "flex", marginBottom: 40, }}>
                <Link to={`/news/${item.id}`} style={{ width: "100%", textDecoration: "none" }}>
                    <motion.div 
                        className="news-card"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true}}
                    >
                        <div>
                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{ ease: "easeOut", duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true}}
                                className="news-card-date"
                            >
                                {item.date}
                            </motion.p>
                            <motion.h3
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true}}
                                className="news-card-title"
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true}}
                                className="news-card-excerpt"
                            >
                                {item.excerpt}
                            </motion.p>
                        </div>
                        <motion.div 
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{ ease: "easeOut", duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true}}
                            className="button-wrapper"
                            style={{bottom: 0}}
                        >
                            <Link to={`/news/${item.id}`} className="button is-grey w-button">
                                Read more
                            </Link>
                        </motion.div>
                    </motion.div>
                </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}