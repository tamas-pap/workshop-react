import React, { PureComponent } from 'react';
import { Presentation as PresentationContainer, Slide } from './styled';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';

class Presentation extends PureComponent {
  state = { isSidebarOpen: false };

  openSidebar = () => {
    this.setState({ isSidebarOpen: true });
  };

  closeSidebar = () => {
    this.setState({ isSidebarOpen: false });
  };

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <PresentationContainer>
        <Sidebar isOpen={isSidebarOpen} close={this.closeSidebar} />
        <Slide />
        <NavigationBar
          title="Introducing JSX"
          previous="/composition"
          next="/inheritance"
          openSidebar={this.openSidebar}
        />
      </PresentationContainer>
    );
  }
}

export default Presentation;
