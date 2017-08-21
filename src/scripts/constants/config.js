import {currentMode, MODE} from './api';

export const CountTime = 60;

//信邦
export const channel = 'APP';
export const orgCode = '123456';
export const productCode = '123456';
//魔蝎SDK
const moxie = {
    [MODE.TEST]: 'e1e876ffad734ab3b5c9b15dcb96f775',
    [MODE.PRE]: 'f83ab1078a8e47b791337a95c280547c',
    [MODE.ONLINE]: '5ed27888aaca4b73881cf1150c4fa8ca',
}

const token = {
    [MODE.TEST]:'4bbbabcc92204c50a8267c8a7d24c203',
    [MODE.PRE]:'d5a177542ded467fa6af2e848859ede5',
    [MODE.ONLINE]:'76b1386fdf2b4a7599ca627fff9b3d95',
}
export const moxieApiKey = moxie[currentMode];
export const moxieToken = token[currentMode];
export const subChannel = 'APP';

//linkface
export const linkFaceApiId = '8e128948b3644e57bb4fc26246e248c9';
export const linkFaceApiSecret = 'b0a01d82a5f34c88991371353c7cf6c1';

export const zhimaAppId = '1001561';

export const CREDIT_STATUS = {
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
    APPROVE: 'APPROVE',
    MAUNUAL_APPROVE: 'MAUNUAL_APPROVE'
};

export const LOAN_STATUS = {
    'APPROVE': 'APPROVE',
    'APPROVE_SUCCESS':'APPROVE_SUCCESS',
    'APPROVE_FAIL': 'APPROVE_FAIL',//'审核失败'
    'DISABLED':'DISABLED', //'已失效'
    'ACCEPT':'ACCEPT',// '提现受理中';
    'ACCEPT_SUCCESS':'ACCEPT_SUCCESS',// '提现已受理'
    'ACCEPTED_FAIL': 'ACCEPTED_FAIL',// '提现受理失败'
    'WITHDRAW_SUCCESS': 'WITHDRAW_SUCCESS',// '提现成功'
    'WITHDRAW_FAIL': 'WITHDRAW_FAIL',//'提现失败'
    "CANCEL":'CANCEL',
    'FINISH': 'FINISH',//'完成'
}

export const FINISHED_LOAN_STATUS = [
    'DISABLED',
    'APPROVE_FAIL',
    'ACCEPTED_FAIL',
    'WITHDRAW_FAIL',
    'WITHDRAW_SUCCESS',
    'FINISH',
]

//还款方式
export const REPAYMENT_METHOD = [
    {
        description: '等额本息',
        key: 'AVERAGE_CAPITAL_PLUS_INTEREST'
    }, {
        description: '等额本金',
        key: 'AVERAGE_CAPITAL'
    }

]

//借款中的状态
export const LOAN_DOING_STATUS = [
    'APPROVE', 'MAUNUAL_APPROVE', 'ACCEPT', 'ACCEPT_SUCCESS',
]

//结束轮询的授信审核状态
export const FINISHED_CREDIT_STATUS = [
    'SUCCESS', 'FAIL', 'MAUNUAL_APPROVE'
]

export const AuthenticationStatus = {
    'FINISH': {//未认证
        code: null, title: '未认证'
    },
    'Doing': {
        code: 1, title: '认证中'
    },
};

//银行卡颜色
export const bankColor = {
    CMB: 'red',
    CGB: 'red',
    CEB: 'yellow',
    HXB: 'red',
    CCB: 'blue',
    CMBC: 'blue',
    ABC: 'green',
    SPD: 'blue',
    CIB: 'blue',
    BOC: 'red',
    CITIC: 'red',
    ICBC: 'red',
    COMM: 'blue',
    PSBC: 'green',
    PINGAN: 'yellow',
    NINGBO: 'yellow',
    BEIJING: 'red',
    BEA: 'red',
    HEBEI: 'blue',
    DALIAN: 'red',
    HUISHANG: 'red',
    WENZHOU: 'yellow',
    CQNS: 'red',
    CHONGQING: 'red',
    GUANGZHOU: 'red',
    LANZHOU: 'blue',
    CBHB: 'red',
    YINZHOU: 'green',
    SHANGHAI: 'blue',
    NINGXIA: 'red',
    CHANGSHA: 'red',
    JSNX: 'red',
    FJNX: 'green',
    CDNS: 'green',
    FUDIAN: 'red',
    HANGZHOU: 'blue',
    JIANGSU: 'blue',
    YDNS: 'green',
    CITI: 'blue',
    BSB: 'red',
    TAIZHOU: 'blue',
    CRBC: 'yellow',
    JILIN: 'red',
    JINZHOU: 'red',
    SHANGRAO: 'red',
    LONGJIANG: 'blue',
    QINGHAI: 'blue',
    HANKOU: 'blue',
    GZNS: 'yellow',
    BJNS: 'red',
    CHENGDU: 'red',
    ZJNX: 'blue',
    SCB: 'green',
    BBW: 'blue',
    URCB: 'blue',
    HARBIN: 'blue',
    JIUJIANG: 'red',
    QILU: 'blue',
    TIANJIN: 'blue',
    NANJING: 'red',
    ZJTL: 'yellow',
    SHNS: 'blue',
    QINGDAO: 'red',
    KUNLUN: 'red',
    JINING: 'blue',
    GXNX: 'green',
    JIANGXI: 'blue',
    JNNS: 'red',
    NCB: 'red',
    CZB: 'red',
    SPDB: 'blue',
    BCOM: 'blue',
}

