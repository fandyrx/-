// HEML模板解析  编译函数
function Compile(element,vm) {
  //1.获取挂载的元素
   vm.$el = document.querySelector(element);
//
   const fragment = document.createDocumentFragment();
  //  console.log(vm.$el.childNodes);
  // 2.子节点逐个添加到 fragment
  let child;
  while (child = vm.$el.firstChild) {
    fragment.appendChild(child)
  }
// 3.替换文本内容
fragment_compile(fragment);
 
function fragment_compile(node) {
  const pattern = /\{\{\s*(\S+)\s\}\}/
//4.文本节点则解析 ,上方为正则,匹配{{}}
  if(node.nodeType === 3){
    //6.匹配{{}} , 字符串转数组 , 链式获取对象属性  值,替换
    const result_regex = pattern.exec(node.nodeValue);
    if(result_regex) {
      const arr = result_regex[1].split('.');
      const value = arr.reduce((total,current)=>{
        total[current]
      },vm.$data)
      node.nodeValue = node.nodeValue.replace(pattern,value);
    };
   
    return
  }
  //5.递归子节点
  node.childNodes.forEach(child => fragment_compile(child))
  }
  // 7.将修改完的元素碎片添加入DOM
  vm.$el.appendChild(fragment)
}