import React from 'react';

import {styles} from './styles';
import {usePortfolioManagementInfo} from '../../../../../modules/pakoman/hooks';
import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import ErrorMessage from '../../../../shared/ErrorMessage';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const PortfolioManagement = () => {
  const {data, isLoading}: any = usePortfolioManagementInfo();
  return (
    <Skeleton
      isLoading={isLoading}
      title={languageTxt?.reactStackKeys?.guest?.whatWeDo?.portfolioManagement}
      isBottomNav={true}
      containerStyle={styles.container}>
      <>
        {data?.data?.title ? (
          <>
            <CustomInfoPage
              item={{
                ...data?.data,
                listObject: data?.data?.listObject?.map((item: any) => {
                  return {
                    ...item,
                    titleColor: '#d59b28',
                  };
                }),
              }}
            />
          </>
        ) : (
          <ErrorMessage text="Data not available!" />
        )}
      </>
    </Skeleton>
  );
};

export default PortfolioManagement;
