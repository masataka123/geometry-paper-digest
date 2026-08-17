---
layout: paper
title: "On weighted extremal Kähler metrics"
title_ja: "重み付きextremal Kähler計量について"
authors: "Akito Futaki"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
topic: differential-geometry
tags:
  - csck-extremal-kahler-metrics
  - kahler-ricci-flow-solitons
  - curvature
arxiv_id: "2605.08796v1"
arxiv_url: "https://arxiv.org/abs/2605.08796"
arxiv_submitted: "2026-05-09"
arxiv_updated: "2026-05-09"
summary: >-
  Calabiのextremal Kähler計量を拡張し、Kähler--Ricci solitonやSasaki--Einstein計量などを統一する重み付きextremal計量のサーベイである。重み付きスカラー曲率、Futaki不変量、変分論と重み付きYau--Tian--Donaldson予想の近年の進展を整理する。
abstract_en: ""
summary_en: >-
  This survey presents weighted extremal Kähler metrics as a common framework for several canonical metrics, including ordinary extremal metrics, Kähler--Ricci solitons, and Sasaki--Einstein metrics. It introduces weighted scalar curvature and the associated extremal equation, records weighted analogues of classical results, and reviews recent progress on stability characterizations. Particular attention is paid to the weighted form of the Yau--Tian--Donaldson problem and to conformally Kähler Einstein--Maxwell geometry.
abstract_ja: >-
  重み付きextremal Kähler計量は、Calabiのextremal計量を拡張すると同時に、Kähler--Ricci soliton、Sasaki--Einstein計量、conformally Kähler Einstein--Maxwell計量などを含む。本稿はこの概念の成立過程、古典的extremal理論の重み付き版、変分的存在論、重み付きYau--Tian--Donaldson予想に関する近年の研究を概観する。
abstract_source_url: "https://arxiv.org/abs/2605.08796"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.08796v1](https://arxiv.org/abs/2605.08796v1)
- **著者:** Akito Futaki
- **初回投稿日:** 2026年5月9日
- **最終更新日:** 2026年5月9日（v1）
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

YauによるCalabi予想の解決以後、標準的Kähler計量の存在と代数的なK安定性を結ぶYau--Tian--Donaldson（YTD）予想がKähler幾何の中心テーマとなった。対象はKähler--Einstein計量、cscK計量、extremal Kähler計量だけでなく、Kähler--Ricci solitonやSasaki--Einstein計量へ広がっている。

Lahdiliが導入した重み付きextremal Kähler計量は、moment polytope上の二つの重み関数 $(v,w)$ を介してこれらを統一する。重み付きスカラー曲率が定数ならweighted cscK、勾配が正則ベクトル場ならweighted extremalであり、通常の理論は $v=w=1$ の場合として回収される。

本稿は新しい単一の主定理を証明する研究論文ではなく、この統一的概念の発展を解説するサーベイである。Introductionは、古典的Calabi理論の標準結果が重み付き場合へどう拡張されるか、weighted solitonのK-polystability、cscKおよびweighted extremal計量の変分論、conformally Kähler Einstein--Maxwell方程式を主要な柱として予告する。

重要な数学的意味は、見かけの異なる標準計量方程式を一つの重み付きスカラー曲率方程式として扱い、それぞれの存在問題を適切な重み付き安定性へ結び付ける点にある。ただしIntroductionで述べられるのは近年のYTD研究の概観であり、全ての場合のYTD同値が本稿で新たに証明されたという主張ではない。

## 背景と問題設定

$X$ をコンパクト連結Kähler多様体、$\Omega$ をKähler類、$T$ を自己同型群のコンパクト実トーラスとする。$T$-不変Kähler形式 $\omega\in\Omega$ のmoment mapを $\mu_\omega:X\to\mathfrak t^*$、その像をmoment polytope $\Delta$ とする。$v,w$ は $\Delta$ 上の正の滑らかな関数である。

重み付きスカラー曲率は

$$
S_v(\omega)=v(\mu_\omega)S(\omega)
+2\Delta_\omega v(\mu_\omega)
+\langle g_\omega,\mu_\omega^*\operatorname{Hess}(v)\rangle,
\qquad
S_{v,w}=\frac{S_v}{w(\mu_\omega)}
$$

と定義される。$S_{v,w}$ が定数である計量がweighted cscK計量であり、$\operatorname{grad}'S_{v,w}$ が正則ベクトル場である計量がweighted extremal計量である。後者ではあるaffine関数 $\ell$ により

$$
S_{v,w}=\ell\circ\mu_\omega
$$

と書ける。

## 主結果の見取り図

本稿はサーベイであり、Introductionには論文固有の番号付き主定理は掲げられていない。Introductionが示す解説の軸は次の通りである。

### 標準計量の統一

weighted extremalという一つの枠組みが、Kähler--Einstein、cscK、extremal、Kähler--Ricci soliton、Mabuchi soliton、Sasaki--Einstein、conformally Kähler Einstein--Maxwell、$\mu$-scalar curvatureに関する計量を包含する。異なる方程式に共通の変分構造と安定性問題を与えることが狙いである。

### 古典的extremal理論の重み付き拡張

本文で解説される成果には、weighted Calabi functionalの臨界点による特徴付け、重み付きFutaki不変量、Calabi分解、Lichnerowicz--Matsushima型のreductivityが含まれる。また、Mabuchi energyのpropernessとcscK計量の存在との関係には重み付き拡張がある。

### 重み付きYTD問題

後半では、Kähler--Einstein計量とK-polystabilityの古典的対応を出発点に、weighted soliton、cscK、weighted extremal計量に対する一様K安定性・D安定性と変分法が整理される。これは複数の近年の研究成果を結ぶレビューであり、Introductionは個々の成立範囲を同一視していない。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.08796v1](https://arxiv.org/abs/2605.08796v1)
- **Introduction:** Section 1, pp. 1--2
- **Introduction中で言及された主要定理番号:** 論文固有の番号付き主定理なし
- **論文構成の説明:** pp. 1--2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
