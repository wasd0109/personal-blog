---
title: GatsbyでFirebase Analyticsを使うとビルドでエラる問題
excerpt: GatsbyでFirebase Analyticsを導入したら思わぬエラーが現れました
hashtags: "gatsby React Firebase"
thumbnail: ../assets/screen-shot-2021-08-08-at-0.25.58.png
date: 2021-08-08T06:49:31.310Z
---

# トラブル

最近 Gatsby で個人サイトを作っていて、Firebase Hosting を使ってるのでついでに Firebase Analytics も使おうと思って、gatsby-plugin-firebase をインストールして、ドキュメンテーションに従ってセットアップしたらビルドでこの様なエラーが出ました。

![Screen Shot 2021-08-08 at 0.25.58.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/369702ea-66ec-5062-3d20-c859fe774645.png)

ネットで解決方法を探して、下のように Webpack 設定を変更してみてもなかなかうまくいきませんでした。

```js
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function (
        context,
        request,
        callback
      ) {
        const regex = /^@?firebase(\/(.+))?/
        if (regex.test(request)) {
          return callback(null, `umd ${request}`)
        }
        callback()
      }),
    })
  }
}
```

（これが効く場合もあります、詳細は文の最後に）

# 解決方法

今回問題は Node.js で使えない Firebase の Analytics パッケージを使ってしまったのが理由でした（そしてそれについて完全に忘れてしまったのも理由の一つでした）。
それで Analytics に関連する関数を使う前に一回ブラウザー環境チェックして、ブラウザ環境であることを確認してから Analytics を使えば問題解決となります。

```js
const isBrowser = typeof window !== "undefined"
if (isBrowser) {
  firebase.analytics().logEvent("visited_home_page")
}
```

これで解決になりますが、使うことに環境チェックするのはちょっとめんどくさいので、useFirebaseAnalytics という別のユーティリティ関数として抽出しました。（カスタムフックではないのに名前を use 何ちゃらにしてしまいすみません）

```js
import firebase from "gatsby-plugin-firebase"

// Build throw error if it's ran on node
// Adding an isBrowser to ensure that the below code would only ran on browser
const useFirebaseAnalytics = logEvent => {
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    firebase.analytics().logEvent(logEvent)
  }
}
export default useFirebaseAnalytics
```

これで Firebase Analytics がちゃんと動き出しました。

![Screen Shot 2021-08-08 at 0.48.12.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/7475ad35-1d2a-bf26-a81e-025b6aace950.png)

# 後書き

解決方法の前に書いてある方法は実際 Firestore などを使うときビルド失敗した場合にちゃんと効くらしいので、必要がある方はぜひ。
今回は単純に Firebase Analytics がブラウザでしか使えないことを忘れてしまうことでビルド失敗しましたが、自分と同じく忘れん坊な方のために文章にしました。ご清聴ありがとうございました。
