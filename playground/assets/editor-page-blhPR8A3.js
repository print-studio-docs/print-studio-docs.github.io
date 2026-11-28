const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editor.main-DBUok3li.js","./monaco.contribution-BQrS9kcz.js","./rolldown-runtime-DK3Fl9T5.js","./index-tMeoS9Ds.js","./runtime-core.esm-bundler-wlpNGAAZ.js","./index-DINbSCK5.css","./monaco-B55U_qvj.css","./editor-DLLD1ayD.css","./tsMode-0dd7xdc0.js"])))=>i.map(i=>d[i]);
import{D as e,E as t,En as n,Ht as r,On as i,Ut as a,Yt as o,Zn as s,_ as c,b as l,bt as u,ct as d,g as f,gn as p,it as m,k as h,mt as g,o as _,pn as v,tr as y,vn as b,xn as x,y as S}from"./runtime-core.esm-bundler-wlpNGAAZ.js";import{n as C,t as w,w as T,y as ee}from"./index-tMeoS9Ds.js";import{n as te}from"./output-BjxPGlpE.js";var E=typeof window<`u`&&typeof document<`u`;typeof WorkerGlobalScope<`u`&&globalThis instanceof WorkerGlobalScope;var D=Object.prototype.toString,O=e=>D.call(e)===`[object Object]`,k=()=>{};function A(e){return Array.isArray(e)?e:[e]}function j(e,t,n){return r(e,t,{...n,immediate:!0})}var M=E?window:void 0;E&&window.document,E&&window.navigator,E&&window.location;function N(e){let t=n(e);return t?.$el??t}function P(...e){let t=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),r=f(()=>{let t=A(n(e[0])).filter(e=>e!=null);return t.every(e=>typeof e!=`string`)?t:void 0});return j(()=>[r.value?.map(e=>N(e))??[M].filter(e=>e!=null),A(n(r.value?e[1]:e[0])),A(i(r.value?e[2]:e[1])),n(r.value?e[3]:e[2])],([e,n,r,i],a,o)=>{if(!e?.length||!n?.length||!r?.length)return;let s=O(i)?{...i}:i,c=e.flatMap(e=>n.flatMap(n=>r.map(r=>t(e,n,r,s))));o(()=>{c.forEach(e=>e())})},{flush:`post`})}var F={ctrl:`control`,command:`meta`,cmd:`meta`,option:`alt`,up:`arrowup`,down:`arrowdown`,left:`arrowleft`,right:`arrowright`};function ne(e={}){let{reactive:t=!1,target:r=M,aliasMap:i=F,passive:a=!0,onEventFired:o=k}=e,s=p(new Set),c={toJSON(){return{}},current:s},l=t?p(c):c,u=new Set,d=new Map([[`Meta`,u],[`Shift`,new Set],[`Alt`,new Set]]),m=new Set;function h(e,n){e in l&&(t?l[e]=n:l[e].value=n)}function g(){s.clear();for(let e of m)h(e,!1)}function _(e,t,n){if(e&&typeof t.getModifierState==`function`){for(let[e,r]of d)if(t.getModifierState(e)){n.forEach(e=>r.add(e));break}}}function v(e,t){if(e)return;let n=`${t[0].toUpperCase()}${t.slice(1)}`,r=d.get(n);if(![`shift`,`alt`].includes(t)||!r)return;let i=Array.from(r),a=i.indexOf(t);i.forEach((e,t)=>{t>=a&&(s.delete(e),h(e,!1))}),r.clear()}function y(e,t){let n=e.key?.toLowerCase(),r=[e.code?.toLowerCase(),n].filter(Boolean);if(n){n&&(t?s.add(n):s.delete(n));for(let e of r)m.add(e),h(e,t);_(t,e,[...s,...r]),v(t,n),n===`meta`&&!t&&(u.forEach(e=>{s.delete(e),h(e,!1)}),u.clear())}}P(r,`keydown`,e=>(y(e,!0),o(e)),{passive:a}),P(r,`keyup`,e=>(y(e,!1),o(e)),{passive:a}),P(`blur`,g,{passive:a}),P(`focus`,g,{passive:a});let b=new Proxy(l,{get(e,r,a){if(typeof r!=`string`)return Reflect.get(e,r,a);if(r=r.toLowerCase(),r in i&&(r=i[r]),!(r in l)){if(/[+_-]/.test(r)){let e=r.split(/[+_-]/g).map(e=>e.trim());l[r]=f(()=>e.map(e=>n(b[e])).every(Boolean))}else l[r]=x(!1)}let o=Reflect.get(e,r,a);return t?n(o):o}});return b}var I={...F,"+":`equal`,"-":`minus`,"=":`equal`,del:`delete`,esc:`escape`,plus:`equal`};function re(e,t={}){let r=new EventTarget,i=ne({aliasMap:I,onEventFired:c,passive:!1,target:t.target?()=>n(t.target)??r:void 0}),o=x([]);function s(){return n(e).flatMap(e=>[e.shortcut].flat().map(t=>{let n=t.toLowerCase().split(`+`).map(e=>e.trim()),r=n.slice(0,-1).map(e=>I[e]??e),a=n.at(-1)??``,o=I[a]??a;return{alt:r.includes(`alt`),binding:e,mod:r.some(e=>[`control`,`meta`,`mod`].includes(e)),pressed:i[o],shift:r.includes(`shift`),trigger:o}}))}function c(e){if(e.type!==`keydown`||!n(t.enabled??!0)||(t.isolate&&e.stopPropagation(),e.defaultPrevented||e.isComposing||t.filter&&!t.filter(e)))return;let r=[e.key,e.code].map(e=>{let t=e.toLowerCase();return I[t]??t}),i=o.value.find(t=>r.includes(t.trigger)&&t.pressed.value&&(t.binding.exact===!1||t.mod===(e.ctrlKey||e.metaKey)&&t.shift===e.shiftKey&&t.alt===e.altKey));i?(i.binding.preventDefault!==!1&&e.preventDefault(),i.binding.run(e)):!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key.length===1&&t.onTextInput&&(e.preventDefault(),t.onTextInput(e))}return a(()=>{o.value=s()},{flush:`sync`}),i}var ie=`<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Playground Runner</title>
    <style>
      /* html/body 给定视口高度：设计器类示例直接 studio.mount({ el: document.body })，
         挂载产物 height:100% 依赖容器有明确高度；HTML 输出类示例内容超出时
         仍由根元素滚动，不受影响。 */
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: #ffffff;
      }
      .ps-pg-runner__hint {
        padding: 28px 24px;
        color: #8a94a6;
        font:
          13px/1.7 -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          'PingFang SC',
          'Microsoft YaHei',
          sans-serif;
      }
      .ps-pg-runner__hint strong {
        color: #4b5b6b;
      }
    </style>
    <!--
      import map 由引导脚本在首次运行消息时动态注入（此刻尚无模块加载），
      把用户代码中的裸导入 \`@printstack/print-studio\` 指向 vendor 聚合产物
      （真实 dist/lib 构建，非模拟 API），并携带会话级缓存击穿参数。
    -->
    <script>
      window.__pgImportMapReady = false
      function ensureImportMap(version) {
        if (window.__pgImportMapReady) return
        var map = document.createElement('script')
        map.type = 'importmap'
        map.textContent = JSON.stringify({
          imports: {
            '@printstack/print-studio':
              './vendor/pg-vendor.js?v=' + (version || '0'),
          },
        })
        document.head.appendChild(map)
        window.__pgImportMapReady = true
      }
    <\/script>
  </head>
  <body>
    <div class="ps-pg-runner__hint">
      点击
      <strong>运行</strong>
      后，代码输出（模板预览 / 设计器界面）将显示在这里。
    </div>
    <!-- 经典脚本引导：接收运行消息、桥接 console、动态导入用户代码。 -->
    <script>
      ;(function () {
        'use strict'

        var RUNNER_SOURCE = 'runner'
        var HOST_SOURCE = 'playground'

        function post(message) {
          message.source = RUNNER_SOURCE
          parent.postMessage(message, window.location.origin)
        }

        function serialize(value, depth) {
          depth = depth || 0
          if (depth > 3) return '…'
          if (typeof value === 'string') return value
          if (value instanceof Error) {
            return (
              value.name +
              ': ' +
              value.message +
              (value.stack
                ? '\\n' + String(value.stack).split('\\n').slice(0, 4).join('\\n')
                : '')
            )
          }
          if (typeof value === 'function') {
            return '[Function ' + (value.name || 'anonymous') + ']'
          }
          if (typeof value === 'symbol') return value.toString()
          if (value === null || typeof value !== 'object') return String(value)
          try {
            if (Array.isArray(value)) {
              var head = value.slice(0, 20).map(function (item) {
                return serialize(item, depth + 1)
              })
              return (
                '[' + head.join(', ') + (value.length > 20 ? ', …' : '') + ']'
              )
            }
            var keys = Object.keys(value).slice(0, 20)
            var body = keys.map(function (key) {
              return key + ': ' + serialize(value[key], depth + 1)
            })
            return '{ ' + body.join(', ') + ' }'
          } catch (error) {
            return String(value)
          }
        }

        // console 桥接：转发到宿主控制台面板。
        ;['log', 'info', 'warn', 'error'].forEach(function (level) {
          var original = console[level].bind(console)
          console[level] = function () {
            var args = Array.prototype.slice.call(arguments)
            original.apply(null, args)
            post({
              type: 'log',
              level: level,
              args: args.map(function (item) {
                return serialize(item)
              }),
            })
          }
        })

        window.addEventListener('error', function (event) {
          var location =
            event.filename && event.lineno
              ? ' (' +
                event.filename.split('/').pop() +
                ':' +
                event.lineno +
                ')'
              : ''
          post({
            type: 'log',
            level: 'error',
            args: [String(event.message) + location],
          })
        })

        window.addEventListener('unhandledrejection', function (event) {
          post({
            type: 'log',
            level: 'error',
            args: ['未处理的 Promise 拒绝: ' + serialize(event.reason)],
          })
        })

        // 把用户文件中的相对导入重写为对应文件的 blob URL，
        // 使 main.js 可以像本地项目一样 \`import './utils.js'\`。
        var resolvedUrls = {}

        function lookupFile(name, files) {
          if (typeof files[name] === 'string') return name
          if (typeof files[name + '.js'] === 'string') return name + '.js'
          if (typeof files[name + '.ts'] === 'string') return name + '.ts'
          return null
        }

        function resolveFile(name, files) {
          if (resolvedUrls[name]) return resolvedUrls[name]
          var actual = lookupFile(name, files) || name
          var code = files[actual]
          if (typeof code !== 'string') {
            throw new Error('找不到文件: ' + name)
          }
          var self = name
          var rewritten = code.replace(
            /(from\\s*|import\\s*\\(\\s*)(['"])(\\.{1,2}\\/[^'"]+)\\2/g,
            function (all, prefix, quote, specifier) {
              var target = normalizePath(self, specifier)
              return prefix + quote + resolveFile(target, files) + quote
            },
          )
          var url = URL.createObjectURL(
            new Blob([rewritten], { type: 'text/javascript' }),
          )
          resolvedUrls[name] = url
          return url
        }

        function normalizePath(fromName, specifier) {
          var base = fromName.split('/')
          base.pop()
          var parts = specifier.split('/')
          for (var i = 0; i < parts.length; i++) {
            var part = parts[i]
            if (part === '.' || part === '') continue
            if (part === '..') base.pop()
            else base.push(part)
          }
          return base.join('/')
        }

        var hasStarted = false
        var isOutputReady = false
        var isOutputRunning = false

        async function runOutput(type) {
          var output = window.__pgOutput
          if (
            !isOutputReady ||
            isOutputRunning ||
            typeof output?.[type] !== 'function'
          ) {
            return
          }

          isOutputRunning = true
          try {
            var result = await output[type]()
            if (type === 'pdf') {
              if (!(result instanceof Blob)) {
                throw new Error('PDF 操作未返回 Blob')
              }
              post({ type: 'pdf-result', blob: result })
            }
          } catch (error) {
            console.error('输出失败', error)
          } finally {
            isOutputRunning = false
          }
        }

        window.addEventListener('message', function (event) {
          var data = event.data
          if (
            event.source !== parent ||
            event.origin !== window.location.origin ||
            !data ||
            data.source !== HOST_SOURCE
          ) {
            return
          }

          if (data.type === 'output-print') {
            void runOutput('print')
            return
          }
          if (data.type === 'output-pdf') {
            void runOutput('pdf')
            return
          }
          if (data.type !== 'run' || hasStarted) {
            return
          }

          hasStarted = true
          resolvedUrls = {}
          document.body.innerHTML = ''
          ensureImportMap(data.version)
          post({ type: 'status', status: 'running' })
          var files = data.files || {}
          var entry = files['main.js'] !== undefined ? 'main.js' : 'main.ts'
          try {
            var mainUrl = resolveFile(entry, files)
            // 动态导入用户代码模块；顶层 await 由模块语义天然支持。
            new Function('return import(' + JSON.stringify(mainUrl) + ')')()
              .then(function () {
                var output = window.__pgOutput
                if (output) {
                  isOutputReady = true
                  post({
                    type: 'output-ready',
                    actions: {
                      pdf: typeof output.pdf === 'function',
                      print: typeof output.print === 'function',
                    },
                  })
                }
                post({ type: 'status', status: 'done' })
              })
              .catch(function (error) {
                console.error(error)
                post({ type: 'status', status: 'error' })
              })
          } catch (error) {
            console.error(error)
            post({ type: 'status', status: 'error' })
          }
        })

        post({ type: 'ready' })
      })()
    <\/script>
  </body>
</html>
`,L=`import { createDesigner } from '@printstack/print-studio'

import { batchCodesInput, buildBatchCodes } from './batch-codes'

const studio = createDesigner({ storage: false })
buildBatchCodes(studio)
const result = await studio.toHTML(batchCodesInput)
document.body.innerHTML = result.html
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(batchCodesInput)
    return pdf.blob
  },
  print: () => studio.print(batchCodesInput),
}
`,ae=`import { createDesigner } from '@printstack/print-studio'
import type { Designer } from '@printstack/print-studio'

export type BatchCodesInput = {
  assets: Array<{ name: string; assetNo: string; qrPayload: string }>
}

export const batchCodesInput: BatchCodesInput = {
  assets: Array.from({ length: 16 }, (_, i) => {
    return {
      name: \`资产 \${String(i + 1).padStart(3, '0')}\`,
      assetNo: \`ZC2026\${String(i + 1).padStart(4, '0')}\`,
      qrPayload: \`https://ams.example.com/asset/ZC2026\${String(i + 1).padStart(4, '0')}\`,
    }
  }),
}

/** 资产标签：二维码 + 一维码双码同排，grid 平铺、超页自动分页 */
export function buildBatchCodes(studio: Designer): void {
  studio.document.create() // 从空白文档开始搭建（默认打开的欢迎模板仅用于设计器试用）
  studio.document.rename('资产码标')
  const page = studio.page.active
  page.update({ name: '资产标签', width: 210, height: 297 })

  const card = page.elements.add({
    type: 'rect',
    x: 10,
    y: 10,
    width: 92,
    height: 34,
    props: { fill: '#ffffff', stroke: '#cccccc', strokeWidth: 0.3, radius: 2 },
  })
  const qrcode = page.elements.add({
    type: 'qrcode',
    x: 13,
    y: 14,
    width: 26,
    height: 26,
    props: { value: '{{ qrPayload }}', level: 'M', margin: 1 },
  })
  const name = page.elements.add({
    type: 'text',
    x: 44,
    y: 16,
    width: 55,
    height: 8,
    props: { text: '{{ name }}', fontSize: 10, fontWeight: '700' },
  })
  const barcode = page.elements.add({
    type: 'barcode',
    x: 44,
    y: 26,
    width: 55,
    height: 13,
    props: { value: '{{ assetNo }}', format: 'CODE128', displayValue: false },
  })

  const group = studio.repeatGroup.create({
    pageId: page.id,
    elementIds: [card.id, qrcode.id, name.id, barcode.id],
    name: '资产标签阵列',
    collection: 'assets',
    direction: 'grid',
    columns: 2,
    gapX: 4,
    gapY: 4,
    positionMode: 'flow',
  })
  if (!group) {
    throw new Error('循环区块创建失败')
  }
}

export async function renderBatchCodes(): Promise<string> {
  const studio = createDesigner({ storage: false })
  try {
    buildBatchCodes(studio)
    const { html } = await studio.toHTML(batchCodesInput)
    return html
  } finally {
    studio.dispose()
  }
}
`,R=`import { createDesigner } from '@printstack/print-studio'

import { downloadBlobs, exportShippingLabelsBatch } from './batch-pdf'
import {
  createShippingLabelDocument,
  shippingLabelInput,
} from './shipping-label'

const recipients = [
  {
    ...shippingLabelInput.customer,
    trackingNo: shippingLabelInput.order.trackingNo,
  },
  {
    address: '杭州市西湖区文一西路 96 号',
    name: '李先生',
    phone: '13900000000',
    trackingNo: 'SF102600119',
  },
]
const studio = createDesigner({
  initialDocument: createShippingLabelDocument(),
  storage: false,
})
const result = await studio.toHTML(shippingLabelInput)
const generate = document.createElement('button')

async function downloadBatch() {
  generate.disabled = true
  try {
    const results = await exportShippingLabelsBatch(recipients)
    downloadBlobs(results)
  } finally {
    generate.disabled = false
  }
}

document.body.innerHTML = result.html
generate.textContent = '生成并下载 PDF'
generate.onclick = downloadBatch
document.body.prepend(generate)
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(shippingLabelInput)
    return pdf.blob
  },
  print: () => studio.print(shippingLabelInput),
}
`,z=`import type { PdfResult, PrintDocument } from '@printstack/print-studio'

import { createDesigner } from '@printstack/print-studio'

import {
  createShippingLabelDocument,
  shippingLabelInput,
} from './shipping-label'

/** 批量导出：同一模板对多条数据逐份生成 PDF Blob */
export async function exportShippingLabelsBatch(
  recipients: Array<{
    name: string
    phone: string
    address: string
    trackingNo: string
  }>,
  template: PrintDocument = createShippingLabelDocument(),
): Promise<Array<{ file: string; result: PdfResult }>> {
  const studio = createDesigner({
    initialDocument: template,
    storage: false,
  })
  const results: Array<{ file: string; result: PdfResult }> = []
  try {
    for (const [index, recipient] of recipients.entries()) {
      const input = {
        order: { trackingNo: recipient.trackingNo },
        customer: {
          name: recipient.name,
          phone: recipient.phone,
          address: recipient.address,
        },
        items: shippingLabelInput.items,
      }
      const result = await studio.toPDF(input)
      results.push({ file: \`label-\${recipient.trackingNo}.pdf\`, result })
      console.log(
        \`第 \${index + 1} 份完成：\${result.blob.size} 字节，告警 \${result.warnings.length} 条\`,
      )
    }
    return results
  } finally {
    studio.dispose()
  }
}

export function downloadBlobs(
  results: Array<{ file: string; result: PdfResult }>,
): void {
  for (const { file, result } of results) {
    const url = URL.createObjectURL(result.blob)
    const link = document.createElement('a')
    link.href = url
    link.download = file
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
}
`,B=`import { createDesigner } from '@printstack/print-studio'

import { buildMultiPageReport, multiPageReportInput } from './multi-page-report'

const studio = createDesigner({ storage: false })
buildMultiPageReport(studio)
const result = await studio.toHTML(multiPageReportInput)
document.body.innerHTML = result.html
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(multiPageReportInput)
    return pdf.blob
  },
  print: () => studio.print(multiPageReportInput),
}
`,oe=`import { createDesigner } from '@printstack/print-studio'
import type { Designer } from '@printstack/print-studio'

export type MultiPageReportInput = {
  report: { title: string; period: string }
  rows: Array<{ date: string; channel: string; orders: number; amount: number }>
}

export const multiPageReportInput: MultiPageReportInput = {
  report: { title: '月度销售报表', period: '2026-01' },
  rows: Array.from({ length: 80 }, (_, i) => {
    return {
      date: \`2026-01-\${String((i % 31) + 1).padStart(2, '0')}\`,
      channel: ['门店', '线上', '分销'][i % 3]!,
      orders: (i % 17) + 4,
      amount: ((i % 23) + 3) * 100,
    }
  }),
}

/** 多页报表：跨页表格 + 每页小计 + 页码 */
export function buildMultiPageReport(studio: Designer): void {
  studio.document.create() // 从空白文档开始搭建（默认打开的欢迎模板仅用于设计器试用）
  studio.document.rename('销售报表')
  const page = studio.page.active
  page.update({
    name: '报表',
    width: 210,
    height: 297,
    margins: { top: 24, right: 12, bottom: 18, left: 12 },
  })

  // 页面模板：标题 + 页码
  const header = studio.template.create({ name: '报表页眉页脚' })
  header.page.update({
    width: 210,
    height: 297,
    margins: { top: 24, right: 12, bottom: 18, left: 12 },
  })
  header.page.elements.add({
    type: 'text',
    x: 12,
    y: 8,
    width: 186,
    height: 10,
    props: {
      text: '{{ report.title }}（{{ report.period }}）',
      fontSize: 15,
      fontWeight: '700',
    },
  })
  header.page.elements.add({
    type: 'text',
    x: 12,
    y: 284,
    width: 186,
    height: 7,
    props: {
      text: '第 {{ $document.pageNumber }} / {{ $document.pageCount }} 页',
      textAlign: 'center',
      fontSize: 9,
    },
  })
  studio.template.apply(header, [page])

  page.elements.add({
    type: 'table',
    x: 12,
    y: 34,
    width: 186,
    height: 245,
    bindings: { rows: 'rows' },
    props: {
      columns: [
        { title: '日期', bind: 'date', width: 3, align: 'left' },
        { title: '渠道', bind: 'channel', width: 2, align: 'left' },
        {
          title: '订单数',
          bind: 'orders',
          width: 2,
          align: 'right',
          bodyStyle: { align: 'right' },
          format: { type: 'number', digits: 0 },
        },
        {
          title: '金额',
          bind: 'amount',
          width: 3,
          align: 'right',
          bodyStyle: { align: 'right' },
          format: { type: 'thousand', digits: 2 },
        },
      ],
      rows: [],
      fontSize: 9,
      heightMode: 'auto',
      stripe: true,
      stripeColor: '#fafafa',
      borders: {
        mode: 'horizontal',
        outer: { color: '#999999', width: 0.2, style: 'solid' },
        inner: { color: '#dddddd', width: 0.15, style: 'solid' },
        headerBottom: { color: '#333333', width: 0.35, style: 'solid' },
      },
      pagination: {
        crossPage: true, // 跨页续排
        repeatHeader: true, // 延续页重复表头
        fixedRows: true,
        rowsPerPage: 24,
        fillEmptyRows: false,
        positionMode: 'flow',
      },
      summary: {
        enabled: true,
        position: 'bottom',
        scope: 'eachPage', // 每页小计
        columns: {
          '0': { type: 'text', text: '本页小计' },
          '2': { type: 'sum' },
          '3': { type: 'sum' },
        },
        style: { bold: true, background: '#f2f7ff' },
      },
    },
  })
}

export async function renderMultiPageReport(): Promise<string> {
  const studio = createDesigner({ storage: false })
  try {
    buildMultiPageReport(studio)
    const { html } = await studio.toHTML(multiPageReportInput)
    return html
  } finally {
    studio.dispose()
  }
}
`,se=`import { createDesigner } from '@printstack/print-studio'
import type { Designer, PrintDocument } from '@printstack/print-studio'

export const orderInput = {
  order: { number: 'SO-2026-001', customer: '示例客户' },
  items: Array.from({ length: 45 }, (_, index) => {
    return { name: \`商品 \${index + 1}\`, quantity: 2, amount: (index + 1) * 10 }
  }),
}

export function buildOrder(studio: Designer) {
  studio.document.create() // 从空白文档开始搭建（默认打开的欢迎模板仅用于设计器试用）
  studio.document.rename('订单与商品标签')
  const page = studio.page.active
  page.update({
    name: '订单',
    width: 210,
    height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })
  studio.dataSource.upsert({
    key: 'order',
    type: 'object',
    label: '订单',
    sampleData: orderInput.order,
    schema: [
      { name: 'number', type: 'string' },
      { name: 'customer', type: 'string' },
    ],
  })
  studio.dataSource.upsert({
    key: 'items',
    type: 'array',
    label: '商品明细',
    sampleData: orderInput.items.slice(0, 2),
    schema: [
      { name: 'name', type: 'string' },
      { name: 'quantity', type: 'number' },
      { name: 'amount', type: 'number' },
    ],
  })
  const stationery = studio.template.create({ name: '公司抬头与页码' })
  stationery.page.update({
    width: 210,
    height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })
  stationery.page.elements.add({
    type: 'text',
    x: 10,
    y: 8,
    width: 190,
    height: 10,
    props: { text: '示例公司 · {{ $document.documentName }}', fontSize: 16 },
  })
  stationery.page.elements.add({
    type: 'text',
    x: 10,
    y: 283,
    width: 190,
    height: 8,
    props: {
      text: '第 {{ $document.pageNumber }} / {{ $document.pageCount }} 页',
      textAlign: 'center',
      fontSize: 9,
    },
  })
  studio.template.apply(stationery, [page])
  page.elements.add({
    type: 'text',
    x: 10,
    y: 27,
    width: 190,
    height: 10,
    props: { text: '订单：{{ order.number }}    客户：{{ order.customer }}' },
  })
  const table = page.elements.add({
    type: 'table',
    x: 10,
    y: 42,
    width: 190,
    bindings: { rows: 'items' },
    props: {
      columns: [
        { title: '商品', bind: 'name', width: 3, align: 'left' },
        {
          title: '数量',
          bind: 'quantity',
          width: 1,
          align: 'right',
          bodyStyle: { align: 'right' },
        },
        {
          title: '金额',
          bind: 'amount',
          width: 2,
          align: 'right',
          bodyStyle: { align: 'right' },
          format: { type: 'number', digits: 2 },
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
        columns: { '0': { type: 'text', text: '合计' }, '2': { type: 'sum' } },
      },
    },
  })
  const signature = page.elements.add({
    type: 'text',
    x: 10,
    y: 70,
    width: 120,
    height: 12,
    props: { text: '收货人签字：____________' },
  })
  const follow = studio.followBlock.create({
    pageId: page.id,
    elementIds: [signature.id],
    target: { kind: 'element', id: table.id },
    gap: 5,
    name: '签收区域',
  })
  if (!follow) {
    throw new Error('签收区域创建失败')
  }
  const labelPage = studio.page.create({
    name: '商品标签',
    width: 210,
    height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })
  studio.template.apply(stationery, [labelPage])
  const label = labelPage.elements.add({
    type: 'text',
    x: 10,
    y: 30,
    width: 55,
    height: 20,
    props: {
      text: '商品：{{ name }}\\n数量：{{ quantity | number:0 }}',
      fontSize: 10,
    },
  })
  const labels = studio.repeatGroup.create({
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
  if (!labels) {
    throw new Error('标签循环区块创建失败')
  }
  studio.page.setActive(page)
  return {
    page,
    stationery,
    table,
    signature,
    follow,
    labelPage,
    label,
    labels,
  }
}

export function createOrderDocument(): PrintDocument {
  const studio = createDesigner({ storage: false })
  try {
    buildOrder(studio)
    return studio.document.data
  } finally {
    studio.dispose()
  }
}

export async function renderOrder() {
  const studio = createDesigner({
    initialDocument: createOrderDocument(),
    storage: false,
  })
  try {
    const html = await studio.toHTML(orderInput)
    const pdf = await studio.toPDF(orderInput)
    return { document: studio.document.data, html, pdf }
  } finally {
    studio.dispose()
  }
}
`,V=`import { createDesigner } from '@printstack/print-studio'

import { buildProductLabels, productLabelInput } from './product-label'

const studio = createDesigner({ storage: false })
buildProductLabels(studio)
const result = await studio.toHTML(productLabelInput)
document.body.innerHTML = result.html
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(productLabelInput)
    return pdf.blob
  },
  print: () => studio.print(productLabelInput),
}
`,H=`import { createDesigner } from '@printstack/print-studio'
import type { Designer } from '@printstack/print-studio'

export type ProductLabelInput = {
  items: Array<{
    name: string
    spec: string
    price: number
    barcode: string
  }>
}

export const productLabelInput: ProductLabelInput = {
  items: [
    {
      name: '热敏纸 80mm',
      spec: '80×60mm',
      price: 12.5,
      barcode: '6901234500001',
    },
    { name: '碳带', spec: '110×300m', price: 28, barcode: '6901234500002' },
    { name: '扫描枪', spec: 'HD-6621', price: 199, barcode: '6901234500003' },
    { name: '标签纸', spec: '60×40mm', price: 9.9, barcode: '6901234500004' },
    { name: '打印头', spec: '203dpi', price: 320, barcode: '6901234500005' },
    { name: '清洁卡', spec: 'ISO', price: 15, barcode: '6901234500006' },
  ],
}

/** 单枚标签：底框 + 品名规格 + 价格 + 条码，由循环区块 grid 平铺 */
export function buildLabelElements(studio: Designer, pageId: string): string[] {
  const page = studio.page.get(pageId)
  if (!page) {
    throw new Error('页面不存在')
  }
  const card = page.elements.add({
    type: 'rect',
    x: 10,
    y: 10,
    width: 60,
    height: 42,
    props: { fill: '#ffffff', stroke: '#cccccc', strokeWidth: 0.3, radius: 2 },
  })
  const name = page.elements.add({
    type: 'text',
    x: 12.5,
    y: 13,
    width: 55,
    height: 8,
    props: { text: '{{ name }}', fontSize: 9, fontWeight: '700' },
  })
  const spec = page.elements.add({
    type: 'text',
    x: 12.5,
    y: 21,
    width: 55,
    height: 6,
    props: { text: '规格：{{ spec }}', fontSize: 7, color: '#666666' },
  })
  const price = page.elements.add({
    type: 'text',
    x: 12.5,
    y: 27,
    width: 55,
    height: 8,
    props: { text: '¥{{ price | number:2 }}', fontSize: 11, fontWeight: '700' },
  })
  const code = page.elements.add({
    type: 'barcode',
    x: 15,
    y: 36,
    width: 50,
    height: 12,
    props: { value: '{{ barcode }}', format: 'CODE128', displayValue: false },
  })
  return [card.id, name.id, spec.id, price.id, code.id]
}

export function buildProductLabels(studio: Designer): void {
  studio.document.create() // 从空白文档开始搭建（默认打开的欢迎模板仅用于设计器试用）
  studio.document.rename('商品标签')
  const page = studio.page.active
  page.update({ name: '标签阵列', width: 210, height: 297 })

  const elementIds = buildLabelElements(studio, page.id)
  const group = studio.repeatGroup.create({
    pageId: page.id,
    elementIds,
    name: '商品标签阵列',
    collection: 'items',
    direction: 'grid',
    columns: 3,
    gapX: 2.5,
    gapY: 3,
    positionMode: 'flow',
  })
  if (!group) {
    throw new Error('循环区块创建失败')
  }
}

export async function renderProductLabels(): Promise<string> {
  const studio = createDesigner({ storage: false })
  try {
    buildProductLabels(studio)
    const { html, warnings } = await studio.toHTML(productLabelInput)
    console.log('商品标签告警：', warnings)
    return html
  } finally {
    studio.dispose()
  }
}
`,U=`import { createDesigner } from '@printstack/print-studio'

import { buildOrder, orderInput } from './order'

const studio = createDesigner({ storage: false })
buildOrder(studio)
const result = await studio.toHTML(orderInput)
document.body.innerHTML = result.html
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(orderInput)
    return pdf.blob
  },
  print: () => studio.print(orderInput),
}
`,W=`import { createDesigner } from '@printstack/print-studio'

import { buildShelfLabels, shelfLabelInput } from './shelf-label'

const studio = createDesigner({ storage: false })
buildShelfLabels(studio)
const result = await studio.toHTML(shelfLabelInput)
document.body.innerHTML = result.html
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(shelfLabelInput)
    return pdf.blob
  },
  print: () => studio.print(shelfLabelInput),
}
`,G=`import { createDesigner } from '@printstack/print-studio'
import type { Designer } from '@printstack/print-studio'

export type ShelfLabelInput = {
  zone: string
  shelf: string
  items: Array<{ name: string; location: string; code: string }>
}

export const shelfLabelInput: ShelfLabelInput = {
  zone: 'A',
  shelf: '03-2',
  items: [
    { name: '热敏纸 80mm', location: 'A-03-2-01', code: 'A03202600118' },
    { name: '碳带', location: 'A-03-2-02', code: 'A03202600119' },
    { name: '标签纸', location: 'A-03-2-03', code: 'A03202600120' },
  ],
}

/** 货架标签：区位标题 + 库位 + 一维码，vertical 逐条排布 */
export function buildShelfLabels(studio: Designer): void {
  studio.document.create() // 从空白文档开始搭建（默认打开的欢迎模板仅用于设计器试用）
  studio.document.rename('货架标签')
  const page = studio.page.active
  page.update({ name: '货架标签', width: 100, height: 150 })

  page.elements.add({
    type: 'text',
    x: 8,
    y: 8,
    width: 84,
    height: 12,
    props: {
      text: '{{ zone }} 区 · 货架 {{ shelf }}',
      fontSize: 14,
      fontWeight: '700',
    },
  })
  page.elements.add({
    type: 'line',
    x: 8,
    y: 24,
    width: 84,
    height: 0,
    points: [
      { x: 8, y: 24 },
      { x: 92, y: 24 },
    ],
    props: { color: '#333333', strokeWidth: 0.4 },
  })

  const name = page.elements.add({
    type: 'text',
    x: 10,
    y: 32,
    width: 60,
    height: 8,
    props: { text: '{{ name }}', fontSize: 9, fontWeight: '600' },
  })
  const location = page.elements.add({
    type: 'text',
    x: 10,
    y: 40,
    width: 60,
    height: 6,
    props: { text: '库位：{{ location }}', fontSize: 8, color: '#555555' },
  })
  const code = page.elements.add({
    type: 'barcode',
    x: 14,
    y: 48,
    width: 56,
    height: 14,
    props: {
      value: '{{ code }}',
      format: 'CODE128',
      displayValue: true,
      fontSize: 7,
    },
  })

  const group = studio.repeatGroup.create({
    pageId: page.id,
    elementIds: [name.id, location.id, code.id],
    name: '库位列表',
    collection: 'items',
    direction: 'vertical',
    positionMode: 'flow',
  })
  if (!group) {
    throw new Error('循环区块创建失败')
  }
}

export async function renderShelfLabels(): Promise<string> {
  const studio = createDesigner({ storage: false })
  try {
    buildShelfLabels(studio)
    const { html } = await studio.toHTML(shelfLabelInput)
    return html
  } finally {
    studio.dispose()
  }
}
`,K=`import { createDesigner } from '@printstack/print-studio'

import { buildShippingLabel, shippingLabelInput } from './shipping-label'

const studio = createDesigner({ storage: false })
buildShippingLabel(studio)
const result = await studio.toHTML(shippingLabelInput)
document.body.innerHTML = result.html
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(shippingLabelInput)
    return pdf.blob
  },
  print: () => studio.print(shippingLabelInput),
}
`,q=`import { createDesigner } from '@printstack/print-studio'
import type { Designer, PrintDocument } from '@printstack/print-studio'

export type ShippingLabelInput = {
  order: { trackingNo: string }
  customer: { name: string; phone: string; address: string }
  items: Array<{ name: string; quantity: number }>
}

export const shippingLabelInput: ShippingLabelInput = {
  order: { trackingNo: 'SF102600118' },
  customer: {
    name: '张女士',
    phone: '13800000000',
    address: '上海市浦东新区世纪大道 100 号',
  },
  items: [{ name: '热敏纸 80mm', quantity: 2 }],
}

/** 快递面单：100×150 热敏纸，宽>高不存在——竖版面单 */
export function buildShippingLabel(studio: Designer): void {
  studio.document.create() // 从空白文档开始搭建（默认打开的欢迎模板仅用于设计器试用）
  studio.document.rename('快递面单')
  const page = studio.page.active
  page.update({ name: '面单', width: 100, height: 150 })

  // 收寄件区
  page.elements.add({
    type: 'rect',
    x: 6,
    y: 6,
    width: 88,
    height: 60,
    props: { fill: '#ffffff', stroke: '#333333', strokeWidth: 0.4 },
  })
  page.elements.add({
    type: 'text',
    x: 10,
    y: 10,
    width: 80,
    height: 8,
    props: {
      text: '收件人：{{ customer.name }}  {{ customer.phone }}',
      fontSize: 10,
      fontWeight: '700',
    },
  })
  page.elements.add({
    type: 'text',
    x: 10,
    y: 20,
    width: 80,
    height: 16,
    props: {
      text: '地址：{{ customer.address }}',
      fontSize: 9,
      autoHeight: true,
    },
  })
  page.elements.add({
    type: 'line',
    x: 10,
    y: 38,
    width: 80,
    height: 0,
    points: [
      { x: 10, y: 38 },
      { x: 90, y: 38 },
    ],
    props: { color: '#333333', strokeWidth: 0.3, dash: 'dashed' },
  })
  page.elements.add({
    type: 'text',
    x: 10,
    y: 42,
    width: 80,
    height: 8,
    props: {
      text: '内件：{{ items[0].name }} × {{ items[0].quantity }}',
      fontSize: 9,
    },
  })

  // 运单条码与二维码
  page.elements.add({
    type: 'barcode',
    x: 12,
    y: 76,
    width: 76,
    height: 18,
    props: {
      value: '{{ order.trackingNo }}',
      format: 'CODE128',
      displayValue: true,
      fontSize: 9,
    },
  })
  page.elements.add({
    type: 'qrcode',
    x: 8,
    y: 104,
    width: 26,
    height: 26,
    props: { value: '{{ order.trackingNo }}', level: 'M' },
  })
  page.elements.add({
    type: 'text',
    x: 40,
    y: 112,
    width: 52,
    height: 10,
    props: { text: '运单号：{{ order.trackingNo }}', fontSize: 9 },
  })
}

export function createShippingLabelDocument(): PrintDocument {
  const studio = createDesigner({ storage: false })
  try {
    buildShippingLabel(studio)
    return studio.document.data
  } finally {
    studio.dispose()
  }
}

export async function renderShippingLabel(): Promise<string> {
  const studio = createDesigner({
    initialDocument: createShippingLabelDocument(),
    storage: false,
  })
  try {
    const { html } = await studio.toHTML(shippingLabelInput)
    return html
  } finally {
    studio.dispose()
  }
}
`,J=[{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

// 1. 创建实例。storage: false 表示不持久化到 localStorage
const studio = createDesigner({ storage: false })
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
`},id:`quick-start`,label:`快速开始：第一张模板`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const storageKey = 'print-studio:notice'

// 未传 initialDocument：默认打开内置欢迎模板（自洽、可直接试用）
const studio = createDesigner({
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
`},id:`workspace`,label:`设计器首例：挂载与保存`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '元素一览', width: 210, height: 297 })

  // 文本：支持内嵌表达式 {{ 路径 | 格式化:参数 }}
  page.elements.add({
    type: 'text',
    x: 10,
    y: 10,
    width: 190,
    height: 14,
    props: {
      text: '客户：{{ order.customer }}\\n金额：{{ order.amount | currency:¥:2 }}',
      fontSize: 12,
      autoHeight: true,
    },
  })

  // 矩形（可圆角）与椭圆
  page.elements.add({
    type: 'rect',
    x: 10,
    y: 40,
    width: 80,
    height: 30,
    props: { fill: '#f0f7ff', stroke: '#164b85', strokeWidth: 0.4, radius: 2 },
  })
  page.elements.add({
    type: 'ellipse',
    x: 100,
    y: 40,
    width: 40,
    height: 30,
    props: { stroke: '#333333', strokeWidth: 0.5, dash: 'dotted' },
  })

  // 线条：点驱动元素，points 是几何真身
  page.elements.add({
    type: 'line',
    x: 10,
    y: 80,
    width: 190,
    height: 0,
    points: [
      { x: 10, y: 80 },
      { x: 200, y: 80 },
    ],
    props: { color: '#333333', strokeWidth: 0.4, dash: 'dashed' },
  })

  // 一维条码（10 种码制）与二维码（L/M/Q/H 容错）
  page.elements.add({
    type: 'barcode',
    x: 10,
    y: 92,
    width: 70,
    height: 20,
    props: { value: 'SO-2026-001', format: 'CODE128', displayValue: true },
  })
  page.elements.add({
    type: 'qrcode',
    x: 100,
    y: 88,
    width: 26,
    height: 26,
    props: { value: 'https://example.com/order/SO-2026-001', level: 'M' },
  })

  // 表格：结构化绑定 rows + 跨页 + 合计行
  page.elements.add({
    type: 'table',
    x: 10,
    y: 128,
    width: 190,
    bindings: { rows: 'items' },
    props: {
      columns: [
        { title: '商品', bind: 'name', width: 3, align: 'left' },
        {
          title: '数量',
          bind: 'quantity',
          width: 1,
          align: 'right',
          bodyStyle: { align: 'right' },
        },
        {
          title: '金额',
          bind: 'amount',
          width: 2,
          align: 'right',
          bodyStyle: { align: 'right' },
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
          0: { type: 'text', text: '合计' },
          2: { type: 'sum' },
        },
      },
    },
  })

  const input = {
    order: { customer: '张女士', amount: 1280 },
    items: Array.from({ length: 45 }, (_, i) => {
      return {
        name: '商品 ' + (i + 1),
        quantity: 2,
        amount: (i + 1) * 10,
      }
    }),
  }
  const { html } = await studio.toHTML(input)
  document.body.innerHTML = html
  console.log('渲染页数:', document.querySelectorAll('[data-print-page]').length)
} finally {
  studio.dispose()
}
`},id:`elements`,label:`八种内置元素一览`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '客户通知单', width: 210, height: 297 })

  // 声明数据源：供设计器字段面板展示与示例数据回填
  studio.dataSource.upsert({
    key: 'customer',
    type: 'object',
    label: '客户信息',
    sampleData: { name: '张女士', phone: '13800000000' },
    schema: [
      { name: 'name', type: 'string', label: '姓名' },
      { name: 'phone', type: 'string', label: '电话' },
    ],
  })
  studio.dataSource.upsert({
    key: 'order',
    type: 'object',
    label: '订单信息',
    sampleData: { amount: 1280 },
    schema: [{ name: 'amount', type: 'number', label: '金额' }],
  })

  // 内嵌表达式：字符串内多个 {{ 路径 | 格式化:参数 }} 片段
  page.elements.add({
    type: 'text',
    x: 15,
    y: 30,
    width: 180,
    height: 70,
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
`},id:`data-binding`,label:`数据源与表达式绑定`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

