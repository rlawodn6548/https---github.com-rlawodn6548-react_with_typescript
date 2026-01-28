import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Container = styled(Link)`
    color: #304ffe;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
`

export const AppTitle = () => {
    return <Container to={"/"}>할 일 목록앱</Container>
}
