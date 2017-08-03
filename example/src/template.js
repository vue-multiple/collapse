export const sourcecodeA = `<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">默认</span>
  <vm-collapse v-model="activeNamesA">
    <vm-collapse-item title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </vm-collapse-item>
    <vm-collapse-item title="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </vm-collapse-item>
    <vm-collapse-item title="效率 Efficiency" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </vm-collapse-item>
    <vm-collapse-item title="可控 Controllability" name="4">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </vm-collapse-item>
  </vm-collapse>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">带边框</span>
  <vm-collapse class="vm-collapse--bordered" v-model="activeNamesB">
    ...
  </vm-collapse>
</div>

<script>
  export default {
    data () {
      return {
        activeNamesA: ['1'],
        activeNamesB: ['1']
      }
    }
  }
</script>`

export const sourcecodeB = `<vm-collapse v-model="activeNamesC" accordion>
  ...
</vm-collapse>

<script>
  export default {
    data () {
      return {
        activeNamesC: ['1']
      }
    }
  }
</script>`

export const sourcecodeC = `<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">默认模式下</span>
  <vm-collapse v-model="activeNamesD" transform>
    ...
  </vm-collapse>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">手风琴模式下</span>
  <vm-collapse v-model="activeNamesE" accordion transform>
    ...
  </vm-collapse>
</div>

<script>
  export default {
    data () {
      return {
        activeNamesD: ['1'],
        activeNamesE: ['1']
      }
    }
  }
</script>`

export const sourcecodeD = `<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">默认模式下</span>
  <vm-collapse v-model="activeNamesF" :remain="2">
    ...
  </vm-collapse>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">默认模式下（可关闭）</span>
  <vm-collapse v-model="activeNamesG" :remain="2" closable>
    ...
  </vm-collapse>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">手风琴模式下（<i class="vd-demo__new">无效</i>）</span>
  <vm-collapse v-model="activeNamesH" accordion :remain="2">
    ...
  </vm-collapse>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">变换模式下</span>
  <vm-collapse v-model="activeNamesI" transform :remain="2">
    ...
  </vm-collapse>
</div>

<script>
  export default {
    data () {
      return {
        activeNamesF: ['1'],
        activeNamesG: ['1'],
        activeNamesH: ['1'],
        activeNamesI: ['1']
      }
    }
  }
</script>`

export const sourcecodeE = `<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">自定义标题</span>
  <vm-collapse v-model="activeNamesF">
    <vm-collapse-item title="一致性 Consistency" name="1">
      <template slot="title">
        自定义标题
      </template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </vm-collapse-item>
    ...
  </vm-collapse>
</div>
<div class="vd-demo__block vd-demo__block-2">
  <span class="vd-demo__demonstration">自定义头部</span>
  <vm-collapse v-model="activeNamesF">
    <vm-collapse-item title="一致性 Consistency" name="1">
      <template slot="header">
        自定义头部
      </template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </vm-collapse-item>
    ...
  </vm-collapse>
</div>`