import{_ as i,o as n,c as a,a as l,f as d}from"./app-xXgWGijP.js";const s={};function r(v,e){return n(),a("div",null,[l(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),e[0]||(e[0]=d(`<h1 id="接口定义" tabindex="-1"><a class="header-anchor" href="#接口定义" aria-hidden="true">#</a> 接口定义</h1><h2 id="写入接口" tabindex="-1"><a class="header-anchor" href="#写入接口" aria-hidden="true">#</a> 写入接口</h2><h3 id="itsfilewriter" tabindex="-1"><a class="header-anchor" href="#itsfilewriter" aria-hidden="true">#</a> ITsFileWriter</h3><p>用于写入数据至 tsfile</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>interface ITsFileWriter extends AutoCloseable {
  // 写入数据
  void write(Tablet tablet);
  // 关闭写入
  void close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tsfilewriterbuilder" tabindex="-1"><a class="header-anchor" href="#tsfilewriterbuilder" aria-hidden="true">#</a> TsFileWriterBuilder</h3><p>用于构造 ITsFileWriter</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class TsFileWriterBuilder {
  // 构建 ITsFileWriter 对象
  public ITsFileWriter build();
  // 目标文件
  public TsFileWriterBuilder file(File file);
  // 用于构造表结构
  public TsFileWriterBuilder tableSchema(TableSchema schema);
  // 用于限制对象的内存大小
  public TsFileWriterBuilder memoryThreshold(long memoryThreshold);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tableschema" tabindex="-1"><a class="header-anchor" href="#tableschema" aria-hidden="true">#</a> TableSchema</h3><p>描述表 schema 的数据结构</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class TableSchema {
  // 构造函数
  public TableSchema(String tableName, List&lt;ColumnSchema&gt; columnSchemaList);
}

class ColumnSchema {
  // 构造函数
  public ColumnSchema(String columnName, TSDataType dataType, ColumnCategory columnCategory);
  // 获取列名
  public String getColumnName();
  // 获取列的数据类型
  public TSDataType getDataType();
  // 获取列的类别
  public Tablet.ColumnCategory getColumnCategory();
}

class ColumnSchemaBuilder {
  // 构建 ColumnSchema 对象
  public ColumnSchema build();
  // 列名
  public ColumnSchemaBuilder name(String columnName);
  // 列的数据类型
  public ColumnSchemaBuilder dataType(TSDataType columnType);
  // 列类别
  public ColumnSchemaBuilder category(ColumnCategory columnCategory);
  // 支持的数据类型
  enum TSDataType {    
    BOOLEAN,    
    INT32,    
    INT64,    
    FLOAT,    
    DOUBLE,    
    TIMESTAMP,    
    TEXT,    
    DATE,    
    BLOB,    
    STRING;  
  }
  // 支持的列类别
  enum ColumnCategory {    
    TAG,   
    FIELD 
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tablet" tabindex="-1"><a class="header-anchor" href="#tablet" aria-hidden="true">#</a> Tablet</h3><p>写入的列式内存结构</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Tablet {
  // 构造函数
  public Tablet(List&lt;String&gt; columnNameList, List&lt;TSDataType&gt; dataTypeList);
  public Tablet(List&lt;String&gt; columnNameList, List&lt;TSDataType&gt; dataTypeList, int maxRowNum);
  // 添加时间戳的接口
  void addTimestamp(int rowIndex, long timestamp);
  // 添加值的接口
  // 根据列名添加值
  void addValue(int rowIndex, String columnName, int val);
  void addValue(int rowIndex, String columnName, long val);  
  void addValue(int rowIndex, String columnName, float val);  
  void addValue(int rowIndex, String columnName, double val);  
  void addValue(int rowIndex, String columnName, boolean val);  
  void addValue(int rowIndex, String columnName, String val);
  void addValue(int rowIndex, String columnName, byte[] val);
  void addValue(int rowIndex, String columnName, LocalDate val); 
  // 根据索引位置添加值
  void addValue(int rowIndex, int columnIndex, int val);
  void addValue(int rowIndex, int columnIndex, long val);  
  void addValue(int rowIndex, int columnIndex, float val);  
  void addValue(int rowIndex, int columnIndex, double val);  
  void addValue(int rowIndex, int columnIndex, boolean val); 
  void addValue(int rowIndex, int columnIndex, String val);
  void addValue(int rowIndex, int columnIndex, byte[] val); 
  void addValue(int rowIndex, int columnIndex, LocalDate val);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询接口" tabindex="-1"><a class="header-anchor" href="#查询接口" aria-hidden="true">#</a> 查询接口</h2><h3 id="itsfilereader" tabindex="-1"><a class="header-anchor" href="#itsfilereader" aria-hidden="true">#</a> ITsFileReader</h3><p>用于查询 tsfile 中的数据</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>interface ITsFileReader extends AutoCloseable {
  // 用于执行查询并返回结果
  ResultSet query(String tableName, List&lt;String&gt; columnNames, long startTime, long endTime);
  // 返回tsfile中名为tableName的表的架构
  Optional&lt;TableSchema&gt; getTableSchemas(String tableName);
  // 检索ts文件中所有表的架构信息
  List&lt;TableSchema&gt; getAllTableSchema();
  // 关闭查询
  void close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tsfilereaderbuilder" tabindex="-1"><a class="header-anchor" href="#tsfilereaderbuilder" aria-hidden="true">#</a> TsFileReaderBuilder</h3><p>用于构建 ITsFileWriter</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class TsFileReaderBuilder {
  // 构建 ITsFileReader 对象
  public ITsFileReader build();
  // 目标文件
  public TsFileReaderBuilder file(File file);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset" aria-hidden="true">#</a> ResultSet</h3><p>用于构建 ITsFileWriter</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>interface ResultSet extends AutoCloseable {  
  // 将光标移动到下一行并返回是否还有数据
  boolean next();
    
  // 获取当前行和某一列的值
  int getInt(String columnName);  
  int getInt(int columnIndex);  
  long getLong(String columnName);  
  long getLong(int columnIndex);
  float getFloat(String columnName);
  float getFloat(int columnIndex); 
  double getDouble(String columnName);
  double getDouble(int columnIndex); 
  boolean getBoolean(String columnName);
  boolean getBoolean(int columnIndex);
  String getString(String columnName);
  String getString(int columnIndex);
  LocalDate getDate(String columnName);
  LocalDate getDate(int columnIndex); 
  byte[] getBinary(String columnName);
  byte[] getBinary(int columnIndex);
     
  // 确定当前行中的列是否为NULL
  boolean isNull(String columnName);  
  boolean isNull(int columnIndex);  
    
  // 关闭当前结构集
  void close();
    
  // 获取结果集的表头
  ResultSetMetadata getMetadata();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resultsetmetadata" tabindex="-1"><a class="header-anchor" href="#resultsetmetadata" aria-hidden="true">#</a> ResultSetMetadata</h3><p>用于获取结果集的元数据</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>interface ResultSetMetadata {
  // 获取结果集第N列的列名
  String getColumnName(int columnIndex);
  // 获取结果集第N列的数据类型
  TSDataType getColumnType(int columnIndex);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27))])}const u=i(s,[["render",r],["__file","Interface-Definitions.html.vue"]]);export{u as default};
