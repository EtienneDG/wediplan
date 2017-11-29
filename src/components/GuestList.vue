<template>
    <v-layout column>
      <!-- Dashboard -->
      <v-flex mb-5 mt-3>
        <!-- <v-card> -->
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md2 align-center>
            <guest-indicator-card :number="numberOfGuests" text="Total" icon="people" color="green" :type="number"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center>
            <guest-indicator-card :number="numberOfAdults" text="Adultes" icon="person" color="light-blue"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center>
            <guest-indicator-card :number="numberOfChildren" text="Enfants" icon="child_friendly" color="pink"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center>
            <guest-indicator-card :number="numberForCocktail" text="Vin d'honneur" icon="local_bar" color="purple"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center>
            <guest-indicator-card :number="numberForMeal" text="Repas" icon="restaurant" color="teal"></guest-indicator-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- List -->
      <v-flex class="hidden-sm-and-down">
        <v-data-table
        :headers="headers"
        :items="guestData"
        :pagination.sync="pagination"
        class="elevation-1">
          <template slot="items" slot-scope="props">
            <tr>
              <td class="text-xs-center">
                <v-tooltip right v-if="props.item.lien.length > 0">
                  <div slot="activator">{{ props.item.nom.toUpperCase() }}</div>
                  <span>{{getFullNameFromLien(props.item.lien)}}</span>
                </v-tooltip>
                <span v-else>
                  {{ props.item.nom.toUpperCase() }}
                </span>
              </td>
              <td class="text-xs-center">
                <v-tooltip right v-if="props.item.lien.length > 0">
                  <div slot="activator">{{ props.item.prenom }}</div>
                  <span>{{getFullNameFromLien(props.item.lien)}}</span>
                </v-tooltip>
                <span v-else>
                  {{ props.item.prenom }}
                </span>
              </td>
              <td class="text-xs-right">{{ props.item.adulte }}</td>
              <td class="text-xs-right">{{ props.item.enfant }}</td>
              <td class="text-xs-center">
                <v-checkbox v-model="props.item.famille" color="blue-grey" @change="autosave(props.item._id,'famille', $event)"></v-checkbox>
              </td>
              <td class="text-xs-center">{{ props.item.cote }}</td>
              <td class="text-xs-center">
                <v-checkbox v-model="props.item.vindhonneur" color="blue-grey"></v-checkbox>
              </td>
              <td class="text-xs-right">
                <v-checkbox v-model="props.item.repas" color="blue-grey"></v-checkbox>
              </td>
              <td class="text-xs-right">{{ props.item.commentaire }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="green"
        @click.stop="dialogCreateGuest=true">
        <v-icon>add</v-icon>
      </v-btn>
        <v-dialog v-model="dialogCreateGuest" max-width="290">
        <v-card>
          <v-card-title class="headline">Ajouter un invité</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat="flat" @click.native="dialog = false">Annuler</v-btn>
            <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Ajouter</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        dialogCreateGuest: false,
        root: 'guestable',
        pagination: {
          sortBy: 'nom',
          rowsPerPage: 25
        },
        headers: [
          // {
          //   text: 'objectid',
          //   align: 'left',
          //   sortable: false,
          //   value: '_id'
          // },
          // {
          //   text: 'ID',
          //   align: 'left',
          //   sortable: false,
          //   value: 'id'
          // },
          {
            text: 'Nom',
            align: 'center',
            sortable: true,
            value: 'nom'
          },
          {
            text: 'Prénom',
            align: 'center',
            sortable: true,
            value: 'prenom'
          },
          // {
          //   text: 'Lien',
          //   align: 'left',
          //   sortable: false,
          //   value: 'lien'
          // },
          {
            text: 'Adultes',
            align: 'center',
            sortable: false,
            value: 'adulte'
          },
          {
            text: 'Enfants',
            align: 'center',
            sortable: false,
            value: 'enfant'
          },
          {
            text: 'Famille',
            align: 'center',
            sortable: true,
            value: 'famille'
          },
          {
            text: 'Côté',
            align: 'center',
            sortable: true,
            value: 'cote'
          },
          {
            text: `Vin d'honneur`,
            align: 'center',
            sortable: true,
            value: 'vindhonneur'
          },
          {
            text: 'Repas',
            align: 'center',
            sortable: true,
            value: 'repas'
          },
          {
            text: 'Commentaires',
            align: 'center',
            sortable: false,
            value: 'commentaire'
          }]
      };
    },
    computed: {
      guestData () {
        return this.$store.getters.guests || [];
      },
      numberOfChildren () {
        return this.$store.getters.numberOfChildren || 0;
      },
      numberOfAdults () {
        return this.$store.getters.numberOfAdults || 0;
      },
      numberOfGuests () {
        return this.$store.getters.numberOfGuests || 0;
      },
      numberForMeal () {
        return this.$store.getters.numberForMeal || 0;
      },
      numberForCocktail () {
        return this.$store.getters.numberForCocktail || 0;
      }

    },
    methods: {
      getFullNameFromLien (lien) {
        return this.$store.state.guests.guests
        .filter((guest) => guest.id === lien)
        .map((guest) => guest.prenom + ' ' + guest.nom.toUpperCase())[0];
      },
      autosave (id, property, newValue) {
        var toPost = {id: id};
        console.log(property + toPost);
        toPost[property] = newValue;
        this.$store.dispatch('updateGuest', toPost);
      }
    },
    created () {
      this.$store.dispatch('getGuests');
    }
  };
</script>
<style scoped>
.chip{
  font-size: 1.8em;
}
.hidden-cell{
  display:none;
}
</style>