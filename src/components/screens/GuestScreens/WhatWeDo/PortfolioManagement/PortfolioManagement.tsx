import React from 'react';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import Skeleton from '../../../../shared/Skeleton';

const PortfolioManagement = () => {
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.whatWeDo?.portfolioManagement}
      isBottomNav={true}>
      <></>
    </Skeleton>
  );
};

export default PortfolioManagement;
