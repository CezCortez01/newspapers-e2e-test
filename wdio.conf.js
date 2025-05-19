exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 1,
  capabilities: [{
  maxInstances: 1,
  browserName: 'chrome',
  acceptInsecureCerts: true,
  'goog:chromeOptions': {
    args: [         
      '--disable-gpu',
      '--window-size=1280,800'
    ]
  }
}],

  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://www.newspapers.com',
  waitforTimeout: 20000,
  services: ['selenium-standalone'],
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./features/step-definitions/*.js'],
    timeout: 60000
  }
}
