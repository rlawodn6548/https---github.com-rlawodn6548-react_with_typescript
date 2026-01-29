import styled from '@emotion/styled'

interface ContainerProps {
    readonly color: string;
}

const Container = styled.button<ContainerProps>`
    padding: 10px 20px;
    border-radius: 50px;
    background-color: ${(props) => props.color};
    color: #ffffff;
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
`

interface Props {
    readonly label: string;
    readonly color?: string;
    readonly onClick?: () => void;
    readonly disabled?: boolean;
}

export const Button = ({label, color='#ff5722', onClick, disabled=false}: Props) => {
    return <Container onClick={onClick} color={color} disabled={disabled}>{label}</Container>
} 
