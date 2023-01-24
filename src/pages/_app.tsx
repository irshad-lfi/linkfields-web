import 'styles/global.scss';

import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/lib/config-provider/context';

const themeConfiguration: ThemeConfig = {
  hashed: false,
  token: {
    colorPrimary: '#FF7800',
    controlHeight: 70,
    borderRadius: 12,
  },
  components: {
    Button: {
      paddingContentHorizontal: 32,
    },
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={themeConfiguration}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
