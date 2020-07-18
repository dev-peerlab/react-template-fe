import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { FooterWrapper } from './styles';

function Copyright() {
  return (
    <Typography m={4} variant="body1" align="center" color="textSecondary">
      {'Copyright © '}
      <Link href="https://material-ui.com/">MyTemplate</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <FooterWrapper>
      <CSSBaseline />
      <Copyright />
    </FooterWrapper>
  );
}
