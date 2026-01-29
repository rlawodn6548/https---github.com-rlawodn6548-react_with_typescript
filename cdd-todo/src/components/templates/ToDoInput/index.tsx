import styled from "@emotion/styled"
import { PageTitle } from "components/atoms/PageTitle"
import { InputToDo } from "components/organisms/InputToDo"
import { Button } from "components/atoms/Button"
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
const ButtonContainer = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 10;
`

export const ToDoInput = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Contents>
                <PageTitle title="할 일 추가"/>
                <InputToDo/>
            </Contents>
            <ButtonContainer>
                <Button label="←" onClick={()=>{navigate('/')}} color="#9e9e9e"/>
            </ButtonContainer>
        </Container>
    )
}
