import './App.css';
import styled from '@emotion/styled'
import {Header} from 'components/Header'
import {BlogPostList} from 'components/BlogPostList'
import {Button} from 'components/Button'
import {Form} from 'components/Form'
import { useState } from 'react';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow-y: auto;
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Container>
      <Header/>
      <BlogPostList/>
      <ButtonContainer>
        <Button label="등록" onClick={() => setShowForm(true)}/>
      </ButtonContainer>
      {showForm && <Form onClose={() => setShowForm(false)}/>}l
    </Container>
  );
}

export default App;
