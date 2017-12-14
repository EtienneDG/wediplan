<template>
    <v-card>
        test
    </v-card>
</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return {
      location: [],
      toastShow: false,
      toastText: ''
    };
  },
  computed: {
    locationData () {
      return this.$store.getters.locations || [];
    }
  },
  created () {
    this.$store.dispatch('getLocation', this.$route.params.name);
  }
};
</script>
