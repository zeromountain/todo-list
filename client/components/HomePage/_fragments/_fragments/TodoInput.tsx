import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Input } from '@chakra-ui/react';
import React from 'react';

const TodoInput = () => {
  return (
    <>
      <Flex w='700px' h='50px' lineHeight='50px' borderRadius='5px'>
        <Input
          placeholder='할 일을 입력해 주세요.'
          w='calc(100% - 3rem)'
          borderStyle='none'
          borderRadius='5px 0 0 5px'
          fontSize='0.9rem'
          padding='10px'
          _focus={{
            outline: 'none',
          }}
        />
        <Box
          background='linear-gradient(to right, #6478fb, #8763fb)'
          w='3rem'
          borderRadius='0 5px 5px 0'
          cursor='pointer'>
          <AddIcon w='3rem' h='2rem' color='white' />
        </Box>
      </Flex>
    </>
  );
};

export default TodoInput;
