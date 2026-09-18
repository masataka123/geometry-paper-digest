---
layout: paper
title: "Subharmonicity of direct images and applications"
title_ja: "直像の劣調和性と葉層の代数性"
authors: "Frédéric Campana, Junyan Cao, Mihai Păun"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  In this article we establish new positivity properties for direct images of twisted pluricanonical bundle of an algebraic fiber space. As a corollary we obtain an algebraicity criteria for holomorphic foliations which partly confirms a conjecture of Pereira-Touzet.
topic: several-complex-variables
tags:
  - positivity
  - vector-bundles-sheaves
  - foliations
arxiv_id: "1906.11317v2"
arxiv_url: "https://arxiv.org/abs/1906.11317"
arxiv_submitted: "2019-06-26"
arxiv_updated: "2021-08-13"
summary: >-
  捩れ多重標準束の直像に対する曲率の劣調和的正値性を確立し、安定な対称冪をもつChern類零の正則葉層の葉が代数的になる条件を与える。直像の行列式の曲率評価が、葉層のtautological束とHermitian flatnessの二者択一を導く。
abstract_en: ""
summary_en: >-
  The paper develops curvature positivity statements for direct images of twisted pluricanonical bundles. These estimates imply a dichotomy for stable reflexive sheaves with vanishing first Chern class: an associated tautological bundle fails to be pseudoeffective unless the sheaf is Hermitian flat. Applied to holomorphic foliations, this yields an algebraicity criterion for their leaves.
abstract_ja: >-
  捩れ多重標準束の直像とその行列式に新しい曲率正値性を与える。この評価から、安定な対称冪をもつ反射層のtautological束に関する二者択一を導き、Chern類条件を満たす正則葉層の葉の代数性を示す。
abstract_source_url: "https://arxiv.org/abs/1906.11317"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1906.11317](https://arxiv.org/abs/1906.11317)
- **著者:** Frédéric Campana, Junyan Cao, Mihai Păun
- **初回投稿日:** 2019-06-26
- **最終更新日:** 2021-08-13
- **主分類・副分類:** math.CV, math.AG（主分類: math.CV）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素幾何における直像層の正値性を、曲率と底空間のKähler形式を楔積した劣調和的な形で精密化する。目的は直像そのものだけでなく、その行列式に定量的な曲率下界を移すことである。

この解析を、第一Chern類が零で安定な対称冪をもつ反射層へ適用する。対応する射影束上のtautological束が擬有効でなければならない状況を排除できない場合、層はHermitian flatになる。

正則葉層では $c_1=0$, $c_2\ne0$ と安定性の下でflatの場合を除外し、葉が代数的であることを得る。

## 背景と問題設定

$F\subset T_X$ を正則葉層とする。Pereira--Touzetの予想は、$K_X$ が擬有効で $F$ が安定、$c_1(F)=0$, $c_2(F)\ne0$ なら葉が代数的になると予想する。

## 主結果

### 葉層の代数性（Theorem 1.1）

滑らかな射影多様体 $(X,\omega_X)$ 上で $c_1(F)=0$, $c_2(F)\ne0$ とし、階数を $r$ とする。ある $k\geq r$ について反射的対称冪 $\widehat{\operatorname{Sym}}^kF^*$ が $\omega_X$-安定なら、$F$ の葉は代数的である。

### 直像行列式の曲率（Theorem 1.3）

局所射影な固有全射 $p:Y\to X$ と半正曲率をもつ $(L,h_L)$ について、$\Theta_{h_L}(L)\wedge p^*\omega_X^{n-1}\geq\varepsilon_0p^*\omega_X^n$ なら、直像 $E=p_*((K_{Y/X}+L)\otimes\mathcal I(h_L))$ は

$$
\Theta_{\det h_{Y/X}}(\det E)\wedge\omega_X^{n-1}\geq r\varepsilon_0\omega_X^n
$$

を満たす。

## 証明の見取り図

局所的な積射影へ還元して $L^2$ 計量の曲率を計算する。安定性と乗数イデアルを組み合わせて反射層上に正曲率特異Hermitian計量を作り、$c_1=0$ からHermitian flatnessへ至る。

## 原論文との対応

- **Abstractページ:** [arXiv:1906.11317](https://arxiv.org/abs/1906.11317)
- **Introduction:** Section 1
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
