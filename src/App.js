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
  <title>Nishank Verma | Software Developer Portfolio</title> {/* Optimized title with keywords */}
  <meta 
    name="description" 
    content="Discover the portfolio of Nishank Verma, a skilled Software Developer specializing in Data Structures, Algorithms, and MERN stack. Explore projects, skills, and professional experience in building high-performance web applications." 
  /> {/* Clear, concise, and keyword-rich meta description */}
  <meta 
    name="keywords" 
    content="Nishank Verma, software developer, MERN stack developer, full-stack developer, web developer, data structures and algorithms, C++, ReactJS, NodeJS, MongoDB, portfolio, NIT Bhopal, software engineering, projects, coding, programming" 
  /> {/* Comprehensive keyword list */}
  <meta name="author" content="Nishank Verma" /> {/* Added author meta tag */}
  <meta property="og:title" content="Nishank Verma | Software Developer Portfolio" /> {/* Open Graph title for social media */}
  <meta 
    property="og:description" 
    content="Explore Nishank Verma's professional journey as a Software Developer with expertise in the MERN stack and a strong foundation in Data Structures and Algorithms. Check out projects, skills, and more." 
  /> {/* Open Graph description */}
  <meta property="og:url" content="https://portfolio-nishank.vercel.app/home" /> {/* Open Graph URL */}
  <meta property="og:type" content="website" /> {/* Open Graph type */}
  <meta property="og:image" content="https://portfolio-nishank.vercel.app/images/portfolio-preview.png" /> {/* Open Graph image */}
  <meta name="twitter:card" content="summary_large_image" /> {/* Twitter card type */}
  <meta name="twitter:title" content="Nishank Verma | Software Developer Portfolio" /> {/* Twitter title */}
  <meta 
    name="twitter:description" 
    content="Discover the portfolio of Nishank Verma, a skilled Software Developer specializing in MERN stack development and DSA. Check out his projects and expertise in web development and programming." 
  /> {/* Twitter description */}
  <meta name="twitter:image" content="https://portfolio-nishank.vercel.app/images/portfolio-preview.png" /> {/* Twitter image */}
  <link rel="canonical" href="https://portfolio-nishank.vercel.app/home" /> {/* Canonical link */}
  <meta name="robots" content="index, follow" /> {/* Search engine directives */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Mobile-friendly tag */}
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
