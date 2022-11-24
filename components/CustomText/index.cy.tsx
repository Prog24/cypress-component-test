import CustomText from './index'
import { teal } from '@mui/material/colors'
import ThemeProvider from '../../ThemeProvider'
import { hexToRgb } from '@mui/material'

const sampleText = ['テキスト', 'ほげ']

describe('<CustomText>', () => {
  sampleText.forEach((text) => {
    it(`mounts ${text}`, () => {
      cy.mount(
        <ThemeProvider>
          <CustomText>{text}</CustomText>
        </ThemeProvider>
      )
      cy.findByTestId('hoge-text').should('have.text', text)
      cy.findByTestId('hoge-text').should('have.css', 'color', hexToRgb(teal[500]))
    })
  })
})
