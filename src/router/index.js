import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home";
import SideNav from "../components/side-nav/sidenav";
import { NotFound } from "../pages/Not-Found";
import { ErrorPage } from "../pages/Error-Page";
import About from "../pages/About/about";
import Services from "../pages/Services/services";

export default createBrowserRouter(
  createRoutesFromElements([
    <Route path="*" element={<NotFound />} />,
    <Route
      path="/"
      errorElement={<ErrorPage />}
      element={
        <SideNav>
          <Home />
        </SideNav>
      }
    />,
    <Route
      path="/About"
      errorElement={<ErrorPage />}
      element={
        <SideNav>
          <About />
        </SideNav>
      }
    />,
    <Route
      path="/Services"
      errorElement={<ErrorPage />}
      element={
        <SideNav>
          <Services />
        </SideNav>
      }
    />,
    <Route
      path="/Home"
      errorElement={<ErrorPage />}
      element={
        <SideNav>
          <Home />
        </SideNav>
      }
    />,
  ])
);
