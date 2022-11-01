function clone(target,map= new Map()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {}

    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    
    for (const key in target) {
      
      cloneTarget[key] = target[key]
    }
    return cloneTarget
  } else { 
    
  return target
  }
 

  

}