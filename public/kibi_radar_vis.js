define(function (require) {
  // we need to load the css ourselves
  require('plugins/kibi_radar_vis/kibi_radar_vis.less');

  // we also need to load the controller and used by the template
  require('plugins/kibi_radar_vis/kibi_radar_vis_controller');

  // register the provider with the visTypes registry
  require('ui/registry/vis_types').register(RadarVisProvider);

  function RadarVisProvider(Private) {
    const VisType = Private(require('ui/vis/vis_type'));
    const TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));
    const Schemas = Private(require('ui/vis/schemas'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'radar',
      title: 'Kibi Radar Chart',
      description: 'A radar chart is a graphical method of displaying multivariate data ' +
                   'in the form of a two-dimensional chart of three or more ' +
                   'quantitative variables represented on axes starting from the same point.' +
                   ' The relative position and angle of the axes is typically uninformative.',
      icon: 'fa-empire',
      category: VisType.CATEGORY.KIBI,
      template: require('plugins/kibi_radar_vis/kibi_radar_vis.html'),
      params: {
        defaults: {
          fontSize: 60,
          shareYAxis: true,
          addTooltip: true,
          addLegend: true,
          isDonut: false,
          isFacet: false,
          addLevel: true,
          addAxe: true,
          addVertice: true,
          addPolygon: true,
          addLevelLabel: true,
          addAxeLabel: true,
          addLevelScale: 1,
          addLabelScale: 0.9,
          addLevelNumber: 5
        },
        editor: require('plugins/kibi_radar_vis/kibi_radar_vis_params.html')
      },
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'metric',
          title: 'Metric',
          min: 3,
          defaults: [
            { type: 'count', schema: 'metric' },
            { type: 'count', schema: 'metric' },
            { type: 'count', schema: 'metric' }
          ],
          aggFilter: ['count','cardinality', 'avg', 'sum', 'min', 'max']
        },
        {
          group: 'buckets',
          name: 'segment',
          icon: 'fa fa-scissors',
          title: 'Split Slices',
          min: 1,
          max: 1,
          aggFilter: ['terms','range']
        }
      ])
    });
  }

  // export the provider so that the visType can be required with Private()
  return RadarVisProvider;
});
