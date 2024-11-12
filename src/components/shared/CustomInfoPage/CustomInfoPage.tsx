import React from 'react';
import {
  Alert,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {CustomInfoPageInterface} from './CustomInfoPage.interface';
import {dimensionConstants} from '../../../utils/constants/dimensionConstants';
import CustomTitle from '../CustomTitle';
import CustomImage from '../CustomImage';
import {fontConstants} from '../../../utils/constants/fontConstants';
import {colorConstants} from '../../../utils/constants/colorConstants';
import CustomPdfView from '../CustomPdfView';
import RNFetchBlob from 'rn-fetch-blob';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInfoPage = ({item}: CustomInfoPageInterface) => {
  const downloadHistory = async (url: any) => {
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let date = new Date();
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/Report_Download' +
          Math.floor(date.getTime() + date.getSeconds() / 2),
        description: 'Pakoman Report Download',
      },
    };
    config(options)
      .fetch('GET', url)
      .then(res => {
        alert('Report Downloaded Successfully.');
      });
  };

  const historyDownload = async (url: any) => {
    if (Platform.OS === 'ios') {
      downloadHistory(url);
    } else {
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'storage title',
            message: 'storage_permission',
          },
        ).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            downloadHistory(url);
          } else {
            Alert.alert('storage_permission');
          }
        });
      } catch (err) {}
    }
  };

  const CustomInfoSubPage = ({item}: CustomInfoPageInterface) => {
    return (
      <View
        style={{
          margin: dimensionConstants.margin,
          borderColor: item?.borderColor ? item?.borderColor : '',
          borderWidth: item?.borderColor ? 2 : 0,
          backgroundColor: item?.textBg ? item?.textBg : '',
          paddingHorizontal:
            item?.disclaimer == '1' ? dimensionConstants.padding : 0,
          padding: item?.borderColor ? dimensionConstants.padding : 0,
          marginBottom:
            item?.disclaimer == '1'
              ? dimensionConstants.marginXLarge
              : dimensionConstants.margin,
          borderRadius:
            item?.disclaimer == '1' ? dimensionConstants.cardSmallRadius : 0,
        }}>
        {item.title && (
          <CustomTitle
            title={item.title}
            fontSize={fontConstants.middle}
            titleColor={
              item?.disclaimer == '1'
                ? colorConstants.white
                : colorConstants.primary
            }
            extraStyles={{
              alignSelf: item.textAlign == 'center' ? 'center' : 'flex-start',
              textAlign: item.textAlign == 'center' ? 'center' : 'left',
              marginTop: dimensionConstants.marginSmall,
            }}
          />
        )}
        {item.subtitle && (
          <CustomTitle
            title={item.subtitle}
            fontSize={fontConstants.title}
            titleColor={item?.textColor ? item.textColor : colorConstants.gray}
            extraStyles={{
              alignSelf: item.textAlign == 'center' ? 'center' : 'flex-start',
              textAlign: item.textAlign == 'center' ? 'center' : 'left',
              marginBottom: dimensionConstants.marginSmall,
            }}
          />
        )}
        {item.description && (
          <CustomTitle
            title={item.description}
            fontSize={fontConstants.small}
            titleColor={item?.textColor ? item.textColor : colorConstants.gray}
            extraStyles={{
              fontWeight: '500',
              marginBottom: dimensionConstants.marginSmall,
              alignSelf: item.textAlign == 'center' ? 'center' : 'flex-start',
              textAlign: item.textAlign == 'center' ? 'center' : 'left',
            }}
          />
        )}
        {item.rightImage && (
          <CustomImage
            image={item.rightImage}
            extraStyles={{
              height: 400,
              width: '100%',
              borderRadius: 0,
              marginBottom: dimensionConstants.marginSmall,
            }}
          />
        )}
        {item.slider == '1' ? (
          <ScrollView
            horizontal={true}
            style={{alignSelf: 'center'}}
            showsHorizontalScrollIndicator={false}>
            {item.listObject && item.listObject?.length > 0
              ? item.listObject?.map((subItem: any, subKey: any) => (
                  <CustomInfoInnerSubPage
                    subItem={subItem}
                    item={item}
                    key={subKey}
                  />
                ))
              : Object.keys(item.listObject).map(objectkey =>
                  item.listObject[objectkey]?.map(
                    (subItem: any, subKey: any) => (
                      <CustomInfoInnerSubPage
                        subItem={subItem}
                        item={item}
                        key={subKey}
                      />
                    ),
                  ),
                )}
          </ScrollView>
        ) : (
          <>
            {item.listObject &&
              (item.listObject?.length > 0
                ? item.listObject?.map((subItem: any, subKey: any) => (
                    <CustomInfoInnerSubPage
                      subItem={subItem}
                      item={item}
                      key={subKey}
                    />
                  ))
                : Object.keys(item.listObject).map(objectkey =>
                    item.listObject[objectkey]?.map(
                      (subItem: any, subKey: any) => (
                        <CustomInfoInnerSubPage
                          subItem={subItem}
                          item={item}
                          key={subKey}
                        />
                      ),
                    ),
                  ))}
          </>
        )}
        {item?.pdf_url && <CustomPdfView uri={item?.pdf_url} />}
      </View>
    );
  };

  const CustomInfoInnerSubPage = ({subItem, item}: any) => {
    return (
      <View style={{flex: 1}}>
        {subItem?.image && (
          <CustomImage
            image={subItem.image}
            imageSize={subItem?.imageSize ? subItem?.imageSize : 150}
            extraStyles={
              subItem?.borderRadius
                ? {
                    resizeMode: 'contain',
                    marginHorizontal: 20,
                    borderRadius: subItem?.borderRadius,
                  }
                : {
                    marginHorizontal: 20,
                  }
            }
          />
        )}

        {subItem?.name && (
          <CustomTitle
            title={subItem.name}
            fontSize={fontConstants.middle}
            titleColor={
              subItem?.titleColor ? subItem.titleColor : colorConstants.drakGray
            }
            extraStyles={{
              alignSelf: item.textAlign == 'center' ? 'center' : 'flex-start',
              textAlign: item.textAlign == 'center' ? 'center' : 'left',
              marginTop: dimensionConstants.marginSmall,
            }}
          />
        )}
        {subItem?.postion && (
          <CustomTitle
            title={subItem.postion}
            fontSize={fontConstants.middle}
            titleColor={colorConstants.gray}
            extraStyles={{
              width: '80%',
              alignSelf: item.textAlign == 'center' ? 'center' : 'flex-start',
              textAlign: item.textAlign == 'center' ? 'center' : 'left',
              paddingVertical: dimensionConstants.paddingSmall,
              paddingHorizontal: dimensionConstants.padding,
              marginVertical: dimensionConstants.marginSmall,
              marginBottom: dimensionConstants.marginXLarge,
              backgroundColor: colorConstants.xlightGray,
            }}
          />
        )}

        {subItem?.title && (
          <CustomTitle
            title={subItem.title}
            fontSize={fontConstants.title}
            titleColor={
              subItem?.titleColor ? subItem.titleColor : colorConstants.primary
            }
            extraStyles={{
              alignSelf: item.textAlign == 'center' ? 'center' : 'flex-start',
              textAlign: item.textAlign == 'center' ? 'center' : 'left',
              marginTop: dimensionConstants.marginSmall,
            }}
          />
        )}
        {subItem?.description && (
          <CustomTitle
            title={subItem.description}
            fontSize={fontConstants.small}
            titleColor={colorConstants.drakGray}
            extraStyles={{
              alignSelf: item.textAlign == 'center' ? 'center' : 'flex-start',
              textAlign: item.textAlign == 'center' ? 'center' : 'left',
              marginTop: dimensionConstants.marginSmall,
            }}
          />
        )}

        {subItem?.pdfLink && (
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: subItem?.reportImage ? 0 : 1,
              justifyContent: 'space-between',
              marginBottom: dimensionConstants.margin,
              borderBottomColor: colorConstants.lightGray,
              paddingBottom: dimensionConstants.paddingSmall,
              marginHorizontal: dimensionConstants.marginSmall,
            }}>
            {subItem?.reportImage ? (
              <CustomImage image={subItem.reportImage} imageSize={150} />
            ) : (
              <>
                {subItem?.reportName && (
                  <CustomTitle
                    title={subItem.reportName}
                    fontSize={fontConstants.middle}
                    titleColor={colorConstants.gray}
                    extraStyles={{
                      flex: 2,
                      alignSelf:
                        item.textAlign == 'center' ? 'center' : 'flex-start',
                      textAlign: item.textAlign == 'center' ? 'center' : 'left',
                      marginTop: dimensionConstants.marginSmall,
                      marginRight: dimensionConstants.margin,
                    }}
                  />
                )}
              </>
            )}
            {subItem?.pdfLink && (
              <TouchableOpacity
                onPress={() => {
                  historyDownload(subItem.pdfLink);
                }}
                style={{
                  flex: 1,
                  borderRadius: 25,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: dimensionConstants.paddingMiddle,
                  paddingVertical: dimensionConstants.paddingSmall,
                  backgroundColor: colorConstants.primary,
                  marginLeft: dimensionConstants.margin,
                }}>
                <CustomTitle
                  title={'Download '}
                  fontSize={fontConstants.middle}
                  titleColor={colorConstants.white}
                />
                <MaterialCommunityIcons
                  name="download"
                  color={colorConstants.white}
                  size={dimensionConstants?.iconXXSmall}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <View>
      {item?.bgImage ? (
        <ImageBackground
          source={{uri: item?.bgImage}}
          resizeMode="cover"
          style={{
            margin: item?.borderColor ? dimensionConstants.margin : 0,
          }}>
          <CustomInfoSubPage item={item} />
        </ImageBackground>
      ) : (
        <CustomInfoSubPage item={item} />
      )}
    </View>
  );
};

export default CustomInfoPage;
