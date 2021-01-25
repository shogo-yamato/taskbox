<template>
  <div class="list-items">
    <!-- Taskの数や状態によってDOMを出し分ける -->
    <!-- 読込中 -->
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>タダイマ</span> <span>ヨミコミチュウ</span> <span>デス</span>
        </span>
      </div>
    </template>
    <!-- Taskナシ -->
    <template v-else-if="isEmpty">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">タスクはありません。</div>
        <div class="subtitle-message">やったね！</div>
      </div>
    </template>
    <!-- その他 -->
    <template>
      <Task
        v-for="task in tasksInOrder"
        :key="task.id"
        :task="task"
        v-on="$listeners"
      />
    </template>
  </div>
</template>

<script>
// このコンポーネントは"TaskList"(前述)の中身
// テストしやすくするため、stateに頼らない見た目だけのコンポーネントとして分離
import Task from './Task'
export default {
  name: 'PureTaskList',
  components: { Task },
  props: {
    tasks: { type: Array, required: true, default: () => [] },
    loading: { type: Boolean, default: false }
  },
  computed: {
    tasksInOrder() {
      return [
        ...this.tasks.filter((t) => t.state === 'TASK_PINNED'),
        ...this.tasks.filter((t) => t.state !== 'TASK_PINNED')
      ]
    },
    isEmpty() {
      return this.tasks.length === 0
    }
  }
}
</script>
