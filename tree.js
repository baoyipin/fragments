let arr=[
    {id:1,pid:null,children:[2,3]},
    {id:2,pid:1,children:[4,5]},
    {id:3,pid:1,children:[6,7]},
    {id:4,pid:2,children:[]},
    {id:5,pid:2,children:[]},
    {id:6,pid:3,children:[]},
    {id:7,pid:3,children:[8,9]},
    {id:8,pid:7,children:[]},
    {id:9,pid:7,children:[]}
    ];
function tree(arr) {
    let obj={},pidArr=[];
    arr.forEach(function (item,index) {
        if(item.pid===null){obj=item};
        pidArr.push(item.pid);
        item.children=[];
    });
   pidArr.forEach(function (pid,i) {
       arr.forEach(function (item,index) {
           if (pid===item.id){arr[index].children.push(arr[i])}
       })
   })
    return obj;
}

console.log(tree(arr));