// 实例与视图分离：mount 按需加载设计器视图（异步）
const studio = createDesigner({ storage: false })
try {
  studio.document.rename('挂载设计器')
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '首页', width: 210, height: 297 })
  page.elements.add({
    type: 'text',
    x: 20,
    y: 30,
    width: 170,
    height: 14,
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
`},id:`mount-designer`,label:`挂载可视化设计器`},{files:{"main.js":`import { createPrinter, deserializeDocument } from '@printstack/print-studio'

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
          x: 8,
          y: 10,
          width: 84,
          height: 12,
          props: {
            text: '{{ zone }} 区 · 货架 {{ shelf }}',
            fontSize: 13,
            fontWeight: '700',
          },
        },
        {
          id: 'el-code',
          type: 'barcode',
          x: 15,
          y: 30,
          width: 70,
          height: 20,
          props: { value: '{{ code }}', format: 'CODE128', displayValue: true },
        },
      ],
    },
  ],
}
const input = { zone: 'A', shelf: '03-2', code: 'A03202600118' }

// HTML 直接渲染到预览区（不触发下载）
const htmlRenderer = createPrinter({ rendering: { worker: false } })
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
  const renderer = createPrinter({ rendering: { worker: false } })
  try {
    const { document: template } = deserializeDocument(templateSource, renderer.elements)
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
`},id:`renderer`,label:`纯输出渲染与 PDF 导出`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ name: '面单', width: 100, height: 150 })

  page.elements.add({
    type: 'text',
    x: 8,
    y: 10,
    width: 84,
    height: 12,
    props: { text: '收件人：{{ customer.name }}', fontSize: 12, fontWeight: '700' },
  })
  page.elements.add({
    type: 'text',
    x: 8,
    y: 26,
    width: 84,
    height: 24,
    props: { text: '地址：{{ customer.address }}', fontSize: 9, autoHeight: true },
  })
  page.elements.add({
    type: 'qrcode',
    x: 8,
    y: 60,
    width: 24,
    height: 24,
    props: { value: '{{ customer.trackingNo }}', level: 'M' },
  })
  page.elements.add({
    type: 'text',
    x: 8,
    y: 88,
    width: 84,
    height: 8,
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
`},id:`batch-export`,label:`批量打印与批量导出`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })
// 搭建模板与数据源；preview() 对注入数据后的输出效果进行预览，不落纸
studio.document.rename('收款收据')
studio.document.create()
const page = studio.page.active
page.update({ name: '收款收据', width: 210, height: 297 })
studio.dataSource.upsert({
  key: 'customer',
    type: 'object',
  label: '客户信息',
  sampleData: { name: '张女士', amount: 1280 },
  schema: [
    { name: 'name', type: 'string', label: '姓名' },
    { name: 'amount', type: 'number', label: '金额' },
  ],
})
page.elements.add({
  type: 'text',
  x: 15,
  y: 20,
  width: 180,
  height: 40,
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
`},id:`preview`,label:`打印预览：两种模式`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })
studio.document.rename('快递面单')
studio.document.create()
const page = studio.page.active
page.update({ name: '面单', width: 100, height: 150 })
page.elements.add({
  type: 'text',
  x: 8,
  y: 10,
  width: 84,
  height: 12,
  props: { text: '客户：{{ customer.name }}', fontSize: 12, fontWeight: '700' },
})
page.elements.add({
  type: 'text',
  x: 8,
  y: 26,
  width: 84,
  height: 8,
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
      '打印任务已提交（resolve）；告警',
      warnings.length,
      '条。是否出纸由浏览器对话框决定',
    )
  } finally {
    button.disabled = false
  }
}
document.body.append(button)
console.log('点击按钮调起浏览器打印对话框；打印预览请用 studio.preview()')
`},id:`print`,label:`浏览器打印`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })
try {
  studio.document.rename('客户通知单')
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ width: 210, height: 297, name: '通知单' })
  page.elements.add({
    type: 'text',
    x: 20,
    y: 30,
    width: 170,
    height: 20,
    props: { text: '尊敬的 {{ customer.name }}，您的订单已发货。', fontSize: 14 },
  })

  const result = await studio.toHTML({ customer: { name: '张女士' } })
  document.body.innerHTML = result.html
  console.log('HTML 已生成；告警', result.warnings.length, '条')
  console.log('模板 JSON 长度:', studio.export.json().length, '字符')
} finally {
  studio.dispose()
}
`},id:`code-first`,label:`生成客户通知单`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

// —— 页面与元素操作 ——
const pages = createDesigner({ storage: false })
try {
  pages.document.rename('配送单')
  const page = pages.page.create({
    name: '80mm 小票',
    width: 80,
    height: 200,
    background: '#ffffff',
    margins: { top: 5, right: 5, bottom: 5, left: 5 },
  })
  pages.page.setActive(page)
  const title = page.elements.add({
    type: 'text',
    x: 5,
    y: 5,
    width: 70,
    height: 10,
    props: { text: '配送单', fontSize: 16, textAlign: 'center' },
  })
  title.update({ x: 8, width: 64 }) // 实体句柄直接 update
  page.elements.updateProps(title, { text: '配送单（客户联）' })
  page.elements.rename(title, '标题')
  const duplicate = pages.page.duplicate(page)
  if (duplicate) {
    duplicate.update({ name: '存根联', background: '#fffdf5' })
    pages.page.remove(duplicate)
  }
  const json = pages.export.json()
  pages.document.loadJson(json) // 导出与导入往返校验
  console.log('页面与元素操作完成，模板 JSON 长度:', json.length, '字符')
} finally {
  pages.dispose()
}

// —— 选区与批量排版 ——
const studio = createDesigner({ storage: false })
try {
  const page = studio.page.active
  const titles = [20, 50, 85].map((y) => {
    return page.elements.add({ type: 'text', x: 10, y, width: 60 })
  })
  studio.page.setActive(page)
  studio.selection.set(titles)
  studio.edit.align('left') // 选区左对齐
  studio.edit.distribute('vcenter') // 纵向等距分布
  studio.edit.nudge(2, 0) // 整体微调位移
  studio.edit.sendTo('front') // 置于顶层
  studio.edit.copy()
  const target = studio.page.create({ name: '复制目标页' })
  studio.page.setActive(target)
  studio.edit.paste()
  studio.edit.duplicate()
  studio.edit.cut()
  studio.edit.paste()
  studio.edit.delete()
  studio.selection.all()
  console.log('全选元素数:', studio.selection.ids.length)
  studio.selection.clear()
} finally {
  studio.dispose()
}
`},id:`studio`,label:`页面与元素操作`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const storageKey = 'print-studio:binding'
const bindingInput = {
  order: { number: 'SO-002', amount: 98, customer: { name: '李先生' } },
  items: [{ name: '纸张' }, { name: '墨盒' }],
}

