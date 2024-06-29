记录 Vagrant 创建虚拟机的 Vagrantfile 配置，根据实际使用情况会不断完善。

## CentOS

```ruby
Vagrant.configure("2") do |config|
    # box镜像地址
    config.vm.box_url = "https://mirrors.ustc.edu.cn/centos-cloud/centos/7/vagrant/x86_64/images/CentOS-7.box"

	# 设置虚拟机的Box，使用的虚拟机镜像
	config.vm.box = "centos/7"

	# 设置虚拟机的主机名
	config.vm.hostname="lijing-centos7"

    # 设置磁盘大小，视情况而定
    # 记得先安装插件： vagrant plugin install  --plugin-clean-sources vagrant-disksize-0.1.3.gem
    # 到此处下载：https://share.weiyun.com/egZ7oNo2
    # 如果想要扩容，则需要执行 vagrant halt 关闭vagrant，然后重新拉起：vagrant up
    config.disksize.size = '50GB'

	# 设置虚拟机的网络

    # 1、Vagrant总是将虚拟机的第一个网卡设置为NAT，即网络地址转换，虚拟机只可以单向访问外网，但是外网访问不了虚拟机，虚拟机之间也是相互隔离的。在NAT模式下，如果想访问虚拟机的端口，可以使用端口转发，端口转发虽然可以访问虚拟机的服务，但是不适合搭建分布式集群。

    # 2、使用私有网络，可以实现虚拟机之间的访问，Vagrant将网卡设置为仅主机模式（Host-only），顾名思义，只能从宿主机访问虚拟机，无法通过外部主机访问虚拟机。
	config.vm.network "private_network", ip: "192.168.56.104"

    # 3、如果要从别的主机访问虚拟机，可以设置公有网络，在virtualbox中使用bridge桥接网络实现，桥接网络将虚拟机等同于网络中的真实主机，可以像访问其他主机一样访问虚拟机。
    # 除了指定ip，还需要指定桥接的网卡，查看桥接网卡命令为：VBoxManage list bridgedifs，记得将virtualbox目录添加到环境变量，否则找不到命令
    config.vm.network "public_network", ip: "192.168.0.201", bridge: "Realtek Gaming 2.5GbE Family Controller"

	# 设置主机与虚拟机的共享目录
	# config.vm.synced_folder "~/Documents/vagrant/share", "/home/vagrant/share"

    # 虚拟化提供者 provider
	# VirtaulBox相关配置，修改后，使用 vagrant reload 会自动修改对应配置
	config.vm.provider "virtualbox" do |v|
		# 设置虚拟机的名称，这个会在VirtualBox中显示的
		v.name = "lijing-centos7"
		# 设置虚拟机的内存大小
		v.memory = 4096
		# 设置虚拟机的CPU个数
		v.cpus = 4
	end

    # 配置管理器 provision
    # 配置管理器只在第一次使用 vagrant up 创建环境时执行，如果虚拟机已经创建，则vagrant up或vagrant reload不会再次运行配置管理器，需要显式调用
    # vagrant up --provision
    # vagrant reload --provision
    # 手动执行（常用来测试或调试脚本）：vagrant provision

    # 配置Shell脚本在虚拟机创建后启动时自动执行
    # 修改vagrant用户密码
    config.vm.provision "shell", inline: "echo vagrant:lijing123456 | sudo chpasswd"
    # 修改root用户密码
    config.vm.provision "shell", inline: "echo root:lijing123456 | sudo chpasswd"
    # 启用ssh密码登录，使用外部脚本，注意脚本位置
    config.vm.provision "shell", path: "enablePasswordAuth.sh"
    # 安装软件操作
    config.vm.provision "shell", inline: <<-SHELL

      # 命令补全工具
      yum install -y bash-completion

      # 安装vim
      yum install -y vim

      # 安装docker和docker-compose
      # 卸载旧版本
      yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
      # 使用国内阿里云镜像，十分快
      yum-config-manager \
        --add-repo \
        https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
      # 更新yum软件包索引
	  yum makecache fast
      yum install -y docker-ce-20.10.7-3.el7 docker-ce-cli-20.10.7-3.el7 containerd.io docker-compose-plugin
      # 启动docker
      systemctl start docker

 	  # 编写镜像加速配置文件
      sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://n2zg5mlq.mirror.aliyuncs.com"]
}
EOF
      # 重启服务
      sudo systemctl daemon-reload
      sudo systemctl restart docker
      # 设置开机自启
      systemctl enable docker.service

      # 查看版本
      docker version
      docker compose version

    SHELL
end
```

`enablePasswordAuth.sh`

