import CustomText from './index'
import { teal } from '@mui/material/colors'
import ThemeProvider from '../../ThemeProvider'
import { hexToRgb } from '@mui/material'

describe('<CustomText>', () => {
  it('mounts', () => {
    cy.mount(
      <ThemeProvider>
        <CustomText>テキスト</CustomText>
      </ThemeProvider>
    )
    cy.findByTestId('hoge-text').should('have.text', 'テキスト')
    cy.findByTestId('hoge-text').should('have.css', 'color', `${hexToRgb(teal[500])}`)
  })
})