const studio = createDesigner({
  storage: {
    get() {
      return localStorage.getItem(storageKey)
    },
    set(json) {
      localStorage.setItem(storageKey, json)
    },
  },
  async onSave(document) {
    localStorage.setItem(storageKey, JSON.stringify(document))
  },
})
try {
  studio.document.create() // 从空白文档开始搭建
  // 声明数据源：供设计器字段面板展示与示例数据回填
  studio.dataSource.upsert({
    key: 'order',
    type: 'object',
    label: '订单',
    description: '打印输入中的 order 对象',
    schema: [
      { name: 'number', type: 'string' },
      { name: 'amount', type: 'number' },
      {
        name: 'customer',
        type: 'object',
        children: [{ name: 'name', type: 'string' }],
      },
    ],
    sampleData: { number: 'SO-001', amount: 1280, customer: { name: '张女士' } },
  })
  studio.dataSource.upsert({
    key: 'items',
    type: 'array',
    label: '明细',
    schema: [
      { name: 'name', type: 'string' },
    ],
    sampleData: [{ name: '纸张' }],
  })
  console.log('已配置数据源:', studio.dataSource.list.map((s) => s.key).join('、'))

  const page = studio.page.active
  page.update({ width: 210, height: 297 })
  // 表达式绑定：字符串内多个 {{ 路径 | 格式化:参数 }} 片段
  const text = page.elements.add({
    type: 'text',
    x: 10,
    y: 20,
    width: 180,
    height: 30,
    props: {
      text:
        '订单：{{ order.number }}\\n客户：{{ order.customer.name }}\\n' +
        '金额：{{ order.amount | currency:¥:2 }}',
      autoHeight: true,
    },
  })
  // 表格行绑定：bindings.rows 指向数据源数组
  const table = page.elements.add({
    type: 'table',
    x: 10,
    y: 60,
    width: 180,
    bindings: { rows: 'items' },
    props: {
      columns: [{ title: '商品', bind: 'name', width: 1, align: 'left' }],
      rows: [],
    },
  })

  const sample = await studio.export.html() // 缺省用数据源 sampleData 回填
  const real = await studio.export.html(bindingInput) // 传入真实数据求值
  document.body.innerHTML = real.html
  console.log(
    '示例数据告警',
    sample.warnings.length,
    '条；真实数据告警',
    real.warnings.length,
    '条',
  )

  // 解绑对比：同一元素也可以退回固定内容 + 静态行
  page.elements.updateProps(text, { text: '固定说明，不使用业务绑定' })
  page.elements.update(table, { bindings: {} })
  page.elements.updateProps(table, { rows: [['纸张'], ['墨盒']] })

  await studio.document.save()
  studio.document.loadJson(localStorage.getItem(storageKey))
  console.log('已保存并重新加载，页面数:', studio.page.list.length)
} finally {
  studio.dispose()
}
`},id:`document`,label:`数据源与绑定`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

// —— 页面模板与奇偶页 ——
const booklet = createDesigner({ storage: false })
try {
  booklet.document.create() // 从空白文档开始搭建
  const page = booklet.page.active
  const footer = booklet.template.create({ name: '公司页脚' })
  footer.page.update({ width: 210, height: 297 })
  footer.page.elements.add({
    type: 'text',
    x: 10,
    y: 282,
    width: 190,
    height: 8,
    props: { text: '{{ $document.pageNumber }} / {{ $document.pageCount }}' },
  })
  // 模板继承：双面报告基于页脚模板，奇偶页边距镜像
  const report = booklet.template.create({ name: '双面报告' })
  report.update({
    baseTemplateId: footer.id,
    facingPages: true,
    background: '#ffffff',
  })
  report.page.update({
    width: 210,
    height: 297,
    margins: { top: 25, right: 15, bottom: 20, left: 20 },
  })
  report.page.elements.add({
    type: 'text',
    x: 20,
    y: 10,
    width: 170,
    props: { text: '报告 · 奇数页' },
  })
  const evenPage = report.evenPage
  if (evenPage) {
    evenPage.update({ margins: { top: 25, right: 20, bottom: 20, left: 15 } })
    evenPage.elements.add({
      type: 'text',
      x: 15,
      y: 10,
      width: 170,
      props: { text: '报告 · 偶数页', textAlign: 'right' },
    })
  }
  const secondPage = booklet.page.create({ name: '第二页' })
  booklet.template.apply(report, [page, secondPage])
  console.log(
    '模板列表:',
    booklet.template.list.map((t) => t.data?.name).join('、'),
    '；并应用到 2 个页面',
  )
  const { html } = await booklet.toHTML({})
  document.body.innerHTML = html
  console.log('双面报告渲染页数:', document.querySelectorAll('[data-print-page]').length)
} finally {
  booklet.dispose()
}

// —— 循环标签与跟随链 ——
const studio = createDesigner({ storage: false })
try {
  const page = studio.page.active
  page.update({ margins: { top: 15, right: 10, bottom: 15, left: 10 } })
  const label = page.elements.add({
    type: 'text',
    x: 10,
    y: 20,
    width: 55,
    height: 18,
    props: { text: '{{ name }}\\n{{ price | currency:¥:2 }}' },
  })
  const code = page.elements.add({
    type: 'qrcode',
    x: 10,
    y: 40,
    width: 18,
    height: 18,
    props: { value: '{{ url }}' },
  })
  // 循环区块：grid 网格平铺，超页自动分页
  const repeat = studio.repeatGroup.create({
    pageId: page.id,
    elementIds: [label.id, code.id],
    collection: 'items',
    name: '标签',
    direction: 'grid',
    columns: 3,
    gapX: 5,
    gapY: 4,
    positionMode: 'flow',
  })
  if (!repeat) {
    throw new Error('标签创建失败')
  }
  // 跟随链：批次信息跟随循环区块，签字区域再跟随批次信息
  const total = page.elements.add({
    type: 'text',
    x: 10,
    y: 80,
    width: 150,
    props: { text: '本批次：{{ batch.number }}' },
  })
  const summary = studio.followBlock.create({
    pageId: page.id,
    elementIds: [total.id],
    target: { kind: 'repeatGroup', id: repeat.id },
    gap: 5,
    name: '批次信息',
  })
  if (!summary) {
    throw new Error('批次信息创建失败')
  }
  const signature = page.elements.add({
    type: 'text',
    x: 10,
    y: 100,
    width: 150,
    props: { text: '经办人：____________' },
  })
  const finalBlock = studio.followBlock.create({
    pageId: page.id,
    elementIds: [signature.id],
    target: { kind: 'followBlock', id: summary.id },
    gap: 8,
  })
  if (!finalBlock) {
    throw new Error('签字区域创建失败')
  }
  repeat.update({ columns: 2, gapX: 10 }) // 区块参数可随时调整
  summary.update({ name: '批次与合计', gap: 6 })

  const input = {
    batch: { number: 'B-2026-018' },
    items: Array.from({ length: 12 }, (_, i) => {
      return {
        name: '商品 ' + (i + 1),
        price: (i + 1) * 15,
        url: 'https://example.com/item/' + (i + 1),
      }
    }),
  }
  const { html, warnings } = await studio.toHTML(input)
  document.body.innerHTML = html
  console.log('标签平铺完成；告警', warnings.length, '条')
} finally {
  studio.dispose()
}
`},id:`layout`,label:`页面模板与循环标签`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const input = {
  order: { number: 'SO-2026-001', customer: '示例客户' },
  items: Array.from({ length: 45 }, (_, i) => {
    return {
      name: '商品 ' + (i + 1),
      quantity: 2,
      amount: (i + 1) * 10,
    }
  }),
}

