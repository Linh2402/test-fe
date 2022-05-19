import React from 'react';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 5;
`;

const Home = () => {
  return (
    <Container>
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <Title />
        <Header />
        <Content />
        <Footer />
      </Right>
    </Container>
  );
};

export default Home;
