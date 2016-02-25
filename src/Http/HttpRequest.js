/**
 * Created by Bane.Shi on 2016/2/23.
 */
'use strict';
let _ = require('lodash');
function HttpRequest(){
    if(!(this instanceof HttpRequest)){
        return new HttpRequest();
    }
}

HttpRequest.ip = function(req){
    let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress) ;
    if(ip){
        let ips = ip.split(',');
        return ips[0];
    }else {
        return ip;
    }
}

/**
 * 将query参数的key重新命名
 * @param query
 * @param fields
 * @returns {{}}
 */
HttpRequest.queryParamsRename = function (query,fields){
    let obj = {};
    if( _.isArray(fields)){
        for (let field of fields){
            let resObj = {};

            let key = field[0];

            if((new RegExp("\\[\\]")).test(field[1])){
                if(!_.isArray(query[field[1]]) || query[field[1]].length == 1 ){
                    key = key+"[]";
                }
            }

            if(query[field[1]]){
                resObj[key] = query[field[1]] ;
                Object.assign(obj,resObj);
            }else {
                if(field[2]){
                    resObj[key] = field[2] ;
                    Object.assign(obj,resObj);
                }
            }
        }
    }
    return obj;
}

module.exports = HttpRequest;