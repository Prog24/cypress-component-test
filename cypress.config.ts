import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

export default defineConfig({
  video: false,
  component: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
    },
    viewportWidth: 500,
    viewportHeight: 500,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
