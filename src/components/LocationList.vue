<template>
    <v-layout row wrap>
      <v-flex xs12 md4 mb-4 v-for="location in locationData" :key="location.id">
          <location-card 
            class="mr-2" 
            :name="location.name" 
            :address="location.address"
            :imageUrl="location.imageUrl">
          </location-card>
      </v-flex>
      <dialogue-create-location/>
      <v-snackbar
          :timeout="4000"
          :bottom="true"
          :right="true"
          :vertical="false"
          v-model="toastShow">
          {{toastText}}
          <v-btn flat color="red" @click.native="toastShow = false">Close</v-btn>
      </v-snackbar>
    </v-layout>
</template>

<script>
import LocationCard from './LocationCard';
import DialogueCreateLocation from './DialogueCreateLocation';

export default {
  data () {
    return {
      locations: [],
      toastShow: false,
      toastText: ''
    };
  },
  computed: {
    locationData () {
      return this.$store.getters.locations || [];
    }
  },
  components: {
    LocationCard,
    DialogueCreateLocation
  },
  created () {
    this.$store.dispatch('getLocations');
  }
};
</script>
