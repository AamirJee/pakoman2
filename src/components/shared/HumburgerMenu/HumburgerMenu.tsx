import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../CustomButton';
import CustomModal from '../CustomModal';

import {HumburgerMenuInterface} from './HumburgerMenu.interface';
import {styles} from './styles';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {asyncLogoutService} from '../../../config/asyncStorage/asynDataStore';
import {useQueryClient} from 'react-query';

const HumburgerMenu = ({open, setOpen}: HumburgerMenuInterface) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  return (
    <CustomModal
      open={open}
      bottom={true}
      onRequestClose={() => setOpen(false)}
      title={'Quick Actions'}
      body={
        <View style={styles?.buttonContainer}>
          <CustomButton
            backgroundColor={colorConstants?.transparent}
            textColor={colorConstants?.drakGray}
            extraStyles={styles?.extraStyles}
            fontSize={fontConstants?.xsmall}
            icon={
              <Icon
                name="person-outline"
                style={styles?.icon}
                size={dimensionConstants?.iconMiddle}
                color={colorConstants?.primary}
              />
            }
            buttonText={'Profile'}
            handleOnPress={() => {
              setOpen(false);
            }}
          />
          <CustomButton
            backgroundColor={colorConstants?.transparent}
            textColor={colorConstants?.drakGray}
            extraStyles={styles?.extraStyles}
            fontSize={fontConstants?.xsmall}
            icon={
              <Icon
                name="bookmark-outline"
                style={styles?.icon}
                size={dimensionConstants?.iconMiddle}
                color={colorConstants?.primary}
              />
            }
            buttonText={'Bookmarks'}
            handleOnPress={() => {
              setOpen(false);
            }}
          />
          <CustomButton
            backgroundColor={colorConstants?.transparent}
            textColor={colorConstants?.drakGray}
            extraStyles={styles?.extraStyles}
            fontSize={fontConstants?.xsmall}
            icon={
              <Icon
                name="log-out-outline"
                style={styles?.icon}
                size={dimensionConstants?.iconMiddle}
                color={colorConstants?.primary}
              />
            }
            buttonText={'Logout'}
            handleOnPress={async () => {
              await asyncLogoutService(languageTxt, queryClient);
              navigation.navigate(languageTxt?.reactStackKeys?.guest?.name);
            }}
          />
        </View>
      }
    />
  );
};

HumburgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

HumburgerMenu.defaultProps = {
  open: false,
  setOpen: () => {},
};

export default HumburgerMenu;
