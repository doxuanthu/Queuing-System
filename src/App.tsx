import 'antd/dist/antd.css';
import './view/Styles/styles.scss';

import React, { memo, Suspense, useEffect } from 'react';
import lodash from 'lodash';
import { useNavigate } from 'react-router-dom';
import PrivatePage from './routers/component/PrivatePage';
import PublicPage from './routers/component/PublicPage';

const MainView = memo(({ statusLogin }: { statusLogin: boolean }) => {
  return (
    <>
      {statusLogin ? (
        <Suspense fallback={<></>}>
          <PrivatePage />
        </Suspense>
      ) : (
        <Suspense fallback={<></>}>
          <PublicPage />
        </Suspense>
      )}
    </>
  );
});

const App: React.FC = () => {
  let token: any = null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      //   navigate('/login');
    }
  }, [token, navigate]);
  return <MainView statusLogin={!lodash.isEmpty(token)} />;
};

export default App;
