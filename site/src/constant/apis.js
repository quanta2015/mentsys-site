var mode = process.env.NODE_ENV
let API_SERVER = 'http://localhost'



if (mode === 'development') {
  API_SERVER = 'https://mqcai.top'
  // API_SERVER = 'http://localhost'
}

if (mode === 'production') {
  API_SERVER = 'https://mqcai.top'
}

export { API_SERVER }
