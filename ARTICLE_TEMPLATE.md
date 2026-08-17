---
layout: paper
title: "Exact official English arXiv title"
title_ja: "任意の日本語タイトル"
authors: "著者名"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  arXiv公式metadataに掲載されているAbstract原文全文。
topic: algebraic-geometry
tags:
  - k-stability
  - fano-varieties
arxiv_id: "2608.00000v1"
arxiv_url: "https://arxiv.org/abs/2608.00000"
arxiv_submitted: "2026-08-01"
arxiv_updated: "2026-08-01"
summary: >-
  一覧ページ用の日本語紹介を2〜4文で記載する。
abstract_en: >-
  ライセンス上掲載できる英語Abstract原文。
  掲載できない場合は空にする。
summary_en: >-
  英語Abstract原文を掲載できない場合の独自の英語要約。
  abstract_enを使用する場合は空にする。
abstract_ja: >-
  Abstractの日本語訳または独自の日本語要約。
abstract_source_url: "https://arxiv.org/abs/2608.00000"
license_name: "原論文のライセンス"
license_url: "ライセンスURL"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

<!--
検査規則:
- topicは論文内容、タイトル、著者、既存topicから推測せず、arXiv公式メタデータのprimary categoryだけで決定する。
- secondary categoryはtopic決定に使用せず、一つの記事にtopicは一つだけ設定する。
- tagsは`_data/tags.yml`のcanonical IDだけから0〜5個をYAMLリストで指定する。topicとは別軸であり、Abstract・Introductionに明確な根拠があるtagだけを選ぶ。
- titleだけでtagを決めず、著者やtopicから推測・機械付与しない。新tagを記事追加時に作らず、taxonomy変更は別レビューとする。不明なら`tags: []`を明示する。
- arxiv_primary_categoryを必ず保存し、primary categoryと全secondary categoryをarxiv_categoriesの重複のないYAMLリストとして保存する。
- arxiv_primary_categoryがarxiv_categoriesに含まれ、math.AG → algebraic-geometry、math.DG → differential-geometry、math.CV → several-complex-variablesの対応になっていることを公開前に検査する。
- titleにはarXivの正確な英語原題を使用する。
- arXiv公式Abstractページまたは公式APIのmetadataからAbstract原文全文を取得し、独自に要約・改変せず`arxiv_abstract`へ保存する。`arxiv_abstract`は`abstract_en`および`summary_en`とは別の必須fieldである。
- abstract_enとsummary_enを同時に埋めず、両方を空にもしない。
- abstract_enは原文全文を掲載できるライセンスの場合だけ使用する。
- summary_enは原文をコピー・軽微に言い換えず独自に書いた3〜6文の英語要約とし、Abstractとは表示しない。
- abstract_source_urlを必ず記録する。
- _posts全体を調べ、バージョンを除いた基本arXiv番号の重複がないことを記事作成前後に確認する。
- source_scopeはAbstract and Introductionとし、論文全文を読んだかのように書かない。
- 「要約」は通常3〜6段落（原文の情報量に応じて調整し、水増ししない）で、問題、主結果、新規性、重要な仮定を、数式の詳細を知らない読者にも流れが分かるよう独自に説明する。Abstractの逐語訳や軽微な言い換えにしない。
- 証明済みの主張、予想、既知の結果、動機、将来課題、記事作成者の説明を区別する。
- 「背景と問題設定」には、Introductionから確認できる対象、既知の結果、先行研究、従来の制約、未解決問題、新しい着想、および主定理に不可欠な定義・記号・基本式を記す。
- Introductionに番号付きの主定理があれば、「主結果」の下で原則として定理ごとの独立した小見出しを設ける。異なる性質の定理、主要な系、特徴づけ、存在結果、等号成立条件を一段落にまとめない。
- 各主定理では結論を先に述べ、対象、主要な仮定、結論、中心式、数学的意味、先行研究に対する新規性をIntroductionから確認できる範囲で明確にする。情報不足なら「Introductionでは概略として次のように述べられている」と明記し、Introductionにない厳密化を推測しない。
- 「証明の見取り図」は主結果と分離し、Introductionに説明がある場合だけ、主要理論、それぞれの役割、主定理までの論理的な流れ、従来法との差を記す。証明詳細を再現せず、後続節を新たに精読したかのように書かない。
- 「論文の主要ポイント」は必須節ではない。補助的な箇条書きを置く場合も、主結果の代用や記事の結論にせず、箇条書きだけの記事にしない。
- 中心方程式、主定理の不等式、Chern類等式・不等式、数値的判定条件、等号成立条件、一意化・同型の式、不可欠な束・因子・コホモロジー類の表示は、Introductionに明示されていれば原則として掲載する。「ある不等式」「ある数値条件」などの曖昧な文章で代用しない。
- 数式の判断基準は「省略すると主定理の具体的内容が分からなくなるか」とする。証明途中の長い計算、主結果に不要な補助公式、Introductionより後にしかない式、周辺的な記号は原則省略する。
- 掲載する全数式、係数、添字、仮定、定理番号、引用をAbstractまたはIntroductionと照合する。区切りは $ ... $ と別行の $$ ... $$ のみとし、LaTeXコマンドを不要に二重エスケープしない。
- 下記構成を標準とするが、情報不足または論文上不自然な節は統合・省略し、内容のない節を置かない。番号付き主定理の独立小見出しは、Introductionに十分な記載がある限り維持する。
-->

## 書誌情報

- **arXiv:** [arXiv:2608.00000](https://arxiv.org/abs/2608.00000)
- **著者:**
- **初回投稿日:**
- **最終更新日:**
- **主分類・副分類:**
- **ライセンス:**

## 要約

## 背景と問題設定

## 主結果

### 主定理1（Theorem 1.1）

<!-- Introductionに別の番号付き主定理がある場合は、定理ごとに小見出しを追加する。番号や名称は原論文に合わせ、情報が足りない小見出しや空節は置かない。 -->

## 証明の見取り図

<!-- Introductionに証明方針の説明がない場合は、この節を省略する。 -->

## 原論文との対応

- **Abstractページ:**
- **Introduction:** Section X, pp. X–Y
- **Introduction中で言及された主要定理番号:**
- **論文構成の説明:** p. X
- **確認したarXivバージョン:**
- **確認したライセンス:**
- **source_scope:** Abstract and Introduction
