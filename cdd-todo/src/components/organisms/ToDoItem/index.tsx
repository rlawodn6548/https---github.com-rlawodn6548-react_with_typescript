import { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #4caf50;
`;

const Label = styled.span<{ completed: boolean }>`
  font-size: 16px;
  color: ${props => props.completed ? '#9e9e9e' : '#212121'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  transition: all 0.2s ease;
  flex: 1;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #f44336;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ffebee;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}

export const ToDoItem = ({ label, onClick }: Props) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <Container>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <Label completed={completed}>{label}</Label>
      </CheckboxContainer>
      <DeleteButton onClick={onClick}>
        ×
      </DeleteButton>
    </Container>
  );
};
