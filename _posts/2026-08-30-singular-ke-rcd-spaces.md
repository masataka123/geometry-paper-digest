---
layout: paper
title: >-
  Singular Kähler-Einstein metrics and RCD spaces
title_ja: >-
  特異Kähler–Einstein計量とRCD空間
authors: >-
  Gábor Székelyhidi
arxiv_primary_category: "math.DG"
arxiv_categories:
  - "math.DG"
arxiv_abstract: >-
  We study Kähler-Einstein metrics on singular projective varieties. We show that under an approximation property with constant scalar curvature metrics, the metric completion of the smooth part is a non-collapsed RCD space, and is homeomorphic to the original variety.
topic: differential-geometry
tags:
  - singularities
  - kahler-einstein-metrics
  - csck-extremal-kahler-metrics
  - metric-limits
  - curvature
arxiv_id: "2408.10747v2"
arxiv_url: "https://arxiv.org/abs/2408.10747"
arxiv_submitted: "2024-08-20"
arxiv_updated: "2024-12-11"
summary: >-
  特異射影多様体上のKähler–Einstein計量について、滑らかなcscK計量による特定の近似があるとき、正則部分の距離完備化が非崩壊RCD空間となり元の多様体と同相であることを示す。さらに距離的特異集合と複素解析的特異集合の一致、およびHausdorff余次元4以上を得る。
abstract_en: >-
  We study Kähler-Einstein metrics on singular projective varieties. We show that under an approximation property with constant scalar curvature metrics, the metric completion of the smooth part is a non-collapsed RCD space, and is homeomorphic to the original variety.
summary_en: ""
abstract_ja: >-
  特異Kähler–Einstein空間の正則部分の距離完備化を調べる。解消上の定スカラー曲率Kähler計量による一様な近似条件の下で、完備化は非崩壊RCD空間となり、元の複素多様体と同相である。距離的特異集合は解析的特異集合と一致し、そのHausdorff余次元は少なくとも4である。相対反標準束がnefで自己同型群が離散的な場合には、必要なcscK近似も構成される。
abstract_source_url: "https://arxiv.org/abs/2408.10747"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- arXiv: [2408.10747v2](https://arxiv.org/abs/2408.10747)
- 著者: Gábor Székelyhidi
- 対象: Abstract と Introduction

## 要約

正規コンパクトKähler空間 $X$ 上の特異Kähler–Einstein計量 $\omega_{KE}$ は正則部分で
$$
\operatorname{Ric}(\omega_{KE})=\lambda\omega_{KE}
$$
を満たすが、距離完備化がRicci曲率下限をもつ滑らかな多様体の極限として得られるとは限らない。本論文は代わりに、解消上のcscK計量による近似を仮定する。

期待される結論は、$(X_{\rm reg},d_{KE})$ の完備化が測度 $\omega_{KE}^n$ とともに非崩壊 $\mathrm{RCD}(\lambda,2n)$ 空間となり、$X$ と同相になることである。論文は近似条件の下でこの予想を証明する。

## 主結果

### cscK近似の存在（Theorem 3）

$\omega_{KE}\in c_1(L)$、自己同型群が離散的で、射影的解消 $\pi:Y\to X$ において $-K_Y$ が $X$ 上相対nefなら、定義2の意味でcscK計量による近似が存在する。

### RCD構造（Theorem 4）

$(X,\omega_{KE})$ がcscK近似可能で $\omega_{KE}\in c_1(L)$ なら、距離完備化は非崩壊 $\mathrm{RCD}(\lambda,2n)$ 空間で $X$ と同相である。さらに距離的特異集合は $X\setminus X_{\rm reg}$ と一致し、Hausdorff余次元は少なくとも4である。

## 証明の見取り図

HondaのRCD特徴づけへ帰着し、Laplacianの固有関数のLipschitz評価を示す。近似cscK計量には一様Ricci下限がないため、heat flow上で正の時間から有効な弱い勾配評価を作り、heat kernelの一様評価を使って極限へ渡す。

同相性と特異集合の同定には、解析的特異集合を局所的に切り出す正則関数が有限消滅位数をもつこととthree-annulus lemmaを利用する。これによりほぼEuclideanな球内の零点集合を制御し、距離的正則集合と解析的正則集合を一致させる。

## 原論文との対応

近似条件はDefinition 2、その存在はTheorem 3、RCD性・同相性・特異集合の主張はTheorem 4に対応する。
