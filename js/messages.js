const messages = [
  { component: 'vText', data: 'Welcome to the <b>Dynamic Component</b> demo!' },
  { component: 'vText', data: 'Look at this nice picture:' },
  { component: 'vImage', data: 'https://placeimg.com/350/200/animals' },
  { component: 'vText', data: 'If you prefer, look at this code component:' },
  { component: 'vCode', data: 'var a = 1;\nvar b = 2;\nb = a;' },
  { component: 'vText', data: 'End of demo 🎉' }
]

function streamMessages (fn, i = 0) {
  const streamMessageHelper = (fn, i, res, rej) => {
    if (i >= messages.length) return res('done')
    fn(messages[i])
    setTimeout(() => streamMessageHelper(fn, i + 1, res, rej), 500)
  }

  return new Promise((resolve, reject) => {
    return streamMessageHelper(fn, i, resolve, reject)
  })
}

export default streamMessages
