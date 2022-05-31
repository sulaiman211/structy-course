/*
  Write a function, longestStreak, that takes in the head of a linked list as an argument.
  The function should return the length of the longest consecutive streak of the same value within the list.

  const a = new Node(5);
  const b = new Node(5);
  const c = new Node(7);
  const d = new Node(7);
  const e = new Node(7);
  const f = new Node(6);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  // 5 -> 5 -> 7 -> 7 -> 7 -> 6

  longestStreak(a); // 3
  
  -----------------------------------------------------------------
  const a = new Node(3);
  const b = new Node(3);
  const c = new Node(3);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(9);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  // 3 -> 3 -> 3 -> 3 -> 9 -> 9

  longestStreak(a); // 4

*/

// solution:
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let currentNode = head;
  let prevVal = null;
  
  while (currentNode !== null) {
    if(currentStreak.val === prevVal) {
      currentStreak++
    } else {
      currentStreak = 1
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak
    }
    prevVal = currentNode.val;
    currentNode = currentNode.next
  }
  return maxStreak;
};


// n = number of nodes
// Time: O(n)
// Space: O(1)
