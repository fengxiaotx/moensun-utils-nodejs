/**
 * Created by Bane.Shi on 2016/2/23.
 */
'use strict';
function HttpRequest(){
    if(!(this instanceof HttpRequest)){
        return new HttpRequest();
    }
}

HttpRequest.prototype.ip = function(req){
    return (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress) ;
}

module.exports = HttpRequest;