import React, { FC } from 'react';
import { AppProvider } from 'providers';
import { wakeUpAPIServer } from 'service/api';

wakeUpAPIServer();

const App: FC = () => {
  return (
    <React.StrictMode>
      <AppProvider />
    </React.StrictMode>
  );
};

export default App;
