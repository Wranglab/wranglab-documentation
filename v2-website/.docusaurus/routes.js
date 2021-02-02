
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','b60'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','891'),
  exact: true,
},
{
  path: '/api',
  component: ComponentCreator('/api','689'),
  exact: true,
},
{
  path: '/connect-ebay',
  component: ComponentCreator('/connect-ebay','f08'),
  exact: true,
},
{
  path: '/daten_upload',
  component: ComponentCreator('/daten_upload','058'),
  exact: true,
},
{
  path: '/download_epid',
  component: ComponentCreator('/download_epid','d94'),
  exact: true,
},
{
  path: '/get_progress',
  component: ComponentCreator('/get_progress','417'),
  exact: true,
},
{
  path: '/subscription',
  component: ComponentCreator('/subscription','018'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
