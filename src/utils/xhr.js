import axios from 'axios'
import URL from '../services/url.config'
const MAX_WAITING_TIME = 30000

/**
 * 采用axios封装的XHR方法
 * @param {String} url 调用的接口地址
 * @param {Object} config 接口参数对象
 * @returns {Object} Promise 对象
 */
export default function getWrappedFetch(url, options) {
  let { method, body, headers, credentials, params } = options
  let option, config
  method = method ? method : body ? 'POST' : 'GET'
  method = method.toLowerCase()
  option = method === 'get' ? { params } : { data: body }
  url = URL[url]
  config = {
    url,
    method,
    timeout: MAX_WAITING_TIME,
    headers: {
      'Accept': 'application/json',
      //此处最好不要设置成application/json, 不然会产生Preflight request
      //https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
      //由于接口原因，此次必须设置为application/json
      'Content-Type': 'application/json; charset=utf-8',
      ...headers
    },

    // 如要跨域随请求传递cookie， 请设置此项
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials
    withCredentials: credentials || false,
    ...option
  }


  // axios文档
  // https://github.com/axios/axios
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        if (!navigator.onLine) {
          error.message = '网络无法连接'
        }
        if (process.env.NODE_ENV === 'development') {
          console.log(error)
        }
        reject(error)
      })
  })
}