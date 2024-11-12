import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const ProvisioningPolicyFinal = () => {
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
      pdf_url:
        'https://pakomanfunds.com/uploads/PROVISIONING%20POLICY%20%20Final.pdf',
    },
  ];
  return (
    <Skeleton
      title={
        languageTxt?.reactStackKeys?.guest?.downloads?.provisioningPolicyFinal
      }
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default ProvisioningPolicyFinal;
