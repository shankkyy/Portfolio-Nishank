import "./App.css";
import Sidenav from "./components/Sidenav/Sidenav";
import Footer from "./components/Footer/Footer";
import routes from "./routes.js";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

export default function App() {
  // const { colorMode } = useColorMode();

  const redirectRoute = (routes) => {
    return routes.map((route, key) => {
      return (
        <Route path={route.path} element={<route.component />} key={key} />
      );
    });
  };
  const StarryBackground = ({ colorMode }) => {
    const numberOfStars = 100;
    const stars = [];
  
    for (let i = 0; i < numberOfStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: Math.random(),
        boxShadow: `0 0 ${Math.random() * 10}px rgba(255, 255, 255, ${Math.random()})`,
      };
  
      const starClassName =
        colorMode === "light" ? "star-black" : "star-white";
  
      stars.push(<div key={i} className={starClassName} style={style}></div>);
    }
  
    return <div className="starry-background">{stars}</div>;
  };
  
  return (
    <Router>
       <Helmet>
        <title>Nishank Verma</title> {/* Title for the page */}
        <meta name="description" content="Explore the portfolio of Nishank Verma, a Computer Science student at NIT Bhopal specializing in Data Structures, Algorithms, and MERN stack development. Discover projects, skills, and professional experience in software development and web applications" /> {/* Meta description */}
        <meta name="keywords" content="software developer , MERN STACK developer , full stack developer , web developer,data structures and algorithms , c++,mongodb, reactjs ,nodejs and more." /> {/* Keywords */}
        <link rel="canonical" href="https://portfolio-nishank.vercel.app/home"/> {/* Canonical link */}
      </Helmet>
      <StarryBackground />
      <Sidenav routes={routes} />
      <Box
        float="right"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ sm: "100%", xl: "calc( 100% - 290px )" }}
        maxWidth={{ sm: "100%", xl: "calc( 100% - 290px )" }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH={{ base: "85vh", xl: "89vh" }}
          pt="50px"
          overflow="hidden"
        >
          <Routes>
            {redirectRoute(routes)}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}
