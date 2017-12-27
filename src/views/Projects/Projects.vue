<template>
  <el-container>
    <el-main>
      <el-button type="primary" style="margin-bottom: 22px;" @click="dialogAddProjectVisible = true">添加项目</el-button>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="项目名称"
          width="">
          <template slot-scope="scope">
            <!--<a @click="toDetail(scope.row)" href="javascript:void(0);" class="project-link">{{ scope.row.name }}</a>-->
            <router-link :to="{path:`/index/projects/${scope.row.id}`}">{{ scope.row.name }}</router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="
            "
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="modifyProject(scope.$index, scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteProject(scope.$index, scope.row)">删除
            </el-button>
          </template>
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

      <el-dialog title="创建宏" :visible.sync="dialogAddProjectVisible">
        <el-form :model="addProjectForm">
          <el-form-item label="项目名称:" :label-width="formLabelWidth">
            <el-input placeholder="请输入项目名称" v-model="addProjectForm.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAddProjectVisible = false">取消</el-button>
          <el-button type="primary" @click="addProject">添加</el-button>
        </div>
      </el-dialog>
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
            id: 1
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            id: 2
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            id: 3
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            id: 4
          }
        ],
        formInline: {
          user: '',
          region: ''
        },
        page: {
          currentPage: 5,
          total: 100
        },
        dialogAddProjectVisible: false,
        addProjectForm: {
          name: '',
          xx: '',
          content: ''
        },
        ModifyMacroForm: {
          name: '',
          xx: '',
          content: ''
        },
        formLabelWidth: '100px'
      }
    },
    methods: {
      modifyProject(row) {
        this.dialogModifyMacroVisible = true
      },
      deleteProject(row) {
      },
      addProject() {
        this.dialogAddProjectVisible = false
      },
      toDetail(row) {
        this.$router.push({
          patch: `/index/projects/${row.id}`
        })
      }
    },
    components: {}
  }
</script>
<style lang="scss">
  .project-link {
    &:hover {
      color: #66b1ff;
      text-decoration: underline !important;
    }
  }
</style>
