
export default {
  config: {
    auth: {
      logo: "./src/admin/favicon.png",
    },
    head: {
      favicon: "./src/admin/favicon.png",
    },
    theme: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    tutorials: false,
    notifications: { releases: false },
    locales: [
        'en',
        'en-US',
        'en-PH'
    ],
    translations: {
      "en": {
        'Auth.form.email.label': 'D8 Email',
        'app.components.LeftMenu.navbrand.title': 'D8 Dashboard',
        'Auth.form.welcome.title': 'Welcome to D8',
        'Auth.form.welcome.subtitle': 'Log in to your D8 account'
      },
    },
  },
  bootstrap() {},
};

