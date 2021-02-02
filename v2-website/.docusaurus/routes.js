
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/wranglab-documentation/',
  component: ComponentCreator('/wranglab-documentation/','6f3'),
  
  routes: [
{
  path: '/wranglab-documentation/',
  component: ComponentCreator('/wranglab-documentation/','f79'),
  exact: true,
},
{
  path: '/wranglab-documentation/api',
  component: ComponentCreator('/wranglab-documentation/api','28d'),
  exact: true,
},
{
  path: '/wranglab-documentation/connect-ebay',
  component: ComponentCreator('/wranglab-documentation/connect-ebay','6e7'),
  exact: true,
},
{
  path: '/wranglab-documentation/daten_upload',
  component: ComponentCreator('/wranglab-documentation/daten_upload','95b'),
  exact: true,
},
{
  path: '/wranglab-documentation/download_epid',
  component: ComponentCreator('/wranglab-documentation/download_epid','1d3'),
  exact: true,
},
{
  path: '/wranglab-documentation/get_progress',
  component: ComponentCreator('/wranglab-documentation/get_progress','7c9'),
  exact: true,
},
{
  path: '/wranglab-documentation/subscription',
  component: ComponentCreator('/wranglab-documentation/subscription','d10'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
