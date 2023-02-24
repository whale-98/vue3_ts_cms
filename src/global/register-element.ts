import 'element-plus/theme-chalk/index.css'
import type { App } from 'vue'

import {
  ElButton,
  ElTable,
  ElTableColumn,
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
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElPagination,
  ElImage
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElTableColumn,
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
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElPagination,
  ElImage
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