```bash
# 将 sshd_config 文件中以 PasswordAuthentication 开头的行（以 ^ 表示开头）替换为 PasswordAuthentication yes。
# 换句话说，它将禁用 SSH 密码身份验证更改为启用密码身份验证。
# 第二个是将每一行以 “#” 开头的部分去除注释符号 “#”
echo "==> Enable ssh password authentication"
sed -i 's/^PasswordAuthentication .*/PasswordAuthentication yes/' /etc/ssh/sshd_config
# sed -i 's/^#\(LoginGraceTime\|PermitRootLogin\|StrictModes\|MaxAuthTries\|MaxSessions\)/\1/' /etc/ssh/sshd_config
systemctl reload sshd
service sshd restart
service ssh restart
```

## Ubuntu

```ruby
Vagrant.configure("2") do |config|
    # box镜像地址，可能会有变化，如果找不到去清华镜像源处看看
    config.vm.box_url = "https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cloud-images/jammy/20231201/jammy-server-cloudimg-amd64-vagrant.box"
    # 可以使用离线文件
    # config.vm.box_url = "file://D:/project/images/jammy-server-cloudimg-amd64-vagrant.box"

	# 设置虚拟机的Box，使用的虚拟机镜像
	config.vm.box = "ubuntu/jammy64"

	# 设置虚拟机的主机名
	config.vm.hostname="lijing-ubuntu"

    # 设置磁盘大小，视情况而定
    # 记得先安装插件： vagrant plugin install  --plugin-clean-sources vagrant-disksize-0.1.3.gem
    # 到此处下载：https://share.weiyun.com/egZ7oNo2
    # 如果想要扩容，则需要执行 vagrant halt 关闭vagrant，然后重新拉起：vagrant up
    config.disksize.size = '50GB'

	# 设置虚拟机的网络

    # 1、Vagrant总是将虚拟机的第一个网卡设置为NAT，即网络地址转换，虚拟机只可以单向访问外网，但是外网访问不了虚拟机，虚拟机之间也是相互隔离的。在NAT模式下，如果想访问虚拟机的端口，可以使用端口转发，端口转发虽然可以访问虚拟机的服务，但是不适合搭建分布式集群。

    # 2、使用私有网络，可以实现虚拟机之间的访问，Vagrant将网卡设置为仅主机模式（Host-only），顾名思义，只能从宿主机访问虚拟机，无法通过外部主机访问虚拟机。
	config.vm.network "private_network", ip: "192.168.56.104"

    # 3、如果要从别的主机访问虚拟机，可以设置公有网络，在virtualbox中使用bridge桥接网络实现，桥接网络将虚拟机等同于网络中的真实主机，可以像访问其他主机一样访问虚拟机。
    # 除了指定ip，还需要指定桥接的网卡，查看桥接网卡命令为：VBoxManage list bridgedifs，记得将virtualbox目录添加到环境变量，否则找不到命令
    config.vm.network "public_network", ip: "192.168.0.201", bridge: "Realtek Gaming 2.5GbE Family Controller"

	# 设置主机与虚拟机的共享目录
	# config.vm.synced_folder "~/Documents/vagrant/share", "/home/vagrant/share"

    # 虚拟化提供者 provider
	# VirtaulBox相关配置，修改后，使用 vagrant reload 会自动修改对应配置
	config.vm.provider "virtualbox" do |v|
		# 设置虚拟机的名称，这个会在VirtualBox中显示的
		v.name = "lijing-ubuntu"
		# 设置虚拟机的内存大小
		v.memory = 4096
		# 设置虚拟机的CPU个数
		v.cpus = 4
	end

    # 配置管理器 provision
    # 配置管理器只在第一次使用 vagrant up 创建环境时执行，如果虚拟机已经创建，则vagrant up或vagrant reload不会再次运行配置管理器，需要显式调用
    # vagrant up --provision
    # vagrant reload --provision
    # 手动执行（常用来测试或调试脚本）：vagrant provision

    # 配置Shell脚本在虚拟机创建后启动时自动执行
    # 修改vagrant用户密码
    config.vm.provision "shell", inline: "echo vagrant:lijing123456 | sudo chpasswd"
    # 修改root用户密码
    config.vm.provision "shell", inline: "echo root:lijing123456 | sudo chpasswd"
    # 启用ssh密码登录，使用外部脚本，注意脚本位置
    config.vm.provision "shell", path: "enablePasswordAuth.sh"
    # 安装软件操作
    config.vm.provision "shell", inline: <<-SHELL

      # 命令补全工具
      sudo apt-get install -y bash-completion

      # 安装vim
      sudo apt-get install -y vim

      # 安装docker和docker-compose
      # ubuntu可能会自带docker并且版本太低，需要先卸载旧的再安装新的
      sudo apt-get remove docker docker-engine docker.io containerd runc -y
      # 获取软件最新源
      sudo apt-get -y update
      # 安装 apt 依赖包
      sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
      # 安装GPG证书
      curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
      # 设置稳定版仓库
      sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"

      # 再次更新软件源
      sudo apt-get -y update

      # 安装最新版本
      # sudo apt-get install docker-ce docker-ce-cli containerd.io -y
      # 安装指定版本
      sudo apt-get install -y docker-ce=5:20.10.17~3-0~ubuntu-jammy docker-ce-cli=5:20.10.17~3-0~ubuntu-jammy containerd.io docker-compose-plugin

      # 启动docker
      systemctl start docker

 	  # 编写镜像加速配置文件
      sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://n2zg5mlq.mirror.aliyuncs.com"]
}
EOF
      # 重启服务
      sudo systemctl daemon-reload
      sudo systemctl restart docker
      # 设置开机自启
      systemctl enable docker.service

      # 查看版本
      docker version
      docker compose version

    SHELL
end
```

