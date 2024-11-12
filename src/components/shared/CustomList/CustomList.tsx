import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Image, View} from 'react-native';
import CustomListInterface from './CustomList.interface';
import CustomHeading from '../CustomHeading';
import styles from './styles';

const CustomList = ({
  listData,
  renderItemView,
  isHorizontal,
  horizontalScrollVisible,
  footer,
  header,
  isInverted,
  isEmptyIcon,
  emptyCTA,
  listLoader,
  isListLoading,
  isEmptyHeading,
  contentInset,
  onEndReached,
}: CustomListInterface) => {
  return !listData?.length && !isListLoading ? (
    <>
      <View style={styles?.centre}>
        <CustomHeading text={isEmptyHeading} />
        {isEmptyIcon ? (
          <Image style={styles?.emptyImage} source={isEmptyIcon} />
        ) : null}
        <View style={styles.emptyCTA}>{emptyCTA ? emptyCTA : null}</View>
      </View>
    </>
  ) : isListLoading ? (
    listLoader
  ) : (
    <FlatList
      data={listData}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={horizontalScrollVisible}
      renderItem={({item, index}: any) => renderItemView(item, index)}
      horizontal={isHorizontal}
      ListFooterComponent={() => footer}
      ListHeaderComponent={() => header}
      inverted={isInverted}
      contentInset={contentInset}
      onEndReached={onEndReached}
    />
  );
};

CustomList.propTypes = {
  listData: PropTypes.array.isRequired,
  renderItemView: PropTypes.func.isRequired,
  isHorizontal: PropTypes.bool,
  horizontalScrollVisible: PropTypes.bool,
  footer: PropTypes.any,
  header: PropTypes.any,
  isInverted: PropTypes.bool,
  isEmptyIcon: PropTypes.any,
  emptyCTA: PropTypes.node,
  listLoader: PropTypes.node,
  isListLoading: PropTypes.bool,
  isEmptyHeading: PropTypes.string,
  contentInset: PropTypes.any,
  onEndReached: PropTypes.func,
  loader: PropTypes.node,
};

CustomList.defaultProps = {
  listData: [],
  isHorizontal: false,
  horizontalScrollVisible: false,
  footer: <></>,
  header: <></>,
  isInverted: false,
  listLoader: <></>,
  isListLoading: false,
  contentInset: {},
  onEndReached: () => {},
  loader: <></>,
};

export default CustomList;
