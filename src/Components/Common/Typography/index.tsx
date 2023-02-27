import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import { ViewStyle } from 'react-native';

import styles from './styles';

type TypologyProps = {
  children: React.ReactNode
  weight?: string
  style?: ViewStyle
}

const Typography: React.FC<TypologyProps> = ({ children, weight, style }) => (
  <Text style={{ ...styles.textStyle, fontFamily: `Montserrat-${weight}`, ...style }}>
    {children}
  </Text>
);

Typography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  weight: PropTypes.oneOf(['Regular', 'Medium', 'Italic', 'Bold', 'Black']),
  style: PropTypes.shape({}),
};

Typography.defaultProps = {
  weight: 'Regular',
  style: undefined,
};

export default Typography;
