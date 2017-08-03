<template>
  <div id="app">
    <demonstration
        tag="h2"
        title="Collapse 折叠面板"
        description="通过折叠面板收纳内容区域"
        :show-content="false">
    </demonstration>
    <demonstration
        title="真实案例"
        anchor="zhen-shi-an-li">
      <template slot="description">
        通过多个组件（<a href="https://github.com/vue-multiple/collapse">Collapse折叠面板</a>，<a
          href="https://github.com/vue-multiple/rate">Rate评分</a>，<a
          href="https://github.com/vue-multiple/tabs">Tabs标签页</a>）结合
      </template>
      <template slot="source">
        <best-rating :data="bestRatingData"></best-rating>
      </template>
    </demonstration>
    <demonstration
        description="可同时展开多个面板，面板之间不影响"
        anchor="ji-chu-yong-fa"
        :highlight="sourcecodeA"
        :multiple="true">
      <template slot="title">
        基础用法 <i class="vd-demo__new">（改进特性）</i>
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
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
      </template>
      <template slot="explanation">
        通过添加 <code>vm-collapse</code> 组件添加 <code>class="vm-collapse--bordered"</code> 来为组件添加边框。
      </template>
    </demonstration>
    <demonstration
        title="手风琴效果"
        anchor="shou-feng-qin-xiao-guo"
        :highlight="sourcecodeB"
        :multiple="true">
      <template slot="description">
        每次只能展开一个面板
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <vm-collapse v-model="activeNamesC" accordion>
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
      </template>
      <template slot="explanation">
        通过 <code>accordion</code> 属性来设置是否以手风琴模式显示。
      </template>
    </demonstration>
    <demonstration
        description="每次展开只显示内容，收缩只显示标题"
        anchor="bian-huan"
        :highlight="sourcecodeC"
        :multiple="true">
      <template slot="title">
        变换 <i class="vd-demo__new">（新增特性，新增示例）</i>
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration">默认模式下</span>
          <vm-collapse v-model="activeNamesD" transform>
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
          <span class="vd-demo__demonstration">手风琴模式下</span>
          <vm-collapse v-model="activeNamesE" accordion transform>
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
      </template>
      <template slot="explanation">
        通过 <code>transform</code> 属性来设置是否以变换模式显示。
      </template>
    </demonstration>
    <demonstration
        description="控制展开面板的数量"
        anchor="duo-ge-zhan-kai-mian-ban"
        :highlight="sourcecodeD"
        :multiple="true">
      <template slot="title">
        多个展开面板 <i class="vd-demo__new">（新增特性，新增示例）</i>
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration">默认模式下</span>
          <vm-collapse v-model="activeNamesF" :remain="2">
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
          <span class="vd-demo__demonstration">默认模式下（可关闭）</span>
          <vm-collapse v-model="activeNamesG" :remain="2" closable>
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
          <span class="vd-demo__demonstration">手风琴模式下（<i class="vd-demo__new">无效</i>）</span>
          <vm-collapse v-model="activeNamesH" accordion :remain="2">
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
          <span class="vd-demo__demonstration">变换模式下</span>
          <vm-collapse v-model="activeNamesI" transform :remain="2">
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
      </template>
      <template slot="explanation">
        通过 <code>remain</code> 属性来设置最多展开面板的数量，同时指定 <code>closable</code> 属性来设置是否可以关闭展开的面板。
      </template>
    </demonstration>
    <demonstration

        anchor="zi-ding-yi-mian-ban"
        :highlight="sourcecodeE"
        :multiple="true">
      <template slot="title">
        自定义面板 <i class="vd-demo__new">（改进特性，新增示例）</i>
      </template>
      <template slot="description">
        除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot="title"</code> 来实现自定义面板的标题内容，以实现增加图标等效果。还可以通过 具名 <code>slot="header" 来实现自定义面板的头部内容。</code>
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration">自定义标题</span>
          <vm-collapse v-model="activeNamesJ">
            <vm-collapse-item title="一致性 Consistency" name="1">
              <template slot="title">
                自定义标题
              </template>
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
          <span class="vd-demo__demonstration">自定义头部</span>
          <vm-collapse v-model="activeNamesK">
            <vm-collapse-item title="一致性 Consistency" name="1">
              <template slot="header">
                自定义头部
              </template>
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
      </template>
    </demonstration>
    <demonstration
        title="Collapse Attributes"
        anchor="collapse-attributes"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>accordion</td>
            <td>是否手风琴模式</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>transform <i class="vd-demo__new">（新增）</i></td>
            <td>是否变换模式</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>remain <i class="vd-demo__new">（新增）</i></td>
            <td>最多展开面板的数量</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>closable <i class="vd-demo__new">（新增）</i></td>
            <td>展开面板数量>=指定remain值是，被激活的面板是否可关闭</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>value</td>
            <td>当前激活的面板(如果是手风琴模式，绑定值类型需要为<code>string</code>，否则为<code>array</code>)</td>
            <td>string/array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
        title="Collapse Events"
        anchor="collapse-events"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>change</td>
            <td>当前激活面板改变时触发(如果是手风琴模式，参数 <code>activeNames</code> 类型为<code>string</code>，否则为<code>array</code>)</td>
            <td>(activeNames: array|string)</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
        title="Collapse Item Attributes"
        anchor="collapse-item-attributes"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>name</td>
            <td>唯一标志符</td>
            <td>string/number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>title</td>
            <td>面板标题</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
  </div>
