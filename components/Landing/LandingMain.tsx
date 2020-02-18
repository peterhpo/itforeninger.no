import React from 'react';
import styled from 'styled-components';
import { ABOUT_FIF } from '../../constants/paragraphs';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  margin: 60vh 0 0;
  width: 540px;
  max-width: 100vw;
`;

export const LandingMain = () => {
  return (
    <Wrapper>
      <Content>
        <Header color={colors.orange}>{ABOUT_FIF.header}</Header>
        <Paragraph>{ABOUT_FIF.content}</Paragraph>
      </Content>
    </Wrapper>
  );
};
