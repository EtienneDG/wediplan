<template>
    <span>
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
        <v-dialog v-model="dialogCreateGuest" max-width="500" >
            <v-card>
                <v-card-title class="headline">Ajouter un invité</v-card-title>
                <form @submit.prevent="validateForm" id="dialogueCreateGuest">
                    <v-card-text>
                    <v-text-field
                        v-model="formData.prenom"
                        label="Prénom"
                        :error-messages="errors.collect('Prénom')"
                        v-validate="'required'"
                        data-vv-name="prenom"
                        class="input-group--required">
                    </v-text-field>
                    <v-text-field
                        v-model="formData.nom"
                        label="Nom"
                        :error-messages="errors.collect('Nom')"
                        v-validate="'required'"
                        data-vv-name="nom"
                        class="input-group--required">
                    </v-text-field>
                    <v-text-field
                        v-model="formData.email"
                        label="E-mail"
                        :error-messages="errors.collect('Email')"
                        data-vv-name="email"
                        v-validate="'email'"
                        class="input-group--required">
                    </v-text-field>
                    <v-select
                        v-bind:items="cotes"
                        v-model="formData.cote"
                        label="Côté"
                        :error-messages="errors.collect('select')"
                        v-validate="'required'"
                        data-vv-name="select"
                        required>
                    </v-select>
                    <v-layout row wrap>
                        <v-flex xs6 md4>
                            <v-checkbox
                            v-model="formData.famille"
                            label="Famille"
                            color="secondary"
                            :error-messages="errors.collect('Famille')"
                            data-vv-name="famille"
                            type="checkbox">
                            </v-checkbox> 
                        </v-flex>
                        <v-flex xs6 md4>
                            <v-checkbox
                                v-model="formData.vinhonneur"
                                label="Vin d'honneur"
                                color="secondary"
                                :error-messages="errors.collect('vinhonneur')"
                                data-vv-name="vinhonneur"
                                type="checkbox">
                            </v-checkbox> 
                        </v-flex>
                        <v-flex xs12 md4>
                            <v-checkbox
                                v-model="formData.repas"
                                label="Repas"
                                color="secondary"
                                :error-messages="errors.collect('repas')"
                                data-vv-name="repas"
                                type="checkbox">
                            </v-checkbox> 
                        </v-flex>
                    </v-layout>
                    </v-card-text> 
                    <v-card-actions>  
                        <v-btn 
                            color="darken-1" 
                            flat="flat" 
                             @click="clear">
                            Réinitialiser
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                            color="red darken-1" 
                            flat="flat" 
                            @click.native="dialogCreateGuest = false">
                            Annuler
                        </v-btn>
                        <v-btn 
                            color="green darken-1" 
                            flat="flat" 
                            @click.native="validateAndsubmit">
                            Ajouter
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </span>
</template>
<script>
export default{
  data () {
    return {
      cotes: [
        'EDG',
        'CD'
      ],
      formData: {
        prenom: '',
        nom: '',
        email: '',
        select: null,
        cote: '',
        famille: false,
        vinhonneur: false,
        repas: false,
        adulte: 1,
        enfant: 0
      },
      dialogCreateGuest: false
    };
  },
  methods: {
    submit () {
      this.$validator.validateAll()
      .then((result) => {
        if (result) {
          debugger;
          console.log(result);
        }
      })
      .then((result) => {
        if (result) {
          debugger;
          console.log(result);
        }
      });
    //   console.log(this.$validator.validateAll());
      this.dialogCreateGuest = false;
    },
    clear () {
      for (let prop in this.formData) {
        this.formData[prop] = null;
      }
      this.$validator.reset();
    },
    validateAndsubmit () {
      let $v0 = this;
      $v0.$validator.validateAll().then((result) => {
        if (result) {
          // call action to save data server side
          $v0.$store.dispatch('createGuest', this.formData);
          $v0.dialogCreateGuest = false;
        }
      });
    }
  },
  watch: {
    dialogCreateGuest: {
      handler: function (val) {
        this.clear();
      }
    }
  }
};
</script>