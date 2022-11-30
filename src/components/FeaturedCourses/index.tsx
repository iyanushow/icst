import Button from "../atoms/Button";
import fetchData from "../../services/api";
import { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
interface IFeaturedItem {
  id: string;
  code: string;
  version: string | null;
  institution_id: string | null;
  semester: string | null;
  name: string;
  level?: string;
  course_pacing?: string;
  enrollment_type?: string;
  language?: string;
  thumbnail?: string;
  card_image?: string;
  price?: string;
  instructors: string[];
  subcategory_id?: string;
}

const getFeaturedCourses = fetchData<IFeaturedItem[]>("/featured-course-list");

function FeaturedCourses() {
  return (
    <div className="pt-10">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-2xl leading-7 font-semibold">Featured Courses</h3>
        <Button size="lg" className="bg-teal">
          See all Courses {">"}
        </Button>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading</h1>}>
          <FeaturedList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default FeaturedCourses;

function FeaturedList() {
  const data = getFeaturedCourses.read();

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-4 gap-4 mt-6">
      {data.slice(0, 4).map(course => (
        <FeatureItem key={course.id} {...course} />
      ))}
    </div>
  );
}

function FeatureItem({ card_image, name, code, instructors }: IFeaturedItem) {
  return (
    <div className="rounded w-[222px] h-[251px]">
      <figure>
        <img
          src={card_image}
          alt={code}
          className="w-full h-[123px] rounded-t"
        />
      </figure>
      <div className="p-2.5 border-[0.2px] border-gray rounded-b">
        <div className="px-4 py-[11px]">
          <h4 className="font-bold text-sm leading-4 text-primary-300">
            {code}
          </h4>
          <h5 className="text-xs font-semibold text-primary-300 truncate">
            {name}
          </h5>
          <div className="pt-[3px] min-h-[32px]">
            {instructors.map((group, i) => (
              <span key={i} className="block text-[11px] leading-4 font-light">
                {group}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t-[0.2px] pt-1 border-gray text-[10px] font-bold leading-4 flex justify-center">
          <button className="pr-[17px] border-r-[0.5px] border-gray text-red">
            See Details
          </button>
          <button className="px-[17px] border-r-[0.5px] border-gray text-yellow">
            Wishlist
          </button>
          <button className="pl-[17px] text-primary-100">Buy</button>
        </div>
      </div>
    </div>
  );
}
