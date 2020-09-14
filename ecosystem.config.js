module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'app.js',
    watch: '.'
  }],

  deploy: {
    production: {
      user: 'portfilio',
      host: 'philippec.me',
      ref: 'origin/nuxt',
      repo: 'git@github.com:Pckool/philippec-site.git',
      path: '/web',
      'pre-deploy-local': '',
      'post-deploy': 'yarn install && pm2 startOrRestart ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
