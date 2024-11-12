import React from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {CustomModalInterface} from './CustomModal.interface';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

const CustomModal = ({
  title = '',
  body,
  open,
  onRequestClose,
  bottom,
  closeButton = true,
}: CustomModalInterface) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={onRequestClose}
      >
      <View style={styles({bottom}).container}>
        <View style={styles({bottom}).modalView}>
          {closeButton && (
            <TouchableOpacity
              style={styles({bottom}).closeButton}
              activeOpacity={dimensionConstants?.activeOpacity}
              onPress={onRequestClose}>
              <Icon
                name="close-outline"
                size={dimensionConstants?.iconSmall}
                color={colorConstants?.drakGray}
              />
            </TouchableOpacity>
          )}
          <Text style={styles({bottom}).title}>{title}</Text>
          {body}
        </View>
      </View>
    </Modal>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string,
  body: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  bottom: PropTypes.bool,
};

CustomModal.defaultProps = {
  title: '',
  body: <></>,
  open: false,
  onRequestClose: () => {},
  bottom: false,
};

export default CustomModal;
