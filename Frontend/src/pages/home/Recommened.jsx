import React, { useState , useEffect} from 'react';
import BookCard from "../Book/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Navigation , Pagination} from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';
const Recommened = () => {
  const { data: books = [] } = useFetchAllBooksQuery();
  return (
    <div className="py-4 ">
      <h2 className="text-3xl font-semibold mb-6">Recommened For You</h2>
      <Swiper
        navigation={true} 
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
        {books.length > 0 && books.slice(8, 18).map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Recommened
