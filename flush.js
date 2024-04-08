// 仅插件打开的页面，执行此动作
if (location.search.indexOf('from=plugin') > -1) {
  document.getElementById('dns-view-clear-cache').click()

  document.getElementById('sockets-view-close-idle-button').click()
  document.getElementById('sockets-view-flush-button').click()

  document.body.innerHTML = 'clear over'
}
