import React from 'react';
import TodoHeader from './_fragments/TodoHeader';
import TodoInput from './_fragments/TodoInput';
import TodoList from './_fragments/TodoList';

const todos = [
  { id: '12442351sadfasf', content: '투두리스트만들기' },
  { id: 'sadgxcjlagjqtjqlkj', content: '투두리스트 차크라 적용' },
  { id: 'czxvmnagjqiowetowqjgksda', content: '투두리스트 리액트 쿼리 적용' },
  { id: 'cx,mvnzklgputqtasdjflkjsa', content: '투두리스트 타입스크립트 적용' },
];

const HomePageContent = () => {
  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} />
    </>
  );
};

export default HomePageContent;
