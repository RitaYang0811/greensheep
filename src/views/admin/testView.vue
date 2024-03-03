<template>
  <div>{{ drag ? '拖拽中' : '拖拽停止' }}</div>
  <draggable
    :list="list"
    item-key="name"
    class="list-group"
    ghost-class="ghost"
    :move="checkMove"
    @start="onStart"
    @end="onEnd"
  >
    <template v-slot:item="{ element }">
      <div class="list-group-item">
        {{ element.name }}
      </div>
    </template>
  </draggable>
</template>

<script>
//导入draggable组件
import draggable from 'vuedraggable'
export default {
  //注册draggable组件
  components: {
    draggable
  },
  data() {
    return {
      drag: false,
      //定义要被拖拽对象的数组
      list: [
        { people: 'cn', id: 10, name: 'www.itxst.com' },
        { people: 'cn', id: 20, name: 'www.baidu.com' },
        { people: 'cn', id: 30, name: 'www.taobao.com' },
        { people: 'us', id: 40, name: 'www.yahoo.com' }
      ]
    }
  },
  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false
    }
  }
}
</script>

<style scoped>
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}

.item:hover {
  background-color: #f1f1f1;
  cursor: move;
}

.chosen {
  border: solid 2px #3089dc !important;
}
</style>
