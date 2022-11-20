import React, { FC } from 'react';
import { AppProvider } from 'providers';

const App: FC = () => {
  return (
    <React.StrictMode>
      <AppProvider />
    </React.StrictMode>
  );
};

export default App;
