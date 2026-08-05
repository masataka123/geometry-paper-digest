# Geometry Paper Digest starter

参考サイトの落ち着いたカード型デザインを基礎に、代数幾何学・複素幾何学・多変数複素解析向けにしたGitHub Pages/Jekyllサイトです。

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
