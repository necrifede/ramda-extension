import {curry, compose, not, isEmpty, intersection } from 'ramda';
/**
 * Returns `true` if any of the items from first array are in the second array.
 *
 * @category List
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array are in the second array.
 *
 * @example
 *
 *  	containsAny(['a', 'e'], ['a', 'b', 'c']) // true
 *   	containsAny(['e', 'f'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 *
 */
export default curry(compose(not, isEmpty, intersection));