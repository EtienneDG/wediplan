<template>
<v-app id="inspire">
    <v-navigation-drawer
      persistent
      absolute
      v-model="drawer"
      enable-resize-watcher
      app
      class="deep-orange--text">
      <v-list dense>
        <v-list-tile :to="{path: '/counter'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{path: '/guests'}">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Invités</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="red" dark app :dense="isDense">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content  id="content">
        <v-container fluid fill-height>
          <v-fade-transition mode="out-in">
              <router-view></router-view>
          </v-fade-transition>
        </v-container>
      </v-content>
    </main>
    <v-footer color="red">
        <span class="white--text">EDG &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    computed: {
      isDense () {
        return this.offsetTop > 50;
      }
    },
    methods: {
    },
    props: {
      source: String
    }
  };
</script>

<style lang="scss">
.toolbar{
  z-index: 6;
  transition: all 0.5s cubic-bezier(.25,.8,.5,1) !important;
}
.navigation-drawer{
  z-index: 7;
}

$red : #f44336;

.list__tile--active{
    color : $red !important;
}



</style>