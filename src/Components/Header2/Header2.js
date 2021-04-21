import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
      font-size : 50px;
      color: lightblue;
      border: 1px solid cyan;
`;

const Container = styled.div`
      background-color: goldenrod;
      margin: 10px;
`;

const Header2 = () => {
      return (
            <Container>
                  <Title>This is Styled Header</Title>
            </Container>
      );
};

export default Header2;