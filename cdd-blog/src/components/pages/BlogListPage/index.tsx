import { BlogList } from "components/template/BlogList"
import {useState, useEffect} from 'react';
import type {Post} from 'components/template/BlogList';

export const BlogListPage = () => {
    const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <BlogList posts={posts}/>
    )
}