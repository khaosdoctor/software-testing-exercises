import renderer from 'react-test-renderer'
import App from './component'

describe('Errors', () => {
  it('does not render if the name is not a string', () => {
    expect(() => renderer.create(<App name={1} />)).toThrow(new Error('Name is not a string'))
  })
})

describe('Happy path', () => {
  it('correctly renders a name', () => {
    const component = renderer.create(<App name="Lucas" />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('correctly renders default name', () => {
    const component = renderer.create(<App />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
