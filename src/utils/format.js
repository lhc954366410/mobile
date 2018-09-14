class URLSearchParams {
  constructor({ appendEmpty }) {
    this.str = ''
    this.appendEmpty = appendEmpty
  }

  append(key, value, appendEmpty = this.appendEmpty) {
    if (value !== undefined || (value === undefined && appendEmpty)) this.str += (this.str === '' ? key + '=' + value : '&' + key + '=' + value)
  }

  toString() {
    return this.str
  }

  isEmpty() {
    return this.str.length === 0
  }
}

/**
 * 格式化url
 * @param {*} url 
 * @param {*} query 
 * @param {*} params 
 * @param {*} appendEmpty 
 */
export function formatQueryUrl(url, query = {}, params = {}, appendEmpty = false) {
  let u = new URLSearchParams({ appendEmpty })
  Object.keys(query).forEach(key => u.append(key, query[key]))

  if (u.isEmpty()) return format(url, params)

  url = format(url, params)
  return url.indexOf('?') >= 0
    ? url + '&' + u.toString()
    : url + '?' + u.toString()
}