function a(num){
    return num+1
}
function ones(func){
	var tag=true;
	return function(...args){
        let res = undefined
		if(tag==true){
			res=func(...args); // 调用函数，arguments是一个数组，所以巧妙利用apply，其实也可以用es6的...args,那样就可以直接返回结果
			tag=false;
		}
		return res
	}
}

let b = ones(a)
console.log(b(1));
console.log(b(1));