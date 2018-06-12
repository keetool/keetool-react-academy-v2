import React from "react";

const AccountContext = React.createContext();

export const AccountProvider = AccountContext.Provider;

export function withAccount(Component) {
  return function AccountConsumer(props) {
    return (
      <AccountContext.Consumer>
        {account => <Component {...props} account={account} />}
      </AccountContext.Consumer>
    );
  };
}
