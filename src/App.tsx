import Categories from "./components/Categories";
import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import { QueryClient, QueryClientProvider } from "react-query";

import "./styles/index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <div className="pt-[83px]">
        <HeroSection />
        <div className="mt-[47px] max-w-[980px] mx-auto">
          <FeaturedCourses />
          <Categories />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
