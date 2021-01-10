<template>
  <div class="ticket-route">
    <span class="ticket-route__fromCity">{{ fromCity }}</span>
    <span class="ticket-route__fromAirport">{{ fromAirport }}</span>
    <span class="ticket-route__cross">x</span>
    <span class="ticket-route__toCity">{{ toCity }}</span>
    <span class="ticket-route__toAirport">{{ toAirport }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketRoute",
  props: {
    fromCity: { type: String, required: true },
    toCity: { type: String, required: true },
    fromAirport: { type: String, required: true },
    toAirport: { type: String, required: true },
  },
});
</script>

<style lang="scss">
.ticket-route {
  display: grid;
  width: 100%;
  grid-template-areas:
    "fromCity . toCity"
    "fromAirport cross toAirport";
  place-items: center;
  font-weight: 900;

  &__fromCity,
  &__toCity {
    font-size: 1.2rem;
  }

  &__fromCity {
    grid-area: fromCity;
  }
  &__fromAirport {
    grid-area: fromAirport;
  }
  &__toCity {
    grid-area: toCity;
  }
  &__toAirport {
    grid-area: toAirport;
  }
  &__cross {
    grid-area: cross;
    font-size: 2rem;
  }

  &__toAirport,
  &__fromAirport {
    font-size: 3rem;
  }
}
</style>
