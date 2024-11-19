import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const screenshots = [
  {
    url: '/dashboard.png',
    title: 'Main Dashboard'
  },
  {
    url: '/employees.png',
    title: 'Employee Management'
  },
  {
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    title: 'Team Collaboration'
  },
  {
    url: '/mockup.png',
    title: 'Resource Planning'
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    title: 'Performance Metrics'
  }
];

export default function ImageSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="rounded-2xl shadow-2xl"
      >
        {screenshots.map((screenshot, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-video">
              <img
                src={screenshot.url}
                alt={screenshot.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {screenshot.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}