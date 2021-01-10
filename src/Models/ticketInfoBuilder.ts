import Airline from "./airline";
import { TicketInfo } from "./ticket";

export class TicketInfoBuilder {
  private ticket = new TicketInfo();

  constructor(passangerName: string) {
    this.ticket.passangerName = passangerName;
  }

  addDestination(
    airline: Airline,
    from: string,
    to: string,
    fromAirport: string,
    toAirport: string
  ) {
    this.ticket.airline = airline;
    this.ticket.from = from;
    this.ticket.to = to;
    this.ticket.fromAirport = fromAirport;
    this.ticket.toAirport = toAirport;
    return this;
  }

  addTimingInfo(departure: Date, arrival: Date, boarding: Date) {
    this.ticket.departure = departure;
    this.ticket.arrival = arrival;
    this.ticket.boarding = boarding;

    return this;
  }

  addFlightInfo(flightNumber: string, seat: string, gate: string, terminal: number) {
    this.ticket.flightNumber = flightNumber;
    this.ticket.seat = seat;
    this.ticket.gate = gate;
    this.ticket.terminal = terminal;
    return this;
  }

  build() {
    return this.ticket;
  }
}