const studio = createDesigner({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  studio.document.rename('订单与商品标签')
  const page = studio.page.active
  page.update({
    name: '订单',
    width: 210,
    height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })

  // 数据源声明（供设计器字段面板与示例回填）
  studio.dataSource.upsert({
    key: 'order',
    type: 'object',
    label: '订单',
    sampleData: input.order,
    schema: [
      { name: 'number', type: 'string' },
      { name: 'customer', type: 'string' },
    ],
  })
  studio.dataSource.upsert({
    key: 'items',
    type: 'array',
    label: '商品明细',
    sampleData: input.items.slice(0, 2),
    schema: [
      { name: 'name', type: 'string' },
      { name: 'quantity', type: 'number' },
      { name: 'amount', type: 'number' },
    ],
  })

  // 母版：公司抬头 + 页码
  const stationery = studio.template.create({ name: '公司抬头与页码' })
  stationery.page.update({
    width: 210,
    height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })
  stationery.page.elements.add({
    type: 'text',
    x: 10,
    y: 8,
    width: 190,
    height: 10,
    props: { text: '示例公司 · {{ $document.documentName }}', fontSize: 16 },
  })
  stationery.page.elements.add({
    type: 'text',
    x: 10,
    y: 283,
    width: 190,
    height: 8,
    props: {
      text: '第 {{ $document.pageNumber }} / {{ $document.pageCount }} 页',
      textAlign: 'center',
      fontSize: 9,
    },
  })
  studio.template.apply(stationery, [page])

  // 订单页：跨页明细表 + 合计行 + 跟随签收区
  page.elements.add({
    type: 'text',
    x: 10,
    y: 27,
    width: 190,
    height: 10,
    props: { text: '订单：{{ order.number }}    客户：{{ order.customer }}' },
  })
  const table = page.elements.add({
    type: 'table',
    x: 10,
    y: 42,
    width: 190,
    bindings: { rows: 'items' },
    props: {
      columns: [
        { title: '商品', bind: 'name', width: 3, align: 'left' },
        {
          title: '数量',
          bind: 'quantity',
          width: 1,
          align: 'right',
          bodyStyle: { align: 'right' },
        },
        {
          title: '金额',
          bind: 'amount',
          width: 2,
          align: 'right',
          bodyStyle: { align: 'right' },
          format: { type: 'number', digits: 2 },
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
        columns: { 0: { type: 'text', text: '合计' }, 2: { type: 'sum' } },
      },
    },
  })
  const signature = page.elements.add({
    type: 'text',
    x: 10,
    y: 70,
    width: 120,
    height: 12,
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
    width: 210,
    height: 297,
    margins: { top: 25, right: 10, bottom: 20, left: 10 },
  })
  studio.template.apply(stationery, [labelPage])
  const label = labelPage.elements.add({
    type: 'text',
    x: 10,
    y: 30,
    width: 55,
    height: 20,
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
  const { html, warnings } = await studio.toHTML(input)
  document.body.innerHTML = html
  console.log(
    '订单文档输出完成；页数:',
    document.querySelectorAll('[data-print-page]').length,
    '；告警',
    warnings.length,
    '条',
  )

  // PDF 导出由用户点击触发
  const button = document.createElement('button')
  button.textContent = '导出订单 PDF'
  button.style.cssText =
    'position:fixed;top:12px;right:12px;padding:8px 16px;cursor:pointer'
  button.onclick = async () => {
    button.disabled = true
    try {
      const { blob } = await studio.toPDF(input)
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'order.pdf'
      link.click()
      URL.revokeObjectURL(url)
      console.log('订单 PDF 已导出，体积:', blob.size, '字节')
    } finally {
      button.disabled = false
    }
  }
  document.body.append(button)
} catch (error) {
  studio.dispose()
  throw error
}
window.addEventListener('pagehide', () => studio.dispose(), { once: true })
`},id:`order`,label:`完整订单`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

// 边界数据场景：验证空数组、超长文本与跨页明细的输出表现
const scenarios = [
  {
    id: 'empty',
    label: '空数组',
    input: { customer: { name: '张女士' }, items: [] },
  },
  {
    id: 'long',
    label: '长文本',
    input: {
      customer: { name: '需要换行的客户名称'.repeat(12) },
      items: [{ name: '明细结束标记' }],
    },
  },
  {
    id: 'pages',
    label: '跨页明细',
    input: {
      customer: { name: '张女士' },
      items: Array.from({ length: 45 }, (_, i) => {
        return { name: '商品-' + (i + 1) }
      }),
    },
  },
]

const studio = createDesigner({ storage: false })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  studio.template.detach(page) // 摆脱欢迎模板的母版影响
  page.update({
    width: 100,
    height: 120,
    margins: { top: 10, right: 10, bottom: 10, left: 10 },
  })
  const image = page.elements.add({
    type: 'image',
    x: 80,
    y: 10,
    width: 10,
    height: 10,
    props: {
      src:
        'data:image/svg+xml;charset=utf-8,' +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#164b85"/></svg>',
        ),
      fit: 'contain',
    },
  })
  page.elements.add({
    type: 'text',
    x: 10,
    y: 10,
    width: 65,
    height: 30,
    props: { text: '客户：{{ customer.name }}', fontSize: 10 },
  })
  page.elements.add({
    type: 'table',
    x: 10,
    y: 45,
    width: 80,
    bindings: { rows: 'items' },
    props: {
      columns: [{ title: '商品名称', bind: 'name', width: 1 }],
      rows: [],
      heightMode: 'auto',
      pagination: {
        crossPage: true,
        repeatHeader: true,
        rowsPerPage: 8,
        fillEmptyRows: false,
        positionMode: 'flow',
      },
    },
  })

  // 输出容器与操作按钮分开：切换场景不会覆盖按钮
  const outputBox = document.createElement('div')
  outputBox.style.cssText =
    'position:fixed;inset:60px 12px 12px;overflow:auto;background:#fff'
  const bar = document.createElement('div')
  bar.style.cssText =
    'position:fixed;top:12px;left:12px;display:flex;gap:8px;z-index:2147483647'
  document.body.append(bar, outputBox)

  let currentInput = scenarios[2].input

  for (const scenario of scenarios) {
    const button = document.createElement('button')
    button.textContent = '输出：' + scenario.label
    button.style.cssText = 'padding:8px 12px;cursor:pointer'
    button.onclick = async () => {
      button.disabled = true
      try {
        currentInput = scenario.input
        const { html, warnings } = await studio.toHTML(scenario.input)
        outputBox.innerHTML = html
        console.log(
          '场景',
          scenario.label,
          '完成；页数:',
          outputBox.querySelectorAll('[data-print-page]').length,
          '；告警',
          warnings.length,
          '条',
        )
      } finally {
        button.disabled = false
      }
    }
    bar.append(button)
  }

  // PDF 导出由用户点击触发（当前选中的场景数据）
  const pdfButton = document.createElement('button')
  pdfButton.textContent = '导出当前场景 PDF'
  pdfButton.style.cssText = 'padding:8px 12px;cursor:pointer'
  pdfButton.onclick = async () => {
    pdfButton.disabled = true
    try {
      const { blob } = await studio.toPDF(currentInput)
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'output-case.pdf'
      link.click()
      URL.revokeObjectURL(url)
      console.log('PDF 已导出，体积:', blob.size, '字节')
    } finally {
      pdfButton.disabled = false
    }
  }
  bar.append(pdfButton)

  // 初始渲染跨页明细场景
  const { html } = await studio.toHTML(currentInput)
  outputBox.innerHTML = html
  console.log(
    '跨页明细页数:',
    outputBox.querySelectorAll('[data-print-page]').length,
    '；点击按钮切换数据场景',
  )
} catch (error) {
  studio.dispose()
  throw error
}
window.addEventListener('pagehide', () => studio.dispose(), { once: true })
`},id:`output`,label:`打印数据与分页`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })

// 日志面板：所有订阅回调把事件追加到这里
const log = document.createElement('pre')
log.style.cssText =
  'position:fixed;left:12px;right:12px;bottom:12px;top:60px;margin:0;' +
  'padding:10px;border:1px solid #ddd;border-radius:6px;background:#f8f8f8;' +
  'font-family:monospace;font-size:12px;overflow:auto;white-space:pre-wrap'
document.body.append(log)

function appendLog(line) {
  log.textContent = log.textContent ? log.textContent + '\\n' + line : line
}

// 命名事件订阅：回调收到领域负载
const offNamed = [
  studio.events.on('document:changed', () => {
    appendLog('document:changed 文档内容已变化')
  }),
  studio.events.on('history:changed', (state) => {
    appendLog('history:changed 可撤销 ' + state.canUndo + ' / 可重做 ' + state.canRedo)
  }),
  studio.events.on('page:added', ({ pageId }) => {
    appendLog('page:added ' + pageId)
  }),
]
// 通配订阅：只关心事件类型时使用
const offWildcard = studio.events.on('*', (type) => {
  appendLog('* ' + type)
})

// 演示按钮：操作触发事件，观察日志
const bar = document.createElement('div')
bar.style.cssText =
  'position:fixed;top:12px;left:12px;display:flex;gap:8px;z-index:2147483647'

function action(text, onClick) {
  const button = document.createElement('button')
  button.textContent = text
  button.style.cssText = 'padding:8px 14px;cursor:pointer'
  button.onclick = () => void onClick()
  bar.append(button)
}

action('新增页面', () => {
  studio.page.create({ name: '页面 ' + (studio.page.list.length + 1) })
})
action('添加文本', () => {
  const page = studio.page.active
  if (page) {
    page.elements.add({ type: 'text', x: 10, y: 10, width: 80, height: 12 })
  }
})
action('撤销', () => studio.history.undo())
action('清空日志', () => {
  log.textContent = ''
})
action('停止监听', () => {
  for (const off of offNamed) {
    off()
  }
  offWildcard()
  appendLog('已全部解除订阅，后续操作不再记录')
})

document.body.append(bar)
console.log('点击按钮触发事件；事件负载与解绑函数见控制台说明')
`},id:`events`,label:`事件日志`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })

// 挂载容器：需要有明确高度
const box = document.createElement('div')
box.style.cssText =
  'position:fixed;inset:60px 12px 12px;border:1px solid #ddd;border-radius:6px'
const bar = document.createElement('div')
bar.style.cssText =
  'position:fixed;top:12px;left:12px;display:flex;gap:8px;z-index:2147483647'

function action(text, onClick) {
  const button = document.createElement('button')
  button.textContent = text
  button.style.cssText = 'padding:8px 14px;cursor:pointer'
  button.onclick = () => void onClick()
  bar.append(button)
}

let mounted = false
let offState

action('挂载设计器', async () => {
  if (mounted) {
    return
  }
  mounted = true
  // mount 异步加载设计器视图；resolve 即界面与插件就绪
  await studio.mount({
    el: box,
    onDirtyChange(dirty) {
      console.log('未保存：', dirty)
    },
    onError(error) {
      console.error('设计器错误', error)
    },
  })
  console.log('设计器已挂载；控制台输出状态快照')
  // 订阅状态快照：activePageId / canUndo / dirty
  function renderState() {
    const state = studio.state.getSnapshot()
    console.log(
      '状态快照:',
      state.activePageId,
      'canUndo:',
      state.canUndo,
      'dirty:',
      state.dirty,
    )
  }
  offState = studio.state.subscribe(renderState)
  renderState()
  studio.document.rename('订单模板') // 修改文档触发 dirty 与快照更新
})
action('卸载', () => {
  if (!mounted) {
    return
  }
  offState?.()
  studio.unmount() // 只卸载视图，实例与文档保留
  mounted = false
  console.log('设计器已卸载')
})
action('销毁实例', () => {
  studio.dispose() // 联动 unmount，实例不可再用
  mounted = false
  console.log('实例已销毁')
})

document.body.append(bar, box)
console.log('点击「挂载设计器」在容器内挂载可视化设计器')
`},id:`mount`,label:`命令式挂载`},{files:{"main.js":`import {
  createDesigner,
  defineElement,
  DesignerException,
} from '@printstack/print-studio'

// 自定义元素定义与内置元素同构（框架无关）：属性、检视器、分页、HTML/PDF 渲染
function readCount(value, fallback, maximum) {
  const count = Number(value)
  if (!Number.isFinite(count)) {
    return fallback
  }
  return Math.min(maximum, Math.max(1, Math.floor(count)))
}
function bandColor(props) {
  return props.tone === 'green' ? '#167349' : '#164b85'
}

const paginatedBands = defineElement({
  type: 'business-bands',
  label: '分页色带',
  icon: 'rect',
  order: 110,
  defaultSize: { width: 60, height: 80 },
  createProps() {
    return { rows: 12, rowHeight: 10, tone: 'blue' }
  },
  inspectorSections: [
    {
      title: '色带内容',
      fields: [
        { key: 'rows', label: '色带数量', type: 'number', min: 1, max: 100, step: 1 },
        {
          key: 'rowHeight',
          label: '每条高度',
          type: 'number',
          min: 1,
          max: 30,
          unit: 'mm',
        },
        {
          key: 'tone',
          label: '配色',
          type: 'select',
          options: [
            { label: '蓝色', value: 'blue' },
            { label: '绿色', value: 'green' },
          ],
        },
      ],
    },
  ],
  // 分页钩子：超出页高的色带自动拆分到后续页
  paginate(ctx) {
    let remaining = readCount(ctx.props.rows, 12, 100)
    const rowHeight = readCount(ctx.props.rowHeight, 10, 30)
    const chunks = []
    while (remaining > 0) {
      const page = ctx.getPage?.(chunks.length) ?? ctx.page
      const top = page.margins?.top ?? 0
      const bottom = page.height - (page.margins?.bottom ?? 0)
      const y = chunks.length === 0 ? Math.max(top, ctx.node.y) : top
      const capacity = Math.floor((bottom - y) / rowHeight)
      if (capacity < 1) {
        throw new DesignerException('页面剩余高度不足以容纳一条色带')
      }
      const rows = Math.min(capacity, remaining)
      chunks.push({
        height: rows * rowHeight,
        y,
        props: { ...ctx.props, rows, rowHeight },
      })
      remaining -= rows
    }
    return chunks
  },
  toHtml(ctx) {
    const rows = readCount(ctx.props.rows, 12, 100)
    const height = readCount(ctx.props.rowHeight, 10, 30)
    const bands = Array.from({ length: rows }, () => {
      return (
        '<div style="height:' +
        height +
        'mm;box-sizing:border-box;border-bottom:1mm solid white;background:' +
        bandColor(ctx.props) +
        '"></div>'
      )
    })
    return '<div>' + bands.join('') + '</div>'
  },
  toPdf(ctx) {
    const rows = readCount(ctx.props.rows, 12, 100)
    const height = readCount(ctx.props.rowHeight, 10, 30)
    for (let i = 0; i < rows; i += 1) {
      ctx.draw.rect(ctx.node.x, ctx.node.y + i * height, ctx.node.width, height - 1, {
        fill: bandColor(ctx.props),
      })
    }
  },
})

// createDesigner 的 elements 选项与 useDesigner 一致：注册自定义元素
const studio = createDesigner({ storage: false, elements: [paginatedBands] })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({
    width: 100,
    height: 150,
    margins: { top: 8, right: 8, bottom: 8, left: 8 },
  })
  page.elements.add({
    type: 'business-bands',
    x: 8,
    y: 8,
    width: 84,
    props: { rows: 30, rowHeight: 6, tone: 'green' },
  })

  const { html, warnings } = await studio.toHTML({})
  document.body.innerHTML = html
  console.log('色带 HTML 输出完成；告警', warnings.length, '条')

  const button = document.createElement('button')
  button.textContent = '导出色带 PDF'
  button.style.cssText =
    'position:fixed;top:12px;right:12px;padding:8px 16px;cursor:pointer'
  button.onclick = async () => {
    button.disabled = true
    try {
      const { blob } = await studio.toPDF({})
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'bands.pdf'
      link.click()
      URL.revokeObjectURL(url)
      console.log('色带 PDF 已导出，体积:', blob.size, '字节')
    } finally {
      button.disabled = false
    }
  }
  document.body.append(button)
  console.log('自定义元素已注册；可用 studio.mount({ el }) 挂载设计器编辑它')
} catch (error) {
  studio.dispose()
  throw error
}
window.addEventListener('pagehide', () => studio.dispose(), { once: true })
`},id:`extension`,label:`分页色带与业务面板`},{files:{"main.js":`import { createDesigner, defineElement } from '@printstack/print-studio'

// 自定义元素：品牌色块（HTML 与 PDF 双渲染）
const brandBlock = defineElement({
  type: 'business-brand-block',
  label: '品牌色块',
  icon: 'rect',
  order: 100,
  defaultSize: { width: 40, height: 10 },
  createProps() {
    return {}
  },
  inspectorSections: [],
  toHtml() {
    return '<div style="width:100%;height:100%;background:#164b85"></div>'
  },
  toPdf(ctx) {
    ctx.draw.rect(ctx.node.x, ctx.node.y, ctx.node.width, ctx.node.height, {
      fill: '#164b85',
    })
  },
})

// 设计器插件：注入作用域命令（菜单分组 + 快捷键）
const alignLeftPlugin = {
  name: 'business:align-left',
  setup(ctx) {
    return ctx.commands.registerScoped([
      {
        id: 'business.alignLeft',
        title: '业务向左对齐',
        group: 'edit',
        order: 30,
        shortcut: 'Ctrl+Shift+L',
        enabled() {
          return ctx.getSelection().nodes.length > 0
        },
        run(context) {
          if (context.getSelection().nodes.length === 0) {
            return
          }
          context.store().element.align('left')
        },
      },
    ])
  },
}

const studio = createDesigner({ storage: false, elements: [brandBlock] })
try {
  studio.document.create() // 从空白文档开始搭建
  const page = studio.page.active
  page.update({ width: 210, height: 297 })
  page.elements.add({
    type: 'text',
    x: 20,
    y: 24,
    width: 120,
    height: 12,
    props: { text: '选中元素后按 Ctrl+Shift+L 业务向左对齐' },
  })
  page.elements.add({ type: brandBlock.type, x: 20, y: 60 })

  // 挂载设计器并注入插件；容器需要有明确高度
  const box = document.createElement('div')
  box.style.cssText = 'position:fixed;inset:12px;border:1px solid #ddd;border-radius:6px'
  document.body.append(box)
  await studio.mount({ el: box, plugins: [alignLeftPlugin] })
  console.log('设计器已挂载；左侧工具栏出现「品牌色块」，编辑菜单出现「业务向左对齐」')

  const button = document.createElement('button')
  button.textContent = '输出 HTML'
  button.style.cssText =
    'position:fixed;top:12px;right:12px;padding:8px 16px;cursor:pointer;z-index:2147483647'
  button.onclick = async () => {
    button.disabled = true
    try {
      const { html, warnings } = await studio.toHTML({})
      console.log(
        'HTML 已生成；告警',
        warnings.length,
        '条；品牌色块数:',
        (html.match(/#164b85/g) || []).length,
      )
    } catch (error) {
      await studio.errors.capture(error, { source: 'docs.customization' })
    } finally {
      button.disabled = false
    }
  }
  document.body.append(button)
} catch (error) {
  studio.dispose()
  throw error
}
window.addEventListener('pagehide', () => studio.dispose(), { once: true })
`},id:`customization`,label:`插件与自定义元素`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })

