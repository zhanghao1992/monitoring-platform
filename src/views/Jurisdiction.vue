<template>
  <el-container>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%;">
        <el-table-column
          prop="date"
          label="姓名"
          width="208px">
        </el-table-column>
        <el-table-column
          label="权限限制">
          <el-table-column
            label="a权限"
            width="330px">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="打开"
                inactive-text="关闭"
                @change="switchChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            label="b权限"
            width="330px">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="打开"
                inactive-text="关闭"
                @change="switchChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            label="c权限限制"
            width="">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="打开"
                inactive-text="关闭"
                @change="switchChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        style="margin-top: 20px;"
        :current-page.sync="page.currentPage"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            value: true
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            value: true
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            value: true
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            value: true
          }
        ],
        page: {
          currentPage: 5,
          total: 100
        }
      }
    },
    methods: {
      switchChange(row) {
        console.log(row)
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
