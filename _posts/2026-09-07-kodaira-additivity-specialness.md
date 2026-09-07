---
layout: paper
title: "Kodaira additivity, birational isotriviality and specialness"
title_ja: "小平次元の加法性・双有理等自明性・specialness"
authors: "Frédéric Campana"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We show, using [14], that a smooth projective fibration f : X $\rightarrow$ Y between connected complex quasi-projective manifolds satisfies the equality $κ$(X) = $κ$(X y) + $κ$(Y) of Logarithmic Kodaira dimensions if its fibres X y admit a good minimal model. Without the last assumption, this was conjectured in [11]. Several cases are established in [13], which inspired the present text. Although the present results overlap with those of [13] in the projective case, the approach here is different, based on the r{ô}le played by birationally isotrivial fibrations, special manifolds and the core map of Y introduced and constructed in [3].
topic: algebraic-geometry
tags:
  - moduli
  - birational-geometry
  - minimal-model-program
arxiv_id: "2207.05412v2"
arxiv_url: "https://arxiv.org/abs/2207.05412"
arxiv_submitted: "2022-07-12"
arxiv_updated: "2023-03-08"
summary: >-
  滑らかな射影的fibration $f:X\to Y$について、一般ファイバーの標準束が半豊富なら対数小平次元の加法公式$\kappa(X)=\kappa(X_y)+\kappa(Y)$が成り立つことを示す。証明はspecialな底上の族の双有理等自明性、Campanaのcore map、orbifold版Viehweg加法定理を組み合わせる。
abstract_en: ""
summary_en: >-
  The paper studies logarithmic Kodaira dimension for smooth projective fibrations of connected complex quasi-projective manifolds. Under semiampleness of the canonical bundles of the fibers, it proves the expected additivity formula. The argument first handles birationally isotrivial families and then decomposes the base via its core map. Special fibers of the core and the general-type orbifold base allow the two parts of the calculation to be recombined.
abstract_ja: >-
  連結な複素準射影多様体間の滑らかな射影的fibrationを考える。ファイバーの標準束が半豊富なら、全空間の対数小平次元はファイバーと底の対数小平次元の和に等しい。証明は双有理等自明な場合、special多様体、底のcore mapを中心に組み立てられる。良い極小モデルを仮定する弱い形にも既知結果を用いて同じ議論が適用できる。
abstract_source_url: "https://arxiv.org/abs/2207.05412"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2207.05412](https://arxiv.org/abs/2207.05412)
- **著者:** Frédéric Campana
- **初回投稿日:** 2022年7月12日
- **最終更新日:** 2023年3月8日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Iitaka型の加法性は、fibrationの全空間の小平次元を一般ファイバーと底の小平次元から求める問題である。準射影の場合は滑らかなgood compactificationの境界を加えた対数小平次元$\kappa(X)$を用いる。

本論文はsubmersiveな射影的正則写像$f:X\to Y$のファイバー$X_y$が半豊富な標準束をもつとき、期待される等式を証明する。半豊富性を良い極小モデルの存在へ弱める版も、Introductionで引用されたTajiの結果を用いれば同じ証明で得られると説明される。

方法の中心は、底がspecialなら族が双有理等自明になることと、任意の底をcore mapでspecialなファイバーと一般型orbifold底に分解することである。双有理等自明な部分の直接計算とorbifold版Viehweg加法定理が二つの次元を接続する。

## 背景と問題設定

双有理等自明とは、generically finiteなbase change $Y_1\to Y$の後に族が$F\times Y_1$と底上双有理になることをいう。この場合、相対標準束の小平次元を積の上で計算できる。一般の底に対してはcore map

$$
c_Y:Y\dashrightarrow (C,\Delta_{c_Y})
$$

を用い、その一般ファイバー$Y_c$はspecial、orbifold底$(C,\Delta_{c_Y})$は一般型となる。

## 主結果

### 加法定理（Theorem 1）

連結な複素準射影多様体の間のsubmersive projective holomorphic map $f:X\to Y$をとり、ファイバー$X_y$の標準束が半豊富と仮定する。このとき

$$
\kappa(X)=\kappa(X_y)+\kappa(Y)
$$

が成り立つ。特に$\kappa(Y)=-\infty$なら$\kappa(X)=-\infty$である。これは半豊富性なしに予想されている加法性の、明確な仮定下での解決である。

## 証明の見取り図

まず双有理等自明な族ではgenerically finite base change後の積表示から加法公式を直接計算する。次にcore mapの一般ファイバー$Y_c$はspecialなので、制限された族$X_c\to Y_c$は双有理等自明となり、$\kappa(X_c)=\kappa(X_y)+\kappa(Y_c)$を得る。一方、一般型orbifold底に対するViehweg加法性から$\kappa(Y)=\kappa(Y_c)+\dim C$および$\kappa(X)=\kappa(X_c)+\dim C$を得る。差を取れば主等式が従う。

## 原論文との対応

- **Abstractページ:** [arXiv:2207.05412](https://arxiv.org/abs/2207.05412)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1, Remark 2
- **論文構成の説明:** Contents, p. 1; Introduction, pp. 2–3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