// 状态面板：读取 studio 查询属性并重绘（Vue 版用 computed，这里用 DOM 渲染）
const panel = document.createElement('div')
panel.style.cssText =
  'position:fixed;top:60px;right:12px;width:220px;padding:12px;' +
  'border:1px solid #ddd;border-radius:6px;background:#f8f8f8;' +
  'font-family:sans-serif;font-size:12px;line-height:1.8;z-index:2147483647'
const canvas = document.createElement('div')
canvas.style.cssText =
  'position:fixed;inset:12px 250px 12px 12px;border:1px solid #ddd;border-radius:6px'
document.body.append(canvas, panel)

function renderState() {
  const pageCount = studio.page.list.length
  const activePageName = studio.page.active?.data?.name || '未命名'
  const rows = [
    ['页面数', pageCount],
    ['当前页', activePageName],
    ['未保存', studio.document.dirty ? '是' : '否'],
    ['可撤销', studio.history.canUndo ? '是' : '否'],
    ['可重做', studio.history.canRedo ? '是' : '否'],
    ['选中元素', studio.selection.ids.length + ' 个'],
  ]
  panel.textContent = '工作区状态'
  const list = document.createElement('div')
  list.style.marginTop = '8px'
  for (const [key, value] of rows) {
    const row = document.createElement('div')
    row.style.cssText = 'display:flex;justify-content:space-between;gap:8px'
    const keyEl = document.createElement('span')
    keyEl.style.color = '#666'
    const valueEl = document.createElement('b')
    keyEl.textContent = key
    valueEl.textContent = String(value)
    row.append(keyEl, valueEl)
    list.append(row)
  }
  panel.append(list)
}

