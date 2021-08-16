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
  return (
    <ul className={`List ${horizontal ? 'Horizontal' : ''} ${nativeProps?.className ?? ''}`.trim()} {...nativeProps}>
      {children}
    </ul>
  );
}

type ListItemProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export function ListItem({ children, ...nativeProps }: React.PropsWithChildren<ListItemProps>): React.ReactElement {
  return <li className={`ListItem ${nativeProps?.className ?? ''}`.trim()}>{children}</li>;
}
