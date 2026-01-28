import styled from '@emotion/styled'
import {Button} from 'components/Button'

const Container = styled.div`
  display: flex;
  align-item: center;
  justify-content: conter;
  margin-bottom: 16px;
`

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`

interface Props {
    readonly label: String;
    readonly onDelete?: () => void;
}

export  const ToDoItem = ({label, onDelete} : Props) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Button label="삭제" onClick={onDelete}/>
        </Container>
    );
}