// 订阅状态与事件：任一变化后刷新面板
const offState = studio.state.subscribe(renderState)
const offEvents = studio.events.on('*', renderState)
renderState()

// 操作按钮：修改文档并观察面板实时更新
const bar = document.createElement('div')
bar.style.cssText =
  'position:fixed;top:12px;left:12px;display:flex;gap:8px;z-index:2147483647'

function action(text, onClick) {
  const button = document.createElement('button')
  button.textContent = text
  button.style.cssText = 'padding:8px 14px;cursor:pointer'
  button.onclick = () => void onClick()
  bar.append(button)
}

action('添加文本', () => {
  const page = studio.page.active
  if (page) {
    page.elements.add({ type: 'text', x: 30, y: 30, width: 100, height: 12 })
  }
})
action('撤销', () => studio.history.undo())
action('停止监听', () => {
  offState()
  offEvents()
  console.log('已停止监听，面板不再刷新')
})

document.body.append(bar)
console.log('添加文本 / 撤销后观察右侧状态面板的实时变化')
`},id:`state`,label:`设计器状态`},{files:{"main.js":`import {
  createErrorRuntime,
  createDesigner,
  DesignerException,
} from '@printstack/print-studio'

// —— 统一错误提示与记录 ——
// 错误运行时集中记录；addRule 把领域异常转换为用户提示
const errors = createErrorRuntime({
  report(event) {
    const message =
      event.error instanceof Error ? event.error.message : String(event.error)
    console.log('错误记录:', event.context.source, '←', message)
  },
})
const removeRule = errors.addRule(
  {
    match() {
      return true
    },
    handle(event) {
      console.log(
        '页面提示:',
        event.error instanceof DesignerException
          ? event.error.userMessage
          : '操作失败，请重试或联系管理员',
      )
      return { handled: true }
    },
  },
  { prepend: true },
)
const studio = createDesigner({ errors, storage: false })
try {
  try {
    studio.document.loadJson('{invalid json')
  } catch (error) {
    await errors.capture(error, { source: 'business.import' })
  }
  console.log('领域异常已转换为用户提示并记录；导入未完成，允许用户重新选择文件')
} finally {
  removeRule() // 规则可在任意时机移除
  studio.dispose()
}

// —— 输出告警不等于异常 ——
// 表达式缺数据时 toHTML 仍成功返回，警告挂在结果上
const preview = createDesigner({ storage: false })
try {
  const page = preview.page.active
  const notice = page.elements.add({
    type: 'text',
    x: 20,
    y: 20,
    width: 120,
    height: 12,
    props: { text: '您好，{{ customer.name }}' },
  })
  const result = await preview.toHTML({})
  document.body.innerHTML = result.html
  console.log('输出仍返回结果；告警', result.warnings.length, '条')
  for (const warning of result.warnings) {
    console.log('⚠', warning)
  }
  console.log('仅以 Promise 成功判断输出完整会漏掉以上提示')
} finally {
  preview.dispose()
}
`},id:`errors`,label:`错误与告警`},{files:{"main.js":V,"product-label.ts":H},id:`labels`,initialFile:`product-label.ts`,label:`商品标签`},{files:{"main.js":`import { createDesigner } from '@printstack/print-studio'

