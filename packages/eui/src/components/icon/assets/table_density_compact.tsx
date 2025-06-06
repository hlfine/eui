/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EuiIconTableDensityCompact = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 6h2v1H3V6Zm5 0H6v1h2V6ZM3 8h2v1H3V8Zm5 0H6v1h2V8Zm-5 2h2v1H3v-1Zm5 0H6v1h2v-1Zm-5 2h2v1H3v-1Zm5 0H6v1h2v-1Zm1-6h4v1H9V6Zm4 2H9v1h4V8Zm-4 2h4v1H9v-1Zm4 2H9v1h4v-1Z" />
    <path
      fillRule="evenodd"
      d="M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2Zm1 0v2h12V2H2Zm12 3H2v9h12V5Z"
      clipRule="evenodd"
    />
  </svg>
);
export const icon = EuiIconTableDensityCompact;
