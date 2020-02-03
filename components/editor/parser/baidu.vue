<style lang="scss" module>
.baidu {
  padding: 0.7em 0;

  .a {
    display: block;
    background-color: #fff;
    border: 1px solid rgba(201, 201, 204, 0.48);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 25px;
  }

  .logo {
    float: left;
    width: 65px;
    height: 65px;
    line-height: 70px;
    border-radius: 3px;
    background-color: #09aaff;
    color: #fff;
    font-weight: bold;
    font-style: normal;
    text-align: center;
    font-size: 40px;
    margin-right: 20px;
  }

  .content {
    overflow: hidden;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    .link {
      width: 100%;
    }
  }
}
</style>

<template>
  <div :class="$style.baidu">
    <div :class="$style.a">
      <i :class="$style.logo" class="iconfont ic-baidu-cloud" />
      <div v-copy="item.data.url" v-copy:callback="handleCopySuccess" :class="$style.content">
        <p :class="$style.link" class="oneline" v-text="item.data.url" />
        <p :class="$style.password">
          <template v-if="item.data.visit_type !== 0 && !reward">
            密码投食后可见
          </template>
          <template v-else>
            密码：{{ item.data.password }}
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { copy } from 'v-copy'

export default {
  name: 'JsonBaidu',
  directives: {
    copy
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    reward: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleCopySuccess() {
      this.$toast.info('链接已复制到剪切板')
    }
  }
}
</script>
