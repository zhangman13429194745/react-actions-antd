reactjs-universal-project

##目录结构(编译后)
```
build         编译后的内容都在这个文件夹里面
config        配置文件
src           源码
package.json  模块以及项目的配置信息
```

###编译相关
####以CentOS为例配置编译环境
#####1.安装nodejs
```
sudo yum install epel-release
sudo yum install nodejs
sudo yum install -y npm --enablerepo=epel
```

#####2.设置npm镜像
```
npm config set registry https://registry.npm.taobao.org
```

#####3.安装webpack
```
npm install webpack -g
```

#####4.编译H5-SDK
```
npm install    （安装依赖包）
npm run build  （编译完成后会生成到build文件夹下面，打开index.html，按照上面的调用方式配置参数可本地运行）
```
####5.热加载，开发环境
```
npm run dev（更改代码后会自动更新）
```

####注意：如果系统是Windows需要 npm install cross-env --save-dev,把package.json里的rm -rf 改成 rmdir /S /Q, NODE\_ENV=dev 改成 cross-env NODE\_ENV=dev

