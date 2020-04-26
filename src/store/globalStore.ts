import { observable, action } from 'mobx'

class GlobalStore {

  /**
   * 菜单栏折叠
   *
   * @type {boolean}
   * @memberof GlobalStore
   */
  @observable
   name: string = '张任'

  @action
  updateName() {
    this.name = '张任33333'
  }

}

const globalStore =  new GlobalStore()

export type IGlobalStore = Readonly<typeof globalStore>

export default globalStore