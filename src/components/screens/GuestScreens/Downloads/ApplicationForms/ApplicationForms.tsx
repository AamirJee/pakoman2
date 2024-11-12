import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const ApplicationForms = () => {
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
        all: [
          {
            reportName: 'Transfer of Unit Form',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Transfer-Form-7-9-21.pdf',
          },
          {
            reportName: 'Account Opening - Individual',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Account%20Opening%20-%20Individual%202022-01-17.pdf',
          },
          {
            reportName: 'Conversion Form',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Conversion%20Form%202022-01-17.pdf',
          },
          {
            reportName: 'Investment Form (Purchase of Units)',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Investment-Form-(Purchase-of-Units)-2022-01-17.pdf',
          },
          {
            reportName: 'Investor Risk Profile Questionnaire',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Investor%20Risk%20Profile%20Questionnaire%202022-01-17.pdf',
          },
          {
            reportName: 'KYC form',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/KYC%20Form%2019-10-20.pdf',
          },
          {
            reportName: 'CRS - Individual',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/CRS%20Individual%2015-9-20.pdf',
          },
          {
            reportName: 'FATCA - Individual',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/FATCA%20Indvidual%2015-9-20.pdf',
          },
          {
            reportName: 'Account Opening - Corporate',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Account%20Opening%20Corporate%203-9-21.pdf',
          },
          {
            reportName: 'CRS Entity',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/CRS%20Entity%2026-8-20.pdf',
          },
          {
            reportName: 'FATCA Corporate',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/FATCA%20Corporate%2026-8-20.pdf',
          },
          {
            reportName: 'CRS Controlling Person',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/CRS%20Controlling%20Person%2026-8-20.pdf',
          },
          {
            reportName: 'W-8BEN',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/W-8BEN%2026-8-20.pdf',
          },
          {
            reportName: 'W-8BEN-E',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/W-8BEN-E%2026-8-20.pdf',
          },
          {
            reportName: 'W-9',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/W-9%2026-8-20.pdf',
          },
          {
            reportName: 'Risk Disclaimer',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Risk%20Disclaimer%2024-7-20.pdf',
          },
          {
            reportName: 'Third Party Declaration Form',
            docLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Third%20Party%20Declaration%20form.docx',
          },
          {
            reportName: 'Pledge Form',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Pledge%20Form.pdf',
          },
          {
            reportName: 'Redemption',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/redemption_form.pdf',
          },
          {
            reportName: 'Service Request Form',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL-Forms/Change_Detail_form.pdf',
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
      title={languageTxt?.reactStackKeys?.guest?.downloads?.applicationForms}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default ApplicationForms;
