import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {useWhoWeAreInfo} from '../../../../../modules/pakoman/hooks';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';
import ErrorMessage from '../../../../shared/ErrorMessage';

const WhoWeAre = () => {
  const {data, isLoading}: any = useWhoWeAreInfo();
  return (
    <Skeleton
      isLoading={isLoading}
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.whoWeAre}
      isBottomNav={true}
      containerStyle={styles.container}>
      <>
        {data?.data ? (
          <>
            {data?.data?.map((item: any, key: any) => (
              <CustomInfoPage item={item} key={key} />
            ))}
          </>
        ) : (
          <ErrorMessage text="Data not available!" />
        )}
      </>
    </Skeleton>
  );
};

export default WhoWeAre;
