<template>
    <div class="search-container">
        <input type="text" v-model="searchTerm" placeholder="Search..." class="search">
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

@Component
export default class Search extends Vue {

  public searchTerm: string = '';

  @Watch('searchTerm')
  @Emit('searchTermChanged')
  public searchFor(newSearchTerm: string) {}
}
</script>
<style lang="scss">
    .search-container{
        padding: 0 30px 30px 30px;

        .search{
            width: 100%;
        }
    }
</style>
