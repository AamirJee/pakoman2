import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {styles} from './styles';

const CodeFieldOTP = ({
  onChangeText,
  cellCount,
  requestNewCode,
  otpRemainingTimeSec,
  setOtpRemainingTimeSec,
}: any) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: cellCount});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (otpRemainingTimeSec) {
        setOtpRemainingTimeSec(otpRemainingTimeSec - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [otpRemainingTimeSec]);

  const formatSeconds = (secs: number) => {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);

    const h = Math.floor(secs / 3600);
    const m = Math.floor(secs / 60) - h * 60;
    const s = Math.floor(secs - h * 3600 - m * 60);

    return `${pad(m)}:${pad(s)}`;
  };
  return (
    <>
      <CodeField
        ref={ref}
        {...props}
        caretHidden={false}
        autoFocus={true}
        value={value}
        onChangeText={txt => {
          onChangeText(txt);
          setValue(txt);
        }}
        onPressIn={() => {
          onChangeText('');
        }}
        cellCount={cellCount}
        keyboardType="numeric"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={styles.cell}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.txtCell}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
        activeOpacity={0.7}
        style={{
          alignItems: 'center',
        }}
        onPress={requestNewCode}
        disabled={!!otpRemainingTimeSec}>
        {otpRemainingTimeSec ? (
          <Text
            style={
              styles.labelTextDisabled
            }>{`${'Request new code in'} ${formatSeconds(
            otpRemainingTimeSec,
          )}`}</Text>
        ) : (
          <Text style={styles.labelText}>{'Request new code'}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default CodeFieldOTP;
