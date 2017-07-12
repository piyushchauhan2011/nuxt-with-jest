import Vue from 'vue'
import Text from '../components/text'

describe('Text Component', () => {
  let $mounted

  beforeEach(() => {
    $mounted = new Vue(Text).$mount()
  })

  test('snapshot', () => {
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
