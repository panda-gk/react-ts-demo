

const config = {
  target: 'ts',
  serverUrl: 'http://yapi.mockuai.com',
  outputFilePath: 'src/api',
  projectId: '1434',
  UM_distinctid: "171637f0112366-06894cf3e07803-15396555-fa000-171637f0113813",
  _yapi_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjcxNiwiaWF0IjoxNTg3MzQ0Mjg0LCJleHAiOjE1ODc5NDkwODR9.mXDIFHQbX3SAM73Szc_FrSvYCZUlXCQrZH5qt8iKZHk',
  _yapi_uid: '716',
  generateApiName: (pdth, id) => `id${id}`,
  generateApiFileCode: (api) => {
    const arr = [
      `
      /* eslint-disable */
      /**
      * ${api.title}
      * ${api.markdown || ''}
      **/
      `,
      "import request from '../serve'",
      'type Serve<T, G> = (data?: T) => Promise<G>',
      api.requestInterface,
      api.responseInterface,
      `const http: Serve<${api.reqInterfaceName}, any> = (data?) =>  request({
        method: '${api.method}',
        url: '${api.path}',
        ${(() => {
          if (api.method.toLocaleLowerCase() === "get") {
            return "params: data";
          } else {
            return "data: data";
          }
        })()}
      }) `,
      `export default http`,
      `/* eslint-enable */`
      ,
    ]
    return arr.join(`
    `)
  }
}

export default config
