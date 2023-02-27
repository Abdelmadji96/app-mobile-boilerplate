import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Caption } from 'react-native-paper';
import { View } from 'react-native';
import styles from './styles';
import Colors from '../../../Utils/constants/Colors';

const Input = (props) => {
  const {
    placeholder, keyboardType, onChangeText, error, value, inputStyles, errorMessage, wrapperStyles, borderRadius, outlineStyle, handleBlur,
  } = props;
  return (
    <View style={wrapperStyles}>
      <TextInput
        theme={{ roundness: borderRadius }}
        label={placeholder}
        placeholder={placeholder}
        mode="outlined"
        error={!!error}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        style={[styles.input, inputStyles]}
        outlineStyle={outlineStyle}
        placeholderTextColor={Colors.mediumGray}
        onBlur={handleBlur}
      />
      {errorMessage && <Caption style={styles.errorTxt}>{errorMessage}</Caption>}
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  handleBlur: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  errorMessage: PropTypes.string,
  inputStyles: PropTypes.shape(),
  wrapperStyles: PropTypes.shape(),
  outlineStyle: PropTypes.shape(),
  borderRadius: PropTypes.number,
};

Input.defaultProps = {
  onChangeText: undefined,
  handleBlur: undefined,
  placeholder: '',
  keyboardType: 'default',
  inputStyles: undefined,
  error: undefined,
  wrapperStyles: undefined,
  errorMessage: undefined,
  value: null,
  borderRadius: 8,
  outlineStyle: undefined,
};

export default Input;
