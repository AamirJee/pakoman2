import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
};

const TabBarAdvancedButton: React.FC<Props> = ({bgColor, ...props}) => (
  <View style={styles.container} pointerEvents="box-none">
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.9}
      onPress={props.onPress}>
      <MaterialCommunityIcons name="home" style={styles.buttonIcon} />
    </TouchableOpacity>
  </View>
);

export default TabBarAdvancedButton;
