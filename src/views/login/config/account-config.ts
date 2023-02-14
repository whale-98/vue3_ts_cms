export const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { pattern: /^[A-Za-z0-9]{5,10}$/, message: '用户名必须是5到10位字母和数字' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
