'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asMinutesSeconds;
function strPadLeft(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

function asMinutesSeconds(seconds) {
  var min = Math.floor(seconds / 60);
  var sec = seconds - min * 60;
  var finalTime = strPadLeft(min, '0', 2) + ':' + strPadLeft(sec, '0', 2);
  return finalTime;
}