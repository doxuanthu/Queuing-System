import React, { PropsWithChildren } from 'react';
import { Route } from 'react-router-dom';
import { IRouter } from '../interface';

interface IShowRouter {
  routers: IRouter[];
  MasterLayout?: React.FC<PropsWithChildren<any>>;
}

const renderRoute = (
  MasterLayout: React.FC<any> | undefined,
  hasMaster: boolean | undefined,
  component: any,
  path: string,
) => {
  const DynamicComponent: React.FC<any> = component;
  if (hasMaster === false) {
    return <Route key={path} path={path} element={<DynamicComponent />} />;
  }
  if (MasterLayout) {
    return (
      <Route
        key={path}
        path={path}
        element={
          <MasterLayout>
            <DynamicComponent />
          </MasterLayout>
        }
      />
    );
  } else {
    return <Route key={path} path={path} element={<DynamicComponent />} />;
  }
};

const ShowRouter = ({ routers, MasterLayout }: IShowRouter) => {
  return routers.map((router: IRouter) => {
    return renderRoute(
      (MasterLayout = router.layoutComponent),
      router.masterLayout,
      router.component,
      router.path,
    );
  });
};

export default ShowRouter;
