<style lang="scss">
#pin-show {
  padding: 0 $page-padding;
}
</style>

<template>
  <div id="pin-show">
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
      content: [],
      trial_type: 0,
      comment_type: 0,
      last_top_at: 0,
      recommended_at: 0,
      published_at: '',
      created_at: '',
      last_edit_at: '',
      reward_status: false,
      like_count: 0,
      visit_count: 0,
      mark_count: 0,
      comment_count: 0,
      reward_count: 0,
      vote_hash: []
    }
  }
}
</script>
