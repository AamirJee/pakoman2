export const languageTxt: any = {
  //Stacks and Screen
  reactAsyncStorageKeys: {
    appInfo: 'appInfo',
    userInfo: 'userInfo',
    bottomtab: 'bottomtab',
  },
  reactStackKeys: {
    splash: 'Splash',
    auth: {
      name: 'Auth Screen',
      login: 'Login',
      forgotPassword: 'Forgot User Name / Password',
      changePassword: 'Change Password',
      register: {
        name: 'Register',
        investorTypes: 'Investor Types',
        corporateInvestor: 'Corporate Investor',
        individualInvestor: 'Individual Investor',
        pensionInvestor: 'Pension Investor',
        sahulatSarmayakari: 'Sahulat Sarmayakari',
        managementCompanies: 'Management Companies'
      },
    },
    guest: {
      name: 'Guest',
      aboutus: {
        name: 'About us',
        menus: 'About us Menus',
        whoWeAre: 'Who We Are',
        codeofConduct: 'Code Of Conduct',
        whistleBlower: 'Whistle Blower',
      },
      whatWeDo: {
        name: 'What We Do',
        menus: 'What We Do Menus',
        conventionalSolutions: {
          name: 'Conventional Solutions',
          acf: 'ACF (Money Market)',
          poif: 'POIF (POGSF)',
          asye: 'ASYE (Income)',
          poaaaf: 'POAAAF (Asset Allocation)',
          ahys: 'AHYS (Aggressive Income)',
        },
        shariahCompliantSolutions: {
          name: 'Shariah-Compliant Solutions',
          poaiif: 'POAIIF (Islamic Income)',
          poiaaf: 'POIAAF (Islamic Allocation)',
          poddf: 'PODDF (Islamic Money Market)',
        },
        portfolioManagement: 'Portfolio Management',
      },
      weServeYou: {
        name: 'We Serve You',
        menus: 'We Serve You Menus',
        companyInfromation: 'Company Infromation',
        needAFinancialAdvisor: 'Need a Financial Advisor',
        postAQueryComplaintForm: 'Post a Query / Complaint Form',
        accountStatement: 'Account Statement',
      },
      downloads: {
        name: 'Downloads',
        menus: 'Downloads Menus',
        fundManagersReport: 'Fund Managers Report',
        navHistory: 'Nav History',
        applicationForms: 'Application Forms',
        constitutiveDocuments: 'Constitutive Documents',
        financialStatements: 'Financial Statements',
        howToInvest: 'How To Invest',
        proxyVotingPolicy: 'Proxy Voting Policy',
        provisioningPolicyFinal: 'Provisioning Policy Final',
        fatwah: 'Fatwah',
        complianceCertificate: 'Compliance Certificate',
      },
    },
    user: {
      name: 'User',
      home: {
        name: 'Root Home',
        screen: 'Home',
      },
      alerts: 'Alerts',
      eTransactions: {
        name: 'E-Transactions',
        menus: 'E-Transactions Menus',
        eRedemption: {
          form: 'Form',
          name: 'E-Redemption',
          declaration: 'Declaration',
        },
        eConversion: {
          form: 'Form',
          name: 'E-Conversion',
          declaration: 'Declaration',
        },
        eInvestment: {
          form: 'Form',
          name: 'E-Investment',
          declaration: 'Declaration',
        },
        summary: {
          name: 'Summary',
          transactionSummary: 'Pending Transaction(s) Summary',
        },
      },
      addAccount: 'Add Account',
      accountStatement: {
        name: 'Account Statement',
        screen: 'Account Statement Screen',
        pdf: 'Account Statement PDF',
      },
      statement: 'Statement',
    },
    profile: 'Personal Information',
  },
  reactQueryKeys: {
    dashboard: {
      mappedAccount: 'mappedAccount',
      chartInfo: 'chartInfo',
      userInfo: 'userInfo',
    },
    generateAccountStatment: 'generateAccountStatment',
    sendAccountStatmentEmail: 'sendAccountStatmentEmail',
    alerts: {
      getUOSAlert: 'getUOSAlert',
    },
    eTransactions: {
      redemptionInfo: 'redemptionInfo',
      investmentInfo: 'investmentInfo',
      convertionsOfFundsIn: 'convertionsOfFundsIn',
      convertionsOfFundsOut: 'convertionsOfFundsOut',
      pendingInvestment: 'pendingInvestment',
      pendingRedemptionConversion: 'pendingRedemptionConversion',
    },
    allowedTransactionTypes: 'allowedTransactionTypes',
  },
  noDataAvailable: 'No data available',
  // ErrorMessages
  txtUserNameError: 'Username is required',
  txtPasswordError: 'Password is required',
  txtAccRegCodeError: 'Account No./ Registration No is required',
  txtCompanyNameError: 'Company Name is required',
  txtNTNError: 'National Tax Number (NTN) is required',
  txtCompIncorporationNumberError: 'Company Registration Number is required',
  txtAuthPersonNameError: 'Authorized Person Name is required',
  txtAuthPersonCNICError: 'Authorized Person CNIC is required',
  txtEmailError: 'Email ID (only company domain email id required) is required',
  txtRegContactError: 'Registered Contact is required',
  txtRegAddressError: 'Registered Address is required',
  txtNameError: 'Applicant Name is required',
  txtRegEmailError: 'Registered E-mail address is required',
  txtRegMobileNumError: 'Mobile Number is required',
  txtRegNoError: 'Folio Number is required',
  txtCNICError: 'CNIC(XXXXX-XXXXXXX-X) is required',
  txtDOBError: 'Date of Birth(DD/MM/YYYY) is required',
  txtCNICIssueDateError: 'CNIC Issue date(DD/MM/YYYY) is required',
  txtCNICExpiryDateError: 'CNIC Expiry date(DD/MM/YYYY) is required',
  txtSpouseError: 'Father/Spouse Name is required',
  txtAddressError: 'Address is required',
  txtNationalityError: 'Nationality is required',
  txtBankAccountNumError: 'Bank Acc. Number is required',
  txtIBAN_NumberError: 'IBAN Number is required',
  txtKnowError: 'Know is required',
  ddlGenderError: 'Gender is required',
  ddlCityError: 'City is required',
  ddlCountryError: 'Country is required',
  ddlOccupationError: 'Occupation is required',
  ddlSourceOfIncomeError: 'Income Source is required',
  ddlBankError: 'Bank is required',
  ddlAdvisorError: 'Advisor is required',
  txtNamePerCNICError: 'Name (as per CNIC)  is required',
  txtStartDateError: 'Start Date  is required',
  txtEndDateError: 'End Date  is required',

  txtEmailAddressError: 'E-mail address is required',
  unexpectedError: 'Something went wrong!',
  emailPatternError: 'Invalid email address',
  invalidUsernameOrPassword: 'Invalid credentials!',
  tryAgainLater: 'Could not post at this time. Try again later.',
  unAuthorized: 'User does not belongs to Professioinal Classification',

  // InputPlaceholder
  txtUserName: 'Username',
  txtPassword: 'Password',
  txtAccRegCode: 'Account No./ Registration No',
  txtCompanyName: 'Company Name',
  txtNTN: 'National Tax Number (NTN)',
  txtCompIncorporationNumber: 'Company Registration Number',
  txtAuthPersonName: 'Authorized Person Name',
  txtAuthPersonCNIC: 'Authorized Person CNIC',
  txtEmail: 'Email ID (only company domain email id required)',
  txtRegContact: 'Registered Contact',
  txtRegAddress: 'Registered Address',
  txtName: 'Applicant Name',
  txtRegEmail: 'Registered E-mail address',
  txtEmailAddress: 'E-mail address',
  txtRegMobileNum: 'Mobile Number',
  txtRegNo: 'Folio Number',
  txtCNIC: 'CNIC(XXXXX-XXXXXXX-X)',
  txtDOB: 'Date of Birth(DD/MM/YYYY)',
  txtCNICIssueDate: 'CNIC Issue date(DD/MM/YYYY)',
  txtCNICExpiryDate: 'CNIC Expiry date(DD/MM/YYYY)',
  txtSpouse: 'Father/Spouse Name',
  txtAddress: 'Address',
  txtNationality: 'Nationality',
  txtBankAccountNum: 'Bank Acc. Number',
  txtIBAN_Number: 'IBAN Number',
  txtKnow: 'How Did You Know About Pak Oman?',
  txtNamePerCNIC: 'Name (as per CNIC)',
  txtStartDate: 'Start Date',
  txtEndDate: 'End Date',

  // Select
  ddlGender: 'Select Gender',
  ddlCity: 'Select City',
  ddlCountry: 'Select Country',
  ddlOccupation: 'Select Occupation',
  ddlSourceOfIncome: 'Select Income Source',
  ddlBank: 'Select Bank',
  ddlAdvisor: 'Select Advisor',
  FileUpload1: '',

  next: 'Next',
  login: 'Login',
  registerNow: 'Register Now',
  openAccount: 'Open an Account',
  changeYourPassword: 'Change your Password',
  forgotUsername: 'Forgot Username?',
  forgotPassword: 'Forgot User Name/Password?',
  submitRequest: 'Submit Request',
  submit: 'Submit',
  clear: 'Clear',
  register: 'Register',
  cancel: 'Cancel',

  selectYourManangementCompany: 'Select Your Management Company',
  selectYourInvestmentType: 'Select Your Investment Type',
  servicesRequestFormForCorporateInvestors:
    'Services Request Form For Corporate Investors',
  sahulatSarmayakariAccountCap: 'SAHULAT SARMAYAKARI ACCOUNT',

  welcomeMsgPakOman: 'Welcome to Pak Oman Digital Sigin in your account',
  welcomeMsg: 'Welcome to Rusd Digital Sigin in your account',

  onlineServicesRequest: 'Online Services Request',
  investorWelcome:
    'Welcome to Online Service Registration for PakOman Investments.',
  investorWelcome2:
    'Please kindly fill out the fields as below and submit. A customer service representative will be in touch shortly. Please note mandatory fields are marked with an *',
  investorWelcome3:
    'If you need assistance please email us on xxx@XXXXX.com or call 021-xxx-Xxx-xxx',
  sahulatSarmayakariAccountInfo:
    'Please enter your infomation and proceed to the next step so we can build your accounts.',
  sahulatSarmayakariAccountOpen:
    'Not yet PakomanInvestor? \nOpen a New Sahulat Sarmayakari Account',
  copyrights: '© All Copyrights Reserved - Powered By Sidat Hyder',

  registerAsA: 'Register as a',
  corporateInvestorTitle: 'Corporate Investor',
  corporateInvestorDetail:
    'Manage the investment of your Corporate Funds. From cash management to long term investments, we have options that are best suited to your institutional needs.',
  individualInvestorTitle: 'Individual Investor',
  individualInvestorDetail:
    'Manage your own Savings and Investments. The broad array of investment options offered by AGIML cover multiple risk/return profiles to enable you to make an investment appropriate for your needs.',
  pensionInvestorTitle: 'Pension Investor',
  pensionInvestorDetail:
    'Manage your employee retirement funds and endowment plans with confidence through our professional advisory services and wide product range.',

  // ETransactions
  eTransactionsDeclaration0: 'All investments in funds are subject to applicable fees and other charges.',
  eTransactionsDeclaration1: 'I/We, the undersigned, hereby declare that:',
  eTransactionsDeclaration2:
    'I acknowledge having read and understood the e-transact Terms and Conditions and agree to be bound by whatever written in the e-transact Terms and Conditions.',
  eTransactionsDeclaration3:
    'I understand that redemption / conversion of units will be made in accordance with the terms and conditions as mentioned in the Constitutive Documents of selected funds;',
  eTransactionsDeclaration4:
    'I understand that the redemption / conversion price of units will differ due to Front-end Load/Back-end Load where applicable;',
  eTransactionsDeclaration5:
    'I understand that in case of mutual funds operating under forward pricing mechanism, the price of units applicable for redemption / conversion will not be known at the time of redemption / conversion;',
  eTransactionsDeclaration6:
    'I understand that redemption / conversion of units transaction may be subject to capital gain tax in accordance with the requirements of Income Tax Ordinance, 2001 applicable in Pakistan and the directives issued by Federal Board of Revenue (FBR) from time to time;',
  eTransactionsDeclaration7:
    'I understand that once the redemption / conversion request has been received through e-transact by Pak Oman Asset Management Company Limited, it cannot be cancelled/altered.',




  generateReport: 'Generate Report',

  // AddAccount
  accountDetails: 'Account Details',
  accountNumber: 'Account Number',
  accountTitle: 'Account Title',
  accountCnic: 'Account CNIC',

  txtAccountNumberError: 'Account Number is required',
  txtAccountTitleError: 'Account Title is required',
  txtAccountCnicError: 'Account CNIC is required',

  txtAgree: 'Agree',
  txtDisagree: 'Disagree',

  productName: 'Product Name',
  classCode: 'Class Code: ',
  typeName: 'Type Name: ',
  Redeemable: 'Redeemable',
  balUnits: 'Bal. Units: ',
  reqUnits: 'Req. Units: ',
  FundName: 'Fund Name',
  AddRequestFund: 'Add Request Fund',
  byUnits: 'By Units',
  byAmount: 'By Amount',
  addRequest: 'Add Request',
  sendRequest: 'Send Request',
  verifyOTP: 'Verify OTP',
  existingFundAvailable: 'Existing Fund Available ',

  //Aamir 09May
  subscriptionAmount: 'Enter Subscription Amount for Investment',
  basdAmount: 'Amount based on Existing Fund',
  participationAmount:'New Participation Amount',
  requestedAmount:'Requested Amount',
  nonParkingFund:'Subscription Fund Selection',
  frontendLoad:'Request to waive FEL%',
  backendLoad: 'Applicable Backend Load %',
  serviceFee: 'Service Fee',
  managementCompany: 'Management Company',

  
  conversionAmountError: 'By Amount less then Min Investment Amount',
  txtFundsError: 'Please select the fund name',
  txtProductNameError: 'Product Name is required',
  txtRedeemUnitsError: 'Redeem Units is required',
  txtRedeemAmountError: 'Redeem Amount is required',
  txtInvestmentAmountError: 'Investment Amount is required',
  txtConversionAmountError: 'Conversion Amount is required',
  txtManagementCompanyError: 'Please select the fund name',

  
  txtSubscriptionAmountError: 'Subscription Amount is required',
  txtBasdAmountError: 'Basd Amount is required',
  txtParticipationAmountError: 'Participation Amount is required',
  txtFrontendLoadError: 'Frontend Load Amount is required',
  txtBackLoadError: 'Backend Load Amount is required',
  txtserviceFeeError: 'Service Fee Value  is required',
  
  conversions: 'Conversions',
  conversionOut: 'Conversion Out',
  conversionIn: 'Conversion In',
  entire: 'Entire',
  pendingInvestment: 'Pending Investment(s)',
  pendingRedemptionConversion: 'Pending Redemption/Conversion(s)',

  fund: 'Fund',
  fromFund: 'From (Fund)',
  to: 'To',
  toFund: 'To (Fund)',
  pendingTransaction: 'Pending Transaction',
  transactionDate: 'Transaction Date',
  transactionType: 'Transaction Type',
  notificationAlerts: 'Notification Alerts',
  saveChanges: 'Save Changes',
  Cheque: 'Cheque',
  DemandDraft: 'Demand Draft',
  BankTransfer: 'BankTransfer',
  PlaceinParkingAccount: 'PlaceinParkingAccount',

  ok: 'OK',
  submittedMsg: 'Transaction Submitted',
  emailMsg: 'Email successfully sent',
  error_title: 'Something went wrong',
  an_unexpected_error:
    "An unexpected error has occurred, please try again and if it doesn't work please restart the app.",
  forget_heading: 'Forget your User Name/Password',
  forget_description:
    'Lost your user name:please enter your E-mail Address,leaving Username field empty,then click the Send Username button,and your username will be sent to your email address. Lost your password:but know your username,please enter your Username and your E-mail Address, press the Send Password button,and you will receive a new password shortly.Use this new password to access the site.',
  changeYourPasswordDescription:
    '- You can not repeat your last seven passwords\n- Password must contain minimum 8 characters\n- maximum length 8 characters\n- At least contain 2 lower case characters',

  txtOldPassword: 'Old Password',
  txtOldPasswordError: 'Old Password is required',
  txtNewPassword: 'New Password',
  txtNewPasswordError: 'New Password is required',
  txtConfirmPassword: 'Confirm Password',
  txtConfirmPasswordError: 'Confirm Password is required',
  'must contain minimum 8 characters': 'must contain minimum 8 characters',
  'maximum length 8 characters': 'maximum length 8 characters',
  forgotPasswordKey: 'forgotPassword',
};
