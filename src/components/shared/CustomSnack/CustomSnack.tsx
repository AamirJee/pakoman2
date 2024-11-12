import React from 'react';
import {View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {CustomSnackInterface} from './CustomSnack.interface';

import {languageTxt} from '../../../utils/constants/languageTxt';

const CustomSnack = ({isOpen, setOpen}: CustomSnackInterface) => {
  return (
    <View style={styles?.container}>
      <Snackbar
        duration={3000}
        visible={isOpen == '' ? false : true}
        onDismiss={() => setOpen()}
        action={{
          label: languageTxt?.cancelTxt,
          onPress: () => setOpen(),
        }}>
        {isOpen}
      </Snackbar>
    </View>
  );
};

CustomSnack.propTypes = {
  isOpen: PropTypes.any.isRequired,
  setOpen: PropTypes.func.isRequired,
};

CustomSnack.defaultProps = {
  isOpen: false,
  setOpen: () => {},
};
export default CustomSnack;
