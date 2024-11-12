import React from 'react';

import Skeleton from '../../../../shared/Skeleton';
import CustomPdfView from '../../../../shared/CustomPdfView';

const Policies = ({route}: any) => {
  const {data} = route?.params;
  return (
    <Skeleton title={data?.name} isBottomNav={true}>
      <>{data?.url && <CustomPdfView uri={data.url} />}</>
    </Skeleton>
  );
};

export default Policies;