`enablePasswordAuth.sh`

```bash
# 将 sshd_config 文件中以 PasswordAuthentication 开头的行（以 ^ 表示开头）替换为 PasswordAuthentication yes。
# 换句话说，它将禁用 SSH 密码身份验证更改为启用密码身份验证。
echo "==> Enable ssh password authentication"
sed -i 's/^PasswordAuthentication .*/PasswordAuthentication yes/' /etc/ssh/sshd_config
sudo su -c "echo 'LoginGraceTime 2m' >> /etc/ssh/sshd_config"
sudo su -c "echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config"
sudo su -c "echo 'StrictModes yes' >> /etc/ssh/sshd_config"
sudo su -c "echo 'MaxAuthTries 6' >> /etc/ssh/sshd_config"
sudo su -c "echo 'MaxSessions 10' >> /etc/ssh/sshd_config"
systemctl reload sshd
service sshd restart
service ssh restart
```

**卸载(如有需要可执行)**

删除安装包

```bash
sudo apt-get autoremove docker docker-ce docker-engine docker.io containerd runc
```

删除相关配置文件

```bash
dpkg -l | grep docker
dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P
```

卸载相关插件

```bash
sudo apt-get autoremove docker-ce-*
```

删除 docker 的相关配置

```bash
sudo rm -rf /etc/systemd/system/docker.service.d
sudo rm -rf /var/lib/docker
```

查询下 docker 相关软件包

```bash
dpkg -l | grep docker
```

验证

```bash
docker version
```

## 虚拟机扩容

我使用 CentOS 扩容的时候，需要手动增加分区容量，但是 Ubuntu 我改了容量后，自动帮我扩容了分区。

如果硬盘扩容了，但是分区信息没有变，则按照以下步骤执行。

如果虚拟机扩容了，需要执行以下操作：

```bash
# 比如我50G，扩展成了100G
# 执行 vagrant halt 关闭vagrant，然后重新拉起：vagrant up，会自动新增磁盘空间，但是里面的分区大小还是40G
# 需要手动分配
config.disksize.size = '100GB'
```

先搞懂以下概念：Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统（文件目录结构）。

因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合二为一的过程称为“挂载”。

> 如果不挂载，通过 Linux 系统中的图形界面系统可以查看找到硬件设备，但命令行方式无法找到。

挂载，指的就是将设备文件中的顶级目录连接到 Linux 根目录下的某一目录（最好是空目录），访问此目录就等同于访问设备文件。

纠正一个误区，并不是根目录下任何一个目录都可以作为挂载点，由于挂载操作会使得原有目录中文件被隐藏，因此根目录以及系统原有目录都不要作为挂载点，会造成系统异常甚至崩溃，挂载点最好是新建的空目录。

举个例子，我们想通过命令行访问某个 U 盘中的数据， U 盘文件目录结构和 Linux 系统中的文件目录结构。

