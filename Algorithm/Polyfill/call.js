function sample(){
    console.log("my name is "+this.name);
}

// sample.call({
//     name: 'sandeep'
// });

Function.prototype.myCall = function(context){
    var fn = this;
    fn.prototype.name = 'sandeep';
    fn();
}

sample.myCall({
    name: 'sandeep'
});