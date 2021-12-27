module.exports = {
  title: 'ZhTSu',
  description: 'the blog of zhtsu',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
    ['link', {rel: 'icon', href: 'https://file.zhtsu.cn/li.png'}],
    ['link', {
      rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
      integrity: 'sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu',
      crossOrigin: 'anonymous'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js',
      integrity: 'sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ',
      crossOrigin: 'anonymous'
    }],
    ['script', {
      src: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
      integrity: 'sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd',
      crossOrigin: 'anonymous'
    }]
  ],
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github-v4',
      locale: 'zh',
      owner: 'zhtsu',
      repo: 'zhtsu-blog-vssue',
      clientId: '48a912fef249e75d6a1e',
      clientSecret: '507e161461c434f205c162b276bfddf1fec952c0',
      autoCreateIssue:true
    },
    'vuepress-plugin-code-copy': {
      align: "top"
    }
  },
  markdown: {
    lineNumbers: true
  }
}