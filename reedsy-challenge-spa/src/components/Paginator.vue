<template>
    <div class="paginator-container">
        <ul v-if="pages && pages.length > 0" class="paginator">
            <li v-if="currentPage === 1" class="paginator-item previous disabled">Previous </li>
            <li v-else class="paginator-item previous" @click="goToPage(currentPage - 1)">Previous</li>

            <li v-for="page in pages" :key="page" class="paginator-item page" :class="{'active': currentPage === page}" @click="goToPage(page)">{{page}}</li>

            <li v-if="currentPage === pages.length" class="paginator-item next disabled">Next</li>
            <li v-else class="paginator-item next" @click="goToPage(currentPage + 1)">Next</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

@Component
export default class Paginator extends Vue {
  @Prop() public pageSize!: number;
  @Prop() public numberOfItems!: number;
  @Prop() public currentPage!: number;

  get pages() {
      const pageNumber = this.numberOfItems / this.pageSize;
      const pages: number[] = [];
      for (let i = 1; i <= pageNumber; i++) {
          pages.push(i);
      }
      return pages;
  }
  @Emit('pageChanged')
  public goToPage(page: number) {}
}
</script>
<style lang="scss">
    .paginator-container{
        max-width: 300px;
        margin: auto;
        ul.paginator{
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding: 0;

            li.paginator-item{
                
                padding: 10px 15px;
                color: #7d7d7d;
                font-weight: bold;
                cursor: pointer;

                &.page{
                    border: 2px solid #7d7d7d;
                    border-radius: 50%;
                }

                &.active{
                    background-color: #7d7d7d;
                    color: #ffffff;
                }

                &.disabled{
                    border-color: #c9c9c9;
                    color: #c9c9c9;
                }

                &.previous, &.next{
                    width: 50px;
                }
            }
        }
    }
</style>
