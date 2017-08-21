export const MODE = {
    TEST: "TEST",
    PRE: "PRE",
    ONLINE: "ONLINE"
}
export const currentMode = MODE.TEST;
let userCenter, loanDomain,assetsDomain;
if (currentMode === MODE.TEST) {
    // userCenter = 'http://120.26.167.26:6300';
    // loanDomain = 'http://120.55.189.241:7820';

    //国商惠众测试环境
    // userCenter = 'http://116.62.156.126:6300';
    // loanDomain = 'http://116.62.145.153:7820';

    //阿里云测试环境
    userCenter = 'http://120.26.167.26:6300';
    loanDomain = 'http://120.55.189.241:7820';
    assetsDomain = 'http://120.26.166.47:6330';
    
//生产环境
} else if (currentMode === MODE.PRE) {
    userCenter = 'https://www.lingboweidai.com/gs_cif-gate';
    loanDomain = 'https://www.lingboweidai.com/gs_graduate-loan-gate';
    assetsDomain = 'http://120.26.166.47:6330';
//正式线上环境
} else if (currentMode === MODE.ONLINE) {
    userCenter = 'https://www.lingboweidai.com/gs_cif-gate';
    loanDomain = 'https://www.lingboweidai.com/gs_graduate-loan-gate';
    assetsDomain = 'http://120.26.166.47:6330';
}

