import styled from '@emotion/styled';
import { useState } from 'react';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { ToDoListContext } from 'context/ToDoList'
import { useContext } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-top: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const StyledInput = styled(Input)`
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  }
`;

export const InputToDo = () => {
  const [todo, setTodo] = useState('');
  const navigate = useNavigate();
  const { onAdd } = useContext(ToDoListContext);
  
  const onAddToDo = () => {
    if (todo.trim() === '') return;
    onAdd(todo.trim());
    setTodo('');
    navigate('/');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAddToDo();
    }
  };

  return (
    <Container>
      <InputContainer>
        <StyledInput 
          value={todo} 
          onChange={setTodo} 
          placeholder="새로운 할 일을 입력하세요..."
          onKeyDown={handleKeyDown}
        />
        <Button 
          label="추가" 
          onClick={onAddToDo} 
          color="#2196f3"
          disabled={todo.trim() === ''}
        />
      </InputContainer>
    </Container>
  );
};
