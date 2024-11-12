import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';

const FundManagersReport = () => {
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
            reportName: 'Fund Manager Report\nMarch 2023',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20March%202023.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebruary 2023',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Feb%202023.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2023',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20JANUARY%202023.pdf',
          },
          {
            reportName: 'Fund Manager Report\nDecember 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20DEC%202022.pdf',
          },
        ],
        2022: [
          {
            reportName: 'Fund Manager Report\nNovember 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20NOV-2022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20October%202022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20September%202022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20AUGUST%202022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20JULY%202022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20June%202022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20May%202022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2022',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMC%20FMR-April-22.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20March%202022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebruary 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Feb-22.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2022',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-January-2022.pdf',
          },
          {
            reportName: 'Fund Manager Report\nDecember 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Dec-21.pdf',
          },
        ],
        2021: [
          {
            reportName: 'Fund Manager Report\nNovember 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Nov-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Oct-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Sep-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Aug-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20July-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20June-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20May%2021.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Apr-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Mar%2021.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Feb-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2021',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Jan-21.pdf',
          },
          {
            reportName: 'Fund Manager Report\nDecember 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Dec-20.pdf',
          },
        ],
        2020: [
          {
            reportName: 'Fund Manager Report\nNovember 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Nov-2020.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Oct-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Sep-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Aug-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20June-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20July-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-May-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20April-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Mar-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Feb-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2020',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Jan-20.pdf',
          },
          {
            reportName: 'Fund Manager Report\nDecember 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Dec-19.pdf',
          },
        ],
        2019: [
          {
            reportName: 'Fund Manager Report\nNovember 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Nov-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Oct-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Sep%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20August%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20July%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20June%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20May%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20April%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20MAR%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20FEB%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2019',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20JAN%20-19.pdf',
          },
          {
            reportName: 'Fund Manager Report\nDecember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Dec%20-18.pdf',
          },
        ],
        2018: [
          {
            reportName: 'Fund Manager Report\nNovember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Nov-18.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Oct%20-18.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Sep%20-18.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Aug%20-18.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20JULY%20-18.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20JUNE%20-18.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20May%20-%2018.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2018',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20April%20-%2018.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2018',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20Mar%20-%2018.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2018',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20Feb%20-%2018%20(Final%20Draft).pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2018',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20-%20Jan%202018.pdf',
          },
          {
            reportName: 'Fund Manager Report\nDecember 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterDec2017.pdf',
          },
        ],
        2017: [
          {
            reportName: 'Fund Manager Report\nNovember 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterNov2017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20-%20Oct%202017%20(Final%20Copy).pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Sep%202017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Aug%202017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR September 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/POAMCL%20-FMR-Sep%202017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Jul%202017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR August 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterAug2017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Jun%202017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR July 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterJul2017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-May%202017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR June 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterJun2017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Apr%202017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR May 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterMay2017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR April 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterApril2017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Mar%202017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebruary 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Feb%202017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR March 2017',
            pdfLink: 'https://pakomanfunds.com/uploads/NewsletterMarch2017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR February 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/NewsletterFebruary2017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Jan%202017.pdf',
          },
          {
            reportName: 'POAMCL\nFMR January 2017',
            pdfLink:
              'https://pakomanfunds.com/uploads/NewsletterJanuary2017.pdf',
          },
          {
            reportName: 'Fund Manager Report\nDecember 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Dec%202016.pdf',
          },
        ],
        2016: [
          {
            reportName: 'Fund Manager Report\nNovember 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Nov%202016%20-%20Final%20version.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Oct%202016.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Sep%202016.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-Aug%202016.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-July%202016.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-JUNE%202016.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nMay 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-MAY%202016.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nApril 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR%20-APR%202016.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nMarch 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM-FMR-March%20-2016.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20Feb%202016.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2016',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20Jan%202016.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nDecember 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20Dec%202015%20-%201.pdf', //not working
          },
        ],
        2015: [
          {
            reportName: 'Fund Manager Report\nNovember 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20Nov%202015.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nOctober 2015',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Oct2015.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nAugust 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20Aug%202015.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20July%202015%20Updated.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20June%202015.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20May%202015.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20April%202015.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/AIM%20FMR%20-%20March%202015.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2015',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Feb-2015.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2015',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR-January-2015-final.pdf',
          },
        ],
        2014: [
          {
            reportName: 'Fund Manager Report\nDecember 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Dec-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nNovember 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Nov-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Oct-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Sep-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Aug-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-July-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-June-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-May-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-April-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-March-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Feb-2014.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2014',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR-Jan-2014-Final.pdf',
          },
        ],
        2013: [
          {
            reportName: 'Fund Manager Report\nDecember 2013',
            pdfLink: 'https://pakomanfunds.com/uploads/Dec%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nNovember 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/November%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/October%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/September%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2013',
            pdfLink: 'https://pakomanfunds.com/uploads/August%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2013',
            pdfLink: 'https://pakomanfunds.com/uploads/July%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2013',
            pdfLink: 'https://pakomanfunds.com/uploads/June%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2013',
            pdfLink: 'https://pakomanfunds.com/uploads/May%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2013',
            pdfLink: 'https://pakomanfunds.com/uploads/April%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2013',
            pdfLink: 'https://pakomanfunds.com/uploads/March%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/February%202013%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2013',
            pdfLink:
              'https://pakomanfunds.com/uploads/January%202013%20FMR.pdf',
          },
        ],
        2012: [
          {
            reportName: 'Fund Manager Report\nDecember 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/December%202012%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nNovember 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/November%202012%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/October%202012%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/September%202012%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/August%202012%20FMR%20Final.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2012',
            pdfLink: 'https://pakomanfunds.com/uploads/July%202012%20FMR.PDF',
          },
          {
            reportName: 'Fund Manager Report\nJune 2012',
            pdfLink: 'https://pakomanfunds.com/uploads/June2012.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2012',
            pdfLink: 'https://pakomanfunds.com/uploads/May%202012%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2012',
            pdfLink: 'https://pakomanfunds.com/uploads/April%202012%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2012',
            pdfLink: 'https://pakomanfunds.com/uploads/March%202012%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/February%202012%20FMR%20Final.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2012',
            pdfLink:
              'https://pakomanfunds.com/uploads/January%202012%20FMR.pdf',
          },
        ],
        2011: [
          {
            reportName: 'Fund Manager Report\nDecember 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/December%202011%20FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nNovember 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/November2011FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20October%202011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/FMR%20September%202011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20August%202011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20July%202011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/FMRJune2011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20May%202011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20April%202011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2011',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR%20March%202011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/189_FMR_February_2011.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2011',
            pdfLink:
              'https://pakomanfunds.com/uploads/Fund%20Manager%20Report%20%20January%202011.pdf',
          },
        ],
        2010: [
          {
            reportName: 'Fund Manager Report\nDecember 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/December-10-FMR.pdf',
          },
          {
            reportName: 'Fund Manager Report\nNovember 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/FMR_November_2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/182_FMR-Oct-2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/175_FMR_September_2010.pdf', //not working
          },
          {
            reportName: 'Fund Manager Report\nAugust 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/173_FMR_August_2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/169_FMR_July_2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/166_FMR_June_2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/163_FMR_May_2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/161_Fund_Manager_Report_April_2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/158_FMR_Mar_2010.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2010',
            pdfLink: 'https://pakomanfunds.com/uploads/157_FMR_Feb.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2010',
            pdfLink:
              'https://pakomanfunds.com/uploads/155_FMR_January_2010.pdf',
          },
        ],
        2009: [
          {
            reportName: 'Fund Manager Report\nDecember 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/149_FMR_Dec_2009.pdf',
          },
          {
            reportName: 'Fund Manager Report\nNovember 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/148_FMR_Nov_2009.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/146_FMR_October.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/142_FMR_September.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/133_FMR-August09.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/130_FMR-July09.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/127_FMR-june09l.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2009',
            pdfLink: 'https://pakomanfunds.com/uploads/124_fmr_may09.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/122_AIM_FUND_MANAGER_REPORT_APRIL_2009.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/118_Fund_Manager_Report_March_09.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/116_AIM_FUND_MANAGER_REPOR__FEB_2009.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2009',
            pdfLink:
              'https://pakomanfunds.com/uploads/112_FundManagerReport-January2009.pdf',
          },
        ],
        2008: [
          {
            reportName: 'Fund Manager Report\nDecember 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/111_FundManagerreportDecember2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nNovember 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/107_FundManagerReport-November2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nOctober 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/106_FundManagerReport-October2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nSeptember 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/101_FundManagerReportSeptember2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nAugust 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/96_Fund_Manager_Report_August_2008_.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJuly 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/95_Fund_Manager_Report_July_2008_v1_1.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJune 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/94_Fund_Manager_Report_June_2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMay 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/93_Fund_Manager_Report_May_2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nApril 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/92_Fund_Manager_Report_April_2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nMarch 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/FundManagerReportMar08AIF-AAAF.pdf',
          },
          {
            reportName: 'Fund Manager Report\nFebuary 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/84_FundManagerReport-February2008.pdf',
          },
          {
            reportName: 'Fund Manager Report\nJanuary 2008',
            pdfLink:
              'https://pakomanfunds.com/uploads/47_AIF_Fund_Manager_Report_Jan_08.pdf',
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
      title={languageTxt?.reactStackKeys?.guest?.downloads?.fundManagersReport}
      isBottomNav={true}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default FundManagersReport;
