---
layout: paper
title: "On the uniqueness of Poincaré type cscK metrics"
title_ja: "Poincaré型cscK計量の一意性"
authors: "Yulun Xu, Kai Zheng"
arxiv_primary_category: "math.DG"
arxiv_categories:
- math.DG
- math.AP
arxiv_abstract: >-
  Let $X$ be a compact Kähler manifold with a divisor $D$ which may have simple normal crossings. We prove that the $K$-energy is convex on the space of Poincaré type Kähler metrics. Then, we prove that the Poincaré type constant scalar curvature Kähler metric is unique up to an automorphism of $X$ preserving $D$.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- noncompact-kahler-geometry
arxiv_id: "2410.14130v3"
arxiv_url: "https://arxiv.org/abs/2410.14130"
arxiv_submitted: "2024-10-18"
arxiv_updated: "2026-09-21"
summary: >-
  単純正規交差を許す因子の補集合上で、Poincaré型Kähler計量のK-energyが測地線に沿って凸であることを示す。これを非コンパクト端でのLichnerowicz方程式の解析と組み合わせ、同じKähler類のPoincaré型cscK計量が因子を保つ自己同型を除いて一意であることを証明する。
abstract_en: >-
  Let $X$ be a compact Kähler manifold with a divisor $D$ which may have simple normal crossings. We prove that the $K$-energy is convex on the space of Poincaré type Kähler metrics. Then, we prove that the Poincaré type constant scalar curvature Kähler metric is unique up to an automorphism of $X$ preserving $D$.
summary_en: ''
abstract_ja: >-
  単純正規交差を許す因子 $D$ をもつコンパクトKähler多様体 $X$ に対し、Poincaré型Kähler計量の空間上でK-energyが凸であることを証明する。その帰結として、Poincaré型定スカラー曲率Kähler計量は $D$ を保つ $X$ の自己同型を除いて一意である。
abstract_source_url: "https://arxiv.org/abs/2410.14130"
license_name: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2410.14130v3](https://arxiv.org/abs/2410.14130)
- **著者:** Yulun Xu, Kai Zheng
- **初回投稿日:** 2024-10-18
- **最終更新日:** 2026-09-21
- **主分類・副分類:** math.DG, math.AP
- **ライセンス:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

コンパクトKähler多様体のcscK計量では、MabuchiのK-energyの測地線凸性が一意性の中心にある。本論文は、単純正規交差因子 $D$ の補集合 $M=X\setminus D$ に入る完備非コンパクトなPoincaré型計量へ、この議論を拡張する。

第一の主結果は、Poincaré型K-energyがPoincaré型測地線の空間上で凸になることである。第二の主結果は、固定した類 $\Omega$ に属する二つのPoincaré型cscK計量が、$D$ を保つ自己同型の単位成分の作用で一致することである。

従来の一意性結果に課されていた $K[D]$ の豊富性などを仮定しない点が重要である。因子近傍の非コンパクト性により、コンパクトな場合のBergman近似や通常のFredholm論をそのまま使えないため、因子から離れた近似と重み付きSobolev空間を導入する。

## 背景と問題設定

Poincaré型計量は、局所座標で $D=\{z_1\cdots z_k=0\}$ と書けるとき、モデル計量

$$
\omega_0=\sum_{j=1}^k\frac{\sqrt{-1}\,2dz_j\wedge d\bar z_j}{|z_j|^2\log^2(|z_j|^2)}+\sum_{j=k+1}^n\sqrt{-1}\,dz_j\wedge d\bar z_j
$$

と準等長である。端がcusp型となるため、滑らかなコンパクト多様体上のcscK一意性論には現れない境界寄与と関数空間の問題が生じる。

## 主結果

### K-energyの凸性（Theorem 1.1）

$D$ が単純正規交差を許す因子なら、Poincaré型K-energyはPoincaré型測地線の空間 $\widetilde{\mathcal P\mathcal M}_\Omega$ 上で凸である。

### cscK計量の一意性（Theorem 1.2）

同じ固定類 $\Omega$ に属するPoincaré型cscK計量 $\omega_1,\omega_2$ に対し、ある $g\in\operatorname{Aut}_0^D(X)$ が存在して

$$
\omega_1=g^*\omega_2
$$

が成り立つ。すなわち一意性は因子を保つ正則自己同型を除いて成立する。

## 証明の見取り図

K-energyの複素Hessianをカレントとして扱い、Bergman近似を $D$ から離れた局所領域だけで行う。cut-off関数と部分積分によりカレントが $D$ 上に質量をもたないことを示し、劣調和性と連続性から凸性を得る。一意性では、完備非コンパクト空間上のLichnerowicz方程式を重み付きSobolev空間のFredholm代替で解き、凸性の等号条件を自己同型へ結び付ける。

## 原論文との対応

- **Abstractページ:** [arXiv:2410.14130](https://arxiv.org/abs/2410.14130)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **確認したarXivバージョン:** 2410.14130v3
- **確認したライセンス:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
- **source_scope:** Abstract and Introduction
