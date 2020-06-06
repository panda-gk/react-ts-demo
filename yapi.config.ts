

const config = {
  target: 'ts',
  serverUrl: 'http://yapi.mockuai.com',
  outputFilePath: 'src/api',
  projectId: '1434',
  UM_distinctid: "171637f0112366-06894cf3e07803-15396555-fa000-171637f0113813",
  _yapi_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjcxNiwiaWF0IjoxNTg4NzI1NjQzLCJleHAiOjE1ODkzMzA0NDN9.KRjRl6puItw_ABWokgXkCdtlYwjd5KsF0NPg97ZwSoA',
  _yapi_uid: '716',
  generateApiName: (pdth, id) => `id${id}`,
  generateApiFileCode: (api) => {
    const arr = [
      `
      /**
      * ${api.title}
      * ${api.markdown || ''}
      **/
      `,
      "import request from '../serve'",
      'type Serve<T, G> = (data?: T) => Promise<G>',
      api.requestInterface,
      api.responseInterface,
      `
      const http: Serve<
        ${api.reqInterfaceName},
        ${api.resInterfaceName}['data']
      > = (data?) => request({
        method: '${api.method}',
        url: '${api.path}',
        data: ${(() => {
          if (api.method.toLocaleLowerCase() === 'get') {
            return '{params: data}'
          } else {
            return 'data'
          }
        })()}
      }) as Promise<any> 
      export default http;

      `,
    ]
    return arr.join(`
    `)
  }
}

export default config
