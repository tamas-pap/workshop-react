import React, { PureComponent } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { find } from 'lodash-es';
import { SplitColumn } from '../../core/components/styled';
import { Split } from '../../core/components';
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
    slideTitle: undefined,
    codeSandboxId: undefined,
    markdownFileName: undefined,
  };

  componentDidMount() {
    const { match: { params: { slideId } } } = this.props;
    const slide = find(SLIDES, { id: slideId });

    if (!slide) {
      history.push(`/${SLIDES[0].id}`);
      return;
    }

    this.setState({
      slideTitle: slide.title,
      codeSandboxId: slide.codeSandboxId,
      markdownFileName: `${slide.id}.md`,
    });
  }

  componentWillReceiveProps({ match: { params: { slideId } } }) {
    this.openSlide(slideId);
  }

  openSlide = slideId => {
    const slide = find(SLIDES, { id: slideId });
    this.setState({
      slideTitle: slide.title,
      codeSandboxId: slide.codeSandboxId,
      markdownFileName: `${slide.id}.md`,
    });
  };

  openSidebar = () => {
    this.setState({ isSidebarOpen: true });
  };

  closeSidebar = () => {
    this.setState({ isSidebarOpen: false });
  };

  render() {
    const {
      isSidebarOpen,
      slideTitle,
      codeSandboxId,
      markdownFileName,
    } = this.state;

    return (
      <PresentationContainer>
        <Sidebar isOpen={isSidebarOpen} close={this.closeSidebar} />

        <Slide>
          <Split sizes={[65, 35]} minSize={0}>
            <SplitColumn>
              {!!codeSandboxId && <CodeSandbox id={codeSandboxId} />}
            </SplitColumn>

            <SplitColumn>
              {!!markdownFileName && <Markdown fileName={markdownFileName} />}
            </SplitColumn>
          </Split>
        </Slide>

        <NavigationBar
          title={slideTitle}
          previous="/composition"
          next="/inheritance"
          openSidebar={this.openSidebar}
        />
      </PresentationContainer>
    );
  }
}

Presentation.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Presentation;
