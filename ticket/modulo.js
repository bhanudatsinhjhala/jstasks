function generateTicket(row = 5, column = 5, diff = 18) {
  let ticket = new Set();
  let min = 1;
  let max = diff;
  while (ticket.size < row * column) {
    let num = min + Math.round(Math.random() * (max - min));
    ticket.add(num);
    if (ticket.size % row == 0) {
      min += diff;
      max += diff;
    }
  }
  return [...ticket].sort((a, b) => a - b);
}
let result = [];
for (let i = 0; i < 10; i++) {
  result.push({
    ticketId: `tk${i + 1}`,
    ticket: generateTicket(),
  });
}
console.log(result);
