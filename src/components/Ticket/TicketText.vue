<template>
  <div class="ticket-text">
    <label class="ticket-text__label">{{ label }}</label>
    <span class="ticket-text__text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketText",
  props: {
    label: { type: String, required: true },
    text: { type: String, required: true },
  },
});
</script>

<style lang="scss">
.ticket-text {
  display: flex;
  flex-direction: column;
  &__label {
    font-size: 0.8rem;
    color: $subTextColor;
    font-weight: 500;
  }
  &__text {
    font-weight: 600;
  }
}
</style>
