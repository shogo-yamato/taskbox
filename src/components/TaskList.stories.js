import TaskList from "./TaskList";
// Task.stories.jsのいろんなところを再利用することで楽できる
import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  // 各Storyをwrapする要素
  decorators: [() => '<div style="padding: 3rem;"><story /></div>'],
};

// 各StoryのTemplate
const Template = (args, { argTypes }) => ({
  components: { TaskList },
  props: Object.keys(argTypes),
  // Task.stories.jsのactionsを再利用
  methods: TaskStories.actionsData,
  template:
    '<TaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

// Template関数のコピーをもとにStory "Default"を作成
export const Default = Template.bind({});
Default.args = {
  // Defaultで表示するデータ
  // Task.stories.jsのDefaultを再利用
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  ],
};

// Template関数のコピーをもとにStory "WithPinnedTasks"を作成
export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // 上記"Default"のdataを再利用
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

// Template関数のコピーをもとにStory "Loading"を作成
export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

// Template関数のコピーをもとにStory "Empty"を作成
export const Empty = Template.bind({});
Empty.args = {
  // 上記LoadingStoryのdataを再利用
  // taskが無くてloadingもしていない状態
  ...Loading.args,
  loading: false,
};
