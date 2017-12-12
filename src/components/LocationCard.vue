<template>
    <v-card>
        <v-card-media height="200px" src="https://images.unsplash.com/photo-1485069203392-8e1aeb1ebf02?auto=format&fit=crop&w=1954&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
            <v-container fill-height fluid>
                <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">name</span>
                </v-flex>
                </v-layout>
            </v-container>
        </v-card-media>
        <v-card-title>
            <div>
                <h3 class="headline mb-0">name</h3>
                <div>description</div>
            </div>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    address: String
  },
  data () {
    return {
      locations: []
    };
  }
};
</script>
