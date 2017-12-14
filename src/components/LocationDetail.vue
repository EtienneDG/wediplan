<template>
    <v-layout row>
        <v-flex md6 xs12>{{name}}</v-flex>
        <v-flex md6 xs12>
            <gmap-map
            :center="center"
            :zoom="zoom"
            style="width: 100%; height: 100%">
            </gmap-map>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      location: [],
      toastShow: false,
      toastText: '',
      center: {lat: 50.591064, lng: 3.109413},
      zoom: 14
    };
  },
  computed: {
    locationData () {
      return this.$store.getters.locations || [];
    },
    locationX () {
        // TODO
    },
    locationY () {
        // TODO
    }
  },
  created () {
    this.$store.dispatch('getLocation', this.$route.params.name);
  }
};
</script>
