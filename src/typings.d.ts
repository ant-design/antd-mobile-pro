// @ts-ignore
/* eslint-disable */

declare namespace API {

  type LoginResult = {
    status?: string;
    currentAuthority?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
  };
}
