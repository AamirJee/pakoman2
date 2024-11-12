import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const CodeofConduct = () => {
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
        'https://pakomanfunds.com/wp-content/uploads/2022/05/Code-of-Conduct.pdf',
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

export default CodeofConduct;
