import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

/**
 * Work around Astro 7 / Vite 8 Node dependency loading on Windows.
 * Resolve server dependencies through Vite, then bridge CommonJS modules to
 * Node's loader. Browser code is untouched. Remove after the upstream fix.
 * @returns {import('vite').Plugin}
 */
export default function nodeCommonjs() {
  return {
    name: 'mobile-history:node-commonjs',
    enforce: 'pre',
    config(_config, { mode }) {
      return { cacheDir: mode === 'development' ? 'node_modules/.vite/dev' : 'node_modules/.vite/build' };
    },
    configEnvironment(name) {
      if (name !== 'client') return { resolve: { noExternal: true } };
    },
    transform(_code, id) {
      if (this.environment.name === 'client' || !id.includes('/node_modules/') || !/\.(?:js|cjs)$/.test(id) || /^\s*(?:import |export )/m.test(_code) || !/\b(?:require\(|module\.exports|exports\.)/.test(_code)) return;
      let value;
      try { value = require(id); } catch { return; }
      const names = Object.keys(value).filter(name => /^[a-zA-Z_$][\w$]*$/.test(name) && name !== 'default');
      return {
        code: 'import { createRequire } from "node:module"; const value = createRequire(import.meta.url)(' + JSON.stringify(id) + '); export default value;' + names.map((name, i) => 'const export' + i + ' = value[' + JSON.stringify(name) + ']; export { export' + i + ' as ' + name + ' };').join(''),
        map: null,
      };
    },
  };
}
