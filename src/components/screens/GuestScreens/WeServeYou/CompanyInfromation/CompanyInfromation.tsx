import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const CompanyInfromation = () => {
  var json = [
    {
      title: '',
      subtitle: 'COMPANY INFORMATION',
      rightImage: '',
      description: '',
      bgImage: '',
      borderColor: '',
      textColor: '',
      textAlign: 'center',
      textBg: '',
      listObject: [
        {
          name: 'Company Registration Number',
          titleColor: '#d59b28',
          postion: '00000013085/20060707',
        },
        {
          name: 'Company Incorporation Number',
          titleColor: '#d59b28',
          postion: '0057544',
        },
        {
          name: 'Asset Management Services License Number',
          titleColor: '#d59b28',
          postion: 'AMCW/01/POAMCL/AMS/01/2020',
        },
        {
          name: 'Investment Advisory Services License Number',
          titleColor: '#d59b28',
          postion: 'AMCW/02/POAMCL/IAS/01/2020',
        },
        {
          name: 'National Tax Number',
          titleColor: '#d59b28',
          postion: '280086-4',
        },
        {
          name: 'Status of Company',
          titleColor: '#d59b28',
          postion:
            'The Company is a Non-Banking Finance Company (NBFC), under license to carry out asset management and investment advisory services under the Non-Banking Finance Companies (Establishment and Regulation) Rules, 2003 (the Rules) and the Non-Banking Finance Companies and Notified Entities Regulations, 2008 (the Regulations).',
        },
        {
          name: 'Auditor of the Company',
          titleColor: '#d59b28',
          postion: 'EY Ford Rhodes',
        },
        {
          name: 'Legal Advisor',
          titleColor: '#d59b28',
          postion: 'Mohsin Tayab Ali & Company',
        },
        {
          name: 'Registered Office',
          titleColor: '#d59b28',
          postion:
            'Icon House, 83-C, 12th Commercial Street, Phase-II Extension, DHA, Karachi, Pakistan',
        },
        {
          name: 'Sales Office',
          titleColor: '#d59b28',
          postion:
            'Office # 14, 1st floor Park Lane Tower, 172 Tufail Road Lahore, Pakistan',
        },
      ],
      slider: '',
      disclaimer: '',
      pdf_url: '',
    },
  ];
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.weServeYou?.companyInfromation}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default CompanyInfromation;
