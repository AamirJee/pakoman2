import {StyleSheet} from 'react-native';
export const styles = (props: any) => {
  const {fontWeight, fontSize, titleColor} = props;

  return StyleSheet.create({
    title: {
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: titleColor,
      lineHeight: fontSize + 6,
    },
  });
};
