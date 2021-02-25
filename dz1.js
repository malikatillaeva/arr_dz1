let arr = [];


do{
    var a = prompt('Vvedite kommandu').split(', ')
    if (a[0] =='add'){
        arr.push(a[1])
        console.log(arr);
    }
    else if( a[0] == 'del'){
        arr.splice(a[1], 1)
        console.log(arr);
    }
}while(a != "stop")

console.log(arr);