import{_ as i,r,o,c as s,a as c,b as e,d as t,e as h,f as a}from"./app-DXoEW1Ta.js";const l={},d=a('<h1 id="data-model" tabindex="-1"><a class="header-anchor" href="#data-model" aria-hidden="true">#</a> Data Model</h1><h2 id="basic-concepts" tabindex="-1"><a class="header-anchor" href="#basic-concepts" aria-hidden="true">#</a> Basic Concepts</h2><p>To manage industrial IoT timing data, the measurement point data model of TsFile includes the following information</p><ul><li>DeviceId（String）：Device Name</li><li>MeasurementSchema：Measurement points <ul><li>measurementId（String）：Measurement Point Name</li><li>tsDataType（TSDataType）：Data Type</li></ul></li></ul>',4),p={href:"https://tsfile.apache.org/UserGuide/latest/QuickStart/Navigating_Time_Series_Data.html",target:"_blank",rel:"noopener noreferrer"},m=a('<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><figure><img src="https://alioss.timecho.com/docs/img/20240502164237-dkcm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In the above example, the metadata (Scheme) of TsFile contains 2 devices and 5 time series, and is established as a table structure as shown in the following figure:</p><table><tr><th rowspan="1">Device ID</th><th rowspan="1">Measurement points</th></tr><tr><th rowspan="2">Solar panel 1</th><th>Voltage（FLOAT）</th></tr><tr><th>Current（FLOAT）</th></tr><tr><th rowspan="4">Fan1</th></tr><tr><th>Voltage（FLOAT）</th></tr><tr><th>Current（FLOAT）</th></tr><tr><th>Wind Speed（FLOAT）</th></tr></table>',4);function u(f,g){const n=r("ExternalLinkIcon");return o(),s("div",null,[c(`

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

`),d,e("p",null,[t("For the above detailed introduction, please refer to："),e("a",p,[t("Entering Time Series Data"),h(n)])]),m])}const S=i(l,[["render",u],["__file","Data-Model.html.vue"]]);export{S as default};
