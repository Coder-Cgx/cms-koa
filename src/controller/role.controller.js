const menuService = require("../service/role.service");
const handleResult = require('../utils/result-handle')

class MenuController {
  async getMenuInfoByRoleId(ctx, next) {
    // 获取用户请求传递的参数
    const { roleId } = ctx.params;
    console.log(ctx.params);

    // 查询数据
    const result = await menuService.getMenuByRoleId(roleId);

    // 返回数据
    ctx.body = handleResult(result);
  }
}

module.exports = new MenuController();
