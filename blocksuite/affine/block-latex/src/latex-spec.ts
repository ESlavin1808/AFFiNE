import {
  BlockViewExtension,
  CommandExtension,
  type ExtensionType,
} from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';

import { LatexBlockAdapterExtensions } from './adapters/extension.js';
import { commands } from './commands.js';

export const LatexBlockSpec: ExtensionType[] = [
  BlockViewExtension('affine:latex', literal`affine-latex`),
  CommandExtension(commands),
  LatexBlockAdapterExtensions,
].flat();
