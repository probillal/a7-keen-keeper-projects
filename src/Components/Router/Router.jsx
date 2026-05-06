import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root";
import HomePage from "../../Pages/HomePage";
import TimeLine from "../../Pages/TimeLine/TimeLine";
import Stats from "../../Pages/Stats/Stats";
import Error from "../../Pages/ErrorPage/Error";
import FriendDetails from "../../Pages/FriendsDetails/FriendDetails";

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
      {
        path: "friendDetails/:id",
        Component: FriendDetails,
      },
    ],
    errorElement: <Error></Error>,
  },
]);
