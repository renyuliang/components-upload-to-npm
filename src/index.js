// 引入所有组件然后统一导出
import sumFuntion from './sumFuntion/sum-function'
import doubleFunction from './doubleFunction/double-function'

const components = {
  sumFuntion,
  doubleFunction
}

// 标签的方式引入
const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
}

export default {
  install,
  sumFuntion,
  doubleFunction
}
