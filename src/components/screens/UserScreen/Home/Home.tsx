import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { FlatList, ScrollView, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { numberWithCommas } from '../../../../utils/function';
import { languageTxt } from '../../../../utils/constants/languageTxt';
import { fontConstants } from '../../../../utils/constants/fontConstants';
import { colorConstants } from '../../../../utils/constants/colorConstants';
import { useDashboardChartInfo } from '../../../../modules/m_transactions/hooks';
import { dimensionConstants } from '../../../../utils/constants/dimensionConstants';

import Loader from '../../../shared/Loader';
import CustomCard from '../../../shared/CustomCard';
import CustomTitle from '../../../shared/CustomTitle';
import HeaderLayout from '../../../layouts/HeaderLayout';
import CustomChartLabel from '../../../shared/CustomChartLabel';
import CustomPortfolioCard from '../../../shared/CustomPortfolioCard';
import CustomIconLabelValue from '../../../shared/CustomIconLabelValue';
import { useAuthentication } from '../../../../utils/globalHooks';

const Home = () => {
  const [mngmntCompany, setMngmntCompany] = useState('');
  const [bgColor, setBgColor] = useState(colorConstants.primary);
  const { data: authData }: any = useAuthentication();

  const { data: userChat } = useDashboardChartInfo();
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalInvest, setTotalInvest] = useState('0');
  const [numberFunds, setNumberFunds] = useState('0');
  const [totalUnits, setTotalUnits] = useState('0');
  const [pieData, setPieData]: any = useState([]);
  const [selectData, setSelectData]: any = useState();
 

  useEffect(() => {
    setTimeout(() => {
      setIsScrollEnabled(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (userChat)
      userChat.then((item: any) => {
        setIsLoading(false);
        setData(item?.data);
        let newData: any = [];
        item?.data?.map((subItem: any, key: number) => {
          newData.push({
            value: subItem?.percentages,
            color: subItem?.color,
            gradientCenterColor: subItem?.color,
            focused: key + 1 == item?.data?.length,
            label: subItem?.name,
          });
          if (key + 1 == item?.data?.length) {
            setSelectData({
              value: subItem?.percentages,
              color: subItem?.color,
              gradientCenterColor: subItem?.color,
              focused: true,
              label: subItem?.name,
            });
          }
        });
        setPieData(newData);

        let invest = 0;
        let unit = 0;
        if (item?.data) {
          item?.data?.map((val: any) => {
            invest = invest + Number(val?.population);
            unit = unit + parseFloat(val?.unit);
          });
          setTotalInvest(`${invest}`);
          setNumberFunds(item?.data?.length);
          setTotalUnits(`${unit.toFixed(2)}`);
        }
      });
  }, [userChat]);

  useEffect(() => {
    if (authData?.userProfile)
    //  console.log('Custom Fund Card', authData?.userProfile?.['MNGMNT COMPANY'])
    setMngmntCompany(authData?.userProfile?.['MNGMNT COMPANY']);
    let backgrndColor = mngmntCompany === 'RUSD Capital' ? colorConstants.primary : colorConstants.primaryB
    setBgColor(backgrndColor) 
   // console.log('Background Color HOME: ', bgColor)
  }, [bgColor]);
  
  const renderCard = ({ item }: any) => {
    return (
      <View style={styles?.chartLabelContainer}>
        <CustomChartLabel label={item.name} color={item.color} />
      </View>
    );
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <HeaderLayout
        bgColor={bgColor}  //{mngmntCompany !== 'RUSD Investment Bank' ? colorConstants.primary : colorConstants.primaryB}
        body={
          <ScrollView style={styles?.container}>
            <View style={[styles?.chartContainer, { backgroundColor: bgColor }]}></View>
            <View style={styles?.cardContainer}>
              <CustomCard
                isClickable={false}
                body={
                  <>
                    <View style={styles?.chartBody}>
                      <View style={{ width: '60%' }}>
                        <PieChart
                          data={pieData}
                          donut
                          showGradient
                          sectionAutoFocus
                          radius={90}
                          innerRadius={70}
                          innerCircleColor={colorConstants.white}
                          onPress={(val: any) => {
                            let newData: any = [];
                            pieData.map((item: any) => {
                              if (
                                val?.value === item?.value &&
                                val?.color === item?.color &&
                                val?.gradientCenterColor ===
                                item?.gradientCenterColor
                              ) {
                                setSelectData({
                                  value: item?.value,
                                  color: item?.color,
                                  gradientCenterColor:
                                    item?.gradientCenterColor,
                                  label: item?.label,
                                  focused: true,
                                });
                              }
                              newData.push({
                                value: item?.value,
                                color: item?.color,
                                gradientCenterColor: item?.gradientCenterColor,
                                label: item?.label,
                                focused:
                                  val?.value === item?.value &&
                                  val?.color === item?.color &&
                                  val?.gradientCenterColor ===
                                  item?.gradientCenterColor,
                              });
                            });
                            setPieData(newData);
                          }}
                          centerLabelComponent={() => {
                            return (
                              <View style={styles.chartBoxContainer}>
                                <Text
                                  style={
                                    styles.chartBoxText
                                  }>{`${selectData?.value}%`}</Text>
                                <Text style={styles.chartBoxSubtext}>
                                  {selectData?.label}
                                </Text>
                              </View>
                            );
                          }}
                        />
                      </View>
                      <View style={styles?.totalValueContainer}>
                        <CustomIconLabelValue
                          icon="database-outline"
                          label="Total Invest"
                          value={`${numberWithCommas(
                            Number(totalInvest).toFixed(2),
                          )}`}
                        />
                        <CustomIconLabelValue
                          icon="finance"
                          label="Number of Funds"
                          value={`${numberWithCommas(Number(numberFunds))}`}
                        />
                        <CustomIconLabelValue
                          icon="chart-donut"
                          label="Total Units"
                          value={`${numberWithCommas(
                            Number(totalUnits).toFixed(4),
                          )}`}
                        />
                      </View>
                    </View>

                    <View style={styles.listContainer}>
                      <FlatList
                        data={data}
                        scrollEnabled={isScrollEnabled}
                        numColumns={2}
                        renderItem={renderCard}
                        keyExtractor={(item: any) => item.name}
                      />
                    </View>
                  </>
                }
              />
              <CustomTitle
                title="Portfolio Summary"
                fontSize={fontConstants?.large}
                titleColor={colorConstants?.drakGray}
                extraStyles={{ marginVertical: dimensionConstants?.margin }}
              />

              {
                data ? (
                  data?.map((element: any, key) => (
                    <CustomPortfolioCard
                      key={key}
                      fundsName={element?.name}
                      unit={numberWithCommas(Number(element?.unit).toFixed(4))}
                      investment={numberWithCommas(
                        Number(element?.population).toFixed(2),
                      )}
                      percentages={Number(element?.percentages)}
                      color={element?.color}
                    />
                  ))
                ) : (
                  <View style={styles.noDataContainer}>
                    <MaterialCommunityIcons
                      name="alert"
                      size={dimensionConstants?.iconXXLarge}
                      color={bgColor}
                    />
                    <CustomTitle
                      title={languageTxt?.noDataAvailable}
                      fontSize={fontConstants.large}
                    />
                  </View>
                )
              }
            </View>
          </ScrollView>
        }
      />
    </>
  );
};

export default Home;
