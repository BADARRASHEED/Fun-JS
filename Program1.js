/**
 * constants
 */

const costPerFlight = 5000;
const ticketPrice = 200;

/**
 * profit calculation
 */

function profit(passengers, flightCost) {
  const revenue = passengers * ticketPrice;
  const profit = revenue - flightCost;
  return profit;
}

/**
 * part - a
 */

const passengersOutbound = 29;
const profitOutbound = profit(passengersOutbound, costPerFlight);

/**
 * profit or loss on outbound flight
 */
profitOutbound > 0
  ? console.log(`Profit for outbound flight: $${profitOutbound}`)
  : console.log(`Loss for outbound flight: $${Math.abs(profitOutbound)}`);

/**
 * part - b
 */

const passengersReturn = 12;
const totalPassengers = passengersOutbound + passengersReturn;
const totalCost = costPerFlight * 2;

/**
 * profit or loss on return flight
 */

const profitReturn = profit(passengersReturn, costPerFlight);

profitReturn > 0
  ? console.log(`Profit for return flight: $${profitReturn}`)
  : console.log(`Loss for return flight: $${Math.abs(profitReturn)}`);

/**
 * overall profit or loss
 */

const overallProfit = profit(totalPassengers, totalCost);

overallProfit > 0
  ? console.log(`Overall profit: $${overallProfit}`)
  : console.log(`Overall loss: $${Math.abs(overallProfit)}`);