import React, { Component } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar } from 'rsuite';
import { Nav } from 'rsuite';
import { Icon } from 'rsuite';

const NavBarInstance = ( { onSelect,...props }) => {
  return (
    <Navbar  {...props}>
      <Navbar.Header>
        <h3 style={styles.textfield}>
          Wafa
        </h3>
      </Navbar.Header>
      <Navbar.Body>
        <Nav onSelect={onSelect} pullRight >
          <Nav.Item icon={<Icon icon="cog" />}>Translate</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar >
  );
};


class App extends Component {
  handleSelect() {
   console.log("1111")
  }
  render() {
    return (
      <div style={styles.nav}>

        <NavBarInstance
         onSelect={this.handleSelect}
          appearance="inverse"
         
        />

      </div>
    );
  }
}

const styles = {
  textfield: { marginLeft: 60, marginTop: 10 },
  nav: { marginLeft: 60, marginTop: 60, marginRight: 60, },
}

export default App;