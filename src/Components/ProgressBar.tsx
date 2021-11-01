import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

interface IProgressBarProps {
  isLoading: boolean;
}

export default function ProgressBar(props: IProgressBarProps): JSX.Element {
  const { isLoading } = props;
  return (
    <div>
      <Backdrop open={isLoading} >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
