const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity) return false;
  if (Number.isNaN(+sampleActivity)) return false;
  if (Number(sampleActivity) <= 0) return false;
  if (sampleActivity > 14.9) return false;
  if (typeof sampleActivity === 'object') return false;
  if (typeof sampleActivity === 'number') return false;
  if (typeof sampleActivity === 'boolean') return false;

  k = Math.log(2) / HALF_LIFE_PERIOD;
  t = Math.ceil(Math.log(15 / sampleActivity) / k);
  return t;
}

module.exports = {
  dateSample,
};

console.log(dateSample('14.108797507106168'));
