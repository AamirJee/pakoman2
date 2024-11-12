import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const WhistleBlower = () => {
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
        'https://pakomanfunds.com/wp-content/uploads/2022/07/Extract-from-the-circular-resolution-No.-03.pdf',
    },
  ];
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.codeofConduct}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default WhistleBlower;
