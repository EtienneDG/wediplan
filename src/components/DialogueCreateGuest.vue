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
        <v-dialog v-model="dialogCreateGuest" width="30%" >
            <v-card>
                <v-card-title class="headline">Ajouter un invité</v-card-title>
                <form @submit.prevent="validateForm">
                    <v-card-text>
                    <v-text-field
                        v-model="prenom"
                        label="Prénom"
                        :error-messages="errors.collect('prenom')"
                        v-validate="'required'"
                        data-vv-name="prenom"
                        class="input-group--required">
                    </v-text-field>
                    <v-text-field
                        v-model="nom"
                        label="Nom"
                        :error-messages="errors.collect('nom')"
                        v-validate="'required'"
                        data-vv-name="nom"
                        class="input-group--required">
                    </v-text-field>
                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        :error-messages="errors.collect('email')"
                        data-vv-name="email"
                        v-validate="'email'"
                        class="input-group--required">
                    </v-text-field>
                    <v-select
                        v-bind:items="items"
                        v-model="select"
                        label="Select"
                        :error-messages="errors.collect('select')"
                        v-validate="'required'"
                        data-vv-name="select"
                        required>
                        </v-select>
                    <v-checkbox
                        v-model="checkbox"
                        value="1"
                        label="Option"
                        :error-messages="errors.collect('checkbox')"
                        v-validate="'required'"
                        data-vv-name="checkbox"
                        type="checkbox"
                        required>
                    </v-checkbox> 
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
      prenom: '',
      nom: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null,
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
      this.prenom = '';
      this.nom = '';
      this.email = '';
      this.select = null;
      this.checkbox = null;
      this.$validator.reset();
    },
    validateAndsubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // call action to save data server side
          this.dialogCreateGuest = false;
        }
      });
    }
  }
};
</script>