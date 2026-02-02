import styled from '@emotion/styled';
import {InputText} from 'components/atoms/InputText';
import { Label } from 'components/atoms/Label';

interface Props {
    readonly label: string;
    readonly value: string;
    readonly onChange: (value: string) => void;
}

const InputGroup = styled.div`
    margin-bottom: 16px;
`

export const Input = ({label, value, onChange}: Props) => {
    return <InputGroup>    
        <Label title={label}/>
        <InputText value={value} onChange={onChange}/>
    </InputGroup>
}