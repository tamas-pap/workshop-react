import React, { PureComponent, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { find } from 'lodash-es';
import { SplitColumn } from '../../core/components/styled';
import { Split, DocumentTitle } from '../../core/components';
import { SLIDES } from '../constants';
import { Presentation as PresentationContainer, Slide } from './styled';
import history from '../../core/services/history';
import NavigationBar from './NavigationBar';
import CodeSandbox from './CodeSandbox';
import Markdown from './Markdown';
import Sidebar from './Sidebar';

class Presentation extends PureComponent {
  state = {
    isSidebarOpen: false,
    slide: undefined,
  };

  componentDidMount() {
    const { match: { params: { slideId } } } = this.props;
    const slide = find(SLIDES, { id: slideId });

    if (!slide) {
      history.push(`/${SLIDES[0].id}`);
      return;
    }

    this.setState({ slide });
  }

  componentWillReceiveProps({ match: { params: { slideId } } }) {
    this.openSlide(slideId);
  }

  openSlide = slideId => {
    const slide = find(SLIDES, { id: slideId });
    this.setState({ slide });
  };

  openSidebar = () => {
    this.setState({ isSidebarOpen: true });
  };

  closeSidebar = () => {
    this.setState({ isSidebarOpen: false });
  };

  render() {
    const { isSidebarOpen, slide: { id, title, codeSandboxId } = {} } = this.state;

    return (
      <Fragment>
        <DocumentTitle>{title}</DocumentTitle>
        <PresentationContainer>
          <Sidebar isOpen={isSidebarOpen} close={this.closeSidebar} />

          <Slide>
            <Split sizes={[65, 35]} minSize={0}>
              <SplitColumn>{!!codeSandboxId && <CodeSandbox id={codeSandboxId} />}</SplitColumn>
              <SplitColumn>{!!id && <Markdown fileName={`${id}.md`} />}</SplitColumn>
            </Split>
          </Slide>

          <NavigationBar title={title} previous="/composition" next="/inheritance" openSidebar={this.openSidebar} />
        </PresentationContainer>
      </Fragment>
    );
  }
}

Presentation.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Presentation;
