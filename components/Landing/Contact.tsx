import React from 'react';
import styled from 'styled-components';
import { COORDINATORS, COORDINATOR_EMAIL } from '../../constants/about';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import Link from 'next/link';
import LinkText from '../LinkText';
import { constants } from '../../stylesheets/constants';

const Container = styled.div`
  background-image: url('BobleKontakt.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 10vh 0;
  max-width: 400px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.9em;
  @media (min-width: ${constants.minWidth}) {
    font-size: 1em;
    margin: 10vh 0 20vh 0;
    max-width: none;
    min-height: none;
    width: 675px;
    height: 495px;
  }
  @media (max-width: 440px) {
    font-size: 0.8em;
    max-width: 350px;
    min-height: 255px;
  }
  @media (max-width: 350px) {
    font-size: 0.75em;
    max-width: 280px;
    min-height: 210px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${constants.minWidth}) {
    padding: 80px 0;
  }
`;

const DarkParagraph = styled(Paragraph)`
  color: ${colors.lightBlack};
  max-width: 11em;
  @media (min-width: ${constants.minWidth}) {
    font-size: 1.5em;
  }
`;

const BigHeader = styled(Header)`
  @media (min-width: ${constants.minWidth}) {
    font-size: 2.5em;
  }
`;

export const Contact = () => {
  return (
    <Container>
      <Content>
        <BigHeader color={colors.lightBlack}>Kontakt</BigHeader>
        <DarkParagraph
          dangerouslySetInnerHTML={{
            __html: COORDINATORS.join('<br/> <hr>'),
          }}
        />
        <Link href={'mailto:' + COORDINATOR_EMAIL} passHref>
          <LinkText color={colors.lightBlack}>{COORDINATOR_EMAIL}</LinkText>
        </Link>
      </Content>
    </Container>
  );
};
