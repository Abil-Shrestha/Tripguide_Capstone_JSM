/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import { Toast, Navbar, Footer } from '@components';
import { AlertProvider, GlobalProvider } from '@context';

import '@styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import { pageVariants } from '@utils/variants';
import { store } from '@redux/store';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <GlobalProvider>
        <AlertProvider>
          <ThemeProvider attribute='class'>
            <div className='relative min-h-screen overflow-x-hidden bg-primaryGray dark:bg-cBlack-1 dark:text-white'>
              <Navbar />
              <AnimatePresence mode='wait'>
                <motion.main key={router.route} variants={pageVariants} initial='initial' animate='animate' exit='exit'>
                  <Toast />
                  <Component {...pageProps} />
                </motion.main>
              </AnimatePresence>
              <Footer />
            </div>
          </ThemeProvider>
        </AlertProvider>
      </GlobalProvider>
    </Provider>
  );
};

export default MyApp;
