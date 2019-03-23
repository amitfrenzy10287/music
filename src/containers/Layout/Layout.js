import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Drawer from '../../components/Drawer/Drawer';
import Logo from '../../assets/images/logo.png';
import DrawerIcon from '../../assets/images/drawerx32.png';

import {
  GlobalStyle,
  Wrapper,
  MenuBar,
  LogoImg,
  ELegantShadow,
  NytLogo,
  MenuWrapper,
  DrawerContaner,
  ContentDrawerItem,
  Button,
  DrawButtonWrap,
  StyledNavLink,
} from './style';



class Layout extends Component {
  state={
    open: false,
  };

  handleToggleOpen=()=> {
    this.setState({open:!this.state.open})
  };

  render () {
    let MenuItems = (
        <span>
          <StyledNavLink exact activeClassName='active' to='/'>
            Home
          </StyledNavLink>
        </span>
    );

    return (
      <Wrapper>
        <GlobalStyle />
        <header>
          <MenuBar>
            <NytLogo>
              <LogoImg src={Logo} />
            </NytLogo>
            <ELegantShadow>Yousician</ELegantShadow>
            <DrawButtonWrap><Button onClick={()=>this.handleToggleOpen()}>
              <img src={DrawerIcon} /></Button>
            </DrawButtonWrap>
            <MenuWrapper>
              {MenuItems}
            </MenuWrapper>
            <DrawerContaner>
              <Drawer open={this.state.open} position='left' onDismiss={() => this.handleToggleOpen()} backgroundColor='#fff' size='250px'>
                <ContentDrawerItem>
                  <Link to='/'>Home</Link>
                </ContentDrawerItem>
              </Drawer>
            </DrawerContaner>
          </MenuBar>
        </header>
        { this.props.children }
      </Wrapper>
    )
  }
}

export default Layout;
