import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const ConstitutiveDocuments = () => {
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
        'Askari High Yield Scheme (AHYS)': [
          {
            reportName: 'AHYS Offering Document 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/AHYS-Offering-Document-1st-Supplement.pdf',
          },
          {
            reportName: 'AHYS Trust Deed 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/AHYS-Trust-Deed-1st-Supplement.pdf',
          },
          {
            reportName: 'AHYS Trust Deed 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/AHYS-Trust-Deed-2nd-Supplement.pdf',
          },
          {
            reportName: 'AHYS Trust Deed',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/AHYS-Trust-Deed.pdf',
          },
          {
            reportName: 'AHYS (AIF) Offering Document Addendum',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/AHYS-AIF-Offering-Document-Addendum.pdf',
          },
          {
            reportName: 'AHYS (AIF) Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/AHYS-AIF-Offering-Document.pdf',
          },
        ],
        'Askari Cash Fund (Formerly Askari Sovereign Cash Fund) (ACF)': [
          {
            reportName: 'ASCF Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/12/ASCF-Offering-Document.pdf',
          },
          {
            reportName:
              'ASCF 1st Supplement to the Replacement Offering Documents',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/12/ACF-1st-Supplement-to-the-Replacement-Offering-Document.pdf',
          },
          {
            reportName:
              'ACF 2nd Supplement to the Replacement Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/12/ACF-2nd-Supplement-to-the-Replacement-Offering-Document.pdf',
          },
          {
            reportName: 'ACF (ASCF) Trust Deed',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ACF-ASCF-Trust-Deed.pdf',
          },
          {
            reportName: 'ACF (ASCF) Trust Deed 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ACF-ASCF-Trust-Deed-1st-Supplement.pdf',
          },
          {
            reportName: 'ACF (ASCF) Trust Deed 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ACF-ASCF-Trust-Deed-2nd-Supplement.pdf',
          },
          {
            reportName: 'ACF (ASCF) Trust Deed 3rd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ACF-ASCF-Trust-Deed-3rd-Supplement.pdf',
          },
          {
            reportName: 'ASCF Offering Document 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/12/ASCF-Offering-Document-1st-Supplement.pdf',
          },
          {
            reportName: 'ASCF Offering Document 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/12/ASCF-Offering-Document-2nd-Supplement.pdf',
          },
          {
            reportName: 'ASCF Offering Document 3rd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/12/ASCF-Offering-Document-3rd-Supplement.pdf',
          },
        ],
        'Askari Sovereign Yield Enhancer (ASYE)': [
          {
            reportName: 'ASYE Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ASYE-Offering-Document.pdf',
          },
          {
            reportName: 'ASYE Trust Deed',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ASYE-Trust-Deed.pdf',
          },
          {
            reportName: 'ASYE Trust Deed 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ASYE-Trust-Deed-1st-Supplement.pdf',
          },
          {
            reportName: 'ASYE Offering Document 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/ASYE-Offering-Document-1st-Supplement.pdf',
          },
        ],
        'Pak Oman Advantage Asset Allocation Fund (POAAAF)': [
          {
            reportName: 'POAAAF Consolidated Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2022/08/Consolidated-Offering-Document-POAAAF-POASF.pdf',
          },
          {
            reportName: 'POAAAF (POASF) Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAAAF-POASF-Offering-Document.pdf',
          },
          {
            reportName: 'POAAAF Trust Deed 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAAAF-Trust-Deed-1st-Supplement.pdf',
          },
          {
            reportName: 'POAAAF Trust Deed 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAAAF-Trust-Deed-2nd-Supplement.pdf',
          },
          {
            reportName: 'POAAAF Trust Deed',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAAAF-Trust-Deed.pdf',
          },
          {
            reportName: 'POAAAF Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAAAF-Offering-Document.pdf',
          },
          {
            reportName: 'POAAAF Offering Document 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAAAF-Offering-Document-2nd-Supplement.pdf',
          },
        ],
        'Pak Oman Advantage Islamic Income Fund (POAIIF)': [
          {
            reportName: 'POAIIF Consolidated Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2022/08/Consolidated-Offering-Document-POAIIF.pdf',
          },
          {
            reportName: 'POAIIF Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Offering-Document.pdf',
          },
          {
            reportName: 'POAIIF Offering Document Addendum',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Offering-Document-Addendum-11-6-20.pdf',
          },
          {
            reportName: 'POAIIF Trust Deed',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Trust-Deed.pdf',
          },
          {
            reportName: 'POAIIF Trust Deed 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Trust-Deed-1st-Supplement.pdf',
          },
          {
            reportName: 'POAIIF Trust Deed 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Trust-Deed-2nd-Supplement.pdf',
          },
          {
            reportName: 'POAIIF Trust Deed 3rd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Trust-Deed-3rd-Supplement.pdf',
          },
          {
            reportName: 'POAIIF (POAIF) Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-POAIF-Offering-Document.pdf',
          },
          {
            reportName: 'POAIIF Offering Document 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Offering-Document-1st-Supplement.pdf',
          },
          {
            reportName: 'POAIIF Offering Document 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Offering-Document-1st-Supplement.pdf',
          },
          {
            reportName: 'POAIIF Offering Document 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Offering-Document-2nd-Supplement.pdf',
          },
          {
            reportName: 'POAIIF Offering Document 3rd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POAIIF-Offering-Document-3rd-Supplement.pdf',
          },
        ],
        'Pak Oman Income Fund (POIF) – Formerly Pak Oman Government Securities Fund (POGSF)':
          [
            {
              reportName: 'POGSF Offering Document',
              pdfLink:
                'https://pakomanfunds.com/wp-content/uploads/2020/06/POGSF-Offering-Document.pdf',
            },
            {
              reportName: 'POGSF Trust Deed',
              pdfLink:
                'https://pakomanfunds.com/wp-content/uploads/2020/06/POGSF-Trust-Deed.pdf',
            },
            {
              reportName: 'POGSF Offering Document 1st Supplement',
              pdfLink:
                'https://pakomanfunds.com/wp-content/uploads/2020/06/POGSF-Offering-Document-1st-Supplement.pdf',
            },
            {
              reportName: 'POGSF Offering Document 2nd Supplement',
              pdfLink:
                'https://pakomanfunds.com/wp-content/uploads/2020/06/POGSF-Offering-Document-2nd-Supplement.pdf',
            },
            {
              reportName: 'Offering Document of POIF (POGSF)',
              pdfLink:
                'https://pakomanfunds.com/wp-content/uploads/2021/12/Offering-document-of-POIF.pdf',
            },
            {
              reportName: 'Trust Deed of POIF (POGSF)',
              pdfLink:
                'https://pakomanfunds.com/wp-content/uploads/2021/12/Trust-Deed-of-POIF.pdf',
            },
          ],
        'Pak Oman Islamic Asset Allocation Fund (POIAAF)': [
          {
            reportName: 'POIAAF Consolidated Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2022/08/Consolidated-Offering-Document-POIAAF.pdf',
          },
          {
            reportName: 'POIAAF Offering Document 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/07/POIAAF-Offering-Document-1st-Supplement.pdf',
          },
          {
            reportName: 'POIAAF (POAIF) Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/07/POIAAF-POAIF-Offering-Document-1.pdf',
          },
          {
            reportName: 'POIAAF Trust Deed',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POIAAF-Trust-Deed.pdf',
          },
          {
            reportName: 'POIAAF Trust Deed 1st Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POIAAF-Trust-Deed-1st-Supplement.pdf',
          },
          {
            reportName: 'POIAAF Trust Deed 2nd Supplement',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2020/06/POIAAF-Trust-Deed-2nd-Supplement.pdf',
          },
        ],
        'Pak Oman Daily Dividend Fund (PODDF)': [
          {
            reportName: 'PODDF Trust Deed',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2021/11/PODDF-Trust-Deed.pdf',
          },
          {
            reportName: 'PODDF Offering Document',
            pdfLink:
              'https://pakomanfunds.com/wp-content/uploads/2021/11/PODDF-Offering-Document.pdf',
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
      title={
        languageTxt?.reactStackKeys?.guest?.downloads?.constitutiveDocuments
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

export default ConstitutiveDocuments;