import { buildWarehouseOrder, warehouseOrderInput } from './warehouse-order'

const studio = createDesigner({ storage: false })
buildWarehouseOrder(studio)
const result = await studio.toHTML(warehouseOrderInput)
document.body.innerHTML = result.html
window.__pgOutput = {
  async pdf() {
    const pdf = await studio.toPDF(warehouseOrderInput)
    return pdf.blob
  },
  print: () => studio.print(warehouseOrderInput),
}
`,"warehouse-order.ts":`import { createDesigner } from '@printstack/print-studio'
import type { Designer } from '@printstack/print-studio'

export type WarehouseOrderInput = {
  order: { number: string; date: string; operator: string }
  items: Array<{
    name: string
    spec: string
    quantity: number
    operator: string
  }>
}

export const warehouseOrderInput: WarehouseOrderInput = {
  order: { number: 'CK-2026-0118', date: '2026-01-18', operator: '李明' },
  items: [
    { name: '热敏纸 80mm', spec: '80×60', quantity: 20, operator: '李明' },
    { name: '碳带', spec: '110×300', quantity: 5, operator: '李明' },
    { name: '扫描枪', spec: 'HD-6621', quantity: 2, operator: '王强' },
  ],
}

/** 出库单：固定 12 行 + 不足补空行，保证单据版式稳定（手写签字场景） */
export function buildWarehouseOrder(studio: Designer): void {
  studio.document.create() // 从空白文档开始搭建（默认打开的欢迎模板仅用于设计器试用）
  studio.document.rename('出库单')
  const page = studio.page.active
  page.update({
    name: '出库单',
    width: 210,
    height: 297,
    margins: { top: 20, right: 10, bottom: 15, left: 10 },
  })

  page.elements.add({
    type: 'text',
    x: 10,
    y: 22,
    width: 190,
    height: 10,
    props: {
      text: '出 库 单',
      fontSize: 16,
      fontWeight: '700',
      textAlign: 'center',
    },
  })
  page.elements.add({
    type: 'text',
    x: 10,
    y: 36,
    width: 190,
    height: 8,
    props: {
      text: '单号：{{ order.number }}    日期：{{ order.date }}    操作员：{{ order.operator }}',
      fontSize: 10,
    },
  })
  page.elements.add({
    type: 'line',
    x: 10,
    y: 46,
    width: 190,
    height: 0,
    points: [
      { x: 10, y: 46 },
      { x: 200, y: 46 },
    ],
    props: { color: '#333333', strokeWidth: 0.4 },
  })

  page.elements.add({
    type: 'table',
    x: 10,
    y: 50,
    width: 190,
    bindings: { rows: 'items' },
    props: {
      columns: [
        {
          title: '序号',
          rowNumber: true,
          width: 1,
          align: 'center',
          bodyStyle: { align: 'center' },
          format: { type: 'number', digits: 0 },
        },
        { title: '品名', bind: 'name', width: 4, align: 'left' },
        { title: '规格', bind: 'spec', width: 2, align: 'left' },
        {
          title: '数量',
          bind: 'quantity',
          width: 1,
          align: 'right',
          bodyStyle: { align: 'right' },
          format: { type: 'number', digits: 0 },
        },
        { title: '出库人', bind: 'operator', width: 2, align: 'left' },
      ],
      rows: [],
      fontSize: 10,
      minRowHeightMm: 7,
      heightMode: 'auto',
      headerVisible: true,
      headerBackground: '#edf3fa',
      pagination: {
        crossPage: false,
        rowsPerPage: 12,
        fillEmptyRows: true, // 不足 12 行自动补空白行
        positionMode: 'fixed',
      },
    },
  })

  page.elements.add({
    type: 'text',
    x: 10,
    y: 262,
    width: 190,
    height: 10,
    props: {
      text: '主管签字：____________          客户签字：____________',
      fontSize: 10,
    },
  })
}

export async function renderWarehouseOrder(): Promise<string> {
  const studio = createDesigner({ storage: false })
  try {
    buildWarehouseOrder(studio)
    const { html } = await studio.toHTML(warehouseOrderInput)
    return html
  } finally {
    studio.dispose()
  }
}
`},id:`table-fill`,initialFile:`warehouse-order.ts`,label:`出入库单`},{files:{"main.js":U,"order.ts":se},id:`order-full`,initialFile:`order.ts`,label:`销售订单`},{files:{"main.js":W,"shelf-label.ts":G},id:`shelf-label`,initialFile:`shelf-label.ts`,label:`仓库货架标签`},{files:{"main.js":K,"shipping-label.ts":q},id:`shipping-label`,initialFile:`shipping-label.ts`,label:`快递面单`},{files:{"batch-codes.ts":ae,"main.js":L},id:`batch-codes`,initialFile:`batch-codes.ts`,label:`二维码与条形码批量打印`},{files:{"main.js":B,"multi-page-report.ts":oe},id:`multi-page-report`,initialFile:`multi-page-report.ts`,label:`多页报表`},{files:{"batch-pdf.ts":z,"main.js":R,"shipping-label.ts":q},id:`batch-pdf`,initialFile:`batch-pdf.ts`,label:`PDF 批量导出`}];function ce(e){return J.find(t=>t.id===e)}function le(e){return new Worker(new URL(`editor-worker-CET2B_uC.js`,import.meta.url).href,{name:e?.name})}function ue(e){return new Worker(new URL(`ts-worker-BxoQHgd6.js`,import.meta.url).href,{name:e?.name})}var de=w(h({__name:`monaco-view`,props:{content:{},fileName:{},files:{},readonly:{type:Boolean}},emits:[`change`,`initializationError`,`ready`],setup(e,{emit:t}){let n=e,i=t,a=b(),o=null,s=null,c=new Map,u=[],f,p=!1,h=!1;function _(e){return e.endsWith(`.ts`)?`typescript`:e.endsWith(`.json`)?`json`:e.endsWith(`.html`)||e.endsWith(`.css`)?e.slice(e.lastIndexOf(`.`)+1):`javascript`}function v(){if(!o)throw Error(`Monaco is not initialized`);return o}function y(e){return v().Uri.parse(`file:///project/${e}`)}function x(e,t=n.content){let r=y(e),i=v().editor.getModel(r);return i||(i=v().editor.createModel(t,_(e),r),c.set(e,i)),i}function S(){if(s){h=!0;try{for(let[e,t]of Object.entries(n.files)){let n=x(e,t);n.getValue()!==t&&n.setValue(t)}let e=x(n.fileName);e.getValue()!==n.content&&e.setValue(n.content),s.setModel(e),s.updateOptions({readOnly:n.readonly??!1});for(let[e,t]of c)!Object.hasOwn(n.files,e)&&e!==n.fileName&&(t.dispose(),c.delete(e))}finally{h=!1}}}async function w(){let e=await C(()=>import(`./editor.main-DBUok3li.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);if(p)return;let t=self;t.MonacoEnvironment||={getWorker(e,t){return t===`typescript`||t===`javascript`?new ue:new le}};let{libDeclarations:r}=await C(async()=>{let{libDeclarations:e}=await import(`./lib-declarations-C7Zau589.js`);return{libDeclarations:e}},[],import.meta.url);if(p||!a.value)return;o=e;let c=o.languages.typescript;c.javascriptDefaults.setCompilerOptions({allowJs:!0,allowNonTsExtensions:!0,checkJs:!1,module:c.ModuleKind.ESNext,moduleResolution:c.ModuleResolutionKind.NodeJs,target:c.ScriptTarget.ES2020}),c.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,module:c.ModuleKind.ESNext,moduleResolution:c.ModuleResolutionKind.NodeJs,target:c.ScriptTarget.ES2020}),c.typescriptDefaults.setEagerModelSync(!0),c.javascriptDefaults.setEagerModelSync(!0);for(let{content:e,path:t}of r){let n=`file:///project/node_modules/@printstack/print-studio/${t}`;u.push(c.typescriptDefaults.addExtraLib(e,n)),u.push(c.javascriptDefaults.addExtraLib(e,n))}s=o.editor.create(a.value,{automaticLayout:!0,fontSize:13,minimap:{enabled:!1},model:x(n.fileName),padding:{top:10},readOnly:n.readonly??!1,scrollBeyondLastLine:!1,tabSize:2,theme:document.documentElement.classList.contains(`dark`)?`vs-dark`:`vs`}),S(),s.onDidChangeModelContent(()=>{if(h)return;let e=s?.getModel()?.getValue();e!==void 0&&i(`change`,e)}),f=new MutationObserver(()=>{v().editor.setTheme(document.documentElement.classList.contains(`dark`)?`vs-dark`:`vs`)}),f.observe(document.documentElement,{attributeFilter:[`class`],attributes:!0}),i(`ready`)}return r(()=>[n.files,n.fileName,n.content,n.readonly],S,{deep:!0}),d(async()=>{try{await w()}catch(e){p||i(`initializationError`,e)}}),m(()=>{p=!0,f?.disconnect(),s?.dispose();for(let e of u)e.dispose();for(let e of c.values())e.dispose();c.clear(),s=null,o=null}),(e,t)=>(g(),l(`div`,{ref_key:`container`,ref:a,"data-test-part":`pg-monaco`,class:`ps-pg-monaco`},null,512))}}),[[`__scopeId`,`data-v-1ca7165d`]]),fe=`print-studio-playground`,Y=`editor-projects`;function pe(){return new Promise((e,t)=>{let n=indexedDB.open(fe,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(Y)||e.createObjectStore(Y)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}function X(e,t){return pe().then(n=>new Promise((r,i)=>{let a=n.transaction(Y,e),o=t(a.objectStore(Y));o.onsuccess=()=>r(o.result),o.onerror=()=>i(o.error),a.oncomplete=()=>n.close()}))}async function me(e){try{return await X(`readonly`,t=>t.get(e))??null}catch{return null}}async function he(e,t){try{await X(`readwrite`,n=>n.put(t,e))}catch{}}async function ge(e){try{await X(`readwrite`,t=>t.delete(e))}catch{}}var Z=`main.js`,Q=`index.html`,$=`pg-editor`,_e=[`import { renderBatchCodes } from './batch-codes'

const result = await renderBatchCodes()
document.body.innerHTML = result
`,`import { buildBatchCodes, batchCodesInput } from './batch-codes'
import { mountBusinessCase } from './mount-business-case'

