import{_ as a,r as o,o as s,b as h,a as l,d as t,c as i,e as n,f as d}from"./app-CoR__Wsn.js";const c={},p={href:"https://tsfile.apache.org/zh/UserGuide/latest/QuickStart/Navigating_Time_Series_Data.html",target:"_blank",rel:"noopener noreferrer"};function u(f,e){const r=o("ExternalLinkIcon");return s(),h("div",null,[l(`

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

`),e[2]||(e[2]=t('<h1 id="tsfile-数据模型" tabindex="-1"><a class="header-anchor" href="#tsfile-数据模型" aria-hidden="true">#</a> TsFile 数据模型</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>为管理工业物联网时序数据，TsFile 的测点数据模型包含如下信息</p><ul><li>DeviceId（String）：设备名</li><li>MeasurementSchema：测点 <ul><li>measurementId（String）：测点名</li><li>tsDataType（TSDataType）：数据类型</li></ul></li></ul>',4)),i("p",null,[e[1]||(e[1]=n("有关上述详细介绍，参见：",-1)),i("a",p,[e[0]||(e[0]=n("走进时序数据",-1)),d(r)])]),e[3]||(e[3]=t('<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><figure><img src="https://alioss.timecho.com/docs/img/tsfile数据模型.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在上述示例中，TsFile 的元数据（Schema）共包含 2 个设备，5条时间序列，建立为表结构如下图：</p><table><tr><th rowspan="1">设备ID</th><th rowspan="1">测点</th></tr><tr><th rowspan="2">太阳能板1</th><th>电压（FLOAT）</th></tr><tr><th>电流（FLOAT）</th></tr><tr><th rowspan="4">风机1</th></tr><tr><th>电压（FLOAT）</th></tr><tr><th>电流（FLOAT）</th></tr><tr><th>风速（FLOAT）</th></tr></table>',4))])}const g=a(c,[["render",u],["__file","Data-Model.html.vue"]]);export{g as default};
