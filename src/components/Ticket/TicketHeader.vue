<template>
  <div class="ticket-header">
    <img :src="`${airlineName}.png`" />
    <span class="ticket-header__header">BOARDING PASS</span>
  </div>
</template>

<script lang="ts">
import Airline from "@/Models/airline";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TicketHeader",
  props: {
    airline: {
      type: Object as PropType<Airline>,
      required: true,
    },
  },
  setup(props) {
    const airlineName = Airline[props.airline].toLowerCase();

    return {
      airlineName,
    };
  },
});
</script>

<style lang="scss">
.ticket-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem !important;

  &__header {
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
}
</style>
