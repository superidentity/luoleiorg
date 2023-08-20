---
categories:
- code
cover: https://ping.gz.is26.com/ChinaDNS/ChinaNet1_mini.png
date: '2020-03-17'
title: 深圳电信宽带 / 常用公共 DNS、VPS / 性能 & 稳定性 / 实时监控数据
---

最近优化了下家里的网络，在家里 NAS 里用 docker 部署了一个 [smokeping](https://oss.oetiker.ch/smokeping/) 网络性能测试工具，监控家里网络，到境内外常见 DNS，以及几个自用云服务器的延迟、稳定性。

## 网络 & 设备

- 网络: 深圳电信，普通小区家庭宽带，光纤，500M 下行，50M 上行。
- 设备: **群晖 216+** <网线> **r6300v2** <网线> **光猫**
- LAN 内设备互 ping 稳定在 1ms~，可忽略。

以下的图片数据，是实时更新的数据，不严谨，平时自己看视频、迅雷下载，肯定还是会影响。 非实验室和工业场景，仅供参考，对于用深圳电信、广东电信的用户来说，可能有一定的参考意义。

## 国内公共 DNS 数据

#### 广东电信

**DNS  202.96.128.86**

![](https://ping.gz.is26.com/ChinaDNS/ChinaNet1_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/ChinaNet1_last_108000.png)

202.96.128.166

![](https://ping.gz.is26.com/ChinaDNS/ChinaNet2_mini.png)

 

![](https://ping.gz.is26.com/ChinaDNS/ChinaNet2_last_108000.png)

#### 114 DNS

114.114.114.114

![](https://ping.gz.is26.com/ChinaDNS/114DNS1_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/114DNS1_last_108000.png)

114.114.115.115

![](https://ping.gz.is26.com/ChinaDNS/114DNS2_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/114DNS2_last_108000.png)

#### DNSpod

119.29.29.29

![](https://ping.gz.is26.com/ChinaDNS/DNSpod1_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/DNSpod1_last_108000.png)

182.254.116.116

![](https://ping.gz.is26.com/ChinaDNS/DNSpod2_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/DNSpod2_last_108000.png)

#### 阿里DNS

223.5.5.5

![](https://ping.gz.is26.com/ChinaDNS/AliDNS1_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/AliDNS1_last_108000.png)

223.6.6.6

![](https://ping.frp.is26.com/smokeping/cache/ChinaDNS/AliDNS2_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/AliDNS2_last_108000.png)

#### 百度DNS

180.76.76.76

![](https://ping.gz.is26.com/ChinaDNS/BaiduDNS_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/BaiduDNS_last_108000.png)

#### 红鱼 DNS

dns.rubyfish.cn

![](https://ping.gz.is26.com/ChinaDNS/RubyFishDNS_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/RubyFishDNS_last_108000.png)

#### DNS派

101.226.4.6(电信)

![](https://ping.gz.is26.com/ChinaDNS/DNSPAI_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/DNSPAI_last_108000.png)

#### 中科大 电信 DNS

202.141.162.123

![](https://ping.gz.is26.com/ChinaDNS/ZKDChinaNet_mini.png)

![](https://ping.gz.is26.com/ChinaDNS/ZKDChinaNet_last_108000.png)

 

## 国外公共 DNS 数据

#### Google

8.8.8.8

![](https://ping.gz.is26.com/DNS/GoogleDNS1_mini.png)

![](https://ping.gz.is26.com/DNS/GoogleDNS1_last_108000.png)

8.8.4.4

![](https://ping.gz.is26.com/DNS/GoogleDNS2_mini.png)

![](https://ping.gz.is26.com/DNS/GoogleDNS2_last_108000.png)

#### OpenDNS

208.67.222.222

![](https://ping.gz.is26.com/DNS/OpenDNS1_mini.png)

![](https://ping.gz.is26.com/DNS/OpenDNS1_last_108000.png)

208.67.220.220

![](https://ping.gz.is26.com/DNS/OpenDNS2_mini.png)

![](https://ping.gz.is26.com/DNS/OpenDNS2_last_108000.png)

#### CloudflareDNS

1.1.1.1

![](https://ping.gz.is26.com/DNS/CloudflareDNS1_mini.png)

![](https://ping.gz.is26.com/DNS/CloudflareDNS1_last_108000.png)

1.0.0.1

![](https://ping.gz.is26.com/DNS/CloudflareDNS2_mini.png)

![](https://ping.gz.is26.com/DNS/CloudflareDNS2_last_108000.png)

 

## 境内外VPS数据

#### 腾讯云广州

![](https://ping.gz.is26.com/VPS/QcloudGuangzhou_mini.png)

![](https://ping.gz.is26.com/VPS/QcloudGuangzhou_last_108000.png)

#### 腾讯云香港

![](https://ping.gz.is26.com/VPS/QcloudHongkong_mini.png)

![](https://ping.gz.is26.com/VPS/QcloudHongkong_last_108000.png)

#### Linode 东京

![](https://ping.gz.is26.com/VPS/Linode_mini.png)

![](https://ping.gz.is26.com/VPS/Linode_last_108000.png)