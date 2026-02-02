import styled from '@emotion/styled';
import {AppTitle} from 'components/atoms/AppTitle';

const Container = styled.div`
    width: calc(100% - 40px);
    margin-bottom: 20px;
    padding: 20px;
    background-color: #ffffff;
`

export const Header = () => {
    return <Container><AppTitle/></Container>
}