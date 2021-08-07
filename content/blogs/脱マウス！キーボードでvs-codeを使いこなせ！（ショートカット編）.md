---
title: 脱マウス！キーボードでVS Codeを使いこなせ！（ショートカット編）
excerpt: キーボードだけでVS Codeをうまく使いこなそう！
hashtags: "#VSCode #VisualStudioCode"
date: 2021-08-07T06:18:42.005Z
---

![opengraph-home.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/acc342ca-f2bb-4e00-7761-96011adf4f23.png)

## イントロ
どうもはじめまして。生物専攻でありながらウェブ開発やってる男です。（外人）

初投稿なので開発者なら誰にでも為になる話をします。みなさん、VS Codeを使うときは、ちゃんとキーボードだけで操縦してますか？コードを入力するキーボードから手を離してマウスに伸ばすだけで生産力は下がりますので、ここでキーボードだけでVS Codeをうまく使いこなせる豆知識をみんなに共有します！（ちなみに自分はマウス使ってます）

## ショットカット篇
VS Codeでは多くの機能がそれぞれのキーバインドがついていて、キーボードだけでいろんな機能を使えます。Ctrl+CやCtrl+V以外にもCtrlとの組み合わせでいろんなことができます。

### <kbd>Ctrl</kbd> + <kbd>D</kbd> ( <kbd>Cmd</kbd> + <kbd>D</kbd> )
まず紹介したいのは<kbd>Ctrl</kbd> + <kbd>D</kbd>となります、下の例を見てみましょう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/e27e5b3d-912a-3fdd-e47f-2978b577a115.png)
もしこのようなコードで```someState```とういう変数の名前を変更したい場合を一つずつではなく最初のsomeStateを選択して <kbd>Ctrl</kbd> + <kbd>D</kbd>を押すとファイル中にある他の同じ文字列を一個ずつ選択できます。<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>を使えば一気に全部選択できます！
![src-1628252759786.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/967b2bff-df1d-3a91-fb3b-5a616fafaf68.gif)
しかし上記のようにキャメルケースを使ってる場合は大文字を小文字にしてしまうときがあります、
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/4cd04d96-d4a5-0583-50e5-232fc6e8b630.png)
そんなときは右上にあるボタンや<kbd>Alt</kbd>+<kbd>C</kbd>で「大文字と小文字を区別する」を有効にすれば解決です！



### <kbd>Ctrl</kbd> + ( <kbd>Shift</kbd> ) + <kbd>\`</kbd> ( <kbd>Control</kbd> + ( <kbd>Shift</kbd> ) + <kbd>`</kbd> )
自分はVS Codeを使うときよくターミナルを使いますが、ターミナルが場所を取ってしまうのでコマンド入力し終わったらすぐ消します。
もう一回ターミナルを使いたい場合は表示設定で表示を有効するのではなく<kbd>Ctrl</kbd> + <kbd>\`</kbd>を押せばターミナルが出てきます！それに<kbd>Ctrl</kbd> + ( <kbd>Shift</kbd> ) + <kbd>`</kbd>を押せば新しいターミナルを開くこともできます！
![src-1628253337829.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/534c112f-a889-fe68-8bc5-342fa130ce65.gif)


### <kbd>Alt</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> ( <kbd>Option</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> )
「二個目でもうすでに薄いな」と思ってる方もいると思いますが！単純によく使う順になってますので許してください。（泣）
次はこちらを見ましょう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/5ea99d66-30ec-5a9b-d261-d5756b5669ba.png)
必要のときだけimport宣言を書くとこんなことになるのはよくありますね（私見）。きれいにするときついこうやってはいませんが？
![src-1628253609574.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/3c10952c-8b0e-fe06-42f2-1f4354da947d.gif)
一回行を全部選択し、コピーして、置きたい行にペースト、結構手順かかりますね。こういつときは<kbd>Alt</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd>が味方です！移動したい行にカーソルを置くだけで、<kbd>Alt</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd>を押せば行が上や下に移動できます！
![src-1628253807746.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/7829d53e-57e7-acb3-0057-ca9349f9c7ca.gif)

### <kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>→ </kbd> ( <kbd>Option</kbd> + <kbd>←</kbd> / <kbd>→ </kbd> )
次はこちらを見てみましょう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/e4be469d-d090-b419-0efa-2b97834c240e.png)
一見普通なコードですが、もし3行目最後の文字列を変更した場合カーソルキーで届くまでかなり時間がかかってしまいます。そこでマウスを使う方もたくさんいると思いますが、実は<kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>→ </kbd>を使えば、カーソルをワードごとに移動することができます！
![src-1628254291530.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/f9aee183-458f-99fe-605e-ebf2dd31207c.gif)
さらに同時に<kbd>Shift</kbd>を押せばワードごとに選択することもできます！
![src-1628254398615.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/0c402fce-333d-b2c8-142f-7906f259470f.gif)
### <kbd>Ctrl</kbd> + <kbd>P</kbd> ( <kbd>Cmd</kbd> + <kbd>P</kbd> )
プロジェクトスケールが大きくなればなるほどファイル数が増えて、エクスプローラーで開きたいファイルを探すのはかなり大変ですよね。
ここで紹介したいのは<kbd>Ctrl</kbd> + <kbd>P</kbd>です！
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/e00439a9-b69d-0675-2b3c-7cf44bae3744.png)
これでファイル検索ができて、すぐ欲しいファイルが開けます！めっちゃ楽です！（通販番組風）

### 万能<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> ( <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> )
最初でも言ってましたが、VS Codeで多くの機能がショートカットキーで使える様になってますが、機能が多すぎて全部のショートカットを覚えるのは無理なんですよね（私見）。
ここで万能<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>でコマンドパレットを使いましょう！
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1825969/d668ba8b-24f4-953d-9061-4fb73b4d386f.png)
そこで使いたい機能を検索すればすぐ使えます！

## 最後
今回話したショートカットキーは個人的に結構使ってるものとなってますので、すでに使ってる方も多くいらしゃると思いますが、そもそもそういう機能があること知らない方もいらしゃると思いますので、に立てていれば幸いです。
次回はショートカットキー(2)か拡張機能について話す予定で、WSLを諦めた話もしようと思ってますので、是非宜しくお願いします。
