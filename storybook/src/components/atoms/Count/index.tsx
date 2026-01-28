import styled from '@emotion/styled'

const Container = styled.span`
    margin: 0 16px;
    font-size: 1.2rem;
`

interface Props {
    readonly count: number;
}

export const Count = ({count}:Props) => {
    return <Container>{count}</Container>
}