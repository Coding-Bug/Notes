function permutate(str) {
  let result = [];
  // 出口
  if (str.length === 1) {
    return [str];
  }

  let left = str[0];
  let rest = str.slice(1, str.length);

  let preResult = permutate(rest);
  for (let i = 0; i < preResult.length; ++i) {
    // left插入每一个排列好的序列的每个空隙
    // 但是这样是插不到最右边的
    for (let j = 0; j < preResult[i].length; ++j) {
      let tmp =
        preResult[i].slice(0, j) +
        left +
        preResult[i].slice(j, preResult[i].length);
      result.push(tmp);
    }
    // 补上一个插到最右边的情况
    result.push(preResult[i].slice(0, preResult[i].length) + left);
  }
  return result;
}

console.log(permutate("abc"));
