<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <panel title="Markdown Metadata" style="margin-top: 30px">
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Title"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="markdown.title">
                  </v-text-field>

                  <v-text-field
                    label="author"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="markdown.author">
                  </v-text-field>

                  <v-text-field
                    label="description"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="markdown.description">
                  </v-text-field>

                  <v-text-field
                    label="imageUrl"
                    type="text"
                    required
                    :rules="[rules.required]"
                    v-model="markdown.imageUrl">
                  </v-text-field>

                  <div id="editor">
                      <mavon-editor style="height: 100%" v-model="markdown.content" :toolbars="{preview:true}"></mavon-editor>
                  </div>
                </v-form>
              </v-card-text>
              <td></td>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                @click.stop="dialog = !dialog"
                @click="post">添加</v-btn>
              </v-card-actions>
            </panel>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span>提醒</span>
                  <v-spacer></v-spacer>
                  <v-menu bottom left>
                  </v-menu>
                </v-card-title>
                <span>{{ message }}</span>
                <v-card-actions>
                  <v-btn color="primary" flat @click.stop="dialog=false" @click="redirect">关闭</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Panel from '@/components/Panel'
import MarkdownService from '@/services/MarkdownService'

export default {
  data () {
    return {
      markdown: {
        title: '',
        author: '',
        description: '',
        content: '',
        imageUrl: ''
      },
      dialog: false,
      message: '添加成功',
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async post () {
      try {
        const isAllFilled = Object
          .keys(this.markdown)
          .every(key => !!this.markdown[key])

        if (!isAllFilled) {
          this.message = '文本框未填写完整'
          return
        }

        console.log(this.markdown)

        const response = await MarkdownService.post(this.markdown)

        console.log(response.data)
      } catch (err) {
        console.log(err)
        this.messgae = err
      }
    },
    redirect () {
      const isAllFilled = Object
        .keys(this.markdown)
        .every(key => !!this.markdown[key])

      if (isAllFilled) {
        this.$router.push({
          name: 'markdowns'
        })
      }
    }
  }
}
</script>
<style>
#editor {
  margin: auto;
  width: 95%;
  height: 580px;
}
</style>
