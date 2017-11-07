<template>
  <div id="guestlist">
      <v-layout>
          <v-flex>
            <h2>Liste des invités</h2>
          </v-flex>
      </v-layout>
      <HotTable :root="root" :settings="hotSettings"></HotTable>
  </div>
</template>
<script>
 import HotTable from 'vue-handsontable-official';

export default {
   data: function () {
     return {
       root: 'guest-hot',
       hotSettings: {
         data: this.$store.state.guests.guests,
         colHeaders: true,
         columns: [{
          //  data: 'id',
           type: 'text'
          //  width: 40
         },
         {
          //  data: 'nom',
           type: 'text'
         },
         {
          //  data: 'prenom',
           type: 'text'
         },
         {
          //  data: 'lien',
           type: 'text'
         },
         {
          //  data: 'adulte',
           type: 'numeric'
         },
         {
          //  data: 'enfant',
           type: 'numeric'
         },
         {
          //  data: 'famille',
           type: 'bool'
         },
         {
          //  data: 'cote',
           type: 'text'
         },
         {
          //  data: 'vinhonneur',
           type: 'bool'
         },
         {
          //  data: 'repas',
           type: 'bool'
         },
         {
          //  data: 'commentaires',
           type: 'text'
         }]
       }
     };
   },
   components: {
     HotTable
   },
   mounted () {
     this.$store.dispatch('getGuests');
   }
};
</script>


