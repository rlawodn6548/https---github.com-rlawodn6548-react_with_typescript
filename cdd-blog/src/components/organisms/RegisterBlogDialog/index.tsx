import { DialogTitle } from "components/atoms/DialogTitle"
import { Input } from "components/modules/Input"
import {Button} from "components/atoms/Button"
import styled from "@emotion/styled"
import { useState } from "react";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    background-color: #ffffff;
    border-radius: 8px;
    z-index: 1;
`

const Actions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

interface Props {
    readonly onClose: () => void;
}

export const RegisterBlogDialog = ({onClose}: Props) => {   
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const registerPost = ()=>{
        if (title==='' || body === '') return;

        fetch('https://jsonplaceholder.typicode.com/post',{
            method: 'POST',
            body: JSON.stringify({
                userId:1,
                title,
                body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            if (typeof onClose === 'function') onClose();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <Container>
            <Background/>
            <Contents>
                <DialogTitle title="Register Blog"/>
                <Input label = "Title" value={title} onChange={setTitle}/>
                <Input label = "Body" value={body} onChange={setBody}/>
                <Actions>
                    <Button label="등록하기" onClick={registerPost}/>
                    <Button label="닫기" color="#304FFE" onClick={onClose}/>
                </Actions>
            </Contents>
        </Container>
    )
}