---
layout: paper
title: "The curvature estimation of the complete K\"ahler-Einstein metrics on the disk bundles"
title_ja: "円板束上の完備Kähler--Einstein計量の曲率評価"
authors: "Yihong Hao, Mingming Chen, An Wang, Ben Zhang"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  In this paper, we compute the holomorphic sectional curvature and Riemannian sectional curvature of the complete K\"ahler-Einstein metric on the disk bundle over any complete K\"ahler-Einstein manifold. Then we study whether it is negatively pinched. When the base space is a bounded pseudoconvex domain equipped with its complete K\"ahler-Einstein metric, the corresponding disk bundle is a pseudoconvex Hartogs domain. We prove that the Bergman metric on such a Hartogs domain is K\"ahler-Einstein if and only if the domain is biholomorphically equivalent to a unit ball.
topic: several-complex-variables
tags:
  - kahler-einstein-metrics
  - curvature
  - stein-geometry
  - uniformization
arxiv_id: "2609.14482v1"
arxiv_url: "https://arxiv.org/abs/2609.14482"
arxiv_submitted: "2026-09-13"
arxiv_updated: "2026-09-13"
summary: >-
  完備Kähler--Einstein多様体上の円板束にCalabi ansatzで入る完備Kähler--Einstein計量について、正則断面曲率とRiemann断面曲率を計算し負のpinchingを調べる。さらに対応する擬凸Hartogs領域のBergman計量がKähler--Einsteinとなるのは、その領域が単位球と双正則同値な場合に限ることを示す。
abstract_en: >-
  In this paper, we compute the holomorphic sectional curvature and Riemannian sectional curvature of the complete K\"ahler-Einstein metric on the disk bundle over any complete K\"ahler-Einstein manifold. Then we study whether it is negatively pinched. When the base space is a bounded pseudoconvex domain equipped with its complete K\"ahler-Einstein metric, the corresponding disk bundle is a pseudoconvex Hartogs domain. We prove that the Bergman metric on such a Hartogs domain is K\"ahler-Einstein if and only if the domain is biholomorphically equivalent to a unit ball.
summary_en: ""
abstract_ja: >-
  任意の完備Kähler--Einstein多様体上の円板束に備わる完備Kähler--Einstein計量について、正則断面曲率とRiemann断面曲率を計算し、それらが負にpinchされる条件を調べる。底空間が完備Kähler--Einstein計量を備えた有界擬凸領域なら、対応する円板束は擬凸Hartogs領域となる。このHartogs領域のBergman計量がKähler--Einsteinであることと、領域が単位球に双正則同値であることが同値だと証明する。
abstract_source_url: "https://arxiv.org/abs/2609.14482"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.14482](https://arxiv.org/abs/2609.14482)
- **著者:** Yihong Hao, Mingming Chen, An Wang, Ben Zhang
- **初回投稿日・最終更新日:** 2026年9月13日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Hermite直線束$L\to M$の円板束に対し、Calabi ansatzは底のKähler計量とファイバー半径の関数からKähler形式を構成する。底が完備Kähler--Einsteinなら、この方法で円板束上に完備Kähler--Einstein計量が得られるが、その断面曲率の具体的挙動が問題となる。

本論文は正則断面曲率とRiemann断面曲率を直接計算し、負の上下界を持つ条件を検討する。これにより、完備Kähler--Einstein計量、Kobayashi計量、Bergman計量が互いに同値となる新しい複素多様体も得られる。

もう一つの主結果はCheng予想のHartogs領域版である。底の誘導Kähler計量が定スカラー曲率であるクラスについて、Bergman計量がKähler--Einsteinなら領域は球型であり、逆も成立する。

## 背景と問題設定

$\pi:L\to M$をHermite直線束、$h$をファイバー計量とし、$-\frac{\sqrt{-1}}2\Theta=l\omega_M$とする。Calabi ansatzと円板束は

$$
\omega_f=\pi^*\omega_M+\frac{\sqrt{-1}}2\partial\bar\partial f(|\zeta|_h^2),
\qquad D(L)=\{\zeta\in L:|\zeta|_h^2<1\}
$$

で与えられる。Introductionは、Calabiがこの計量のKähler--Einstein性を常微分方程式へ帰着したことと、Thullen領域などで曲率評価が知られていたことを整理する。

有界擬凸領域$\Omega$と正関数$h$からなるHartogs領域は

$$
B(\Omega,k)=\{(z,\zeta)\in\Omega\times\mathbb C^k:\|\zeta\|^2<h(z)^{-1}\}
$$

と書ける。問うべき剛性は、この領域のBergman計量がKähler--Einsteinなら領域自体が単位球に双正則同値かという問題である。

## 主結果

### 円板束計量の曲率評価

Introductionでは概略として次のように述べられている。完備Kähler--Einstein多様体を底とする円板束上の完備Kähler--Einstein計量について、正則断面曲率とRiemann断面曲率を計算し、両者の負のpinchingを底の曲率不変量を通して判定する。

### Hartogs領域の球型剛性

底$\Omega$上で$g_{i\bar j}=\partial_i\bar\partial_j\log h$が定スカラー曲率を持つ対象クラスでは、$B(\Omega,k)$のBergman計量がKähler--Einsteinであることと、$B(\Omega,k)$が単位球に双正則同値であることが同値である。特に底の計量がKähler--Einsteinの場合を含む。

## 証明の見取り図

曲率部分ではCalabi ansatzの曲率テンソルを直接計算し、正則断面曲率からRiemann断面曲率を復元する恒等式と、底の不変量の一様有界性を用いる。Hartogs領域の剛性では、Bergman計量のKähler--Einstein性から強擬凸境界が球面的であることを導き、円周束に関するWebsterの結果を通じて底のBochner--Kählerテンソルが消えることを示す。定スカラー曲率Bochner--Kähler多様体の分類から底を球と同定し、Thullen領域の既知の特徴づけへ帰着する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.14482](https://arxiv.org/abs/2609.14482)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Introductionでは主結果を番号なしで概説
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
