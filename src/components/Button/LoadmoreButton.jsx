import React from 'react';
import { Button } from '@mantine/core';

export const LoadmoreButton = ({ loading, dark, disabled, onClick, ...rest }) => {
  return (
    <Button
      {...rest}
      loading={loading}
      variant="filled"
      style={{
        background: dark ? '#ADB5BD' : '#373A40'
      }}
      loaderPosition="left"
      disabled={disabled}
      onClick={onClick}>
      {disabled ? 'Nothing more to load' : 'Load More'}
    </Button>
  );
};
