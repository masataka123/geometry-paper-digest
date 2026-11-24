---
layout: paper
title: The Kähler-Ricci soliton on bounded pseudoconvex domains
title_ja: 有界擬凸領域のKähler–Ricciソリトンの剛性
authors: Zehao Sha
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DG
arxiv_abstract: In this paper, we establish rigidity results for Kähler--Ricci solitons on bounded pseudoconvex domains in $\mathbb C^n$. We first show that if a complete Kähler metric has $C^1$ quasi-bounded geometry and negatively pinched Ricci curvature outside a compact set, then any soliton vector field whose metric dual is closed must vanish. In particular, such a soliton is Kähler--Einstein. We then prove that any Bergman Kähler--Ricci soliton of bounded domains is Kähler--Einstein. Combined with Huang--Xiao's resolution of Cheng's conjecture, this yields a soliton analogue of Cheng's conjecture. We also provide several model domains as examples.
topic: several-complex-variables
tags:
- kahler-ricci-flow-solitons
- kahler-einstein-metrics
- noncompact-kahler-geometry
- curvature
arxiv_id: 2412.03345v5
arxiv_url: https://arxiv.org/abs/2412.03345
arxiv_submitted: '2024-12-04'
arxiv_updated: '2026-11-20'
summary: 有界擬凸領域上の完備Kähler–Ricciソリトンについて、無限遠での負のRicci曲率と双対一形式の閉性からソリトンベクトル場の消滅を示す。滑らかな強擬凸領域ではBergman計量がソリトンなら領域は球と双正則である。
abstract_en: ''
summary_en: The asymptotic behavior of the Ricci tensor constrains the vector field generating a soliton. A separate argument for the intrinsic Bergman metric exploits invariance under automorphisms of the domain. In the smoothly bounded strictly pseudoconvex case the resulting Einstein condition identifies the domain.
abstract_ja: 非コンパクトなソリトンでは、ベクトル場の項が計量のEinstein性を妨げ得る。著者は曲率の漸近条件でこの項を制御する方法と、Bergman計量の自己同型不変性を使う方法を分け、後者では領域の複素構造も決定する。
abstract_source_url: https://arxiv.org/abs/2412.03345
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2412.03345v5](https://arxiv.org/abs/2412.03345)
- **著者:** Zehao Sha
- **初回投稿日:** 2024-12-04
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.CV（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricciソリトンでは、Einstein方程式にベクトル場が作る変形項が加わる。有界領域上でこの自由度が実際に残るかを調べる。

一つ目の結果は領域の外側に向かうときのRicci曲率の挙動を使う。二つ目はBergman計量を選び、計量が領域の正則自己同型で保たれることを使う。

滑らかな強擬凸境界を持つ場合、後者は計量の剛性に加えて領域が単位球に限られることまで与える。

## 背景と問題設定

Chengの予想の解決により、滑らかな有界強擬凸領域でBergman計量がKähler–Einsteinなら領域は球である。ここでの問題は仮定をソリトンまで弱めたときに同じ結論へ到達できるかである。

## 主結果

### 無限遠における曲率条件（Theorem A）

有界な $C^2$ 境界付き擬凸領域 $\Omega\subset\mathbb C^n$ に、$C^1$ 準有界幾何を持つ完備Kähler計量 $\omega$ を取る。あるコンパクト集合の外で
$$
-C\_2\omega\le\mathrm{Ric}(\omega)\le-C\_1\omega,\qquad C\_2\ge C\_1>0
$$
とする。ソリトンの実正則ベクトル場の計量双対が閉形式なら、そのベクトル場は零であり、計量はKähler–Einsteinとなる。

### Bergman計量の場合（Theorem B）

有界で滑らかな境界を持つ強擬凸領域のBergman計量がKähler–Ricciソリトンなら、その計量はKähler–Einsteinで、領域は単位球と双正則である。

## 証明の見取り図

第一の定理ではBochner公式とOmori–Yau最大値原理を用い、漸近的な曲率の負性からベクトル場を評価する。第二の定理ではRicci曲率の上界とスカラー曲率の下界でLie微分項を制御し、ソリトンの流れがBergman計量を保つことからEinstein性を得る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2412.03345)
- **Introduction:** [PDF](https://arxiv.org/pdf/2412.03345v5) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems A–B
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2412.03345v5
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
