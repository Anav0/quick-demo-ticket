<template>
  <div class="app">
    <Ticket :ticket="ticket" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Airline from "@/Models/airline";
import Ticket from "./components/Ticket/Ticket.vue";
import { TicketInfoBuilder } from "./Models/ticketInfoBuilder";

export default defineComponent({
  name: "App",
  components: {
    Ticket,
  },
  setup() {
    const ticketBuilder = new TicketInfoBuilder("Igor Motyka");
    const ticket = ref(
      ticketBuilder
        .addDestination(Airline.Lufthansa, "New York", "London", "JFK", "LHR")
        .addTimingInfo(
          new Date(1, 1, 2021, 6, 24, 0),
          new Date(1, 1, 2021, 21, 34, 0),
          new Date(1, 1, 2021, 5, 24, 0)
        )
        .addFlightInfo("RAO113", "7A", "C", 17)
        .build()
    );
    return {
      ticket,
    };
  },
});
</script>

<style lang="scss">
.app {
  background-color: $bgColor;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}
</style>
