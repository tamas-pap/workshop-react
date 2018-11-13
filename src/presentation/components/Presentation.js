import React, { PureComponent, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { findIndex } from 'lodash-es';
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
    nextSlide: undefined,
    previousSlide: undefined,
  };

  componentDidMount() {
    const { match: { params: { slideId } } } = this.props;
    const slideIndex = findIndex(SLIDES, { id: slideId });

    if (slideIndex === -1) {
      history.push(`/${SLIDES[0].id}`);
      return;
    }

    const slide = SLIDES[slideIndex];
    const nextSlide = slideIndex < SLIDES.length ? SLIDES[slideIndex + 1] : undefined;
    const previousSlide = slideIndex > 0 ? SLIDES[slideIndex - 1] : undefined;

    this.setState({ slide, nextSlide, previousSlide });
  }

  componentWillReceiveProps({ match: { params: { slideId } } }) {
    const slideIndex = findIndex(SLIDES, { id: slideId });
    const slide = SLIDES[slideIndex];
    const nextSlide = slideIndex < SLIDES.length ? SLIDES[slideIndex + 1] : undefined;
    const previousSlide = slideIndex > 0 ? SLIDES[slideIndex - 1] : undefined;

    this.setState({ slide, nextSlide, previousSlide });
  }

  openSidebar = () => {
    this.setState({ isSidebarOpen: true });
  };

  closeSidebar = () => {
    this.setState({ isSidebarOpen: false });
  };

  render() {
    const { isSidebarOpen, slide: { id, title, codeSandboxId } = {}, previousSlide, nextSlide } = this.state;

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

          <NavigationBar
            title={title}
            previous={previousSlide && previousSlide.id}
            next={nextSlide && nextSlide.id}
            openSidebar={this.openSidebar}
          />
        </PresentationContainer>
      </Fragment>
    );
  }
}

Presentation.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Presentation;
