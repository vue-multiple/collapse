<template>
  <div class="vm-collapse-item" :class="{'is-active': isActive}">
    <div class="vm-collapse-item__header" @click="handleClick('header')" v-show="!transform || transform&&!isActive">
      <slot name="header">
        <i class="vm-collapse-item__header__arrow vm-collapse-icon--arrow-right"></i>
        <slot name="title">{{title}}</slot>
      </slot>
    </div>
    <vm-collapse-transition>
      <div class="vm-collapse-item__wrap" @click="handleClick('content')" v-show="isActive">
        <div class="vm-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </vm-collapse-transition>
  </div>
</template>
<script>
  import VmCollapseTransition from '../transitions/collapse-transition'

  export default {
    name: 'VmCollapseItem',

    componentName: 'VmCollapseItem',

    components: {
      'vm-collapse-transition': VmCollapseTransition
    },

    props: {
      title: String,
      name: {
        type: [String, Number],
        default () {
          return this._uid
        }
      }
    },

    computed: {
      isActive () {
        return this.$parent.activeNames.indexOf(this.name) > -1
      },
      transform () {
        let parent = this.findParentComponentByName('VmCollapse')
        return parent && parent.transform
      },
      remain () {
        let parent = this.findParentComponentByName('VmCollapse')
        return parent && parent.remain
      },
      closable () {
        let parent = this.findParentComponentByName('VmCollapse')
        return parent && parent.closable
      }
    },

    methods: {
      handleClick (block) {
        let expandQuantity = this.$parent.activeNames.length // 展开数量
        if (
          this.remain
          && expandQuantity >= this.remain
          && this.isActive
          && !this.closable
        ) return
        this.dispatch('VmCollapse', 'item-click', this)
      },
      dispatch (componentName, eventName, params) {
        let parent = this.findParentComponentByName(componentName)
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params))
        }
      },
      findParentComponentByName (componentName) {
        let parent = this.$parent || this.$root
        let name = parent.$options.componentName

        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent

          if (parent) {
            name = parent.$options.componentName
          }
        }

        return parent
      }
    }
  }
</script>
