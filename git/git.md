########   https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE
### config

git config --global user.name "John Doe"

git config --global user.email johndoe@example.com

ssh-keygen -t rsa -C "youremail@example.com"

#see key
cat ~/.ssh/id_rsa.pub






## 文件置灰打不开

<!-- 1、删掉.git

2、重命名一下子仓库名称，commit 然后push一下

3、再把子仓库名称改回来 -->


# 版本回退的问题

git reset HEAD~1

git reset --hard hash版本