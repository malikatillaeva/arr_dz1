let arr = [];


do{
    var a = prompt('Vvedite kommandu').split(', ')
    if (a[0] =='add'){
        arr.push(a[1])
        console.log(arr);
    }
    else if( a[0] == 'del'){
        for(let i=0; i<arr.length; i++){
            if(arr[i]==a[1])
            arr.splice(i, 1)
        }
        console.log(arr);
    }
}while(a != "stop")

console.log(arr);