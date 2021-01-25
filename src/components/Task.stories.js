import Task from './Task' // 元となるVueコンポーネントをimport
import { action } from '@storybook/addon-actions' // Storybookのactionsパネルで使うヤツ

// export defaultで各Storyの親となるコンポーネントを定義
export default {
  // Storybookのサイドバーで表示される名前
  title: 'Task',
  // 定義するコンポーネント
  component: Task,
  // Storyの構成に必要だが、Storybookアプリ自体には読み込ませないファイル
  excludeStories: /.*.Data$/
}

// 各Storyのmethodsで紐付ける関数たち(今回は後述のVuex action)
// Storybookのactionsパネルで表示される
// これ自体はStoryではないためStoryとしては読み込まない
// exportしているのは他のstories.jsで再利用するため
export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task')
}

// タスクコンポーネントには複数の状態(種類)が考えられるため
// 基本となる形を"Template"として定義する
// Stateless Functional Component https://vuejs.org/v2/guide/render-function.html#Functional-Components
const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  methods: actionsData,
  template:
    '<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />'
})

// Template関数のコピーをもとにStory "Default"を作成
// Function.prototype.bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
export const Default = Template.bind({})
// Templateのpropsにargs(引数)を渡す
Default.args = {
  task: {
    id: '1',
    title: 'テスト',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0)
  }
}

// Template関数のコピーをもとにStory "Pinned"を作成
export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
}

// Template関数のコピーをもとにStory "Archived"を作成
export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
}

// task.titleが長い場合のStory "LongTitle"
const longTitleString = `吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。`

export const LongTitle = Template.bind({})
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString
  }
}
