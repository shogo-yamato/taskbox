import Vue from "vue";
import TaskList from "../../src/components/TaskList.vue";
import { WithPinnedTasks } from "../../src/components/TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  // render TaskList
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    // ...TaskListStories > WithPinnedTasks の args を再利用
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // ピン留めされたタスクが最初に来ることを確認
  expect(firstTaskPinned).not.toBe(null);
});
