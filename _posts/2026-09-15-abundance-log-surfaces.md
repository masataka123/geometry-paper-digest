---
layout: paper
title: "Abundance theorem for log surfaces"
title_ja: "特異性条件を課さないログ曲面のアバンダンス定理"
authors: "Makoto Enokizono, Nao Moriyama"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We establish the abundance theorem for log surfaces without assuming $\mathbb{Q}$-factoriality or log canonicity.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - minimal-model-program
  - positivity
arxiv_id: "2609.12478v1"
arxiv_url: "https://arxiv.org/abs/2609.12478"
arxiv_submitted: "2026-09-11"
arxiv_updated: "2026-09-11"
summary: >-
  任意標数の代数閉体上で、$\mathbb{Q}$-factorial性もログ標準性も仮定しないログ曲面のアバンダンスを証明する。固有全射 $X\to S$ に関して $K_X+\Delta$ が nef なら semiample であることを示し、MMP自体が走らない特異曲面にも結論が残ることを明らかにする。
abstract_en: ""
summary_en: >-
  The paper proves relative abundance for log surfaces over an algebraically closed field of arbitrary characteristic. For a normal surface with a boundary divisor, relative nefness of the log canonical divisor implies relative semiampleness, with neither Q-factoriality nor log canonicity imposed. The argument replaces unavailable MMP reductions by surface classification, ruled-surface analysis, and vanishing results for normal surfaces.
abstract_ja: >-
  本論文は、$\mathbb{Q}$-factorial性やログ標準性を仮定せず、ログ曲面に対するアバンダンス定理を確立する。
abstract_source_url: "https://arxiv.org/abs/2609.12478"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.12478](https://arxiv.org/abs/2609.12478)
- **著者:** Makoto Enokizono, Nao Moriyama
- **初回投稿日:** 2026年9月11日
- **最終更新日:** 2026年9月11日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

アバンダンス予想は、穏やかな特異点をもつ対に対し、ログ標準因子の nef 性から semiample 性を導こうとする。曲面ではログ標準対や $\mathbb{Q}$-factorial なログ曲面に対する定理が知られていたが、これらを外すとMMPも非消滅定理も一般には成立しない。

本論文は、その障害にもかかわらずアバンダンスそのものは成立することを示す。任意標数の代数閉体上のログ曲面 $(X,\Delta)$ と固有全射 $\pi:X\to S$ に対し、$K_X+\Delta$ が $\pi$-nef なら $\pi$-semiample である。

証明は、境界を有理係数へ帰着した後、非消滅、飯高次元ゼロ、非bigの場合、bigの場合を分ける。従来のMMPによる相対問題から絶対問題への帰着を使えない点が新しく、非bigな相対場合は直接扱い、bigな場合は正規曲面上の消滅定理と随伴を用いる。

## 背景と問題設定

ログ曲面とは、正規曲面 $X$ と境界 $\mathbb{R}$-因子 $\Delta$ の対で、$K_X+\Delta$ が $\mathbb{R}$-Cartier であるものをいう。既知の曲面論では $\mathbb{Q}$-factorial性またはログ標準性がMMPを支えていたが、本論文の設定ではその経路が失われる。したがって、nef 性から切断の存在と基点自由性へ進む別の議論が必要となる。

## 主結果

### アバンダンス定理（Theorem 1.1）

結論は、任意標数の代数閉体 $k$ 上で相対アバンダンスが成立するというものである。ログ曲面 $(X,\Delta)$ と多様体の固有全射 $\pi:X\to S$ に対し、

$$
K_X+\Delta\ \text{が }\pi\text{-nef}
\quad\Longrightarrow\quad
K_X+\Delta\ \text{は }\pi\text{-semiample}
$$

が成り立つ。$X$ の $\mathbb{Q}$-factorial性も対のログ標準性も要求しない点が核心であり、$X$ が射影的である場合や $\Delta=0$ の場合にも非自明な一般化である。

## 証明の見取り図

Shokurov polytopeの方法で $\Delta$ を境界 $\mathbb{Q}$-因子に帰着する。最小解消上でRiemann--Rochと滑らかな射影曲面の分類を使い、残る非有理 ruled surface の場合には $\mathbb{P}^1$-束構造と $K_X+\Delta$ の $\mathbb{Q}$-Cartier性から非消滅を得る。飯高次元ゼロの場合は楕円 ruled surface の反標準因子を分析し、非bigな相対場合を直接処理する。bigな場合にはMMP依存の部分を正規曲面上の消滅定理と随伴結果で置き換える。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.12478](https://arxiv.org/abs/2609.12478)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** Section 1.2, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
