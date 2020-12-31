import Task from "./Task";
import { action } from "@storybook/addon-actions";

// defaultで各Storyの親となるコンポーネントを定義
export default {
  // Storybookのサイドバーで表示される名前
  title: "Task",
  // 定義するコンポーネント
  component: Task,
  // Storyの構成に必要だが、Storybookアプリ自体には読み込ませないファイル
  excludeStories: /.*.Data$/,
};

// 各Storyのmethodsで呼び出す関数たち(Vuexのaction)
// Storybookのactionsパネルで表示される
// これ自体はStoryではないためStoryとしては読み込まない
export const actionsData = {
  onPinTask: action("pin-task"),
  onArchiveTask: action("archive-task"),
};

// 各StoryのTemplate
// Stateless Functional Component https://vuejs.org/v2/guide/render-function.html#Functional-Components
const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  methods: actionsData,
  template:
    '<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

// Template関数のコピーをもとにStory "Default"を作成
// Function.prototype.bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
export const Default = Template.bind({});
// Templateのpropsにargs(引数)を渡す
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

// Template関数のコピーをもとにStory "Pinned"を作成
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

// Template関数のコピーをもとにStory "Archived"を作成
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
