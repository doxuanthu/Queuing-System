import React, { PropsWithChildren } from 'react';
import { logo, frame_1 } from '../../../../shared/assets/images/index';
import '../../styles.scss';

const AuthLayout: React.FC<PropsWithChildren<any>> = props => {
  return (
    <div className="auth-page">
      <div className="main__box">
        <div className="left">
          <div className="logo__box">
            <img src={logo} alt="logo" />
          </div>
          {props.children}
        </div>
        <div className="right">
          <img src={frame_1} alt="" />
          <div className="system-name">
            <h3>Hệ thống</h3>
            <h2>QUẢN LÝ XẾP HÀNG</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AuthLayout);
