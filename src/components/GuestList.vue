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
         data: [['sample', 'data']],
         colHeaders: true
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


