/**
 * implementation of LRU
 */

 function lru(){
     this.data = [];
     this.size = 5;
 }

 lru.prototype.set = function(val){
    if(this.data.length == 5){
        //delete 
        this.data.splice(0,1);
    }
    this.data.push(val);
 }

 lru.prototype.show = function(){
     console.log(this.data);
 }

 let l1 = new lru();
 l1.set(1);
 l1.set(2);
 l1.set(3);
 l1.set(4);
 l1.set(5);
 l1.show();
 l1.set(6);
 l1.show();
