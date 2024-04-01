import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nextjs14capacitor.app',
  appName: 'nextjs14capacitor',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
