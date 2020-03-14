import React from 'react';
import styled from 'styled-components';
import { JOIN_FIF } from '../../constants/paragraphs';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import Link from 'next/link';

const Grid = styled.div`
  min-height: 20vh;
  @media (min-width: 1023px) {
    min-width: 350px;
    margin: 40vh 0;
  }
  margin: 20vh 0;
`;

const StyledLink = styled.a`
  color: ${colors.lightBlue};
`;

export const Info = () => {
  return (
    <Grid>
      <Header color={colors.pink}>{JOIN_FIF.header}</Header>
      <Paragraph>
        {JOIN_FIF.content},{' '}
        <Link href={'mailto:' + JOIN_FIF.contact} passHref>
          <StyledLink>{JOIN_FIF.contact}</StyledLink>
        </Link>
      </Paragraph>
    </Grid>
  );
};
