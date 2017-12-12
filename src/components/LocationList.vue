<template>
    <v-layout row>
        <v-flex xs12 mr-2>
            <location-card></location-card>
        </v-flex>
    </v-layout>
</template>

<script>
import LocationCard from './LocationCard';

export default {
  data () {
    return {
      locations: []
    };
  },
  components: {
    LocationCard
  }
};
</script>
