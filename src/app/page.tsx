import React from "react";
import FeaturedProductsPage from "./components/featured";
import HeroPage from "./components/hero";
import Categories from "./components/Categories";
import OurProduct from "./components/ourProducts";
import ExploreProduct from "./components/exploreProducts";
export default function Home() {
  return (
   <div>
  <HeroPage/>
    <FeaturedProductsPage/>
     <Categories/>
     <ExploreProduct/>
    <OurProduct/>
   </div>
  );
}
