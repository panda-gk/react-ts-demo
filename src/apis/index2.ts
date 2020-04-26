// import request from '../utils/request'
import request from '../serve'

import * as Type from './types'
type Request<T, G> = (params?: T) => Promise<G>
// 查询人员名称列表
export const apiMembersList: Request<Type.IFetchMembersReq, Type.IFetchMembersRes> = params => request.post('/businessMember/findMembers', params) as Promise<any>
/* 项目和模块管理 */
export const apiProjectList: Request<Type.IFetchProjectListReq,Type.IFetchProjectListRes> = params => request.post('/businessProject/pageProject', params) as Promise<any>
// 删除项目
export const apiDelProject: Request<Type.IFetchProjectReq, {}> = params => request.get('/businessProject/delProject', { params }) as Promise<any>
// 查询项目详情信息
export const apiProjectDetail: Request<Type.IFetchProjectReq, Type.IFetchProjectDetailRes> = params => request.get('/businessProject/findProjectDetail', { params }) as Promise<any>
// 查添加编辑项目
export const apiAddProject: Request<Type.IFetchAddProjectReq,Type.IFetchAddProjectRes> = params => request.post('/businessProject/addProject', params) as Promise<any>
// 项目模块管理列表
export const apiModuleList: Request<Type.IFetchModuleListReq,Type.IFetchModuleListRes> = params => request.post('/businessModule/pageModule', params) as Promise<any>
// 查添加编辑模块
export const apiAddModule: Request<Type.IFetchAddModuleReq, {}> = params => request.post('/businessModule/addModule', params) as Promise<any>
// 查询模块详情信息
export const apiModuleDetail: Request<Type.IFetchModuleReq, Type.IFetchModuleDetailRes> = params => request.get('/businessModule/findModuleDetail', {params}) as Promise<any>
// 删除模块
export const apiDelModule: Request<Type.IFetchModuleReq, {}> = params => request.get('/businessModule/delModule', {params}) as Promise<any>
/** 配置管理 */
// 查询报警配置列表
export const apiFindAlarmConfigs: Request<Type.IFetchFindAlarmConfigsReq, Type.IFetchFindAlarmConfigsRes> = params => request.post('/businessAlarmConfig/findAlarmConfigs', params) as Promise<any>
// 修改配置状态
export const apiUpdateAlarmConfigStatus: Request<Type.IFetchUpdateAlarmConfigStatusReq, {}> = params => request.post('/businessAlarmConfig/updateAlarmConfigStatus', params) as Promise<any>
// 查看报警配置通知人员列表
export const apiFindAlarmConfigLinkMembers: Request<Type.IFetchFindAlarmConfigLinkMembersReq, Type.IFetchFindAlarmConfigLinkMembersRes> = params => request.post('/businessAlarmConfig/findAlarmConfigLinkMembers', params) as Promise<any>
// 查询报警配置信息监控模型详情列表
export const apiFindAlarmExpressionDetails: Request<Type.IFetchFindAlarmExpressionDetailsReq, Type.IFetchFindAlarmExpressionDetailsRes> = params => request.post('/businessAlarmConfig/findAlarmExpressionDetails', params) as Promise<any>
// 添加或修改报警配置
export const apiAddAndUpdateAlarmConfig: Request<Type.IFentchAddAndUpdateAlarmConfig, {}> = params => request.post('/businessAlarmConfig/addAndUpdateAlarmConfig', params) as Promise<any>
// 删除报警配置
export const apiDelAlarmConfig: Request<Type.IFetchDelAlarmConfigReq, {}> = params => request.post('/businessAlarmConfig/delAlarmConfig', params) as Promise<any>
// 模板列表列表
export const apiTemplateList: Request<Type.IFetchTemplateListReq,Type.IFetchTemplateListRes> = params => request.post('/businessTemplate/findTemplates', params) as Promise<any>
// 查询报警配置详情
export const apiFindAlarmConfigDetail: Request<Type.IFentchFindAlarmConfigDetailReq,Type.IFentchFindAlarmConfigDetailRes> = params => request.post('/businessAlarmConfig/findAlarmConfigDetail', params) as Promise<any>
// 根据项目编号、模块编号查找模板列表
export const apiFindTemplatesByCondition: Request<Type.IFentchFindTemplatesByConditionReq,Type.IFetchFindTemplatesByConditionRes> = params => request.get('/businessTemplate/findTemplatesByCondition', {params}) as Promise<any>
// 模板详情信息
export const apiTemplateDetail: Request<Type.IFetchTemplateReq, Type.IFetchTemplateDetailRes> = params => request.post('/businessTemplate/findTemplateDetail', params) as Promise<any>
// 删除模板
export const apiDelTemplate: Request<Type.IFetchTemplateReq, {}> = params => request.get('/businessTemplate/delTemplate', {params}) as Promise<any>
// 查添加编辑模块
export const apiAddTemplate: Request<Type.IFetchAddTemplateReq, {}> = params => request.post('/businessTemplate/addAndUpdate', params) as Promise<any>
/* 人员管理模块 */
// 添加人员
export const apiAddBusinessMember: Request<Type.ISubmitAddBusinessMemberReq, {}> = params => request.post('/businessMember/addBusinessMember', params) as Promise<any>
// 删除人员
export const apiDelBusinessMember: Request<Type.ISubmitDelBusinessMemberReq, {}> = params => request.get('/businessMember/delBusinessMember', {params}) as Promise<any>
// 人员详情信息
export const apiBusinessMemberDetail: Request<Type.ISubmitDelBusinessMemberReq, Type.IFetchPageBusinessMemberDetailRes> = params => request.get('/businessMember/findMemberDetail', {params}) as Promise<any>
// 查询人员列表
export const apiPageBusinessMember: Request<Type.IFetchPageBusinessMemberReq, Type.IFetchPageBusinessMemberRes> = params => request.post('/businessMember/pageBusinessMember', params) as Promise<any>
// 查询模块名称列表
export const apiFindModuleNameList: Request<Type.IFetchFindModuleNameListReq, Type.IFetchFindModuleNameListRes> = params => request.post('/businessModule/findModuleNameList', params) as Promise<any>
// 查询项目名称列表
export const apiFindProjectNameList: Request<{}, Type.IFetchFindProjectNameListRes> = params => request.post('/businessProject/findProjectNameList', params) as Promise<any>
// 上报信息列表
export const apiMonitorList: Request<Type.IFetchMonitorLogReq,Type.IFetchMonitorLogRes> = params => request.post('/businessMonitorLog/pageMonitorLog', params) as Promise<any>
// 上报信息列表
export const apiNoticeList: Request<Type.IFetchNoticeReq,Type.IFetchNoticeRes> = params => request.post('/businessAlarmNoticeRecord/findAlarmNoticeRecords', params) as Promise<any>
/* 报警管理 */
// 报警列表
export const apiPageAlarmRecord: Request<Type.IFetchPageAlarmRecordReq, Type.IFetchPageAlarmRecordRes> = params => request.post('businessAlarmRecord/pageAlarmRecord', params) as Promise<any>
// 处理报警
export const apiHandleAlarmRecord: Request<Type.ISubmitHandleAlarmRecordReq, {}> = params => request.get('/businessAlarmRecord/handleAlarmRecord', {params}) as Promise<any>
// 查看报警信息对应的监控日志
export const apiPageAlarmRecordMonitorLog: Request<Type.IFetchPageAlarmRecordMonitorLogReq, Type.IFetchPageAlarmRecordMonitorLogRes> = params => request.post('businessAlarmRecord/pageAlarmRecordMonitorLog', params) as Promise<any>
/** 占位符管理 */