

export const CACHE_TYPE = {
    //app
    DARK_MODE: 'DARK_MODE',
    IS_LOGIN:"IS_LOGIN",
    //user
    MOBILE_PHONE:'MOBILE_PHONE',
};

const PERSISTENCE_CACHE_TYPE = {
    CACHE_FRIST_USING:'CACHE_FRIST_USING',
}



/**
 * =======================app ==========================
 */
export const setTest = (value) => {
    localStorage.setItem(CACHE_TYPE.DARK_MODE, value)
};
export const getTest = async () => {
    return localStorage.getItem(CACHE_TYPE.DARK_MODE)
};
export const setIsLogin = (value) => {
    localStorage.setItem(CACHE_TYPE.IS_LOGIN, value)
};
export const getIsLogin = () => {
    return localStorage.getItem(CACHE_TYPE.IS_LOGIN)
};
/**
 * =======================user ==========================
 */
export const setMoblilePhone = (value) => {
    localStorage.setItem(CACHE_TYPE.MOBILE_PHONE, value)
};
export const getMoblilePhone = () => {
    return localStorage.getItem(CACHE_TYPE.MOBILE_PHONE)
};

