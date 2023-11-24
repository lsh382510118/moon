1. 查看本地仓库关联的远程仓库：git remote；在克隆完每个远程仓库后，远程仓库默认为origin;加上-v的参数后，会显示远程仓库的url地址；
2. 添加远程仓库，一般会取一个简短的别名：git remote add [remote-name] [url]，比如：git remote add example git://github.com/example/example.git;
3. 从远程仓库中抓取本地仓库中没有的更新：git fetch [remote-name]，如git fetch origin;使用fetch只是将远端数据拉到本地仓库，并不自动合并到当前工作分支，只能人工合并。如果设置了某个分支关联到远程仓库的某个分支的话，可以使用git pull来拉去远程分支的数据，然后将远端分支自动合并到本地仓库中的当前分支；
4. 将本地仓库某分支推送到远程仓库上：git push [remote-name] [branch-name]，如git push origin master；如果想将本地分支推送到远程仓库的不同名分支：git push <remote-name> <local-branch>:<remote-branch>，如git push origin serverfix:awesomebranch;如果想删除远程分支：git push [romote-name] :<remote-branch>，如git push origin :serverfix。这里省略了本地分支，也就相当于将空白内容推送给远程分支，就等于删掉了远程分支。
5. 查看远程仓库的详细信息：git remote show origin；
6. 修改某个远程仓库在本地的简称：git remote rename [old-name] [new-name]，如git remote rename origin org；
7. 移除远程仓库：git remote rm [remote-name]；

