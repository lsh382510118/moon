## 
## 前置【当前为6A迭代】
每次进入一个新的迭代，需要由admin做以下操作

- 把上一个迭代的common-dev【iteration-5b】 合并到 合并到develop, 并且打tag -> common-dev-5b 
- 删除common-dev [iteration-5b].
- 从develop 拉取common-dev [iteration-6a]

> 做完以上操作之后，那么我们得到的两个公共分支：
develop: 这里拥有5b的最新代码 
> common-dev: 这里是基于5b最新代码拉取的6a公共分支

## 命名规范

- feature_sprint6a_xxx
- 从common-dev拉取

## 上一个迭代[5b]的功能/bug

- 合并到develop
- 切换到common-dev,  拉取develop,  push到远端的common-dev。
## 当前迭代的功能

- 合并到common-dev分支。

## 特殊情况
> 5b的任务没开发完，还没有合并common-dev[5b],  需要合并到develop中。

## 
## 注意事项

- 每次提交忘记了添加单号了，导致无法push
> git reset 
> git reset HEAD~1 --soft

