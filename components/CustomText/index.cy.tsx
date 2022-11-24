import CustomText from './index'

const sampleText = ['テキスト', 'ほげ']

describe('<CustomText>', () => {
  sampleText.forEach((text) => {
    it(`mounts ${text}`, () => {
      cy.mount(<CustomText>{text}</CustomText>)
      cy.findByTestId('hoge-text').should('have.text', text)
    })
  })
})
