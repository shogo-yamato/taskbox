// import PureTaskList from './PureTaskList'
// // Task.stories.jsのいろんなところを再利用することで楽できる
// import * as TaskStories from './Task.stories'

// export default {
//   component: PureTaskList,
//   title: 'PureTaskList',
//   // 各Storyをwrapする要素
//   decorators: [() => '<div style="padding: 3rem;"><story /></div>']
// }

// // 各StoryのTemplate
// const Template = (args, { argTypes }) => ({
//   components: { PureTaskList },
//   props: Object.keys(argTypes),
//   // Task.stories.jsのactionsを再利用
//   methods: TaskStories.actionsData,
//   template:
//     '<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />'
// })

// // Template関数のコピーをもとにStory "Default"を作成
// export const Default = Template.bind({})
// Default.args = {
//   // Defaultで表示するデータ
//   // Task.stories.jsのDefaultを再利用
//   tasks: [
//     { ...TaskStories.Default.args.task, id: '1', title: 'タスク 1' },
//     { ...TaskStories.Default.args.task, id: '2', title: 'タスク 2' },
//     { ...TaskStories.Default.args.task, id: '3', title: 'タスク 3' },
//     { ...TaskStories.Default.args.task, id: '4', title: 'タスク 4' },
//     { ...TaskStories.Default.args.task, id: '5', title: 'タスク 5' },
//     { ...TaskStories.Default.args.task, id: '6', title: 'タスク 6' }
//   ]
// }

// // Template関数のコピーをもとにStory "WithPinnedTasks"を作成
// export const WithPinnedTasks = Template.bind({})
// WithPinnedTasks.args = {
//   // 上記"Default"のdataを再利用
//   tasks: [
//     ...Default.args.tasks.slice(0, 5),
//     { id: '6', title: 'タスク 6 (ピン留め)', state: 'TASK_PINNED' }
//   ]
// }

// // Template関数のコピーをもとにStory "Loading"を作成
// export const Loading = Template.bind({})
// Loading.args = {
//   tasks: [],
//   loading: true
// }

// // Template関数のコピーをもとにStory "Empty"を作成
// export const Empty = Template.bind({})
// Empty.args = {
//   // 上記LoadingStoryのdataを再利用
//   // タスクが無くて読込中でもない状態
//   ...Loading.args,
//   loading: false
// }
