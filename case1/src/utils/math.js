/**
 * 数値配列の合計を計算します
 * 空配列の場合は0を返し、非数値要素が含まれている場合は予期しない結果になる可能性があります。
 * 
 * @param {number[]} arr - 合計を計算する数値の配列。空配列も受け付けます。
 * @returns {number} 配列内の全数値の合計値。空配列の場合は0を返します。
 * 
 * @example
 * // 基本的な使用例
 * sumNumbers([1, 2, 3, 4]); // 10
 * 
 * // 空配列の場合
 * sumNumbers([]); // 0
 * 
 * // 負数を含む場合
 * sumNumbers([1, -2, 3]); // 2
 */
export function sumNumbers(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}


/**
 * 数値配列の平均値を計算します
 * 内部でsumNumbers関数を使用して合計を計算し、配列の長さで除算します。
 * 空配列の場合は0を返します（ゼロ除算を避けるため）。
 * 
 * @param {number[]} arr - 平均値を計算する数値の配列。空配列も受け付けます。
 * @returns {number} 配列の平均値。空配列の場合は0を返します。
 * 
 * @example
 * // 基本的な使用例
 * average([1, 2, 3, 4]); // 2.5
 * 
 * // 空配列の場合
 * average([]); // 0
 * 
 * // 負数を含む場合
 * average([1, -1, 2]); // 0.6666666666666666
 */
export function average(arr) {
  if (arr.length === 0) return 0;
  return sumNumbers(arr) / arr.length;
}
