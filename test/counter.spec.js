import { mount } from 'avoriaz'
import Counter from '../components/counter'

describe('Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })
  test('renders the correct markup', () => {
    expect(wrapper.html()).toEqual('<div>0<button>Increment</button></div>')
  })

  // it's also easy to check for the existence of elements
  test('has a button', () => {
    expect(wrapper.contains('button')).toEqual(true)
  })

  test('test increment function', () => {
    expect(wrapper.vm.count).toBe(0);
    wrapper.vm.increment();
    expect(wrapper.vm.count).toBe(1);
  })

  afterEach(() => {
    wrapper = null
  })
})
