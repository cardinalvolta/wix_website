import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const script = await readFile(new URL('../hiring.js', import.meta.url), 'utf8');

test('email application links target Nan Ge; no legacy form remains', () => {
  const active = html.replace(/<!--[\s\S]*?-->/g, '');
  assert.ok(!active.includes('id="application-form"'));
  assert.ok(!active.includes('id="application-verification"'));
  assert.equal((active.match(/data-application-link/g) || []).length, 2);
  assert.ok(!active.includes('google.com'));
  const links = [...active.matchAll(/data-application-link href="([^"]+)"/g)];
  for (const [, href] of links) {
    const url = new URL(href);
    assert.equal(url.protocol, 'mailto:');
    assert.equal(url.pathname, 'nan.ge@cardinalvolta.com');
    assert.equal(url.searchParams.get('subject'), 'Application - Controls & Automation Engineering Co-op');
  }
  assert.ok(!html.includes('id="application-form"'));
});

test('job dialog renders without application API calls', () => {
  const events = new Map();
  const elements = [];
  const classes = new Set();
  let focused = false;
  const description = { append: element => elements.push(element) };
  const close = { addEventListener: (type, callback) => events.set(`button:${type}`, callback) };
  const dialog = {
    open: false,
    showModal() { this.open = true; },
    close() { this.open = false; events.get('dialog:close')(); },
    querySelector: () => close,
    addEventListener: (type, callback) => events.set(`dialog:${type}`, callback)
  };
  const opener = {
    addEventListener: (type, callback) => events.set(`opener:${type}`, callback),
    focus: () => { focused = true; }
  };
  const nodes = { '#job-description': description, '#job-dialog': dialog, '#open-job': opener };
  vm.runInNewContext(script, {
    URL,
    document: {
      querySelector(selector) {
        assert.ok(nodes[selector], `Unexpected active selector: ${selector}`);
        return nodes[selector];
      },
      createElement: () => ({ append() {} }),
      body: { classList: { add: name => classes.add(name), remove: name => classes.delete(name) } }
    },
    fetch: () => { throw new Error('Application APIs must not be called'); }
  });
  assert.ok(elements.length > 8, 'Full job description should still be rendered');
  events.get('opener:click')();
  assert.ok(dialog.open);
  assert.ok(classes.has('job-open'));
  assert.equal(dialog.scrollTop, 0);
  events.get('button:click')();
  assert.ok(!dialog.open);
  assert.ok(!classes.has('job-open'));
  assert.ok(focused);
});
