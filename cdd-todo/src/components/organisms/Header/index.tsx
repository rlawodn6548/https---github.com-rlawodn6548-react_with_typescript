import { AppTitle } from "components/atoms/AppTitle"
import styled from "@emotion/styled"

const Container = styled.header`
    background-color: #2196f3;
    padding: 16px 24px;
    margin: 0;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
`

export const Header = () => {
    return (
        <Container>
            <AppTitle />
        </Container>
    )
}
