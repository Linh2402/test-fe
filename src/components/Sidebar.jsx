import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: -20px;
  width: 200px;
  height: 100vh;
  background-color: black;
`;
const Item = styled.div`
  color: white;
  margin-left: 20px;
  :hover {
    cursor: pointer;
    color: blue;
  }
`;
const Title = styled.p`
  font-size: 20px;
`;

const Sidebar = () => {
  return (
    <Container>
      <Item>
        <Title>Home</Title>
      </Item>
      <hr />
      <Item>
        <Title>Services</Title>
      </Item>
      <hr />
      <Item>
        <Title>News</Title>
      </Item>
      <hr />
      <Item>
        <Title>Blog</Title>
      </Item>
      <hr />
      <Item>
        <Title>Contact</Title>
      </Item>
    </Container>
  );
};

export default Sidebar;
