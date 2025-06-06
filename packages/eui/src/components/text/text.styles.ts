/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { UseEuiTheme } from '../../services';
import {
  logicalCSS,
  logicalShorthandCSS,
  logicalTextAlignCSS,
  euiFontSize,
  _FontScaleOptions,
  mathWithUnits,
} from '../../global_styling';
import { highContrastModeStyles } from '../../global_styling/functions/high_contrast';

import { euiLinkCSS } from '../link/link.styles';
import { euiTitle } from '../title/title.styles';
import { euiCodeTextColors } from '../code/code_syntax.styles';

/**
 * TODO: Make this a global value so it can be set by theme?
 */
export const euiTextConstrainedMaxWidth = 'max(64ch, 75%)';

/**
 * Mixins
 */
export const euiText = (
  euiTheme: UseEuiTheme['euiTheme'],
  inheritColor = false
) => {
  return {
    color: inheritColor ? 'inherit' : euiTheme.colors.textParagraph,
    fontWeight: euiTheme.font.weight.regular,
  };
};

// Internal utility for EuiText scales/sizes
const euiScaleText = (
  euiThemeContext: UseEuiTheme,
  options: _FontScaleOptions
) => {
  const { fontSize, lineHeight } = euiFontSize(euiThemeContext, 'm', options);
  const { euiTheme } = euiThemeContext;
  const { unit, customScale: _customScale } = options;
  const lineHeightSize = unit === 'em' ? `${lineHeight}em` : lineHeight;

  const headings = {
    h1: euiTitle(euiThemeContext, 'l', options),
    h2: euiTitle(euiThemeContext, 'm', options),
    h3: euiTitle(euiThemeContext, 's', options),
    h4: euiTitle(euiThemeContext, 'xs', options),
    h5: euiTitle(euiThemeContext, 'xxs', options),
    h6: euiTitle(euiThemeContext, 'xxxs', options),
  };
  // Generate margins for headings based on customScale (not on heading level)
  const customScale = _customScale === 'xxxs' ? 'xxs' : _customScale || 'm';
  const marginSize = euiTheme.size[customScale];
  const headingMarginTop = mathWithUnits(marginSize, (x) => x * 2);
  const headingMarginBottom = marginSize;
  const blockQuoteBorderWidth = mathWithUnits(fontSize, (x) => x / 4);

  return `
    font-size: ${fontSize};
    line-height: ${lineHeight};

    h1 {
      font-size: ${headings.h1.fontSize};
      line-height: ${headings.h1.lineHeight};
    }
    h1:not(:last-child) {
      ${logicalCSS('margin-bottom', headingMarginBottom)}
    }

    h2 {
      font-size: ${headings.h2.fontSize};
      line-height: ${headings.h2.lineHeight};

      &:not(:first-child) {
        ${logicalCSS('margin-top', headingMarginTop)}
      }

      &:not(:last-child) {
        ${logicalCSS('margin-bottom', headingMarginBottom)}
      }
    }

    h3 {
      font-size: ${headings.h3.fontSize};
      line-height: ${headings.h3.lineHeight};

      &:not(:first-child) {
        ${logicalCSS('margin-top', headingMarginTop)}
      }

      &:not(:last-child) {
        ${logicalCSS('margin-bottom', headingMarginBottom)}
      }
    }

    h4 {
      font-size: ${headings.h4.fontSize};
      line-height: ${headings.h4.lineHeight};

      &:not(:first-child) {
        ${logicalCSS('margin-top', headingMarginTop)}
      }

      &:not(:last-child) {
        ${logicalCSS('margin-bottom', headingMarginBottom)}
      }
    }

    h5 {
      font-size: ${headings.h5.fontSize};
      line-height: ${headings.h5.lineHeight};

      &:not(:first-child) {
        ${logicalCSS('margin-top', headingMarginTop)}
      }

      &:not(:last-child) {
        ${logicalCSS('margin-bottom', headingMarginBottom)}
      }
    }

    h6 {
      font-size: ${headings.h6.fontSize};
      line-height: ${headings.h6.lineHeight};

      &:not(:first-child) {
        ${logicalCSS('margin-top', headingMarginTop)}
      }

      &:not(:last-child) {
        ${logicalCSS('margin-bottom', headingMarginBottom)}
      }
    }

    p,
    dl,
    blockquote,
    pre,
    > ul,
    > ol {
      ${logicalCSS('margin-bottom', lineHeightSize)}
    }

    ul,
    ol {
      ${logicalCSS('margin-left', lineHeightSize)}
    }

    /* The styles of the nested ordered lists follow the style of GitHub
       which is commonly used in Markdown or MDX formatting. */
    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }

    ul ul ol,
    ul ol ol,
    ol ul ol,
    ol ol ol {
      list-style-type: lower-alpha;
    }
  
    blockquote {
      font-size: ${fontSize};
      ${logicalShorthandCSS('padding', `0 ${fontSize}`)}
      ${logicalCSS('border-left-width', blockQuoteBorderWidth)}
      ${logicalCSS('margin-bottom', fontSize)}
    }

    dd + dt {
      ${logicalCSS('margin-top', fontSize)}
    }

    dt,
    .eui-definitionListReverse dd {
      font-size: ${fontSize};
      line-height: ${lineHeight};
    }

    .eui-definitionListReverse dt {
      font-size: ${euiFontSize(euiThemeContext, 'xs', options).fontSize};
      color: ${euiTheme.colors.textParagraph};
    }

    small {
      font-size: ${euiFontSize(euiThemeContext, 's', options).fontSize};
    }

    pre:not(.euiCodeBlock__pre) {
      padding: ${lineHeightSize};
    }

    code:not(.euiCode):not(.euiCodeBlock__code)  {
      font-size: .9em; /* 90% of parent font size */
    }
    ${highContrastModeStyles(euiThemeContext, {
      // For EuiCodeBlocks, set the margin on the wrapper instead of on the <pre>
      // so that high contrast mode borders render as expected
      preferred: `
        .euiCodeBlock {
          ${logicalCSS('margin-bottom', lineHeightSize)}

          pre {
            ${logicalCSS('margin-bottom', 0)}
          }
        }
      `,
    })}
    ${
      // when textSize is 'm', the 'kbd' element gets a line between the text and the border-bottom
      _customScale === 'm'
        ? `
    kbd {
      ${logicalCSS('padding-bottom', euiTheme.size.xs)}
      /* Ensures the shape still looks like a square when only one character */
      ${logicalCSS('min-width', euiTheme.size.l)}
      ${logicalTextAlignCSS('center')}
    }
    
    kbd::after {
      content: '';
      ${logicalCSS(
        'border-bottom',
        `${euiTheme.border.width.thin} solid ${euiTheme.colors.textParagraph}`
      )}
      position: absolute;
      ${logicalCSS('bottom', euiTheme.size.xxs)}
      ${logicalCSS('left', 0)}
      ${logicalCSS('width', '100%')}
    }`
        : ''
    }
  `;
};

