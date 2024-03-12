'use client'

import { Button, Box, Center, Container, Heading, Image, Img, Link, Text, useColorMode, HStack } from "@chakra-ui/react";

import { IconButton } from '@chakra-ui/react'
import { SlSocialGithub } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()

  const log = [
{
"date":"12/03/2024",
"event":"Third meetup!! At 19:00 at Huhcocktail at Piazza San Francesco 10g 40122 Bologna"
},
     {
       "date":"25/01/2024",
       "event":"Second meetup!! At 18:00 at Funtanir Bistrò Cocktail & Rooms Bologna 47a Via Riva di Reno, Bologna, Emilia-Romagna, 40122. Check on Telegram for more details."
     },
     {
       "date":"18/12/2023",
       "event":"First meetup!! Next monday at 19:00 at Cluricaune Irish Pub , 18b Via Zamboni 40126 Bologna. Check on telegram for more details."
     },
    {
      "date": "07/12/2023",
      "event": 'Meetups coming very soon. '
    }
  ]

  const logo = (
    <Box
      p={"1"}

      //border={"1px"}
      borderRadius='full'
      //bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgGradient={"linear(to-l,  #40B6A4 , #1A1855)"}
    //boxShadow='dark-lg'
    >
      <Image

        src="/static/logo.png"
        borderRadius='full'
        boxSize='150px'
      ></Image>
    </Box>
  )
  return (
    <Container height={"100%"} maxW='2xl' centerContent >

      <Box m={"5"} p={"2"} display={"flex"} flexDirection={"column"} alignContent={"center"} alignItems={"center"}>
        <IconButton
          mt="10"
          variant="ouline"
          aria-label='Search database'
          icon={colorMode === 'light' ? logo : logo}
          onClick={toggleColorMode}
          mb="8"
        />




        <Box
          my={"4"}

          display="flex"
          flexDirection={"column"}

        >
          <Text
            bgGradient='linear(to-l, #1A1855,  #40B6A4)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
            mb="-4"
          //textShadow='8px 6px #7928CA'
          >
            ETHBologna
          </Text>
      
        </Box>
        <Center>
          <Box
            display={"flex"}
            flex={"column"}
          >
            <Box>
              {
                log.map((item, i) => {
                  return <Box

                  key = {i}
                    display={"flex"}
                    flex={"row"}
                  >
                    <Text
                      as='u'
                      p="2"
                      //bgGradient='linear(to-l, #7928CA, #FF0080)'
                      //color="white"
                      // fontWeight='bold'
                      // borderRadius='16px'
                      //  boxShadow='dark-lg'
                      textShadow='1px 1px #7928CA'
                    >
                      {item.date}
                    </Text>
                    <Text

                      p="2"
                      textShadow='1px 1px #7928CA'
                    >
                      {item.event}
                    </Text>
                  </Box>
                })
              }
            </Box>


          </Box>
        </Center>

        <HStack>
          <Link isExternal href="https://github.com/abeatbeyondlab/ethbologna">
            <IconButton
              mt="10"
              variant="ouline"
              aria-label='Search database'
              icon={<SlSocialGithub />}


              mb="8"
            />
          </Link>

          <Link isExternal href="https://t.me/ethbologna">
            <IconButton
              mt="10"
              variant="ouline"
              aria-label='Search database'
              icon={<FaTelegramPlane />}


              mb="8"
            />
          </Link>

        </HStack>
      
<Center>
<Text w="100%"  as='sub' >Sponsored by <Link isExternal href="https://www.abeatbeyond.com/"><Text as="u">A Beat Beyond </Text></Link></Text>
  </Center>
  
      </Box>
     


      {/*
      <Box
        borderRadius={"16px"}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/4TYWU2pxUjt5XtrlePEsOn?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy" />
      </Box>
      */}

    </Container>
  )
}
