import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const ProxyVotingPolicy = () => {
  var json = [
    {
      title: '',
      subtitle: '',
      rightImage: '',
      description: '',
      bgImage: '',
      borderColor: '',
      textColor: '',
      textAlign: '',
      textBg: '',
      listObject: '',
      slider: '',
      disclaimer: '',
      pdf_url: 'https://pakomanfunds.com/uploads/Proxy-Voting-%20Policy.pdf',
    },
  ];
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.downloads?.proxyVotingPolicy}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default ProxyVotingPolicy;
