<template>
  <section class="json-content">
    <component
      :is="`v-${item.type}`"
      v-for="(item, index) in content"
      :key="index"
      :item="item"
      :reward="reward"
      v-bind="item.type === 'vote' ? {
        vote,
        slug
      } : ''"
    />
  </section>
</template>

<script>
import header from './parser/header'
import image from './parser/image'
import paragraph from './parser/paragraph'
import list from './parser/list'
import delimiter from './parser/delimiter'
import checklist from './parser/checklist'
import link from './parser/link'
import baidu from './parser/baidu'
import vote from './parser/vote'

export default {
  name: 'JsonContent',
  components: {
    'v-header': header,
    'v-image': image,
    'v-paragraph': paragraph,
    'v-list': list,
    'v-delimiter': delimiter,
    'v-checklist': checklist,
    'v-link': link,
    'v-baidu': baidu,
    'v-vote': vote
  },
  props: {
    content: {
      required: true,
      type: Array
    },
    reward: {
      type: Boolean,
      default: false
    },
    vote: {
      type: Array,
      default: () => []
    },
    slug: {
      type: String,
      default: ''
    }
  }
}
</script>
