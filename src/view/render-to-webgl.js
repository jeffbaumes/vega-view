import renderHeadless from './render-headless';
import {WebGL} from './render-types';

/**
 * Produce a WebGL instance containing a rendered visualization.
 * This method is asynchronous, returning a Promise instance.
 * @return {Promise} - A promise that resolves to a WebGL instance.
 */
export default function() {
  return renderHeadless(this, WebGL)
    .then(function(renderer) { return renderer.canvas(); });
}
