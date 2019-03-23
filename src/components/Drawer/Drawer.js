import React from 'react';
import PropTypes from 'prop-types';

import {
  DrawerWrapper,
  DrawerOverlay,
  DrawerContent,
} from './Style';

const Drawer =(props)=> {

    const { open, size, position, onDismiss, backgroundColor } = props;

    return (
      <DrawerWrapper open={open} size={size} position={position}>
        <DrawerOverlay open={open} onClick={onDismiss} />
        <DrawerContent open={open} size={size} position={position} backgroundColor={backgroundColor}>
          {props.children}
        </DrawerContent>
      </DrawerWrapper>
    );
};

export default Drawer;

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf(['top','bottom','left','right']),
  onDismiss: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
};

Drawer.defaultProps = {
  size: '300px',
  position: 'left',
  backgroundColor: '#fff',
};
