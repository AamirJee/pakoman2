import React from 'react';
import {Platform, ScrollView, View} from 'react-native';
import Pdf from 'react-native-pdf';
import ICustomPdfView from './CustomPdfView.interface';
import styles from './styles';
import PropTypes from 'prop-types';
import Loader from '../Loader';

const CustomPdfView = ({uri, isHorizontal}: ICustomPdfView) => {
  const source = {uri: uri, cache: true};
  return (
    <ScrollView>
      <View>
        <Pdf
          horizontal={isHorizontal}
          renderActivityIndicator={() => <Loader isLoading={true} />}
          source={source}
          trustAllCerts={Platform.OS === 'ios'}
          onLoadComplete={(numberOfPages, filePath) => {}}
          onPageChanged={(page, numberOfPages) => {}}
          onError={error => {}}
          onPressLink={uri => {}}
          style={styles.pdf}
        />
      </View>
    </ScrollView>
  );
};

CustomPdfView.propTypes = {
  uri: PropTypes.string.isRequired,
  isHorizontal: PropTypes.bool,
};

CustomPdfView.defaultProps = {
  isHorizontal: false,
};

export default CustomPdfView;
