---
layout: paper
title: "Chern numbers on positive vector bundles and combinatorics"
title_ja: "正値ベクトル束のChern数と組合せ論"
authors: "Ping Li"
arxiv_primary_category: "math.DG"
arxiv_categories: [math.DG, math.AG, math.CO]
arxiv_abstract: >-
  Combinatorial ideas are developed in this article to study Chern numbers on ample and numerically effective vector bundles. An effective lower bound for Chern numbers of ample vector bundles is established, which makes some progress towards a long-standing question. Along this line we prove that Chern numbers on nef vector bundles obey reverse dominance ordering, which improves upon some classical and recent results. We propose a simultaneous positivity question on (signed) Chern numbers of compact complex or Kähler manifolds whose (co)tangent bundles are semipositive in various senses, and show that it holds true for compact homogeneous complex manifolds.
topic: differential-geometry
tags: [positivity, vector-bundles-sheaves, chern-classes]
arxiv_id: "2501.08833v1"
arxiv_url: "https://arxiv.org/abs/2501.08833"
arxiv_submitted: "2025-01-15"
arxiv_updated: "2025-01-15"
summary: >-
  ampleベクトル束のChern数に有効な下界を与え、nefベクトル束のChern数が分割の優越順序とは逆向きに並ぶことを示す。組合せ論的順序を正値性理論へ持ち込み、コンパクト等質複素多様体では全Chern数が正か全て消えるかという同時正値性も証明する。
abstract_en: ""
summary_en: >-
  This paper uses the combinatorics of integer partitions to compare Chern numbers of positive vector bundles. It gives an explicit effective lower bound for every Chern number of an ample bundle when its rank is at least the base dimension. For nef bundles, dominance among partitions produces inequalities in the reverse direction among the associated Chern numbers. These comparisons also yield a positivity-or-vanishing dichotomy for all Chern numbers of compact homogeneous complex manifolds.
abstract_ja: >-
  ampleおよびnefベクトル束のChern数を組合せ論的に研究する。ample束のChern数に有効な下界を与え、nef束では分割の優越順序に対する逆順序不等式を証明する。さらに、接束または余接束が各種の意味で半正値な複素・Kähler多様体の符号付きChern数の同時正値性を提起し、コンパクト等質複素多様体について確立する。
abstract_source_url: "https://arxiv.org/abs/2501.08833"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2501.08833v1](https://arxiv.org/abs/2501.08833v1)
- **著者:** Ping Li
- **初回投稿日:** 2025年1月15日
- **最終更新日:** 2025年1月15日
- **主分類・副分類:** math.DG（主分類）, math.AG, math.CO
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正値ベクトル束のChern類から作る多項式の正値性はFulton–Lazarsfeldにより特徴づけられ、nef束にも拡張されている。しかし一般のample束のChern数に対する有効な下界は知られていなかった。

本論文は整数分割の優越順序を用い、階数が底空間の次元以上であるample束の全Chern数に明示可能な正の下界を与える。下界は一般に最適とは主張されず、階数が次元より小さい場合は手法の射程外である。

さらにnef束では、分割が優越順序で大きいほど対応するChern数が小さくなる「逆優越順序」を証明する。これにより与えられた次数のChern数の最大・最小を一括して比較できる。

応用として、コンパクト等質複素多様体のChern数は全て正で多様体が有理等質であるか、全て消えるかのいずれかであることを示す。

## 背景と問題設定

$\lambda=(\lambda_1,\ldots)$を整数$k$の分割とし、階数$r$の束$E$に対して$c_\lambda(E)=\prod_i c_{\lambda_i}(E)$と置く。分割の優越順序$\lambda\geq\mu$は全ての$j$について$\sum_{i\leq j}\lambda_i\geq\sum_{i\leq j}\mu_i$で定まる。本論文の着想は、この純組合せ論的な半順序をChern数の大小へ移すことである。

## 主結果

### ample束の有効下界（Theorem 2.1）

$X$を$n$次元射影多様体、$E$を階数$r\geq n$のampleベクトル束とする。任意の$\lambda\in\operatorname{Par}(n)$に明示的に計算できる正整数$B(\lambda)$が存在し、

$$
\int_X c_\lambda(E)\geq B(\lambda)\geq2^{\ell(\lambda)-1}
$$

が成り立つ。Introductionでは、この下界が一般には最適でないことも明記される。

### nef束の逆優越順序（Theorem 2.3）

$(M,\omega)$を$n$次元コンパクトKähler多様体、$E$を階数$r$のnef束とする。$1\leq k\leq n$かつ$\lambda\geq\mu$が$\Gamma(k,r)$の分割なら、

$$
0\leq\int_M c_\lambda(E)[\omega]^{n-k}
\leq\int_M c_\mu(E)[\omega]^{n-k}
$$

が成り立つ。

### 等質多様体の同時正値性（Theorem 2.7）

コンパクト等質複素多様体$M$では、全てのChern数が正で$M$が有理等質多様体であるか、全てのChern数が消えるかの二者択一が成り立つ。

## 証明の見取り図

Introductionが説明する構成では、Fulton–Lazarsfeld型不等式をSchur多項式の基底で扱い、分割の優越順序に関する組合せ論を組み合わせる。まず逆優越順序を確立し、その極値評価を用いて下界$B(\lambda)$を構成する。同じ比較原理が、等質多様体におけるChern数の同時正値性の証明にも使われる。

## 原論文との対応

- **Abstractページ:** [arXiv:2501.08833v1](https://arxiv.org/abs/2501.08833v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 2.1, 2.3, 2.7; Corollary 2.5
- **論文構成の説明:** Section 1, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
