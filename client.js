import { createApp } from './app.js'

// 创建一个与服务端完全相同的应用实例
const app = createApp()

// 在客户端挂载一个 SSR 应用时,会假定 HTML 是预渲染的，然后执行激活过程，
// 而不是挂载新的 DOM 节点 (#app为server返回的dom节点)
app.mount('#app')

//激活过程：
// 1.创建一个与服务端完全相同的应用实例,
// 2.将组件与它应该控制的 DOM 节点相匹配
// 3.添加 DOM 事件监听器