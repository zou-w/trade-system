<template>
  <div>
    <h-radio-group v-model="vertical" vertical>
      <h-radio label="apple">
        <span>Apple</span>
      </h-radio>
      <h-radio label="android">
        <h-icon name="mail"></h-icon>
        <span>Android</span>
      </h-radio>
      <h-radio label="windows">
        <h-icon name="mail"></h-icon>
        <span>Windows</span>
      </h-radio>
    </h-radio-group>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>