import { UnorderedList } from '@chakra-ui/react';
import React from 'react';
import TodoItem from './TodoItem';

type todo = {
  id: string;
  content: string;
};

interface TodoListProps {
  todos: todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <UnorderedList
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      w='700px'
      listStyleType='none'
      padding='0'
      margin='10px auto 0'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} content={todo.content} />
      ))}
    </UnorderedList>
  );
};

export default TodoList;
