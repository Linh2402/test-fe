import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 300px;
`;

const Title = () => {
  return (
    <Container>
      <Image src="http://static.ybox.vn/2020/9/0/1599362450757-nccplus.png" />
    </Container>
  );
};

export default Title;
