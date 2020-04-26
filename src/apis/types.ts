export interface IFetchMembersRes {
  rows: Array<{ memberNo: string, name: string }>
}
export interface IFetchMembersReq {
  moduleNo?: string
  projectNo?: string
  memberType?: number
}
export interface IFetchProjectListReq {
  currentPage: number
  pageSize: number
  projectName: string
}
export interface IFetchProjectListRes {
  pages: number
  size: number // 	分页大小
  total: number
  records: IFetchProjectListResItem[]
}
export interface IFetchProjectListResItem {
  projectRemark: string
  projectOnlyKey: string
  key: string | number
  projectName: string
  alarmNum: number
  createdAt: string
  projectNo: string
  liableUser: string
  status: 0 | 1 | 2
  statusValue?: string
}
export interface IFetchProjectDetailRes {
  ddGroupRobots: string
  member: {
    memberNo: string
    name: string
  }
  projectName: string
  projectNo: string
  projectOnlyKey: string
  projectRemark: string
}
// 添加或编辑项目
export interface IFetchAddProjectReq {
  ddGroupRobots: string
  liableUserNo: string
  projectName: string
  projectOnlyKey: string
  projectRemark: string
  projectNo?: string
}
export interface IFetchAddProjectRes {
  data: Array<{ memberNo: string, name: string }>
}
export interface IFetchProjectReq {
  projectNo: string
}
export interface IFetchModuleListReq {
  currentPage: number
  pageSize: number
  moduleName: string
}
export interface IFetchModuleListRes {
  pages: number
  size: number // 	分页大小
  total: number
  records: IFetchModuleListResItem[]
}
export interface IFetchModuleListResItem {
  alarmNum: number	
  createdAt: string	
  liableUserName: string	
  moduleKey: string	
  moduleName: string	
  moduleNo: string	
  moduleRemark: string	
  status: 0 | 1 | 2
  statusValue?: string
  key: string | number
}
// 添加或编辑模块
export interface IFetchAddModuleReq {
  liableUserNo: string
  moduleKey: string
  moduleName: string
  moduleRemark: string
  ddGroupRobots: string
  moduleNo?: string
  projectNo?: string
}
export interface IFetchModuleReq {
  moduleNo: string
}
export interface IFetchModuleDetailRes {
  moduleKey: string
  moduleName: string
  moduleNo: string
  moduleRemark: string
  projectName: string
  projectNo: string
  member: {
    memberNo: string
    name: string
  }
}
export interface ISubmitFindProjectNameListItem {
  projectName: string
  projectNo: string
}
export interface ISubmitFindProjectNameList {
  rows: ISubmitFindProjectNameListItem[]
}
export interface ISubmitFindModuleNameListItem {
  moduleName: string
  moduleNo: string
}
export interface ISubmitFindModuleNameList {
  rows: ISubmitFindModuleNameListItem[]
}
/* 人员管理模块 */
export interface ISubmitAddBusinessMemberReq {
  ddUserId: string
  email: string
  mobile: string
  moduleNo: string
  name: string
  projectNo: string
}
export interface ISubmitDelBusinessMemberReq {
  memberNo: string
}
export interface IFetchPageBusinessMemberReq {
  currentPage: number
  pageSize?: number
  mobile?: string
  name?: string
}
export interface IFetchPageBusinessMemberDetailRes {
  type: string
  ddUserId: string	
  email: string	
  memberNo: string	
  memberType: 'BUSINES' | 'TECHNOLOGY'
  mobile: string	
  name: string
}
export interface IFetchPageBusinessMemberRes {
  pages: number
  size: number // 	分页大小
  total: number
  records: IFetchPageBusinessMemberResItem[]
}
export interface IFetchPageBusinessMemberResItem {
  createdAt: string
  ddUserId: string
  email: string
  id: number
  memberNo: string
  mobile: string
  moduleNum: number
  name: string
  projectNum: number
  status: 0 | 1 | 2
  memberType: 'BUSINES' | 'TECHNOLOGY'
}
/** 配置管理 */
export interface IFetchFindAlarmConfigsReq {
  alarmName: string
  currentPage: number
  moduleName: string
}
export interface IFetchUpdateAlarmConfigStatusReq {
  alarmConfigNo: string
  status: 1 | 2
}
export interface IFetchFindAlarmConfigsRes {
  pages: number
  records: IFetchFindAlarmConfigsResItem[]
  size: number
  total: number
  projectNum: number
}
export interface IFetchFindAlarmConfigsResItem {
  alarmConfigNo: string
  alarmMethodStr: string
  alarmName: string
  createdAt: string
  moduleName: string
  monitorModel: 'TRANSACTION' | 'EVENT' | 'METRIC'
  projectName: string
  status: 0 | 1 | 2
}
export interface IFetchFindAlarmConfigLinkMembersReq {
  alarmConfigNo: string
}
export interface IFetchFindAlarmConfigLinkMembersRes {
  rows: IFetchFindAlarmConfigLinkMembersResItem[]
}
export interface IFetchFindAlarmConfigLinkMembersResItem {
  createdAt: string
  mobile: string
  name: string
  status: number
}
export interface IFetchFindAlarmExpressionDetailsReq {
  alarmConfigNo: string
}
export interface IFetchFindAlarmExpressionDetailsRes {
  rows: IFetchFindAlarmExpressionDetailsResItem[]
}
export interface IFetchFindAlarmExpressionDetailsResItem {
  monitorModel: string
  monitorTypeStr: string
  threshold: number
  timeWindow: number
  timeout: number
}
export interface IFetchDelAlarmConfigReq {
  alarmConfigNo: string
}
export interface IFentchAddAndUpdateAlarmConfig {
  alarmConfigNo?: string
  alarmName: string
  technologyMembers: Array<{memberNo: string}>
  businessMembers: Array<{memberNo: string}>
  moduleNo: string
  monitorModel: 'TRANSACTION' | 'EVENT' | 'METRIC'
  monitorType: 1 | 2 | 3 | 4
  projectNo: string
  technologyTemplateAndConfigs: Array<{templateNo: string}>
  businessTemplateAndConfigs: Array<{templateNo: string}>
  threshold: number
  timeOut: number
  windowsTime: number
}
export interface IFentchFindAlarmConfigDetailReq {
  alarmConfigNo: string
}
export interface IFentchFindAlarmConfigDetailRes {
  alarmConfigNo: string
  alarmName: string
  technologyMembers: Array<{memberName: string, memberNo: string, memberType: string}>
  businessMembers: Array<{memberName: string, memberNo: string, memberType: string}>
  moduleName: string
  moduleNo: string
  monitorModel: string
  monitorType: 1 | 2 | 3 | 4
  projectName: string
  projectNo: string
  technologyTemplateAndConfigs: [{alarmNoticeMethod: 1 | 2 | 3, alarmNoticeMethodStr: string, templateName: string, templateNo: string}]
  businessTemplateAndConfigs: [{alarmNoticeMethod: 1 | 2 | 3, alarmNoticeMethodStr: string, templateName: string, templateNo: string}]
  threshold: number
  timeOut: number
  windowsTime: number
}
/* 模板模块 */
export interface IFetchTemplateListReq {
  currentPage: number
  pageSize: number
  moduleName: string
  templateName: string
}
export interface IFetchTemplateListRes {
  pages: number
  size: number // 	分页大小
  total: number
  records: IFetchTemplateListResItem[]
}
export interface IFetchTemplateListResItem {
  key: string | number
  createdAt: string
  moduleName: string
  moduleNo: string
  noticeMethod: number
  projectName: string
  projectNo: string
  status: 0 | 1 | 2
  templateContent: string
  templateName: string
  templateNo: 	string
  templateType: number
  total: number
  statusValue?: string
  templateTypeStr?: string
  noticeMethodStr?: string
}
export interface IFentchFindTemplatesByConditionReq {
  moduleNo: string
  projectNo: string
  templateMemberType?: 1 | 2
}
export interface IFetchFindTemplatesByConditionResItem {
  templateName: string
  templateNo: string
}
export interface IFetchFindTemplatesByConditionRes {
  rows: IFetchFindTemplatesByConditionResItem[]
}
export interface IFetchTemplateDetailRes {
  type: string
  moduleName: string
  moduleNo: string
  noticeMethod: 1 | 2 | 3
  projectName: string
  projectNo: string
  templateContent: string
  templateName: string
  templateNo: string
  templateType: 1 | 2 | 3
  noticeMethodStr: string
  templateTypeStr: string
  templateMemberType: 'BUSINESS' | 'TECHNOLOGY'
}
export interface IFetchTemplateReq {
  templateNo: string
}
export interface IFetchAddTemplateReq {
  moduleNo: string
  noticeMethod: 1 | 2 | 3
  projectNo: string
  templateContent: string
  templateName: string
  templateNo: string
  templateType: 1 | 2 | 3
}
export interface IFetchFindModuleNameListReq {
  projectNo: string
}
export interface IFetchFindModuleNameListRes {
  rows: Array<{
    moduleName: string
    moduleNo: string
  }>
}
export interface IFetchFindProjectNameListRes {
  rows: Array<{
    projectName: string
    projectNo: string
  }>
}
/* 报警管理 */
export interface IFetchPageAlarmRecordReq {
  alarmRecordNo:string
  currentPage: number
  moduleNo: string
  pageSize: number
}
export interface IFetchPageAlarmRecordRes {
  pages: number
  total: number
  records: IFetchPageAlarmRecordResItem[]
}
export interface IFetchPageAlarmRecordResItem {
  alarmRecordNo: string
  createdAt: string
  handleTime: string
  moduleName: string
  projectName: string
  status: 1 | 2
}
export interface ISubmitHandleAlarmRecordReq {
  alarmRecordNo: string
}
export interface IFetchPageAlarmRecordMonitorLogReq {
  alarmRecordNo: string
}
export interface IFetchPageAlarmRecordMonitorLogResItem {
  exceptionMsg: string
  executionTime: string
  firstClsKey: string
  firstClsValue: string
  monitorModel: 'TRANSACTION' | 'EVENT' | 'METRIC'
  occurrenceTime: string
  processId: number
  threadId: number
  rootMessageId: string
}
export interface IFetchPageAlarmRecordMonitorLogRes {
  rows: IFetchPageAlarmRecordMonitorLogResItem[]
  total: number
}
/* 上报信息页面 */
export interface IFetchMonitorLogReq {
  currentPage: number	
  ip: string	
  moduleName: string	
  pageSize?: number	
  projectName: string
  occurrenceEndTime: string
  occurrenceBeginTime: string
  firstClsKey: string
  firstClsValue: string
  processId: string
}
export interface IFetchMonitorLogRes {
  records: IFetchMonitorLogResItem[]
  total: number
}
export interface IFetchMonitorLogResItem {
  key: string | number
  id: string | number
  exceptionMsg: string	
  executionTime: string
  firstClsKey: string
  firstClsValue: string
  ip: string	
  moduleName: string	
  monitorModel: string	
  occurrenceTime: string	
  processId: number	
  projectName: string
  threadId: string
}
export interface IFetchNoticeReq {
  currentPage: number	
  memberName: string	
  moduleName: string	
  pageSize?: number	
}
export interface IFetchNoticeRes {
  records: IFetchNoticeResItem[]
  total: number
}
export interface IFetchNoticeResItem {
  key: string | number
  content: 	string	
  createdAt: 	string	
  id: number	
  memberName: string	
  moduleName: string	
  noticeMethod: 1 | 2 | 3
  noticeMethodStr: string
  noticeType: 1 | 2 | 3
  noticeTypeStr: string
  projectName: string	
  templateName: string
}
// 占位管理
export interface IFentchPageBusinessPlaceHolderReq {
  projectName: string
  currentPage: number
  pageSize?: number	
}
export interface IFentchPageBusinessPlaceHolderRes {
  total: number
  records: IFentchPageBusinessPlaceHolderItemRes[]
}
export interface IFentchPageBusinessPlaceHolderItemRes {
  key: string | number
  createdAt:	string
  id:	number
  placeHolder:	string
  placeHolderKey: string
  placeHolderRemark:	string
  projectName:	string
  projectNo:	string
  status:	string
  updatedAt:	string
}
export interface IFentchDelBusinessPlaceHolderReq {
  id: number
}
export interface IBusinessPlaceHolderDetailsReq extends IFentchDelBusinessPlaceHolderReq {
  type: 'add' | 'edit'
}
export interface IFentchGetBusinessPlaceHolderConfigListReq {
  projectNo: string
}
export interface IFentchGetBusinessPlaceHolderConfigListResItem {
  createdAt:	string
  id:	number
  placeHolder:	string
  placeHolderRemark:	string
  projectName:	string
  projectNo:	string
  placeHolderKey: string
  status:	'NORMAL' | 'FORBIDDEN'
  updatedAt:	string
}
export interface IFentchGetBusinessPlaceHolderConfigListRes{
  rows: IFentchGetBusinessPlaceHolderConfigListResItem[]
}
export interface IFentchUpdateBusinessPlaceHolderConfigReq {
  id: number
  placeHolder:	string	
  placeHolderRemark:	string
  placeHolderKey: string
  projectName:	string	
  projectNo: string
  status:	'NORMAL' | 'FORBIDDEN'
}
export interface IFentchAddBusinessPlaceHolderConfigReq {
  placeHolder:	string	
  placeHolderRemark:	string
  placeHolderKey: string
  projectName:	string	
  projectNo: string
}
export interface IFentchDetailBusinessPlaceHolderConfigRes {
  createdAt:	string
  id:	number
  placeHolder:	string
  placeHolderKey: string
  placeHolderRemark:	string
  projectName:	string
  projectNo:	string
  status:	'NORMAL' | 'FORBIDDEN'
  updatedAt:	string
}