await mountBusinessCase(buildBatchCodes, batchCodesInput, {
  assets: [{ name: 'string', assetNo: 'string', qrPayload: 'string' }],
})
`],ve=0,ye=[Q];async function be(e){let t={};if(!Object.keys(e).some(e=>e.endsWith(`.ts`)))return{...e};let n=new Map,r=++ve;try{let i=await C(()=>import(`./editor.main-DBUok3li.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);for(let[a,o]of Object.entries(e)){if(!a.endsWith(`.ts`)){t[a]=o;continue}let e=i.Uri.file(`/pg-transpile/${r}/${a}`);n.set(a,i.editor.createModel(o,`typescript`,e))}await C(()=>import(`./tsMode-0dd7xdc0.js`),__vite__mapDeps([8,1,2,3,4,5,6]),import.meta.url);let a=await i.languages.typescript.getTypeScriptWorker();for(let[e,r]of n){let n=r.uri,i=(await xe(e,async()=>(await a(n)).getEmitOutput(n.toString()))).outputFiles.find(e=>e.name.endsWith(`.js`));if(!i)throw Error(`TypeScript 未生成 JavaScript：${e}`);let o=e.replace(/\.ts$/,`.js`);if(Object.hasOwn(t,o))throw Error(`TypeScript 输出文件名冲突：${o}`);t[o]=i.text}return t}finally{for(let e of n.values())e.dispose()}}async function xe(e,t){let n;try{return await Promise.race([t(),new Promise((t,r)=>{n=window.setTimeout(()=>{r(Error(`TypeScript 转译超时：${e}`))},15e3)})])}finally{window.clearTimeout(n)}}function Se(){let e=p({activeFile:Z,autoRun:!0,exampleId:`quick-start`,files:{},running:!1,sandboxFiles:{}}),t=f(()=>[...Object.keys(e.sandboxFiles),...Object.keys(e.files)].sort((t,n)=>t===e.activeFile?-1:n===e.activeFile?1:t===Q?-1:n===Q?1:t===Z?-1:n===Z?1:t.localeCompare(n))),n;v(()=>window.clearTimeout(n));function i(t){return ye.includes(t)||t in e.sandboxFiles}function a(){window.clearTimeout(n);let t=`${$}:${e.exampleId}`,r={activeFile:e.activeFile,files:{...e.files},savedAt:Date.now()};n=window.setTimeout(()=>{he(t,r)},500)}async function o(t,n=!1){let r=ce(t)??{files:{[Z]:`import { createDesigner } from '@printstack/print-studio'

const studio = createDesigner({ storage: false })
try {
  console.log('工作区已创建')
} finally {
  studio.dispose()
}
`},id:t,label:t},a=r.initialFile??Z;if(!n){let n=await me(`${$}:${t}`);if(n){e.exampleId=t,e.files=Object.fromEntries(Object.entries(n.files).filter(([e])=>!i(e))),t===`batch-codes`&&_e.includes(e.files[Z]?.replace(/\r\n/g,`
`))&&(e.files[Z]=r.files[Z]),Object.hasOwn(e.files,n.activeFile)?e.activeFile=n.activeFile:Object.hasOwn(e.files,a)?e.activeFile=a:e.activeFile=Z;return}}e.exampleId=t,e.files={...r.files},e.activeFile=a}function s(t,n){delete e.files[t],e.sandboxFiles[t]=n}function c(t,n){!i(t)&&t in e.files&&(e.files[t]=n,a())}function l(t){let n=t.trim();return!n||i(n)||n in e.files?!1:(e.files[n]=``,e.activeFile=n,a(),!0)}function u(t,n){let r=n.trim();if(!r||i(r)||i(t)||!(t in e.files)||r in e.files||t===Z)return!1;let o={};for(let[n,i]of Object.entries(e.files))o[n===t?r:n]=i;return e.files=o,e.activeFile===t&&(e.activeFile=r),a(),!0}function d(t){if(i(t)||t===Z||!(t in e.files))return!1;let n={...e.files};return delete n[t],e.files=n,e.activeFile===t&&(e.activeFile=Z),a(),!0}async function m(){window.clearTimeout(n),await ge(`${$}:${e.exampleId}`),await o(e.exampleId,!0)}async function h(){return be({...e.files})}function g(){r(()=>[e.files,e.activeFile],()=>a(),{deep:!0})}return{createFile:l,fileList:t,isReadOnly:i,loadExample:o,removeFile:d,renameFile:u,resetExample:m,runnableFiles:h,setSandboxFile:s,state:e,updateFile:c,watchPersist:g}}var Ce=[`src`],we=w(h({__name:`runner-frame`,emits:[`log`,`outputReady`,`pdf`,`status`],setup(e,{expose:t,emit:n}){let r=n,a=b(),o=b(0),s=null,c=!1,u=String(Date.now());function f(e){let t=e.data;if(c&&e.source===a.value?.contentWindow&&e.origin===window.location.origin&&t&&t.source===`runner`){if(t.type===`ready`){if(s){let e=s;s=null,_({files:e,type:`run`,version:u})}}else t.type===`log`?r(`log`,{level:t.level,text:t.args.join(` `),time:Date.now()}):t.type===`status`?r(`status`,t.status):t.type===`output-ready`?r(`outputReady`,{pdf:t.actions?.pdf===!0,print:t.actions?.print===!0}):t.type===`pdf-result`&&t.blob instanceof Blob&&r(`pdf`,t.blob)}}function p(){c=!1,s=null}function h(e){s=e,c=!0,o.value+=1}function _(e){a.value?.contentWindow?.postMessage({...e,source:`playground`},window.location.origin)}function v(){_({type:`output-pdf`})}function y(){_({type:`output-print`})}return t({exportPdf:v,invalidate:p,print:y,run:h}),d(()=>{window.addEventListener(`message`,f)}),m(()=>{window.removeEventListener(`message`,f)}),(e,t)=>(g(),l(`iframe`,{key:o.value,ref_key:`frame`,ref:a,src:`runner.html?g=${o.value}&v=${i(u)}`,title:`Playground 运行预览`,class:`ps-runner-frame`,sandbox:`allow-scripts allow-same-origin allow-modals allow-downloads allow-popups`},null,8,Ce))}}),[[`__scopeId`,`data-v-8a16df2b`]]),Te={class:`ps-pg-editor`},Ee={class:`ps-pg-editor__toolbar`},De={class:`ps-pg-editor__actions`},Oe={class:`ps-pg-editor__field`},ke=[`disabled`,`value`],Ae=[`value`],je=[`disabled`],Me={class:`ps-pg-editor__toggle`},Ne={class:`ps-pg-editor__layout`},Pe=[`data-active`],Fe=[`data-active`],Ie=[`data-active`],Le={class:`ps-pg-editor__files`},Re={class:`ps-pg-editor__file-list`},ze=[`data-active`],Be=[`onClick`],Ve={key:0,class:`ps-pg-editor__file-ops`},He=[`onClick`],Ue=[`onClick`],We={key:1,"data-test-part":`pg-editor__file-ro`,class:`ps-pg-editor__file-ro`,title:`沙盒文件（只读）`},Ge={"data-test-part":`pg-editor__code`,class:`ps-pg-editor__code`},Ke={class:`ps-pg-editor__preview`},qe={class:`ps-pg-editor__preview-body`},Je={key:0,class:`ps-pg-editor__floating-actions`},Ye=[`data-collapsed`],Xe={class:`ps-pg-editor__console-head`},Ze={key:0,class:`ps-pg-editor__badge`},Qe={class:`ps-pg-editor__console-arrow`},$e={class:`ps-pg-editor__console-body`},et={key:0,class:`ps-pg-editor__console-empty`},tt=w(h({__name:`editor-page`,setup(n){let a=new URLSearchParams(window.location.search),p=Se(),{state:h}=p,v=b(),x=b([]),C=b(0),w=b(a.get(`embed`)!==`1`),E=b(`split`),D=b(),O=b(!1),k=b(!1),A=b(),j=b(`idle`),M=b(!1),N=0,P,F=f(()=>h.files[h.activeFile]??h.sandboxFiles[h.activeFile]??``),ne=f(()=>p.isReadOnly(h.activeFile)),I=f(()=>h.running?`运行中…`:j.value===`error`?`运行出错`:j.value===`done`?`运行完成`:`待运行`);async function L(){if(!k.value||!O.value||M.value)return;window.clearTimeout(P);let e=++N;v.value?.invalidate(),Y(),A.value=void 0,z(`running`);try{let t=await p.runnableFiles();e===N&&v.value?.run(t)}catch(t){e===N&&H(t)}}function ae(){k.value=!0,O.value&&L()}function R(e){x.value.push(e),e.level===`error`&&(C.value+=1),x.value.length>500&&x.value.splice(0,x.value.length-500)}function z(e){h.running=e===`running`,j.value=e}async function B(e){if(!M.value){M.value=!0,window.clearTimeout(P),N+=1,v.value?.invalidate(),A.value=void 0,z(`running`);try{await e()}catch(e){H(e);return}finally{M.value=!1}await L()}}async function oe(){await B(p.resetExample)}async function se(e){let t=e.target.value;await B(()=>p.loadExample(t))}function V(e){A.value=e}function H(e){R({level:`error`,text:String(e),time:Date.now()}),z(`error`)}function U(){v.value?.print()}function W(){v.value?.exportPdf()}function G(e){te(e,`${h.exampleId}.pdf`)}function K(){navigator.clipboard.writeText(F.value)}function q(){let e=new Blob([F.value],{type:h.activeFile.endsWith(`.json`)?`application/json`:`text/javascript`});te(e,h.activeFile)}async function ce(e){let t=e.target,n=t.files?.[0];if(t.value=``,!n||p.isReadOnly(n.name))return;let r=await n.text(),i=n.name.replace(/[^\w.$-]/g,`_`);i in h.files||p.createFile(i),p.updateFile(i,r)}function le(){let e=window.prompt(`新文件名（支持 .js / .ts / .json）`,`utils.js`);e&&p.createFile(e)}function ue(e){let t=window.prompt(`重命名为`,e);t&&p.renameFile(e,t)}function fe(e){window.confirm(`删除文件 ${e}？`)&&p.removeFile(e)}function Y(){x.value=[],C.value=0}return re([{run:()=>void L(),shortcut:`Ctrl+Enter`}]),r(()=>JSON.stringify(h.files),()=>{h.autoRun&&O.value&&!M.value&&(window.clearTimeout(P),P=window.setTimeout(()=>void L(),1200))}),d(async()=>{let e=a.get(`example`)??`quick-start`;await p.loadExample(e),p.watchPersist(),O.value=!0,p.setSandboxFile(`index.html`,ie),k.value&&L()}),m(()=>{N+=1,window.clearTimeout(P)}),(n,r)=>(g(),l(`div`,Te,[c(`header`,Ee,[r[10]||=c(`div`,{class:`ps-pg-editor__brand`},[c(`span`,{class:`ps-pg-editor__logo`,"aria-hidden":`true`},`P`),c(`span`,{class:`ps-pg-editor__name`},`Print Studio Playground`)],-1),c(`div`,De,[c(`label`,Oe,[r[7]||=t(` 示例 `,-1),c(`select`,{class:`ps-pg-editor__select`,disabled:M.value,value:i(h).exampleId,onChange:se},[(g(!0),l(_,null,u(i(J),e=>(g(),l(`option`,{key:e.id,value:e.id},y(e.label),9,Ae))),128))],40,ke)]),c(`button`,{class:`ps-pg-editor__button ps-pg-editor__button--primary`,type:`button`,disabled:i(h).running||!k.value||M.value,onClick:L},[...r[8]||=[t(` ▶ 运行 `,-1),c(`kbd`,null,`Ctrl+↵`,-1)]],8,je),c(`label`,Me,[o(c(`input`,{"onUpdate:modelValue":r[0]||=e=>i(h).autoRun=e,type:`checkbox`},null,512),[[ee,i(h).autoRun]]),r[9]||=t(` 自动运行 `,-1)]),c(`button`,{class:`ps-pg-editor__button`,type:`button`,onClick:oe},` 重置 `),c(`button`,{class:`ps-pg-editor__button`,type:`button`,onClick:K},` 复制 `),c(`button`,{class:`ps-pg-editor__button`,type:`button`,onClick:r[1]||=e=>D.value?.click()},` 导入 `),c(`button`,{class:`ps-pg-editor__button`,type:`button`,onClick:q},` 导出 `),c(`input`,{ref_key:`fileInput`,ref:D,type:`file`,accept:`.js,.ts,.json,.txt`,hidden:``,onChange:ce},null,544),c(`div`,Ne,[c(`button`,{"data-active":E.value===`editor`,type:`button`,title:`仅编辑器`,onClick:r[2]||=e=>E.value=`editor`},` 代码 `,8,Pe),c(`button`,{"data-active":E.value===`split`,type:`button`,title:`分栏`,onClick:r[3]||=e=>E.value=`split`},` 分栏 `,8,Fe),c(`button`,{"data-active":E.value===`preview`,type:`button`,title:`仅预览`,onClick:r[4]||=e=>E.value=`preview`},` 预览 `,8,Ie)]),c(`span`,{"data-test-part":`pg-editor__status`,class:s([`ps-pg-editor__status`,`ps-pg-editor__status--${j.value}`])},y(I.value),3)])]),c(`div`,{class:s([`ps-pg-editor__main`,`ps-pg-editor__main--${E.value}`])},[c(`aside`,Le,[c(`div`,{class:`ps-pg-editor__files-head`},[r[11]||=c(`span`,null,`文件`,-1),c(`button`,{class:`ps-pg-editor__icon`,type:`button`,title:`新建文件`,onClick:le},` ＋ `)]),c(`ul`,Re,[(g(!0),l(_,null,u(i(p).fileList.value,e=>(g(),l(`li`,{key:e,"data-active":e===i(h).activeFile},[c(`button`,{class:`ps-pg-editor__file`,type:`button`,onClick:t=>i(h).activeFile=e},y(e),9,Be),!i(p).isReadOnly(e)&&e!==`main.js`?(g(),l(`span`,Ve,[c(`button`,{class:`ps-pg-editor__icon`,type:`button`,title:`重命名`,onClick:t=>ue(e)},` ✎ `,8,He),c(`button`,{class:`ps-pg-editor__icon`,type:`button`,title:`删除`,onClick:t=>fe(e)},` ✕ `,8,Ue)])):i(p).isReadOnly(e)?(g(),l(`span`,We,` 只读 `)):S(``,!0)],8,ze))),128))])]),o(c(`section`,Ge,[e(de,{"file-name":i(h).activeFile,files:i(h).files,content:F.value,readonly:ne.value,onInitializationError:H,onReady:ae,onChange:r[5]||=e=>i(p).updateFile(i(h).activeFile,e)},null,8,[`file-name`,`files`,`content`,`readonly`])],512),[[T,E.value!==`preview`]]),o(c(`section`,Ke,[r[12]||=c(`div`,{class:`ps-pg-editor__preview-head`},[c(`span`,null,`预览`)],-1),c(`div`,qe,[e(we,{ref_key:`runnerRef`,ref:v,onLog:R,onOutputReady:V,onPdf:G,onStatus:z},null,512),A.value?.print||A.value?.pdf?(g(),l(`div`,Je,[A.value?.print?(g(),l(`button`,{key:0,class:`ps-pg-editor__floating-button`,type:`button`,onClick:U},` 打印 `)):S(``,!0),A.value?.pdf?(g(),l(`button`,{key:1,class:`ps-pg-editor__floating-button`,type:`button`,onClick:W},` 导出 PDF `)):S(``,!0)])):S(``,!0)])],512),[[T,E.value!==`editor`]])],2),c(`footer`,{class:`ps-pg-editor__console`,"data-collapsed":!w.value},[c(`div`,Xe,[c(`button`,{class:`ps-pg-editor__console-toggle`,type:`button`,onClick:r[6]||=e=>w.value=!w.value},[r[13]||=t(` 控制台 `,-1),C.value>0?(g(),l(`span`,Ze,y(C.value),1)):S(``,!0),c(`span`,Qe,y(w.value?`▾`:`▸`),1)]),c(`button`,{class:`ps-pg-editor__button`,type:`button`,onClick:Y},` 清空 `)]),o(c(`div`,$e,[x.value.length===0?(g(),l(`div`,et,` 暂无日志。console 输出与运行错误将显示在这里。 `)):S(``,!0),(g(!0),l(_,null,u(x.value,(e,t)=>(g(),l(`div`,{key:t,"data-test-part":`pg-editor__log`,class:s([`ps-pg-editor__log`,`ps-pg-editor__log--${e.level}`])},y(e.text),3))),128))],512),[[T,w.value]])],8,Ye)]))}}),[[`__scopeId`,`data-v-30685cbd`]]);export{tt as default};