import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as l,o as e}from"./app-CzXL-8ma.js";const p={};function o(i,s){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="接口定义-python" tabindex="-1"><a class="header-anchor" href="#接口定义-python"><span>接口定义 - Python</span></a></h1><h2 id="数据模式" tabindex="-1"><a class="header-anchor" href="#数据模式"><span>数据模式</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TSDataType</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">IntEnum</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    TsFile 当前支持的数据类型枚举。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#D19A66;">    BOOLEAN</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#D19A66;">    INT32</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#D19A66;">    INT64</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#D19A66;">    FLOAT</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 3</span></span>
<span class="line"><span style="color:#D19A66;">    DOUBLE</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 4</span></span>
<span class="line"><span style="color:#D19A66;">    TEXT</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 5</span></span>
<span class="line"><span style="color:#D19A66;">    TIMESTAMP</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 8</span></span>
<span class="line"><span style="color:#D19A66;">    DATE</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 9</span></span>
<span class="line"><span style="color:#D19A66;">    BLOB</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 10</span></span>
<span class="line"><span style="color:#D19A66;">    STRING</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 11</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TSEncoding</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">IntEnum</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    写入器支持的值编码。每个成员后的注释列出其可用于哪些数据类型。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#D19A66;">    PLAIN</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#7F848E;font-style:italic;">         # 所有类型</span></span>
<span class="line"><span style="color:#D19A66;">    DICTIONARY</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1</span><span style="color:#7F848E;font-style:italic;">    # STRING、TEXT</span></span>
<span class="line"><span style="color:#D19A66;">    RLE</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span><span style="color:#7F848E;font-style:italic;">           # INT32、INT64、TIMESTAMP、DATE</span></span>
<span class="line"><span style="color:#D19A66;">    TS_2DIFF</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 4</span><span style="color:#7F848E;font-style:italic;">      # INT32、INT64、TIMESTAMP、DATE、FLOAT、DOUBLE</span></span>
<span class="line"><span style="color:#D19A66;">    GORILLA</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 8</span><span style="color:#7F848E;font-style:italic;">       # INT32、INT64、TIMESTAMP、DATE、FLOAT、DOUBLE</span></span>
<span class="line"><span style="color:#D19A66;">    ZIGZAG</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 9</span><span style="color:#7F848E;font-style:italic;">        # INT32、INT64</span></span>
<span class="line"><span style="color:#D19A66;">    SPRINTZ</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 12</span><span style="color:#7F848E;font-style:italic;">      # INT32、INT64、FLOAT、DOUBLE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> Compressor</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">IntEnum</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    写入器支持的压缩，默认值为 LZ4。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#D19A66;">    UNCOMPRESSED</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#D19A66;">    SNAPPY</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#D19A66;">    GZIP</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#D19A66;">    LZO</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 3</span></span>
<span class="line"><span style="color:#D19A66;">    LZ4</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ColumnCategory</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">IntEnum</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    TsFile 中的列类别枚举。</span></span>
<span class="line"><span style="color:#98C379;">    TAG：标签列</span></span>
<span class="line"><span style="color:#98C379;">    FIELD：测点列，存储测量值。</span></span>
<span class="line"><span style="color:#98C379;">    ATTRIBUTE / TIME：保留的列角色。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#D19A66;">    TAG</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#D19A66;">    FIELD</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#D19A66;">    ATTRIBUTE</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#D19A66;">    TIME</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ColumnSchema</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;定义表中某一列的模式（名称、数据类型、类别）。&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    column_name </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    data_type </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    category </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">data_type</span><span style="color:#ABB2BF;">: TSDataType,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 category</span><span style="color:#ABB2BF;">: ColumnCategory </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> ColumnCategory.</span><span style="color:#D19A66;">FIELD</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TableSchema</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;表结构的模式定义。&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    table_name </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    columns </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">columns</span><span style="color:#ABB2BF;">: List[ColumnSchema])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ResultSetMetaData</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;查询结果集的元数据容器（列名、类型、表名）。&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    column_list </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    data_types </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    table_name </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_list</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">], </span><span style="color:#D19A66;font-style:italic;">data_types</span><span style="color:#ABB2BF;">: List[TSDataType])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入接口" tabindex="-1"><a class="header-anchor" href="#写入接口"><span>写入接口</span></a></h2><h3 id="tsfilewriter" tabindex="-1"><a class="header-anchor" href="#tsfilewriter"><span>TsFileWriter</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TsFileTableWriter</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    用于将结构化表格数据写入具有指定模式的 TsFile。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    :param path: tsfile 文件路径，如果不存在则会创建。</span></span>
<span class="line"><span style="color:#98C379;">    :param table_schema: 描述要写入表的结构信息。</span></span>
<span class="line"><span style="color:#98C379;">    :param memory_threshold: 触发自动刷盘前缓冲的字节数（默认 128MB）。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_schema</span><span style="color:#ABB2BF;">: TableSchema,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 memory_threshold</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 128</span><span style="color:#56B6C2;"> *</span><span style="color:#D19A66;"> 1024</span><span style="color:#56B6C2;"> *</span><span style="color:#D19A66;"> 1024</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    将一个 Tablet 写入 TsFile 中的表中。</span></span>
<span class="line"><span style="color:#98C379;">    :param tablet: 存储表的批量数据。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> write_table</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">tablet</span><span style="color:#ABB2BF;">: Tablet)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    将一个 pandas DataFrame 写入表中。列的编码/压缩遵循表 schema（或引擎默认值）。</span></span>
<span class="line"><span style="color:#98C379;">    :param dataframe: 要写入的数据。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> write_dataframe</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">dataframe</span><span style="color:#ABB2BF;">: pandas.DataFrame)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    将缓冲数据刷新到磁盘。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> flush</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    关闭 TsFileTableWriter，并自动刷新数据。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    # 可作为上下文管理器使用：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    #   with TsFileTableWriter(path, schema) as w:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    #       w.write_table(tablet)</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __enter__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __exit__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">exc_type</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">exc_val</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">exc_tb</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tablet-definition" tabindex="-1"><a class="header-anchor" href="#tablet-definition"><span>Tablet definition</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> Tablet</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">    一个为批量数据预分配的列式数据容器</span><span style="color:#ABB2BF;">，</span><span style="color:#E5C07B;">具有类型约束</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"><span style="color:#E5C07B;">    它会创建时间戳缓冲区和带类型的数据列</span><span style="color:#ABB2BF;">，</span><span style="color:#E5C07B;">并对数值类型执行有效值范围校验</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    初始化参数</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    :param column_name_list: 数据列的名称列表。</span></span>
<span class="line"><span style="color:#ABB2BF;">    :param type_list: 每列允许的数据类型（TSDataType 枚举值）。</span></span>
<span class="line"><span style="color:#ABB2BF;">    :param max_row_num: 预分配的最大行数（默认值为 </span><span style="color:#D19A66;">1024</span><span style="color:#ABB2BF;">）。</span></span>
<span class="line"><span style="color:#ABB2BF;">    :</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    def __init__(self, column_name_list: list[str], type_list: list[TSDataType],</span></span>
<span class="line"><span style="color:#98C379;">                 max_row_num: int = 1024)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dataframe-to-tsfile" tabindex="-1"><a class="header-anchor" href="#dataframe-to-tsfile"><span>dataframe_to_tsfile</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">def</span><span style="color:#61AFEF;"> dataframe_to_tsfile</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">dataframe</span><span style="color:#ABB2BF;">: pd.DataFrame,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                        file_path</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                        table_name</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                        time_column</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                        tag_column</span><span style="color:#ABB2BF;">: Optional[list[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">]] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    将 pandas DataFrame 写入 TsFile。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param dataframe:   要写入的数据。</span></span>
<span class="line"><span style="color:#98C379;">    :param file_path:   目标 .tsfile 路径。</span></span>
<span class="line"><span style="color:#98C379;">    :param table_name:  输出表名。</span></span>
<span class="line"><span style="color:#98C379;">    :param time_column: 用作时间戳列的列名。</span></span>
<span class="line"><span style="color:#98C379;">    :param tag_column:  作为 TAG 列处理的列名列表。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>全局写入默认值——包括各类型的默认编码、默认压缩、时间列编码/压缩——以一个字典暴露。<br> 请在创建写入器 <strong>之前</strong> 修改它们。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> tsfile </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> get_tsfile_config, set_tsfile_config</span></span>
<span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> tsfile </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> TSEncoding, Compressor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">cfg </span><span style="color:#56B6C2;">=</span><span style="color:#61AFEF;"> get_tsfile_config</span><span style="color:#ABB2BF;">()          </span><span style="color:#7F848E;font-style:italic;"># -&gt; 包含所有配置项的 dict</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 例如 cfg[&quot;default_compression_type_&quot;]、cfg[&quot;int64_encoding_type_&quot;]、</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#      cfg[&quot;time_encoding_type_&quot;]、cfg[&quot;time_compress_type_&quot;] 等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">set_tsfile_config</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#98C379;">    &quot;default_compression_type_&quot;</span><span style="color:#ABB2BF;">: Compressor.</span><span style="color:#D19A66;">LZ4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">    &quot;int64_encoding_type_&quot;</span><span style="color:#ABB2BF;">: TSEncoding.</span><span style="color:#D19A66;">TS_2DIFF</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>set_tsfile_config</code> 会校验每个取值，且只更新你传入的键。编码/压缩取值为 <code>TSEncoding</code> / <code>Compressor</code><br> 成员。各数据类型允许的编码，以及不修改时使用的默认值：</p><table><thead><tr><th>数据类型</th><th>允许的编码</th><th>默认值</th></tr></thead><tbody><tr><td><code>BOOLEAN</code></td><td><code>PLAIN</code></td><td><code>PLAIN</code></td></tr><tr><td><code>INT32</code>、<code>INT64</code>、<code>DATE</code></td><td><code>PLAIN</code>、<code>TS_2DIFF</code>、<code>GORILLA</code>、<code>ZIGZAG</code>、<code>RLE</code>、<code>SPRINTZ</code></td><td><code>TS_2DIFF</code></td></tr><tr><td><code>FLOAT</code>、<code>DOUBLE</code></td><td><code>PLAIN</code>、<code>TS_2DIFF</code>、<code>GORILLA</code>、<code>SPRINTZ</code></td><td><code>GORILLA</code></td></tr><tr><td><code>STRING</code>、<code>TEXT</code></td><td><code>PLAIN</code>、<code>DICTIONARY</code></td><td><code>PLAIN</code></td></tr></tbody></table><p>压缩适用于所有数据类型：<code>UNCOMPRESSED</code>、<code>SNAPPY</code>、<code>GZIP</code>、<code>LZO</code>、<code>LZ4</code>（默认 <code>LZ4</code>）。</p><h2 id="读取接口" tabindex="-1"><a class="header-anchor" href="#读取接口"><span>读取接口</span></a></h2><h3 id="tsfilereader" tabindex="-1"><a class="header-anchor" href="#tsfilereader"><span>TsFileReader</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TsFileReader</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    从 TsFile 中查询表格数据。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    初始化指定路径的 TsFile 读取器。</span></span>
<span class="line"><span style="color:#98C379;">    :param pathname: TsFile 文件的路径。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">pathname</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    对指定的表和列执行时间范围查询。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param table_name: 要查询的表名。</span></span>
<span class="line"><span style="color:#98C379;">    :param column_names: 要检索的列名列表。</span></span>
<span class="line"><span style="color:#98C379;">    :param start_time: 查询范围的起始时间（默认：int64 最小值）。</span></span>
<span class="line"><span style="color:#98C379;">    :param end_time: 查询范围的结束时间（默认：int64 最大值）。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 查询结果集处理器。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_table</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_name</span><span style="color:#ABB2BF;"> : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_names</span><span style="color:#ABB2BF;"> : List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    start_time</span><span style="color:#ABB2BF;"> : </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).min,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    end_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).max) -&gt; ResultSet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    按行查询表，支持偏移量/行数限制下推与可选的标签过滤。标签谓词把查询限定到</span></span>
<span class="line"><span style="color:#98C379;">    标签列取值满足条件的设备。用 tsfile.tag_filter 中的辅助函数构造过滤器</span></span>
<span class="line"><span style="color:#98C379;">    （tag_eq、tag_neq、tag_lt、tag_lteq、tag_gt、tag_gteq、tag_between 等），</span></span>
<span class="line"><span style="color:#98C379;">    并用 &amp;、| 和 ~ 组合。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param table_name: 要查询的表名。</span></span>
<span class="line"><span style="color:#98C379;">    :param column_names: 要检索的列名列表。</span></span>
<span class="line"><span style="color:#98C379;">    :param offset: 需要跳过的起始行数（默认 0）。</span></span>
<span class="line"><span style="color:#98C379;">    :param limit: 最多返回的行数；&lt; 0 表示不限制。</span></span>
<span class="line"><span style="color:#98C379;">    :param tag_filter: 可选的标签谓词（TagFilter），None 表示不过滤。</span></span>
<span class="line"><span style="color:#98C379;">    :param batch_size: &lt;= 0 逐行返回；&gt; 0 按该大小返回数据块。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 查询结果集处理器。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_table_by_row</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, table_name : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, column_names : List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">                           offset : </span><span style="color:#E06C75;font-style:italic;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">, limit : </span><span style="color:#E06C75;font-style:italic;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#56B6C2;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;font-style:italic;">                           tag_filter</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">, batch_size : </span><span style="color:#E06C75;font-style:italic;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> ResultSet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    获取指定表的模式信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param table_name: 表名。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 指定表的模式信息。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_table_schema</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, table_name : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> TableSchema</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    获取 TsFile 中所有表的模式信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: 一个将表名映射到其模式的字典。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_all_table_schemas</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> dict[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, TableSchema]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    关闭 TsFile 读取器。如果读取器中有活动的结果集，它们将失效。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset"><span>ResultSet</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ResultSet</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    用于从查询结果集中获取数据。当执行查询时，将返回一个结果集处理器。</span></span>
<span class="line"><span style="color:#98C379;">    如果读取器被关闭，该结果集将失效。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    检查并移动到查询结果集中的下一行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: 如果存在下一行则返回 True，否则返回 False。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> next</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#56B6C2;">bool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    获取结果集的列信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: 一个字典，键为列名，值为对应的数据类型。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_result_column_info</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> dict[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, TsDataType]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    从查询结果集中读取下一个 DataFrame。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param max_row_num: 要读取的最大行数，默认值为 1024。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 包含查询结果数据的 DataFrame。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> read_data_frame</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, max_row_num : </span><span style="color:#E06C75;font-style:italic;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1024</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> DataFrame</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    从查询结果集中按索引获取值。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param index: 要获取值的索引，1 &lt;= index &lt;= column_num。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 指定索引处的值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_value_by_index</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, index : </span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    从查询结果集中按列名获取值。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param column_name: 要获取值的列名。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 指定列的值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_value_by_name</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, column_name : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    获取结果集的元数据信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: 结果集的元数据，类型为 ResultSetMetadata 对象。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_metadata</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> ResultSetMetadata</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    检查结果集中指定索引位置的字段是否为 null。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param index: 要检查的字段索引，1 &lt;= index &lt;= column_num。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 若字段为 null 返回 True，否则返回 False。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> is_null_by_index</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, index : </span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    检查结果集中指定列名的字段是否为 null。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param name: 要检查的列名。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 若字段为 null 返回 True，否则返回 False。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> is_null_by_name</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, name : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    关闭结果集并释放相关资源。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-dataframe" tabindex="-1"><a class="header-anchor" href="#to-dataframe"><span>to_dataframe</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#61AFEF;"> to_dataframe</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">file_path</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 table_name</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 column_names</span><span style="color:#ABB2BF;">: Optional[list[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">]] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 start_time</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 end_time</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 max_row_num</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 as_iterator</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">bool</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> False</span><span style="color:#ABB2BF;">) -&gt; Union[pd.DataFrame, Iterator[pd.DataFrame]]:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">       从 TsFile 中读取数据，并将其转换为 Pandas DataFrame</span></span>
<span class="line"><span style="color:#98C379;">       或 DataFrame 迭代器。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       用户可以通过表名、列名、时间范围以及最大行数对数据进行过滤。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       Parameters</span></span>
<span class="line"><span style="color:#98C379;">       ----------</span></span>
<span class="line"><span style="color:#98C379;">       file_path : str</span></span>
<span class="line"><span style="color:#98C379;">           要读取的 TsFile 文件路径。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       table_name : Optional[str], default None</span></span>
<span class="line"><span style="color:#98C379;">           表模型 TsFile 中要查询的表名。</span></span>
<span class="line"><span style="color:#98C379;">           如果为 None 且文件为表模型，</span></span>
<span class="line"><span style="color:#98C379;">           将使用 schema 中找到的第一个表。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       column_names : Optional[list[str]], default None</span></span>
<span class="line"><span style="color:#98C379;">           要查询的列名/测点名列表。</span></span>
<span class="line"><span style="color:#98C379;">           - 如果为 None，则返回所有列。</span></span>
<span class="line"><span style="color:#98C379;">           - 在表模型 TsFile 中会校验列是否存在。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       start_time : Optional[int], default None</span></span>
<span class="line"><span style="color:#98C379;">           查询的起始时间戳。</span></span>
<span class="line"><span style="color:#98C379;">           如果为 None，则使用 int64 的最小值。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       end_time : Optional[int], default None</span></span>
<span class="line"><span style="color:#98C379;">           查询的结束时间戳。</span></span>
<span class="line"><span style="color:#98C379;">           如果为 None，则使用 int64 的最大值。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       max_row_num : Optional[int], default None</span></span>
<span class="line"><span style="color:#98C379;">           读取的最大行数。</span></span>
<span class="line"><span style="color:#98C379;">           - 如果为 None，则返回所有可用数据。</span></span>
<span class="line"><span style="color:#98C379;">           - 当 \`as_iterator\` 为 False 时，</span></span>
<span class="line"><span style="color:#98C379;">             若结果行数超过该值，DataFrame 将被截断。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       as_iterator : bool, default False</span></span>
<span class="line"><span style="color:#98C379;">           是否返回 DataFrame 迭代器，而不是单个合并后的 DataFrame。</span></span>
<span class="line"><span style="color:#98C379;">           - True：返回按批次生成 DataFrame 的迭代器</span></span>
<span class="line"><span style="color:#98C379;">           - False：返回单个 Pandas DataFrame</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       Returns</span></span>
<span class="line"><span style="color:#98C379;">       -------</span></span>
<span class="line"><span style="color:#98C379;">       Union[pandas.DataFrame, Iterator[pandas.DataFrame]]</span></span>
<span class="line"><span style="color:#98C379;">           - 当 \`as_iterator\` 为 False 时，返回 Pandas DataFrame</span></span>
<span class="line"><span style="color:#98C379;">           - 当 \`as_iterator\` 为 True 时，返回 Pandas DataFrame 迭代器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       Raises</span></span>
<span class="line"><span style="color:#98C379;">       ------</span></span>
<span class="line"><span style="color:#98C379;">       TableNotExistError</span></span>
<span class="line"><span style="color:#98C379;">           当指定的表名在表模型 TsFile 中不存在时抛出。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       ColumnNotExistError</span></span>
<span class="line"><span style="color:#98C379;">           当指定的列在表结构中不存在时抛出。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)])])}const r=n(p,[["render",o]]),d=JSON.parse('{"path":"/zh/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html","title":"接口定义 - Python","lang":"zh-CN","frontmatter":{"description":"接口定义 - Python 数据模式 写入接口 TsFileWriter Tablet definition dataframe_to_tsfile 配置 全局写入默认值——包括各类型的默认编码、默认压缩、时间列编码/压缩——以一个字典暴露。 请在创建写入器 之前 修改它们。 set_tsfile_config 会校验每个取值，且只更新你传入的键。编码...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://tsfile.apache.org/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html"}],["meta",{"property":"og:url","content":"https://tsfile.apache.org/zh/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html"}],["meta",{"property":"og:site_name","content":"Apache TsFile"}],["meta",{"property":"og:title","content":"接口定义 - Python"}],["meta",{"property":"og:description","content":"接口定义 - Python 数据模式 写入接口 TsFileWriter Tablet definition dataframe_to_tsfile 配置 全局写入默认值——包括各类型的默认编码、默认压缩、时间列编码/压缩——以一个字典暴露。 请在创建写入器 之前 修改它们。 set_tsfile_config 会校验每个取值，且只更新你传入的键。编码..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-08-03T01:00:52.000Z"}],["meta",{"property":"article:modified_time","content":"2026-08-03T01:00:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口定义 - Python\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-08-03T01:00:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据模式","slug":"数据模式","link":"#数据模式","children":[]},{"level":2,"title":"写入接口","slug":"写入接口","link":"#写入接口","children":[{"level":3,"title":"TsFileWriter","slug":"tsfilewriter","link":"#tsfilewriter","children":[]},{"level":3,"title":"Tablet definition","slug":"tablet-definition","link":"#tablet-definition","children":[]},{"level":3,"title":"dataframe_to_tsfile","slug":"dataframe-to-tsfile","link":"#dataframe-to-tsfile","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"读取接口","slug":"读取接口","link":"#读取接口","children":[{"level":3,"title":"TsFileReader","slug":"tsfilereader","link":"#tsfilereader","children":[]},{"level":3,"title":"ResultSet","slug":"resultset","link":"#resultset","children":[]},{"level":3,"title":"to_dataframe","slug":"to-dataframe","link":"#to-dataframe","children":[]}]}],"git":{"createdTime":1785718852000,"updatedTime":1785718852000,"contributors":[{"name":"Jackie Tien","username":"Jackie Tien","email":"jackietien97@gmail.com","commits":1,"url":"https://github.com/Jackie Tien"}]},"readingTime":{"minutes":7.25,"words":2176},"filePathRelative":"zh/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.md","localizedDate":"2026年8月3日","autoDesc":true}');export{r as comp,d as data};
