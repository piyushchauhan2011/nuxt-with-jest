import Vue from 'vue'
import Code from '../components/code'

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('Code Component', () => {
  let $mounted

  beforeEach(() => {
    $mounted = new Vue(Code).$mount()
  })

  test('snapshot', () => {
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  test('renders correctly with different props', () => {
    expect(getRenderedText(Code, {
      data: 'const a = 23'
    })).toBe('const a = 23')

    expect(getRenderedText(Code, {
      data: '<h1>Hero Element</h1>'
    })).toBe('<h1>Hero Element</h1>')
  })

  afterEach(() => {
    $mounted = null
  })
})
