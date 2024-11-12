import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Loader from '../Loader';
import {styles} from './styles';
import TouchableIcon from '../TouchableIcon';
import CustomTitle from '../CustomTitle';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';

interface SkeletonProps {
  title: string;
  children: JSX.Element;
  isLoading?: boolean;
  isBack?: boolean;
  isScroll?: boolean;
  isBottomNav?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  topContainerStyle?: StyleProp<ViewStyle>;
  backClickEventStatus?: boolean;
  backClickEvent?: any;
}

const Skeleton = ({
  title = '',
  children,
  isLoading = false,
  isBack = true,
  isScroll = true,
  isBottomNav = false,
  containerStyle,
  topContainerStyle,
  backClickEventStatus = false,
  backClickEvent = () => {},
}: SkeletonProps) => {
  const navigation = useNavigation();

  const Container = isScroll ? ScrollView : View;
  const BottomNavCss = isBottomNav ? {marginBottom: 50} : {};

  return (
    <View style={styles.container}>
      <View style={[styles.backArrowContainer, topContainerStyle]}>
        {isBack && (
          <TouchableIcon
            icon={
              <MaterialCommunityIcons
                name="chevron-left"
                size={dimensionConstants?.iconMiddle}
                color={colorConstants?.white}
              />
            }
            onButtonPressCb={
              backClickEventStatus
                ? backClickEvent
                : () => {
                    navigation.goBack();
                  }
            }
            styles={styles.backArrow}
          />
        )}
        <CustomTitle
          title={title}
          fontSize={fontConstants.header}
          titleColor={colorConstants.white}
          extraStyles={
            !isBack
              ? {
                  flex: 1,
                  paddingVertical: 17,
                  paddingHorizontal: dimensionConstants.paddingXXLarge,
                }
              : {flex: 1}
          }
        />
      </View>
      <KeyboardAvoidingView style={styles.content}>
        <Container
          style={[BottomNavCss, containerStyle]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          {children}
        </Container>
      </KeyboardAvoidingView>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default Skeleton;
