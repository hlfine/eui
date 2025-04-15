/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  'getting-started': [{ type: 'autogenerated', dirName: 'getting-started' }],
  components: [{ type: 'autogenerated', dirName: 'components' }],
  utilities: [{ type: 'autogenerated', dirName: 'utilities' }],
  patterns: [{ type: 'autogenerated', dirName: 'patterns' }],
  content: [{ type: 'autogenerated', dirName: 'content' }],
  dataviz: [{ type: 'autogenerated', dirName: 'dataviz' }],
};

export default sidebars;
