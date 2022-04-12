# Dcard Analysis React Native

Dcard是大學生常使用的匿名社群網站，大學生會在上面發布有關於學校、課業、日常等等的相關文章。因此學校輔導組希望我們可以透過爬取Dcard上有關長庚大學的文章來及時取得同學們對學校的想法或者是找出情緒不穩定的學生。

本專題使用Python爬蟲程式將文章內容自動抓取並儲存於資料庫中，並使用MySQL Workbench進行資料庫管理。再透過Snow nlp套件對文章內容進行分析，並將分析結果存入資料庫中。前端部分
APP撰寫我們選擇使用Android Studio進行開發。系統背景隨時運行著一個偵測程式，若是爬蟲抓下來的文章內容中，出現了過於極端的字眼，系統則會自動透過IFTTT平台的連接，將警告訊息傳送到學校相關師長的Line。

我們APP主要透過API的連接來設置資料並完成主要功能，前端包含文章列表、圖表(圓餅圖、長條圖和折線圖)、查詢等主要功能。我們後台是用PHP並以Laravel的框架所撰寫的，最後再把專案部署到Cloud Server上，我們選用Google Cloud Platform(GCP)為我
們的雲端伺服器，使用其中的Cloud Run這項服務來建立API。

此專案為後來自行練習React Native，並且使用Expo，所開發的。
目前仍在開發中!!

## Languages and Tools

<div align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
  </a> 
  <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> 
    <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> 
  </a> 
  <a href="https://redux.js.org" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> 
  </a> 
</div>

## Get Started

Get Started:
```
yarn
yarn start
```
