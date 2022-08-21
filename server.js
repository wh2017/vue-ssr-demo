import express from 'express'

// Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app.js'

const server = express()

server.get('/', (req, res) => {
  const app = createApp()

  // renderToString() 接收 Vue 应用实例，返回一个 Promise
  // 当 Promise resolve 时得到应用渲染的 HTML
  renderToString(app).then((html) => {
    console.log('html', html)

    // 返回静态HTMl字符串
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <!--支持在浏览器中使用 import * from 'vue'-->
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>

        <!--加载客户端入口文件：激活客户端,使客户端应用可交互-->
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})

// 托管客户端文件
server.use(express.static('.'));

server.listen(3000, () => {
  console.log('Start on: http://localhost:3000/')
})