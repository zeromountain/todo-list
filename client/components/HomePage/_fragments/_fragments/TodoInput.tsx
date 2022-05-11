import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '../../../../features/store';
import { addTodo } from '../../../../features/Todo/todoSlice';

const TodoInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        content: inputRef.current?.value,
      })
    );
  };
  return (
    <>
      <Flex w='700px' h='50px' lineHeight='50px' borderRadius='5px'>
        <Input
          ref={inputRef}
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
          <AddIcon w='3rem' h='2rem' color='white' onClick={handleAddTodo} />
        </Box>
      </Flex>
    </>
  );
};

export default TodoInput;
