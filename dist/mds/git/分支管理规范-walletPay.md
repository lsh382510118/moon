
```javascript
# prune remote-tracking branches no longer on remote
git fetch --prune

# print local branches that are not found on remote
git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}'

# remove local branches that are not found on remote
git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs git branch -d
```
git reset HEAD~1 --soft

# Background
During the development of MVP 0.7. Some of PRDs are blocked by other domains. result to us that we need to pull out some features from our release branch. 

eg:
```javascript

// we have a new release 7a. featureA feautureB are in release 7a.

// step1. 
// create 2021-7a from last release (we really should merge back to master. BTW)eg: 2021-6b

// step2. 
// develop on featureA branch by DeveloperA
// develop on featureB branch by DeveloperB

// step3.
// QA need to test 7a. 
// merge featureA to 2021-7a
// merge featureB to 2021-7a

// step4. 
// featureA pass the test and featureB doesn't

// step5. 
// pull out featureB from 2021-7a (which is almost impossible. coz there may featureC featureD depend on featureB)

```

# Feature Branch Name Rule
${interation}-${feature type}${feature Num}-${feature name}
For example:

- 9A-PRD9-CashRetailer 
- 9A-CR32B-RefundToMerchantSoV 

# Name Rule
```javascript
* feat:     A new feature
* fix:      A bug fix
* docs:     Documentation only changes
* style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* refactor: A code change that neither fixes a bug nor adds a feature
* perf:     A code change that improves performance
* test:     Adding missing tests or correcting existing tests
* build:    Changes that affect the build system or external dependencies (scopes: gulp, npm)
* ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Gitlabs)
* chore:    Other changes that don't modify src or test files
* revert:   Reverts a previous commit
* deps:     Updates about dependencies
```

# Proposal
![image.png](https://cdn.nlark.com/yuque/0/2021/png/991609/1630996320159-b80a7ec5-4d14-4469-aa62-b30c8eda2313.png#averageHue=%23f6f5f4&clientId=ubbb4d41d-bf8c-4&from=drop&id=ucb75e45c&originHeight=756&originWidth=744&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96107&status=done&style=none&taskId=u97c34cf6-bd5d-47ab-ac6a-88732551402&title=)

```javascript
// we have a new release 7a. featureA feautureB are in release 7a.

// step1 step2 are same as before

// step3 
// QA need to test 7a. 
// merge featureA featureB to 2021-7a-test

// step4. 
// featureA pass the test and featureB doesn't

// step5.
// merge featureA to 2021-7a

// step6.
// featureB is ready for 2021-8b
// rebase 2021-8b to featureB.
// continue...
```

By doing this. there are certian preconditions. 

1. Features branchs can **NOT be** deleted while merging to **release-test.**
2. Features can not depend on each other. If there is. then should create a seperate MR to commit those common part.
3. Developers should** NOT **touch those feature branches after it has been tested.


Few more things to help varify if the feature merged to **release-test **is same as **release **branch.

1. make your commits more meaningful. 
   1. **DO** squash your commits into one (Could be more that one but they must be decoupled)
   2. Use MR all the time. 
# 
# FAQ
TBD.

merge to Iteration branch before UAT
update digram with 
