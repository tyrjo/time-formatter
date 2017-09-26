'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _Time = require('./Time');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('asSecondsMinutes(0)', function (t) {
  t.is((0, _Time.asMinutesSeconds)(0), '00:00');
});

(0, _ava2.default)('asSecondsMinutes(1)', function (t) {
  t.is((0, _Time.asMinutesSeconds)(1), '00:01');
});

(0, _ava2.default)('asSecondsMinutes(10)', function (t) {
  t.is((0, _Time.asMinutesSeconds)(10), '00:10');
});

(0, _ava2.default)('asSecondsMinutes(60)', function (t) {
  t.is((0, _Time.asMinutesSeconds)(60), '01:00');
});

(0, _ava2.default)('asSecondsMinutes(61)', function (t) {
  t.is((0, _Time.asMinutesSeconds)(61), '01:01');
});

(0, _ava2.default)('asSecondsMinutes(120)', function (t) {
  t.is((0, _Time.asMinutesSeconds)(120), '02:00');
});

(0, _ava2.default)('asSecondsMinutes(600)', function (t) {
  t.is((0, _Time.asMinutesSeconds)(600), '10:00');
});