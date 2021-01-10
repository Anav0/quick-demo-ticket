<template>
  <div class="qr">
    <qrcode-vue :foreground="foreground" :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QrcodeVue from "qrcode.vue";

export default defineComponent({
  components: { QrcodeVue },
  name: "QR",
  props: {
    value: { type: String, required: true },
    size: { type: Number, required: true },
    foreground: String,
  },
});
</script>

<style lang="scss"></style>
