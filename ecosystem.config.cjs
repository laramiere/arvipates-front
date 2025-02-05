module.exports = {
  apps: [
    {
      name: 'arvipates-front',
      port: '3002',
      exec_mode: 'cluster',
      instances: '1',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
