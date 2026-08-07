# Geometry Paper Digest starter

松澤陽介さんの[参考サイト](https://yoaskay.github.io/daily-math-paper-digest-pages/index.html)を完全に真似して、代数幾何学・複素幾何学・多変数複素解析向けにしたGitHub Pages/Jekyllサイトです。
日本語要約はchatGPTによるものなので, 鵜呑みにしないでください. 


## 作った方法
"https://yoaskay.github.io/daily-math-paper-digest-pages/index.html"
のようなホームページを代数幾何学・複素幾何学・多変数複素解析系で作っていきたいです. とchatGPTに言ったら, そっくりそのまま全部作ってくれました.

あとは自分がやりたいことをchatGPTに行って, codexのプロンプトをchatGPTが作って, それをcodexに入れて出てきたことをchatGPT送り直しての作業で作っております. このシステムがなぜ動いているのかは私にはわかりません. なんか魔法みたいですね. 


## 毎日の更新

毎日これをcodexに命令してます

- DAILY_PROMPT.mdに従って、毎日の通常運用を実行してください
- BACKLOG_PROMPT.mdに従って、次のpending項目を最大5件処理してください。

DAILY_PROMPT.mdは毎日の運用, BACKLOG_PROMPT.mdは今までために貯めていた論文の消化用です. 
たぶんここも自動化できると思います. がどうも課金が必要なようなのでやってないです. 

## 自分用に使いたい場合

おそらく岩井に適した論文を探す設定は"selection-profile.yml"でされているようです. なのでこの部分を変えれば他の人も使えると思います.  変更方法はchatGPTに聞いたら教えてくれると思います. 


<!--

## 最初の公開手順

1. GitHubで新しいPublic repositoryを作成します。例: `geometry-paper-digest`。
2. このフォルダの中身をrepositoryの`main`ブランチ直下に置きます。
3. GitHubの **Settings → Pages** を開きます。
4. **Build and deployment → Source** を **Deploy from a branch** にします。
5. Branchを **main**、Folderを **/(root)** にして保存します。
6. 数分後、`https://<GitHubユーザー名>.github.io/geometry-paper-digest/` で公開されます。

プロジェクトサイトとして公開する場合は `_config.yml` の `baseurl` を次のように設定してください。

```yml
baseurl: "/geometry-paper-digest"
```

ユーザーサイト `<username>.github.io` で公開する場合は `baseurl: ""` のままです。

## サンプル記事

`_posts/2026-08-06-example-paper.md` は `published: false` なので公開されません。記事形式の確認用です。

## 毎日の更新

Codexは原則として `_posts/` にMarkdownファイルを1つ追加するだけです。トップページの件数、分野別一覧、個別記事URLはJekyllが自動生成します。

- 選定条件: `selection-profile.yml`
- Codexへの恒常的な指示: `AGENTS.md`
- 毎日の指示文: `DAILY_PROMPT.md`
- 記事テンプレート: `ARTICLE_TEMPLATE.md`

## 記事の分野

`topic` は次のいずれかです。

- `algebraic-geometry`
- `complex-geometry`
- `several-complex-variables`

## 注意

arXivで無料閲覧できることと、全文または翻訳の再配布が許可されることは同じではありません。記事作成時に原論文のライセンスを確認してください。権利関係が不明確な場合は、逐語訳ではなく独自の日本語要約を掲載します。
-->
