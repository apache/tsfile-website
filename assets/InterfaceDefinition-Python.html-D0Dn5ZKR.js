import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as l,o as e}from"./app-BOyy0HQF.js";const p={};function i(o,s){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="interface-definitions-python" tabindex="-1"><a class="header-anchor" href="#interface-definitions-python"><span>Interface Definitions - Python</span></a></h1><h2 id="schema" tabindex="-1"><a class="header-anchor" href="#schema"><span>Schema</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TSDataType</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">IntEnum</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Enumeration of data types currently supported by TsFile.</span></span>
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
<span class="line"><span style="color:#98C379;">    Enumeration of column categories in TsFile.</span></span>
<span class="line"><span style="color:#98C379;">    TAG: Represents a tag column, used for metadata.</span></span>
<span class="line"><span style="color:#98C379;">    FIELD: Represents a field column, used for storing actual data values.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">    TAG</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#D19A66;">    FIELD</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ColumnSchema</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;Defines schema for a table column (name, datatype, category).&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    column_name </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    data_type </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    category </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">data_type</span><span style="color:#ABB2BF;">: TSDataType, </span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 category</span><span style="color:#ABB2BF;">: ColumnCategory </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> ColumnCategory.</span><span style="color:#D19A66;">FIELD</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TableSchema</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;Schema definition for a table structure.&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    table_name </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    columns </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_name</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">columns</span><span style="color:#ABB2BF;">: List[ColumnSchema])</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ResultSetMetaData</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;Metadata container for query result sets (columns, types, table name).&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">    column_list </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    data_types </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"><span style="color:#ABB2BF;">    table_name </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_list</span><span style="color:#ABB2BF;">: List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">], </span><span style="color:#D19A66;font-style:italic;">data_types</span><span style="color:#ABB2BF;">: List[TSDataType])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write-interface" tabindex="-1"><a class="header-anchor" href="#write-interface"><span>Write interface</span></a></h2><h3 id="tsfilewriter" tabindex="-1"><a class="header-anchor" href="#tsfilewriter"><span>TsFileWriter</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TsFileTableWriter</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Facilitates writing structured table data into a TsFile with a specified schema.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    :param path: The path of tsfile, will create if it doesn&#39;t exist.</span></span>
<span class="line"><span style="color:#98C379;">    :param table_schema: describes the schema of the tables want to write.</span></span>
<span class="line"><span style="color:#98C379;">    :return: no return value.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_schema</span><span style="color:#ABB2BF;">: TableSchema)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Write a tablet into table in tsfile.</span></span>
<span class="line"><span style="color:#98C379;">    :param tablet: stored batch data of a table.</span></span>
<span class="line"><span style="color:#98C379;">    :return: no return value.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> write_table</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">tablet</span><span style="color:#ABB2BF;">: Tablet)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Close TsFileTableWriter and flush data automatically.</span></span>
<span class="line"><span style="color:#98C379;">    :return: no return value.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tablet-definition" tabindex="-1"><a class="header-anchor" href="#tablet-definition"><span>Tablet definition</span></a></h3><p>You can use Tablet to insert data into TsFile in batches.</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> Tablet</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">object</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">    A</span><span style="color:#E5C07B;"> pre</span><span style="color:#ABB2BF;">-</span><span style="color:#E5C07B;">allocated</span><span style="color:#E5C07B;"> columnar</span><span style="color:#E5C07B;"> data</span><span style="color:#E5C07B;"> container</span><span style="color:#C678DD;"> for</span><span style="color:#E5C07B;"> batch</span><span style="color:#E5C07B;"> data</span><span style="color:#C678DD;"> with</span><span style="color:#56B6C2;"> type</span><span style="color:#E5C07B;"> constraints</span><span style="color:#ABB2BF;">.</span></span>
<span class="line"><span style="color:#E5C07B;">    Creates</span><span style="color:#E5C07B;"> timestamp</span><span style="color:#E5C07B;"> buffer</span><span style="color:#C678DD;"> and</span><span style="color:#E5C07B;"> typed</span><span style="color:#E5C07B;"> data</span><span style="color:#E5C07B;"> columns</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">with</span><span style="color:#E5C07B;"> value</span><span style="color:#56B6C2;"> range</span><span style="color:#E5C07B;"> validation</span><span style="color:#E5C07B;"> ranges</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#E5C07B;"> numeric</span><span style="color:#E5C07B;"> types</span><span style="color:#ABB2BF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    Initializes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    :param column_name_list: name </span><span style="color:#56B6C2;">list</span><span style="color:#C678DD;"> for</span><span style="color:#ABB2BF;"> data columns.</span></span>
<span class="line"><span style="color:#ABB2BF;">    :param type_list: TSDataType values specifying allowed types per column.</span></span>
<span class="line"><span style="color:#ABB2BF;">    :param max_row_num: Pre</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">allocated row </span><span style="color:#61AFEF;">capacity</span><span style="color:#ABB2BF;"> (default </span><span style="color:#D19A66;">1024</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    :</span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">: no </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> value.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    def __init__(self, column_name_list: list[str], type_list: list[TSDataType],</span></span>
<span class="line"><span style="color:#98C379;">                 max_row_num: int = 1024)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="read-interface" tabindex="-1"><a class="header-anchor" href="#read-interface"><span>Read Interface</span></a></h2><h3 id="tsfilereader" tabindex="-1"><a class="header-anchor" href="#tsfilereader"><span>TsFileReader</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> TsFileReader</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Query table data from a TsFile.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Initialize a TsFile reader for the specified file path.</span></span>
<span class="line"><span style="color:#98C379;">    :param pathname: The path to the TsFile.</span></span>
<span class="line"><span style="color:#98C379;">    :return  no return value.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> __init__</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">pathname</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Executes a time range query on the specified table and columns.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param table_name: The name of the table to query.</span></span>
<span class="line"><span style="color:#98C379;">    :param column_names: A list of column names to retrieve.</span></span>
<span class="line"><span style="color:#98C379;">    :param start_time: The start time of the query range (default: minimum int64 value).</span></span>
<span class="line"><span style="color:#98C379;">    :param end_time: The end time of the query range (default: maximum int64 value).</span></span>
<span class="line"><span style="color:#98C379;">    :return: A query result set handler.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> query_table</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">table_name</span><span style="color:#ABB2BF;"> : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">column_names</span><span style="color:#ABB2BF;"> : List[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    start_time</span><span style="color:#ABB2BF;"> : </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).min, </span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                    end_time</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> np.</span><span style="color:#61AFEF;">iinfo</span><span style="color:#ABB2BF;">(np.int64).max) -&gt; ResultSet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieves the schema of the specified table.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param table_name: The name of the table.</span></span>
<span class="line"><span style="color:#98C379;">    :return: The schema of the specified table.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_table_schema</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, table_name : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">)</span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> TableSchema</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieves the schemas of all tables in the TsFile.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: A dictionary mapping table names to their schemas.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_all_table_schemas</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;">dict[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, TableSchema]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Closes the TsFile reader. If the reader has active result sets, they will be invalidated.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset"><span>ResultSet</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> ResultSet</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieves data from a query result set. When a query is executed, a query handler is returned.</span></span>
<span class="line"><span style="color:#98C379;">    If the reader is closed, the result set will become invalid.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Checks and moves to the next row in the query result set.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: True if the next row exists, False otherwise.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#56B6C2;"> next</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;font-style:italic;">self</span><span style="color:#ABB2BF;">) -&gt; </span><span style="color:#56B6C2;">bool</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieves the column information of the result set.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: A dictionary containing column names as keys and their data types as values.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_result_column_info</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> dict[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">, TsDataType]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Fetches the next DataFrame from the query result set.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param max_row_num: The maximum number of rows to retrieve. Default is 1024.</span></span>
<span class="line"><span style="color:#98C379;">    :return: A DataFrame containing data from the query result set.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> read_data_frame</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, max_row_num : </span><span style="color:#E06C75;font-style:italic;">int</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 1024</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> DataFrame</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieves the value at the specified index from the query result set.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param index: The index of the value to retrieve, 1 &lt;= index &lt;= column_num.</span></span>
<span class="line"><span style="color:#98C379;">    :return: The value at the specified index.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_value_by_index</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, index : </span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieves the value for the specified column name from the query result set.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param column_name: The name of the column to retrieve the value from.</span></span>
<span class="line"><span style="color:#98C379;">    :return: The value of the specified column.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_value_by_name</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, column_name : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#ABB2BF;">	</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Retrieves the metadata of the result set.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :return: The metadata of the result set as a ResultSetMetadata object.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> get_metadata</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">) </span><span style="color:#FFFFFF;">-&gt;</span><span style="color:#ABB2BF;"> ResultSetMetadata</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Checks whether the field at the specified index in the result set is null.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param index: The index of the field to check.  1 &lt;= index &lt;= column_num.</span></span>
<span class="line"><span style="color:#98C379;">    :return: True if the field is null, False otherwise.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> is_null_by_index</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, index : </span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Checks whether the field with the specified column name in the result set is null.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    :param name: The name of the column to check.</span></span>
<span class="line"><span style="color:#98C379;">    :return: True if the field is null, False otherwise.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> is_null_by_name</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">, name : </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">    Closes the result set and releases any associated resources.</span></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C678DD;">    def</span><span style="color:#61AFEF;"> close</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-dataframe" tabindex="-1"><a class="header-anchor" href="#to-dataframe"><span>to_dataframe</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#61AFEF;"> to_dataframe</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">file_path</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 table_name</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 column_names</span><span style="color:#ABB2BF;">: Optional[list[</span><span style="color:#56B6C2;">str</span><span style="color:#ABB2BF;">]] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 start_time</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 end_time</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 max_row_num</span><span style="color:#ABB2BF;">: Optional[</span><span style="color:#56B6C2;">int</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;"> None</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;font-style:italic;">                 as_iterator</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">bool</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> False</span><span style="color:#ABB2BF;">) -&gt; Union[pd.DataFrame, Iterator[pd.DataFrame]]:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#98C379;">       Read data from a TsFile and convert it into a Pandas DataFrame or</span></span>
<span class="line"><span style="color:#98C379;">       an iterator of DataFrames.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       This function supports both table-model and tree-model TsFiles.</span></span>
<span class="line"><span style="color:#98C379;">       Users can filter data by table name, column names, time range,</span></span>
<span class="line"><span style="color:#98C379;">       and maximum number of rows.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       Parameters</span></span>
<span class="line"><span style="color:#98C379;">       ----------</span></span>
<span class="line"><span style="color:#98C379;">       file_path : str</span></span>
<span class="line"><span style="color:#98C379;">           Path to the TsFile to be read.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       table_name : Optional[str], default None</span></span>
<span class="line"><span style="color:#98C379;">           Name of the table to query in table-model TsFiles.</span></span>
<span class="line"><span style="color:#98C379;">           If None and the file is in table model, the first table</span></span>
<span class="line"><span style="color:#98C379;">           found in the schema will be used.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       column_names : Optional[list[str]], default None</span></span>
<span class="line"><span style="color:#98C379;">           List of column names to query.</span></span>
<span class="line"><span style="color:#98C379;">           - If None, all columns will be returned.</span></span>
<span class="line"><span style="color:#98C379;">           - Column existence will be validated in table-model TsFiles.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       start_time : Optional[int], default None</span></span>
<span class="line"><span style="color:#98C379;">           Start timestamp for the query.</span></span>
<span class="line"><span style="color:#98C379;">           If None, the minimum int64 value is used.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       end_time : Optional[int], default None</span></span>
<span class="line"><span style="color:#98C379;">           End timestamp for the query.</span></span>
<span class="line"><span style="color:#98C379;">           If None, the maximum int64 value is used.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       max_row_num : Optional[int], default None</span></span>
<span class="line"><span style="color:#98C379;">           Maximum number of rows to read.</span></span>
<span class="line"><span style="color:#98C379;">           - If None, all available rows will be returned.</span></span>
<span class="line"><span style="color:#98C379;">           - When \`as_iterator\` is False, the final DataFrame will be</span></span>
<span class="line"><span style="color:#98C379;">             truncated to this size if necessary.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       as_iterator : bool, default False</span></span>
<span class="line"><span style="color:#98C379;">           Whether to return an iterator of DataFrames instead of</span></span>
<span class="line"><span style="color:#98C379;">           a single concatenated DataFrame.</span></span>
<span class="line"><span style="color:#98C379;">           - True: returns an iterator yielding DataFrames in batches</span></span>
<span class="line"><span style="color:#98C379;">           - False: returns a single Pandas DataFrame</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       Returns</span></span>
<span class="line"><span style="color:#98C379;">       -------</span></span>
<span class="line"><span style="color:#98C379;">       Union[pandas.DataFrame, Iterator[pandas.DataFrame]]</span></span>
<span class="line"><span style="color:#98C379;">           - A Pandas DataFrame if \`as_iterator\` is False</span></span>
<span class="line"><span style="color:#98C379;">           - An iterator of Pandas DataFrames if \`as_iterator\` is True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       Raises</span></span>
<span class="line"><span style="color:#98C379;">       ------</span></span>
<span class="line"><span style="color:#98C379;">       TableNotExistError</span></span>
<span class="line"><span style="color:#98C379;">           If the specified table name does not exist in a table-model TsFile.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">       ColumnNotExistError</span></span>
<span class="line"><span style="color:#98C379;">           If any specified column does not exist in the table schema.</span></span>
<span class="line"><span style="color:#98C379;">       &quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)])])}const r=n(p,[["render",i]]),d=JSON.parse('{"path":"/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html","title":"Interface Definitions - Python","lang":"en-US","frontmatter":{"description":"Interface Definitions - Python Schema Write interface TsFileWriter Tablet definition You can use Tablet to insert data into TsFile in batches. Read Interface TsFileReader Result...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://tsfile.apache.org/zh/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html"}],["meta",{"property":"og:url","content":"https://tsfile.apache.org/UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.html"}],["meta",{"property":"og:site_name","content":"Apache TsFile"}],["meta",{"property":"og:title","content":"Interface Definitions - Python"}],["meta",{"property":"og:description","content":"Interface Definitions - Python Schema Write interface TsFileWriter Tablet definition You can use Tablet to insert data into TsFile in batches. Read Interface TsFileReader Result..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-03-25T09:10:52.000Z"}],["meta",{"property":"article:modified_time","content":"2026-03-25T09:10:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Interface Definitions - Python\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-03-25T09:10:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Schema","slug":"schema","link":"#schema","children":[]},{"level":2,"title":"Write interface","slug":"write-interface","link":"#write-interface","children":[{"level":3,"title":"TsFileWriter","slug":"tsfilewriter","link":"#tsfilewriter","children":[]},{"level":3,"title":"Tablet definition","slug":"tablet-definition","link":"#tablet-definition","children":[]}]},{"level":2,"title":"Read Interface","slug":"read-interface","link":"#read-interface","children":[{"level":3,"title":"TsFileReader","slug":"tsfilereader","link":"#tsfilereader","children":[]},{"level":3,"title":"ResultSet","slug":"resultset","link":"#resultset","children":[]},{"level":3,"title":"to_dataframe","slug":"to-dataframe","link":"#to-dataframe","children":[]}]}],"git":{"createdTime":1774429852000,"updatedTime":1774429852000,"contributors":[{"name":"leto-b","username":"leto-b","email":"bingqian.bai@timecho.com","commits":1,"url":"https://github.com/leto-b"}]},"readingTime":{"minutes":4.09,"words":1226},"filePathRelative":"UserGuide/develop/QuickStart/InterfaceDefinition/InterfaceDefinition-Python.md","localizedDate":"March 25, 2026","autoDesc":true}');export{r as comp,d as data};
