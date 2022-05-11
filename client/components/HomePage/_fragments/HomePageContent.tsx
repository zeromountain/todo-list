import React from 'react';
import { useAppSelector } from '../../../features/store';

import TodoHeader from './_fragments/TodoHeader';
import TodoInput from './_fragments/TodoInput';
import TodoList from './_fragments/TodoList';

const HomePageContent = () => {
  const { todos } = useAppSelector(({ TODO }) => TODO);

  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
};

export default HomePageContent;
