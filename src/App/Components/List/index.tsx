import React from 'react';

import './styles.scss';

interface ListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  horizontal?: boolean;
}

export function UnorderedList({
  children,
  horizontal,
  ...nativeProps
}: React.PropsWithChildren<ListProps>): React.ReactElement {
  const { className, ...allOtherProps } = nativeProps;
  const classes = `List ${horizontal ? 'Horizontal' : ''} ${className ?? ''}`.trim();
  return (
    <ul className={classes} {...allOtherProps}>
      {children}
    </ul>
  );
}

type ListItemProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export function ListItem({ children, ...nativeProps }: React.PropsWithChildren<ListItemProps>): React.ReactElement {
  const { className, ...allOtherProps } = nativeProps;
  return (
    <li className={`ListItem ${className}`.trim()} {...allOtherProps}>
      {children}
    </li>
  );
}
