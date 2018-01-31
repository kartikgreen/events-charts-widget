exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [
    { components: ['app-charts', 'app-charts-events-form'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
