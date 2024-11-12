import React from 'react';

import {languageTxt} from '../../../../../utils/constants/languageTxt';

import Skeleton from '../../../../shared/Skeleton';
import CustomPdfView from '../../../../shared/CustomPdfView';

const PDFViewer = ({route}: any) => {
  const {data} = route?.params;
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.user?.accountStatement?.name}
      isBottomNav={true}
      isBack={true}>
      <CustomPdfView
        uri={`data:application/pdf;base64,${data}`}
        // isHorizontal={true}
      />
    </Skeleton>
  );
};

export default PDFViewer;
