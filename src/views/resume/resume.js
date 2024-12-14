import React from "react";
import { Helmet } from "react-helmet";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import { Box, useStyleConfig, Flex, Button } from "@chakra-ui/react";

export default function Resume() {
  const styles = useStyleConfig("Card");
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1U9F26HIkWfmEfjB64CGqZ2qLdbFOO1Un/view?usp=sharing";
  };

  //this is a new change 

  return (
    <Box>
      <Helmet>
        <title>Your Name - Resume</title> {/* Title for the page */}
        <meta name="description" content="Download the resume of Nishank verma , Resume, Software developer, data structures and algorithms , c++,mongodb, reactjs ,nodejs and more." /> {/* Meta description */}
        <meta name="keywords" content="Nishank verma , Resume, Software developer, data structures and algorithms ,c++" /> {/* Keywords */}
        <link rel="canonical" href={window.location.href} /> {/* Canonical link */}
      </Helmet>

      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            width={{ base: "100%", md: "70%", xl: "70%" }}
            height={{ base: "60vh", md: "100vh", xl: "150vh" }}
            overflow="hidden"
            borderRadius="md"
          >
            <img src="/resume.png" alt="Resume" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Button
            onClick={handleDownload}
            variant="darkBrand"
            fontSize="sm"
            fontFamily="DM Sans"
          >
            Download Resume
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
