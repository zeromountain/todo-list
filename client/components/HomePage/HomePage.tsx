import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import HomePageContent from './_fragments/HomePageContent';

const HomePage = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      maxW='800px'
      margin='0 auto'
      padding='10px'
      background='gray'>
      <Head>
        <title>투두리스트 | 홈</title>
      </Head>
      <HomePageContent />
    </Flex>
  );
};

export default HomePage;
