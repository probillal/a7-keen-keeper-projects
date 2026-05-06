import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root";
import HomePage from "../../Pages/HomePage";
import TimeLine from "../../Pages/TimeLine/TimeLine";
import Stats from "../../Pages/Stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "timeline",
        Component: TimeLine,
      },
      {
        path: "stats",
        Component: Stats,
      },
    ],
  },
]);