</template>

<script type="es6">
  import { sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD, sourcecodeE } from './template'
  import BestRating from './best-rating.vue'
  const QINIU = 'http://ou3np01t6.bkt.clouddn.com/'
  
  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        activeNamesA: ['1'],
        activeNamesB: ['1'],
        activeNamesC: ['1'],
        activeNamesD: ['1'],
        activeNamesE: ['1'],
        activeNamesF: ['1'],
        activeNamesG: ['1'],
        activeNamesH: ['1'],
        activeNamesI: ['1'],
        activeNamesJ: ['1'],
        activeNamesK: ['1'],
        activeName: [1],
        bestRatingData: [
          {
            name: 'HOT',
            data: [
              {
                rank: 1,
                name: '哔哩哔哩',
                rate: 3,
                type: '影音播放',
                image: QINIU + 'hot_01.jpg'
              },
              {
                rank: 2,
                name: '墨迹天气',
                rate: 3,
                type: '生活服务',
                image: QINIU + 'hot_02.jpg'
              },
              {
                rank: 3,
                name: '卷皮折扣',
                rate: 3,
                type: '网络购物',
                image: QINIU + 'hot_03.jpg'
              },
              {
                rank: 4,
                name: '手机迅雷',
                rate: 3,
                type: '系统工具',
                image: QINIU + 'hot_04.jpg'
              },
              {
                rank: 5,
                name: '易到用车',
                rate: 3,
                type: '旅游出行',
                image: QINIU + 'hot_05.jpg'
              }
            ]
          },
          {
            name: '游戏',
            data: [
              {
                rank: 1,
                name: '王者荣耀',
                rate: 3,
                type: '动作游戏',
                image: QINIU + 'game_01.jpg'
              },
              {
                rank: 2,
                name: '我的世界手机版',
                rate: 4,
                type: '模拟经营',
                image: QINIU + 'game_02.jpg'
              },
              {
                rank: 3,
                name: '植物大战僵尸2',
                rate: 3,
                type: '修改版游戏',
                image: QINIU + 'game_03.jpg'
              },
              {
                rank: 4,
                name: '决战光明顶',
                rate: 2,
                type: '角色扮演',
                image: QINIU + 'game_04.jpg'
              },
              {
                rank: 5,
                name: '倩女幽魂',
                rate: 1,
                type: '角色扮演',
                image: QINIU + 'game_05.jpg'
              }
            ]
          },
          {
            name: '软件',
            data: [
              {
                rank: 1,
                name: '美拍',
                rate: 5,
                type: '摄影摄像',
                image: QINIU + 'app_01.jpg'
              },
              {
                rank: 2,
                name: '惠锁屏app',
                rate: 4,
                type: '主题美化',
                image: QINIU + 'app_02.jpg'
              },
              {
                rank: 3,
                name: '华尔街新闻',
                rate: 3,
                type: '网络浏览',
                image: QINIU + 'app_03.jpg'
              },
              {
                rank: 4,
                name: '连我line',
                rate: 2,
                type: '社交聊天',
                image: QINIU + 'app_04.jpg'
              },
              {
                rank: 5,
                name: 'Nice',
                rate: 1,
                type: '社交聊天',
                image: QINIU + 'app_05.jpg'
              }
            ],
          }
        ]
      }
    },
    components: {
      BestRating
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
    .vm-collapse {
      text-align: left;
    }
  }
</style>
