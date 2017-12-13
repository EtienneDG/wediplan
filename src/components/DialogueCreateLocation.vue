<template>
    <span>
        <v-btn
            fixed
            dark
            fab
            bottom
            right
            color="green"
            @click.stop="dialogCreate=true">
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialogCreate" max-width="500" >
            <v-card>
                <v-card-title class="headline">Ajouter une salle</v-card-title>
                <form @submit.prevent="validateForm">
                    <v-card-text>
                    <v-text-field
                        v-model="formData.name"
                        label="Nom de la salle"
                        :error-messages="errors.collect('Nom')"
                        v-validate="'required'"
                        data-vv-name="Nom"
                        class="input-group--required">
                    </v-text-field>
                    <v-text-field
                        v-model="formData.address"
                        label="Adresse de la salle"
                        :error-messages="errors.collect('Adresse')"
                        v-validate="'required'"
                        data-vv-name="Adresse"
                        class="input-group--required">
                    </v-text-field>
                    <v-text-field
                        v-model="formData.imageUrl"
                        label="Lien vers une image de la salle"
                        :error-messages="errors.collect('Lien image')"
                        v-validate="'required'"
                        data-vv-name="Lien image"
                        class="input-group--required">
                    </v-text-field>
                    <v-text-field
                        multi-line
                        v-model="formData.description"
                        label="Note/description de la salle"
                        :error-messages="errors.collect('Description')"
                        data-vv-name="Description">
                    </v-text-field>
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
                            @click.native="dialogCreate = false">
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
      formData: {
        name: '',
        description: '',
        address: '',
        imageUrl: null
      },
      dialogCreate: false
    };
  },
  methods: {
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
          $v0.$store.dispatch('createLocation', this.formData);
          $v0.dialogCreate = false;
        }
      });
    }
  },
  watch: {
    dialogCreate: {
      handler: function (val) {
        this.clear();
      }
    }
  }
};
</script>