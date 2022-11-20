import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/organismus/Footer';
import Header from 'components/organismus/Header';

const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
