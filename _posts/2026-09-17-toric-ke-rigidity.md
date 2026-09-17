---
layout: paper
title: "Generalized Einstein Laurent polynomials, Toric Kähler-Einstein Rigidity, and Finite Exponential Families"
title_ja: "一般化Einstein Laurent多項式・toric Kähler–Einstein剛性・有限指数型族"
authors: "Shaosai Huang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
  - math.ST
arxiv_abstract: >-
  We study when the logarithm $ψ$ of a positive finite exponential sum on $\mathbb{R}^d$ satisfies $\det\nabla^2ψ=C\exp(\langle b,θ\rangle-λψ)$. This is the Kähler--Einstein equation for metrics induced by exponential maps into projective space and, for natural exponential families, the condition that the Jeffreys prior be a Diaconis--Ylvisaker conjugate prior. First, we classify the bivariate Laurent polynomials with unimodular support satisfying the generalized Einstein condition of Di Scala and Sombra: up to units and monomial changes of coordinates, they are powers of an affine trinomial or products of powers of two independent binomials. Second, we show in every dimension that a smooth compact toric manifold with a projectively induced Kähler--Einstein metric is a product of projective spaces with matched multiples of the Fubini--Study metrics, immersed by a complete Veronese--Segre system up to automorphisms. This proves the compact toric case of the homogeneity conjecture for such metrics and the fixed-point germ and univalent forms of a conjecture of Manno and Salis. Third, without lattice or rationality assumptions, the finite-support exponential families satisfying the equation are, up to affine changes of statistic, exactly the products of multinomial families with a common ratio of categories to trials; this settles the finite-support case of a question of Casalis.
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - toric-geometry
  - monge-ampere-equations
  - curvature
arxiv_id: "2609.18067v1"
arxiv_url: "https://arxiv.org/abs/2609.18067"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  射影空間にKähler immersionされる滑らかなcompact toric Kähler–Einstein多様体を全次元で分類し、射影空間の積と整合するFubini–Study計量、完全Veronese–Segre埋込みに限ることを示す。核となる二変数Laurent多項式の分類は、有限support指数型族に関するFisher情報行列式の剛性も同時に解く。
abstract_en: ""
summary_en: >-
  The paper classifies a generalized Einstein equation for logarithms of finite exponential sums. A two-variable Laurent-polynomial theorem supplies the obstruction needed to classify projectively induced Kähler–Einstein metrics on compact smooth toric manifolds in every dimension. Such manifolds and immersions must arise from products of projective spaces with matched Fubini–Study multiples and complete Veronese–Segre systems. The same rigidity identifies all finite-support statistical families satisfying the corresponding Fisher-determinant identity.
abstract_ja: >-
  正の有限指数和の対数が満たす一般化Einstein方程式を、代数・Kähler幾何・統計の三つの側面から分類する。二変数のunimodular supportをもつLaurent多項式は、affine trinomialの冪または独立な二つのbinomialの冪の積に限られる。これにより射影誘導Kähler–Einstein計量をもつ滑らかなcompact toric多様体、および対応する有限support自然指数型族の完全な剛性を得る。
abstract_source_url: "https://arxiv.org/abs/2609.18067"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18067](https://arxiv.org/abs/2609.18067)
- **著者:** Shaosai Huang
- **初回投稿日・最終更新日:** 2026年9月16日
- **主分類・副分類:** math.DG（主分類）, math.CV, math.ST
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

有限集合 $A\subset\mathbb R^d$ と正係数から $Z(\theta)=\sum_{a\in A}c_ae^{\langle a,\theta\rangle}$、$\psi=\log Z$ を作り、

$$
\det\nabla^2\psi(\theta)=C\exp\{\langle b,\theta\rangle-\lambda\psi(\theta)\}
$$

を分類する。これは射影空間への指数写像が誘導する計量のKähler–Einstein方程式であり、統計ではJeffreys priorがDiaconis–Ylvisaker共役priorになる条件である。

代数的核心は、unimodular supportをもつ二変数Laurent多項式の一般化Einstein条件の分類である。monomial変換とunitを除けば、解はaffine trinomialの冪、または独立な二つのbinomialの冪の積に限られる。

この二次元分類を各二次元faceに適用し、射影誘導Kähler–Einstein計量をもつ任意次元の滑らかなcompact toric多様体を分類する。多様体は射影空間の積であり、計量と埋込みも整合するFubini–Study計量の積と完全Veronese–Segre系に限られる。

格子や有理性を外すと、同じ方程式を満たす有限support自然指数型族は、categories数とtrials数の比が共通なmultinomial族の積だけとなる。

## 主結果

### 二変数分類（Theorem A）

有効rank 2でunimodular supportをもつLaurent多項式 $p$ が一般化Einstein条件を満たすなら、座標変換後

$$
p=(\alpha_0+\alpha_1x+\alpha_2y)^m
\quad\text{または}\quad
p=(\alpha_0+\alpha_1x)^r(\beta_0+\beta_1y)^s
$$

となる。表示係数は非零で、逆も成り立つ。

### compact toric剛性（Theorem B）

滑らかなcompact toric $d$ 次元多様体 $X$ がfull immersion $\phi:X\to\mathbb P^s$ をもち、$\phi^*\omega_{FS}$ がEinsteinなら、$\lambda>0$ で

$$
X\simeq\prod_{j=1}^k\mathbb P^{n_j},\qquad
\phi^*\mathcal O(1)\simeq\boxtimes_{j=1}^k\mathcal O_{\mathbb P^{n_j}}(m_j),
\qquad \frac{n_j+1}{m_j}=\lambda
$$

となる。自己同型とunitary変換を除けば、$\phi$ は完全Veronese–Segre immersionである。

### 有限supportの剛性（Theorem D）

格子条件なしでも、方程式を満たす $Z$ はaffine変換などを除き

$$
Z(\theta)=Ke^{\langle v,\theta\rangle}
\prod_j\left(1+\sum_{q=1}^{n_j}\gamma_{jq}e^{\langle u_{jq},\theta\rangle}\right)^{m_j},
\qquad \frac{n_j+1}{m_j}=\lambda
$$

に限られる。

## 証明の見取り図

二変数ではNewton多角形の辺に沿うfactor valuationを記録し、toric曲面上の不変曲線の自己交叉と突き合わせる。各二次元faceの分類から偏極polytopeがsimplexの積であることを導き、Bando–Mabuchi一意性とCalabi剛性で計量・埋込みを確定する。非格子の場合はprojective completionとphase作用の閉包から欠けていたtorus作用を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18067](https://arxiv.org/abs/2609.18067)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems A, B, D; Corollary C
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
