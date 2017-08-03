<template>
  <div class="best-rating">
    <vm-tabs title="最佳评价" navPosition="right" navItemPadding="15" :showMoreIcon="true">
      <vm-tab-pane :label="type.name" v-for="(type, i) in data" :key="type.name">
        <vm-collapse v-model="actionNames[i]" accordion transform :remain="1">
          <vm-collapse-item v-for="(item, index) in type.data" :name="item.rank" :key="item.rank">
            <template slot="header">
              <span class="best-rating__rank">{{item.rank}}</span>
              <span class="best-rating__name">{{item.name}}</span>
              <span class="best-rating__type">{{item.type}}</span>
            </template>
            <div class="best-rating__content">
              <span class="best-rating__rank">{{item.rank}}</span>
              <img :src="item.image" :alt="item.name">
              <div class="best-rating__content-right">
                <span class="best-rating__content__name">{{item.name}}</span>
                <vm-rate
                    v-model="item.rate"
                    :size="14"
                    :colors="['#31D29B', '#31D29B', '#31D29B']"
                    disabled-void-icon-class="vm-icon-star-empty"
                    disabled-void-color="#31D29B"
                    disabled></vm-rate>
                <span class="best-rating__content__type">{{item.type}}</span>
              </div>
              <button class="best-rating__download">立即下载</button>
            </div>
          </vm-collapse-item>
        </vm-collapse>
      </vm-tab-pane>
    </vm-tabs>
  </div>
</template>
<script>
  export default {
    props: {
      data: Array,
      default () {
        return []
      }
    },
    data () {
      return {
        actionNames: []
      }
    },
    created () {
      for (let i = 0; i < this.data.length; i++) {
        this.actionNames.push(this.data[i].data[0].rank)
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .best-rating {
    width: 392px;
    .vm-tabs__header {
      margin-bottom: 0;
    }
    .vm-collapse-item__header {
      height: 53px;
      padding-left: 0;
      line-height: 53px;
      border-bottom: 1px solid #E3E3E3;
      &:hover {
        .best-rating__name {
          color: #2DD09C;
        }
      }
    }
    .vm-collapse-item__wrap {
      background-color: white;
      border-bottom: 1px solid #E3E3E3;
    }
    .vm-collapse-item__content {
      padding: 0;
    }
    &__rank {
      display: inline-block;
      width: 20px;
      height: 20px;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: white;
      background-color: #2DD09C;
      border-radius: 50%;
    }
    &__name {
      margin-left: 16px;
      font-size: 14px;
      color: #2C3735;
      transition: color .3s;
    }
    &__type {
      float: right;
      font-size: 14px;
      color: #C5C5C5;
    }
    &__content {
      padding: 21px 0 22px;
      height: 135px;
      line-height: 1;
      font-size: 0;
      box-sizing: border-box;
      .best-rating__rank {
        float: left;
        display: block;
        margin-top: 36px;
      }
      img {
        float: left;
        display: block;
        margin-left: 16px;
      }
      &-right {
        float: left;
        margin-left: 20px;
      }
      &__name {
        display: inline-block;
        padding: 8px 0;
        font-size: 16px;
        color: #2C3735;
      }
      &__type {
        display: inline-block;
        padding-top: 28px;
        font-size: 14px;
        color: #C5C5C5;
      }
    }
    &__download {
      float: right;
      width: 98px;
      height: 30px;
      padding: 0;
      margin-top: 31px;
      line-height: 30px;
      font-size: 14px;
      font-weight: bold;
      color: white;
      text-align: center;
      background-color: #31D29B;
      border: 1px solid #31D29B;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
    }
  }
</style>