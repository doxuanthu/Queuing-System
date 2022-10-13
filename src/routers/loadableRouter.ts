import React from 'react';
import { IRouter } from './interface';

type Iloadable = {
  routers: Array<IRouter>;
};

const flattenIRouter = (item: IRouter): any => {
  const { isPrivate = true } = item;

  if (item.routes == null) {
    return [
      {
        ...item,
        isPrivate,
        component: React.lazy(() => item.loader),
      },
    ];
  }

  return item.routes.reduce(
    (_arr: any, it: IRouter) => {
      _arr.push(...flattenIRouter(it));
      return _arr;
    },
    [
      {
        ...item,
        isPrivate,
        component: React.lazy(() => item.loader),
        routes: undefined,
      },
    ],
  );
};

class LoadableRouter {
  routers: Array<IRouter>;

  constructor({ routers }: Iloadable) {
    this.routers = routers.reduce((_arr: Array<any>, item: IRouter) => {
      _arr.push(...flattenIRouter(item));
      return _arr;
    }, []);
  }
}

export default LoadableRouter;
