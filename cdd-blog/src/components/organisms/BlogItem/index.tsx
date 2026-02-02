import { BlogTitle } from "components/atoms/BlogTitle"
import {BlogBody} from 'components/atoms/BlogBody';
import styled from "@emotion/styled";

const Container = styled.div`
    border-radius: 10px;
    box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
    margin: 20px;
    padding: 20px;
    background-color: #ffffff;
    width: 800px;
`

interface Props {
    readonly title: string;
    readonly body: string;
}

export const BlogItem = ({title, body}: Props) => {
    return (<Container>
        <BlogTitle title={title}/>
        <BlogBody body={body}/>
    </Container>)
}
