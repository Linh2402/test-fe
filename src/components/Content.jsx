import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
`;
const ItemContainer = styled.div`
  flex: 1;
  display: flex;
`;
const Image = styled.img`
  width: 150px;
  height: 200px;
  flex: 1;
`;
const Info = styled.div`
  flex: 2;
`;
const Title = styled.h3``;
const Desc = styled.p``;
const Content = () => {
  return (
    <Container>
      <ItemContainer>
        <Image src="https://cdn-icons-png.flaticon.com/512/281/281760.png" />
        <Info>
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem officiis ex illo quam consequatur placeat sint atque
            dicta quasi est repudiandae nemo voluptatum eius harum, tenetur
            voluptatem ab ea ratione.
          </Desc>
        </Info>
      </ItemContainer>
      <ItemContainer>
        <Image src="https://cdn-icons-png.flaticon.com/512/281/281760.png" />
        <Info>
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem officiis ex illo quam consequatur placeat sint atque
            dicta quasi est repudiandae nemo voluptatum eius harum, tenetur
            voluptatem ab ea ratione.
          </Desc>
        </Info>
      </ItemContainer>
      <ItemContainer>
        <Image src="https://cdn-icons-png.flaticon.com/512/281/281760.png" />
        <Info>
          <Title>Lorem ipsum dolor sit amet.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem officiis ex illo quam consequatur placeat sint atque
            dicta quasi est repudiandae nemo voluptatum eius harum, tenetur
            voluptatem ab ea ratione.
          </Desc>
        </Info>
      </ItemContainer>
    </Container>
  );
};

export default Content;
