let num=prompt("son kiriting");
let last=0;
let t=true;

while(t){
    num=String(num);
    if (num.length=== 1 ){
        t=false;

    }
    else {
        last=0;
        for (let i=0; i<num.length; i++){
            last+=+num[i];
        }
        num=last;
    }
}
console.log(last)