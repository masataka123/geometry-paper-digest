---
layout: paper
title: "On the Canonical Bundle Formula and Adjunction for Generalized Kaehler Pairs"
title_ja: "一般化Kähler対の標準束公式と随伴"
authors: "Christopher Hacon, Mihai Paun"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CV]
arxiv_abstract: >-
  In this article we prove analogs of Kawamata's canonical bundle formula, Kawamata subadjunction and plt/lc inversion of adjunction for generalized pairs on Kaehler varieties. We also show that a conjecture of BDPPin dimension n-1 implies that the cone theorem holds for any n-dimensional Kaehler generalized klt pair. Along the way, we obtain more complete versions of some results due to Collins-Tosatti and Cao-Hoering.
topic: algebraic-geometry
tags: [singularities, birational-geometry, minimal-model-program, positivity]
arxiv_id: "2404.12007v1"
arxiv_url: "https://arxiv.org/abs/2404.12007"
arxiv_submitted: "2024-04-18"
arxiv_updated: "2024-04-18"
summary: >-
  一般化Kähler対に対して、標準束公式、劣随伴、plt/lc随伴反転を確立する。さらに低次元のBDPP予想を仮定して錐定理を導き、解析的MMPを高次元へ進めるための帰納的基盤を与える。
abstract_en: >-
  In this article we prove analogs of Kawamata's canonical bundle formula, Kawamata subadjunction and plt/lc inversion of adjunction for generalized pairs on Kaehler varieties. We also show that a conjecture of BDPPin dimension n-1 implies that the cone theorem holds for any n-dimensional Kaehler generalized klt pair. Along the way, we obtain more complete versions of some results due to Collins-Tosatti and Cao-Hoering.
summary_en: ""
abstract_ja: >-
  Kähler多様体上の一般化対について、Kawamataの標準束公式、劣随伴、pltおよびlc随伴反転の類似を証明する。また、次元$n-1$のBDPP予想から次元$n$の一般化klt Kähler対に対する錐定理が従うことを示す。途中でCollins–TosattiおよびCao–Höringの結果の拡張も得る。
abstract_source_url: "https://arxiv.org/abs/2404.12007"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2404.12007v1](https://arxiv.org/abs/2404.12007)
- **著者:** Christopher Hacon, Mihai Paun
- **初回投稿日・最終更新日:** 2024年4月18日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

一般化対は境界因子に加えてnefな「moduli部分」を備え、射影的MMPで重要な役割を果たす。Kählerの場合にはmoduli部分をBott–Chernコホモロジーの正値類として扱う必要があり、有理因子による近似に頼る射影的議論をそのまま移せない。

本論文は一般化Kähler対に対する随伴と随伴反転を証明し、最小lc中心上へ一般化klt構造を降ろす。中心的な道具は、相対標準類が基底から引き戻される射において、基底上の境界部分と擬有効なmoduli部分を構成する標準束公式である。

さらにBDPP予想を一つ低い次元で仮定し、一般化klt対の錐定理を導く。特に擬有効な対について次元4以下では無条件の結果となる。

## 背景と問題設定

射影的な標準束公式は、$K_X+B\sim_{\mathbb Q,Y}0$を基底上で

$$
K_X+B\sim_{\mathbb Q}f^*(K_Y+B_Y+M_Y)
$$

と表し、$B_Y$にファイバーの特異性、$M_Y$に変動を記録する。Kähler設定では$M_Y$に対応する超越的$(1,1)$類の正値性を直接証明することが核心となる。

## 主結果

### 随伴反転（Theorem 0.1）

一般化対$(X,B+\beta)$と係数1の成分$S\subset B$について、$S$の正規化上の随伴対が一般化lcであることと、元の対が$S$の近傍で一般化lcであることは同値である。pltの場合には$S$の正規性と随伴対の一般化klt性が対応する。

### 劣随伴（Theorem 0.2）

一般化lc対の最小lc中心$W$は正規であり、適切な一般化klt摂動が存在するという仮定の下で

$$
(K_X+B+\beta)|_W=K_W+B_W+\beta_W
$$

が一般化klt対を定める。

### 標準束公式（Theorem 0.3）

連結ファイバーをもつ射影射$f:X\to Y$と一般化klt（またはlc）対について、$[K_X+B+\beta_X]=f^*\gamma$なら

$$
\gamma=[K_Y+B_Y+\beta_Y]
$$

となる一般化klt（またはlc）対が$Y$上に存在する。

### 錐定理（Theorem 0.5）

適切な次元のBDPP予想の下で、$n$次元コンパクト$\mathbb Q$-factorial Kähler一般化klt対には高々可算個の有理曲線$\Gamma_i$があり、

$$
\mathrm{NA}(X)=\mathrm{NA}(X)_{K_X+B+\beta_X\geq0}+\sum_i\mathbb R_+[\Gamma_i],
\qquad 0<-(K_X+B+\beta_X)\cdot\Gamma_i\leq2n
$$

を満たす。指定されたbig条件の下では曲線族は有限である。

## 証明の見取り図

相対随伴類に閉正カレントを構成して基底上のmoduli類の擬有効性を得る。半安定還元を介して各部分多様体への制限も擬有効と示し、既知の判定からb-nef性を導く。この標準束公式を随伴と次元帰納に投入し、BDPP予想が与える非単線織性の判定と組み合わせて錐定理へ進む。

## 原論文との対応

- **Abstractページ:** [arXiv:2404.12007](https://arxiv.org/abs/2404.12007)
- **Introduction:** 番号なしの導入部, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 0.1, 0.2, 0.3, 0.5
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
