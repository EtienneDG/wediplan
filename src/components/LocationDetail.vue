<template>
    <v-card>
        <v-card-media height="200px" :src="imageUrl">
            <v-container fill-height fluid>
                <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">{{name}}</span>
                </v-flex>
                </v-layout>
            </v-container>
        </v-card-media>
        <v-card-title>
            <div>
                <h3 class="headline mb-0">{{name}}</h3>
            </div>
        </v-card-title>
        <v-card-text>
                <div>{{description}}</div>
                <div>
                    <a target="_blank" :href="'https://www.google.fr/maps/search/'+ address">
                        <v-icon>place</v-icon>{{address}}
                    </a>
                </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
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
    this.$store.dispatch('getLocations');
  }
};
</script>
