import CustomText from './index'

describe('<CustomText>', () => {
  it('mounts', () => {
    cy.mount(<CustomText>テキスト</CustomText>)
    cy.findByTestId('hoge-text').should('have.text', 'テキスト')
    cy.findByTestId('hoge-text').should('have.css', 'color', 'rgb(25, 118, 210)')
  })
})
