import { describe, it } from 'mocha';
import assert from 'assert';
import { mockFactory as serviceMockFactory } from '../src';

describe('Service Mock factory', () => {
  it('can be init', () => {
    assert.doesNotThrow(serviceMockFactory, 'Could not init service mock without exceptions');
  });
});
