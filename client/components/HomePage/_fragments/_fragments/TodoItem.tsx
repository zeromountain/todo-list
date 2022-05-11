import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Checkbox, Flex, ListItem } from '@chakra-ui/react';

interface TodoItemProps {
  content: string;
}

const TodoItem = ({ content }: TodoItemProps) => {
  return (
    <ListItem
      display='flex'
      justifyContent='center'
      alignItems='center'
      w='100%'
      h='50px'
      minH='50px'
      lineHeight='50px'
      margin='0.5rem 0'
      padding='0 0.9rem'
      background='#fff'
      borderRadius='5px'>
      <Checkbox
        _checked={{
          textDecoration: 'line-through',
        }}>
        {content}
      </Checkbox>
      <Flex
        w='50px'
        justifyContent='space-between'
        marginLeft='auto'
        cursor='pointer'>
        <DeleteIcon color='#de4343' />
        <EditIcon />
      </Flex>
    </ListItem>
  );
};

export default TodoItem;
