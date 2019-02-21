// 节流函数 : 减少浏览器内存消耗
function throttle(ele , callback) {
  var isRunning = false 
  return function() {
    if (isRunning) return
    isRunning = true
    // requestAnimationFrame:回调间隔 = 浏览器重绘频率
    window.requestAnimationFrame(function(timestamp) { 
      if(ele.scrollTop + ele.clientHeight >= ele.scrollHeight) { // 检测是否滚动到元素底部
        callback()
      }
      isRunning = false
    })
  }
}

/**
 * 监听HTML元素是否滚动到底部 : 兼容ES5
 * @param {object} ele HTML元素
 * @param {function} callback 滚动到底部后的回调函数
 */
function listenScrollToBottom(ele , callback) {
  if(ele === null || ele === undefined) { // 节点不存在：抛出错误
    throw new Error('Undefined COM')
    return 
  }
  ele.addEventListener("scroll" , throttle(ele , callback) , false) // 监听 scroll 事件
}
