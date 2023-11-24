在我们的开发中，每个人在实现一个新功能的时候都会开一个feature branch，做完就提交pull request，代码审核完之后就merge到develop分支。
这是一组标准动作。但是在实际工作中，我们总是遇到这样一个问题。
不同分支的commit在merge到develop之后会，犬牙交错在一起。
## 作用
### 开发前
![image.png](http://s4lrouxtt.hn-bkt.clouddn.com/moon/article/git-21.png)
### 开发后 【未使用squash】
![image.png](http://s4lrouxtt.hn-bkt.clouddn.com/moon/article/git-22.png)

### 开发后 【使用squash】
![image.png](http://s4lrouxtt.hn-bkt.clouddn.com/moon/article/git-23.png)

好处是：使用完squash之后，就可以把所有的commit合并为一个commit，之后如果想对这个commit有revert 或者cherry-pick之类的操作就可以基于最后一个commit操作，而不会影响到到中间的其他commit。

### 需要开squash？
正常MR:比如我们有个小需求，比如:chore/remove-ua、chore/remove-unuse-code、bugfix/xxx,这样子可以减少commit的数量，后期如果需要revert 或者cherry-pick的时候就很方便，只需要针对squash merge之后的commit操作就可以了

### 不需要开squash？

- bugfix合并
   - 基于之前commit修复的fix，不能直接合并进去到新的分支，因为历史不同。
   - 比如 git branch b1 hash1, 那么如果b1中新增两个commit1,commit2,然后使用squash merge 得到commit3.
   - 6b <- bugfix    ->  8a   -> test-8a
- 迭代合并
   - 能保证合并之后的分支历史记录是按开发的顺序排列下来的，没有错乱。比如：master -> 2021-6b -> 2021-8a -> 2021-9a
## 







