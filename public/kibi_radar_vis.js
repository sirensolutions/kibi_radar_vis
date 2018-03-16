import { CATEGORY } from 'ui/vis/vis_category';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisSchemasProvider } from 'ui/vis/editors/default/schemas';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

// we need to load the css ourselves
import 'plugins/kibi_radar_vis/kibi_radar_vis.less';
// we also need to load the controller and used by the template
import 'plugins/kibi_radar_vis/kibi_radar_vis_controller';
import template from 'plugins/kibi_radar_vis/kibi_radar_vis.html';
// register the provider with the visTypes registry
VisTypesRegistryProvider.register(RadarVisProvider);

function RadarVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  const Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return VisFactory.createAngularVisualization({
    name: 'radar',
    title: 'Kibi Radar Chart',
    description: 'A radar chart is a graphical method of displaying multivariate data ' +
                 'in the form of a two-dimensional chart of three or more ' +
                 'quantitative variables represented on axes starting from the same point.' +
                 ' The relative position and angle of the axes is typically uninformative.',
    icon: 'fa-empire',
    category: CATEGORY.SIREN,
    template,
    visConfig: {
      defaults: {
        config: {
          addLegend: true,
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
        }
      },
      template: template
    },
    editorConfig: {
      optionsTemplate: require('plugins/kibi_radar_vis/kibi_radar_vis_params.html'),
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
    },
    responseHandler: 'none'
  });
}

// export the provider so that the visType can be required with Private()
export default RadarVisProvider;
