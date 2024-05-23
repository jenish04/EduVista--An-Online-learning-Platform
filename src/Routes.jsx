import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import EduviCoursesDetails from "pages/EduviCoursesDetails";
import EduviShop from "pages/EduviShop";
import EduviCourses from "pages/EduviCourses";
import EduviCoursesPricing from "pages/EduviCoursesPricing";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import Allmentors from "pages/Allmentors";
import Singlementordetails from "pages/Singlementordetails";
import LogIn from "modals/LogIn";
import SignUp from "modals/SignUp";
import EduviCoursesOne from "components/EduviCoursesOne";
import ApplymentorPage from "pages/ApplymentorPage";
import EduviHomePage from "pages/EduviHome";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/Eduvista-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <EduviHomePage />,
    },
    {
      path: "/eduvicoursedetails",
      element: <EduviCoursesDetails />,
    },
    {
      path: "/eduvishop",
      element: <EduviShop />,
    },
    {
      path: "/eduvicourses",
      element: <EduviCourses />,
    },
    {
      path:"/eduvicoursespricing",
      element: <EduviCoursesPricing />,
    },
    {
      path:"/eduvijoinasteacher",
      element: <EduviJoinAsTeacher/>,
    },
    {
      path:"/allmentors",
      element : <Allmentors />,
    },
    {
      path: "/singlementordetails",
      element: <Singlementordetails />
    },
    {
      path:"/login",
      element:<LogIn/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/eduvicoursesone",
      element:<EduviCoursesOne/>
    },
    {
      path:"/eduvijoinasteacher",
      element:<EduviJoinAsTeacher/>
    },
    {
      path:"/applyformentor",
      element:<ApplymentorPage />
    }
  ]);

  return element;
};

export default ProjectRoutes;
