export interface IFetchMembersRes {
  rows: Array<{ memberNo: string, name: string }>
}
export interface IFetchMembersReq {
  moduleNo?: string
  projectNo?: string
  memberType?: number
}
export interface IUserHomeInfoRes {
  waitPayNum: number;
  waitSendNum: number;
  waitReceiveNum: number;
  name: string;
  image: string;
  waitCheckNum: number;
}