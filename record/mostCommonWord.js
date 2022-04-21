/**
 *  给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。
 *  题目保证至少有一个词不在禁用列表中，而且答案唯一。
 *  禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
 * 
 *  输入:
 *  paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
 *  banned = ["hit"]
 *  输出: "ball"
 * 
 * @param {string} str 
 * @param {string} banned 
 */
const mostCommonWord = (str, banned) => {
  const words = str
    .toLowerCase()
    .replace(/[!?',;.]/g, "")
    .split(" ")
    .filter((word) => !!word);

  let result = new Map();
  let max = 0;
  let currentMaxWord = "";

  words.forEach((word) => {
    if (banned.includes(word)) {
      return;
    }
    const currentWord = result.get(word);
    if (!!currentWord) {
      result.set(word, currentWord + 1);
    } else {
      result.set(word, 1);
    }
  });

  result.forEach((count, word) => {
    if (count > max) {
      max = count;
      currentMaxWord = word;
    }
  });

  return currentMaxWord;
};

const str = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];

console.log("mostCommonWord", mostCommonWord(str, banned));
