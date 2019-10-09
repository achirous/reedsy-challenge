<template>
<div class="main book-page">
  <div class="book-container" v-if="book != null">
      <div class="title">
        <h2>{{book.title}}</h2>
        <div class="upvote-container">
          <span class="upvoted">Upvoted {{book.upvotes}} times</span>
          <upvote-toggle :upvoted="book.upvoted"></upvote-toggle>
        </div>
      </div>
      <span class="author">{{book.author}}</span>
      <div class="image-container">
        <img class="book-cover" v-bind:src="book.cover">
      </div>
      <div class="book-details">
        <span class="synopsis-title">Synopsis</span>
        <p class="synopsis">{{book.synopsis}}</p>
        <span class="rating">({{book.rating}}/10)</span>
      </div>
  </div>

  <div class="add-comment">
    <input v-model="commentToSubmit" @keypress.enter="postComment($event)" placeholder="Enter a comment" type="text">
  </div>

  <div class="comment-section">
    <h3>Comments</h3>

    <div v-if="comments.length == 0" class="comment-container">
      <span>No comments</span>
    </div>

    <div v-else class="comment-container" v-for="comment in comments">
      <div class="comment">
        <span class="user-name">Uknown user</span>
        <p class="comment-text">{{comment}}</p>
      </div>
    </div>
    
  </div>
</div>
    
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {BooksApi} from '../api/BooksApi';
import {Book, BookDetails} from '../entities/Book';
import UpvoteToggle from '../components/UpvoteToggle.vue';

@Component({
  components: {
    'upvote-toggle': UpvoteToggle,
  },
})
export default class BookPage extends Vue {

  public book: Book = <any> null;
  public comments: string[] = [];
  public commentToSubmit: string = "";

  public created(){
    BooksApi.findBook(this.$route.params.slug).then((result) => {
      this.book = result;
    });
  }

  public toggleUpvote(){
    this.book.upvoted = !this.book.upvoted;
  }

  public postComment(event: KeyboardEvent){
    if(!this.commentToSubmit){
      return;
    }
    this.comments.push(this.commentToSubmit);
    this.commentToSubmit = "";
  }
}
</script>
<style lang="scss">
 
 .book-page{
   background-color: #ffffff;
   border-radius: 5px;
 }
 .book-container{
   padding: 30px;
 }
  .title{
    display: flex;
    justify-content: space-between;
    line-height: 44px;
    h2{
      margin: 0;
      text-align: left;
    }

    .upvote-toggle{
      display: inline-block;
    }
    .upvote-container .upvoted{
      margin-right: 10px;
    }
  }

  .image-container{
    width: 100%;
    margin: 30px 0;
    img.book-cover{
      max-width: 300px;
      margin: auto;
      display: block;
    }
  }

  .book-details{
    .synopsis-title{
      font-size: 18px;
    }
    .synopsis-title, .rating{
      font-weight: bold;
    }

    .synopsis{
      margin-bottom: 30px;
    }
  }
  .add-comment{
    padding: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c9c9c9;
    border-top: 1px solid #c9c9c9;
    background-color: #faf9f4;
    
  }

  .comment-section{

    h3{
      margin: 30px;
    }

    .comment-container{
      padding: 30px;

      .comment{
        border: 1px solid #c9c9c9;
        border-radius: 5px;
        padding: 10px;
        background-color: #faf9f4;

        .user-name{
          display: block;
          font-weight: bold;
        }
        .comment-text{
          margin-top: 30px;
        }
      }
    }
  }
</style>
