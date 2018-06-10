import Vue from 'vue'
import Hello from '../components/hello'

describe('Hello Component', () => {
  let $mounted

  beforeEach(() => {
    $mounted = new Vue(Hello).$mount()
  })

  test('snapshot', () => {
    let $html = $mounted.$el.outerHTML
    console.log($html);
    expect($html).toMatchSnapshot()
  })
})
