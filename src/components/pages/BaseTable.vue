<template>
  <div v-cloak>
      我是table
      <div class="table-wrapper">
          <el-table :data="tableData"  border style="width: 100%; text-align: center;" > 
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="ip" label="IP">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="email" label="邮箱">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
      </div>
  </div>
</template>

<script>
import utils from '../../util/utils'
export default {
  data() {
      return {
        pageInfo: {
            pageSize: 10,
            currentPage: 1
        },
        tableData: []
      }
  },
  methods: {
      queryData() {
        var that = this
        utils.sendRequest({
            url: utils.getApi('tableData'),
            data: {
                pageSize: that.pageInfo.pageSize,
                currentPage: that.pageInfo.currentPage
            },
            callback(res) {
                if (res.status == 200 && res.data.data && res.data.retCode == '1') {
                    that.tableData = res.data.data.data
                }
            }
        })
      },
      handleEdit(index, row) {

      },
      handleDelete(index, row) {
          
      }
  },
  mounted() {
      this.queryData()
  }
}
</script>

<style lang="stylus">

</style>
