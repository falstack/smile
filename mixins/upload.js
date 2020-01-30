import { getUpToken } from '~/api/imageApi'

export default {
  data() {
    return {
      imageUploadToken: '',
      imageUploadAccept: ['jpeg', 'png', 'jpg'],
      imageUploadAction: 'https://upload.qiniup.com',
      imagePrefix: 'https://m1.calibur.tv/'
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    },
    isAuth() {
      return this.$store.state.isAuth
    }
  },
  mounted() {
    if (this.isAuth) {
      this.initUpToken()
    } else {
      this.$channel.$when('user-signed', () => {
        this.initUpToken()
      })
    }
  },
  beforeDestroy() {
    this.getUpTokenTimer && clearInterval(this.getUpTokenTimer)
  },
  methods: {
    initUpToken() {
      this.getUpToken()
      this.getUpTokenTimer = setInterval(() => {
        this.getUpToken()
      }, 1000 * 60 * 30)
    },
    async getUpToken() {
      this.imageUploadToken = await getUpToken(this)
    },
    imageUploadRequest(data) {
      const createFileName = ({ slug, file }) => {
        return `${slug}/${new Date().getTime()}-${Math.random()
          .toString(36)
          .substring(3, 6)}.${file.type.split('/').pop()}`
      }
      data.key = createFileName({
        slug: this.currentUser.slug,
        file: data.file
      })
      data.token = this.imageUploadToken
      return data
    },
    imageUploadResponse(resp) {
      try {
        return {
          ...resp.data,
          url: `${this.imagePrefix}${resp.data.url}`
        }
      } catch (e) {
        return {}
      }
    }
  }
}
