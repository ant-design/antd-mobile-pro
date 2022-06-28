import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'h5',
  keepalive: [/users/],
  aconsole: {
    console: {},
    inspx: {},
  },
  mobileLayout: true,
  mfsu: {},
  hash: false,
});
