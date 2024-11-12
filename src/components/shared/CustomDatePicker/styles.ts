import {StyleSheet} from 'react-native';
import {colorConstants} from '../../../utils/constants/colorConstants';

export const styles = StyleSheet.create({});

export const calendarStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 6,
    alignItems: 'center',
  },
  monthText: {
    fontSize: 24,
    lineHeight: 40,
    marginVertical: 10,
    marginHorizontal: 25,
  },
  dayHeader: {
    color: colorConstants.black,
  },
});
