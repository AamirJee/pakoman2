import React from 'react';
import PropTypes from 'prop-types';

import {TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {CustomInputInterface} from './CustomInput.interface';
import ValidationMessage from '../ValidationMessage';
import {colorConstants} from '../../../utils/constants/colorConstants';

const autoCapitalizeArray = ['characters', 'none', 'sentences', 'words'];
const keyboardTypeArray = [
  'ascii-capable',
  'decimal-pad',
  'default',
  'email-address',
  'name-phone-pad',
  'number-pad',
  'numbers-and-punctuation',
  'numeric',
  'phone-pad',
  'twitter',
  'url',
  'visible-password',
  'web-search',
];

const CustomInput = ({
  placeHolder,
  value,

  error,
  errorMsg,
  disabled,

  handleChange,
  onBlur,
  blurOnSubmit,

  multiline,
  numberOfLines,

  keyboardType,
  autoCapitalize,

  rightIcon,
  rightIconClick,

  leftIcon,
  leftIconClick,

  secureTextEntry,
  onEndEditing,
  autoFocus,
  ref,
  onFocus,
}: CustomInputInterface) => {
  return (
    <>
      <View style={styles({error, multiline}).shadowContainer}>
        {rightIconClick ? (
          <TouchableOpacity
            style={styles({error, multiline}).inputContainer}
            disabled={rightIconClick ? false : true}
            activeOpacity={0.8}
            onPress={rightIconClick}>
            {leftIcon && (
              <TouchableOpacity
                disabled={leftIconClick ? false : true}
                activeOpacity={0.8}
                onPress={leftIconClick}>
                {leftIcon}
              </TouchableOpacity>
            )}
            <TextInput
              placeholder={placeHolder}
              placeholderTextColor={colorConstants.lightGray}
              value={value}
              editable={!disabled}
              selectTextOnFocus={!disabled}
              onChangeText={text => handleChange(text)}
              onBlur={() => onBlur()}
              blurOnSubmit={blurOnSubmit}
              multiline={multiline}
              numberOfLines={numberOfLines}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              returnKeyType={'done'}
              style={styles({error, multiline}).input}
              secureTextEntry={secureTextEntry}
              maxLength={200}
              onEndEditing={onEndEditing}
              autoFocus={autoFocus}
              ref={ref}
              onFocus={onFocus}
            />
            {rightIcon && <>{rightIcon}</>}
          </TouchableOpacity>
        ) : (
          <View style={styles({error, multiline}).inputContainer}>
            {leftIcon && (
              <TouchableOpacity
                disabled={leftIconClick ? false : true}
                activeOpacity={0.8}
                onPress={leftIconClick}>
                {leftIcon}
              </TouchableOpacity>
            )}
            <TextInput
              placeholder={placeHolder}
              value={value}
              editable={!disabled}
              selectTextOnFocus={!disabled}
              onChangeText={text => handleChange(text)}
              onBlur={() => onBlur()}
              blurOnSubmit={blurOnSubmit}
              multiline={multiline}
              numberOfLines={numberOfLines}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              returnKeyType={'done'}
              style={styles({error, multiline}).input}
              secureTextEntry={secureTextEntry}
              maxLength={200}
              onEndEditing={onEndEditing}
              autoFocus={autoFocus}
              ref={ref}
              onFocus={onFocus}
            />
            {rightIcon && (
              <TouchableOpacity
                disabled={rightIconClick ? false : true}
                activeOpacity={0.8}
                onPress={rightIconClick}>
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
        )}
        {error && !!errorMsg && <ValidationMessage children={errorMsg} />}
      </View>
    </>
  );
};

CustomInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,

  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,

  handleChange: PropTypes.func,
  onBlur: PropTypes.func,

  blurOnSubmit: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,

  keyboardType: PropTypes.oneOf(keyboardTypeArray),
  autoCapitalize: PropTypes.oneOf(autoCapitalizeArray),

  rightIcon: PropTypes.any,
  rightIconClick: PropTypes.any,

  leftIcon: PropTypes.any,
  leftIconClick: PropTypes.any,

  secureTextEntry: PropTypes.bool,
  onEndEditing: PropTypes.func,
  autoFocus: PropTypes.bool,
  ref: PropTypes.any,
};

CustomInput.defaultProps = {
  placeHolder: '',
  value: '',
  error: false,
  errorMsg: '',
  disabled: false,

  handleChange: () => {},
  onBlur: () => {},

  blurOnSubmit: false,
  multiline: false,
  numberOfLines: 1,

  keyboardType: 'default',
  autoCapitalize: 'sentences',

  rightIconClick: () => {},

  leftIconClick: () => {},

  secureTextEntry: false,
  onEndEditing: () => {},
  autoFocus: false,
};
export default CustomInput;
