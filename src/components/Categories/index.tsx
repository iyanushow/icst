import { Suspense } from "react";
import fetchData from "../../services/api";
import Button from "../atoms/Button";
import Carousel from "../atoms/Carousel";
import ErrorBoundary from "../ErrorBoundary";

interface ICategories {
  category: string;
  subcategory: string[];
}

const getCategories = fetchData<ICategories[]>("/category");

function Categories() {
  return (
    <div className="pt-10 mt-11">
      <h3 className="text-2xl leading-7 font-semibold">Categories</h3>
      <div className="pt-6 mb-10">
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading</h1>}>
            <CourseContents />
          </Suspense>
        </ErrorBoundary>
      </div>
      <Button size="lg" className="bg-teal ml-auto mr-[62px]">
        See all Courses {">"}
      </Button>
    </div>
  );
}

export default Categories;

function CourseContents() {
  const categories = getCategories.read();

  const carouselItems = categories.map(({ category, subcategory }, i) => {
    const subCat = subcategory.map(item => item.split(",")[1]).join(",");

    return (
      <div className="bg-gradient-to-b from-[#555555] to-[#777777] shadow-main rounded w-[265px] font-bold text-sm leading-4 flex flex-col justify-between">
        <div className="pt-[58px] px-6 pb-[45px] text-white">
          <h6 className="font-semibold">{category}</h6>
          <div className="font-light line-clamp mt-4">{subCat}</div>
        </div>
        <div className="bg-white flex justify-between items-center rounded py-[15px] px-6">
          <span>Category</span>
          <span>Details</span>
        </div>
      </div>
    );
  });

  return <Carousel Items={carouselItems} />;
}
