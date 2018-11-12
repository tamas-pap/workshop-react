import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/styles';
import { GlobalStyle } from './core/components/styled';
import { Presentation } from './presentation/components';

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Presentation} />
        </Switch>
      </Router>
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
);
