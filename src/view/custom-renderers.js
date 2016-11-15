
var renderers = {};

export function addCustomRenderer(type, handler, renderer) {
  renderers[type] = {
    handler: handler,
    renderer: renderer
  };
}

export function getCustomRenderer(type) {
  return renderers[type];
}
