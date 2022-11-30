import Categories from "./components/Categories";
import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";

import "./styles/index.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="pb-4">
        <HeroSection />
        <div className="mt-[47px] max-w-[980px] mx-auto px-2">
          <FeaturedCourses />
          <Categories />
        </div>
      </div>
    </>
  );
}

export default App;
