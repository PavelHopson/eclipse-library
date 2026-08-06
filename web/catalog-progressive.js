/* Keeps the live catalog DOM bounded to the current visible page. */
(() => {
  'use strict';

  function take(items, limit) {
    const safeLimit = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 0;
    return items.slice(0, safeLimit);
  }

  function detach(items) {
    items.forEach((item) => {
      if (item.node?.isConnected) item.node.remove();
    });
  }

  function mount(items, targetFor, ensureNode) {
    items.forEach((item) => targetFor(item).appendChild(ensureNode(item)));
  }

  window.EclipseCatalogProgressive = Object.freeze({ take, detach, mount });
})();
