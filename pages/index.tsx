import * as React from 'react';
import { NextPage } from 'next';
import { Box, Flex, Image, Heading , Divider } from "@chakra-ui/core";


const IndexPage: NextPage = () => {

  return (
    <Box>
    <Flex
    align="center"
    wrap={'wrap'}
    padding={'1rem'}
    color={'gray.600'}
    shadow={'md'}
    flexDirection={'row'}
  >
    <Heading px={4}>Home</Heading>
    <Divider orientation="vertical" />
    <Heading px={4}>My Work</Heading>
    <Divider orientation="vertical" />
    
    <Heading px={4}>YouTube</Heading>
  </Flex>
  <Image src='/images/passion.gif'/>
  </Box>
    
  )
};

export default IndexPage;
