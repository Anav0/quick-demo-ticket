import Airline from "./airline";

export class TicketInfo {
  airline = Airline.Lufthansa;
  from = "";
  to = "";
  fromAirport = "";
  toAirport = "";
  passangerName = "";
  flightNumber = "";
  seat = "";
  departure: Date = new Date();
  arrival: Date = new Date();
  boarding: Date = new Date();
  terminal = -1;
  gate = "";
}
