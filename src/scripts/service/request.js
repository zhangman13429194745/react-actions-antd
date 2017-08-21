/**
 * Created by zhangmanman on 2017/7/31.
 */
import fetchHelper from "../utils/fetchHelper";
import api from "../constants/api";
import {
    orgCode,
    productCode,
} from '../constants/config';
/**
 * 获取产品信息
 */
export const getProductInfo = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await fetchHelper.get(
                api.API_productionInfo,
                {
                    'product_code': productCode,
                    'org_code': orgCode,
                }
            );
            if (result.code) {
                reject(result.msg || '未知错误')
            }
            resolve(result);
        } catch (error) {
            reject(error.msg);
        }
    })
}