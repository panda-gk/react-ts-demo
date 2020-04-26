// const config = {
//   'development': {
//     api: 'http://yapi.ywwl.org/mock/270/'
//   },
//   'debug': {
//     api: 'http://yapi.ywwl.org/mock/270/'
//   },
//   'test': {
//     api: 'http://yapi.ywwl.org/mock/270/'
//   },
//   'production': {
//     api: 'http://yapi.ywwl.org/mock/270/'
//   }
// }
let config = {
  'development': 'http://yapi.mockuai.com/mock/1434/',
  'debug': 'http://yapi.ywwl.org/mock/270/',
  'test': 'http://yapi.ywwl.org/mock/270/',
  'production': 'http://yapi.ywwl.org/mock/270/'
}
console.log(process.env.REACT_APP_SECRET_API)
const env = process.env.REACT_APP_SECRET_API || 'development'
export default {
  api: config[env]
}