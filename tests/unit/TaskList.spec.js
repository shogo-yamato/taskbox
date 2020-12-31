// TaskList用のテストファイル
import Vue from "vue";
import TaskList from "../../src/components/TaskList.vue";
import { WithPinnedTasks } from "../../src/components/TaskList.stories";

// ピン留めされたタスクが最初に来ることを確認するテスト
it("renders pinned tasks at the start of the list", () => {
  // TaskListを生成
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    // ...TaskList.stories.js > WithPinnedTasks の args を再利用
    propsData: WithPinnedTasks.args,
  }).$mount();
  // .list-itemの1つ目 かつ .TASK_PINNED の要素を選択する
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );
  // 要素が選択できればOK
  expect(firstTaskPinned).not.toBe(null);
});
