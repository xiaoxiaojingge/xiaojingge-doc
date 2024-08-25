# 命令

## 导出项目依赖版本

```bash
pip list --format=freeze > requirements_python_3_11.txt
```

##  安装Pytorch

```bash
# python3.9
pip install torch==1.11.0+cu113 -f https://mirror.sjtu.edu.cn/pytorch-wheels/cu113/?mirror_intel_list

# python3.11
pip install torch==2.0.0+cu117 -f https://mirror.sjtu.edu.cn/pytorch-wheels/cu117/?mirror_intel_list
```
