function getTicket() {
  let result = [];
  let ranges = [];
  let min = 1;
  let max = 18;
  for (let i = 0; max <= 90; i++) {
    ranges.push(getRandomNumberArray(min, max));
    min += 18;
    max += 18;
  }
  for (let i = 0; i < 10; i++) {
    let ticket = [];
    ticket = generateTicket(ticket, indexCovered);
    ticket.sort((a, b) => a - b);
    result.push({ ticket, ticketId: `tk${i + 1}` });
  }
  return result;
  function generateTicket(ticket, indexCovered) {
    let indexCovered = [];
    for (let j = 0; ticket.length <= 25; j++) {
      let index = generateRandomNumber(0, 17);
      if (!indexCovered.includes(index) || indexCovered.length === 0) {
        for (let x = 0; x < 5; x++) {
          ticket.push(ranges[x][index]);
        }
        indexCovered.push(index);
      }
    }
    return ticket;
  }
}

function generateRandomNumber(min, max) {
  return min + Math.round(Math.random() * (max - min));
}

function getRandomNumberArray(min, max) {
  let array = [];
  for (let i = 0; array.length < max - min; i++) {
    let num = generateRandomNumber(min, max);
    if (!array.includes(num)) {
      array.push(num);
    }
  }
  return array;
}

console.log(getTicket());
