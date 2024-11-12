import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const HowToInvest = () => {
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
      listObject: {
        'AGE SERIES': [
          {
            reportImage:
              'https://pakomanfunds.com/wp-content/uploads/2019/01/1.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/20.pdf',
          },
          {
            reportImage:
              'https://pakomanfunds.com/wp-content/uploads/2019/01/2.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/30.pdf',
          },
          {
            reportImage:
              'https://pakomanfunds.com/wp-content/uploads/2019/01/3.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/40.pdf',
          },
          {
            reportImage:
              'https://pakomanfunds.com/wp-content/uploads/2019/01/4.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/50.pdf',
          },
        ],
        'PROFESSION SERIES': [
          {
            reportImage:
              '	https://pakomanfunds.com/wp-content/uploads/2019/01/5.jpg',
            pdfLink: 'https://pakomanfunds.com/dailypack/realestate.pdf',
          },
        ],
        'GREEN SERIES': [
          {
            reportImage:
              '	https://pakomanfunds.com/wp-content/uploads/2019/01/6.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/compounding.pdf',
          },
          {
            reportImage:
              '	https://pakomanfunds.com/wp-content/uploads/2019/01/7.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/diversification.pdf',
          },
          {
            reportImage:
              '	https://pakomanfunds.com/wp-content/uploads/2019/01/8.jpg',
            pdfLink:
              'https://pakomanfunds.com/uploads/rupee%20cost%20average.pdf',
          },
        ],
        'MINI SERIES': [
          {
            reportImage:
              'https://pakomanfunds.com/wp-content/uploads/2019/01/9.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/whatkind.pdf',
          },
        ],
        OTHERS: [
          {
            reportImage:
              'https://pakomanfunds.com/wp-content/uploads/2019/01/10.jpg',
            pdfLink: 'https://pakomanfunds.com/uploads/children.pdf',
          },
          {
            reportImage:
              '	https://pakomanfunds.com/wp-content/uploads/2019/01/11.jpg',
            pdfLink:
              'https://pakomanfunds.com/aimschool/pdf/Investing%20as%20a%20woman.pdf',
          },
          {
            reportImage: 'https://pakomanfunds.com/uploads/housewife.pdf',
            pdfLink: 'https://pakomanfunds.com/uploads/housewife.pdf',
          },
        ],
      },
      slider: '',
      disclaimer: '',
      pdf_url: '',
    },
  ];
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.guest?.downloads?.howToInvest}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default HowToInvest;
