---
layout: paper
title: "The Hermitian-Yang-Mills Iteration on Stable Bundles"
title_ja: "安定束上のHermitian--Yang--Mills反復"
authors: "Huai-Dong Cao, Xiaofeng Sun, Shing-Tung Yau, Yingying Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories: [math.DG]
arxiv_abstract: >-
  In this paper, based on recent results for the prescribed Hermitian-Yang-Mills (HYM) tensor and its
  twisted variants by Fan-Wang-Yang-Yau, we provide a dynamical construction of Hermitian-Einstein
  metrics on stable holomorphic vector bundles and its extension to Higgs bundles. Additionally, in
  the appendix, we use the heat flow method to give a new proof of the existence and uniqueness of
  solutions to the twisted prescribed HYM tensor equation, as well as its generalization to Higgs
  bundles.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - hermite-einstein-metrics
  - higgs-nonabelian-hodge
arxiv_id: "2606.20307v1"
arxiv_url: "https://arxiv.org/abs/2606.20307v1"
arxiv_submitted: "2026-06-18"
arxiv_updated: "2026-06-18"
summary: >-
  指定Hermitian--Yang--Mills方程式を各stepで解く離散反復から、安定正則vector bundleのHermitian--Einstein計量を構成する。正のHYM tensorをもつという仮定の下で滑らかな収束を証明し、Higgs bundleにも拡張する。
abstract_en: >-
  In this paper, based on recent results for the prescribed Hermitian-Yang-Mills (HYM) tensor and its twisted variants by Fan-Wang-Yang-Yau, we provide a dynamical construction of Hermitian-Einstein metrics on stable holomorphic vector bundles and its extension to Higgs bundles. Additionally, in the appendix, we use the heat flow method to give a new proof of the existence and uniqueness of solutions to the twisted prescribed HYM tensor equation, as well as its generalization to Higgs bundles.
summary_en: ""
abstract_ja: >-
  指定Hermitian--Yang--Mills tensor方程式の可解性を用いて計量の離散反復列を定義し、安定束のHermitian--Einstein計量へ収束させる動的構成を与える。同じ発想をHiggs bundleへ拡張し、付録ではtwisted指定方程式の存在一意性をheat flowで再証明する。
abstract_source_url: "https://arxiv.org/abs/2606.20307v1"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.20307v1](https://arxiv.org/abs/2606.20307v1)
- **著者:** Huai-Dong Cao, Xiaofeng Sun, Shing-Tung Yau, Yingying Zhang
- **初回投稿日:** 2026年6月18日
- **最終更新日:** 2026年6月18日（v1）
- **主分類・副分類:** Differential Geometry (math.DG)
- **ライセンス:** [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

Donaldson--Uhlenbeck--Yau定理は安定性とHermitian--Einstein計量の存在を結ぶ。本論文は存在だけでなく、指定HYM方程式を反復してその計量へ近づく離散的な構成を与える。

各stepでは前の計量を右辺に指定した非線形方程式を解く。bundleが安定で正のHermitian--Yang--Mills tensorをもつ基準計量があるとき、この列が滑らかにHermitian--Einstein計量へ収束する。

このschemeはinverse Kähler--Ricci iterationのvector bundle版に相当し、Higgs場を含む場合にも拡張される。

## 背景と問題設定

安定性は全ての真の整合部分層 $F$ に対する $\mu(F)<\mu(E)$ で定義され、Hermitian--Einstein方程式は

$$
\Lambda_\omega R^h=\mu I_E
$$

である。指定HYM方程式の一意可解性を用い、初期計量 $h_0$ から

$$
\Lambda_\omega R^{h_m}=h_{m-1}h_m^{-1},\qquad m\geq1
$$

を満たす列を帰納的に定める。

## 主結果

### 反復列の収束（Theorem 1.2）

$E$ が安定で、ある計量 $\widehat h$ のHYM tensor $\Lambda_\omega R^{\widehat h}$ が正定値なら、上の反復列は $E$ のHermitian--Einstein計量へ滑らかに収束する。IntroductionではscaleによりEinstein定数を $\mu=1$ と正規化して式を簡潔にしている。

### Higgs bundleへの拡張（Theorem 4.2の予告）

Introductionでは概略として次のように述べられている。Fan--Wang--Yang--Yauの指定方程式を使い、主定理の議論を修正してcompact Kähler多様体上の安定Higgs bundleへ同種の収束結果を拡張する。

## 証明の見取り図

修正Donaldson functionalを導入し、反復に沿って通常のDonaldson functionalが減少することを示す。安定性と指定方程式の評価から一様 $C^0$ 制御を得て、高階評価とcompactnessにより滑らかな極限を取る。極限で反復式を通過させるとHermitian--Einstein方程式になる。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.20307v1](https://arxiv.org/abs/2606.20307v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.2; Theorem 4.2 (extension announced)
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1（v2ではなくrequested_versionを確認）
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
