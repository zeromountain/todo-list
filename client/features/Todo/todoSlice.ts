import { createSlice } from '@reduxjs/toolkit';

type todo = {
  id: string;
  content: string;
};

export interface TodoState {
  todos: todo[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TodoState = {
  todos: [
    { id: '12442351sadfasf', content: '투두리스트만들기' },
    { id: 'sadgxcjlagjqtjqlkj', content: '투두리스트 차크라 적용' },
    { id: 'czxvmnagjqiowetowqjgksda', content: '투두리스트 리액트 쿼리 적용' },
    {
      id: 'cx,mvnzklgputqtasdjflkjsa',
      content: '투두리스트 타입스크립트 적용',
    },
  ],
  status: 'idle',
};

export const todoSlice = createSlice({
  name: 'TODO',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    // editTodo
    // deleteTodo
  },
});

export const { addTodo } = todoSlice.actions;
