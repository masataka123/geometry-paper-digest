---
layout: paper
title: "Chern-Ricci flow on Kato surfaces"
title_ja: "Kato曲面上のChern–Ricci流"
authors: "Daniele Angella, Mauricio Corrêa"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  Let $S$ be a Kato surface and $D$ its maximal reduced divisor of rational curves. On $S\setminus D$ we construct Hermitian metrics which are flat along the leaves of the canonical foliation and study their evolution under the Chern-Ricci flow. For Enoki surfaces, we construct an immortal normalised solution which, on every compact sublevel of the natural exhaustion, converges in the Gromov-Hausdorff sense to the elliptic base endowed with an explicit flat metric. For Kato surfaces of intermediate type, the affine Green model and its finite-index extension give, under the assumption $0<μ<2$, an explicit normalised solution which, on every compact Green block, collapses in the Gromov-Hausdorff sense to a circle. In the Enoki case the limiting area is $2πb_2(S)$; in the intermediate case the length of the limiting circle is determined by the Green and leafwise monodromies.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - metric-limits
  - foliations
arxiv_id: "2609.18579v1"
arxiv_url: "https://arxiv.org/abs/2609.18579"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  Kato曲面から最大有理曲線因子を除いた開曲面上で、標準葉層に沿って平坦なHermitian計量と正規化Chern–Ricci流の明示解を構成する。Enoki曲面では楕円曲線へ、中間型では $0<\mu<2$ の下で円へGromov–Hausdorff収束し、極限量を曲面の位相量とmonodromyで記述する。
abstract_en: >-
  Let $S$ be a Kato surface and $D$ its maximal reduced divisor of rational curves. On $S\setminus D$ we construct Hermitian metrics which are flat along the leaves of the canonical foliation and study their evolution under the Chern-Ricci flow. For Enoki surfaces, we construct an immortal normalised solution which, on every compact sublevel of the natural exhaustion, converges in the Gromov-Hausdorff sense to the elliptic base endowed with an explicit flat metric. For Kato surfaces of intermediate type, the affine Green model and its finite-index extension give, under the assumption $0<μ<2$, an explicit normalised solution which, on every compact Green block, collapses in the Gromov-Hausdorff sense to a circle. In the Enoki case the limiting area is $2πb_2(S)$; in the intermediate case the length of the limiting circle is determined by the Green and leafwise monodromies.
summary_en: ""
abstract_ja: >-
  Kato曲面 $S$ とその最大被約有理曲線因子 $D$ に対し、$S\setminus D$ 上で標準葉層の葉に沿って平坦なHermitian計量を構成し、そのChern–Ricci流による発展を調べる。Enoki曲面では正規化された永久解が自然なexhaustionの各コンパクト部分上で、明示的平坦計量を備えた楕円曲線へGromov–Hausdorff収束する。中間型Kato曲面では $0<\mu<2$ の仮定の下、解は円へ崩壊する。前者の極限面積は $2\pi b_2(S)$ であり、後者の極限円周長はGreen方向と葉方向のmonodromyから定まる。
abstract_source_url: "https://arxiv.org/abs/2609.18579"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18579](https://arxiv.org/abs/2609.18579)
- **著者:** Daniele Angella, Mauricio Corrêa
- **初回投稿日:** 2026年9月16日
- **最終更新日:** 2026年9月16日
- **主分類・副分類:** math.DG（主）, math.CV（副）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Kato曲面は、分類が未完であるclass VII複素曲面の重要な一群である。最大被約有理曲線因子を $D$ とすると、開曲面 $A=S\setminus D$ には標準的な正則葉層があり、本論文はその葉に沿って平坦なHermitian計量を構成する。

その計量から出発する正規化Chern–Ricci流は、葉方向には相似的に崩壊し、横断方向には明示的な低次元極限へ収束する。Enoki曲面では極限は楕円曲線であり、その面積は $2\pi b_2(S)$ となる。

中間型Kato曲面では、Green multiplier $k$ と葉方向monodromy $\lambda$ から

$$
\mu=-\frac{2\log|\lambda|}{\log k}
$$

を定める。$0<\mu<2$ の場合、Green exhaustionの各コンパクト部分上で極限は平坦な円となり、その長さは $k$ と $\lambda$ によって決まる。

## 背景と問題設定

class VII曲面はKodaira次元 $-\infty$、第一Betti数 $b_1=1$ をもつ。$b_2=0$ の場合にはHopf曲面とInoue曲面が知られているが、$b_2>0$ の一般分類はGlobal Spherical Shell予想と結び付いている。Chern–Ricci流の極限挙動からglobal spherical shellを回収しようとする構想があり、Kato曲面上の流を具体的に理解することがその一段階となる。

## 主結果

### 極限幾何（Theorem 1）

Enoki曲面では、$A$ 上の正規化解が自然なコンパクトexhaustionに沿って楕円曲線

$$
E=\mathbb C^*/\langle z\mapsto\alpha z\rangle
$$

へGromov–Hausdorff収束する。極限計量は

$$
g_{\infty,E}=-\frac{n}{2\log|\alpha|}g_E,
\qquad \operatorname{Vol}(E,g_{\infty,E})=2\pi n=2\pi b_2(S)
$$

である。

中間型で $0<\mu<2$ なら、極限はGreen円

$$
S_G^1=\mathbb R/\left(\frac12\log k\right)\mathbb Z
$$

となり、平坦計量は $g_G=2(2-\mu)d\rho\otimes d\rho$ で与えられる。IntroductionはInoue–Hirzebruch型への拡張を未解決の問いとして残す。

## 証明の見取り図

Enoki型と中間型を分け、それぞれ標準葉層に適合するcoframeからHermitian計量を明示的に作る。中間型ではaffine Green normal formとその有限指数拡張を利用し、Green方向と葉方向のmonodromyを計量係数へ組み込む。得られた解について葉方向の相似崩壊と横断方向の収束を直接追跡し、各コンパクトexhaustion上のGromov–Hausdorff極限を同定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18579](https://arxiv.org/abs/2609.18579)
- **Introduction:** “Introduction and motivation”, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1
- **論文構成の説明:** pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
