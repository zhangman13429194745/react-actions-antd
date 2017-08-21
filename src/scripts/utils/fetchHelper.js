export default class fetchHelper {

    static logRequest(method, url, headers, params) {
        console.log({
            [method + '-REQUEST']: url,
        }, headers ? JSON.stringify(headers) : '', params ? JSON.stringify(params) : '');
    }

    static logSuccess(method, url, data) {
        console.log({
            [method + '-SUCCESS']: url,
        }, data);
    }

    static logFailed(method, url, error) {
        console.error({
            [method + '-FAIL']: url,
        }, error);
    }

    static async download(url, headers) {
        return new Promise(async (resolve, reject) => {
            if (headers["Accept"] === undefined) {
                headers["Accept"] = "application/json";
            }
            if (headers["Content-Type"] === undefined) {
                headers["Content-Type"] = "application/json";
            }
            this.logRequest('DOWNLOAD', url, headers);
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg: "请求超时"})
            }, 15000);
            fetch(url, {
                method: 'GET',
                headers: headers,
            })
                .then(response => {
                    if (response.status === 401) {
                        global.doLogout();
                        reject({msg: '您的账号在其他设备中登录，如非本人操作，请您重新登录', code: 401});
                        // reject(response.text);
                    } else {
                        this.logSuccess('DOWNLOAD', url, response);
                        // return response.blob();
                        return response.text()
                    }
                })
                .then(blob => {
                    this.logSuccess('DOWNLOAD', url, blob);
                    resolve(blob);
                })
                .catch(error => {
                    this.logFailed('DOWNLOAD', url, error);
                    reject({msg: "网络请求失败", error});
                });
        });
    }

    static async get(url, headers) {
        return new Promise(async (resolve, reject) => {
            if (headers["Accept"] === undefined) {
                headers["Accept"] = "application/json";
            }
            if (headers["Content-Type"] === undefined) {
                headers["Content-Type"] = "application/json";
            }
            this.logRequest('GET', url, headers);
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg: "请求超时"})
            }, 15000);
            fetch(url, {
                method: 'GET',
                headers: headers,

            })
                .then(response => response.json())
                .then(jsonData => {
                    this.logSuccess('GET', url, jsonData);
                    if (jsonData.code === '401') {
                        //不是请求的登出接口报错
                        global.doLogout();
                        reject(jsonData);
                    }
                    resolve(jsonData);
                })
                .catch(error => {
                    this.logFailed('GET', url, error);
                    reject({msg: "网络请求失败", error});
                });
        });
    }

    static async post(url, headers, params) {
        return new Promise(async (resolve, reject) => {
            if (headers["Accept"] === undefined) {
                // headers["Accept"] = "application/json";
                headers["Accept"] = "*/*";
            }
            if (headers["Content-Type"] === undefined) {
                headers["Content-Type"] = "application/json";
            }
            this.logRequest('POST', url, headers, params);
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg: "请求超时"})
            }, 15000);
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            })
                .then(response => response.json())
                .then(jsonData => {
                    this.logSuccess('POST', url, jsonData);
                    if (jsonData.code === '401') {
                        //不是请求的登出接口报错
                        global.doLogout();
                        reject(jsonData);
                    }
                    resolve(jsonData);
                })
                .catch(error => {
                    this.logFailed('POST', url, error);
                    reject({msg: "网络请求失败", error});
                });
        });
    }

    static async put(url, headers, params) {
        return new Promise(async (resolve, reject) => {
            if (headers["Accept"] === undefined) {
                headers["Accept"] = "application/json";
            }
            if (headers["Content-Type"] === undefined) {
                headers["Content-Type"] = "application/json";
            }
            this.logRequest('PUT', url, headers, params);
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg: "请求超时"})
            }, 15000);
            fetch(url, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(params)
            })
                .then(response => response.json())
                .then(jsonData => {
                    this.logSuccess('PUT', url, jsonData);
                    if (jsonData.code === '401') {
                        //不是请求的登出接口报错
                        if (!url.includes('logout')) {
                            global.doLogout();
                            reject(jsonData);
                        }
                    }
                    resolve(jsonData);
                })
                .catch(error => {
                    this.logFailed('PUT', url, error);
                    reject({msg: "网络请求失败", error});
                });
        });
    }

    static async delete(url, headers, params) {
        return new Promise(async (resolve, reject) => {
            if (headers["Accept"] === undefined) {
                headers["Accept"] = "application/json";
            }
            if (headers["Content-Type"] === undefined) {
                headers["Content-Type"] = "application/json";
            }
            this.logRequest('DELETE', url, headers, params);
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg: "删除请求超时"})
            }, 15000);
            fetch(url, {
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify(params)
            })
                .then(response => response.json())
                .then(jsonData => {
                    this.logSuccess('DELETE', url, jsonData);
                    if (jsonData.code === '401') {
                        global.doLogout();
                        reject(jsonData);
                    }
                    resolve(jsonData);
                })
                .catch(error => {
                    this.logFailed('DELETE', url, error);
                    reject({msg: "网络请求失败", error});
                });
        });
    }

    static async putFile(url, headers, params) {
        return new Promise(async (resolve, reject) => {
            headers["Content-Type"] = "multipart/form-data";
            console.log("postFile url:" + url);
            console.log("postFile headers:" + JSON.stringify(headers));
            console.log("postFile params:" + JSON.stringify(params));
            //默认限定15秒超时
            const timeoutId = setTimeout(() => {
                reject({msg: "文件上传超时"})
            }, 15000);
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: params,
            })
                .then(response => response.json())
                .then(jsonData => {
                    console.log("postFile request succ");
                    console.log(jsonData);
                    if (jsonData.code === '401') {
                        global.doLogout();
                        reject(jsonData);
                    }
                    resolve(jsonData);
                })
                .catch(error => {
                    console.log("postFile request fail: " + error);
                    reject({msg: "网络请求失败", error});
                });
        })
    }
}