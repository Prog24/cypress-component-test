import { useState } from 'react'
import { teal } from '@mui/material/colors'
import CustomDialog from './index'
import ThemeProvider from '../../ThemeProvider'
import { hexToRgb } from '@mui/material'

const CheckDialog = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <CustomDialog
      open={open}
      onClose={() => setOpen(false)}
      onSubmit={() => window.console.log('submit')}
      title='ダイアログタイトル'
    />
  )
}

describe('<CustomDialog>', () => {
  beforeEach(() => {
    cy.viewport(500, 500)
  })
  it('mounts', () => {
    cy.mount(
      <ThemeProvider>
        <CheckDialog />
      </ThemeProvider>
    )
    cy.matchImageSnapshot('CustomDialog')
    cy.findByTestId('dialog').should('have.length.at.least', 1)
    cy.findByTestId('title').should('have.text', 'ダイアログタイトル')
    cy.findByTestId('title').should('have.css', 'color', `${hexToRgb(teal[500])}`)
    cy.findByTestId('text-field').type('Hello World')
    cy.findByTestId('text-field').findByRole('textbox').should('have.value', 'Hello World')
    cy.findByTestId('cancel').click()
    cy.findByTestId('dialog').should('have.length', 0)
  })
})