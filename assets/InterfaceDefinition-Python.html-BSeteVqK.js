import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{a,b as l,o as e}from"./app-CUXP-LwG.js";const p={};function o(i,s){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="接口定义-python" tabindex="-1"><a class="header-anchor" href="#接口定义-python"><span>接口定义 - Python</span></a></h1><h2 id="数据模式" tabindex="-1"><a class="header-anchor" href="#数据模式"><span>数据模式</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TSDataType</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">IntEnum</span><span style="color:#ABB2BF;">):</span></span>
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
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ColumnCategory</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">IntEnum</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    TsFile 中的列类别枚举。</span></span>
<span class="line"><span style="color:#98C379;">    TAG：表示标签列，用于存储元数据。</span></span>
<span class="line"><span style="color:#98C379;">    FIELD：表示测点列，用于存储实际数据值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#D19A66;">    TAG</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#D19A66;">    FIELD</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1</span></span>
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
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_list</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">], </span><span style="color:#D19A66;font-style:italic;">data_types</span><span style="color:#ABB2BF;">: List[TSDataType])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入接口" tabindex="-1"><a class="header-anchor" href="#写入接口"><span>写入接口</span></a></h2><h3 id="tsfilewriter" tabindex="-1"><a class="header-anchor" href="#tsfilewriter"><span>TsFileWriter</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TsFileTableWriter</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    用于将结构化表格数据写入具有指定模式的 TsFile。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    :param path: tsfile 文件路径，如果不存在则会创建。</span></span>
<span class="line"><span style="color:#98C379;">    :param table_schema: 描述要写入表的结构信息。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_schema</span><span style="color:#ABB2BF;">: TableSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    将一个 Tablet 写入 TsFile 中的表中。</span></span>
<span class="line"><span style="color:#98C379;">    :param tablet: 存储表的批量数据。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> write_table</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">tablet</span><span style="color:#ABB2BF;">: Tablet)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    关闭 TsFileTableWriter，并自动刷新数据。</span></span>
<span class="line"><span style="color:#98C379;">    :return: 无返回值。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tablet-definition" tabindex="-1"><a class="header-anchor" href="#tablet-definition"><span>Tablet definition</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> Tablet</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">)</span></span>
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
<span class="line"><span style="color:#98C379;">                 max_row_num: int = 1024)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取接口" tabindex="-1"><a class="header-anchor" href="#读取接口"><span>读取接口</span></a></h2><h3 id="tsfilereader" tabindex="-1"><a class="header-anchor" href="#tsfilereader"><span>TsFileReader</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TsFileReader</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    从 TsFile 中查询表格数据、时序数据，提供标准化的文件读取与查询接口，</span></span>
<span class="line"><span style="color:#98C379;">    支持表模型查询、树模型查询、元数据获取、资源管控等全量核心能力。</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">pathname</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        初始化指定路径的 TsFile 读取器，完成文件加载与底层读取器初始化，</span></span>
<span class="line"><span style="color:#98C379;">        同时维护当前所有活跃的查询结果集，确保读取器关闭时同步失效所有结果集。</span></span>
<span class="line"><span style="color:#98C379;">        :param pathname: 待读取的 TsFile 文件的完整路径</span></span>
<span class="line"><span style="color:#98C379;">        :return: 无返回值</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_table</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_names</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    start_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).min,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    end_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).max,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    tag_filter</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    batch_size</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        对指定的表和列执行时间范围查询，支持标签过滤与批量读取模式。</span></span>
<span class="line"><span style="color:#98C379;">        可适配逐行返回与固定大小数据块返回两种模式，满足不同场景的读取需求。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :param table_name: 要查询的目标表名，不区分大小写</span></span>
<span class="line"><span style="color:#98C379;">        :param column_names: 要检索的目标列名列表，为空时默认查询全列</span></span>
<span class="line"><span style="color:#98C379;">        :param start_time: 查询范围的起始时间戳，默认值为 int64 类型最小值</span></span>
<span class="line"><span style="color:#98C379;">        :param end_time: 查询范围的结束时间戳，默认值为 int64 类型最大值</span></span>
<span class="line"><span style="color:#98C379;">        :param tag_filter: 可选参数，基于标签列的过滤条件，支持等值、范围、逻辑组合过滤</span></span>
<span class="line"><span style="color:#98C379;">        :param batch_size: 批量读取大小，小于等于0时启用逐行返回模式，大于0时按指定大小返回数据块</span></span>
<span class="line"><span style="color:#98C379;">        :return: 封装完成的查询结果集处理器，可用于遍历、读取数据、获取元数据</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_table_on_tree</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_names</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                            start_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).min,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                            end_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).max) -&gt; </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        在树模型结构上执行表查询，适配原生树结构时序数据的查询场景，</span></span>
<span class="line"><span style="color:#98C379;">        直接基于测量项名称查询，无需指定表名，路径名称区分大小写。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :param column_names: 待查询的测量项名称列表，对应树结构中的节点路径</span></span>
<span class="line"><span style="color:#98C379;">        :param start_time: 查询范围的起始时间戳，默认值为 int64 类型最小值</span></span>
<span class="line"><span style="color:#98C379;">        :param end_time: 查询范围的结束时间戳，默认值为 int64 类型最大值</span></span>
<span class="line"><span style="color:#98C379;">        :return: 树模型查询对应的结果集处理器</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_tree_by_row</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">device_ids</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">], </span><span style="color:#D19A66;font-style:italic;">measurement_names</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                          offset</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">limit</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#56B6C2;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        按行分页查询树模型时序数据，支持偏移量跳过、最大返回行数限制，</span></span>
<span class="line"><span style="color:#98C379;">        适配大数据量分页读取场景，避免单次加载过多数据导致内存溢出。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :param device_ids: 待查询的设备ID列表，不能为空</span></span>
<span class="line"><span style="color:#98C379;">        :param measurement_names: 待查询的测量项名称列表，不能为空</span></span>
<span class="line"><span style="color:#98C379;">        :param offset: 需要跳过的起始行数，默认从0开始</span></span>
<span class="line"><span style="color:#98C379;">        :param limit: 最大返回行数，小于0表示不限制返回行数</span></span>
<span class="line"><span style="color:#98C379;">        :return: 树模型分页查询的结果集处理器</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_table_by_row</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_names</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                           offset</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">limit</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#56B6C2;"> -</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                           tag_filter</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                           batch_size</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        按行分页查询表模型数据，支持偏移量与行数限制下推，可结合标签过滤使用，</span></span>
<span class="line"><span style="color:#98C379;">        密集型设备可在数据块级别跳过无效数据，大幅提升分页查询效率。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :param table_name: 待查询的目标表名</span></span>
<span class="line"><span style="color:#98C379;">        :param column_names: 待查询的列名列表</span></span>
<span class="line"><span style="color:#98C379;">        :param offset: 需要跳过的起始行数，默认从0开始</span></span>
<span class="line"><span style="color:#98C379;">        :param limit: 最大返回行数，小于0表示不限制返回行数</span></span>
<span class="line"><span style="color:#98C379;">        :param tag_filter: 可选参数，标签过滤条件，过滤符合条件的设备数据</span></span>
<span class="line"><span style="color:#98C379;">        :param batch_size: 批量读取大小，适配底层数据块读取逻辑</span></span>
<span class="line"><span style="color:#98C379;">        :return: 表模型分页查询的结果集处理器</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_timeseries</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">device_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">sensor_list</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                         start_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">end_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        针对单个指定设备，执行时间范围时序数据查询，</span></span>
<span class="line"><span style="color:#98C379;">        适配单设备多传感器的精准查询场景，简化查询调用逻辑。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :param device_name: 目标设备的名称/路径</span></span>
<span class="line"><span style="color:#98C379;">        :param sensor_list: 待查询的传感器（测量项）名称列表</span></span>
<span class="line"><span style="color:#98C379;">        :param start_time: 查询起始时间戳，为0时默认从文件最早时间开始</span></span>
<span class="line"><span style="color:#98C379;">        :param end_time: 查询结束时间戳，为0时默认到文件最晚时间结束</span></span>
<span class="line"><span style="color:#98C379;">        :return: 单设备时序查询的结果集处理器</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_table_schema</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        获取指定表的完整模式信息，包含列名、数据类型、标签列、时序约束等全量元数据，</span></span>
<span class="line"><span style="color:#98C379;">        用于提前校验查询字段合法性、解析数据结构。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :param table_name: 目标表名</span></span>
<span class="line"><span style="color:#98C379;">        :return: 对应表的模式信息对象，包含表结构全量配置</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_all_table_schemas</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">) -&gt; Dict[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">]:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        获取当前 TsFile 文件中所有表的模式信息，</span></span>
<span class="line"><span style="color:#98C379;">        一键遍历文件内全部数据表结构，无需逐个表查询。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :return: 字典结构，key为表名，value为对应表的模式信息对象</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_all_timeseries_schemas</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">) -&gt; List[</span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">]:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        获取 TsFile 内所有时序序列的模式信息，</span></span>
<span class="line"><span style="color:#98C379;">        覆盖树模型、表模型全量时序数据的字段、类型、约束信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :return: 所有时序模式信息组成的列表</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_all_devices</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">) -&gt; List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">]:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        获取 TsFile 文件内所有设备的标识信息，</span></span>
<span class="line"><span style="color:#98C379;">        可遍历文件内全部设备，适配全设备统计、批量查询前置操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :return: 所有设备ID/设备路径组成的列表</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_timeseries_metadata</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">device_ids</span><span style="color:#ABB2BF;">: Optional[List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">]] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">) -&gt; Dict[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">]:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        获取指定设备的时序元数据，包含数据存储分段、字段约束、数据范围等信息，</span></span>
<span class="line"><span style="color:#98C379;">        不传设备ID时默认返回全设备元数据，传入空列表返回空字典。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">        :param device_ids: 可选参数，待查询元数据的设备ID列表</span></span>
<span class="line"><span style="color:#98C379;">        :return: 字典结构，key为设备路径，value为对应设备的时序元数据组</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#D19A66;">None</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">        关闭 TsFile 读取器，释放底层文件句柄、内存资源，</span></span>
<span class="line"><span style="color:#98C379;">        同时将当前所有活跃的查询结果集标记为失效，禁止后续数据读取操作。</span></span>
<span class="line"><span style="color:#98C379;">        关闭后不可再次执行查询、元数据获取操作，需重新初始化读取器。</span></span>
<span class="line"><span style="color:#98C379;">        &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset"><span>ResultSet</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ResultSet</span><span style="color:#ABB2BF;">:</span></span>
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
<span class="line"><span style="color:#98C379;">       该函数同时支持表模型（table-model）和树模型（tree-model）的 TsFile。</span></span>
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
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)])])}const r=n(p,[["render",o]]),d=JSON.parse('{"path":"/zh/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html","title":"接口定义 - Python","lang":"zh-CN","frontmatter":{"description":"接口定义 - Python 数据模式 写入接口 TsFileWriter Tablet definition 读取接口 TsFileReader ResultSet to_dataframe","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://tsfile.apache.org/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html"}],["meta",{"property":"og:url","content":"https://tsfile.apache.org/zh/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html"}],["meta",{"property":"og:site_name","content":"Apache TsFile"}],["meta",{"property":"og:title","content":"接口定义 - Python"}],["meta",{"property":"og:description","content":"接口定义 - Python 数据模式 写入接口 TsFileWriter Tablet definition 读取接口 TsFileReader ResultSet to_dataframe"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-06-01T02:43:33.000Z"}],["meta",{"property":"article:modified_time","content":"2026-06-01T02:43:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口定义 - Python\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-06-01T02:43:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据模式","slug":"数据模式","link":"#数据模式","children":[]},{"level":2,"title":"写入接口","slug":"写入接口","link":"#写入接口","children":[{"level":3,"title":"TsFileWriter","slug":"tsfilewriter","link":"#tsfilewriter","children":[]},{"level":3,"title":"Tablet definition","slug":"tablet-definition","link":"#tablet-definition","children":[]}]},{"level":2,"title":"读取接口","slug":"读取接口","link":"#读取接口","children":[{"level":3,"title":"TsFileReader","slug":"tsfilereader","link":"#tsfilereader","children":[]},{"level":3,"title":"ResultSet","slug":"resultset","link":"#resultset","children":[]},{"level":3,"title":"to_dataframe","slug":"to-dataframe","link":"#to-dataframe","children":[]}]}],"git":{"createdTime":1780281813000,"updatedTime":1780281813000,"contributors":[{"name":"761417898","username":"761417898","email":"761417898@qq.com","commits":1,"url":"https://github.com/761417898"}]},"readingTime":{"minutes":9.4,"words":2819},"filePathRelative":"zh/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.md","localizedDate":"2026年6月1日","autoDesc":true}');export{r as comp,d as data};
