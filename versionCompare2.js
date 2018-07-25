function getNum(v) {
    let ary=v.split(/\D/);
    if (ary[ary.length-1]===""){ary.pop();}
    ary=ary.map(function (item,index) {
        return parseInt(item);
    });
    let num=null;
    for(let i=0;i<ary.length;i++){
        num+=ary[i]*Math.pow(10,ary.length-1-i);
    }
    return num
}
function getStr(v) {
    let str=v.match(/[a-zA-Z]/);
    return str[0];
}
function versionCompare(v1,v2) {
    if (typeof v1!=="string"||typeof v2!=="string") return "输入格式错误";
    let num1=getNum(v1),str1=getStr(v1),num2=getNum(v2),str2=getStr(v2);
    if (num1<num2){return "版本"+v2+"更新"}
    else if (num1>num2){return "版本"+v1+"更新"}
    else if (num1===num2){
        if (str1<str2){return "版本"+v2+"更新"}
        else if(str1>str2){return "版本"+v1+"更新"}
        else {return "版本相同"}
    }
}
let v1="1.2.3a",v2="1.2.3b";
console.log(versionCompare(v1, v2));




