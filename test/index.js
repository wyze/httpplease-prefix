/* eslint-disable id-length */

import http   from 'httpplease';
import prefix from '../src';
import test   from 'tape';

test('default prefix', t => {
  const req = new http.Request('/me');

  t.plan(1);

  // Simulate http.get(..) call
  prefix().processRequest(req);

  t.equal(req.url, '/api/me');
});

test('specified prefix', t => {
  const req = new http.Request('/me');

  t.plan(1);

  // Simulate http.get(..) call
  prefix('/api/v1').processRequest(req);

  t.equal(req.url, '/api/v1/me');
});
