import{_ as e,o as a,c as n,a as t,f as r}from"./app-DJHq7lit.js";const o={};function l(s,i){return a(),n("div",null,[t(`

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

`),i[0]||(i[0]=r('<h1 id="走进时序数据" tabindex="-1"><a class="header-anchor" href="#走进时序数据" aria-hidden="true">#</a> 走进时序数据</h1><h2 id="什么叫时序数据" tabindex="-1"><a class="header-anchor" href="#什么叫时序数据" aria-hidden="true">#</a> 什么叫时序数据？</h2><p>万物互联的今天，物联网场景、工业场景等各类场景都在进行数字化转型，人们通过在各类设备上安装传感器对设备的各类状态进行采集。如电机采集电压、电流，风机的叶片转速、角速度、发电功率；车辆采集经纬度、速度、油耗；桥梁的振动频率、挠度、位移量等。传感器的数据采集，已经渗透在各个行业中。</p><figure><img src="https://alioss.timecho.com/docs/img/时序数据介绍.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通常来说，我们把每个采集点位叫做一个<strong>测点（ 也叫物理量、时间序列、时间线、信号量、指标、测量值等）</strong>，每个测点都在随时间的推移不断收集到新的数据信息，从而构成了一条<strong>时间序列</strong>。用表格的方式，每个时间序列就是一个由时间、值两列形成的表格；用图形化的方式，每个时间序列就是一个随时间推移形成的走势图，也可以形象的称之为设备的“心电图”。</p><figure><img src="https://alioss.timecho.com/docs/img/心电图1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>传感器产生的海量时序数据是各行各业数字化转型的基础，因此我们对时序数据的模型梳理主要围绕设备、传感器展开。</p><h2 id="时序数据中的关键概念有哪些" tabindex="-1"><a class="header-anchor" href="#时序数据中的关键概念有哪些" aria-hidden="true">#</a> 时序数据中的关键概念有哪些？</h2><p>时序数据中主要涉及的概念由下至上可分为：数据点、测点、设备。</p><figure><img src="https://alioss.timecho.com/docs/img/白板.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据点" tabindex="-1"><a class="header-anchor" href="#数据点" aria-hidden="true">#</a> 数据点</h3><ul><li>定义：由一个时间戳和一个数值组成，其中时间戳为 long 类型，数值可以为 BOOLEAN、FLOAT、INT32 等各种类型。</li><li>示例：如上图中表格形式的时间序列的一行，或图形形式的时间序列的一个点，就是一个数据点。</li></ul><figure><img src="https://alioss.timecho.com/docs/img/数据点.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="测点" tabindex="-1"><a class="header-anchor" href="#测点" aria-hidden="true">#</a> 测点</h3><ul><li>定义：是多个数据点按时间戳递增排列形成的一个时间序列。通常一个测点代表一个采集点位，能够定期采集所在环境的物理量。</li><li>又名：物理量、时间序列、时间线、信号量、指标、测量值等</li><li>示例： <ul><li>电力场景：电流、电压</li><li>能源场景：风速、转速</li><li>车联网场景：油量、车速、经度、维度</li><li>工厂场景：温度、湿度</li></ul></li></ul><h3 id="设备" tabindex="-1"><a class="header-anchor" href="#设备" aria-hidden="true">#</a> 设备</h3><ul><li>定义：对应一个实际场景中的物理设备，通常是一组测点的集合，由一到多个标签定位标识</li><li>示例 <ul><li>车联网场景：车辆，由车辆识别代码 VIN 标识</li><li>工厂场景：机械臂，由物联网平台生成的唯一 ID 标识</li><li>能源场景：风机，由区域、场站、线路、机型、实例等标识</li><li>监控场景：CPU，由机房、机架、Hostname、设备类型等标识</li></ul></li></ul>',17))])}const h=e(o,[["render",l],["__file","Navigating_Time_Series_Data.html.vue"]]);export{h as default};
