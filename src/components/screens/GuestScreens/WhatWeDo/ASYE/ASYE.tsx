import React from 'react';

import {styles} from './styles';
import {useASYEInfo} from '../../../../../modules/pakoman/hooks';
import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';
import ErrorMessage from '../../../../shared/ErrorMessage';

const ASYE = () => {
  const {data, isLoading}: any = useASYEInfo();

  return (
    <Skeleton
      isLoading={isLoading}
      title={
        languageTxt?.reactStackKeys?.guest?.whatWeDo?.conventionalSolutions
          ?.asye
      }
      isBottomNav={true}
      containerStyle={styles.container}>
      <>
        {data?.data?.data ? (
          <>
            {data?.data?.data?.map((item: any, key: any) => (
              <CustomInfoPage
                key={key}
                item={{
                  ...item,
                  listObject: item?.listObject?.map((item: any) => {
                    return {
                      ...item,
                      titleColor: '#d59b28',
                      description: '',
                      postion: item?.description,
                    };
                  }),
                }}
              />
            ))}
          </>
        ) : (
          <ErrorMessage text="Data not available!" />
        )}
      </>
    </Skeleton>
  );
};

export default ASYE;
