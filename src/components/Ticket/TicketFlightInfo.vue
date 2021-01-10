<template>
  <div class="ticket-flight-info">
    <section class="ticket-flight-info__upper-section">
      <ticket-text
        v-for="entry in upperData"
        :key="entry.class"
        :style="`grid-area: ${entry.class}`"
        :text="entry.text"
        :label="entry.label"
      />
    </section>
    <div class="ticket-flight-info__lines">
      <div />
    </div>
    <section class="ticket-flight-info__lower-section">
      <ticket-text
        v-for="entry in lowerData"
        :key="entry.class"
        :style="`grid-area: ${entry.class}`"
        :text="entry.text"
        :label="entry.label"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { TicketInfo } from "@/Models/ticket";
import { defineComponent, PropType } from "vue";
import TicketText from "./TicketText.vue";

export default defineComponent({
  components: { TicketText },
  name: "TicketFlightInfo",
  props: {
    ticket: { type: Object as PropType<TicketInfo>, required: true },
  },
  setup(props) {
    const local = "en-US";
    const dateFormat = {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    };
    const upperData = [
      { text: props.ticket.passangerName, label: "Passanger", class: "passanger" },
      { text: props.ticket.flightNumber, label: "Flight", class: "flight" },
      {
        text: props.ticket.departure.toLocaleDateString(local, dateFormat),
        label: "Departs",
        class: "departs",
      },
      { text: props.ticket.seat, label: "Seat", class: "seat" },
      {
        text: props.ticket.arrival.toLocaleDateString(local, dateFormat),
        label: "Arrives",
        class: "arrives",
      },
    ];

    const lowerData = [
      { text: props.ticket.terminal, label: "Terminal", class: "terminal" },
      { text: props.ticket.gate, label: "Gate", class: "gate" },
      {
        text: props.ticket.boarding.toLocaleTimeString(local, {
          hour: "2-digit",
          minute: "2-digit",
        }),
        label: "Boarding",
        class: "boarding",
      },
    ];

    return {
      upperData,
      lowerData,
    };
  },
});
</script>

<style lang="scss">
.ticket-flight-info {
  overflow: hidden;
  &__upper-section {
    display: grid;
    border: 1px solid $ticketBorderColor;
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
    grid-gap: 2rem 1.5rem;
    padding: 1.5rem;
    grid-template-areas:
      "passanger . ."
      "flight . departs"
      "seat . arrives";
    z-index: 4;
  }
  &__lines {
    width: 100%;
    height: 15px;
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    div {
      width: 100%;
      height: 100%;
      background: url("../../assets/ticketLine.svg") 0% center/8% repeat-x;
    }
    &::before {
      content: "";
      border-radius: 50%;
      position: absolute;
      left: -12px;
      top: 50%;
      transform: translate(0, -50%);
      width: 20px;
      height: 20px;
      background-color: $ticketEdgeBg;
      border: 1px solid $ticketBorderColor;
    }
    &::after {
      content: "";
      border-radius: 50%;
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translate(0, -50%);
      width: 20px;
      height: 20px;
      background-color: $ticketEdgeBg;
      border: 1px solid $ticketBorderColor;
    }
  }
  &__lower-section {
    z-index: 4;
    display: grid;
    border: 1px solid $ticketBorderColor;
    border-top: 0;
    border-radius: 0 0 5px 5px;
    padding: 1rem;
    grid-template-areas: "terminal gate boarding";
  }
}
</style>
