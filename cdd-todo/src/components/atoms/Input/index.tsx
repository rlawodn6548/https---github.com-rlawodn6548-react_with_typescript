import styled from '@emotion/styled'

const TextInput = styled.input`
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #cccccc;
`

interface Props {
    readonly value: string;
    readonly onChange?: (value: string) => void;
    readonly onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    readonly placeholder?: string;
    readonly className?: string;
}

export const Input = ({value, onChange, onKeyDown, placeholder, className} : Props) => {
    return (
        <TextInput 
            value={value} 
            onChange={(event)=> onChange && onChange(event.target.value)} 
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={className}
        />
    )
}