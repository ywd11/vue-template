<template>
  <div>
    <a-button
      @click="handlerClick"
    >
      导出
    </a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import { exportExcel } from 'xlsx-oc'
export default {
  name: 'Excel',
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      header: [
        { k: 'key', v: '序号' },
        { k: 'name', v: '名称' },
        { k: 'sm', v: '说明' },
        { k: 'lx', v: '类型' }
      ],
      list: [
        {
          key: '1',
          name: '小刚',
          sm: '歌手',
          lx: '流行'
        },
        {
          key: '2',
          name: '汪峰',
          sm: '歌手',
          lx: '摇滚'
        }
      ]
    }
  },
  methods: {
    handlerClick() {
      const fileName = "这个Excel表格的名字.xlsx"
      exportExcel(this.header, this.list, fileName)
    }
  }
}
</script>
