---
layout: paper
title: The Streets--Tian conjecture on compact homogeneous quotients
title_ja: コンパクト等質商におけるStreets–Tian予想
authors: Kexiang Cao, Shuwen Chen
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: A Hermitian-symplectic metric is a Hermitian metric whose K\"ahler form is given by the $(1,1)$-part of a closed $2$-form. Streets-Tian Conjecture states that a compact complex manifold admitting a Hermitian-symplectic metric must be K\"ahlerian (i.e., admitting a K\"ahler metric). We study Hermitian-symplectic metrics on homogeneous complex manifolds with compact isotropy, and on their compact discrete quotients. If the transitive group is connected and unimodular, we show that an invariant Hermitian-symplectic form gives an invariant K\"ahler metric, with no lattice assumption. By averaging, the same conclusion holds for compact quotients, even if the initial metric has no invariant lift. The proof uses the top exterior power of a Hermitian-symplectic form to bound the volume functional on an invariant Aeppli slice. Applying this bound to midpoint metrics gives a uniform trace estimate. From this, volume maximization produces a balanced metric in the slice, which is also
  pluriclosed and hence K\"ahler. We also describe the resulting K\"ahler representative and give examples showing the role of the closed lift.
topic: differential-geometry
tags:
- symplectic-contact-geometry
- positivity
arxiv_id: 2610.25229v1
arxiv_url: https://arxiv.org/abs/2610.25229
arxiv_submitted: '2026-10-18'
arxiv_updated: '2026-10-18'
summary: コンパクト等方部分群を持つ等質複素多様体とそのコンパクト離散商について、Hermitian-symplectic構造からKähler計量の存在を導く。連結unimodular群の場合は格子の存在を要求せず、不変Aeppli slice内の一意なbalanced計量を構成する。
abstract_en: ''
summary_en: A symplectic form taming a complex structure need not itself be a Kähler form. The authors address the existence of a Kähler replacement on homogeneous spaces with compact isotropy. Their invariant theorem requires unimodularity but not a lattice or a compact ambient space. Averaging then covers compact discrete quotients even when the initial Hermitian-symplectic metric is not invariant.
abstract_ja: 連結unimodular実Lie群Gとコンパクト部分群Kに対し、G/K上の不変Hermitian-symplectic形式が不変Kähler計量を与えることを示す。さらに自由・固有不連続・余コンパクトな離散群作用による商では、当初の計量が不変に持ち上がることを仮定せず同じ存在結論を得る。閉じた実2形式を用いた体積上限と中点でのtrace評価から、balancedかつpluriclosedな代表を得ることが主な仕組みである。
abstract_source_url: https://arxiv.org/abs/2610.25229
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.25229v1](https://arxiv.org/abs/2610.25229)
- **著者:** Kexiang Cao, Shuwen Chen
- **初回投稿日:** 2026-10-18
- **最終更新日:** 2026-10-18
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素構造をtameする閉じた実2形式が存在すれば、その複素多様体にはKähler計量が存在するのか。これがコンパクト複素多様体に対するStreets–Tian予想である。出発点のHermitian基本形式は閉じているとは限らず、別のKähler計量を作ることが課題となる。

本論文は、コンパクトな等方部分群を持つ等質複素多様体とそのコンパクト離散商に対して肯定的な結果を述べる。不変な設定では、作用する実Lie群が連結かつunimodularであればよく、格子や空間自体のコンパクト性を仮定しない。

コンパクト商では平均化により不変データへ帰着できるため、最初のHermitian-symplectic計量に不変性を要求しない。特定の可解性や冪零性に依存する従来のLie群商の結果を越える一方、任意のコンパクト複素多様体についての予想全体を扱うものではない。

## 背景と問題設定

実2形式$\Omega$が

$$
d\Omega=0,\qquad\Omega^{1,1}=\omega>0
$$

を満たすとき、$\omega$を基本形式とする計量はHermitian-symplecticである。$\Omega=\omega+\alpha+\overline\alpha$、$\alpha$は$(2,0)$形式、と分解できる。

このとき$\partial\bar\partial\omega=0$、すなわちpluriclosed性が従う。さらに同じ計量がbalanced、つまり$d\omega^{n-1}=0$ならKählerである。別々の計量としてbalanced計量とpluriclosed計量が存在するだけでは足りない。

連結群$G$のunimodular性は、Lie代数についてすべての$x$で$\operatorname{tr}(\operatorname{ad}\_x)=0$となる条件に対応する。これは不変微分形式の複体における部分積分の役割を担う。

## 主結果

### 不変Kähler計量の存在と一意な代表（Theorem 1）

$G$を連結unimodular実Lie群、$K\subset G$をコンパクト部分群とし、複素次元$n\ge2$の$X=G/K$が$G$不変な可積分複素構造を持つとする。$G$不変Hermitian-symplectic形式$\Omega$があれば、$G$不変Kähler計量が存在する。

さらに$\omega=\Omega^{1,1}$に対し

$$
\mathcal S(\omega)=\left\lbrace \omega+(d\xi)^{1,1}>0\quad \middle|\quad \xi\in\Omega^1\_{\mathbb R}(X)^G\right\rbrace
$$

はちょうど一つのbalanced計量を含み、その計量はKählerである。一意性はこの不変slice内のbalanced代表についての主張であり、$X$上のすべてのKähler計量の一意性ではない。

### コンパクト離散商への適用（Corollary 2）

連結$G$、コンパクト$K$、不変可積分複素構造を持つ$X=G/K$を考える。離散群$\Gamma\subset G$が左移動で自由・固有不連続・余コンパクトに作用するとき、$M=\Gamma\backslash G/K$にHermitian-symplectic計量が存在すれば、$X$への持ち上げが$G$不変となるKähler計量が存在する。

この場合、商のコンパクト性からunimodular性を得て、平均化により主定理を適用する。商上の最初の計量自体が不変であるという追加条件はない。

### Lie代数への帰結（Corollary 3）

実次元$2n$、$n\ge2$のunimodular Lie代数に可積分複素構造があり、閉じたtaming形式が存在すれば、正の実$(1,1)$形式$\widetilde\omega$で$d\_{\mathfrak g}\widetilde\omega=0$となるものが存在する。可解性・冪零性・特別なイデアル・格子は仮定しない。

## 証明の見取り図

Introductionでは、閉じたliftの最高外積を用いて、不変Aeppli slice上のHermitian体積汎関数を上から抑える。行列式の上限だけでは計量の制御が足りないが、固定した正の元との中点にもこの評価を適用することでtraceの上限を得る。

この制御によって体積最大化からbalancedな臨界点を作る。同じsliceの計量はpluriclosedでもあるため、得られた代表がKählerとなる。既知の「臨界点があればbalanced」という機構に対し、Hermitian-symplectic形式から臨界点の存在を導く部分が中心である。

## 原論文との対応

- **Abstractページ:** [The Streets--Tian conjecture on compact homogeneous quotients](https://arxiv.org/abs/2610.25229)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.25229v1) — Section 1, pp. 1–4（Section 2直前まで）。
- **Introduction中で言及された主要結果:** Theorem 1、Corollaries 2, 3。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.25229v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
