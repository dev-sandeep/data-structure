/**
 * implementation of Least Frequently Used cache
 */

 function cacheMain(){
     this.cache = {};
     this.size = 5;
 }

 cacheMain.prototype.set = function(value){
    /* check if the value exists in the array */
    var index, cacheKey = 0, valueIndex = -1;
   
    for (var key in this.cache){
        var dataInstance = this.cache[key];
        if(!cacheKey || (index = dataInstance.indexOf(value) != -1)){
            //found the result
            valueIndex = index;
            cacheKey = key;
        }
    }
   
    /* if the data is not existant */
    if(!valueIndex || valueIndex == -1){
        if(!this.cache[1]){
            this.cache[1] = [];
        }

        this.cache[1].unshift(value);
        if(this.cache[1].length > this.size){
            this.cache[1].pop();
        }
    }
 }

 cacheMain.prototype.getTotalSize = function(){
     
 }

 cacheMain.prototype.get = function(value){
     /* check if the data is existing in the cache */
     /* check if the value exists in the array */
    var index, cacheKey = 0, valueIndex = -1;
   
    for (var key in this.cache){
        var dataInstance = this.cache[key];
        if(!cacheKey || (dataInstance.indexOf(value) != -1)){
            //found the result
            valueIndex = dataInstance.indexOf(value);
            cacheKey = key;
        }
    }

    /* remove from the array */
    this.cache[cacheKey].splice(valueIndex,1);
    /* create a new key and insert the value */
    let nextCacheKey = parseInt(cacheKey)+1;
    if(!this.cache[nextCacheKey]){
        this.cache[nextCacheKey] = [];
    }   

    this.cache[nextCacheKey].unshift(value);
    console.log("nextCacheKey", nextCacheKey);
}

 cacheMain.prototype.shows = function(){
     console.log(this.cache);
 }

 var cache = new cacheMain();
 cache.set(1);
 cache.set(2);
 cache.set(3);
 cache.set(4);
 cache.set(5);
 cache.set(6);
 cache.shows();
 cache.get(4);
 cache.get(6);
 cache.get(6);
 cache.shows();
