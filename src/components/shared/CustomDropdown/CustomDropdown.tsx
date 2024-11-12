import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {List} from 'react-native-paper';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {CustomDropdownInterface} from './CustomDropdown.interface';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

import CustomInput from '../CustomInput';
import CustomModal from '../CustomModal';

import Icon from 'react-native-vector-icons/Ionicons';

const CustomDropdown = ({
  placeHolder,
  value,

  error,
  errorMsg,

  handleChange,
  handleChangeObject,

  dropDownList,
}: CustomDropdownInterface) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={dimensionConstants?.activeOpacity}
        onPress={() => setShowDropDown(true)}>
        <CustomInput
          disabled={true}
          error={error}
          errorMsg={errorMsg}
          placeHolder={placeHolder}
          value={value}
          rightIcon={
            <Icon
              name="chevron-down-outline"
              size={dimensionConstants?.iconXXSmall}
              color={colorConstants?.gray}
            />
          }
          rightIconClick={() => setShowDropDown(true)}
        />
      </TouchableOpacity>

      <CustomModal
        open={showDropDown}
        title={placeHolder}
        onRequestClose={() => setShowDropDown(false)}
        body={
          <View style={styles({showDropDown}).dropDownContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {!dropDownList || dropDownList?.length == 0 ? (
                <List.Item
                  title={languageTxt.noDataAvailable}
                  onPress={() => {
                    setShowDropDown(!showDropDown);
                  }}
                />
              ) : (
                dropDownList?.map((item: any, key: any) => (
                  <List.Item
                    key={key}
                    style={
                      value == item?.label && {
                        backgroundColor: colorConstants?.primary,
                      }
                    }
                    titleStyle={
                      value == item?.label && {
                        color: colorConstants?.white,
                      }
                    }
                    title={item?.label}
                    onPress={() => {
                      handleChangeObject(item);
                      handleChange(item?.value);
                      setShowDropDown(!showDropDown);
                    }}
                  />
                ))
              )}
            </ScrollView>
          </View>
        }
      />
    </>
  );
};

CustomDropdown.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,

  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,

  handleChange: PropTypes.any.isRequired,
  handleChangeObject: PropTypes.any,

  dropDownList: PropTypes.any.isRequired,
};

CustomDropdown.defaultProps = {
  placeHolder: '',

  error: false,
  errorMsg: '',

  handleChange: () => {},
  handleChangeObject: () => {},

  dropDownList: [],
};

export default CustomDropdown;
