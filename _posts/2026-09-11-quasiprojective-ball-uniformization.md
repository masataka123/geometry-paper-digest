---
layout: paper
title: "A characterization of complex quasi-projective manifolds uniformized by unit balls"
title_ja: "単位球で一意化される複素準射影多様体の特徴づけ"
authors: "Ya Deng"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  In 1988 Simpson extended the Donaldson-Uhlenbeck-Yau theorem to the context of Higgs bundles, and as an application he proved a uniformization theorem which characterizes complex projective manifolds and quasi-projective curves whose universal coverings are complex unit balls. In this paper we give a necessary and sufficient condition for quasi-projective manifolds to be uniformized by complex unit balls. This generalizes the uniformization theorem by Simpson. Several byproducts are also obtained in this paper.
topic: algebraic-geometry
tags:
  - higgs-nonabelian-hodge
  - hyperbolicity
  - uniformization
  - chern-classes
arxiv_id: "2006.16178v3"
arxiv_url: "https://arxiv.org/abs/2006.16178"
arxiv_submitted: "2020-06-29"
arxiv_updated: "2021-11-29"
summary: >-
  滑らかな境界をもつ射影log pairについて、対数余接束から作るHiggs束の斜率polystabilityと対数Miyaoka–Yau型等号により、開部分が複素単位球の商であることを特徴づける。Simpson–Mochizuki対応からperiod mapを構成し、その完備性を示して大域的一意化へ進む。
abstract_en: ""
summary_en: >-
  This work characterizes smooth quasi-projective manifolds whose universal cover is the complex unit ball. The criterion combines polystability of a natural logarithmic Higgs bundle with equality in a logarithmic Chern-class inequality on a smooth compactification. Equality produces a principal variation of Hodge structures and a locally biholomorphic period map, whose completeness promotes it to the desired global uniformization. The converse is established for smooth toroidal compactifications of noncompact ball quotients.
abstract_ja: >-
  SimpsonはHiggs束を用いて、複素単位球を普遍被覆にもつ射影多様体と準射影曲線を特徴づけた。本論文はこれを一般次元の準射影多様体へ拡張し、複素単位球で一意化されるための必要十分条件を与える。さらに関連する安定性、Hodge理論、剛性について複数の副産物を得る。
abstract_source_url: "https://arxiv.org/abs/2006.16178"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2006.16178v3](https://arxiv.org/abs/2006.16178)
- **著者:** Ya Deng（付録はBenoît Cadorelとの共著）
- **初回投稿日:** 2020年6月29日
- **最終更新日:** 2021年11月29日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素単位球 $\mathbb B^n$ の格子商を代数幾何的データから特徴づけることは、Miyaoka–Yau等号と一意化理論の中心問題である。SimpsonのHiggs束による特徴づけはコンパクト多様体と準射影曲線を扱ったが、一般次元の非コンパクト商では境界近傍の解析が新たに必要となる。

本論文は、射影多様体 $X$ と滑らかな境界因子 $D$ に対し、自然なlog Higgs束 $\Omega_X^1(\log D)\oplus\mathcal O_X$ の斜率polystabilityを仮定する。そのうえで対数Chern類不等式の等号が成立すれば、$X-D$ が単位球のtorsion-free格子商であり、$X$ がその一意なtoroidal compactificationであることを示す。

境界 $D$ の滑らかさは本質的である。同じ条件を保っても、$D$ が単純正規交差だが滑らかでない場合には普遍被覆が単位球にならないことも示される。

逆方向として、非コンパクト球商の滑らかなtoroidal compactificationでは、自然なlog Higgs束が広いクラスのbigかつnefな偏極に関してpolystableとなり、必要なChern類等式を満たす。

## 背景と問題設定

$(X,D)$ に付随するlog Higgs束を

$$
(E,\theta)=\bigl(\Omega_X^1(\log D)\oplus\mathcal O_X,\theta\bigr),
\qquad \theta(a,b)=(0,a)
$$

とする。Mochizukiのparabolic Higgs束に対するBogomolov–Gieseker不等式がChern類不等式を与えるが、本論文の主眼は等号から球一意化を引き出すことにある。

## 主結果

### 非コンパクト球商の十分条件（Theorem A / Theorem 4.7(i)）

$X$ を $n$ 次元射影多様体、$D$ を互いに交わらない成分からなる滑らかな因子、$L$ をample偏極とする。上の $(E,\theta)$ が $\mu_L$-polystableならば

$$
\left(2c_2(\Omega_X^1(\log D))-\frac{n}{n+1}c_1(\Omega_X^1(\log D))^2\right)c_1(L)^{n-2}\geq0
$$

が成り立つ。等号ならば $X-D\simeq\mathbb B^n/\Gamma$ であり、$X$ はその一意なtoroidal compactificationとなる。各境界成分はAbel多様体の自由な有限群作用による商である。

### 球商からの必要条件（Theorem B）

$\Gamma\subset PU(n,1)$ をunipotent parabolic元のみをもつtorsion-free格子とし、$X$ を $\mathbb B^n/\Gamma$ の滑らかなtoroidal compactification、$D$ を境界とする。このとき

$$
2c_2(\Omega_X^1(\log D))-\frac{n}{n+1}c_1(\Omega_X^1(\log D))^2=0
$$

であり、自然なlog Higgs束は定理に記載されたbigかつnefなクラスに関してpolystableである。

## 証明の見取り図

まずMochizukiのtame harmonic bundle対応をlog Hodge束、さらにprincipal log Hodge束へ拡張する。Chern類等号とpolystabilityから $PU(n,1)$ を構造群とするprincipal variation of Hodge structuresを得て、そのperiod mapが局所双正則であることを示す。最後に境界近傍のモデル計量を構成して誘導計量の完備性を証明し、period mapを大域的双正則写像へ高める。

## 原論文との対応

- **Abstractページ:** [arXiv:2006.16178](https://arxiv.org/abs/2006.16178)
- **Introduction:** Section 0, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems A, B; Corollary C
- **論文構成の説明:** Section 0.3
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
