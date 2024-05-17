import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import contactimg from "../../assets/contact.png";
import contactimg1 from "../../assets/contact1.png";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [loadedimage1, setloadedimage1] = useState(false);
  const [loadedimage2, setloadedimage2] = useState(false);
  const styles = useStyleConfig("Card");
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };


  

    const form = useRef();
  
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.send("service_e4kgh4r", "template_t9agjwr", {
        to_name: "Nishank Verma",
        from_name: email,
        message: message,
      }, "45Je7Hhyxc4sq-ivX")
        .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        }, (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        });
    
      // Clear the form
      setEmail("");
      setMessage("");
    };
    

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt="30px">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Skeleton isLoaded={loadedimage1} color="white" fadeDuration={1}>
              <Image
                src={contactimg}
                onLoad={() => setloadedimage1(true)}
              ></Image>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton isLoaded={loadedimage2} color="white" fadeDuration={1}>
              <Image
                src={contactimg1}
                onLoad={() => setloadedimage2(true)}
              ></Image>
            </Skeleton>
          </Box>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mt={{ sm: "20px", xl: "0" }}
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={FaLocationDot}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">FIND ME @</Text>
              <Text href="https://maps.app.goo.gl/7HzRrRnnkAYR1HQu8" color={textColorPrimary} textAlign="center" mt="5px">
                NIT BHOPAL
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "";
                    e.preventDefault();
                  }}
                >
                  <Icon
                    as={AiOutlineMail}
                    width="30px"
                    height="30px"
                    color="inherit"
                    cursor="pointer"
                  />
                </Link>
              </Box>

              <Text textAlign="center">EMAIL ME @</Text>

              <Text color={textColorPrimary} textAlign="center" mt="5px">
                nishankverma24@gmail.com
              </Text>
            </Box>
          </Flex>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box __css={styles}>
              <Box textAlign="center">
                <Icon
                  as={AiFillPhone}
                  width="30px"
                  height="30px"
                  color="inherit"
                />
              </Box>
              <Text textAlign="center">CALL ME @</Text>
              <Text color={textColorPrimary} textAlign="center" mt="5px">
                (+91)-9691556076
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>

        <Box mt="20px" textAlign="center">
          <form ref={form}  onSubmit={sendEmail}>
            <Input
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb="10px"
              required
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              mb="10px"
              required
            />
            <Button type="submit" colorScheme="teal">
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
