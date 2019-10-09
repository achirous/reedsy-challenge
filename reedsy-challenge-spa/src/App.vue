<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import {BooksApi} from './api/BooksApi';
  import {Book, BookDetails} from './entities/Book';

  @Component
  export default class App extends Vue { }
</script>
<style lang="scss">
  body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #393937;
    background-color: #faf9f4;
    margin: 0;
    h2{
      font-size: 35px;
    }
      h2, h3{
          color: #c3a602;
      }

      img{
          border-radius: 10px;
          box-shadow:#8b8b89 0px 1px 6px 0px;
      }

      input{
        width: 100%;
        line-height: 30px;
        border: 2px solid #c9c9c9;
        border-radius: 5px;
        padding-left: 5px;
      }
  }

  .main{
    background-color: #faf9f4;
    box-shadow: #c5c5c5 0px 2px 5px 1px;
    border-radius: 5px;
    border-color: #c5c5c5;
    max-width: 1080px;
    margin: 10px auto;

    .author{
      display: block;
      margin-top: 10px;
      font-style: italic;
    }
  }
</style>
