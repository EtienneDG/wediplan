<template>
    <v-layout row wrap>
      <v-flex xs12 md4 mb-4 v-for="location in locations" :key="location.id">
          <location-card 
            class="mr-2" 
            :name="location.name" 
            :description="'test description'" 
            :address="'34 boulevard de Sébastopol, 75004 Paris'">
          </location-card>
      </v-flex>
      <!-- <v-flex xs12 md4 mb-4>
          <location-card 
            class="mr-2" 
            :name="'test'" 
            :description="'test description'" 
            :address="'34 boulevard de Sébastopol, 75004 Paris'">
          </location-card>
      </v-flex>
      <v-flex xs12 md4 mb-4>
          <location-card 
            class="mr-2" 
            :name="'test'" 
            :description="'test description'" 
            :address="'34 boulevard de Sébastopol, 75004 Paris'">
          </location-card>
      </v-flex>
      <v-flex xs12 md4 mb-4>
          <location-card 
            class="mr-2" 
            :name="'test'" 
            :description="'test description'" 
            :address="'34 boulevard de Sébastopol, 75004 Paris'">
          </location-card>
      </v-flex> -->
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
  components: {
    LocationCard,
    DialogueCreateLocation
  },
  created () {
    this.$store.dispatch('getLocations');
  }
};
</script>
