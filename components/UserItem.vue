<style lang="scss">
.user-item {
  margin-left: 12px;
  padding: 9px 12px 9px 0;
  height: 58px;
  line-height: 40px;
  border-bottom: 1pt solid #e7e7e7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .user-avatar {
    width: 40px;
    height: 40px;
  }

  .content {
    flex: 1;
    height: 40px;
    padding: 0 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    .intro {
      color: #999;
      font-size: 12px;
      line-height: 12px;
      width: 100%;
    }
  }
}
</style>

<template>
  <li class="user-item" @click="goUser">
    <UserAvatar :user="user" />
    <div class="content">
      <UserNickname :user="user" />
      <p class="intro oneline" v-text="score || user.signature" />
    </div>
    <UserFollowBtn :slug="user.slug" />
  </li>
</template>

<script>
import UserFollowBtn from '~/components/button/UserFollowBtn'
import UserNickname from '~/components/user/UserNickname'
import UserAvatar from '~/components/user/UserAvatar'

export default {
  name: 'UserItem',
  components: {
    UserAvatar,
    UserNickname,
    UserFollowBtn
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    score: {
      type: String,
      default: ''
    }
  },
  methods: {
    goUser() {
      this.$bridge.navigateTo({
        url: `/pages/user/show/index?slug=${this.user.slug}`
      })
    }
  }
}
</script>
