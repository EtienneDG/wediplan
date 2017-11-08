<template>
  <div id="guestlist">
      <v-layout>
          <v-flex>
            <v-layout>
              <!-- <v-flex>
                <h2>
                  Liste des invités
                </h2> 
              </v-flex> -->
              <v-flex>
                <v-chip color="primary" text-color="white">
                  <strong>{{numberOfAdults}}</strong> 
                  &nbsp;Adultes
                </v-chip>
                <v-chip color="primary" text-color="white">
                  <strong>{{numberOfChildren}}</strong> 
                  &nbsp;Enfants
                </v-chip>
              </v-flex>
            </v-layout>
          </v-flex>
      </v-layout>
      <HotTable :root="root" :ref="root" :settings="hotSettings"></HotTable>
  </div>
</template>
<script>
 import HotTable from 'vue-handsontable-official';

export default {
   data () {
     return {
       root: 'guestable'
     };
   },
   computed: {
     numberOfAdults () {
       if (this.$store.state.guests.guests) {
         return this.$store.state.guests.guests
        .map((guest) => guest.adulte)
        .reduce((cur, prev) => cur + prev);
       }
     },
     numberOfChildren () {
       if (this.$store.state.guests.guests) {
         return this.$store.state.guests.guests
        .map((guest) => guest.enfant)
        .reduce((cur, prev) => cur + prev);
       }
     },
     hotSettings () {
       return {
         data: this.$store.state.guests.guests,
         colHeaders: ['objectid', 'ID', 'Nom', 'Prénom', 'Lien', 'Adultes', 'Enfants', 'Famille', 'Côté', `Vin d'honneur`, 'Repas', 'Commentaires'],
         hiddenColumns: {
           columns: [0, 1, 4],
           indicators: false
         },
         columns: [{
           data: '_id',
           type: 'text'
         },
         {
           data: 'id',
           type: 'text'
         },
         {
           data: 'nom',
           type: 'text'
         },
         {
           data: 'prenom',
           type: 'text'
         },
         {
           data: 'lien',
           type: 'text'
         },
         {
           data: 'adulte',
           type: 'numeric'
         },
         {
           data: 'enfant',
           type: 'numeric'
         },
         {
           data: 'famille',
           type: 'text'
         },
         {
           data: 'cote',
           type: 'text'
         },
         {
           data: 'vinhonneur',
           type: 'text'
         },
         {
           data: 'repas',
           type: 'text'
         },
         {
           data: 'commentaire',
           type: 'text'
         }]
       };
     }
   },
   components: {
     HotTable
   },
   mounted () {
     this.$store.dispatch('getGuests');
   }
};
</script>
<style scoped>
  .chip{
    font-size: 1.8em;
  }
</style>