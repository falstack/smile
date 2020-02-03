<style lang="scss">
#pin-show {
  padding: 0 $page-padding;

  .title {
    color: $color-text-1;
    font-weight: 600;
    font-synthesis: style;
    font-size: 24px;
    line-height: 1.22;
    margin-top: 20px;
    margin-bottom: 10px;
    @extend %breakWord;
  }

  .state {
    font-size: 12px;
    margin-bottom: 10px;
    color: $color-text-3;
  }
}
</style>

<template>
  <div id="pin-show">
    <p v-if="title" class="title" v-text="title.text" />
    <div class="state">
      <template v-if="bangumi">
        <span @click="handleBangumiClick" v-text="bangumi.name" />
        <span class="dot">&nbsp;·&nbsp;</span>
      </template>
      <span v-text="$utils.timeAgo(published_at)" />
      <template v-if="visit_count">
        <span class="dot">&nbsp;·&nbsp;</span>
        <span v-text="`${$utils.shortenNumber(visit_count)}阅读`" />
      </template>
    </div>
    <JsonContent :slug="slug" :content="content" :reward="reward_status" :vote="vote_hash" />
  </div>
</template>

<script>
import JsonContent from '~/components/editor/JsonContent'

export default {
  name: 'PinShow',
  components: {
    JsonContent
  },
  asyncData({ app, error, params }) {
    return app.$axios
      .$get('v1/pin/show', {
        params: {
          slug: params.slug
        }
      })
      .then((data) => {
        return data
      })
      .catch(error)
  },
  data() {
    return {
      slug: '',
      intro: '',
      title: null,
      author: null,
      bangumi: null,
      content: [],
      trial_type: 0,
      comment_type: 0,
      last_top_at: 0,
      recommended_at: 0,
      published_at: '',
      last_edit_at: '',
      reward_status: false,
      like_count: 0,
      visit_count: 0,
      mark_count: 0,
      comment_count: 0,
      reward_count: 0,
      vote_hash: []
    }
  },
  methods: {
    handleBangumiClick() {
      this.$bridge.navigateTo({
        url: `/pages/bangumi/show/index?slug=${this.bangumi.slug}`
      })
    }
  }
}
</script>
