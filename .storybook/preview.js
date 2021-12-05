const customViewports = {
  mobile360: {
    name: 'Mobile 360px',
    styles: {
      width: '360px',
      height: '640px'
    }
  },
  mobile375: {
    name: 'Mobile 375px',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  mobile414: {
    name: 'Mobile 414px',
    styles: {
      width: '414px',
      height: '736px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports},
}