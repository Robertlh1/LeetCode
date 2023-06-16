/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 806 ms Beats 90.91%
Memory 206.8 MB Beats 9.9%

You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei. A person may attend multiple meetings at the same time. Finally, you are given an integer firstPerson.

Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This secret is then toCheck every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person xi has the secret at timei, then they will share the secret with person yi, and vice versa.

The secrets are toCheck instantaneously. That is, a person may receive the secret and share it with people in other meetings within the same time frame.

Return a list of all the people that have the secret after all the meetings have taken place. You may return the answer in any order.
*/

var findAllPeople = function(n, meetings, firstPerson) {
  let identified = {0: 0, [firstPerson]: 0}, result = []
  let timeTable = {}, perMinute = {}
  meetings.sort((a, b) => a[2]-b[2])

  // Initially, iterate through the meetings array and assemble a list
  // organized minute by minute of every interaction that takes place
  for (let i = 0; i < meetings.length; i++) {
    let [a, b, time] = meetings[i]

    if ((i > 0 && time !== meetings[i - 1][2])) {
      timeTable[meetings[i - 1][2]] = perMinute
      perMinute = {}
    }

    // If the person already has an entry in any given minute, add to it
    if (perMinute[a]) perMinute[a].push(b)
    if (perMinute[b]) perMinute[b].push(a)
    // Otherwise, make a new entry
    if (!perMinute[a]) perMinute[a] = [b]
    if (!perMinute[b]) perMinute[b] = [a]
    if (i === meetings.length - 1) timeTable[time] = perMinute
  }

  // Iterate through all meetings a second time
  for (minute in timeTable) {
    let currMinute = timeTable[minute]
    // Iterate through all meetings taking place during one minute
    for (person in currMinute) {
      if (person == 14) debugger
      // If a secret holder is found
      if (identified[person] !== undefined) {
        // Continue into the recursive secretChecker function
        identified = secretChecker(identified, currMinute, person)
      }
    }
  }

  let bah = Object.keys(identified)
  for (let x = 0; x < bah.length; x++) {
    result.push(Number(bah[x]))
  }

  return result
};

let secretChecker = function(identified, currMinute, person) {
  let currPerson = currMinute[person]
  for (let i = 0; i < currPerson.length; i++) {
    // Determine if the secret was passed on to anyone else
    if (identified[currPerson[i]] === undefined) {
      // If so, check their meetings for this minute for additional people
      identified[currPerson[i]] = true
      identified = secretChecker(identified, currMinute, currPerson[i])
    }
  }

  // Update the identified list
  return identified
}

module.exports = findAllPeople