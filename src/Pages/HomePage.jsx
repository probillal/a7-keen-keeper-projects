import { Suspense } from "react";
import Banner from "../Components/HomeItems/Banner";
import Cards from "../Components/HomeItems/Cards";
import Friends from "../Components/HomeItems/Friends";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Cards></Cards>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <Friends></Friends>
      </Suspense>
    </div>
  );
};

export default HomePage;
