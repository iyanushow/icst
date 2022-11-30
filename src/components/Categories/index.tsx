import React from "react";
import Button from "../atoms/Button";
import Carousel from "../atoms/Carousel";
const items = [
  {
    subject: "Physical Sciences",
    topics:
      " Biology, Physics, Chemistry, Environmental Studies, Agricultural Science",
  },
  {
    subject: "COMPUTER SCIENCE & INFORMATION TECHNOLOGY",
    topics:
      " Biology, Physics, Chemistry, Environmental Studies, Agricultural Science",
  },
  {
    subject: "Physical Sciences",
    topics:
      " Biology, Physics, Chemistry, Environmental Studies, Agricultural Science",
  },
  {
    subject: "Physical Sciences",
    topics:
      " Biology, Physics, Chemistry, Environmental Studies, Agricultural Science",
  },
  {
    subject: "Physical Sciences",
    topics:
      " Biology, Physics, Chemistry, Environmental Studies, Agricultural Science",
  },
  {
    subject: "Physical Sciences",
    topics:
      " Biology, Physics, Chemistry, Environmental Studies, Agricultural Science",
  },
];

function Categories() {
  const carouselItems = items.map((course, i) => (
    <CourseCard key={i} {...course} />
  ));

  return (
    <div className="pt-10 mt-11">
      <h3 className="text-2xl leading-7 font-semibold">Categories</h3>
      <div className="pt-6 mb-10">
        <Carousel Items={carouselItems} />
      </div>
      <Button size="lg" className="bg-teal ml-auto mr-[62px]">
        See all Courses {">"}
      </Button>
    </div>
  );
}

export default Categories;

function CourseCard({ subject, topics }: { subject: string; topics: string }) {
  return (
    <div className="bg-gradient-to-b from-[#555555] to-[#777777] shadow-main rounded w-[265px] font-bold text-sm leading-4 flex flex-col justify-between">
      <div className="pt-[58px] px-6 pb-[45px] text-white">
        <h6 className="font-semibold">{subject}</h6>
        <p className="font-light">{topics}</p>
      </div>
      <div className="bg-white flex justify-between items-center rounded py-[15px] px-6">
        <span>Category</span>
        <span>Details</span>
      </div>
    </div>
  );
}
