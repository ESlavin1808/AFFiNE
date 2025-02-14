import { MenuContext } from '@blocksuite/affine-components/toolbar';

import type { EmbedBlockComponent } from '../../../_common/components/embed-card/type.js';

export class EmbedCardToolbarContext extends MenuContext {
  override close = () => {
    this.abortController.abort();
  };

  get doc() {
    return this.blockComponent.doc;
  }

  get host() {
    return this.blockComponent.host;
  }

  get selectedBlockModels() {
    if (this.blockComponent.model) return [this.blockComponent.model];
    return [];
  }

  get std() {
    return this.host.std;
  }

  constructor(
    public blockComponent: EmbedBlockComponent,
    public abortController: AbortController
  ) {
    super();
  }

  isEmpty() {
    return false;
  }

  isMultiple() {
    return false;
  }

  isSingle() {
    return true;
  }
}
