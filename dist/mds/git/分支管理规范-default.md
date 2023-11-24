## 背景

工程包括了Android端、iOS端和前端代码，因此分支及commit策略上既要顾忌端上发版特性、mtl打包特性，同时也要兼顾前端代码特性，减少前端同学对端上的版本理解，并且保证每次端上版本不要夹带没有ready的代码，在此基础上保证commit的可review性也至关重要。

## 分支策略

只允许存在feature、develop、release、master、hotfix五种分支。且需要按照规范命名，dev_xxx这种分支只允许在本地仓库存在，remote仓库一看到直接删除。

### feature分支（功能开发分支）

命名规范：feature/xxx_六位工号，好处是SourceTree下会将所有feature放入一个文件夹方便归总, xxx便于记忆, 也可以不用. **加工号的目的就是希望每个分支需要删除的时候可以找到责任人**)

#### 分支规范

- 为了方便开发，原则上允许每个开发同学持有一个feature分支，且必须以自己工号为后缀，开发同学请维护好自己的feature分支，以工号命名方便找分支责任人。
- 如果两个及以上同学的开发内容有相互依赖关系，可以feature之间相互merge，当功能整体开发完成时由其中一个同学将包含完整功能的feature分支以PR的形式合并到develop。切记功能整体没开发及自测完成时不要向develop分支提PR。好处是develop接收到的PR都是可review的，不是零散的提交，且能保证develop稳定。
- PR合并之后需要将remote仓库的feature分支删除。
- 不是当次迭代要集成的功能或者并行开发的功能可以多在本地开几个feature，确认迭代版本后先merge到自己的feature再向develop提PR。

> PR必须需保证打包通过，功能自测通过。


### develop分支（功能稳定分支）

命名规范：develop，有且只有一个。

#### 分支规范

- 只接受PR，不能直接push。
- 当一个版本集成后才可以将不在本次迭代集成的功能提交到develop，防止集成时带上不稳定代码。
- develop必须保证随时可提测的稳定状态。

### release分支（集成专用分支）

命名规范:release/xxx_集成日期

#### 分支规范

- 集成前一天拉release分支。
- 只接受PR，不能直接push。
- 集成后合回develop，且保留至版本正式发布。
- 集成后的bugfix集成依然在release分支上打包。

### master分支（版本稳定分支）

命名规范：master，有且只有一个。

#### 分支规范

- 每个版本的release分支合并回develop后，需要将develop合并回master。
- hotfix合回develop后，需要将develop合并回master。
- master必须保证是已集成过代码，随时可出包。

### hotfix分支（问题修复分支）

命名规范：hotfix/fix的版本_集成日期

#### 分支规范

- 只能从tag拉hotfix分支
- 提交必须以PR的形式
- 视情况决定是否合回develop（可能存在develop已经修复问题的场景），集成后需删除hotfix分支

### Tips

- 以上内容为基本规范，没有严格到不允许大家拉分支，只是限制每人最多一个可提交至remote的feature分支（方便mtl打包及merge），没有打包和相互merge需求时还是建议大家fork仓库后提PR。
- PR的方式可以很好的进行code review，所以希望大家不要怕麻烦。
- 再三提醒大家当次迭代不集成的代码不要往develop上提PR。
- 如果有特殊情况例如拆包，例如大规模重构，请在群里提前知会大家，让大家做好解决冲突的准备，也有可能产生文件改动过多无法提PR的场景，遇到时再另行商量对策。

### 分支管理员

- develop分支管理员，辛苦一点，保证develop分支随时可提测状态，合PR时和PR申请着确认好是否当前迭代要上的功能，不是的话先hold住PR，等下个迭代开始再合并。
- master管理员，保证master分支随时可出包状态，版本集成后进行一次合并。
- feature管理员，专门盯着谁乱提分支。 
- release管理员和hotfix管理员，版本PM来轮值，只负责合并分支。

## 发布策略

#### 为了避免共用 git 打 tag 出现冲突, 有如下规定:

-iOS 版本号末位为奇数
-Android 版本号末位为偶数
