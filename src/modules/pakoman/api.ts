import {pakoman_instance} from '../../config/http';

const getWhoWeAreApi = async () => {
  return pakoman_instance
    .get('/about-us/who-we-are.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getCompanyInformationApi = async () => {
  return pakoman_instance
    .get('/let-us-serve-you/company-information.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getACFApi = async () => {
  return pakoman_instance
    .get('/what-we-do/conventional-solutions/acf.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getPOIFApi = async () => {
  return pakoman_instance
    .get('/what-we-do/conventional-solutions/pogsf.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getASYEApi = async () => {
  return pakoman_instance
    .get('/what-we-do/conventional-solutions/asye.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getPOAAAFApi = async () => {
  return pakoman_instance
    .get('/what-we-do/conventional-solutions/poaaaf.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getAHYSApi = async () => {
  return pakoman_instance
    .get('/what-we-do/conventional-solutions/ahys.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getPOAIIFApi = async () => {
  return pakoman_instance
    .get('/what-we-do/shariah-compliant-solutions/poaiif.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getPOIAAFApi = async () => {
  return pakoman_instance
    .get('/what-we-do/shariah-compliant-solutions/poiaaf.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getPODDFApi = async () => {
  return pakoman_instance
    .get('/what-we-do/shariah-compliant-solutions/poddf.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getPortfolioManagementApi = async () => {
  return pakoman_instance
    .get('/what-we-do/portfolio-management.php')
    .then((data: any) => {
      return {
        success: true,
        data: data?.data || [],
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

export {
  getWhoWeAreApi,
  getCompanyInformationApi,
  getPOIFApi,
  getASYEApi,
  getACFApi,
  getPOAAAFApi,
  getAHYSApi,
  getPOAIIFApi,
  getPOIAAFApi,
  getPODDFApi,
  getPortfolioManagementApi,
};
