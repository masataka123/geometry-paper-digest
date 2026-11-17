---
layout: paper
title: On the effective Yau--Tian--Donaldson conjecture for projective bundles
title_ja: 射影束のextremal計量をmoment単体の安定性で判定する
authors: Simon Jubert, Chenxi Yin
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: Consider the projectivization $\mathbb{P}(E)$ of a holomorphic vector bundle $E$ over a smooth curve, equipped with a fixed Kähler class $[ω]$. Our first main result establishes that the existence of an extremal Kähler metric in $[ω]$ is equivalent to the weighted stability of a moment polytope $Δ$ with respect to explicit weight functions depending on the topological data of $\mathbb{P}(E)$. We then introduce a class of test configurations, which we call compatible test configurations. These are constructed by gluing horospherical test configurations of the fibers, arising from convex functions on $Δ$ via Delcroix's construction, to the principal bundle associated with $\mathbb{P}(E)$. Our second main result shows that the weighted stability of $Δ$ naturally arises when computing the relative uniform K-stability of $[ω]$ with respect to compatible test configurations.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- vector-bundles-sheaves
arxiv_id: 2602.13133v2
arxiv_url: https://arxiv.org/abs/2602.13133
arxiv_submitted: '2026-02-13'
arxiv_updated: '2026-11-15'
summary: 曲線上の射影束のextremal Kähler計量の存在を、moment単体の明示的な重み付き一様K安定性で特徴づける。ファイバーの退化を貼り合わせたcompatible test configurationに限って安定性を調べるための幾何学的根拠も与える。
abstract_en: ''
summary_en: For projective bundles over curves, the paper makes the extremal-metric question accessible through a simplex and topological weight data. It treats bundles split into projectively flat summands, the decomposition relevant to the stability problem. A restricted family of degenerations is built from the fibers using horospherical symmetries. Comparing the resulting stability condition with weighted energy coercivity yields a criterion for metric existence.
abstract_ja: 正則ベクトル束の射影化上の固定Kähler類について、著者らはextremal Kähler計量の存在とmoment多面体の重み付き一様K安定性を結び付ける。重みは射影束の位相的データで決まる。さらにcompatible test configurationという特定の退化の族を構成し、偏極された場合には、それらに関する相対的一様K安定性が同じ多面体の安定性と同値になることを示す。
abstract_source_url: https://arxiv.org/abs/2602.13133
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.13133v2](https://arxiv.org/abs/2602.13133)
- **著者:** Simon Jubert, Chenxi Yin
- **初回投稿日:** 2026-02-13
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準計量の存在とK安定性の対応が分かっても、すべての退化を調べる安定性条件を具体的に判定することは難しい。本論文は曲線上の射影束の対称性を使い、判定対象をmoment単体上の重み付き安定性へ移す。

主結果は、射影平坦束の直和を射影化した多様体上で、固定Kähler類にextremal計量が存在することと、対応する単体の一様な重み付きK安定性が同値であるというものである。直和成分が2個の場合の常微分方程式への帰着にとどまらず、任意個の成分を扱う。

さらに、ファイバーのtoric・horosphericalな退化を底曲線上で貼り合わせ、compatible test configurationを作る。これにより、多面体の安定性が射影束自身の退化に対する条件として理解される。

## 背景と問題設定

滑らかな曲線 $C$ 上で、射影平坦束 $E\_j$ の直和から

$$
Y=\mathbb P\left(\bigoplus\_{j=0}^{\ell}E\_j\right)\longrightarrow C
$$

を作る。Introductionは、相対的一様K安定性がこの種の分解を強制する既知の結果を説明した上で、この形を研究する。固定類 $[\omega\_Y]$ はファイバー上でFubini–Study類へ制限されるよう正規化する。

直和分解は $\ell$ 次元torus $T$ の作用を与え、moment像 $\Delta$ は $\ell$ 次元単体となる。$p,\bar p,\bar w$ は位相的データで決まる重みである。Introductionにはその完全な公式がないため、ここで係数を補って定義しない。

## 主結果

### 計量存在の多面体判定（Theorem A）

次の同値が成り立つ。

$$
[\omega\_Y]\text{ にextremal Kähler計量が存在}
\quad\Longleftrightarrow\quad
\Delta\text{ が }(p\bar p,\bar w)\text{-一様K安定}.
$$

さらに、この類の任意のextremal計量はcompatibleである。compatible計量とは、単体上のsymplectic potentialからファイバーの計量を作り、束の構造と整合する形で全空間へ持ち上げる構成に属する計量である。存在から安定性への方向は先行研究に基づき、本論文は逆方向を確立する。

### compatibleな退化による判定（Theorem B）

$[\omega\_Y]$ が正則線束で偏極される場合、compatible test configurationに関する $T$-相対的一様K安定性と、$\Delta$ の $(p\bar p,\bar w)$-一様K安定性は同値である。

Theorem Aと合わせると、この特定の退化の族がextremal計量の存在を検出する。ここで「compatible」の限定を外して、任意の設定のtest configurationについて新たな計算公式を得たかのようには解釈しない。IntroductionのCorollary Aは、偏極類 $2\pi c\_1(L\_Y)$ の計量存在、compatibleな退化上の相対的K安定性、多面体の重み付き一様安定性を対応させる。

## 証明の見取り図

単体の安定性から重み付きMabuchiエネルギーのcoercivityを導く。ただし重み $p$ が境界で消えるため、そのまま既存の存在定理は使えない。そこで、ファイバーの射影空間上のcompatible計量に制限したエネルギーへ評価を移し、$\bar p>0$ を使って重み付きcscK計量を構成する。全torus不変計量空間でのcoercivityを仮定しているわけではない。

退化の側では、単体上の凸関数からファイバーのcompatibleな退化を作り、そのhorospherical対称性によって束の上へ貼り合わせる。作用のrigid・semisimpleな構造によりDonaldson–Futaki不変量とreduced non-Archimedean J汎関数を計算し、二つの安定性を比較する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2602.13133)
- **Introduction:** [PDF](https://arxiv.org/pdf/2602.13133v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems A–B、Corollary A
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2602.13133v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
