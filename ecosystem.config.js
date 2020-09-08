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
      ref: 'origin/master',
      repo: 'git@github.com:Pckool/philippec-site.gitY',
      path: '/web',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
