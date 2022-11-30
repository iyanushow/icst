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
      <div className="pb-4">
        <HeroSection />
        <div className="mt-[47px] max-w-[980px] mx-auto px-2">
          <FeaturedCourses />
          <Categories />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
