import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {useCompanyInformationInfo} from '../../../../../modules/pakoman/hooks';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';
import ErrorMessage from '../../../../shared/ErrorMessage';

const CompanyInfromation = () => {
  const {data, isLoading}: any = useCompanyInformationInfo();

  return (
    <Skeleton
      isLoading={isLoading}
      title={languageTxt?.reactStackKeys?.guest?.weServeYou?.companyInfromation}
      isBottomNav={true}
      containerStyle={styles.container}>
      {data?.data?.listObject ? (
        <CustomInfoPage
          item={{
            ...data?.data,
            title: '',
            subtitle: data?.data?.title || '',
            listObject: data?.data?.listObject?.map((item: any) => {
              return {...item, titleColor: '#d59b28'};
            }),
          }}
        />
      ) : (
        <ErrorMessage text="Data not available!" />
      )}
    </Skeleton>
  );
};

export default CompanyInfromation;
