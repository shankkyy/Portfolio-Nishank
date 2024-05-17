import { React, useState } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  Icon,
  Button,
  Link,
  Skeleton
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaLaptop } from "react-icons/fa";
import { FaChess } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import py from "../../assets/icons/python.png"
import react from "../../assets/icons/react.svg";
import sql from "../../assets/icons/database.png"
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import ml from "../../assets/icons/machine-learning.png"
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/aboutMePhoto.jpg";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
  
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
              // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%" 
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="NIT BHOPAL,BHOPAL"
                  />
               
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="BHOPAL, MADHYA PRADESH"
                  />
               
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="Bachelors computer science"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages"
                    value="English, Hindi"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={ml} />
          <TechStackCard imagepath={sql} />

          <TechStackCard imagepath={cpp} />
          <TechStackCard imagepath={node} />
          <TechStackCard imagepath={mongo} />
          <TechStackCard imagepath={express} background="white" />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={py} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
        
        </SimpleGrid>



        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/shankkyy" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={FaLaptop}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Watching web series</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
              I am genuinely excited to dive into a new web series, as the format offers such a unique and
               immersive storytelling experience. There's something captivating about the blend of complex characters,
                intricate plots, and the convenience of binge-watching episodes at my own pace. 
                I'm especially drawn to series that push creative boundaries and explore diverse themes, 
                providing not just entertainment but also a fresh perspective on various aspects of life.
                 Whether it's a gripping drama, a light-hearted comedy, or a mind-bending thriller,
                  I'm eager to discover and get lost in a compelling narrative.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={FaChess}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing chess</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            I've always been fascinated by the strategic depth and intellectual challenge of chess. Each game presents a unique puzzle, requiring careful planning, foresight, and creativity. The idea of learning and mastering various openings, defenses, and tactical maneuvers excites me. Chess not only sharpens the mind but also offers a rewarding sense of accomplishment with each well-played game. 
            I am eager to dive deeper into the world of chess, improving my skills and enjoying the mental stimulation it provides.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={IoFootball}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing Football</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            I've always been fascinated by the dynamic and exhilarating nature of football. The thrill of strategizing with teammates, the rush of sprinting down the field, and the satisfaction of a well-placed pass or goal create an unmatched sense of camaraderie and accomplishment. Football is more than just a sport to me; it's a passion that brings people together, tests our limits, and continually pushes us to improve. 
            Whether it's a casual pickup game or a competitive match, I'm eager to lace up my boots and dive into the action.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
