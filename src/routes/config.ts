
interface IMenus {
  menus: any[];
}
// interface IObject {
//   path: string;
//   children?: any[]
//   component?: any
//   title: string
// }
const configs: IMenus = {
  menus: [
      {
        path: '/demo1',
        title: 'demo1',
        key: '1',
        children: [
          {
            path: '/demo1/test1',
            component: 'test1',
            key: '1-1',
            meta: {
              title: '测试1',
            },
          },
          {
            path: '/demo1/test2',
            component: 'test2',
            key: '1-2',
            meta: {
              title: '测试2',
            },
          },
        ]
      },
      {
        path: '/demo2',
        title: 'demo2',
        key: '2',
        children: [
          {
            path: '/demo2/test3',
            component: 'test3',
            key: '2-1',
            meta: {
              title: '测试3',
            },
          },
          {
            path: '/demo2/test4',
            component: 'test4',
            key: '2-2',
            meta: {
              title: '测试4',
            },
          },
        ]
      }
    ]
}

export default configs