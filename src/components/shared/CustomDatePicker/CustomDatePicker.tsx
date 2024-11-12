import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Calendar, DateData} from 'react-native-calendars';

import moment from 'moment';

import {styles, calendarStyles} from './styles';
import {colorConstants} from '../../../utils/constants/colorConstants';

import dateFormat from '../../../utils/constants/dateFormat';
import CustomModal from '../CustomModal';
import {
  CustomDatePickerInterface,
  DatePeriodInterface,
  PeriodBy,
} from './CustomDatePicker.interface';
import DatePicker from 'react-native-modern-datepicker';

const CustomDatePicker = ({
  showDropDown,
  setShowDropDown,
  modalTitle,
  data,
  onChange,
  minDate,
}: CustomDatePickerInterface) => {
  // const generateMarkedDate = () => {
  //   if (
  //     data?.startDate !== undefined &&
  //     data?.endDate !== undefined &&
  //     data?.period !== undefined
  //   ) {
  //     const momentStartDate = moment(data.startDate);
  //     const momentEndDate = moment(data.endDate);
  //     if (data?.period === PeriodBy.BY_DAY) {
  //       return {
  //         [data.startDate]: {
  //           selected: true,
  //           color: colorConstants.primary,
  //           textColor: colorConstants.white,
  //         },
  //       };
  //     } else if (data?.period === PeriodBy.BY_WEEK) {
  //       const markedDates: any = {
  //         [data.startDate]: {
  //           startingDay: true,
  //           color: colorConstants.primary,
  //           textColor: colorConstants.white,
  //         },
  //       };
  //       momentStartDate.add(1, 'days');
  //       while (momentStartDate.isBefore(momentEndDate)) {
  //         markedDates[momentStartDate.format(dateFormat.CALENDAR_FORMAT)] = {
  //           color: colorConstants.primaryLight,
  //           textColor: colorConstants.gray,
  //         };
  //         momentStartDate.add(1, 'days');
  //       }
  //       markedDates[data.endDate] = {
  //         endingDay: true,
  //         color: colorConstants.primary,
  //         textColor: colorConstants.white,
  //       };
  //       return markedDates;
  //     }
  //   }
  //   return {};
  // };
  // const handleSelectDate = (date?: DateData): void => {
  //   if (date) {
  //     let datePeriodValue: DatePeriodInterface = {
  //       startDate: undefined,
  //       endDate: undefined,
  //     };
  //     const momentDate = moment(date.dateString);
  //     if (data?.period === undefined || data?.period === PeriodBy.BY_DAY) {
  //       datePeriodValue = {
  //         startDate: date.dateString,
  //         endDate: date.dateString,
  //         period: PeriodBy.BY_DAY,
  //       };
  //     } else if (data?.period === PeriodBy.BY_WEEK) {
  //       datePeriodValue = {
  //         startDate: momentDate.format(dateFormat.CALENDAR_FORMAT),
  //         endDate: momentDate.format(dateFormat.CALENDAR_FORMAT),
  //         period: PeriodBy.BY_WEEK,
  //       };
  //     }
  //     if (onChange) {
  //       onChange(datePeriodValue);
  //     }
  //   }
  //   setShowDropDown(false);
  // };

  const handleSelectDate = (date: string): void => {
    if (date) {
      let datePeriodValue: DatePeriodInterface = {
        startDate: undefined,
        endDate: undefined,
      };
      const momentDate = moment(date, dateFormat.DOB_FORMAT);

      if (data?.period === undefined || data?.period === PeriodBy.BY_DAY) {
        datePeriodValue = {
          startDate: momentDate.format(dateFormat.CALENDAR_FORMAT),
          endDate: momentDate.format(dateFormat.CALENDAR_FORMAT),
          period: PeriodBy.BY_DAY,
        };
      } else if (data?.period === PeriodBy.BY_WEEK) {
        datePeriodValue = {
          startDate: momentDate.format(dateFormat.CALENDAR_FORMAT),
          endDate: momentDate.format(dateFormat.CALENDAR_FORMAT),
          period: PeriodBy.BY_WEEK,
        };
      }
      if (onChange) {
        onChange(datePeriodValue);
      }
    }
    setShowDropDown(false);
  };

  return (
    <CustomModal
      open={showDropDown}
      title={modalTitle}
      onRequestClose={() => setShowDropDown(false)}
      body={
        // <Calendar
        //   onDayPress={handleSelectDate}
        //   onDayLongPress={handleSelectDate} // Debug
        //   theme={{
        //     //@ts-ignore
        //     'stylesheet.calendar.header': calendarStyles,
        //   }}
        //   minDate={minDate}
        //   maxDate={moment().format(dateFormat.CALENDAR_FORMAT)}
        //   initialDate={data ? data.endDate : undefined}
        //   markingType={data?.period === PeriodBy.BY_WEEK ? 'period' : 'dot'}
        //   markedDates={generateMarkedDate()}
        // />
        <DatePicker
          options={{
            mainColor: colorConstants.primary,
          }}
          mode="calendar"
          current={moment().format(dateFormat.CALENDAR_FORMAT)}
          selected={data.endDate}
          minimumDate={minDate}
          maximumDate={moment().format(dateFormat.CALENDAR_FORMAT)}
          onDateChange={handleSelectDate}
        />
      }
    />
  );
};

CustomDatePicker.propTypes = {
  showDropDown: PropTypes.bool.isRequired,
  setShowDropDown: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  minDate: PropTypes.string,
};

CustomDatePicker.defaultProps = {
  showDropDown: false,
  setShowDropDown: () => {},
  modalTitle: '',
  minDate: undefined,
  data: {
    startDate: moment().subtract(7, 'd').format(dateFormat.CALENDAR_FORMAT),
    endDate: moment().format(dateFormat.CALENDAR_FORMAT),
    period: PeriodBy.BY_WEEK,
  },
  onChange: () => {},
};

export default CustomDatePicker;
