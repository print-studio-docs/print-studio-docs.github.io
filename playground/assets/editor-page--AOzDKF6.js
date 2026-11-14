const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editor.main-rPqLdi_E.js","./rolldown-runtime-DK3Fl9T5.js","./editor.api-CqXph6aK.js","./index-BLNJtYLw.js","./runtime-core.esm-bundler-wlpNGAAZ.js","./index-BfbKkney.css","./editor-B55U_qvj.css","./editor-DLLD1ayD.css"])))=>i.map(i=>d[i]);
import{D as e,E as t,Ht as n,On as r,Yt as i,Zn as a,_ as o,b as s,bt as c,ct as l,g as u,gn as d,it as f,k as p,mt as m,o as h,tr as g,vn as _,y as v}from"./runtime-core.esm-bundler-wlpNGAAZ.js";import{n as y,t as b,w as x,y as ee}from"./index-BLNJtYLw.js";var S=[{id:`quick-start`,label:`快速开始：第一张模板`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

// 1. 创建实例。storage: false 表示不持久化到 localStorage
const studio = createPrintStudio({ storage: false })
try {
  // 2. 重命名文档并配置首页（坐标与尺寸单位均为毫米 mm）
  studio.document.rename('快速开始')
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '首页', width: 210, height: 297 })

  // 3. 添加文本元素
  page.elements.add({
    type: 'text',
    x: 20,
    y: 30,
    width: 170,
    height: 20,
    props: { text: '你好，Print Studio！', fontSize: 22, fontWeight: '700' },
  })
  page.elements.add({
    type: 'text',
    x: 20,
    y: 58,
    width: 170,
    height: 12,
    props: {
      text: '这份模板完全由代码创建，不依赖可视化设计器界面。',
      fontSize: 11,
      color: '#555555',
    },
  })

  // 4. 渲染为 HTML 并写入预览区（点运行查看真实渲染效果）
  const { html } = await studio.toHTML()
  document.body.innerHTML = html

  // 5. 导出模板 JSON（可保存到服务端或文件）
  console.log('模板 JSON：', studio.export.json())
} finally {
  studio.dispose() // 销毁实例，联动释放视图与渲染资源
}
`}},{id:`workspace`,label:`设计器首例：挂载与保存`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const storageKey = 'print-demo:notice'

// 未传 initialDocument：默认打开内置欢迎模板（自洽、可直接试用）
const studio = createPrintStudio({
  storage: false,
  // 保存回调收到 PrintDocument 对象，宿主自行序列化传输
  async onSave(document) {
    localStorage.setItem(storageKey, JSON.stringify(document))
  },
})

// 挂载可视化设计器；resolve 即界面与插件就绪（容器需要有明确高度）
await studio.mount({ el: document.body })

// 保存：触发 onSave 并把文档对象写入 localStorage
await studio.document.save()

// 恢复：loadJson 读回保存的 JSON
const raw = localStorage.getItem(storageKey)
if (raw) {
  studio.document.loadJson(raw)
  console.log('模板已恢复')
}

// 预览与浏览器打印由用户点击触发：挂载后追加操作按钮
const actions = document.createElement('div')
actions.style.cssText =
  'position:fixed;right:16px;bottom:16px;display:flex;gap:8px;z-index:2147483647'

function action(text, onClick) {
  const button = document.createElement('button')
  button.textContent = text
  button.style.cssText = 'padding:8px 14px;cursor:pointer'
  button.onclick = () => void onClick()
  actions.append(button)
}

action('打开预览', async () => {
  const preview = await studio.preview()
  console.log('预览告警', preview.warnings.length, '条')
})
action('浏览器打印', () => studio.print())

document.body.append(actions)
`}},{id:`elements`,label:`八种内置元素一览`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '元素一览', width: 210, height: 297 })

  // 文本：支持内嵌表达式 {{ 路径 | 格式化:参数 }}
  page.elements.add({
    type: 'text',
    x: 10, y: 10, width: 190, height: 14,
    props: {
      text: '客户：{{ order.customer }}\\n金额：{{ order.amount | currency:¥:2 }}',
      fontSize: 12,
      autoHeight: true,
    },
  })

  // 矩形（可圆角）与椭圆
  page.elements.add({
    type: 'rect',
    x: 10, y: 40, width: 80, height: 30,
    props: { fill: '#f0f7ff', stroke: '#164b85', strokeWidth: 0.4, radius: 2 },
  })
  page.elements.add({
    type: 'ellipse',
    x: 100, y: 40, width: 40, height: 30,
    props: { stroke: '#333333', strokeWidth: 0.5, dash: 'dotted' },
  })

  // 线条：点驱动元素，points 是几何真身
  page.elements.add({
    type: 'line',
    x: 10, y: 80, width: 190, height: 0,
    points: [
      { x: 10, y: 80 },
      { x: 200, y: 80 },
    ],
    props: { color: '#333333', strokeWidth: 0.4, dash: 'dashed' },
  })

  // 一维条码（10 种码制）与二维码（L/M/Q/H 容错）
  page.elements.add({
    type: 'barcode',
    x: 10, y: 92, width: 70, height: 20,
    props: { value: 'SO-2026-001', format: 'CODE128', displayValue: true },
  })
  page.elements.add({
    type: 'qrcode',
    x: 100, y: 88, width: 26, height: 26,
    props: { value: 'https://example.com/order/SO-2026-001', level: 'M' },
  })

  // 表格：结构化绑定 rows + 跨页 + 合计行
  page.elements.add({
    type: 'table',
    x: 10, y: 128, width: 190,
    bindings: { rows: 'items' },
    props: {
      columns: [
        { title: '商品', bind: 'name', width: 3, align: 'left' },
        { title: '数量', bind: 'quantity', width: 1, align: 'right' },
        {
          title: '金额',
          bind: 'amount',
          width: 2,
          align: 'right',
          format: { type: 'currency', digits: 2 },
        },
      ],
      rows: [],
      heightMode: 'auto',
      pagination: {
        crossPage: true,
        repeatHeader: true,
        rowsPerPage: 20,
        fillEmptyRows: false,
        positionMode: 'flow',
      },
      summary: {
        enabled: true,
        position: 'bottom',
        scope: 'lastPage',
        columns: {
          '0': { type: 'text', text: '合计' },
          '2': { type: 'sum' },
        },
      },
    },
  })

  const input = {
    order: { customer: '张女士', amount: 1280 },
    items: Array.from({ length: 45 }, (_, i) => ({
      name: '商品 ' + (i + 1),
      quantity: 2,
      amount: (i + 1) * 10,
    })),
  }
  const { html } = await studio.toHTML(input)
  document.body.innerHTML = html
  console.log('渲染页数:', document.querySelectorAll('.print-page').length)
} finally {
  studio.dispose()
}
`}},{id:`data-binding`,label:`数据源与表达式绑定`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '客户通知单', width: 210, height: 297 })

  // 声明数据源：供设计器字段面板展示与示例数据回填
  studio.dataSource.upsert({
    key: 'customer',
    label: '客户信息',
    sampleData: { name: '张女士', phone: '13800000000' },
    schema: [
      { name: 'name', type: 'string', label: '姓名' },
      { name: 'phone', type: 'string', label: '电话' },
    ],
  })
  studio.dataSource.upsert({
    key: 'order',
    label: '订单信息',
    sampleData: { amount: 1280 },
    schema: [{ name: 'amount', type: 'number', label: '金额' }],
  })

  // 内嵌表达式：字符串内多个 {{ 路径 | 格式化:参数 }} 片段
  page.elements.add({
    type: 'text',
    x: 15, y: 30, width: 180, height: 70,
    props: {
      text:
        '尊敬的 {{ customer.name }}：\\n\\n' +
        '您的账户已开通，联系电话 {{ customer.phone }}。\\n' +
        '订单金额：{{ order.amount | currency:¥:2 }}\\n\\n' +
        '—— Print Studio 团队',
      fontSize: 12,
      lineHeight: 1.6,
      autoHeight: true,
    },
  })

  const input = {
    customer: { name: '张女士', phone: '13800000000' },
    order: { amount: 1280 },
  }
  const { html, warnings } = await studio.toHTML(input)
  document.body.innerHTML = html
  console.log('求值完成，告警数:', warnings.length)
} finally {
  studio.dispose()
}
`}},{id:`labels`,label:`商品标签批量平铺`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '标签阵列', width: 210, height: 297 })

  // 单枚标签：底框 + 商品名 + 条码
  const card = page.elements.add({
    type: 'rect',
    x: 10, y: 10, width: 60, height: 40,
    props: { fill: '#ffffff', stroke: '#cccccc', strokeWidth: 0.3, radius: 2 },
  })
  const name = page.elements.add({
    type: 'text',
    x: 13, y: 14, width: 54, height: 12,
    props: { text: '{{ name }}', fontSize: 10, fontWeight: '600' },
  })
  const code = page.elements.add({
    type: 'barcode',
    x: 16, y: 30, width: 48, height: 14,
    props: { value: '{{ barcode }}', format: 'CODE128', displayValue: false },
  })

  // 循环区块：每条数据平铺一组元素，grid 网格布局，超出页高自动分页
  studio.repeatGroup.create({
    pageId: page.id,
    elementIds: [card.id, name.id, code.id],
    name: '商品标签阵列',
    collection: 'items',
    direction: 'grid',
    columns: 3,
    gapX: 2.5,
    gapY: 3,
    positionMode: 'flow',
  })

  const items = Array.from({ length: 18 }, (_, i) => ({
    name: '商品 ' + String(i + 1).padStart(2, '0'),
    barcode: '69012345678' + String(i).padStart(2, '0'),
  }))
  const { html } = await studio.toHTML({ items })
  document.body.innerHTML = html
  console.log('标签数量:', items.length)
} finally {
  studio.dispose()
}
`}},{id:`table-fill`,label:`出入库单固定行数补空行`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({
    name: '出库单',
    width: 210,
    height: 297,
    margins: { top: 20, right: 10, bottom: 15, left: 10 },
  })

  page.elements.add({
    type: 'text',
    x: 10, y: 22, width: 190, height: 10,
    props: { text: '出库单', fontSize: 16, fontWeight: '700', textAlign: 'center' },
  })
  page.elements.add({
    type: 'text',
    x: 10, y: 36, width: 190, height: 8,
    props: { text: '单号：CK-2026-0118    日期：2026-01-18' },
  })

  // fillEmptyRows: true → 不足 rowsPerPage 时自动补空白行，保持单据版式稳定
  page.elements.add({
    type: 'table',
    x: 10, y: 48, width: 190,
    bindings: { rows: 'items' },
    props: {
      columns: [
        { title: '序号', bind: '$index', width: 1, align: 'center' },
        { title: '品名', bind: 'name', width: 4, align: 'left' },
        { title: '规格', bind: 'spec', width: 2, align: 'left' },
        { title: '数量', bind: 'quantity', width: 1, align: 'right' },
        { title: '出库人', bind: 'operator', width: 2, align: 'left' },
      ],
      rows: [],
      fontSize: 10,
      minRowHeightMm: 7,
      heightMode: 'auto',
      pagination: {
        crossPage: false,
        rowsPerPage: 12,
        fillEmptyRows: true,
        positionMode: 'fixed',
      },
    },
  })

  const input = {
    items: [
      { name: '热敏纸 80mm', spec: '80×60', quantity: 20, operator: '李明' },
      { name: '碳带', spec: '110×300', quantity: 5, operator: '李明' },
      { name: '扫描枪', spec: 'HD-6621', quantity: 2, operator: '王强' },
    ],
  }
  const { html } = await studio.toHTML(input)
  document.body.innerHTML = html
  console.log('不足 12 行的数据自动补齐了空白行')
} finally {
  studio.dispose()
}
`}},{id:`order-full`,label:`完整订单：模板 + 明细 + 标签`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const input = {
  order: { number: 'SO-2026-001', customer: '示例客户' },
  items: Array.from({ length: 45 }, (_, i) => ({
    name: '商品 ' + (i + 1),
    quantity: 2,
    amount: (i + 1) * 10,
  })),
}

const studio = createPrintStudio({ storage: false })
try {
  studio.document.rename('订单与商品标签')
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({
    name: '订单',
    width: 210,
    height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })

  // 数据源声明
  studio.dataSource.upsert({
    key: 'order', label: '订单',
    sampleData: input.order,
    schema: [
      { name: 'number', type: 'string' },
      { name: 'customer', type: 'string' },
    ],
  })
  studio.dataSource.upsert({
    key: 'items', label: '商品明细',
    sampleData: input.items.slice(0, 2),
    schema: [{
      name: 'item', type: 'array',
      children: [
        { name: 'name', type: 'string' },
        { name: 'quantity', type: 'number' },
        { name: 'amount', type: 'number' },
      ],
    }],
  })

  // 页面模板（母版）：公司抬头 + 页码，应用到多页
  const stationery = studio.template.create({ name: '公司抬头与页码' })
  stationery.page.update({
    width: 210, height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })
  stationery.page.elements.add({
    type: 'text',
    x: 10, y: 8, width: 190, height: 10,
    props: { text: '示例公司 · {{ $document.documentName }}', fontSize: 16 },
  })
  stationery.page.elements.add({
    type: 'text',
    x: 10, y: 283, width: 190, height: 8,
    props: {
      text: '第 {{ $document.pageNumber }} / {{ $document.pageCount }} 页',
      textAlign: 'center',
      fontSize: 9,
    },
  })
  studio.template.apply(stationery, [page])

  // 订单页：表头 + 跨页明细表 + 跟随区块（签字区跟随表格末尾）
  page.elements.add({
    type: 'text',
    x: 10, y: 27, width: 190, height: 10,
    props: { text: '订单：{{ order.number }}    客户：{{ order.customer }}' },
  })
  const table = page.elements.add({
    type: 'table',
    x: 10, y: 42, width: 190,
    bindings: { rows: 'items' },
    props: {
      columns: [
        { title: '商品', bind: 'name', width: 3, align: 'left' },
        { title: '数量', bind: 'quantity', width: 1, align: 'right' },
        {
          title: '金额', bind: 'amount', width: 2, align: 'right',
          format: { type: 'number', digits: 2 },
        },
      ],
      rows: [],
      heightMode: 'auto',
      pagination: {
        crossPage: true, repeatHeader: true,
        rowsPerPage: 20, fillEmptyRows: false, positionMode: 'flow',
      },
      summary: {
        enabled: true, position: 'bottom', scope: 'lastPage',
        columns: { '0': { type: 'text', text: '合计' }, '2': { type: 'sum' } },
      },
    },
  })
  const signature = page.elements.add({
    type: 'text',
    x: 10, y: 70, width: 120, height: 12,
    props: { text: '收货人签字：____________' },
  })
  studio.followBlock.create({
    pageId: page.id,
    elementIds: [signature.id],
    target: { kind: 'element', id: table.id },
    gap: 5,
    name: '签收区域',
  })

  // 标签页：循环区块 3 列平铺
  const labelPage = studio.page.create({
    name: '商品标签',
    width: 210, height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })
  studio.template.apply(stationery, [labelPage])
  const label = labelPage.elements.add({
    type: 'text',
    x: 10, y: 30, width: 55, height: 20,
    props: {
      text: '商品：{{ name }}\\n数量：{{ quantity | number:0 }}',
      fontSize: 10,
    },
  })
  studio.repeatGroup.create({
    pageId: labelPage.id,
    elementIds: [label.id],
    name: '商品标签网格',
    collection: 'items',
    direction: 'grid',
    columns: 3,
    gapX: 5,
    gapY: 3,
    positionMode: 'flow',
  })

  studio.page.setActive(page)
  const { html } = await studio.toHTML(input)
  document.body.innerHTML = html
  console.log('订单 + 标签渲染完成，页数:', document.querySelectorAll('.print-page').length)
} finally {
  studio.dispose()
}
`}},{id:`mount-designer`,label:`挂载可视化设计器`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

// 实例与视图分离：mount 按需加载设计器视图（异步）
const studio = createPrintStudio({ storage: false })
try {
  studio.document.rename('挂载设计器')
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '首页', width: 210, height: 297 })
  page.elements.add({
    type: 'text',
    x: 20, y: 30, width: 170, height: 14,
    props: { text: '试试在下方设计器里直接编辑', fontSize: 14 },
  })

  // 挂载到预览区容器；resolve 即界面与插件就绪
  await studio.mount({ el: document.body })
  console.log('设计器已挂载。')

  // 事件订阅：返回解绑函数
  const off = studio.events.on('selection:changed', (event) => {
    console.log('选中变化:', event)
  })

  // studio.unmount() // 只卸载视图，实例与文档保留
  // studio.dispose() // 销毁实例（联动 unmount），实例不可再用
} catch (error) {
  console.error(error)
}
`}},{id:`renderer`,label:`纯输出渲染与 PDF 导出`,files:{"main.js":`import { createPrintRenderer, deserializeDocument } from '@printstack/print-studio'

// 纯输出运行时：不包含设计器，适合后台任务或已存模板的直接输出
const templateSource = {
  version: '1.0',
  name: '货架标签',
  pages: [
    {
      id: 'page-1',
      name: '标签',
      width: 100,
      height: 150,
      background: '#ffffff',
      elements: [
        {
          id: 'el-title',
          type: 'text',
          x: 8, y: 10, width: 84, height: 12,
          props: { text: '{{ zone }} 区 · 货架 {{ shelf }}', fontSize: 13, fontWeight: '700' },
        },
        {
          id: 'el-code',
          type: 'barcode',
          x: 15, y: 30, width: 70, height: 20,
          props: { value: '{{ code }}', format: 'CODE128', displayValue: true },
        },
      ],
    },
  ],
}
const input = { zone: 'A', shelf: '03-2', code: 'A03202600118' }

// HTML 直接渲染到预览区（不触发下载）
const htmlRenderer = createPrintRenderer({ rendering: { worker: false } })
try {
  // 外部模板 JSON 先反序列化，补齐可见性、透明度等运行时默认字段
  const { document: template } = deserializeDocument(
    templateSource,
    htmlRenderer.elements,
  )
  const { html } = await htmlRenderer.toHTML(template, input)
  document.body.innerHTML = html
} finally {
  htmlRenderer.dispose()
}

// 导出必须由用户触发：点击按钮才生成并下载 PDF
const button = document.createElement('button')
button.textContent = '导出 PDF'
button.style.cssText =
  'position:fixed;top:12px;right:12px;padding:8px 16px;cursor:pointer'
button.onclick = async () => {
  button.disabled = true
  // 每次导出独立创建渲染器，导出完成立即释放
  const renderer = createPrintRenderer({ rendering: { worker: false } })
  try {
    const { document: template } = deserializeDocument(
      templateSource,
      renderer.elements,
    )
    const { blob } = await renderer.toPDF(template, input)
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'shelf-label.pdf'
    link.click()
    URL.revokeObjectURL(url)
    console.log('PDF 已导出，体积:', blob.size, '字节')
  } finally {
    renderer.dispose()
    button.disabled = false
  }
}
document.body.append(button)
console.log('模板已渲染为 HTML。点击「导出 PDF」按钮才会生成并下载文件')
`}},{id:`batch-export`,label:`批量打印与批量导出`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '面单', width: 100, height: 150 })

  page.elements.add({
    type: 'text',
    x: 8, y: 10, width: 84, height: 12,
    props: { text: '收件人：{{ customer.name }}', fontSize: 12, fontWeight: '700' },
  })
  page.elements.add({
    type: 'text',
    x: 8, y: 26, width: 84, height: 24,
    props: { text: '地址：{{ customer.address }}', fontSize: 9, autoHeight: true },
  })
  page.elements.add({
    type: 'qrcode',
    x: 8, y: 60, width: 24, height: 24,
    props: { value: '{{ customer.trackingNo }}', level: 'M' },
  })
  page.elements.add({
    type: 'text',
    x: 8, y: 88, width: 84, height: 8,
    props: { text: '运单号：{{ customer.trackingNo }}', fontSize: 9 },
  })

  const customers = [
    { name: '张女士', address: '上海市浦东新区世纪大道 100 号', trackingNo: 'SF1000001' },
    { name: '李先生', address: '杭州市西湖区文一西路 96 号', trackingNo: 'SF1000002' },
    { name: '王女士', address: '广州市天河区体育西路 5 号', trackingNo: 'SF1000003' },
  ]

  // 首条数据渲染 HTML 预览（不触发导出）
  const { html } = await studio.toHTML({ customer: customers[0] })
  document.body.innerHTML = html

  // 批量导出由用户点击触发：逐条数据渲染 PDF（每条一份独立文件）
  const button = document.createElement('button')
  button.textContent = \`批量导出 \${customers.length} 份面单 PDF\`
  button.style.cssText =
    'position:fixed;top:12px;right:12px;padding:8px 16px;cursor:pointer'
  button.onclick = async () => {
    button.disabled = true
    try {
      for (const [index, customer] of customers.entries()) {
        const { blob } = await studio.toPDF({ customer })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = \`waybill-\${customer.trackingNo}.pdf\`
        link.click()
        URL.revokeObjectURL(url)
        console.log('第', index + 1, '份面单 PDF 已生成：', blob.size, '字节')
      }
      console.log('批量导出完成，共', customers.length, '份')
    } finally {
      button.disabled = false
    }
  }
  document.body.append(button)

  // 批量打印只需把同一模板对每条数据调用 studio.print({ customer })
  // 浏览器打印对话框由用户确认，浏览器会合并为一次连续输出
  console.log('点击「批量导出」按钮才会生成并下载 PDF')
} finally {
  studio.dispose()
}
`}},{id:`preview`,label:`打印预览：两种模式`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
// 搭建模板与数据源；preview() 对注入数据后的输出效果进行预览，不落纸
studio.document.rename('收款收据')
studio.document.create()
const page = studio.page.active
page.update({ name: '收款收据', width: 210, height: 297 })
studio.dataSource.upsert({
  key: 'customer',
  label: '客户信息',
  sampleData: { name: '张女士', amount: 1280 },
  schema: [
    { name: 'name', type: 'string', label: '姓名' },
    { name: 'amount', type: 'number', label: '金额' },
  ],
})
page.elements.add({
  type: 'text',
  x: 15, y: 20, width: 180, height: 40,
  props: {
    text: '收款收据\\n客户：{{ customer.name }}\\n金额：{{ customer.amount | currency:¥:2 }}',
    fontSize: 14,
    lineHeight: 1.8,
    autoHeight: true,
  },
})

// 预览打开方式由用户点击触发，不在页面加载时自动执行
const input = { customer: { name: '张女士', amount: 1280 } }
const box = document.createElement('div') // 嵌入容器：需有明确高度
box.style.cssText =
  'height:420px;margin:0 12px 12px;border:1px solid #ddd;position:relative'
const actions = document.createElement('div')
actions.style.cssText =
  'display:flex;gap:8px;flex-wrap:wrap;padding:12px;font-family:sans-serif'

let current

function action(text, onClick) {
  const button = document.createElement('button')
  button.textContent = text
  button.style.cssText = 'padding:6px 14px;cursor:pointer'
  button.onclick = () => void onClick()
  actions.append(button)
}

action('全屏遮罩预览', async () => {
  current?.close()
  current = await studio.preview(input) // 缺省全屏遮罩，右上角 × 关闭
  console.log('预览告警', current.warnings.length, '条')
})
action('嵌入容器预览', async () => {
  current?.close()
  current = await studio.preview(input, { container: box })
  console.log('预览告警', current.warnings.length, '条')
})
action('designer 模式完整打印预览', async () => {
  current?.close()
  // mode: 'designer' 独立挂载完整打印预览，无需挂载设计器
  current = await studio.preview(input, { mode: 'designer', container: box })
  console.log('完整打印预览告警', current.warnings.length, '条')
})
action('关闭预览', () => {
  current?.close()
  current = undefined
})

document.body.append(actions, box)
console.log('点击按钮打开对应形态的预览；handle.close() 或关闭窗口释放会话')
`}},{id:`print`,label:`浏览器打印`,files:{"main.js":`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
studio.document.rename('快递面单')
studio.document.create()
const page = studio.page.active
page.update({ name: '面单', width: 100, height: 150 })
page.elements.add({
  type: 'text',
  x: 8, y: 10, width: 84, height: 12,
  props: { text: '客户：{{ customer.name }}', fontSize: 12, fontWeight: '700' },
})
page.elements.add({
  type: 'text',
  x: 8, y: 26, width: 84, height: 8,
  props: { text: '运单号：{{ customer.trackingNo }}', fontSize: 9 },
})

const input = { customer: { name: '张女士', trackingNo: 'SF102600118' } }

// 先渲染 HTML 供查看（不触发打印）
const { html } = await studio.toHTML(input)
document.body.innerHTML = html

// 浏览器打印对话框必须由用户点击触发
const button = document.createElement('button')
button.textContent = '调起浏览器打印对话框'
button.style.cssText =
  'position:fixed;top:12px;right:12px;padding:8px 16px;cursor:pointer'
button.onclick = async () => {
  button.disabled = true
  try {
    const { warnings } = await studio.print(input)
    console.log(
      '打印任务已提交（resolve）；告警', warnings.length, '条。是否出纸由浏览器对话框决定',
    )
  } finally {
    button.disabled = false
  }
}
document.body.append(button)
console.log('点击按钮调起浏览器打印对话框；打印预览请用 studio.preview()')
`}}];function C(e){return S.find(t=>t.id===e)}var w=`print-studio-playground`,T=`editor-projects`;function E(){return new Promise((e,t)=>{let n=indexedDB.open(w,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(T)||e.createObjectStore(T)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}function D(e,t){return E().then(n=>new Promise((r,i)=>{let a=n.transaction(T,e),o=t(a.objectStore(T));o.onsuccess=()=>r(o.result),o.onerror=()=>i(o.error),a.oncomplete=()=>n.close()}))}async function O(e){try{return await D(`readonly`,t=>t.get(e))??null}catch{return null}}async function k(e,t){try{await D(`readwrite`,n=>n.put(t,e))}catch{}}async function A(e){try{await D(`readwrite`,t=>t.delete(e))}catch{}}var j=`main.js`,M=`pg-editor`;async function N(e){let t={};if(Object.keys(e).filter(e=>e.endsWith(`.ts`)).length===0)return{...e};try{let n=await y(()=>import(`./editor.main-rPqLdi_E.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),r=await n.languages.typescript.getTypeScriptWorker();for(let[i,a]of Object.entries(e)){if(!i.endsWith(`.ts`)){t[i]=a;continue}let e=n.Uri.parse(`file:///pg-transpile/${i}`),o=n.editor.getModel(e);o?o.setValue(a):o=n.editor.createModel(a,`typescript`,e);let s=(await(await r(e)).getEmitOutput(e.toString()))?.outputFiles?.[0]?.text;t[i.replace(/\.ts$/,`.js`)]=s||a}return t}catch(t){return console.warn(`TypeScript 转译失败，按原样运行`,t),{...e}}}function te(){let e=d({exampleId:`quick-start`,files:{},activeFile:j,autoRun:!1,running:!1}),t=u(()=>Object.keys(e.files).sort((t,n)=>t===e.activeFile?-1:n===e.activeFile?1:t===j?-1:n===j?1:t.localeCompare(n))),r;function i(){window.clearTimeout(r),r=window.setTimeout(()=>{k(M,{files:{...e.files},activeFile:e.activeFile,savedAt:Date.now()})},500)}async function a(t,n=!1){let r=C(t)??{id:t,label:t,files:{[j]:`import { createPrintStudio } from '@printstack/print-studio'

const studio = createPrintStudio({ storage: false })
try {
  console.log('工作区已创建')
} finally {
  studio.dispose()
}
`}};if(!n){let n=await O(`${M}:${t}`);if(n){e.exampleId=t,e.files={...n.files},e.activeFile=n.activeFile in n.files?n.activeFile:j;return}}e.exampleId=t,e.files={...r.files},e.activeFile=j}function o(t,n){t in e.files&&(e.files[t]=n,i())}function s(t){let n=t.trim();return!n||n in e.files?!1:(e.files[n]=``,e.activeFile=n,i(),!0)}function c(t,n){let r=n.trim();if(!r||r in e.files||t===j)return!1;let a={};for(let[n,i]of Object.entries(e.files))a[n===t?r:n]=i;return e.files=a,e.activeFile===t&&(e.activeFile=r),i(),!0}function l(t){if(t===j||!(t in e.files))return!1;let n={...e.files};return delete n[t],e.files=n,e.activeFile===t&&(e.activeFile=j),i(),!0}async function f(){await A(`${M}:${e.exampleId}`),await a(e.exampleId,!0)}async function p(){return N({...e.files})}function m(){n(()=>[e.files,e.activeFile],()=>i(),{deep:!0})}return{state:e,fileList:t,loadExample:a,updateFile:o,createFile:s,renameFile:c,removeFile:l,resetExample:f,runnableFiles:p,watchPersist:m}}function P(e){return new Worker(new URL(`editor-worker-CET2B_uC.js`,import.meta.url).href,{name:e?.name})}function F(e){return new Worker(new URL(`ts-worker-BxoQHgd6.js`,import.meta.url).href,{name:e?.name})}var ne=b(p({__name:`monaco-view`,props:{fileName:{},content:{}},emits:[`change`],setup(e,{expose:t,emit:r}){let i=e,a=r,o=_(),c=null,u=null,d=new Map;function p(e){return e.endsWith(`.ts`)?`typescript`:e.endsWith(`.json`)?`json`:`javascript`}function h(e){return c.Uri.parse(`file:///project/${e}`)}function g(e){let t=h(e),n=c.editor.getModel(t);return n||(n=c.editor.createModel(i.content,p(e),t),d.set(e,n)),n}l(async()=>{c=await y(()=>import(`./editor.main-rPqLdi_E.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);let e=self;if(!e.MonacoEnvironment){let t=new P,n=new F;e.MonacoEnvironment={getWorker(e,r){return r===`typescript`||r===`javascript`?n:t}}}let t=c.languages.typescript;t.javascriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,allowJs:!0,checkJs:!1,module:t.ModuleKind.ESNext,target:t.ScriptTarget.ES2020}),t.typescriptDefaults.setCompilerOptions({module:t.ModuleKind.ESNext,target:t.ScriptTarget.ES2020,moduleResolution:t.ModuleResolutionKind.Bundler,allowNonTsExtensions:!0});try{let{libDeclarations:e}=await y(async()=>{let{libDeclarations:e}=await import(`./lib-declarations-JxpUSaGx.js`);return{libDeclarations:e}},[],import.meta.url);for(let n of e)t.typescriptDefaults.addExtraLib(n.content,`file:///libs/${n.path}`),t.javascriptDefaults.addExtraLib(n.content,`file:///libs/${n.path}`)}catch{}u=c.editor.create(o.value,{model:g(i.fileName),theme:document.documentElement.classList.contains(`dark`)?`vs-dark`:`vs`,fontSize:13,minimap:{enabled:!1},automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,padding:{top:10}}),u.onDidChangeModelContent(()=>{a(`change`,u.getModel().getValue())});let n=new MutationObserver(()=>{c.editor.setTheme(document.documentElement.classList.contains(`dark`)?`vs-dark`:`vs`)});n.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),f(()=>n.disconnect())}),n(()=>i.fileName,e=>{u&&c&&u.setModel(g(e))}),n(()=>i.content,e=>{let t=u?.getModel();t&&t.getValue()!==e&&t.setValue(e)});function v(e,t){let n=d.get(e);n&&n.getValue()!==t&&n.setValue(t)}return t({addCommand(e,t){u?.addCommand(e,t)},refreshModelContent:v}),f(()=>{for(let e of d.values())e.dispose();d.clear(),u?.dispose(),u=null,c=null}),(e,t)=>(m(),s(`div`,{ref_key:`container`,ref:o,class:`pg-monaco`},null,512))}}),[[`__scopeId`,`data-v-ba8ab38d`]]),re=b(p({__name:`runner-frame`,emits:[`log`,`status`],setup(e,{expose:t,emit:n}){let r=n,i=_(),a=null,o=0,c=String(Date.now());function u(e){let t=e.data;if(t&&t.source===`runner`){if(t.type===`ready`&&a){let e=a;a=null,i.value?.contentWindow?.postMessage({source:`playground`,type:`run`,files:e,version:c},`*`)}else t.type===`log`?r(`log`,{level:t.level,text:t.args.join(` `),time:Date.now()}):t.type===`status`&&r(`status`,t.status)}}function d(e){a=e??null,o+=1,i.value&&(i.value.src=`runner.html?g=${o}&v=${c}`)}return l(()=>{window.addEventListener(`message`,u),d()}),f(()=>{window.removeEventListener(`message`,u)}),t({run:d}),(e,t)=>(m(),s(`iframe`,{ref_key:`frame`,ref:i,title:`Playground 运行预览`,class:`runner-frame`,sandbox:`allow-scripts allow-same-origin allow-modals allow-downloads allow-popups`},null,512))}}),[[`__scopeId`,`data-v-d8acf291`]]),ie={class:`pg-editor`},I={class:`pg-editor__toolbar`},L={class:`pg-editor__actions`},R={class:`pg-editor__field`},z=[`value`],B=[`value`],V=[`disabled`],H={class:`pg-editor__toggle`},U={class:`pg-editor__layout`},W={class:`pg-editor__files`},G={class:`pg-editor__file-list`},K=[`onClick`],q={key:0,class:`pg-editor__file-ops`},J=[`onClick`],Y=[`onClick`],ae={class:`pg-editor__code`},oe={class:`pg-editor__preview`},se={class:`pg-editor__preview-body`},ce={class:`pg-editor__console-head`},le={key:0,class:`pg-editor__badge`},ue={class:`pg-editor__console-arrow`},de={class:`pg-editor__console-body`},fe={key:0,class:`pg-editor__console-empty`},X=b(p({__name:`editor-page`,setup(d){let p=te(),{state:y}=p,b=_(),C=_(),w=_([]),T=_(0),E=_(!0),D=_(`split`),O=_(),k=_(!1),A=u(()=>y.files[y.activeFile]??``),j=u(()=>y.running?`运行中…`:M.value===`error`?`运行出错`:M.value===`done`?`运行完成`:`待运行`),M=_(`idle`);async function N(){w.value=[],T.value=0,M.value=`running`,y.running=!0;let e=await p.runnableFiles();b.value?.run(e)}function P(e){w.value.push(e),e.level===`error`&&(T.value+=1),w.value.length>500&&w.value.splice(0,w.value.length-500)}function F(e){e!==`running`&&(y.running=!1),M.value=e}async function X(){await p.resetExample(),w.value=[],T.value=0,M.value=`idle`,window.setTimeout(()=>void N(),50)}async function pe(e){let t=e.target.value;await p.loadExample(t),w.value=[],M.value=`idle`,window.setTimeout(()=>void N(),50)}function me(){navigator.clipboard.writeText(A.value)}async function he(){let e=new Blob([A.value],{type:y.activeFile.endsWith(`.json`)?`application/json`:`text/javascript`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=y.activeFile,n.click(),URL.revokeObjectURL(t)}async function ge(e){let t=e.target,n=t.files?.[0];if(t.value=``,!n)return;let r=await n.text(),i=n.name.replace(/[^\w.$-]/g,`_`);i in y.files||p.createFile(i),p.updateFile(i,r)}function _e(){let e=window.prompt(`新文件名（支持 .js / .ts / .json）`,`utils.js`);e&&p.createFile(e)}function ve(e){let t=window.prompt(`重命名为`,e);t&&p.renameFile(e,t)}function Z(e){window.confirm(`删除文件 ${e}？`)&&p.removeFile(e)}function ye(){w.value=[],T.value=0}function Q(e){(e.ctrlKey||e.metaKey)&&e.key===`Enter`&&(e.preventDefault(),N())}let $;return n(()=>JSON.stringify(y.files),()=>{y.autoRun&&k.value&&(window.clearTimeout($),$=window.setTimeout(()=>void N(),1200))}),n(()=>y.activeFile,e=>{C.value?.refreshModelContent(e,A.value)}),l(async()=>{let e=new URLSearchParams(window.location.search).get(`example`)??`quick-start`;await p.loadExample(e),p.watchPersist(),k.value=!0,window.addEventListener(`keydown`,Q),window.setTimeout(()=>void N(),300)}),f(()=>{window.removeEventListener(`keydown`,Q),window.clearTimeout($)}),(n,l)=>(m(),s(`div`,ie,[o(`header`,I,[l[10]||=o(`div`,{class:`pg-editor__brand`},[o(`span`,{class:`pg-editor__logo`,"aria-hidden":`true`},`P`),o(`span`,{class:`pg-editor__name`},`Print Studio Playground`)],-1),o(`div`,L,[o(`label`,R,[l[7]||=t(` 示例 `,-1),o(`select`,{class:`pg-editor__select`,value:r(y).exampleId,onChange:pe},[(m(!0),s(h,null,c(r(S),e=>(m(),s(`option`,{key:e.id,value:e.id},g(e.label),9,B))),128))],40,z)]),o(`button`,{class:`pg-editor__button pg-editor__button--primary`,type:`button`,disabled:r(y).running,onClick:N},[...l[8]||=[t(` ▶ 运行 `,-1),o(`kbd`,null,`Ctrl+↵`,-1)]],8,V),o(`label`,H,[i(o(`input`,{"onUpdate:modelValue":l[0]||=e=>r(y).autoRun=e,type:`checkbox`},null,512),[[ee,r(y).autoRun]]),l[9]||=t(` 自动运行 `,-1)]),o(`button`,{class:`pg-editor__button`,type:`button`,onClick:X},` 重置 `),o(`button`,{class:`pg-editor__button`,type:`button`,onClick:me},` 复制 `),o(`button`,{class:`pg-editor__button`,type:`button`,onClick:l[1]||=e=>O.value?.click()},` 导入 `),o(`button`,{class:`pg-editor__button`,type:`button`,onClick:he},` 导出 `),o(`input`,{ref_key:`fileInput`,ref:O,type:`file`,accept:`.js,.ts,.json,.txt`,hidden:``,onChange:ge},null,544),o(`div`,U,[o(`button`,{class:a({"is-active":D.value===`editor`}),type:`button`,title:`仅编辑器`,onClick:l[2]||=e=>D.value=`editor`},` 代码 `,2),o(`button`,{class:a({"is-active":D.value===`split`}),type:`button`,title:`分栏`,onClick:l[3]||=e=>D.value=`split`},` 分栏 `,2),o(`button`,{class:a({"is-active":D.value===`preview`}),type:`button`,title:`仅预览`,onClick:l[4]||=e=>D.value=`preview`},` 预览 `,2)]),o(`span`,{class:a([`pg-editor__status`,`pg-editor__status--${M.value}`])},g(j.value),3)])]),o(`div`,{class:a([`pg-editor__main`,`pg-editor__main--${D.value}`])},[o(`aside`,W,[o(`div`,{class:`pg-editor__files-head`},[l[11]||=o(`span`,null,`文件`,-1),o(`button`,{class:`pg-editor__icon`,type:`button`,title:`新建文件`,onClick:_e},` ＋ `)]),o(`ul`,G,[(m(!0),s(h,null,c(r(p).fileList.value,e=>(m(),s(`li`,{key:e,class:a({"is-active":e===r(y).activeFile})},[o(`button`,{class:`pg-editor__file`,type:`button`,onClick:t=>r(y).activeFile=e},g(e),9,K),e===`main.js`?v(``,!0):(m(),s(`span`,q,[o(`button`,{class:`pg-editor__icon`,type:`button`,title:`重命名`,onClick:t=>ve(e)},` ✎ `,8,J),o(`button`,{class:`pg-editor__icon`,type:`button`,title:`删除`,onClick:t=>Z(e)},` ✕ `,8,Y)]))],2))),128))])]),i(o(`section`,ae,[e(ne,{ref_key:`monacoRef`,ref:C,"file-name":r(y).activeFile,content:A.value,onChange:l[5]||=e=>r(p).updateFile(r(y).activeFile,e)},null,8,[`file-name`,`content`])],512),[[x,D.value!==`preview`]]),i(o(`section`,oe,[l[12]||=o(`div`,{class:`pg-editor__preview-head`},[o(`span`,null,`预览`)],-1),o(`div`,se,[e(re,{ref_key:`runnerRef`,ref:b,onLog:P,onStatus:F},null,512)])],512),[[x,D.value!==`editor`]])],2),o(`footer`,{class:a([`pg-editor__console`,{"is-collapsed":!E.value}])},[o(`div`,ce,[o(`button`,{class:`pg-editor__console-toggle`,type:`button`,onClick:l[6]||=e=>E.value=!E.value},[l[13]||=t(` 控制台 `,-1),T.value>0?(m(),s(`span`,le,g(T.value),1)):v(``,!0),o(`span`,ue,g(E.value?`▾`:`▸`),1)]),o(`button`,{class:`pg-editor__button`,type:`button`,onClick:ye},` 清空 `)]),i(o(`div`,de,[w.value.length===0?(m(),s(`div`,fe,` 暂无日志。console 输出与运行错误将显示在这里。 `)):v(``,!0),(m(!0),s(h,null,c(w.value,(e,t)=>(m(),s(`div`,{key:t,class:a([`pg-editor__log`,`pg-editor__log--${e.level}`])},g(e.text),3))),128))],512),[[x,E.value]])],2)]))}}),[[`__scopeId`,`data-v-06e7aa4b`]]);export{X as default};