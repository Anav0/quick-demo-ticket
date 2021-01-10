<template>
  <div class="ticket">
    <ticket-header :airline="ticket.airline" />
    <q-r class="ticket__qr" value="http://igormotyka.xyz" :size="200" :foreground="'#5736B8'" />
    <ticket-route
      class="ticket__route"
      :fromAirport="ticket.fromAirport"
      :fromCity="ticket.from"
      :toAirport="ticket.toAirport"
      :toCity="ticket.to"
    />
    <ticket-flight-info class="ticket__flight-info" :ticket="ticket" />
    <span class="ticket__warning">* For assitance please go to the help desk</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QR from "@/components/QR.vue";
import TicketFlightInfo from "./TicketFlightInfo.vue";
import TicketHeader from "./TicketHeader.vue";
import TicketRoute from "./TicketRoute.vue";
import { TicketInfo } from "@/Models/ticket";

export default defineComponent({
  components: {
    TicketHeader,
    TicketRoute,
    TicketFlightInfo,
    QR,
  },
  name: "Ticket",
  props: {
    ticket: TicketInfo,
  },
});
</script>

<style scoped lang="scss">
.ticket {
  background-color: $ticketBgColor;
  max-width: 680px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  color: $mainTextColor;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 3.8rem 2rem;

  &__qr {
    margin-top: 3rem;
  }
  &__route {
    margin-top: 3rem;
  }
  &__flight-info {
    margin-top: 3rem;
  }
  &__warning {
    margin-top: 2rem;
  }
}
</style>
