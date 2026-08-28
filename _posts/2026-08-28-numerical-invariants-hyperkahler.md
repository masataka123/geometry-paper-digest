---
layout: paper
title: "Numerical invariants of hyper-Kähler manifolds"
title_ja: "hyper-Kähler多様体の数値不変量"
authors: "Olivier Debarre, Chen Jiang"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG]
arxiv_abstract: >-
  We study various constraints on the Beauville quadratic form and the Huybrechts-Riemann-Roch polynomial for hyper-Kähler manifolds, mostly in dimension 6 and in the presence of an isotropic class. In an appendix, Chen Jiang proves that in general, the Huybrechts-Riemann-Roch polynomial can always be written as a linear combination with nonnegative coefficients of certain explicit polynomials with positive coefficients. This implies that the Huybrechts-Riemann-Roch polynomial satisfies a curious symmetry property
topic: algebraic-geometry
tags: [hyperkahler-geometry]
arxiv_id: "2506.04177v1"
arxiv_url: "https://arxiv.org/abs/2506.04177"
arxiv_submitted: "2025-06-04"
arxiv_updated: "2025-06-04"
summary: >-
  Beauville形式が等方類を持つ6次元hyper-Kähler多様体について、Fujiki定数とHuybrechts–Riemann–Roch多項式に強い数値制約を与える。特定の交点数が$3!$または$2\cdot3!$となる場合を計算し、既知の変形型を特徴づけようとする予想へ迫る。
abstract_en: >-
  We study various constraints on the Beauville quadratic form and the Huybrechts-Riemann-Roch polynomial for hyper-Kähler manifolds, mostly in dimension 6 and in the presence of an isotropic class. In an appendix, Chen Jiang proves that in general, the Huybrechts-Riemann-Roch polynomial can always be written as a linear combination with nonnegative coefficients of certain explicit polynomials with positive coefficients. This implies that the Huybrechts-Riemann-Roch polynomial satisfies a curious symmetry property
summary_en: ""
abstract_ja: >-
  主として等方類を持つ6次元hyper-Kähler多様体について、Beauville二次形式とHuybrechts–Riemann–Roch多項式への制約を調べる。付録では、この多項式が正係数を持つ明示的多項式の非負線形結合として常に書けることを示し、そこから対称性を導く。
abstract_source_url: "https://arxiv.org/abs/2506.04177"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2506.04177v1](https://arxiv.org/abs/2506.04177v1)
- **著者:** Olivier Debarre, Chen Jiang
- **初回投稿日・最終更新日:** 2025年6月4日
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

$2n$次元hyper-Kähler多様体$X$にはBeauville二次形式$q_X$、Fujiki定数$c_X$、Huybrechts–Riemann–Roch多項式$P_{RR,X}$が付随し、いずれも変形不変である。論文はこれらの間の数値的拘束を調べる。

焦点は$q_X$が等方類を表す場合、特に6次元である。二つの2次コホモロジー類$l,m$の交点数を固定すると、$q_X$の偶奇、Fujiki定数、多項式の形がごく少数の候補へ絞られる。

交点数が$3!$の場合には既存予想をほぼ証明し、残る一つの数値的可能性の排除だけを課題として残す。$2\cdot3!$の場合にも、予想が存在しないとする状況へ制約を与える。

## 背景と問題設定

Beauville–Fujiki関係とRiemann–Roch公式は

$$
\int_X\alpha^{2n}=c_Xq_X(\alpha)^n,
\qquad
\chi(X,L)=P_{RR,X}(q_X(c_1(L)))
$$

である。$q_X$が0を表し、$\int_Xl^{2n}=0$かつ$\int_Xl^nm^n=an!$となるとき、$a=1$ならK3$^{[n]}$型またはOG10型であるという予想が動機となる。

## 主結果

### 6次元・$a=1$の場合（Proposition 1.2）

$\int_Xl^6=0$, $\int_Xl^3m^3=3!$なら$q_X(l,m)=1$、$q_X$は偶、$c_X=15$であり、

$$
P_{RR,X}(T)=\binom{T/2+4}{3}-\frac{6-n_X}{16}T^2,
\qquad n_X\in\{2,6\}
$$

となる。$n_X=2$を排除できればIntroductionのConjecture 1.1が6次元で従う。

### 6次元・$a=2$の場合（Proposition 1.4）

$\int_Xl^3m^3=2\cdot3!$なら$q_X(l,m)=1$、$q_X$は偶、$c_X=30$であり、

$$
P_{RR,X}(T)=\frac1{24}T^3+\frac{n_X}{8}T^2+
\left(\frac4{n_X}+\frac{n_X^2}{12}\right)T+4,
\quad n_X\in\{1,2,3,4\}
$$

となる。これは$a=2$自体が起こらないというより強い予想に対する必要条件である。

## 原論文との対応

- **Abstractページ:** [arXiv:2506.04177v1](https://arxiv.org/abs/2506.04177v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Conjectures 1.1, 1.3; Propositions 1.2, 1.4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
