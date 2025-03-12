import React, { useEffect, useState } from "react";
import BookCart from "../Book/BookCart";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Navigation , Pagination} from 'swiper/modules';

const categories = [
  "choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data); // Initially show all books
      });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;

    setSelectedCategory(category);

    // Filter books based on the selected category
    if (category === "choose a genre") {
      setFilteredBooks(books); // Show all books if no specific category is chosen
    } else {
      const filtered = books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
      console.log("Filtered Books:", filtered); // Log to check what's being filtered
      setFilteredBooks(filtered);
    }
  };

  return (
    <div className="py-16 ">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* Category Filtering */}
      <div className="mb-8 flex items-center">
        <select
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
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
        {filteredBooks.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCart book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
