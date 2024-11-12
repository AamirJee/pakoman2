import React from 'react';

import {styles} from './styles';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import {CustomInfoPageInterface} from '../../../../shared/CustomInfoPage/CustomInfoPage.interface';

import Skeleton from '../../../../shared/Skeleton';
import CustomInfoPage from '../../../../shared/CustomInfoPage';
import { colorConstants } from '../../../../../utils/constants/colorConstants';

const WhoWeAre = () => {
  var json = [
    {
      title: 'OUR HERITAGE',
      subtitle: 'PAK OMAN GROUP',
      rightImage:
        'https://pakomanfunds.com/wp-content/uploads/2019/01/who-we-are3.jpg',
      description:
        'Pak Oman Asset Management Company Ltd. (POAMCL) is a Non-Banking Finance Company incorporated on July 28, 2006 as a public unlisted company with the principal objective to manage mutual funds as well as discretionary portfolios for all types of investors. POAMCL has paid-up capital of Rs.330 million and is licensed by the Securities & Exchange Commission of Pakistan (SECP) to undertake Investment Advisory Services and act as an Investment Advisor under Rule 5(2) of the NBFC Rules, 2003.\n\n POAMCL acquired Askari Investment Management Limited (AIML) and successfully completed its merger with and into POAMCL effective October 31, 2017. We are a part of Pak Oman Group, which is backed by Government of Pakistan and Sultanate of Oman and has been operating in Pakistan’s financial sector for over 16 years.\n\n Our product offering is designed to cater to varied investment needs ofindividual and institutional investors by matching their specific risk and return profiles. We boast our team of investment professionals who have a successful track record in their respective areas with diversified experience within financial and capital markets. POAMCL is committed to improving and protecting the future well-being of investors by nurturing a mutually beneficial relationship built on the highest standards of trust, transparency and care',
      bgImage: '',
      borderColor: '',
      textColor: '',
      textAlign: 'left',
      textBg: '',
      listObject: '',
      slider: '0',
      disclaimer: '0',
      pdf_url: '',
    },
    {
      title: 'OUR GOVERNANCE STRUCTURE',
      subtitle: 'BOARD OF DIRECTORS',
      rightImage: '',
      description:
        'Board of Directors guides the overall philosophy and direction of the organization. Our board members are experienced professionals from diverse business sectors of domestic and international markets.',
      bgImage: '',
      borderColor: '',
      textColor: '',
      textAlign: 'center',
      textBg: '',
      listObject: [
        {
          name: 'H.H. JULAND JAIFER SALIM AL-SAID',
          postion: 'CHAIRMAN',
          image:
            'https://pakomanfunds.com/wp-content/uploads/2021/04/IMG_6112.jpg',
        },
        {
          name: 'SADAF KAZMI',
          postion: 'CHIEF EXECUTIVE OFFICER',
          image:
            'https://pakomanfunds.com/wp-content/uploads/2022/02/SK-1-e1644298419420.jpg',
        },
        {
          name: 'JEHANGIR SHAH',
          postion: 'DIRECTOR',
          image: 'https://pakomanfunds.com/wp-content/uploads/2019/02/6po.jpeg',
        },
        {
          name: 'DR. RASHID ALI IBRAHIM AL BALUSHI',
          postion: 'DIRECTOR',
          image: 'https://pakomanfunds.com/wp-content/uploads/2019/02/5po.jpeg',
        },
      ],
      slider: '0',
      disclaimer: '0',
      pdf_url: '',
    },
    {
      title: 'VISION',
      subtitle: 'OUR ASPIRATION',
      rightImage: '',
      description:
        'Be the First-Choice investment firm in our chosen markets and be known for our Integrity, Performance excellence and Customer centric approach',
      bgImage:
        'https://pakomanfunds.com/wp-content/uploads/2018/11/vission.jpg',
      borderColor: 'white',
      textColor: 'white',
      textAlign: 'center',
      textBg: 'rgba(52, 52, 52, 0.8)',
      listObject: '',
      slider: '0',
      disclaimer: '0',
      pdf_url: '',
    },
    {
      title: 'MISSION',
      subtitle: 'OUR PURPOSE',
      rightImage: '',
      description:
        'Create value for all stakeholders by increasing share owners’ equity providing superior risk-adjusted return to investors; acquiring and retaining top talent and contributing to the community we operate in.',
      bgImage:
        'https://pakomanfunds.com/wp-content/uploads/2018/11/mission.jpg',
      borderColor: 'white',
      textColor: 'white',
      textAlign: 'center',
      textBg: 'rgba(52, 52, 52, 0.8)',
      listObject: '',
      slider: '0',
      disclaimer: '0',
      pdf_url: '',
    },
    {
      title: '',
      subtitle: '',
      rightImage: '',
      description: '',
      bgImage:
        'https://pakomanfunds.com/wp-content/uploads/2018/11/research.jpg',
      borderColor: '',
      textColor: '',
      textAlign: 'center',
      textBg: '',
      listObject: [
        {
          title: 'INTEGRITY',
          description:
            'Practice integrity in everything we do; by being honest, fair and respectful in our dealings and having zero-tolerance for unethical behavior. Our people inspire trust by saying what they mean and taking responsibility for their actions.',
        },
        {
          title: 'EXCELLENCE',
          description:
            'Work to achieve performance excellence through value creation and innovation in all areas of operations. We believe in continuous learning and improvement in our products, services and processes to raise our standards and create benchmarks for the industry.',
        },
        {
          title: 'CUSTOMERFOCUS',
          description:
            'Customer is at the center of our business philosophy to create positive customer experience resulting in customer satisfaction by understanding customers’ needs and delivering on our commitments and promises',
        },
      ],
      slider: '0',
      disclaimer: '0',
      pdf_url: '',
    },
    {
      title: 'OUR LEADERSHIP',
      subtitle: 'MEET THE TEAM',
      rightImage: '',
      description: '',
      bgImage: '',
      borderColor: '',
      textColor: '',
      textAlign: 'center',
      textBg: '',
      listObject: [
        {
          name: 'SADAF KAZMI',
          postion: 'CHIEF EXECUTIVE OFFICER',
          image:
            'https://pakomanfunds.com/wp-content/uploads/2022/02/SK-1-e1644298419420.jpg',
        },
        {
          name: 'MUHAMMAD ZUBAIR',
          postion: 'CHIEF INVESTMENT OFFICER',
          image:
            'https://pakomanfunds.com/wp-content/uploads/2022/04/123-1-e1649328827185.png',
        },
        {
          name: 'ABDUL MOEED',
          postion: 'FINANCIAL CONTROLLER',
          image:
            'https://pakomanfunds.com/wp-content/uploads/2023/05/Abdul_Moeed-e1683101955459.jpg',
        },
        {
          name: 'UMAIR HUSSAIN',
          postion: 'COMPLIANCE',
          image:
            'https://pakomanfunds.com/wp-content/uploads/2022/06/Umair-21.jpg',
        },
      ],
      slider: '1',
      disclaimer: '0',
      pdf_url: '',
    },
    {
      title: '',
      subtitle: 'SPONSORS',
      rightImage: '',
      description: '',
      bgImage: '',
      borderColor: '',
      textColor: '',
      textAlign: 'center',
      textBg: '',
      listObject: [
        {
          imageSize: 80,
          borderRadius: 1,
          image: 'https://pakomanfunds.com/wp-content/uploads/2018/10/2.png',
        },
        {
          imageSize: 80,
          borderRadius: 1,
          image: 'https://pakomanfunds.com/wp-content/uploads/2018/10/1.png',
        },
        {
          imageSize: 80,
          borderRadius: 1,
          image: 'https://pakomanfunds.com/wp-content/uploads/2018/10/3.png',
        },
      ],
      slider: '1',
      disclaimer: '0',
      pdf_url: '',
    },
    {
      title: 'Disclaimer',
      subtitle: '',
      rightImage: '',
      description:
        'Use of the names and logos as given above does not mean that the entities are responsible for the liabilities/obligations of Pak Oman Asset Management Company Limited or any investment scheme managed by it.',
      bgImage: '',
      borderColor: '',
      textColor: 'white',
      textAlign: '',
      textBg: '#d59b28',
      listObject: '',
      slider: '0',
      disclaimer: '1',
      pdf_url: '',
    },
  ];
  return (
    <Skeleton
      bgColor={colorConstants.primary}
      title={languageTxt?.reactStackKeys?.guest?.aboutus?.whoWeAre}
      isBottomNav={true}
      containerStyle={styles.container}>
      <>
        {json.map((item: any, key: any) => (
          <CustomInfoPage item={item} key={key} />
        ))}
      </>
    </Skeleton>
  );
};

export default WhoWeAre;
