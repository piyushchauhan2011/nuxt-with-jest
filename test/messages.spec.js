import messages from '../js/messages'

describe('Check messages', () => {
  test('stream messages', () => {
    return messages(m => {}).then(r => {
      expect(r).toEqual('done')
    })
  })
})
