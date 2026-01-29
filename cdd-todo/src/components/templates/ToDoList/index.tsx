import { PageTitle } from "components/atoms/PageTitle";
import { ToDoItem } from "components/organisms/ToDoItem";
import { Button } from "components/atoms/Button";
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    padding: 24px;
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 24px;
`

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  gap: 12px;
`

const ButtonContainer = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 10;
`

const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    color: #9e9e9e;
    text-align: center;
    margin-top: 24px;
    background-color: #fafafa;
    border-radius: 8px;
    border: 2px dashed #e0e0e0;
`

const EmptyStateIcon = styled.div`
    font-size: 48px;
    margin-bottom: 16px;
`

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (toDo:string) => void;
}

export const ToDoList = ({toDoList, onDelete}:Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 목록"/>
        {toDoList.length === 0 ? (
          <EmptyState>
            <EmptyStateIcon>📝</EmptyStateIcon>
            <h3>할 일이 없습니다</h3>
            <p>오른쪽 아래의 버튼을 클릭하여 할 일을 추가하세요</p>
          </EmptyState>
        ) : (
          <ToDoListContainer>
            {
              toDoList.map((toDo) => (
                <ToDoItem
                  key={toDo}
                  label={toDo}
                  onClick={() => onDelete?.(toDo)}
                  />
              ))
            }
          </ToDoListContainer>
        )}
      </Contents>
      <ButtonContainer>
        <Button 
          label="+" 
          onClick={() => navigate('/add')}
          color="#4caf50"
        />
      </ButtonContainer>
    </Container>
  );
};
