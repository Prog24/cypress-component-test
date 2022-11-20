import { useState } from 'react'
import CustomDialog from './index'

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
  it('mounts', () => {
    cy.mount(<CheckDialog />)
    cy.findByTestId('title').should('have.text', 'ダイアログタイトル')
    cy.findByTestId('submit').click()
  })
})