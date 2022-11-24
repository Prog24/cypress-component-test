import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

export default function configurePlugins(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) {
  addMatchImageSnapshotPlugin(on, config)
}
