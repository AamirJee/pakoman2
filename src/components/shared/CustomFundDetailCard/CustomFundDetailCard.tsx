import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {numberWithCommas} from '../../../utils/function';
import {languageTxt} from '../../../utils/constants/languageTxt';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import {CustomFundDetailCardInterface} from './CustomFundDetailCard.interface';

import CustomTitle from '../CustomTitle';

const CustomFundDetailCard = ({
  title,
  heading1 = '',
  description1 = '',
  heading2 = '',
  description2 = '',
  heading3 = '',
  description3 = '',
  heading4 = '',
  description4 = '',
  heading5 = '',
  description5 = '',
  heading6 = '',
  description6 = '',
  heading7 = '',
  description7 = '',
  heading8 = '',
  description8 = '',
  heading9 = '',
  description9 = '',
  heading10 = '',
  description10 = '',
  heading11 = '',
  description11 = '',
}: CustomFundDetailCardInterface) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomTitle title={title} extraStyles={styles.title} />
      </View>

      <View style={styles.bodyContainer}>
        {heading1 && description1 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading1} extraStyles={styles.header} />
            <CustomTitle
              title={`${description1}`}
              extraStyles={styles.description}
            />
          </View>
        )}
        {heading2 && description2 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading2} extraStyles={styles.header} />
            <CustomTitle
              title={`${description2}`}
              extraStyles={styles.description}
            />
          </View>
        )}
      </View>
      <View style={styles.bodyContainer}>
        {heading3 && description3 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading3} extraStyles={styles.header} />
            <CustomTitle
              title={`${description3}`}
              extraStyles={styles.description}
            />
          </View>
        )}
        {heading4 && description4 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading4} extraStyles={styles.header} />
            <CustomTitle
              title={`${description4}`}
              extraStyles={styles.description}
            />
          </View>
        )}
      </View>
      <View style={styles.borderBottom} />

      <View style={styles.bodyContainer}>
        {heading5 && description5 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading5} extraStyles={styles.header} />
            <CustomTitle
              title={`${description5}`}
              extraStyles={styles.description}
            />
          </View>
        )}
        {heading6 && description6 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading6} extraStyles={styles.header} />
            <CustomTitle
              title={`${description6}`}
              extraStyles={styles.description}
            />
          </View>
        )}
      </View>
      <View style={styles.borderBottom} />

      <View style={styles.bodyContainer}>
        {heading7 && description7 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading7} extraStyles={styles.header} />
            <CustomTitle
              title={`${description7}`}
              extraStyles={styles.description}
            />
          </View>
        )}
        {heading8 && description8 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading8} extraStyles={styles.header} />
            <CustomTitle
              title={`${description8}`}
              extraStyles={styles.description}
            />
          </View>
        )}
      </View>

      <View style={styles.bodyContainer}>
        {heading9 && description9 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading9} extraStyles={styles.header} />
            <CustomTitle
              title={`${description9}`}
              extraStyles={styles.description}
            />
          </View>
        )}
        {heading10 && description10 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading10} extraStyles={styles.header} />
            <CustomTitle
              title={`${description10}`}
              extraStyles={styles.description}
            />
          </View>
        )}
      </View>
      <View style={styles.bodyContainer}>
        {heading11 && description11 && (
          <View style={styles.subBodyContainer}>
            <CustomTitle title={heading11} extraStyles={styles.header} />
            <CustomTitle
              title={`${description11}`}
              extraStyles={styles.description}
            />
          </View>
        )}
      </View>
      <View style={{marginBottom: 20}} />
    </View>
  );
};

CustomFundDetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  heading1: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  balanceUnits: PropTypes.string,
  requestedUnits: PropTypes.string,
};

CustomFundDetailCard.defaultProps = {
  title: '',
  heading1: '',
  description1: '',
  heading2: '',
  description2: '',
  balanceUnits: '',
  requestedUnits: '',
};
export default CustomFundDetailCard;
