---
title: 라즈베리파이5 Ubuntu 23.10 설치(with SSD)
date: 2024-02-26 00:00:00 +09:00
modified: 2024-02-26 00:00:00 +09:00
tags: [ raspberry pi, ubuntu ]
categories: [ 라즈베리파이 ]
---

# 🚀 Boot Raspberry Pi with SSD

PCIe에 M.2 SSD를 연결할 수 있게 된 라즈베리파이5를 구매했다. <br>
우리 파이에게 SD카드가 아닌 SSD를 연결해주어 제대로 써보리라 생각하며 시작한 일이었다.

## 🛒 SSD 연결을 위해 구매한 제품

#### 1. [HatDrive! Bottom](https://pineberrypi.com/products/hatdrive-bottom-2230-2242-2280-for-rpi5)<br>

Pineberry 제품에는 Top과 Bottom이 있는데, 2280 사이즈의 SSD를 사용하려면 Bottom을 구매해야했다.<br>
결정적으로 Top에는 이미 쿨링팬이 연결되어 있었기에 이것이 팬을 막으면 안됐다.

#### 2. [삼성전자 PM991a M.2 NVMe 벌크 (256GB)](https://prod.danawa.com/info/?pcode=14949881&keyword=nvme+ssd+256gb+2280&cate=112760)<br>

다나와에서 256GB SSD를 검색했을 때 제일 위에 있는 것을 샀다.

#### 3. [넥시 NVMe M2 SSD 방열판 NX1057](https://www.coupang.com/vp/products/5496795409?itemId=8527066914&vendorItemId=75814572795&pickType=COU_PICK&q=%EB%B0%A9%EC%97%B4%ED%8C%90&itemsCount=27&searchId=c26925eb758140d8bd1ba4d5bb334082&rank=0&isAddedCart=)<br>

우리 파이 열 받으면 안되니까..ㅎ

---

## 🧑🏻‍💻 SSD로 부팅시키기

#### 1. SD카드에 Raspberry Pi OS 설치

[🔗 Pi Imager 다운로드](https://www.raspberrypi.com/software/)<br>
위 Imager를 다운 받아 SD카드에 Raspberry Pi OS를 설치하자.

#### 2. Raspberry Pi OS에서 SSD를 인식하게 하기

##### 2-1. `vi`는 불편하기에 `vim`부터 설치하고 시작하자.

```bash
sudo apt-get install vim
```

##### 2-2. `config.txt` 수정

다음을 실행하여 우리 파이의 PCIe 포트를 활성화시키자.

```bash
# config.txt 파일 열기
sudo vim /boot/firmware/config.txt

# 파일 맨 아래에 다음 내용 추가
dtparam=pciex1

# 저장 후 종료(:wq!)
```

##### 2-3. 부팅 순서 변경

```bash
# EEPROM 수정
sudo rpi-eeprom-config --edit

# BOOT_ORDER를 0xF146으로 변경
BOOT_ORDER=0xF146

# 저장 후 종료(Ctrl + O -> Enter -> Ctrl + X)
```

##### 2-4. 재부팅

```bash
sudo reboot
```

##### 2-5. SSD 인식 확인

터미널에 `lsblk`를 입력하여 PCIe 포트에 연결한 SSD가 인식되는지 확인하자.

#### 3. Raspberry Pi OS에서 SSD에 Ubuntu 설치

Pi Imager로 Raspberry Pi OS를 설치한 것과 같이 이번에는 Ubuntu를 설치하자.<br>
라즈베리파이5는 Ubuntu 23.10 미만 버전을 지원하지 않는다..<br>
운영체제 선택 화면에서 `Other general-purpose OS`를 선택하고 `Ubuntu 23.10`을 선택하면 된다.

#### 4. 대망의 첫 SSD 부팅..!

우리 파이 SSD 먹고 쑥쑥 잘 자랐나 보자.<br>
...<br>
...

> #### 한 줄 요약
>
> 선생님, 부팅이 너무 빨라요 🚀

![](스크린샷%202024-02-26%2023.26.52.png){: width="70%"}{: .center}







