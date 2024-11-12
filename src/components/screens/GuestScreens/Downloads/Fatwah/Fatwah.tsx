import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const Fatwah = () => {
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
      pdf_url: 'https://pakomanfunds.com/uploads/Pak%20Oman%20Certificates.pdf',
    },
  ];
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.downloads?.fatwah}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default Fatwah;
