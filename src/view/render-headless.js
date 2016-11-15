import initializeRenderer from './initialize-renderer';

import {
  SVG,
  WebGL
} from './render-types';

import {
  CanvasRenderer,
  SVGStringRenderer,
  WebGLRenderer
} from 'vega-scenegraph';

/**
 * Render the current scene in a headless fashion.
 * This method is asynchronous, returning a Promise instance.
 * @return {Promise} - A Promise that resolves to a renderer.
 */
export default function(view, type) {
  return view.runAsync().then(function() {
    var renderClass = (type === SVG) ? SVGStringRenderer : ((type === WebGL) ? WebGLRenderer : CanvasRenderer);
    return initializeRenderer(view, null, null, renderClass)
      .renderAsync(view._scenegraph.root);
  });
}
