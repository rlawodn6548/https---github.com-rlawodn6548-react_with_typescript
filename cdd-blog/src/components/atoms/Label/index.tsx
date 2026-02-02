import styled from '@emotion/styled';

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`

interface Props {
  readonly title: string;
}

export const Label = ({title}:Props) => {
  return <Title>{title}</Title>;
};