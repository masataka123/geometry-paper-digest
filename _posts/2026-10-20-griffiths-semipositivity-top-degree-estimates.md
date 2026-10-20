---
layout: paper
title: A characterization of Griffiths semipositivity by top-degree optimal $\bar \partial$-estimates
title_ja: 最高次数の最適L²評価によるGriffiths半正値性
authors: Shin-ichi Matsumura
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: We prove that a singular Hermitian metric $h$ on a vector bundle agrees almost everywhere with a Griffiths semipositive metric if its dual metric $h^*$ is locally integrable and the $\bar \partial$-equation admits solutions with optimal $L^2$-estimates for $(n,n)$-forms, where $n$ is the dimension of the base manifold. In particular, under this integrability assumption, Nakano semipositivity in the sense of optimal estimates implies Griffiths semipositivity.
topic: differential-geometry
tags:
- positivity
- vector-bundles-sheaves
- l2-methods
arxiv_id: 2610.25900v1
arxiv_url: https://arxiv.org/abs/2610.25900
arxiv_submitted: '2026-10-19'
arxiv_updated: '2026-10-19'
summary: 特異Hermitian計量の双対が局所可積分であるとき、(n,n)形式に対する最適L²評価から、ほとんど至る所で一致するGriffiths半正値計量の存在を示す。計量の半連続性を仮定せず、最適評価の意味でのNakano半正値性からGriffiths半正値性への含意を得る。
abstract_en: ''
summary_en: Optimal solution estimates offer a way to discuss bundle positivity when classical curvature is unavailable. This paper shows that estimates in top degree already determine a Griffiths-semipositive representative, provided the dual metric is locally integrable. It removes semicontinuity assumptions used in earlier approaches while retaining an almost-everywhere formulation of the conclusion.
abstract_ja: 滑らかでないHermitian計量では曲率による正値性の比較が難しい。本論文は、双対計量の局所可積分性を仮定し、最高次数の形式に対する最適な解評価だけからGriffiths半正値な代表計量を得る。結論は元の計量とのほとんど至る所での一致であり、任意の点での値までそのまま半正値になるという主張ではない。
abstract_source_url: https://arxiv.org/abs/2610.25900
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.25900v1](https://arxiv.org/abs/2610.25900)
- **著者:** Shin-ichi Matsumura
- **初回投稿日:** 2026-10-19
- **最終更新日:** 2026-10-19
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなHermitian計量ではNakano半正値性からGriffiths半正値性が直接従う。特異計量では曲率を適切に定義できないことがあり、同じ含意をそのまま使えない。このため、方程式の最適評価を使って定義した正値性が、Griffiths半正値性とどう結び付くかが問題となる。

本論文は、双対計量が局所可積分であるという仮定の下で、最高次数の$(n,n)$形式に対する最適$L^2$評価だけから、Griffiths半正値計量を得る。全ての次数での評価や$(n,1)$形式に対する評価を出発点に要求しない。

得られる計量は元の計量とほとんど至る所で一致する。上半連続性や下半連続性を仮定しない点が既存研究との違いであり、特異計量の点ごとの代表と可測な同値類を区別することが結論の読み方として重要である。

## 背景と問題設定

$X$を複素次元$n$の複素多様体、$E$を正則ベクトル束、$h$をその特異Hermitian計量とする。最適評価によるNakano半正値性は、おおまかには束値$(n,q)$形式の$\bar\partial$方程式が各$1\leq q\leq n$で最適な重み付き$L^2$評価を持つという条件である。滑らかな場合には通常の曲率による定義と一致する。

Griffiths半正値性には多重劣調和性による定式化があり、曲率を直接扱わずに意味を与えられる。しかし、特異計量で両者の含意を示すには別の議論が必要となる。Introductionは、先行研究が計量と双対計量の半連続性を使っていたことを説明している。

## 主結果

### 最高次数だけからの半正値性（Theorem 1.1）

双対計量$h^*$が局所可積分、すなわち任意の双対束の局所切断$u$について
$$
|u|\_{h^*}^2\in L^1\_{\mathrm{loc}}
$$
であるとする。$h$が論文のDefinition 2.1の最適$L^2$評価条件を$q=n$で満たせば、Griffiths半正値な特異Hermitian計量$\widehat h$が存在して
$$
\widehat h=h\quad\text{almost everywhere}
$$
となる。

Introductionは最適評価条件の詳細をDefinition 2.1に委ねているため、ここでは特定の重みやKähler形式だけに条件を弱めた定理として述べない。要点は、同定義の最高次数部分だけで結論に足りることである。

最適評価の意味でNakano半正値な計量はこの最高次数の条件を含む。そのため、双対の局所可積分性の下で、ほとんど至る所の同一視を通じてGriffiths半正値性が従う。またIntroductionでは、Griffiths半正値な特異計量から最高次数の最適評価へ進む向きは局所畳み込み近似から得られると説明される。

## 証明の見取り図

Introductionが示す方針は、先行研究の正則化の技法を最高次数の評価に適用することである。ただし$(n,1)$形式の最適評価を必要とする$E(h)$の連接性や、次元に関する帰納法は使えない。これらを前提としない議論を構成する点が課題となる。後続節の計算の詳細はここでは扱わない。

応用上の動機は随伴層の順像や高次順像のNakano正値性理論である。Introductionでは既知の最適評価と組み合わせることで、随伴束の順像上の標準$L^2$計量のGriffiths半正値性を、ほとんど至る所の一致を通して回復すると述べられる。全ての高次順像について新しい半正値性定理を証明したという意味ではない。

## 原論文との対応

- **Abstractページ:** [A characterization of Griffiths semipositivity by top-degree optimal $\bar \partial$-estimates](https://arxiv.org/abs/2610.25900)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.25900v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.25900v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
