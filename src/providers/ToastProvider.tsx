import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children?: ReactNode;
};

const ToastProvider: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export { ToastProvider };
