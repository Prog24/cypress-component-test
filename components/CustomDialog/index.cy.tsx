import { useState } from 'react'
import { blue } from '@mui/material/colors'
import CustomDialog from './index'

// TODO: utilsか何かに切り出す
const hex2rgb = (hex: string) => {
  hex = hex.slice(1)
  const rgb = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => {
    return parseInt(str, 16)
  })
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

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
    cy.findByTestId('title').should('have.css', 'color', `${hex2rgb(blue[700])}`)
    cy.findByTestId('submit').click()
  })
})