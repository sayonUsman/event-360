import { Outlet } from "react-router-dom";
import Container from "../Container";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
