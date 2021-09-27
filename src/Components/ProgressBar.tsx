import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

export default function ProgressBar(props: any): any {
  const { isLoading } = props;
  return (
    <div>
      <Backdrop open={isLoading} >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
