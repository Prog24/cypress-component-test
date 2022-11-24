import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

export default defineConfig({
  video: false,
  component: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
    },
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
