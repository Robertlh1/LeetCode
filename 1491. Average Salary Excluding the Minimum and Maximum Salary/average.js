/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 50 ms, faster than 99.86% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
Memory Usage: 42 MB, less than 40.03% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
*/

var average = function(salary) {
  let sorted = salary.sort((a, b) => a - b), avg = 0
  for (i = 1; i < sorted.length - 1; i++) avg += sorted[i]
  return (avg / (sorted.length - 2))
};

module.exports = average