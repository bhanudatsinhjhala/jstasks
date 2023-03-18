function generateTicket(row, column, diff) {
  let ticket = [];
  let min = 1;
  let max = diff;

  while (ticket.length < row * column) {
    let number = Math.round(min + Math.random() * (max - min));
    if (!ticket.includes(number)) ticket.push(number);
    if (ticket.length % row === 0) {
      min += diff;
      max += diff;
    }
  }
  return ticket.sort((a, b) => a - b);
}

function getTickets(startRange, endRange, ranges) {
  let diff = Math.round((endRange - (startRange - 1)) / ranges);
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push({
      ticketId: `tk${i + 1}`,
      ticket: generateTicket(5, ranges, diff),
    });
  }
  return result;
}
console.log(getTickets());