/**
 * Styles
 */
export const euiTextStyles = (euiThemeContext: UseEuiTheme) => {
  const { euiTheme } = euiThemeContext;
  const codeColors = euiCodeTextColors(euiThemeContext);

  return {
    euiText: css`
      ${euiText(euiTheme, true)}

      /* EuiImage with floats are often used within EuiText. */
      clear: both;

      /* Style anchors that don't have a class. This prevents overwriting "buttons"
         and other stylized elements passed in. */
      a:not([class]) {
        ${euiLinkCSS(euiThemeContext)}
      }

      ul {
        list-style: disc;
      }

      ol {
        list-style: decimal;
      }

      blockquote {
        border-inline-start-color: ${euiTheme.border.color};
        border-inline-start-style: solid;
      }

      /* The blockquote color in euiMarkdownFormat inherits the color from the parent element
         For this reason, we just apply the subdued text color for blockquotes not in markdown */
      blockquote:not(.euiMarkdownFormat__blockquote) {
        color: ${euiTheme.colors.textSubdued};
      }

      h1 {
        ${euiTitle(euiThemeContext, 'l')}
      }

      h2 {
        ${euiTitle(euiThemeContext, 'm')}
      }

      h3 {
        ${euiTitle(euiThemeContext, 's')}
      }

      h4,
      dt {
        ${euiTitle(euiThemeContext, 'xs')}
      }

      h5 {
        ${euiTitle(euiThemeContext, 'xxs')}
      }

      h6 {
        ${euiTitle(euiThemeContext, 'xxxs')}
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      dt {
        color: inherit;
      }

      pre:not(.euiCodeBlock > pre) {
        white-space: pre-wrap;
        background-color: ${codeColors.backgroundColor};
        color: ${codeColors.color};
        ${highContrastModeStyles(euiThemeContext, {
          preferred: `border: ${euiTheme.border.thin}`,
        })}
      }

      pre:not(.euiCodeBlock__pre),
      pre:not(.euiCodeBlock__pre) code {
        display: block;
      }

      > :last-child {
        ${logicalCSS('margin-bottom', '0 !important')}
      }

      kbd {
        position: relative;
        display: inline-block;
        ${logicalCSS('padding-vertical', euiTheme.size.xxs)}
        ${logicalCSS('padding-horizontal', euiTheme.size.xs)}
        line-height: 1;
        border: ${euiTheme.border.width.thin} solid
          ${euiTheme.colors.textParagraph};
        border-radius: ${mathWithUnits(
          euiTheme.border.radius.small,
          (x) => x / 2
        )};
        ${highContrastModeStyles(euiThemeContext, {
          // Fixes an odd border issue in Windows high contrast themes
          forced: `
            overflow: hidden;
            vertical-align: middle;
          `,
        })}
      }
    `,
    constrainedWidth: css`
      ${logicalCSS('max-width', euiTextConstrainedMaxWidth)}
    `,
    // Sizes
    m: css`
      ${euiScaleText(euiThemeContext, {
        customScale: 'm',
      })}
    `,
    s: css`
      ${euiScaleText(euiThemeContext, {
        customScale: 's',
      })}
    `,
    xs: css`
      ${euiScaleText(euiThemeContext, {
        customScale: 'xs',
      })}
    `,
    relative: css`
      ${euiScaleText(euiThemeContext, {
        unit: 'em',
      })}
    `,
  };
};
