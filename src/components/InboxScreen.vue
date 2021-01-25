<template>
  <!-- vuexで管理しているstate(error)を、見た目だけのコンポーネント(PureInboxScreen)に送り込む -->
  <PureInboxScreen :error="error" />
</template>

<script>
import PureInboxScreen from './PureInboxScreen'
import { mapState } from 'vuex'

export default {
  name: 'InboxScreen',
  components: { PureInboxScreen },
  computed: mapState(['error'])
}
</script>