export const DOING_LENDDING = [
    'APPROVE', 'APPROVE_SUCCESS', 'ACCEPT', 'ACCEPT_SUCCESS',
];

const limitStep1 = {
    'MAUNUAL_APPROVE': '申请',
    'APPROVE': '申请',
    'SUCCESS': '申请',
    'FAIL': '申请完成'
};
const limitStep2 = {
    'MAUNUAL_APPROVE': '人工信审中',
    'APPROVE': '审核中',
    'SUCCESS': '系统审核中',
    'FAIL': '系统审核中'
};
const limitStep3 = {
    'MAUNUAL_APPROVE': '审核成功',
    'APPROVE': '审核成功',
    'SUCCESS': '唤醒额度',
    'FAIL': '提额失败'
};

export const limitStep = [
    {default: '开始审核', step: limitStep1, date: 'apply_time'},
    {default: '提现已受理', step: limitStep2, date: 'approve_time'},
    {default: '完成', step: limitStep3, date: 'manualTime'},
]

export const limitStatusMap = {
    'MAUNUAL_APPROVE': {
        reach: 2,
        status: 'doing',
        locaton: 0,
    }, 'APPROVE': {
        reach: 2,
        status: 'doing',
        locaton: 0,
    }, 'SUCCESS': {
        reach: 3,
        status: 'success',
        locaton: 0,
    }, 'FAIL': {
        reach: 2,
        status: 'fail',
        locaton: 0,
    }
}

//借款状态对应 进度查询 交易记录 借款进度详情 三个不同页面的文案
export const mapLoanStatus = {
    'APPROVE': {
        key: 'APPROVE',
        loanStatusL: '借款中',
        transactionRecord: '借款中',//借款记录显示状态
        transactionCode: 0,
        loanStatus: '申请完成',
        detailDescription: '您已成功提交借款申请',
    },//'审核中
    'APPROVE_SUCCESS': {
        key: 'APPROVE_SUCCESS',
        loanStatusL: '借款中',
        transactionRecord: '借款中',
        transactionCode: 0,
        loanStatus: '审核成功',
        detailDescription: '您的借款申请已通过审核',
    }, //'审核成功';
    'APPROVE_FAIL': {
        key: 'APPROVE_FAIL',
        loanStatusL: '借款失败',
        transactionRecord: '借款失败',
        transactionCode: 2,
        loanStatus: '审核失败',
        detailDescription: '很遗憾，您的借款申请没有通过审核',
    }, //'审核失败'
    'DISABLED': {
        key: 'DISABLED',
        loanStatusL: '借款失败',
        transactionRecord: '借款失败',
        transactionCode: 2,
        loanStatus: '到账失败',
        detailDescription: '您的借款到账失败，请稍后再试',
    }, //'已失效'
    'ACCEPT': {
        key: 'ACCEPT',
        loanStatusL: '借款中',
        transactionRecord: '借款中',
        transactionCode: 0,
        loanStatus: '审核成功',
        detailDescription: '您的借款申请已通过审核',
    },// '提现受理中';
    'ACCEPT_SUCCESS': {
        key: 'ACCEPT_SUCCESS',
        loanStatusL: '借款中',
        transactionRecord: '借款中',
        transactionCode: 0,
        loanStatus: '审核成功',
        detailDescription: '您的借款申请已通过审核',
    },// '提现已受理'
    // 'ACCEPTED_FAIL':{
    //     key:'ACCEPTED_FAIL',
    //     loanStatusL:'借款失败',
    //     transactionRecord:'借款失败',
    //     transactionCode:2,
    //     loanStatus:'到账失败',
    //     detailDescription:'您的借款到账失败，请稍后再试',
    // },// '提现受理失败'
    'WITHDRAW_SUCCESS': {
        key: 'WITHDRAW_SUCCESS',
        loanStatusL: '借款成功',
        transactionRecord: '使用中',
        transactionCode: 1,
        loanStatus: '/',
        detailDescription: '/',
    },// '提现成功'
    'WITHDRAW_FAIL': {
        key: 'WITHDRAW_FAIL',
        loanStatusL: '借款失败',
        transactionRecord: '借款失败',
        transactionCode: 2,
        loanStatus: '到账失败',
        detailDescription: '您的借款到账失败，请稍后再试',
    }, //'提现失败'
    "CANCEL": {
        key: 'CANCEL',
        loanStatusL: '取消',
        transactionRecord: '取消',
        transactionCode: 2,
        loanStatus: '到账失败',
        detailDescription: '您的借款已取消',
    },
    'FINISH': {
        key: 'FINISH',
        loanStatusL: '已结清',
        transactionRecord: '已结清',
        transactionCode: 3,
        loanStatus: '/',
        detailDescription: '/',
    } //'完成'
}


