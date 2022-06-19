import React from "react";
import "./Testimonial.css";
import avatar1 from "../../assets/avatar111";
// import avatar2 from "../../assets/avatar2.jpg";
// import avatar3 from "../../assets/avatar3.jpg";
// import avatar5 from "../../assets/avatar5.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: avatar1,
    name: "Prosperity Onah",
    review:
      "She is excellent and hardworking. Very good at what she does. It was nice working with her. she completes her task and ensures all the implementation are correct. Her code structure is great and her reviews and documentation are amazing",
  }
  //  {
  //   avatar: avatar2,
  //   name: "John Smith",
  //   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo repellat hic tempore neque"
  // },
  // {
  //   avatar: avatar3,
  //   name: "John Smith",
  //   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo repellat hic tempore neque"
  // },
  // {
  //   avatar: avatar5,
  //   name: "John Smith",
  //   review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo repellat hic tempore neque"
  // }
];

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />
              </div>

              <h5>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
