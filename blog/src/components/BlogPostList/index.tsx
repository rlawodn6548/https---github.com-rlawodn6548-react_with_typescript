import styled from '@emotion/styled'
import { useState, useEffect } from 'react';
import {BlogPost} from 'components/BlogPost'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeeeee;
    overflow-y: auto;
`

interface Post {
    readonly id: number;
    readonly userId: number;
    readonly title: string;
    readonly body: string;
}

export const BlogPostList = () => {
const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);

    useEffect(() => {
        // setTimeout(() => {
        //   setPosts(mockPosts);
        // }, 1000);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json))
        .catch((error) => {
        console.error(error);
        });
    }, []);

    return (
        <Container>
        {
            posts.map((post) => (
                <BlogPost key={post.id} title={post.title} body={post.body}/>
            ))
        }   
    </Container>
    );
}