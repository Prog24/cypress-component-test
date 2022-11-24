import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

export default defineConfig({
  video: false,
  component: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name == 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--window-size=500,500')
          launchOptions.args.push('--force-device-scale-factor=1')
        }
        return launchOptions
      })
    },
    viewportWidth: 500,
    viewportHeight: 500,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
