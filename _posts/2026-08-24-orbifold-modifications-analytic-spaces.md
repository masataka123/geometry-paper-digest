---
layout: paper
title: "Orbifold modifications of complex analytic spaces"
title_ja: "複素解析空間のオービフォールド修正"
authors: "János Kollár, Wenhao Ou"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We show that a compact, complex analytic space $X$ has a bimeromorphic orbifold modification that is an isomorphism over the locally trivial orbifold locus of $X$.
topic: algebraic-geometry
tags:
  - singularities
  - complex-analytic-spaces
  - birational-geometry
arxiv_id: "2512.20708v1"
arxiv_url: "https://arxiv.org/abs/2512.20708"
arxiv_submitted: "2025-12-23"
arxiv_updated: "2025-12-23"
summary: >-
  コンパクト複素解析空間について、局所自明なオービフォールド部分と滑らかな部分を変えず、全体をオービフォールドにする射影的双有理修正を構成する。解析的設定で特異成分を分離し、有限被覆上の同変特異点解消を貼り合わせることが核心である。
abstract_en: >-
  We show that a compact, complex analytic space $X$ has a bimeromorphic orbifold modification that is an isomorphism over the locally trivial orbifold locus of $X$.
summary_en: ""
abstract_ja: >-
  コンパクト複素解析空間$X$には、$X$の局所自明なオービフォールド部分上で同型となる双有理オービフォールド修正が存在することを示す。
abstract_source_url: "https://arxiv.org/abs/2512.20708"
license_name: "Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)"
license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2512.20708](https://arxiv.org/abs/2512.20708)
- **著者:** János Kollár, Wenhao Ou
- **初回投稿日:** 2025年12月23日
- **最終更新日:** 2025年12月23日
- **主分類・副分類:** math.AG; math.CV
- **ライセンス:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## 要約

複素解析空間の商特異点は局所的に $\mathbb C^n/G$ と表される。特異集合の稠密開部分では横断方向の商特異点型が局所自明になるが、その良い部分を壊さずに空間全体をオービフォールドへ修正することは、射影的場合と異なり解析的設定では自明でない。

本論文はコンパクト複素空間 $X$ と、特異集合内の局所自明なオービフォールド開部分 $S^\circ$ に対し、$S^\circ$ と $X$ の滑らかな部分上で同型となる射影的双有理修正 $Y\to X$ を構成する。修正後の $Y$ はオービフォールドである。

構成は、良い特異成分の近傍を準備し、他の特異成分から分離し、局所有限被覆上の同変特異点解消を貼り合わせる。得られる修正には相対ampleな例外反有効因子があり、双正則写像に関して関手的である。

## 背景と問題設定

$X$が $S^\circ$ に沿って局所自明であるとは、局所的に孤立商特異点 $\mathbb C^r/G$ と滑らかな因子 $\mathbb C^{n-r}$ の積に見えることを指す。射影的設定では既知の構成があるが、Introductionによればその方法は射影性に本質的に依存し、局所自明性を外した解析版は未解決である。

## 主結果

### 主定理（Theorem 1）

コンパクト複素空間 $X$ と、$X$が局所自明なオービフォールドとなるZariski開集合 $S^\circ\subset\operatorname{Sing}(X)$ に対し、射影的双有理修正

$$
\pi_Y:Y\longrightarrow X
$$

が存在する。$Y$はオービフォールドであり、$\pi_Y$ は $S^\circ$ 上および $X_{\mathrm{reg}}$ 上で同型である。すでに良い部分を保存することが、単なる特異点解消との相違である。

### 補足（Complement 2）

構成される $\pi_Y$ は、$\pi_Y$-ampleな例外反有効因子をもち、双正則写像に関して関手的である。この付加構造は後のChern類不等式への応用を可能にする。

## 証明の見取り図

まずŁojasiewicz不等式を用いて横断切片の円錐近傍を一様に制御し、well-prepared neighborhoodを作る。次に特異集合を保存すべき成分と残部へ分け、残部上のblow-upによって両者の影響を単純正規交差部分で分離する。

局所近傍の補集合の基本群から有限商を選び、横断商特異点をほどく有限正規被覆を作る。その被覆を同変的かつ関手的に解消し、有限群で割って局所オービフォールド修正を得る。最後に選択を整合させ、局所修正と保存部分を貼り合わせる。

## 原論文との対応

- **Abstractページ:** [arXiv:2512.20708](https://arxiv.org/abs/2512.20708)
- **Introduction:** unnumbered introduction, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1, Complement 2
- **論文構成の説明:** Outline of the proof (5), pp. 2–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-SA 4.0
- **source_scope:** Abstract and Introduction