// 网络接口
export default {
    //=========================CIF个人中心服务==========================
    //检验账号是否注册
    API_IsExist: userCenter + '/pdl/cif-gate/api/v2/customers/exists',
    //获取短信验证码
    API_getVerifyMessage: userCenter + '/cif-gate/api/v2/customers/{mobilePhone}/smscode',
    //注册接口
    API_Register: userCenter + '/pdl/cif-gate/api/v2/customers',
    //登录
    API_Login: userCenter+ '/pdl/cif-gate/api/v2/customers',
    //登出
    API_logout: userCenter + '/pdl/cif-gate/api/v2/customers/me/logout',
    //修改密码
    API_RESET_PASSWORD:userCenter + '/pdl/cif-gate/api/v2/customers/me/password',
    //获取用户信息
    API_UserInfo: userCenter + '/pdl/cif-gate/api/v2/customers/me',
    //完善用户信息
    API_USERRINFO:userCenter + '/pdl/cif-gate/api/v2/customers/me/profile',
    //完善用户基本信息
    API_putUserBaseInfo: userCenter + '/pdl/cif-gate/api/v2/customers/me/profile/personal',
    //完善工作信息
    API_putWorkInfo:userCenter + '/pdl/cif-gate/api/v2/customers/me/profile/profession',
    //完善人际关系
    API_putRelation: userCenter + '/pdl/cif-gate/api/v2/customers/me/profile/relation',
    //用户身份证信息完善
    API_idCard: userCenter + '/cif-gate/api/v2/customers/{id}/idcard',
    //高级实名, 活体检测后上传
    API_LIVE_ID:userCenter + '/pdl/cif-gate/api/v2/customers/senior',
    //用户反馈
    API_FeedBack: userCenter + '/pdl/cif-gate/api/v2/customers/me/feedback',

    //更新用户设备ID
    API_Device: userCenter + '/pdl/cif-gate/api/v2/customers/me/device',

    //=========================product-manager-controller 配置相关服务==========================
    //产品配置信息
    API_productionInfo: loanDomain + '/bill-stage-gate/api/v1/products/info',
    //配置信息
    API_PROFILE: loanDomain + '/bill-stage-gate/api/v1/products/profiles',
    //协议预览
    API_AGREMENT_PREVIEW: loanDomain + '/bill-stage-gate/api/v1/products/preview',
    //认证配置信息查询接口
    API_AUTH_PROFILES: loanDomain +'/bill-stage-gate/api/v1/products/auth/profiles',
    //=========================Account Manager Controller 账户相关服务==========================
    //获取用户推送消息
    API_APP_MESSAGES:loanDomain + '/bill-stage-gate/api/v1/accounts/announcement/messages',
    //设置消息中心某消息已读
    API_SET_MESSAGE_READ: loanDomain + '/bill-stage-gate/api/v1/accounts/announcement/message/{msg_id}',
    //获取用户合同，借款等
    API_DOWNLOAD_CONTRACT: loanDomain + '/bill-stage-gate/api/v1/accounts/contract',
    //上传照片
    API_POST_File: loanDomain + '/bill-stage-gate/api/v1/accounts/photo-storage',
    //=========================limit-manager-controller 额度相关服务==========================
    //用户贷款信息
    API_LOAN_LIMIT : loanDomain + '/bill-stage-gate/api/v1/limits/amount/info',
    //用户额度申请
    API_APPLYLIMIT : loanDomain+ '/bill-stage-gate/api/v1/limits/application',
    //用户是否可以提额
    API_LIMIT_CHECK: loanDomain +'/bill-stage-gate/api/v1/limits/check/items',
    //额度申请结果查询
    API_APPLYRESULT: loanDomain + '/bill-stage-gate/api/v1/limits/application-result',
    //个人认证项信息
    API_POLL_AUTU: loanDomain + '/bill-stage-gate/api/v1/limits/items/all',
    //获取用户芝麻加密信息
    API_GET_PARAMS:loanDomain + '/bill-stage-gate/api/v1/limits/sesamescore-auth',
    //上传芝麻信息
    API_POST_ZHIMA:loanDomain + '/bill-stage-gate/api/v1/limits/sesamescore-result',
    //=========================bank-card-manager-controller 银行卡相关服务==========================
    //获取绑定的银行卡列表
    API_GET_CARDLIST:loanDomain + '/bill-stage-gate/api/v1/bankcards/info',
    //支持银行卡列表
    API_GET_SUPPORTBANKS:loanDomain + '/bill-stage-gate/api/v1/bankcards/debit/bank-limits',
    //预绑储蓄卡
    API_PREBIND_BANKCARD:loanDomain+'/bill-stage-gate/api/v1/bankcards/pre-bankcard',
    //绑储蓄卡POST/换绑储蓄卡PUT
    API_BIND_BANKCARD: loanDomain + '/bill-stage-gate/api/v1/bankcards',
    //【未使用】 换绑银行卡
    API_CHANGE_CARD : loanDomain + '/bill-stage-gate/api/v1/bankcards',
    //根据卡号获取基本信息
    API_GET_CARDBIN: loanDomain + '/bill-stage-gate/api/v1/bankcards/bankcard/{card_no}',
    //=========================bill-manager-controller 账单相关服务==========================
    //获取用户账单记录信息
    API_BILLS_INFO: loanDomain + '/bill-stage-gate/api/v1/bills/info',
    //获取当前费率信息
    API_BILLS_TAX: loanDomain + '/bill-stage-gate/api/v1/bills/tax/rate/info',
    //下月应还信息查询
    API_REPAY_PLAN:loanDomain + '/bill-stage-gate/api/v1/bills/next-month/repay-plan',
    //还款信息查询
    API_REPAY_INFO:loanDomain + '/bill-stage-gate/api/v1/bills/repay-info',
    //=========================loan-manager-controller 借款相关服务==========================
    //计算借款信息
    API_LOAN_INFO:loanDomain + '/bill-stage-gate/api/v1/bills/tax/rate/info',
    //发起借款
    API_APPLY_LOAN:loanDomain + '/bill-stage-gate/api/v1/loans/trade/loan',
    //借款详情
    API_LOAN_DETAIL:loanDomain + '/bill-stage-gate/api/v1/loans/{loan_id}/details',
    //最近一笔借款详情
    API_LOAN_DETAI_LATEST:loanDomain + '/bill-stage-gate/api/v1/loans/latest/details',
    //借款记录
    API_LOAN_RECODE:loanDomain+'/bill-stage-gate/api/v1/loans/records',
    //喜报查询
    API_LOAN_GOODNEWS:loanDomain+'/bill-stage-gate/api/v1/loans/good-news',
    // API_LOAN_ : loanDomain + '/bill-stage-gate/api/v1/loans/trade/accounts/{contract_no}/amount/last',
    //=========================repay-manager-controller 还款相关服务==========================
    //预还款
    API_REPAY_PRE: loanDomain + '/bill-stage-gate/api/v1/repays/order',
    //还款
    API_REPAY : loanDomain + '/bill-stage-gate/api/v1/repays/repayment',
    //还款记录查询
    API_REPAY_RECORD:loanDomain + '/bill-stage-gate/api/v1/repays/repay-record',
    //最近一笔还款详情
    API_REPAY_LATEST: loanDomain + '/bill-stage-gate/api/v1/repays/repay-record/latest',


    /**
     *资产服务
     */
    //=========================其他服务接口 service token 之后改为userToken==========================
    MXTaskStatus:assetsDomain+"/asset-manage/api/tasks/{taskId}",
    MXBankContact:assetsDomain + "/asset-manage/api/bank-contacts",
    MXUserOpiniona:assetsDomain + "/asset-manage/api/opinions",
    //=========================消息中心==========================
    MXMessage:assetsDomain + '/asset-manage/api/messages/me',

    MXSetMessageRead:assetsDomain + '/asset-manage/api/messages/me/read',

    MXSetBillReminder:assetsDomain + '/asset-manage/api/messages/me/bill-reminder/conf',
    MXSetOverdueReminder:assetsDomain + '/asset-manage/api/messages/me/overdue-reminder/conf',
    MXSetRepayReminder:assetsDomain + '/asset-manage/api/messages/me/repay-reminder/conf',

    MXGetBillReminder:assetsDomain + '/asset-manage/api/messages/me/bill-reminder/conf',
    MXGetOverdueReminder:assetsDomain + '/asset-manage/api/messages/me/overdue-reminder/conf',
    MXGetRepayReminder:assetsDomain + '/asset-manage/api/messages/me/repay-reminder/conf',
    //=========================支付服务接口==========================
    // MXRepaySamePerson:MX_PAY_DOMAIN + '/payment-service/api/payments/me/repay/same-person',
    // //serivce token
    // MXAssetBaofuPayBanks:MX_PAY_DOMAIN+'/payment-service/api/payments/pay-banks',
    // MXAssetSupportedChannel:MX_PAY_DOMAIN+'/payment-service/api/payments/repay/supported-methods',
    //=========================个人中心接口 新==========================
    MXURLLogin:assetsDomain+'/cif/v1/auth/login',
    MXURLOTP:assetsDomain+'/cif/v1/auth/otp',
    MXURLUserProfile:assetsDomain+'/cif/v1/users/me/profile',
    //=========================资产服务接口==========================
    MXAssetInfo:assetsDomain+'/asset-manage/api/assets/me/assets/{assetId}',
    MXAssetsList: assetsDomain + "/asset-manage/api/assets/me/list",
    MXRebindAssetsList: assetsDomain + "/asset-manage/api/assets/me/rebind",
    MXUnbindAssetsList: assetsDomain + "/asset-manage/api/assets/me/unbind-list",
    MXFundsCardBills:assetsDomain + '/asset-manage/api/bank-card/cards/{cardId}/bills',
    MXFundsBillDetail:assetsDomain + '/asset-manage/api/bank-card/bills/{billId}/items',
    MXFundsCardInstallment: assetsDomain + '/asset-manage/api/bank-card/cards/{cardId}/installments',
    MXAssetRepayRecords:assetsDomain + '/asset-manage/api/assets/me/repay-records',
    MXAssetHistoryDeposits:assetsDomain + '/asset-manage/api/assets/me/repay/history-deposits',
    //=========================其他模块==========================
    //信用卡办卡接口
    MX_H5_WEBVIEWURL: "https://api.51datakey.com/h5/creditcard/?showTitleBar=NO#/?",
    MX_H5_WEBVIEWURL_INDEX_REGEX:/https\:\/\/api\.51datakey\.com\/h5\/creditcard\/\?showTitleBar=NO\#\/\?/,

    //Demo展示页面V2
    MXAPPDemoResultV2:"https://api.51datakey.com/h5/resultV2/{taskType}/index.html?taskid={searchid}&token={token}",
    //=========================个人中心接口 旧==========================
    MXTenantTokenAuth: assetsDomain + "/user-center/api/v1/tenants/auth",
    MXRegistState: assetsDomain + "/user-center/api/v1/mobiles/{mobiles}/exist",
    MXUserRegist: assetsDomain + "/user-center/api/v1/mobiles/{mobiles}/register",
    MXSendSMS: assetsDomain + "/user-center/api/v1/mobiles/{mobiles}/send-sms",
    MXChangePassword: assetsDomain + "/user-center/api/v1/mobiles/{mobiles}/change-pass",
    MXUserLogin: assetsDomain + "/user-center/api/v1/users/login",
    MXUserProfile: assetsDomain + "/user-center/api/v1/users/me/profile",
    MXChangeMobile: assetsDomain + "/user-center/api/v1/users/me/change-mobile",
    MXSendEmail: assetsDomain + "/user-center/api/v1/users/me/send-email",
    MXDeviceInfo:assetsDomain + "/user-center/api/v1/users/devices",

    //=========================营销接口==========================
    API_QUERY_API_QUERY_MYINVITATION_INFO: 'http://120.26.167.26:6300/cif-gate/api/v2/marketing/accountBalanceInfo',// TODO 获取账户余额信息
    API_QUERY_MYINVITATION: 'http://120.26.167.26:7300/marketing/api/v2/rewardsRecord/{mobilePhone}', // TODO 获取账户返利记录
    API_QUERY_MARKETING_WITHDRAW_RECORD: 'http://120.26.166.47:5110/loan-gate/api/v2/marketing/withdrawRecord/{id}',// TODO 获取提现记录
    API_MARKETING_WITHDRAW: 'http://120.26.166.47:5110/loan-gate/api/v2/marketing/withdraw',// TODO 营销类账户提现接口


    //========================第三方SDK相关接口==========================
    //证件识别， 身份证
    API_GET_CARD_INFO:'https://api.faceid.com/faceid/v1/ocridcard',
    //人脸对比
    API_VERIFY_FACE:'https://api.megvii.com/faceid/v2/verify',

    //========================其他未使用接口==========================
    //【未使用】 解绑银行卡
    API_DELETE_CARD : loanDomain + '/api/v1/account/unbind/{agreementNo}',

    //【未使用】提升额度
    API_PromotionLimit : loanDomain + '/api/v1/promotion',
    //【未使用】获取三方认证明细
    getAuth:loanDomain + '/mxauth-apigate/api/v2/auth/items/{id}/detail',
    //【未使用】魔蝎SDK状态
    moxieTaskStatus:'https://api.51datakey.com/{gateway}/v1/tasks/{taskId}/status',
}

//银行logo
export const bank_logo_url = 'https://api.51datakey.com/h5/static/bank_icon/bank_icon_{bankMark}.png';

export const liveness_idnumber_verification = 'https://cloudapi.linkface.cn/identity/liveness_idnumber_verification';
