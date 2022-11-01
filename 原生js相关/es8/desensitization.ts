// const phone = "18945679999";
// desensitization(phone, 3, 3, "测试用");

// 传入脱敏处理
// desensitization 脱敏  es8语法 padStart padEnd实现
/**
 *
 * @param fields  处理数据
 * @param start  开始索引（不包括）
 * @param sliceNum 截取位数
 * @param reSymbol ‘替换符号’
 * @returns   脱敏后字符串
 */
export function desensitization(
  fields: Number | String,
  start: number = 3,
  sliceNum: number = 7,
  reSymbol: string = "*"
) {
  //初始化参数
  let pendingString = ""; //待处理字符串
  const end = sliceNum + start; // 停止截取 的索引
  let paddingEnd = ""; // 截取脱敏符号后 所有的字符串

  //1.根据传入字段处理转换
  if (typeof fields === "number") {
    //传入数字 转为字符串进行处理
    pendingString = fields.toString();
  } else if (typeof fields === "string") {
    pendingString = fields;
  } else {
    return new Error("类型错误，输入数字或字符串");
  }
  //2.开始处理
  const startNumber = pendingString.slice(0, start); //手机前(start)三位
  const lastNumber = pendingString.slice(end, Infinity); //   脱敏符号后方所有字段
  // const b4 = phone.slice(-4); //号码后四位
  // console.log(b4, "b4");
  // console.log("start:", startNumber);
  // console.log("last:", lastNumber);
  // 189_4567  补充到第7（end）位 总长度：startNumber的长度+补充的长度
  const PendingLength = pendingString.length; //待处理字符串长度
  //补充末尾索引 比传入字符串长? 性能优化
  end > PendingLength
    ? (paddingEnd = startNumber.padEnd(PendingLength, reSymbol))
    : (paddingEnd = startNumber.padEnd(end, reSymbol));

  // console.log("padding后方字段:",paddingEnd);
  // padding前 + padding后方字段
  const finalNum = lastNumber.padStart(pendingString.length, paddingEnd);
  console.log("finalNum:", finalNum);

  return finalNum;
}
