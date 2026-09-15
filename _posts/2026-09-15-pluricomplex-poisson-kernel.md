---
layout: paper
title: 'On the pluricomplex Poisson kernel and the associated complex Monge--Amp\`{e}re equation'
title_ja: "多重複素Poisson核と付随する複素Monge--Ampère方程式"
authors: "Xieping Wang"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  We give a geometric characterization of the pluricomplex Poisson kernel of bounded strongly linearly convex domains in $\mathbb C^{n+1}$ in terms of their foliation by all complex geodesic discs whose closure contains a fixed boundary point, thus confirming a conjecture posed by Bracci et al. in 2009, even in greater generality. The proof relies crucially on our previous results obtained in a series of two papers. We also revisit the homogeneous complex Monge--Amp\`{e}re equation associated with the pluricomplex Poisson kernel and show that its solutions are far from unique in general by constructing a family of pairwise nonproportional continuous solutions on the unit ball in $\mathbb C^{n+1}$. This sharply contrasts with the uniqueness of solutions to the corresponding equation for the pluricomplex Green function.
topic: several-complex-variables
tags:
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2609.15572v1"
arxiv_url: "https://arxiv.org/abs/2609.15572"
arxiv_submitted: "2026-09-14"
arxiv_updated: "2026-09-14"
summary: >-
  強線形凸領域の多重複素Poisson核を、指定境界点に達する複素測地円板の葉層に沿う調和性から特徴づける。一方、付随する斉次複素Monge--Ampère境界値問題には単位球上でも互いに比例しない連続解が無数にあり、Green関数の場合の一意性と対照的であることを示す。
abstract_en: >-
  We give a geometric characterization of the pluricomplex Poisson kernel of bounded strongly linearly convex domains in $\mathbb C^{n+1}$ in terms of their foliation by all complex geodesic discs whose closure contains a fixed boundary point, thus confirming a conjecture posed by Bracci et al. in 2009, even in greater generality. The proof relies crucially on our previous results obtained in a series of two papers. We also revisit the homogeneous complex Monge--Amp\`{e}re equation associated with the pluricomplex Poisson kernel and show that its solutions are far from unique in general by constructing a family of pairwise nonproportional continuous solutions on the unit ball in $\mathbb C^{n+1}$. This sharply contrasts with the uniqueness of solutions to the corresponding equation for the pluricomplex Green function.
summary_en: ""
abstract_ja: >-
  $\mathbb C^{n+1}$内の有界強線形凸領域について、多重複素Poisson核を、固定した境界点を閉包に含む全複素測地円板による葉層から幾何学的に特徴づける。これはBracciらが2009年に提起した予想を、より一般的な形で肯定する。さらにPoisson核に付随する斉次複素Monge--Ampère方程式を再検討し、単位球上に互いに比例しない連続解の族を構成することで、一般には一意性から程遠いことを示す。
abstract_source_url: "https://arxiv.org/abs/2609.15572"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.15572](https://arxiv.org/abs/2609.15572)
- **著者:** Xieping Wang
- **初回投稿日・最終更新日:** 2026年9月14日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

古典ポテンシャル論のGreen関数とPoisson核には、多重ポテンシャル論における多重複素Green関数と多重複素Poisson核が対応する。強線形凸領域では、指定点を通る、または指定境界点へ達する複素測地円板の葉層がこれらの関数と結び付く。

第一の結果は、境界点$p$へ達する各複素測地円板上で調和的となる多重劣調和関数が、Poisson核の非負定数倍に限られることを示す。従来必要だった$C^2$正則性を外し、強凸より広い強線形凸領域で予想を解決する。

第二の結果は、同じPoisson核型の境界特異性を課した斉次複素Monge--Ampère方程式の解が一意ではないことを示す。単位球上ですら連続多重劣調和解の非比例な族が存在し、内部極を持つGreen関数型問題との本質的な差が現れる。

## 背景と問題設定

有界領域$\Omega\subset\mathbb C^{n+1}$と$p\in\partial\Omega$に対するPoisson核型方程式は、概略

$$
(dd^cu)^{n+1}=0\quad\text{on }\Omega,
$$

境界値$u\to0$（$p$を除く）、および$p$への非接線的接近で$u(z)\asymp-|z-p|^{-1}$という条件からなる。Introductionは、葉ごとの調和性による核の特徴づけと、この方程式自体の解の一意性とを別問題として区別する。

## 主結果

### Poisson核の葉層的特徴づけ（Theorem 1.1）

$\Omega$を$C^{5,\alpha}$境界を持つ有界強線形凸領域、$0<\alpha<1$、$p\in\partial\Omega$とする。$u\in\operatorname{Psh}(\Omega)$が$p$以外の境界で0へ収束し、閉包が$p$を含む各複素測地円板への制限が調和的なら、ある$c\geq0$について

$$
u=cP_{\Omega,p}
$$

となる。

### 単位球上の非一意性（Theorem 1.2）

$\mathbb B^{n+1}$上に、互いに異なる連続多重劣調和関数族$\{u_\lambda\}_{\lambda\in(0,1)}$が存在し、

$$
(dd^cu_\lambda)^{n+1}=0,
\qquad P_{\mathbb B^{n+1},e_1}\leq u_\lambda\leq e^{-\lambda}P_{\mathbb B^{n+1},e_1}
$$

を満たすが、各$u_\lambda$は$P_{\mathbb B^{n+1},e_1}$の定数倍ではない。

## 証明の見取り図

Theorem 1.1では、各複素測地円板上の負の調和関数を円板のPoisson核で表し、その比例係数が測地円板に依存しないことを示す。正規化した測地円板族を滑らかに変化させ、変分場と多重劣調和性から比例係数の微分が消えることを導く。Theorem 1.2の解族は、凸関数と多重劣調和関数の関係および最適化の着想を用いて構成されるとIntroductionで説明される。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.15572](https://arxiv.org/abs/2609.15572)
- **Introduction:** Section 1, pp. 1--4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
