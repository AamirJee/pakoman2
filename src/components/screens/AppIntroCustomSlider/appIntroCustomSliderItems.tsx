import {colorConstants} from '../../../utils/constants/colorConstants';
import {languageTxt} from '../../../utils/constants/languageTxt';

export const slides = [
  {
    key: 1,
    title: languageTxt?.pensionInvestorTitle,
    text: languageTxt?.pensionInvestorDetail,
    image: require('../../../assets/slider/1.png'),
    bg: colorConstants?.primary,
  },
  {
    key: 2,
    title: languageTxt?.corporateInvestorTitle,
    text: languageTxt?.corporateInvestorDetail,
    image: require('../../../assets/slider/2.png'),
    bg: colorConstants?.primary,
  },
  {
    key: 3,
    title: languageTxt?.individualInvestorTitle,
    text: languageTxt?.individualInvestorDetail,
    image: require('../../../assets/slider/3.png'),
    bg: colorConstants?.primary,
  },
];
