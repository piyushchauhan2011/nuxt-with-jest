import Vue from 'vue'
import Image from '../components/image'

describe('Image Component', () => {
  let $mounted

  beforeEach(() => {
    $mounted = new Vue(Image).$mount()
  })

  test('snapshot', () => {
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
