<template>
    <v-card>
        <v-layout column wrap justify-space-between>
        <v-flex mt-3 pl-1 pr-1>
            <v-layout row align-center justify-center>
            <v-flex xs3 md6>
                <v-icon :class="color + '--text text--lighten-3 icon--xxl-large'">{{icon}}</v-icon>
            </v-flex>
            <v-flex class="number" xs3 md6>
                <div :class="color + '--text text-xs-center'" >
                <strong class="number">{{number}}</strong> 
                </div>
            </v-flex>
            </v-layout>
        </v-flex>
        <v-flex>
            <div :class="color + '--text text-xs-center headline'">{{text}}</div>
        </v-flex>
        </v-layout>
    </v-card>
</template>
<script>
export default {
  props: {
    number: Number,
    text: String,
    icon: String,
    color: String
  }
};
</script>
<style scoped>
.icon.icon--xxl-large {
    font-size: 6rem;
}
.number{
    font-size:2.1em;
    font-weight:100;
}
</style>