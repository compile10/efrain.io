import type { NextPage } from 'next'
import  {useEffect } from 'react';
import { Box, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import Head from 'next/head'
import {renderCube} from '../cube'

import * as THREE from "three";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaMedium } from "react-icons/fa";


const Home: NextPage = () => {
  useEffect(() => {
    renderCube()
  });


  return (
    <>
    <Head>
      <title>efrain.io</title>
      <meta property="og:title" content="efrain.io" />
      <meta property="og:description" content="The personal website of Efrain Gonzalez." />
      <meta property="og:image" content="https://i.imgur.com/M2TTYBf.png" />
    </Head>
    <Box position="absolute" width="100%" top={[60, 80]}>
      <Box display="grid" justifyItems={["center","end"]} marginRight={[0, 10, 20, 40]}  >
        <Box display="grid" justifyItems="center" padding={[5,0]}>
          <Heading color='white' >Welcome to efrain.io</Heading>
          <ButtonGroup variant="outline" spacing="3" paddingTop={3}>
            <Link  href={'https://github.com/compile10'} isExternal>
              <Button _hover={{ color: "black", backgroundColor: "white" }} color='white' leftIcon={<GoMarkGithub />} >
                Github
              </Button>
            </Link>
            <Link href={'https://www.linkedin.com/in/efrain800/'} isExternal>
              <Button _hover={{ color: "black", backgroundColor: "white" }} color='white' leftIcon={<FaLinkedin />} >
                LinkedIn
              </Button>
            </Link>
            <Link href={'https://efrain800.medium.com/'} isExternal>
              <Button _hover={{ color: "black", backgroundColor: "white" }} color='white' leftIcon={<FaMedium />} >
                Medium
              </Button>
            </Link>
          </ButtonGroup>
        </Box>

      </Box>
    </Box>
    </>
  )
}

export default Home
 