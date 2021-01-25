<template>
  <div>
    <div v-if="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">無念...</div>
        <div class="subtitle-message">エラーが発生しました。</div>
      </div>
    </div>

    <div v-else class="page lists-show">
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">タスク一覧</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  </div>
</template>

<script>
// このコンポーネントは"InboxScreen"の中身
// テストしやすくするため、stateに頼らない見た目だけのコンポーネントとして分離
import TaskList from './TaskList.vue'
export default {
  name: 'PureInboxScreen',
  components: { TaskList },
  props: {
    error: { type: Boolean, default: false }
  }
}
</script>
