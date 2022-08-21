// app.js (在服务器和客户端之间共享)
// 在服务器端执行一次，用于实现服务器端渲染；
// 在客户端再执行一次，用于接管页面交互

// createSSRApp: 以 SSR 激活模式创建一个应用实例， 用法与 createApp() 完全相同
import { createSSRApp } from 'vue'

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
  })
}
