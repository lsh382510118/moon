## 查询配置信息
1. 列出当前配置：git config --list;
2. 列出repository配置：git config --local --list;
3. 列出全局配置：git config --global --list;
4. 列出系统配置：git config --system --list;


## 第一次使用git，配置用户信息

1. 配置用户名：git config --global user.name "your name";
2. 配置用户邮箱：git config --global user.email "youremail@github.com";

## 其他配置

1. 配置解决冲突时使用哪种差异分析工具，比如要使用vimdiff：git config --global merge.tool vimdiff;
2. 配置git命令输出为彩色的：git config --global color.ui auto;
3. 配置git使用的文本编辑器：git config --global core.editor vi;



