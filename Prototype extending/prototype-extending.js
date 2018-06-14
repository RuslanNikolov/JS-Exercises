(function stringExtension() {
    let str = 'my string';
 
    String.prototype.ensureStart = function (str) {
        if(this.toString().startsWith(str)){
            return this.toString();
        }else{
            return str + this.toString();
        }
    };
 
    String.prototype.ensureEnd = function (str) {
        if(this.toString().endsWith(str)){
            return this.toString();
        }else{
            return this.toString() + str;
        }
    };
 
    String.prototype.isEmpty = function () {
         if(this.length.toString() == 0){
            return true;
        }else{
             return false;
         }
    };
 
    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            return this.toString().substr(0, n-3) + "...";
        }
    };
 
    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index != -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;
    };
 
})();