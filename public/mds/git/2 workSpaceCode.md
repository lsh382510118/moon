# 
## 新建仓库

1. 将工作区中的项目文件使用git进行管理，即创建一个新的本地仓库：git init；
2. 从远程git仓库复制项目：git clone <url>，如：git clone git://github.com/wasd/example.git;
3. 克隆项目时如果想定义新的项目名，可以在clone命令后指定新的项目名：git clone git://github.com/wasd/example.git mygit；
## 提交

1. 提交工作区所有文件到暂存区：git add .
2. 提交工作区中指定文件到暂存区：git add <file1> <file2> ...;
3. 提交工作区中某个文件夹中所有文件到暂存区：git add [dir];
## 撤销

1. 删除工作区文件，并且也从暂存区删除对应文件的记录：git rm <file1> <file2>;
2. 从暂存区中删除文件，但是工作区依然还有该文件:git rm --cached <file>;
3. 取消暂存区已经暂存的文件：git reset HEAD <file>...;
4. 撤销上一次对文件的操作：git checkout --<file>。要确定上一次对文件的修改不再需要，如果想保留上一次的修改以备以后继续工作，可以使用stashing和分支来处理；
5. 隐藏当前变更，以便能够切换分支：git stash；
6. 查看当前所有的储藏：git stash list；
7. 应用最新的储藏：git stash apply，如果想应用更早的储藏：git stash apply stash@{2}；重新应用被暂存的变更，需要加上--index参数：git stash apply --index;
8. 使用apply命令只是应用储藏，而内容仍然还在栈上，需要移除指定的储藏：git stash drop stash{0}；如果使用pop命令不仅可以重新应用储藏，还可以立刻从堆栈中清除：git stash pop;
9. 在某些情况下，你可能想应用储藏的修改，在进行了一些其他的修改后，又要取消之前所应用储藏的修改。Git没有提供类似于 stash unapply 的命令，但是可以通过取消该储藏的补丁达到同样的效果：git stash show -p stash@{0} | git apply -R；同样的，如果你沒有指定具体的某个储藏，Git 会选择最近的储藏：git stash show -p | git apply -R；
## 更新文件

1. 重命名文件，并将已改名文件提交到暂存区：git mv [file-original] [file-renamed];
## 查新信息

1. 查询当前工作区所有文件的状态：git status;
2. 比较工作区中当前文件和暂存区之间的差异，也就是修改之后还没有暂存的内容：git diff；指定文件在工作区和暂存区上差异比较：git diff <file-name>;

