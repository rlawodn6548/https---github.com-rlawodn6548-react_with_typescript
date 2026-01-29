import styled from '@emotion/styled';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: #eeeeee;
`;

export const NotFoundPage = () => {
    return (
        <Container>
            404
            <br/>
            NotFound
        </Container>
    )
}