export const REPAY_METHOD_MAP = {
    FIXED_PAYMENT_MORTGAGE: '等额本息',
}

//借款审核状态
export const loanStatusMap = {
    'DISABLED': {
        reach: 2,
        status: 'fail',
        locaton: 0,
    }, 'APPROVE': {
        reach: 2,
        status: 'doing',
        locaton: 0,
    }, 'APPROVE_SUCCESS': {
        reach: 2,
        status: 'doing',
        locaton: 0,
    }, 'APPROVE_FAIL': {
        reach: 2,
        status: 'fail',
        locaton: 0,
    }, 'MAUNUAL_APPROVE': {
        reach: 2,
        status: 'doing',
        locaton: 0,
    }, 'ACCEPT': {
        reach: 2,
        status: 'doing',
        locaton: 0,
    }, 'ACCEPT_SUCCESS': {
        reach: 2,
        status: 'doing',
        locaton: 0,
    }, 'ACCEPTED_FAIL': {
        reach: 2,
        status: 'fail',
        locaton: 0,
    }, 'WITHDRAW_SUCCESS': {
        reach: 2,
        status: 'success',
        locaton: 0,
    }, 'WITHDRAW_FAIL': {
        reach: 2,
        status: 'fail',
        locaton: 0,
    }, 'FINISH': {
        reach: 2,
        status: 'success',
        locaton: 0,
    }
}

//借款审核步骤
const loanStep1 = {
    'DISABLED': '申请完成',

    'APPROVE': '申请完成',
    'APPROVE_FAIL': '申请完成',
    'APPROVE_SUCCESS': '申请完成',
    'MAUNUAL_APPROVE': '申请完成',

    'ACCEPT': '申请完成',

    'ACCEPT_SUCCESS': '申请完成',
    'ACCEPTED_FAIL': '申请完成',
    'WITHDRAW_SUCCESS': '申请完成',
    'WITHDRAW_FAIL': '申请完成',

    'FINISH': '申请完成',
};

const loanStep2 = {
    'DISABLED': '审核成功',

    'APPROVE': '系统审核',
    'APPROVE_FAIL': '审核失败',
    'APPROVE_SUCCESS': '审核成功',
    'MAUNUAL_APPROVE': '系统审核',

    'ACCEPT': '系统审核',
    'ACCEPTED_FAIL': '审核失败',
    'ACCEPT_SUCCESS': '审核中',
    'WITHDRAW_FAIL': '到账失败',
    'WITHDRAW_SUCCESS': '到账成功',

    'FINISH': '提现成功',
};

const loanStep3 = {
    'DISABLED': '到账成功',
    'APPROVE': '到账成功',
    'APPROVE_FAIL': '到账成功',
    'APPROVE_SUCCESS': '到账成功',
    'MAUNUAL_APPROVE': '到账成功',

    'ACCEPT': '到账成功',
    'ACCEPTED_FAIL': '到账成功',
    'ACCEPT_SUCCESS': '系统放款',
    'WITHDRAW_FAIL': '到账失败',
    'WITHDRAW_SUCCESS': '到账成功',

    'FINISH': '已结清',
};

export const loanStep = [
    loanStep1, loanStep2
]

export const FINISHED_REPAY_STATUS = [
    'FAIL',
    'SUCCESS'
]

export const STAGE_STATUS_MAP = {
    OPEN: '待还',
    PAYING: '还款中',
    CLOSE: '已还',
};

export const STAGE_STATUS = [
    'OPEN', 'REPAYING', 'CLOSE',
];