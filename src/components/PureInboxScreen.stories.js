// コメントアウト その1 ----- ここから
import Vue from 'vue'
import Vuex from 'vuex'
// ----------------------- ここまで
import PureInboxScreen from './PureInboxScreen.vue'
// コメントアウト その2 ----- ここから
import { action } from '@storybook/addon-actions'
import * as TaskListStories from './PureTaskList.stories'

// PureInboxScreen.vueはTaskList.vueを内包しているが
// TaskList.vueはVuex storeとつなぐ必要がある
// そこで、PureInboxScreen.stories.jsで新たなstoreを作成することで、
// PureInboxScreen.vueがStorybook上単体で動作できるようになる

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tasks: TaskListStories.Default.args.tasks
  },
  actions: {
    pinTask(context, id) {
      action('pin-task')(id)
    },
    archiveTask(context, id) {
      action('archive-task')(id)
    }
  }
})
// ---------------------- ここまで

export default {
  title: 'PureInboxScreen',
  component: PureInboxScreen,
  excludeStories: /.*store$/
}

const Template = (args, { argTypes }) => ({
  components: { PureInboxScreen },
  props: Object.keys(argTypes),
  template: '<PureInboxScreen v-bind="$props" />',
  // コメントアウト その3 ----- ここから
  store
  // ----------------------- ここまで
})

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = { error: true }