![](https://image.xiaojingge.com/img/image-20231125182619224.png)

目前 U 盘和 Linux 系统文件分属两个文件系统，还无法使用命令行找到 U 盘文件，需要将两个文件系统进行挂载。

接下来，我们在根目录下新建一个目录 /sdb-u，通过挂载命令将 U 盘文件系统挂载到此目录

![](https://image.xiaojingge.com/img/image-20231125182640697.png)

可以看到，U 盘文件系统已经成为 Linux 文件系统目录的一部分，此时访问 /sdb-u/ 就等同于访问 U 盘。

前面讲过，根目录下的 /dev/ 目录文件负责所有的硬件设备文件，事实上，当 U 盘插入 Linux 后，系统也确实会给 U 盘分配一个目录文件（比如 sdb1），就位于 /dev/ 目录下（/dev/sdb1），但无法通过 /dev/sdb1/ 直接访问 U 盘数据，访问此目录只会提供给你此设备的一些基本信息（比如容量）。

总之，Linux 系统使用任何硬件设备，都必须将设备文件与已有目录文件进行挂载。

> `新装的虚拟机，按照如下操作，切记是用vagrant创建的空虚拟机`

如果你是刚装得虚拟机，建议如下操作，发现分区 q

```bash
[root@lijing-centos7 ~]# df
Filesystem     1K-blocks    Used Available Use% Mounted on
devtmpfs         1932460       0   1932460   0% /dev
tmpfs            1939976       0   1939976   0% /dev/shm
tmpfs            1939976    8676   1931300   1% /run
tmpfs            1939976       0   1939976   0% /sys/fs/cgroup
/dev/sda1       41921540 3389360  38532180   9% /
tmpfs             387996       0    387996   0% /run/user/1000
```

```bash
# 查看分区信息
fdisk -l
```

![](https://image.xiaojingge.com/img/image-20231125172615550.png)

执行 `fdisk /dev/sda` 将之前的分区删掉，重新创建一个主分区

![](https://image.xiaojingge.com/img/image-20231125173139852.png)

分区完，执行以下命令

```bash
partprobe /dev/sda
e2fsck /dev/sda1
xfs_growfs /dev/sda1
```

`df -h` 查看磁盘容量，扩容成功

![](https://image.xiaojingge.com/img/image-20231125173400002.png)

> `如果已经有生产项目部署了，不要像上面那样操作，应该扩容分区`
>
> 参考文章：[点我跳转](https://help.aliyun.com/zh/ecs/user-guide/extend-the-partitions-and-file-systems-of-disks-on-a-linux-instance#50541790adikn)

运行以下命令，扩容指定分区。例如扩容分区名称为`/dev/sda1`的分区，则执行如下命令。

**说明**

- 命令参数中的`/dev/sda`和`1`之间需要空格分隔，`1`是分区编号。

**步骤 1：扩容分区**

MBR 分区

```bash
type growpart || yum install -y cloud-utils-growpart
LC_ALL=en_US.UTF-8 growpart /dev/sda 1
```

GPT 分区（需安装 gdisk 工具）

```bash
# 分区名称视情况调整
type growpart || yum install -y cloud-utils-growpart
type sgdisk || yum install -y gdisk
LC_ALL=en_US.UTF-8 growpart /dev/sda 1
```

如下所示，输出`CHANGED`字样时，表示分区扩容成功。

```bash
[root@lijing-centos7 dev]# LC_ALL=en_US.UTF-8 growpart /dev/sda 1
CHANGED: partition=1 start=2048 old: size=83884032 end=83886080 new: size=209713119 end=209715167
```

**步骤 2：扩容文件系统**

运行以下命令，获取需要扩容的文件系统的类型和挂载目录。

```shell
df -Th
```

`Type`值为文件系统类型，`Mounted on`值为分区的挂载目录。如下表示`/dev/sda1`分区的文件系统类型为**xfs**，挂载目录为**/**。

```bash
[root@lijing-centos7 ~]# df -Th
Filesystem     Type      Size  Used Avail Use% Mounted on
devtmpfs       devtmpfs  1.9G     0  1.9G   0% /dev
tmpfs          tmpfs     1.9G     0  1.9G   0% /dev/shm
tmpfs          tmpfs     1.9G  8.5M  1.9G   1% /run
tmpfs          tmpfs     1.9G     0  1.9G   0% /sys/fs/cgroup
/dev/sda1      xfs       100G  3.3G   97G   4% /
tmpfs          tmpfs     379M     0  379M   0% /run/user/1000
```

如果**Filesystem**取值后缀不带数字（例如`/dev/vdc`），则为裸设备。

扩容文件系统：

扩容命令因文件系统类型而异，请您根据上一步中查询到的文件系统类型选择以下命令。

`ext*（例如ext2、ext3、ext4）文件系统：`

```bash
resize2fs /dev/sda1
```

`xfs文件系统`

```bash
# / 为挂载点
type xfs_growfs || yum install -y xfsprogs
xfs_growfs /
```

`btrfs文件系统`

```bash
btrfs filesystem resize max /
```

运行以下命令，确认是否扩容成功。

```shell
df -Th
```

当查询结果中的文件系统容量和控制台容量一致时，表示扩容成功。
