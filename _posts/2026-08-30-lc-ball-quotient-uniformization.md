---
layout: paper
title: >-
  Uniformization of varieties with log-canonical singularities
title_ja: >-
  対数的標準特異点をもつ多様体の一意化
authors: >-
  Benoit Cadorel
arxiv_primary_category: "math.AG"
arxiv_categories:
  - "math.AG"
  - "math.CV"
  - "math.DG"
arxiv_abstract: >-
  We study the problem of uniformizing quasi-projective varieties with logcanonical compactifications. More precisely, given a complex projective variety X with log-canonical singularities, we give criteria for X to be isomorphic to a Baily-Borel-Mok compactification of a ball quotient, asking on the one hand the equality case in a suitable Miyaoka-Yau (MY) inequality, and on the other hand some adequate assumptions on the singularities. We also give as a result of independent interest that log-resolutions of log-canonical singularities have their fibers connected by chains of special varieties in the sense of Campana; this is used in the proof to control the behaviour of the period map near the exceptional divisors of such resolutions. We also show that it is necessary to assume that the singularities are at least logcanonical: some examples of Deligne-Mostow-Deraux can be manipulated to provide examples of singular varieties satisfying the equality case in MY, while not being isomorphic to such Baily-Borel-Mok compactifications.
topic: algebraic-geometry
tags:
  - singularities
  - uniformization
  - chern-classes
  - higgs-nonabelian-hodge
arxiv_id: "2408.17120v1"
arxiv_url: "https://arxiv.org/abs/2408.17120"
arxiv_submitted: "2024-08-30"
arxiv_updated: "2024-08-30"
summary: >-
  対数的標準特異点をもつ射影多様体が複素球商のBaily–Borel–Mokコンパクト化となるためのMiyaoka–Yau等号条件を研究する。孤立特異点とdiscrepancy $-1$ の対数的解消を仮定すると一意化が成立し、対数的標準性を外せば等号だけでは不十分であることも示す。
abstract_en: ""
summary_en: >-
  This work gives a ball-quotient uniformization criterion for projective varieties with log-canonical singularities. The criterion combines equality in a singular Miyaoka–Yau inequality with precise assumptions on isolated singularities and their discrepancies. A structural theorem about fibers of log resolutions controls limiting period maps, while examples show that dropping log canonicity invalidates the criterion.
abstract_ja: >-
  対数的標準特異点をもつ射影多様体について、適切なMiyaoka–Yau不等式の等号と特異点条件から複素球商による一意化を導く。孤立特異点で、すべての例外因子のdiscrepancyが $-1$ となる対数的解消がある場合、滑らかな部分は球商となり元の多様体はそのBaily–Borel–Mokコンパクト化となる。証明の独立な要素として、対数的標準特異点の解消ファイバーがCampanaのspecial varietyの鎖で連結されることを示す。
abstract_source_url: "https://arxiv.org/abs/2408.17120"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- arXiv: [2408.17120v1](https://arxiv.org/abs/2408.17120)
- 著者: Benoît Cadorel
- 対象: Abstract と Introduction

## 要約

有限体積複素球商は、境界が有限個の点からなるBaily–Borel–Mokコンパクト化をもつ。本論文は逆に、特異射影多様体をChern類の等号条件から球商コンパクト化として認識する問題を扱う。

次元 $n\geq3$、対数的標準かつ余次元2で滑らか、$K_{X^*}$ がampleなら、滑らかな部分 $X$ の接束のChern類について
$$
\bigl(2(n+1)c_2(T_X)-n c_1(T_X)^2\bigr)\cdot K_{X^*}^{n-2}\geq0
$$
が成り立つ。等号から得るperiod mapが実際に球への一意化写像となるには、特異点近傍での挙動の制御が必要である。

## 主結果

### Miyaoka–Yau不等式（Theorem 0 = Theorem 5）

上記の仮定の下で不等式が成立し、等号ならエタール写像 $\widetilde X\to\mathbb B^n$ が存在する。

### 一意化定理（Theorem 2 = Theorem 11）

$X^*$ が孤立した対数的標準特異点とampleな標準因子をもち、全例外因子のdiscrepancyが $-1$ となる対数的解消が存在し、上のMiyaoka–Yau等号が成立するとする。このとき滑らかな部分 $X$ は球商であり、$X^*$ はそのBaily–Borel–Mokコンパクト化である。

### 解消ファイバー（Theorem 3）

対数的標準複素解析空間の対数的解消の各ファイバーは、Campanaの意味でspecialな多様体の鎖で連結される。追加の正規交差条件とdiscrepancy $-1$ の仮定の下では、ファイバーの滑らかな局所閉stratum自体がspecialである。

## 証明の見取り図

Higgs束の安定性からMiyaoka–Yau不等式とperiod mapを得る。Schmidのnilpotent orbit theoremの複素variation of Hodge structure版を用いて例外因子のstratum上に極限period mapを作る。解消ファイバーのspecial性と、special準射影多様体上のpolarized complex variation of Hodge structureのperiod mapが定数になることを組み合わせ、極限像を球の境界へ押し出す。

## 原論文との対応

不等式はTheorem 0、非対数的標準の反例はTheorem 1、一意化はTheorem 2、解消ファイバーの構造はTheorem 3に対応する。
