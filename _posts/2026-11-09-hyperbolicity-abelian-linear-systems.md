---
layout: paper
title: Kobayashi hyperbolicity of complete linear systems on abelian varieties
title_ja: アーベル多様体の完備線形系の小林双曲性
authors: Federico Caucci
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: We provide a geometric condition ensuring that a very general element of a complete linear system on an abelian variety is Kobayashi hyperbolic. This can be seen as the counterpart of some classical results on very general hypersurfaces in projective spaces. Some related conjectures are also given, and involve a natural constant, the so-called basepoint-freeness threshold, associated with any polarized abelian variety $(A, L)$ detecting information about the hyperbolicity of $|L|$.
topic: algebraic-geometry
tags:
- hyperbolicity
- positivity
arxiv_id: 2512.10082v3
arxiv_url: https://arxiv.org/abs/2512.10082
arxiv_submitted: '2025-12-10'
arxiv_updated: '2026-11-05'
summary: 次元gの偏極アーベル多様体で、豊富な直線束のg−1倍の線形系が小林双曲的になることを、主偏極楕円曲線因子という唯一の例外を除いて示す。基点自由閾値と部分アーベル多様体上の交点数による判定の予想も論じる。
abstract_en: ''
summary_en: Caucci refines the degree bound for hyperbolic divisors in polarized abelian varieties by isolating a geometric obstruction. A principally polarized elliptic factor is precisely the exception to the improved uniform bound. The paper also develops a numerical perspective using the basepoint-freeness threshold. Some of the proposed sharper bounds remain conjectural, and are separated from the established results.
abstract_ja: 複素アーベル多様体Aの次元をg≥3、Lを豊富な直線束とすると、主偏極楕円曲線を偏極の直積因子として持つ場合を除き、m≥g−1で|mL|の非常に一般の元は小林双曲的になる。例外の場合はm≥gが必要である。非分解な主偏極アーベル多様体や曲面の場合の帰結を示し、基点自由閾値と部分アーベル多様体の次数に基づく予想を提示する。一般の偏極アーベル多様体については切断数による十分条件を得る。
abstract_source_url: https://arxiv.org/abs/2512.10082
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2512.10082v3](https://arxiv.org/abs/2512.10082)
- **著者:** Federico Caucci
- **初回投稿日:** 2025-12-10
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

アーベル多様体自体には非定数整曲線が存在するが、その中の十分正値な因子は双曲的になり得る。本論文は、豊富な直線束を何倍すれば線形系の非常に一般の元が小林双曲的になるかを、偏極の直積分解に着目して調べる。

次元$g\geq3$では一般的な上界$g$を$g-1$へ改善でき、改善を妨げるのは主偏極楕円曲線因子の存在である。単に基点因子がないという従来の条件を使うだけでなく、例外となる幾何を特定する点が主結果である。

もう一つの方向は、部分アーベル多様体上の交点数から双曲性を判定することである。ここでは証明された十分条件と予想を分ける必要があり、一般の偏極に対する強い数値条件はなお予想として述べられる。

## 背景と問題設定

線形系が小林双曲的であるとは、その非常に一般の元が小林双曲的であることをいう。すべての元についての主張ではない。アーベル多様体の閉部分多様体では代数的双曲性と小林双曲性が同値であり、著者は層の生成性から得られる代数的判定を用いる。

IntroductionのTheorem 1.1は先行研究の結果で、$m\geq g$なら$|mL|$が双曲的となり、$|L|$に基点因子がなければ$m\geq g-1$で足りるとする。一方、主偏極楕円曲線$(E,\Theta)$を用いた分解

$$
(A,L)\simeq(E,\Theta)\times(A',L')
$$

があると、$m\leq g-1$では$|mL|$のどの元も双曲的でない。

## 主結果

### 主定理：例外の幾何的特定（Theorem A）

$A$が次元$g\geq3$の複素アーベル多様体、$L$が豊富なら、上記の主偏極楕円曲線因子を持たない限り、

$$
m\geq g-1\quad\Longrightarrow\quad |mL|\text{ は小林双曲的}
$$

となる。例外の直積の場合は$m\geq g$で足り、かつその下界が必要である。

### 主偏極と曲面の帰結（Special Case B、Proposition C）

非分解な主偏極アーベル多様体$(A,\Theta)$で$g\geq3$なら、$m\geq g-1$で$|m\Theta|$は小林双曲的である。非分解性はtheta因子の既約性と同値である。

$g=2$では、豊富な$L$に対して$m\geq2$で$|mL|$は小林双曲的となる。$L$自体が基点自由なら$|L|$で既に成り立つ。

### 一般の偏極に対する十分条件（Proposition E）

次元$g\geq2$の一般の偏極アーベル多様体では、

$$
h^0(A,L)\geq\frac{(2g(g-1))^g}{g!}
$$

なら$|L|$は小林双曲的である。これは基点自由閾値の半連続性と既知の上界から得る結果である。

### より鋭い数値判定の予想（Conjectures D、F）

Conjecture Dは、すべての非零部分アーベル多様体$B\subseteq A$について

$$
(L^{\dim B}\cdot B)>((g-1)\dim B)^{\dim B}
$$

なら$|L|$が小林双曲的になると予想する。Introductionは$g\leq3$で成立することを述べるが、任意次元で証明されたとはしていない。Conjecture Fは一般の偏極に対する条件を

$$
h^0(A,L)>\frac{(g(g-1))^g}{g!}
$$

へ改善する予想であり、$g\leq6$では成立するとされる。

## 証明の見取り図

Theorem Aでは、PareschiおよびAlvarado–Pareschiによる連接層の生成性の結果を、先行研究の線形系の双曲性判定と組み合わせる。数値的な方向では、偏極の正値性を測るbasepoint-freeness thresholdが生成性と双曲性の橋渡しをする。Introductionはこの仕組みと後続節への配置を説明しており、ここではその後の証明を再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2512.10082)
- **Introduction:** [PDF](https://arxiv.org/pdf/2512.10082v3) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem A; Special Case B; Proposition C; Proposition E; Conjectures D, F
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2512.10082v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
