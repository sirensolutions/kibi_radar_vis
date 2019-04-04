module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kibi_radar_vis',
    require: ['kibana', 'elasticsearch', 'migrations'],
    uiExports: {
      visTypes: [
        'plugins/kibi_radar_vis/kibi_radar_vis'
      ]
    }
  });
};

