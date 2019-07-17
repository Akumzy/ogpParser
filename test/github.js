var chai = require('chai');
var assert = chai.assert;
var parser = require('../dist').default;

describe ('HTTP request is successfully processed', function () {
  this.timeout(5000);
  it('Access check', () => {
    return parser('http://github.com/Akumzy', true).then(data => {
      return Promise.resolve(data);
    });
  });
});

describe('OGP Parser output check', function() {
  this.timeout(5000);
  parser('http://github.com/Akumzy', true).then(data => {
    it('指定したキーが全て存在する', () => {
      assert.containsAllKeys(data, ['title', 'ogp', 'seo']);
    });

    it('プロパティ`title`は文字列', () => {
      assert.isString(data.title);
    });

    it('プロパティ`ogp`はオブジェクト', () => {
      assert.isObject(data.ogp);
    });

    it('プロパティ`seo`はオブジェクト', () => {
      assert.isObject(data.seo);
    });
  });
});
