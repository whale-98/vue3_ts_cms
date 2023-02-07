import axios from 'axios'

// axios
//   .request({
//     method: 'get',
//     url: 'http://123.207.32.32:8000/home/multidata'
//   })
//   .then((res) => {
//     console.log(res, 23333)
//   })
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res, 23333)
// })
console.log(process.env.VUE_APP_BASE_URL)

axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.timeout = 3000
// axios.defaults.headers = {}

axios
  .get('/get', {
    params: {
      name: 'code',
      age: 24
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('/post', {
    data: {
      name: 'zj',
      age: 24
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios.interceptors.request.use()
axios.interceptors.response.use()
