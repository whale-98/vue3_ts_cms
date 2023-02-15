import 'element-plus/theme-chalk/index.css'
import type { App } from 'vue'

import {
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElIcon
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
