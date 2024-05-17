import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import topic from "../../assets/projects/Modeling1.webp";
import savli from "../../assets/projects/savli.png";
import news from "../../assets/projects/news.png";
import bank from "../../assets/projects/bank.png";


export default function Projects() {
  // const textColorPrimary = useColorModeValue(
  //   "secondaryGray.900",
  //   "lightpeach.100"
  // );
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
             <ProjectCard
            projectImage={topic}
            projectName={"Analyzing-Research-Paper-Theme-A-Topic-Modeling-Approach "}
            aboutProject={"Extracts topics from research papers and assigns it to reviewer for research paper conference "}
            techStack={"MACHINE LEARNING , TOPIC MODELLING , LDA LSA ALGORITHMS"}
            projectLiveLink="https://github.com/shankkyy/Analyzing-Research-Paper-Theme-A-Topic-Modeling-Approach"
            projectLink="https://github.com/shankkyy/Analyzing-Research-Paper-Theme-A-Topic-Modeling-Approach"
          />
          <ProjectCard
            projectImage={news}
            projectName={"NEWS APP "}
            aboutProject={"Fetches real time news and displays "}
            techStack={"REACTJS,API INTEGRATION,BOOTSTRAP"}
            projectLiveLink="https://github.com/shankkyy/NewsApp"
            projectLink="https://github.com/shankkyy/NewsApp"
          />
       
          <ProjectCard
            projectImage={savli}
            projectName={"Savli1.0-Chrome extension"}
            aboutProject={
              "difficulty to find the tabs which we are working on this keeps the links in arranged manner"
            }
            techStack={
              "Reactjs ,Bootstrap , css,html"
            }
            projectLiveLink="https://github.com/shankkyy/Savli1.0"
            projectLink="https://github.com/shankkyy/Savli1.0"
          />
          <ProjectCard
            projectImage={bank}
            projectName={"MONEY TRANSFERING DUMMY"}
            aboutProject={"dummy site which transfers fake money and show transactions"}
            techStack={"Basic,HTML,CSS,JS"}
            projectLiveLink=" https://shankkyy.github.io/Tspbank.github.io/"
            projectLink="https://github.com/1582/Bloggers-Arena"
          />
        
        </SimpleGrid>
    
       
      </Box>
    </Box>
  );
}
