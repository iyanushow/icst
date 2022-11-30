import Categories from "./components/Categories";
import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import "./styles/index.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="pt-[83px]">
        <HeroSection />
        <div className="mt-[47px] max-w-[980px] mx-auto">
          <FeaturedCourses />
          <Categories />
        </div>
      </div>
    </>
  );
}

export default App;
