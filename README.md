# Kibi Radar Chart Plugin

A radar chart is a graphical method of displaying multivariate data                   in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.

![image](./img/radar.png =400x)
![image](./img/kibana.png =400x)

## Installation

This plugin can be isntalled in both:
 
 * [Kibana >= 4.3](https://www.elastic.co/downloads/past-releases/kibana-4-3-0)
 * [Kibi >= 0.3](https://siren.solutions/kibi) (Coming soon ...)

#### Automatic
```
bin/kibana plugin --install sirensolutions/kibi-radar-chart-plugin
```

#### Manuall 

```
git clone https://github.com/sirensolutions/kibi-radar-chart-plugin
cd kibi-radar-chart-plugin
npm install
npm run build
cp -R build/kibi_radar_vis KIBANA_FOLDER_PATH/installedPlugins/
```
## Development

- Clone the repository at the same level of a Kibana > 4.2 clone
- If needed, switch to the same node version as Kibana using nvm 
  (e.g. `nvm use 0.12`)
- Install dependencies with `npm install`
- Install the plugin to Kibana and start watching for changes by running 
  `npm start`