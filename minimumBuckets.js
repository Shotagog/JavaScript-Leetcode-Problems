const minimumBuckets = function(street) {
    let res = 0;
    for(let i = 0;i < street.length; i++){
        if(street[i] === 'H'){
            if(i+1<street.length && street[i + 1] === '.'){
                res++;
                i+=2;
                continue;
            }
            if(i - 1 >= 0 && street[i -1] === '.'){
                res++;
                continue;
            }
            return -1;
        }
    }
    return res;
};

// console.log(minimumBuckets("H..H"))
// console.log(minimumBuckets(".H.H."))
// console.log(minimumBuckets(".HHH."))
// console.log(minimumBuckets("H"))
// console.log(minimumBuckets("."))
// console.log(minimumBuckets(".."))
// console.log(minimumBuckets("HHHHHH..."))
// console.log(minimumBuckets("........HHHH..."))