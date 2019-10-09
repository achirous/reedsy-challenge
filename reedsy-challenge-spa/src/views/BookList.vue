<template>
  <div>
    <div class="main">
      <div class="book-list">
        <h2>Top books of all time</h2>
        <search @searchTermChanged="searchFor"></search>
        <div class="books-container">
          <div class="book" v-for="book in displayBooks">
            <div class="book-details">
              <router-link :to="{name: 'bookPage', params: {slug: book.slug}}" class="title">{{book.title}}</router-link>
              <span>({{book.rating}}/10)</span>
              <span class="author">{{book.author}}</span>
              <div v-if="book.synopsis != null" class="synopsis">
                <p v-if="book.synopsis.length <= 200" class="synopsis">{{book.synopsis}}</p>
                <p v-else class="synopsis">{{book.synopsis.substring(0,200)+"..."}}</p>
              </div>
              <div class="upvote-container">
                <upvote-toggle :p-upvoted="book.upvoted"></upvote-toggle>
                <span class="upvoted">Upvoted {{book.upvotes}} times</span>
              </div>
            </div>
            <router-link :to="{name: 'bookPage', params: {slug: book.slug}}" class="book-image">
              <img v-bind:src="book.cover">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <paginator @pageChanged="goToPage" :pageSize="pageSize" :numberOfItems="books.length" :currentPage="currentPage"></paginator>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {BooksApi} from '../api/BooksApi';
import {Book, BookDetails} from '../entities/Book';
import UpvoteToggle from '../components/UpvoteToggle.vue';
import Search from '../components/Search.vue';
import Paginator from '../components/Paginator.vue';

@Component({
  components: {
    'upvote-toggle': UpvoteToggle,
    'search': Search,
    'paginator': Paginator,
  },
})

export default class BookList extends Vue {
  public books: Book[] = [];
  public displayBooks: Book[] = [];
  public pageSize: number = 5;
  public currentPage = 0;

  @Watch('currentPage')
  public changePage(page: number) {
    const start = (page - 1) * (this.pageSize);
    const end = start + this.pageSize;
    this.displayBooks = this.books.slice(start, end);
  }

  public created() {
    BooksApi.listAllBooks().then((bookDetails) => {
      this.books = bookDetails.books;
      this.goToPage(1);
    });
  }

  public goToPage(page: number) {
    this.currentPage = page;
  }

  public toggleUpvote(book: Book) {
    book.upvoted = !book.upvoted;
  }

  public searchFor(searchTerm: string) {
    if (!searchTerm) {
      this.displayBooks = this.books;
      return;
    }
    this.displayBooks = this.books.filter((b) => (b.title.toLowerCase().includes(searchTerm.toLowerCase())
                                                || b.synopsis.toLowerCase().includes(searchTerm.toLowerCase())));
  }
}
</script>
<style lang="scss">
.book-list{
  padding-top: 30px;

  h2{
    text-align: center;
    margin-top: 0;
  }
  .book{
    padding: 30px;
    display: flex;

    .book-details{
      position: relative;
      .title{
        color: #ddaa43;
        text-decoration: none;
        font-size: 20px;
        display: inline-block;
        margin-right: 5px;
        cursor: pointer;
      }
      
      .upvote-container{
        margin-top: 50px;

        .upvote-toggle{
          display: inline;
        }
      }
    }

    .book-image{
      img{
        width: 120px;
        height: 180px;
        cursor: pointer;
      }
    }
  }
  .book:nth-child(odd) {
    background-color: #ffffff;
  }
}

</style>
