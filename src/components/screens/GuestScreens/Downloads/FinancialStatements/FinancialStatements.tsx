import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const FinancialStatements = () => {
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
        2023: [
          {
            reportName: 'POAAAF Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
          {
            reportName: 'POAIIF Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
          {
            reportName: 'POIAAF Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
          {
            reportName: 'ACF Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
          {
            reportName: 'PODDF Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/PODDF%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
          {
            reportName: 'ASYE Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
          {
            reportName: 'AHYS Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
          {
            reportName: 'POIF (POGSF) Half Yearly Accounts\nDecember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIF%20(POGSF)%20Half%20Yearly%20Accounts%20December-2022.pdf',
          },
        ],
        2022: [
          {
            reportName: 'PODDF Quarterly Accounts\nSep 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/PODDF%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'POAAAF Quarterly Accounts\nSep 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'ASYE Quarterly Accounts\nSep 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'AHYS Quarterly Accounts\nSep 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'ACF Quarterly Accounts\nSep 2022 ',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'POAIIF Quarterly Accounts\nSep 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'POIAAF Quarterly Accounts\nSep 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'POIF (Formerly POGSF) Quarterly Accounts\nSep 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIF%20(Formerly%20POGSF)%20Quarterly%20Accounts%20Sep-2022.pdf',
          },
          {
            reportName: 'ACF Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'AHYS Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'ASYE Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'POAAAF Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'POAIIF Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'PODDF Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/PODDF%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'POIAAF Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'POIF (Formerly POGSF) Annual Accounts\nJune 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIF%20(Formerly%20POGSF)%20Annual%20Accounts%20June-2022.pdf',
          },
          {
            reportName: 'PODDF Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/PODDF%20MAR%202022.pdf',
          },
          {
            reportName: 'AHYS Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/AHYS%20MAR%202022.pdf',
          },
          {
            reportName: 'ASYE Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/ASYE%20MAR%202022.pdf',
          },
          {
            reportName: 'POAAAF Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF%20MAR%202022.pdf',
          },
          {
            reportName: 'POAIIF Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF%20MAR%202022.pdf',
          },
          {
            reportName: 'POIF (POGSF) Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/POIF%20MAR%202022.pdf',
          },
          {
            reportName: 'POIAAF Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF%20MAR%202022.pdf',
          },
          {
            reportName: 'AAAF Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/AAAF%20MAR%202022.pdf',
          },
          {
            reportName: 'ACF Quarterly Accounts\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/ACF%20MAR%202022.pdf',
          },
          {
            reportName: 'ACF Half Yearly Accounts\nDecember 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Half%20Yearly%20Accounts%20December-2021.pdf',
          },
          {
            reportName: 'AAAF Half Yearly Accounts\nDecember 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20Half%20Yearly%20Accounts%20December-2021.pdf',
          },
          {
            reportName: 'AHYS Half Yearly Accounts\nDecember 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Half%20Yearly%20Accounts%20December-2021.pdf',
          },
          {
            reportName: 'POIF (POGSF) Half Yearly Accounts\nDecember 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIF%20(POGSF)%20Half%20Yearly%20Accounts%20December-2021.pdf',
          },
          {
            reportName: 'ASYE Half Yearly Accounts\nDecember 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Half%20Yearly%20Accounts%20December-2021.pdf',
          },
        ],
        2021: [
          {
            reportName: 'ASYE Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Quarterly%20Accounts%20Sep-2021.pdf',
          },
          {
            reportName: 'ACF Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Quarterly%20Accounts%20Sep-2021.pdf',
          },
          {
            reportName: 'AAAF Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20Quarterly%20Accounts%20Sep-2021.pdf',
          },
          {
            reportName: 'POIAAF Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Quarterly%20Accounts%20Sep-2021.pdf',
          },
          {
            reportName: 'POGSF Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF%20Quarterly%20Accounts%20Sep-2021.pdf',
          },
          {
            reportName: 'POAIIF Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Quarterly%20Accounts%20Sep-2021.pdf',
          },
          {
            reportName: 'POAAAF Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Quarterly%20Accounts%20Sep-2021.pdf',
          },
          {
            reportName: 'AHYS Quarterly Accounts\nSep 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Quarterly%20Accounts%20Sep-2021.pdf', //not Working
          },
          {
            reportName: 'POIAAF Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'ASYE Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'AHYS Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'ACF Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'AAAF Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'POGSF Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'POAIIF Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'POAAAF Annual Accounts\nJune 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF-Annual%20Accounts%20June-2021.pdf',
          },
          {
            reportName: 'AAAF Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'POIAAF Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'AHYS Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'ACF Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'POAAAF Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'POAIIF Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'ASYE Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'POGSF Quarterly Accounts\nMarch 2021',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF%20Quarterly%20Accounts%20March-2021.pdf',
          },
          {
            reportName: 'AHYS Half Yearly Accounts\nDec 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Half%20Yearly%20Accounts%20Dec-2020.pdf',
          },
          {
            reportName: 'ACF Half Yearly Accounts\nDec 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Half%20Yearly%20Accounts%20Dec-2020.pdf',
          },
          {
            reportName: 'POAAAF Half Yearly Accounts\nDec 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Half%20Yearly%20Accounts%20Dec-2020.pdf',
          },
          {
            reportName: 'POAIIF Half Yearly Accounts\nDec 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Half%20Yearly%20Accounts%20Dec-2020.pdf',
          },
          {
            reportName: 'ASYE Half Yearly Accounts\nDec 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Half%20Yearly%20Accounts%20Dec-2020.pdf',
          },
          {
            reportName: 'POGSF Half Yearly Accounts\nDec 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF%20Half%20Yearly%20Accounts%20Dec-2020.pdf',
          },
        ],
        2020: [
          {
            reportName: 'POIAAF Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'AAAF Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'ACF Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'AHYS Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'ASYE Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'POAAAF Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'POGSF Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'POAIIF Quarterly Accounts\nSep 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Quarterly%20Accounts%20Sep-2020.PDF',
          },
          {
            reportName: 'ACF Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'AAAF Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'ASYE Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'POIAAF Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'POGSF Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'POAIIF Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'POAAAF Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'AHYS Annual Accounts\nJune 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Annual%20Accounts%20June-2020.pdf',
          },
          {
            reportName: 'POAIIF Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'POAAAF Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'ASYE Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'AHYS Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'ACF Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'AAAF Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'POGSF Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'POIAAF Quarterly Accounts\nMar 2020',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Quarterly%20Accounts%20Mar-2020.pdf',
          },
          {
            reportName: 'ACF Half Yearly Accounts\nDec 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ACF%20Half%20Yearly%20Accounts%20Dec-2019.pdf',
          },
          {
            reportName: 'ASYE Half Yearly Accounts\nDec 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Half%20Yearly%20Accounts%20Dec-2019.pdf',
          },
          {
            reportName: 'POAAAF Half Yearly Accounts\nDec 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAAAF%20Half%20Yearly%20Accounts%20Dec-2019.pdf',
          },
          {
            reportName: 'POAIIF Half Yearly Accounts\nDec 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAIIF%20Half%20Yearly%20Accounts%20Dec-2019.pdf',
          },
          {
            reportName: 'POGSF Half Yearly Accounts\nDec 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/POGSF%20Half%20Yearly%20Accounts%20Dec-2019.pdf',
          },
          {
            reportName: 'POIAAF Half Yearly Accounts\nDec 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/POIAAF%20Half%20Yearly%20Accounts%20Dec-2019.pdf',
          },
        ],
        2019: [
          {
            reportName: 'POIAAF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Pak%20Oman%20Islamic%20Asset%20Allocation%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'AAAF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20ASSET%20ALLOCATION%20FUND%20SEP2019.pdf',
          },
          {
            reportName: 'POAAAF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Pak%20Oman%20Advantage%20Asset%20Allocation%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'ASCF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Cash%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'ASYE Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Sovereign%20Yield%20Enhancer%20Sep2019.pdf',
          },
          {
            reportName: 'AIIF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Islamic%20Income%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'POGSF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Pak%20Oman%20Government%20Securities%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'AEF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Equity%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'AIAAF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Islamic%20Asset%20Allocation%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'AHYS Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20High%20Yield%20Scheme%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'POAIIF Quaterly Accounts\nSep 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/Pak%20Oman%20Advantage%20Islamic%20Income%20Fund%20Sep2019.pdf',
          },
          {
            reportName: 'AIIF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20ISLAMIC%20INCOME%20FUND.pdf',
          },
          {
            reportName: 'POAIIF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/PAK%20OMAN%20ADVANTAGE%20ISLAMIC%20INCOME%20%20%20FUND.pdf',
          },
          {
            reportName: 'POIAAF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/PAK%20OMAN%20ISLAMIC%20ASSET%20ALLOCATION%20%20%20FUND.pdf',
          },
          {
            reportName: 'AHYS Annual Accounts\nJune 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/AHYS%2019.pdf',
          },
          {
            reportName: 'AIAAF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20ISLAMIC%20ASSET%20ALLOCATION%20%20%20FUND.pdf',
          },
          {
            reportName: 'AEF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20EQUITY%20FUND.pdf',
          },
          {
            reportName: 'POGSF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/PAK%20OMAN%20GOVERNMENT%20SECURITIES%20%20FUND.pdf',
          },
          {
            reportName: 'ASCF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20CASH%20FUND.pdf',
          },
          {
            reportName: 'ASYE Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20SOVEREIGN%20YIELD%20%20ENHANCER.pdf',
          },
          {
            reportName: 'POAAAF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/PAK%20OMAN%20ADVANTAGE%20ASSET%20ALLOCATION%20%20FUND.pdf',
          },
          {
            reportName: 'AAAF Annual Accounts\nJune 2019',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20ASSET%20ALLOCATION%20FUND.pdf',
          },
          {
            reportName: 'AHYS Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/AHYS.pdf',
          },
          {
            reportName: 'AIAAF Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/ASKIAAF.pdf',
          },
          {
            reportName: 'AIIF Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/ASKIIF.pdf',
          },
          {
            reportName: 'ASCF Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/ASCF.pdf',
          },
          {
            reportName: 'ASYE Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/ASYE.pdf',
          },
          {
            reportName: 'POAAAF Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF.pdf',
          },
          {
            reportName: 'POAIIF Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF.pdf',
          },
          {
            reportName: 'POGSF Quaterly Accounts\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF.pdf',
          },
        ],
        2018: [
          {
            reportName: 'POAIIF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF122018.pdf',
          },
          {
            reportName: 'ASCF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/ACF.pdf',
          },
          {
            reportName: 'AIIF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AIIF122018.pdf',
          },
          {
            reportName: 'AIAAF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AIAAF.pdf',
          },
          {
            reportName: 'AHYS Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AHYS122018.pdf',
          },
          {
            reportName: 'AEF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AEF122018.pdf',
          },
          {
            reportName: 'AAAF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AAAF122018.pdf',
          },
          {
            reportName: 'ASYE Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/ASYE122018.pdf',
          },
          {
            reportName: 'POAAAF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF122018.pdf',
          },
          {
            reportName: 'POGSF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF122018.pdf',
          },
          {
            reportName: 'POIAAF Half Yearly Accounts\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF122018.pdf',
          },
          {
            reportName: 'AAAF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AAAF092018.pdf',
          },
          {
            reportName: 'ASYE Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/ASYE092018.pdf',
          },
          {
            reportName: 'POAAAF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF092018.pdf',
          },
          {
            reportName: 'POAIIF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF092018.pdf',
          },
          {
            reportName: 'POGSF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF092018.pdf',
          },
          {
            reportName: 'POIAAF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF092018.pdf',
          },
          {
            reportName: 'ASCF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/ASCF092018.pdf',
          },
          {
            reportName: 'AHYS Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AHYS092018.pdf',
          },
          {
            reportName: 'AEF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AEF092018.pdf',
          },
          {
            reportName: 'AIAAF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AIAAF092018.pdf',
          },
          {
            reportName: 'AIIF Quarterly Accounts\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AIIF092018.pdf',
          },
          {
            reportName: 'AHYS-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AHYS-june2018.pdf',
          },
          {
            reportName: 'POAAAF-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF-june2018.pdf',
          },
          {
            reportName: 'AIAAF-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AIAAF-june2018.pdf',
          },
          {
            reportName: 'POIAAF-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF-june2018.pdf',
          },
          {
            reportName: 'POGSF-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF-june2018.pdf',
          },
          {
            reportName: 'AAAF-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AAAF-june2018.pdf',
          },
          {
            reportName: 'AIIF-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/AIIF-june2018.pdf',
          },
          {
            reportName: 'ASYE-Annual Accounts\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/ASYE-june2018.pdf',
          },
        ],
        2017: [
          {
            reportName: 'Pak Oman - POAAAF Quartlery Accounts\nSeptember 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF_Sep_qtr_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POIAAF Quartlery Accounts\nSeptember 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF_Sep_qtr_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POGSF Quartlery Accounts\nSeptember 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/P0GSF_Sep_qtr_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POAIIF Quartlery Accounts\nSeptember 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF_Sep_qtr_2017.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30,2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Accounts%20Sept%2030-2017.pdf',
          },
          {
            reportName:
              'Annual Report Askari Asset Allocation Fund\nJune 30, 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20Annual%20Report%202017.pdf',
          },
          {
            reportName: 'Pak Oman - POGSF Annual Accounts\nJune 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF_A_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POIAAF Annual Accounts\nJune 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF_A_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POAAAF Annual Accounts\nJune 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF_A_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POAIIF Annual Accounts\nJune 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF_A_2017.pdf',
          },
          {
            reportName:
              'Annual Report Askari Sovereign Cash Fund\nJune 30, 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASCF%20Annual%20Report%202017.pdf',
          },
          {
            reportName:
              'Annual Report Askari Sovereign Yield Enhancer\nJune 30, 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20Annual%20Report%202017.pdf',
          },
          {
            reportName: 'Annual Report Askari Equity Fund\nJune 30, 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AEF%20Annual%20Report%202017.pdf',
          },
          {
            reportName:
              'Annual Report Askari Islamic Income Fund\nJune 30, 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIIF%20Annual%20Report%202017.pdf',
          },
          {
            reportName: 'Annual Report Askari High Yield Scheme\nJune 30, 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20Annual%20Report%202017.pdf',
          },
          {
            reportName:
              'Annual Report Askari Islamic Asset Allocation Fund\nJune 30, 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIAAF%20Annual%20Report%202017.pdf',
          },
          {
            reportName: 'Pak Oman - POAAAF Quartlery Accounts\nMarch 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF_Mar_qtr_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POAIIF Quartlery Accounts\nMarch 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF_Mar_qtr_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POGSF Quartlery Accounts\nMarch 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF_Mar_qtr_2017.pdf',
          },
          {
            reportName: 'Pak Oman - POIAAF Quartlery Accounts\nMarch 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF_Mar_qtr_2017.pdf',
          },
          {
            reportName:
              'Quarterly Statement of Accounts for the period ended\nMarch 31 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsMar2017.pdf',
          },
          {
            reportName: 'Pak Oman - POAAAF Half Yearly Accounts\nDecember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF_Dec_H_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POAIIF Half Yearly Accounts\nDecember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF_Dec_H_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POGSF Half Yearly Accounts\nDecember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF_Dec_H_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POIAAF Half Yearly Accounts\nDecember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF_Dec_H_2016.pdf',
          },
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/HalfyearlyReportsDec2016.pdf',
          },
        ],
        2016: [
          {
            reportName: 'Pak Oman - POAAAF Quartlery Accounts\nSeptember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF_Sep_Q_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POAIIF Quartlery Accounts\nSeptember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF_Sep_Q_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POIAAF Quartlery Accounts\nSeptember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF_Sep_Q_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POGSF Quartlery Accounts\nSeptember 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF_Sep_Q_2016.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30,2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsSep2016.pdf',
          },
          {
            reportName: 'Pak Oman - POIAAF Annual Accounts\nJune 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF_A_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POAIIF Annual Accounts\nJune 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF_A_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POAAAF Annual Accounts\nJune 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF_A_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POGSF Annual Accounts\nJune 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF_A_2016.pdf',
          },
          {
            reportName:
              'Annual Report Askari Asset Allocation Fund\nJune 30, 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/File%20AAAF%20%202016.pdf',
          },
          {
            reportName: 'Annual Report Askari Equity Fund\nJune 30, 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/File%20AEF%20Annual%202016.pdf',
          },
          {
            reportName: 'Annual Report Askari High Yield Scheme\nJune 30, 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/File%20AHYS%20Annual%202016%20After%20Correction.pdf',
          },
          {
            reportName:
              'Annual Report Askari Islamic Asset Allocation Fund\nJune 30, 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/File%20AIAAF%202016%20Final.pdf',
          },
          {
            reportName:
              'Annual Report Askari Sovereign Yield Enhancer\nJune 30, 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASY%20Enhancer%202016.pdf',
          },
          {
            reportName:
              'Annual Report Askari Islamic Income Fund\nJune 30, 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASKARI%20AIIF%202016.pdf',
          },
          {
            reportName:
              'Annual Report Askari Sovereign Cash Fund\nJune 30, 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/File%20ASCF%20Final.pdf',
          },
          {
            reportName: 'Pak Oman - POAAAF Quartlery Accounts\nMarch 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAAAF_Mar_qtr_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POAIIF Quartlery Accounts\nMarch 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POAIIF_Mar_qtr_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POGSF Quartlery Accounts\nMarch 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POGSF_Mar_qtr_2016.pdf',
          },
          {
            reportName: 'Pak Oman - POIAAF Quartlery Accounts\nMarch 2016',
            pdfLink: 'https://pakomanfunds.com/uploads/POIAAF_Mar_qtr_2016.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nMarch 31,2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsMar2016.pdf',
          },
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Financial%20Half%20Yearly%202015.pdf',
          },
        ],
        2015: [
          {
            reportName: 'Quaterly Financial Statements\nSeptember 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsSep2015.pdf',
          },
          {
            reportName: 'Askari Sovereign Yield Enhamcer\nJune 30, 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Sovereign%20Yield%20Enhamcer%20June%2030,%202015.pdf',
          },
          {
            reportName: 'Askari Islamic Income Fund\nJune 30, 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Islamic%20Income%20Fund%20June%2030,%202015.pdf',
          },
          {
            reportName: 'Askari Islamic Asset Allocation Fund\nJune 30, 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Islamic%20Asset%20Allocation%20Fund%20June%2030,%202015.pdf',
          },
          {
            reportName: 'Askari High Yiled Scheme\nJune 30, 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20High%20Yiled%20Scheme%20June%2030,%202015.pdf',
          },
          {
            reportName: 'Askari Equity Fund\nJune 30, 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Equity%20Fund%20June%2030,%202015.pdf',
          },
          {
            reportName: 'Askari Asset Allocation Fund\nJune 30, 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Asset%20Allocation%20Fund%20June%2030,%202015.pdf',
          },
          {
            reportName: 'Askari Sovereign Cash Fund\nJune 30, 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Sovereign%20Cash%20Fund%20June%2030,%202015.pdf',
          },
          {
            reportName: 'Quaterly Financial Statements\nMarch 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsMar2015.pdf',
          },
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2014',
            pdfLink:
              'https://pakomanfunds.com/uploads/HalfyearlyReportsDec2014.pdf',
          },
        ],
        2014: [
          {
            reportName: 'Quaterly Financial Statements\nSeptember 2014',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20QTR%20Report%202014.pdf',
          },
          {
            reportName: 'Annual Financial Statments - ASYE\nJune 30, 2014',
            pdfLink:
              'https://pakomanfunds.com/uploads/File%20ASY%20Enhancer%201.pdf',
          },
          {
            reportName: 'Annual Financial Statments - ASCF\nJune 30, 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/File%20ASCF%201.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AIIF\nJune 30, 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/File%20AIIF%201.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AIAAF\nJune 30, 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/File%20AIAAF%201.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AHYS\nJune 30, 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/File%20AHYS.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AEF\nJune 30, 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/File%20AEF%201.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AAAF\nJune 30, 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/File%20AAAF%201.pdf',
          },
          {
            reportName:
              'Financial Statements for the Nine Months and Quarter Ended\nMarch 31, 2014',
            pdfLink:
              'https://pakomanfunds.com/uploads/Financial%20Statments%20for%20the%20Nine%20Months%20and%20Quarter%20Ended%20March%2031,%202014.pdf',
          },
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/Askari%20Half%20Yearly%20Report%202014%20Full%20&%20Final.pdf',
          },
        ],
        2013: [
          {
            reportName: 'Quaterly Financial Statements\nSeptember 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuaterlyReportsSep2013.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AAAF\nJune 30, 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF%20June%2030,%202013.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AEF\nJune 30, 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/AEF%20June%2030,%202013.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AHYS\nJune 30, 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/AHYS%20June%2030,%202013.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AIIF\nJune 30, 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIIF%20June%2030,%202013.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AIAAF\nJune 30, 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIAAF%20June%2030,%202013.pdf',
          },
          {
            reportName: 'Annual Financial Statments - ASCF\nJune 30, 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASCF%20June%2030,%202013.pdf',
          },
          {
            reportName: 'Annual Financial Statments - ASYE\nJune 30, 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASYE%20June%2030,%202013.pdf',
          },
          {
            reportName: 'Quaterly Financial Statements\nMarch 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsMar2013.pdf',
          },
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/HalfYearly_Reports31122012.pdf',
          },
        ],
        2012: [
          {
            reportName: 'Annual Financial Statments - ASYE\nJune 30, 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/5%20(ASYE)%20ASKARI%20SOVEREIGN%20YIELD%20ENHANCER%2020-10-2012.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AIAAF\nJune 30, 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/6%20(AIAAF)%20ASKARI%20ISLAMIC%20ASSET%20ALLOCATION%20FUND%2020-10-2012.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AAAF\nJune 30, 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/1%20(AAAF)%20ASKARI%20ASSET%20ALLOCATION%20FUND%2020-10-2012.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AEF\nJune 30, 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/2%20(AEF)%20ASKARI%20EQUITY%20FUND%2020-10-2012.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AIIF\nJune 30, 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/3%20(AIIF)%20ASKARI%20ISLAMIC%20INCOME%20FUND%2020-10-2012.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AHYS\nJune 30, 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/4%20(AHYS)%20ASKARI%20HIGH%20YIELD%20SCHEME%2020-10-2012.pdf',
          },
          {
            reportName: 'Annual Financial Statments - ASCF\nJune 30, 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/7%20(ASCF)%20ASKARI%20SOVEREIGN%20CASH%20FUND%2020-10-2012.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30,2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsSep2012.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nMarch 31,2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/QuarterlyReportsMar2012.pdf',
          },
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/HalfYearly_Reports31122011.pdf',
          },
        ],
        2011: [
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30, 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/Quarterly_Reports30092011.pdf',
          },
          {
            reportName: 'Annual Financial Statments - ASCF\nJune 30, 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASCF%20Final%20%20Files.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AHYS\nJune 30, 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/AHYS%20FInal%20File.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AAAF\nJune 30, 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/AAAF%20Final%20File.pdf',
          },
          {
            reportName: 'Annual Financial Statments - AIIF\nJune 30, 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/AIIF%20Final%20File.pdf', //not Working
          },
          {
            reportName: 'Annual Financial Statments - AIAAF\nJune 30, 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIAAF%20Final%20File.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nMarch 31,2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/191_FinancialReport-March11.pdf',
          },
        ],
        2010: [
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/188_Askari_half_yearly_financial_reports_2010.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/Quarterly_Report_Sep_2010.pdf',
          },
          {
            reportName: 'Annual Financial Statements-AIAAF\nJune 30,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIAAF_annual_report_2010.pdf',
          },
          {
            reportName: 'Annual Financial Statements-AAAF\nJune 30,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/AAAF_annual_repor_2010.pdf',
          },
          {
            reportName: 'Annual Financial Statements-AIIF\nJune 30,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIIF_annual_report_2010.pdf',
          },
          {
            reportName: 'Annual Financial Statements-AHYS\nJune 30,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIF_annual_report_2010.pdf',
          },
          {
            reportName: 'Annual Financial Statements-ASCF\nJune 30,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/ASCF_annual-report_2010.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nMarch 31,2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/160_Condensed_Interim_Financial_Statements_for_the_Quarter_Ended_31_March_2010.pdf',
          },
        ],
        2009: [
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/156_Financial_Statement_For_Funds_Under_Management_(Dec-31st_2009).pdf', //not Working
          },
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30,2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/143_Financials_AIF_AAAF_as_on_30tht_Sep_09.pdf',
          },
          {
            reportName: 'Annual Financial Statements\nJune 30,2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/144_Financials_AIF_AAAF_as_on_30th_June_09.pdf', //not Working
          },
          {
            reportName: 'Quarterly Financial Statements\nMarch 31,2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/117_Financials_AIF_AAAF_as_on_31st_Mar_09.PDF',
          },
        ],
        2008: [
          {
            reportName:
              'Half Yearly Financial Statements - AAAF\nDecember 31,2008 ',
            pdfLink:
              'https://pakomanfunds.com/uploads/113_HalfyearlyreviewedaccountsAAAFdec31.PDF', //no working
          },
          {
            reportName:
              'Half Yearly Financial Statements-AHYS\nDecember 31,2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/114_Half_Yearly_Reviewed_AIF_Accounts_Dec_31,2008_.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30,2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/financial_statement_sep_08.pdf',
          },
          {
            reportName: 'Annual Financial Statements\nJune 30,2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/FinancialStatementAIFAAAFEndedJune302008.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nMarch 31,2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/Fund%20Accounts%20March%2008.pdf',
          },
        ],
        2007: [
          {
            reportName: 'Half Yearly Financial Statements\nDecember 31,2007',
            pdfLink:
              'https://pakomanfunds.com/uploads/FinancialStatementsDec2007.pdf',
          },
          {
            reportName: 'Quarterly Financial Statements\nSeptember 30, 2007',
            pdfLink:
              'https://pakomanfunds.com/uploads/financialstatements-30sep2007.pdf',
          },
          {
            reportName: 'Annual Financial Statements\nJune 30, 2007',
            pdfLink:
              'https://pakomanfunds.com/uploads/financialstatements-jun3007.pdf',
          },
        ],
        2006: [
          {
            reportName: 'Annual Financial Statements\nJune 30,2006',
            pdfLink:
              'https://pakomanfunds.com/uploads/financialstatementsAIF2005-06.pdf',
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
      title={languageTxt?.reactStackKeys?.guest?.downloads?.financialStatements}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default FinancialStatements;
