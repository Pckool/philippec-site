module.exports = {
  apps: [{
    script: 'app.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy: {
    production: {
      user: 'portfilio',
      host: 'philippec.me',
      ref: 'origin/nuxt',
      repo: 'git@github.com:Pckool/philippec-site.git',
      path: '/web',
      'pre-deploy-local': '',
      'post-deploy': 'yarn install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
