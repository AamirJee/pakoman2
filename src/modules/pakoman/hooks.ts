import {useQuery} from 'react-query';

import {languageTxt} from '../../utils/constants/languageTxt';
import {
  getACFApi,
  getAHYSApi,
  getASYEApi,
  getCompanyInformationApi,
  getPOAAAFApi,
  getPOIFApi,
  getPOAIIFApi,
  getPOIAAFApi,
  getPODDFApi,
  getWhoWeAreApi,
  getPortfolioManagementApi,
} from './api';

const useWhoWeAreInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.whoWeAre, () =>
    getWhoWeAreApi(),
  );
};

const useCompanyInformationInfo = () => {
  return useQuery(
    languageTxt?.reactQueryKeys?.pakoman?.companyInformation,
    () => getCompanyInformationApi(),
  );
};

const useACFInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.acf, () => getACFApi());
};

const usePOIFInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.poif, () =>
    getPOIFApi(),
  );
};

const useASYEInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.asye, () =>
    getASYEApi(),
  );
};

const usePOAAAFInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.poaaaf, () =>
    getPOAAAFApi(),
  );
};

const useAHYSInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.ahys, () =>
    getAHYSApi(),
  );
};

const usePOAIIFInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.poaiif, () =>
    getPOAIIFApi(),
  );
};

const usePOIAAFInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.poiaaf, () =>
    getPOIAAFApi(),
  );
};

const usePODDFInfo = () => {
  return useQuery(languageTxt?.reactQueryKeys?.pakoman?.poddf, () =>
    getPODDFApi(),
  );
};

const usePortfolioManagementInfo = () => {
  return useQuery(
    languageTxt?.reactQueryKeys?.pakoman?.portfolioManagement,
    () => getPortfolioManagementApi(),
  );
};

export {
  useWhoWeAreInfo,
  useCompanyInformationInfo,
  useACFInfo,
  usePOIFInfo,
  useASYEInfo,
  usePOAAAFInfo,
  useAHYSInfo,
  usePOAIIFInfo,
  usePOIAAFInfo,
  usePODDFInfo,
  usePortfolioManagementInfo,
};
