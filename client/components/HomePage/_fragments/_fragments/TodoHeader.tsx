import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const TodoHeader = () => {
  return (
    <Box as='header'>
      <Heading color='#2f3b52' fontWeight='900' margin='2.5rem 0 1.5rem'>
        Todo List
      </Heading>
    </Box>
  );
};

export default TodoHeader;
