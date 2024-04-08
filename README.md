# 这是一款便捷清理 host缓存、sockets缓存 的chrome插件
* 一键式自动执行以下动作：
  * 打开”chrome://net-internals/#dns“页面
  * 在页面内自动点击clear等操作按钮
  * 关闭新打开的chrome页面
  * 自动刷新当前页（从而达到清除host缓存的目的）


## 使用前置步骤
* 使用此插件，需要启用chrome的此实验功能，访问“chrome://flags/”
* 搜索并启用“Extensions on chrome:// URLs“
* 安装chrome插件
  * 使用本地插件
    * 克隆本项目到本地
    * chrome添加扩展程序=>加载已解压的扩展程序
  * 使用线上插件
    * 在应用商店搜索“flush-sockets”
* 将此chrome插件在插件列表并置顶
* 点击 此插件icon
