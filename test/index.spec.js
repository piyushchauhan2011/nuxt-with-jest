import Nuxt from 'nuxt'
import { resolve } from 'path'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null
let server = null

describe('Index page', () => {
  // Init Nuxt.js and create a server listening on localhost:4000
  beforeEach(async () => {
    const rootDir = resolve(__dirname, '..')
    let config = {}
    try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
    config.rootDir = rootDir // project folder
    config.dev = false // production build
    nuxt = new Nuxt(config)
    await nuxt.build()
    server = new nuxt.Server(nuxt)
    server.listen(4000, 'localhost')
  })
  
  // Example of testing only generated html
  test('Route / exits and render HTML', async () => {
    let context = {}
    const { html } = await nuxt.renderRoute('/', context)
    expect(html.includes('<h1 class="red">Hello world!</h1>')).toBeTruthy()
  })

  // Example of testing via dom checking
  test('Route / exits and render HTML with CSS applied', async t => {
    const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
    const element = window.document.querySelector('.red')
    expect(element).not.toBeNull()
    expect(element.textContent).toEqual('Hello world!')
    expect(element.className).toEqual('red')
    expect(window.getComputedStyle(element).color).toEqual('red')
  })

  // Close server and ask nuxt to stop listening to file changes
  afterEach(() => {
    server.close()
    nuxt.close()
  })
})
