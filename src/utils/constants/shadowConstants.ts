import {colorConstants} from './colorConstants';
import {dimensionConstants} from './dimensionConstants';

export const shadowConstants = {
  shadowColor: colorConstants?.gray,
  shadowOffset: {
    width: dimensionConstants?.shadowOffsetWidth,
    height: dimensionConstants?.shadowOffsetHeight,
  },
  shadowOpacity: dimensionConstants?.shadowOpacity,
  shadowRadius: dimensionConstants?.shadowRadius,
  elevation: dimensionConstants?.elevation,
};
