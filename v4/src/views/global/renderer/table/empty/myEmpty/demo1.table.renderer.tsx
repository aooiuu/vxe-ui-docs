// main.js
import { VxeUI } from 'vxe-pc-ui'

// 创建一个空内容渲染
VxeUI.renderer.add('MyEmpty', {
  // 空内容模板
  renderTableEmpty (renderOpts, params) {
    return <span>
      <p style="color: red;">已经到底了，没有更多数据了！</p>
    </span>
  }
})
