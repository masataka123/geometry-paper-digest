---
layout: paper
title: "Hodge theory for local systems and cohomological support loci"
title_ja: "局所系とコホモロジーsupport locusのHodge理論"
authors: "Junyan Cao, Ya Deng, Christopher D. Hacon, Mihai Paun"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this article, we pursue two main objectives. The first is to show that the fundamental results of Green-Lazarsfeld (1987, 1991) on generic vanishing theorems, and works of Budur-Wang (2015, 2020) on cohomology jumping loci, can be established within a unified framework based on suitable versions of the $\partial\bar{\partial}$-lemma. Our second-and primary-goal is to develop the technical tools required for this approach, namely an $L^2$-Hodge theory for the cohomology of rank-one local systems on quasi-compact Kähler manifolds. Further developments concerning higher-rank local systems, as well as several geometric applications, will be presented in a companion paper and are briefly outlined in the introduction.
topic: algebraic-geometry
tags:
  - hodge-theory
  - higgs-nonabelian-hodge
  - l2-methods
arxiv_id: "2511.06773v1"
arxiv_url: "https://arxiv.org/abs/2511.06773v1"
arxiv_submitted: "2025-11-10"
arxiv_updated: "2025-11-10"
summary: >-
  準コンパクトKähler多様体上のrank-one局所系のコホモロジーに対する $L^2$ Hodge理論を構築し、Green–Lazarsfeldのgeneric vanishingとBudur–Wangのjumping locusを統一的な $\partial\bar\partial$-lemmaの枠組みで捉える。対数・Poincaré・円錐特異性を伴う計量の下でHodge分解を確立し、一次変形可能性から高次変形可能性を導く。
abstract_en: >-
  In this article, we pursue two main objectives. The first is to show that the fundamental results of Green-Lazarsfeld (1987, 1991) on generic vanishing theorems, and works of Budur-Wang (2015, 2020) on cohomology jumping loci, can be established within a unified framework based on suitable versions of the $\partial\bar{\partial}$-lemma. Our second-and primary-goal is to develop the technical tools required for this approach, namely an $L^2$-Hodge theory for the cohomology of rank-one local systems on quasi-compact Kähler manifolds. Further developments concerning higher-rank local systems, as well as several geometric applications, will be presented in a companion paper and are briefly outlined in the introduction.
summary_en: >-
  
abstract_ja: >-
  Green–Lazarsfeldのgeneric vanishingとBudur–Wangのcohomology jumping locusに関する結果を、適切な $\partial\bar\partial$-lemmaに基づく統一的枠組みで再構成する。そのための主要技術として、準コンパクトKähler多様体上のrank-one局所系のコホモロジーに対する $L^2$ Hodge理論を発展させる。高rank局所系や幾何的応用は続編の課題として予告される。
abstract_source_url: "https://arxiv.org/abs/2511.06773v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.06773v1](https://arxiv.org/abs/2511.06773v1)
- **著者:** Junyan Cao, Ya Deng, Christopher D. Hacon, Mihai Paun
- **初回投稿日・最終更新日:** 2025年11月10日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

局所系を変形したときコホモロジー次元がどのように跳ぶかを、Hodge理論の局所解析から理解する。中心原理は、あるコホモロジー類が一次まで変形できれば任意次数まで変形できるというものであり、Green–LazarsfeldとBudur–Wangの結果を異なる $\partial\bar\partial$-lemmaの現れとして統一する。

主な技術的貢献は、単純正規交差因子 $D$ を除いたKähler多様体 $X\setminus D$ 上のrank-one局所系に対する $L^2$ Hodge理論である。対数flat bundleと調和計量を選び、境界成分に応じてPoincaré特異性、円錐特異性、cylindrical特異性を組み合わせる。

これにより局所系のcohomology jumping locusの接方向に沿う線形変形がjump条件を保つことを解析的に証明する。元のBudur–Wangの大域的moduli空間とRiemann–Hilbert対応による議論とは異なる自己完結的な方法である。

## 背景と問題設定

$\bar\partial_t=\bar\partial_L+t\alpha$ による変形で $\ker\bar\partial_t/\operatorname{im}\bar\partial_t$ の次元を追う。一次延長は $\bar\partial v=u\wedge\alpha$ の可解性として表される。コンパクトの場合の原理を、境界で積分可能性が壊れうる準コンパクト設定へ移すことが課題である。

## 主結果

### Green–Lazarsfeld型延長（Theorem 0.1）

正則canonical form $u$ が方向 $\alpha$ に一次延長可能なら、$u_0=u$ かつ $u_t\in\ker\bar\partial_t$ を満たす滑らかな族が存在する。すなわち一次延長可能性が全次数の延長を与える。

### Cohomology jumping locus（Theorem 0.5）

rank-one局所系のmoduli $M_B(X\setminus D)$ 内の円板芽 $\gamma$ が、近傍で $\dim H^p(X\setminus D,\gamma(t))\geq k$ を満たすとする。$\tau=\gamma(0)$ と無限小変形 $\alpha=d\gamma(0)$ に対して
$$\dim H^p(X\setminus D,\tau+t\alpha)\geq k$$
が小さい $t$ で成り立つ。IntroductionではBudur–Wangの定理に対する新しい解析的証明として位置づけられる。

## 証明の見取り図

Deligneの対数de Rham複体を解消し、コホモロジーをLaplace型作用素の核で計算する。境界成分をHiggs場の留数と曲率のLelong数に従って三分し、Poincaré・円錐計量を使う $L^2$ Hodge分解、log tangent bundleを使う分解、currentとしての分解を使い分ける。currentの段階で微分方程式を解き、$L^2$ 評価によって解をlog poleをもつformへ戻すことで、一次延長から無限次数延長を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2511.06773v1](https://arxiv.org/abs/2511.06773v1)
- **Introduction:** unnumbered introductory section, pp. 1–6
- **主要結果:** Theorems 0.1–0.5
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
