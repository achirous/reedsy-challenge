<template>
    <div class="upvote-toggle">
        <a v-if="!upvoted" @click="toggleUpvote" class="upvote">Upvote</a>
        <a v-else @click="toggleUpvote" class="upvote clicked">Upvoted</a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UpvoteToggle extends Vue {
  @Prop() public pUpvoted!: boolean;

  public upvoted: boolean = false;

  public mounted() {
      this.upvoted = this.pUpvoted;
  }
  public toggleUpvote() {
    this.upvoted = !this.upvoted;
  }
}
</script>
<style lang="scss">
    a.upvote{
        border: #c3a602 2px solid;
        border-radius: 10px;
        padding: 8px 15px;
        color: #ffffff;
        background: #c3a602;
        cursor: pointer;
        margin-right: 10px;

        &.clicked{
            background: unset;
            color: #c3a602;
        }
    }
</style>
