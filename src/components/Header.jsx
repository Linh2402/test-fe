import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  text-align: center;
  margin: 20px 0px;
`;
const Title = styled.h1``;

const Header = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet.</Title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni
      velit, fugit distinctio ad earum nobis sint recusandae pariatur hic
      consectetur voluptatibus eaque, porro assumenda eligendi praesentium
      quisquam voluptas ex! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Minima magni velit, fugit distinctio ad earum nobis sint recusandae
      pariatur hic consectetur voluptatibus eaque, porro assumenda eligendi
      praesentium quisquam voluptas ex!
    </Container>
  );
};

export default Header;
