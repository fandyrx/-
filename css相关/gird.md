## 基本使用
- 1.Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。这部分先介绍容器属性。
---
 - 1.1 display: grid 指定一个容器采用网格布局。  
      display: inline-grid;默认情况下，容器元素都是块级元素，但也可以设成行内元素。
 - 1.2 grid-template-columns 属性 定义每一列的列宽
      grid-template-rows 属性 定义每一列的行高
  ```
  .container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;     //每行100px *3  单位可写百分比
  }
  
  ```
  - 1.3  repeat()
 ```
    简化: grid-template-rows:  repeat(3,100px) ;  //100px 三行重复
         repeat(2, 100px 20px 80px);    //  100px 20px 80px 模式重复两次
 ```



## auto-fill 自动填充  auto关键字浏览器自动决定
- 有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。

## fr  比例关系  
  - 为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。

## minmax()函数
 - 产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

## 网格线名称  
- 网格线可以决定从哪开始布局:
例如: grid-column-start: 2; 从第二列开始grid-column-start: 3 第三列结束
```
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
一根线可以有多个命名 [c1 first-line]
```

- 简写:  grid-column: <start-line> / <end-line>;
          grid-row: <start-line> / <end-line>;
span关键字，表示跨越多少个网格。

## 2. row-gap 属性，column-gap 属性，gap 属性
 - row-gap属性设置行与行的间隔（行间距）
 - column-gap属性设置列与列的间隔（列间距）。
- 合并简写 :gap: <row-gap> <column-gap>; 
## 3. gird-template-area
```
3.1划分3*3 =>9个单元格
grid-template-columns: 100px 100px 100px;
grid-template-rows: 100px 100px 100px;
将9个单元格,按区域划分(分配命名)
grid-template-areas: 'a b c'
                      'd e f'
                      'g h i';
合并单元格(也可以根据命名合并):
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';

                     如果某些区域不需要利用，则使用"点"（.）表示。
                     每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。
```
  - 补充: grid-area属性指定项目放在哪一个区域。 grid-area: e;
  - grid-area: <row-start> / <column-start> / <row-end> / <column-end>;

## 4.grid-auto-flow 属性
- 类似flex-direction 决定排列顺序,默认:row，即"先行后列"
- row dense和column dense  这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置.
  

### 内容排列
- justify-items属性设置单元格内容的水平位置（左中右）
- align-items属性设置单元格内容的垂直位置（上中下）。
- place-items: <align-items> <justify-items>; 合并写法

```
属性值
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。
stretch：拉伸，占满单元格的整个宽度（默认值）。
```

---
## justify-content ,align-content ,place-content 

控制整个内容区域(所有的item集合)统一位置
```
start | end | center | stretch | space-around | space-between | space-evenly;
```
