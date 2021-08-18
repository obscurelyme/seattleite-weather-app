import React from 'react';

import './styles.scss';

import LoadingIndicator from '../Loading';

type NativeButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface ButtonProps extends NativeButtonProps {
  loading?: boolean;
}

export default function Button({ children, ...props }: React.PropsWithChildren<ButtonProps>): React.ReactElement {
  const { loading, ...nativeProps } = props;
  const { className, ...allOtherProps } = nativeProps;
  return (
    <button className={`Button ${className ?? ''}`.trim()} {...allOtherProps}>
      {loading ? <LoadingIndicator /> : children}
    </button>
  );
}
