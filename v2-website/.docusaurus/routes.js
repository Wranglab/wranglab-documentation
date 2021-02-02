
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','828'),
  
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
  path: '/artikeldaten-hochladen',
  component: ComponentCreator('/artikeldaten-hochladen','b19'),
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
  path: '/epids-erzeugen',
  component: ComponentCreator('/epids-erzeugen','37d'),
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
