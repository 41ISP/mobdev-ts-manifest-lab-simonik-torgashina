import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kitek.app',
  appName: 'feedback',
  webDir: 'dist',
  backgroundColor: '#f5efe3',
    plugins: {
        SplashScreen: {
            launchShowDuration: 1200,
            launchAutoHide: true,
            launchFadeOutDuration: 300,
            backgroundColor: '#f5efe3',
            androidScaleType: 'CENTER_CROP',
            showSpinner: false,
        },
        SystemBars: {
            insetsHandling: 'native',
            style: 'LIGHT',
        },
    },
};

export default config;
