/**
 * Created by Bane.Shi on 2/24/16.
 */
'use strict';

function Random(){
    if(!(this instanceof Random)){
        return new Random();
    }
}

Random.num = function(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

module.exports = Random;