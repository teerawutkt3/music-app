<template>
  <BlockUI v-if="show">
    <b-spinner variant="warning" type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="warning" type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="warning" type="grow" label="Spinning"></b-spinner>
    <br />
    <small>loading...</small>
  </BlockUI>
</template>
<script>
export default {
  name: "loading",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>