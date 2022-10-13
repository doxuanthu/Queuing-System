import React from 'react';

export type IRouter = {
  loader?: any;
  path: string;
  component?: React.FC<any>;
  isPrivate?: boolean;
  masterLayout?: boolean;
  layoutComponent?: React.FC<any>;
  routes?: Array<IRouter>;
};
