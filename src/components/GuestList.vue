<template>
    <v-layout column>
      <!-- Dashboard -->
      <v-flex mb-5 mt-3>
        <!-- <v-card> -->
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md2 align-center mb-1>
            <guest-indicator-card :number="numberOfGuests" text="Total" icon="people" color="green"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center mb-1>
            <guest-indicator-card :number="numberOfAdults" text="Adultes" icon="person" color="light-blue"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center mb-1>
            <guest-indicator-card :number="numberOfChildren" text="Enfants" icon="child_friendly" color="pink"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center mb-1>
            <guest-indicator-card :number="numberForCocktail" text="Vin d'honneur" icon="local_bar" color="purple"></guest-indicator-card>
          </v-flex>
          <v-flex xs12 md2 align-center mb-1>
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
            <tr v-if="!props.item.disabled">
              <td class="text-xs-center">
                <v-tooltip right v-if="props.item.lien && props.item.lien.length > 0">
                  <div slot="activator">{{ props.item.nom.toUpperCase() }}</div>
                  <span>{{getFullNameFromLien(props.item.lien)}}</span>
                </v-tooltip>
                <span v-else>
                  {{ props.item.nom.toUpperCase() }}
                </span>
              </td>
              <td class="text-xs-center">
                <v-tooltip right v-if="props.item.lien && props.item.lien.length > 0">
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
                <v-checkbox v-model="props.item.vinhonneur" color="blue-grey" @change="autosave(props.item._id,'vinhonneur', $event)"></v-checkbox>
              </td>
              <td class="text-xs-right">
                <v-checkbox v-model="props.item.repas" color="blue-grey" @change="autosave(props.item._id,'repas', $event)"></v-checkbox>
              </td>
              <td class="text-xs-center">
                <v-btn flat icon outline color="red lighten-1" @click.native="remove(props.item._id)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
      <dialogue-create-guest/>
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
  import DialogueCreateGuest from './DialogueCreateGuest';
  export default {
    data () {
      return {
        toastShow: false,
        toastText: '',
        dialogCreateGuest: false,
        root: 'guestable',
        pagination: {
          sortBy: 'nom',
          rowsPerPage: 25
        },
        headers: [
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
            text: 'Suppr.',
            align: 'center',
            sortable: false
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
        return this.guestData
        .filter((guest) => guest.id === lien)
        .map((guest) => guest.prenom + ' ' + guest.nom.toUpperCase())[0];
      },
      autosave (id, property, newValue) {
        let $v0 = this;
        var toPost = {id: id};
        toPost[property] = newValue;
        $v0.$store.dispatch('updateGuest', toPost)
        .then((r) => {
          $v0.toastText = `Mise à jour réussie`;
          $v0.toastShow = true;
        });
      },
      remove (id, event) {
        let $v0 = this;
        var toPost = {id: id};
        $v0.$store.dispatch('deleteGuest', toPost)
        .then((r) => {
          $v0.toastText = `Suppression réussie`;
          $v0.toastShow = true;
        });
      },
      hideDialogue () {
        this.dialogCreateGuest = !this.dialogCreateGuest;
      }
    },
    created () {
      this.$store.dispatch('getGuests');
    },
    components: {
      DialogueCreateGuest
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