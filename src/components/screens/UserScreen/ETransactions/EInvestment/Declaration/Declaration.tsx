import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {languageTxt} from '../../../../../../utils/constants/languageTxt';
import {fontConstants} from '../../../../../../utils/constants/fontConstants';
import {dimensionConstants} from '../../../../../../utils/constants/dimensionConstants';

import Skeleton from '../../../../../shared/Skeleton';
import CustomTitle from '../../../../../shared/CustomTitle';
import CustomDoubleButton from '../../../../../shared/CustomDoubleButton';
import {colorConstants} from '../../../../../../utils/constants/colorConstants';

const Declaration = () => {
  const navigation = useNavigation();
  return (
    <Skeleton
      isBack={true}
      isBottomNav={true}
      title={
        languageTxt?.reactStackKeys?.user?.eTransactions?.eConversion
          ?.declaration
      }>
      <View style={styles.container}>
        <CustomTitle
          title={
            'Terms and Conditions for using PAkOMAN Funds Online Site (Including E-Transaction Requests Service)'
          }
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'Please read these Terms and Conditions carefully before using this Site. By accessing this Site and any of its pages, you agree that the following Terms and Conditions apply to your use of this Site, any information obtained from this Site about our products and services. If you do not agree to these Terms and Conditions, do not use this site or download content from it.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* References */}
        <CustomTitle
          title={'References'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <View style={styles.textContainer}>
          <CustomTitle
            title={'* '}
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight700}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={
              "References to 'you', 'your' and 'yours' are references to the person(s) accessing this Site."
            }
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'* '}
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight700}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={
              "References to 'we', 'us' and 'our' are references to PAkOMAN."
            }
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        {/* Terms */}
        <CustomTitle
          title={'Terms'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'The information, material and content provided on this Site may be changed by us at any time and from time to time without any prior notice. Your continued access to or use of this Site will mean that you agree to all changes. If you have previously used this Site, your first use of the Site after publication of these Terms indicates your acceptance of them.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Service Only Where Lawful */}
        <CustomTitle
          title={'Service Only Where Lawful'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Our products and services are offered only in Pakistan and the material on this site is intended for use by persons located in or resident of Pakistan, which restricts the distribution of this material by us.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Investment Performance */}
        <CustomTitle
          title={'Investment Performance'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'All investments in Mutual Funds and Voluntary Pension Schemes are subject to market risks. Past performance is not necessarily indicative of future results. Participants and prospective participant’s users are advised in their own interest to carefully read the contents of the offering document, in particular the risk factors and warnings before making any investment decision. Please note that the value of investments and the income derived from them may fluctuate and an investor may not receive back the amount originally invested and we do not guarantee any return on investments made by Participants.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* No Warranties */}
        <CustomTitle
          title={'No Warranties'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Neither we, trustee nor any third party provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'Whilst we have taken reasonable steps to ensure the accuracy,availability, correctness and completeness of the information contained on this Site, information is provided on an "as is", "as available" basis and we do not give or make any warranty or representation of any kind, whether expressed or implied. Your use of any information or materials on this Site is entirely at your own risk. We shall not be liable for any loss or damage whatsoever and howsoever arising as a result of your use of or reliance on the information contained on this Site. . It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'We do not represent or warrant that this Site will be available or that it will meet your requirements, that access will be uninterrupted, that there will be no delays, failures, errors or omissions or loss of transmitted information, that no viruses or other contaminating or destructive properties will be transmitted or that no damage will occur to your computer system. You have sole responsibility for adequate protection and back up of data and/or equipment and for undertaking reasonable and appropriate precautions to scan for computer viruses or other destructive properties.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'We make no representations or warranties regarding the accuracy, functionality or performance of any third party software that may be used in connection with this Site.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Internet E-Mail */}
        <CustomTitle
          title={'Internet E-Mail'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Messages sent over the internet cannot be guaranteed to be completely secure or error free as they are subject to possible interception, corruption, delays, loss or possible alteration. We are not responsible for them and will not be liable to you or anyone else for any damages or otherwise in connection with any messages sent by you to us or any message sent by us to you over the internet. If you send E-Mail (encrypted or not) to us over the internet, you are accepting the associated risks of lack of confidentiality.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Trade Marks And Copyright */}
        <CustomTitle
          title={'Trade Marks And Copyright'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Copyright of the pages, screens, information, and all material in their arrangement included in this Site is owned by or licensed to PAkOMAN unless otherwise stated. You may imprint, copy, download or temporarily store extracts from our Site for your personal information or when you use our products and services. You must not alter anything or distribute it to others. Any other use is prohibited unless you first get our written permission. In particular no one may use our Site or any part of our Site on any other website, or link any other website to our Site, without our prior written permission. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Governing Law */}
        <CustomTitle
          title={'Governing Law'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'This agreement constitutes the entire agreement between you and us with respect to using this Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written with respect to this Site. Your use of this website and any dispute arising out of such use of the website is subject to the laws of Pakistan.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* General */}
        <CustomTitle
          title={'General'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'If you are dissatisfied with any portion of this Site, or with any of these Terms of use, your sole and exclusive remedy is to discontinue using this Site.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'We reserve the right in our sole discretion to deny any user access to this Site, any interactive service herein, or any portion of this Site without notice, and the right to change the terms, conditions and notices under which this Site is offered. Any rights not expressly granted herein are reserved.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Statutory Details And Risk Factors */}
        <CustomTitle
          title={'Statutory Details And Risk Factors'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Investors may obtain constitutive documents along with application forms from the offices of PAkOMAN or can be downloaded from the company website accessible at www.PAkOMANFunds.com.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Risk Factors */}
        <CustomTitle
          title={'Risk Factors'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'All investments in mutual funds and securities are subject to market risks and the Net Asset Value (NAV) of the Scheme(s) may go up or down depending on the factors and forces affecting the securities markets. There can be no assurance that the objectives of the Scheme(s) will be achieved. Past performance does not indicate the future performance of Mutual Funds and Voluntary Pension Schemes.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Purchase Prices */}
        <CustomTitle
          title={'Purchase Prices'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Units of the Scheme(s) are being offered at NAV based prices. The AMC calculates and publishes Net Asset Values (NAV`s); offer and redemption prices on all Business Days, in line with their constitutive documents. Each fund / plan has its own cut-off timings for submission of transaction requests for purchase of units. Applicable cut-off timings are made available on the company website at www.pakomanfunds.com.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'In case of submission of an e-transaction, the PAkOMAN Funds Online system date and time stamp will solely be considered and given precedence to determine the cut-off time in which the application request is submitted and the applicability of the NAV on the transaction. PAkOMAN will not be responsible for any network or system delays in submitting and receiving the application request.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'The online module will not be offered to corporate investors to transfer PF contribution of individuals for Voluntary Pension Scheme'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Load Deduction */}
        <CustomTitle
          title={'Load Deduction'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'The PAkOMAN may charge sales load 0% to 1.5% of NAV per unit or any amount as directed by SECP and/(or) defined in constitutive documents of the fund, where transactions are done online or through a website in the funds under management of Pak Oman Asset Management Company Ltd.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Transaction Fee */}
        <CustomTitle
          title={'Transaction Fee'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Fund transfer via Kuickpay will be subject to transaction fee as follows'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.column1}>Transaction Slab (PKR)</Text>
            <Text style={styles.column2}>Commission (PKR) Excluding Tax</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.column3}>1- 10,000</Text>
            <Text style={styles.column4}>20</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.column3}>10,001 to 250,000</Text>
            <Text style={styles.column4}>60</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.column3}>250,001 to 1,000,000</Text>
            <Text style={styles.column4}>100</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.column3}>Over 1,000,000</Text>
            <Text style={styles.column4}>200</Text>
          </View>
        </View>
        <CustomTitle
          title={
            'Transaction fee is payable to Kuickpay and 1LINK and will be deducted from the investor’s respective bank account. PAkOMAN will receive funds after deduction of transaction fee from Kuickpay.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Zakat Deduction */}
        <CustomTitle
          title={'Zakat Deduction'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            "Zakat will be deducted at the time of redemption of units if a duly filled and signed Zakat Affidavit Form is not provided to the company for its records. It will be the investors' responsibility to provide the Affidavit if he/she wishes that Zakat may not be deducted. It is also the investors' responsibility to confirm if Zakat status is marked as 'Not Applicable' in the company's records if the Affidavit has been submitted."
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Disclaimer */}
        <CustomTitle
          title={'Disclaimer'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Please note that if payment from investor is not received within twenty four (24) hours of the generation of the Voucher Number from the PAkOMAN Funds online website the Voucher Number will expire. Upon expiry of Voucher Number, fresh online investment request will have to be submitted in order to make an online investment transaction. This expiry period is subject to revision as per the discretion of the management, however, any change will be notified to the investors in the reference number Email and SMS.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Rejection Of E-Transaction Requests */}
        <CustomTitle
          title={'Rejection Of E-Transaction Requests'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Your e-transaction request may be rejected if there is any discrepancy or incomplete information in the request that is submitted. In case an e-transaction request is rejected, the rejected request will be cancelled and a new request will have to be submitted and a refund of amount process will be initiated.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Refund Of Amount In Case Of Rejection Of E-Transaction */}
        <CustomTitle
          title={'Refund Of Amount In Case Of Rejection Of E-Transaction'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <View style={styles.textContainer}>
          <CustomTitle
            title={'* '}
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight700}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={
              "In case the discrepancy is not resolved within 15 days of the transaction the amount so credited in the fund's bank account will be refunded."
            }
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'* '}
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight700}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={
              'Refund instruction will be initiated by PAkOMAN Funds and will be sent to the Trustee.'
            }
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'* '}
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight700}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={
              'The Trustee upon satisfaction will arranges refund of the amount to the investor through online transfer in investor’s Bank Account.'
            }
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomTitle
            title={'* '}
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight700}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
          <CustomTitle
            title={
              'The turnaround time for the refunds is 4 business day form the initiation of the refund process by PAkOMAN Funds.'
            }
            fontSize={fontConstants.small}
            fontWeight={fontConstants.fontWeight400}
            extraStyles={{
              marginBottom: dimensionConstants.marginXSmall,
              textAlign: 'justify',
            }}
          />
        </View>
        {/* Refund of Amount In Case of receipt of Investment proceeds from Third Party */}
        <CustomTitle
          title={
            'Refund of Amount In Case of receipt of Investment proceeds from Third Party'
          }
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'In case the investment proceeds are received from a third party, then PAkOMAN will refund the amount to the relevant individual from whose bank Account the payment proceeds initiated. For the refund, PAkOMAN will require the system generated Payment acknowledgment and/or the Bank statement from the relevant third party to establish the payment has been made by from the bank account of the third party himself.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Dispute Resolution Mechanism */}
        <CustomTitle
          title={'Dispute Resolution Mechanism'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'In case of any compliant due to any technical reason the investor can follow the below mentioned process: Step 1: Investor can call the toll free number i.e. 111-090-090 or lodge compliant via PAkOMAN Funds Online Portal Step 2: After lodging complaint in system complaint will be forwarded to relevant department. Investor will be provided reference number via email and sms for tracking. Step 3: After necessary investigation, the complaint will be forwarded to vendor i.e. 1-link to investigate the issue further. Step 4: Resolution call along with email and SMS will be communicated to investor. The turnaround time for resolution by PAkOMAN Funds is 3 business days however, cases which are referred to the vendor i.e. 1-link may take additional 3 business days for resolution.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Multiple Transactions */}
        <CustomTitle
          title={'Multiple Transactions'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'In case multiple transactions (through physical form submission and/or e-transaction request submission) involving a single or multiple funds / plans are received from an investor, the applications will be processed in chronological order i.e. the application received first will be processed first.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Submission Of Physical Signed Form Or Other Documents */}
        <CustomTitle
          title={'Submission Of Physical Signed Form Or Other Documents'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'PAkOMAN may on a case to case basis require an investor to submit a physical form (of the same transaction) in addition to his / her e-transaction request.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Verifications Of E-Transaction Requests */}
        <CustomTitle
          title={'Verifications Of E-Transaction Requests'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            "The PAkOMAN from time to time on a case to case basis may require verification from the investor prior to processing the investors' e-transaction request."
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Book Closure Periods */}
        <CustomTitle
          title={'Book Closure Periods'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'All E-Transaction Request received during the book closure period pertaining to respective funds / plans shall be marked Rejected and the investment amount will be refunded to the investor as per procedure.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Security Of PAkOMAN Funds Online Credentials */}
        <CustomTitle
          title={'Security Of PAkOMAN Funds Online Credentials'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'You agree that any person who supplies PAkOMAN with your PAkOMAN Funds Online user name, password, and E-transaction request PIN Code (where applicable) will be allowed access to the Site and to your Account. It is the responsibility of the investor to keep his / her username, password and E-transaction request PIN secure and take steps to prevent unauthorized use of them. You must not tell or disclose them to another person or allow them to be seen by another person (including family or friends). You must not keep a record of them in a way which can be determined by another person. You must not record them together.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'You must notify PAkOMAN immediately if a record of your login credentials and PIN is lost or stolen or you become aware or suspect another person knows your online credentials and has attempted to or made unauthorized use of the Site. PAkOMAN may cancel your Online credentials at any time without notice if it believes either is being misused.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Records And Statements */}
        <CustomTitle
          title={'Records And Statements'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'You should carefully check Account records and statements given on this Site. If you believe that there has been any discrepancy or inconsistency in any transaction on this Site, or an unauthorized transaction, you must notify PAkOMAN immediately. Failure to do so may render you liable for unauthorized transaction which you may not have otherwise initiated/endorsed.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'Our records, unless proven to be wrong, will be evidence of your dealings with PAkOMAN in connection with the Site.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Liability For Unauthorized E-Transactions */}
        <CustomTitle
          title={'Liability For Unauthorized E-Transactions'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'You will be liable for any loss of funds arising from any unauthorized e-transaction on your Account if the loss occurs before you notify PAkOMAN that your Online Credentials have been misused, lost or stolen or become known to someone else and if you contribute to the loss because of your failure to look after and keep your Online credentials secure or your extreme carelessness in failing to protect their security is the dominant cause of your loss; Or your unreasonable delay in notifying PAkOMAN of the misuse, loss or theft of your Online Credentials becoming known to someone else and the loss occurs between the time you did become aware of and notify to PAkOMAN.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        <CustomTitle
          title={
            'You will not be liable for losses which are incurred before you have received your Online credentials; if the e-transaction occurs after you notify PAkOMAN that your Online Credentials have been misused or become known to someone else.'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Liability */}
        <CustomTitle
          title={'Liability'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            "You will be liable for and agree to indemnify PAkOMAN against any loss or damage PAkOMAN and any of the Fund (including its Trustee) under its Management may suffer because you did not observe your obligations under these Terms or acted negligently or fraudulently when using this Site. PAkOMAN and any of the Fund (including its Trustee) under its Management will not be responsible for any loss that you may incur if you fail to comply with the terms. The use of the Internet is subject to other risks which are not of a security nature described above but which arise from factors beyond PAkOMAN ' control, for example failure of communication networks, mechanical failures, power failures, malfunction, breakdown or inadequacy of equipment. These risks may result in your e-transaction requests being delayed, lost or inaccurately transmitted and may cause you to suffer losses. Unless PAkOMAN has been grossly negligent, the company will not be responsible for such losses. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website."
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Termination */}
        <CustomTitle
          title={'Termination'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'You may stop your use of the PAkOMAN Funds Online Service in its entirety at any time by giving written notice to PAkOMAN. PAkOMAN may terminate the Service at any time by giving you a written notice within 3 working days'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />
        {/* Special Note */}
        <CustomTitle
          title={'Special Note'}
          fontSize={fontConstants.middle}
          fontWeight={fontConstants.fontWeight600}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
            borderBottomWidth: 1,
            borderBottomColor: colorConstants.lightGray,
            paddingBottom: dimensionConstants.paddingXSmall,
          }}
        />
        <CustomTitle
          title={
            'Due to any technical / operational reason, fund transfer may be delayed. In such case, please contact our customer care help line number 111-090-090 for further facilitation. Funds are transferred as per TATs (Turn-Around-Time) defined by respective authorities (Bank, SECP, SBP, 1-Link).'
          }
          fontSize={fontConstants.small}
          fontWeight={fontConstants.fontWeight400}
          extraStyles={{
            marginBottom: dimensionConstants.marginXSmall,
            textAlign: 'justify',
          }}
        />

        <CustomDoubleButton
          primaryButtonText={languageTxt?.txtAgree}
          secondaryButtonText={languageTxt?.txtDisagree}
          secondaryExtraStyles={styles.buttonBottomMargin}
          handlePrimaryOnPress={() => {
            navigation.navigate(
              languageTxt?.reactStackKeys?.user?.eTransactions?.eInvestment
                ?.form,
            );
          }}
          handleSecondaryOnPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </Skeleton>
  );
};

export default Declaration;
