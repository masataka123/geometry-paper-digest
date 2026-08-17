---
layout: paper
title: "A Torelli-type theorem for hyperkähler quotients"
title_ja: "超Kähler商に対するTorelli型定理"
authors: "Ryota Kotani"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
topic: algebraic-geometry
tags:
  - moduli
  - hyperkahler-geometry
  - toric-geometry
arxiv_id: "2608.08680v1"
arxiv_url: "https://arxiv.org/abs/2608.08680"
arxiv_submitted: "2026-08-09"
arxiv_updated: "2026-08-09"
summary: >-
  超Kähler錐に漸近する代数的超Kähler構造のモジュライを、三つのKähler類からなる周期で分類する。Kirwan写像の全射性などの仮定の下で周期写像の全単射性を示し、KronheimerのALE重力インスタントンのTorelli型定理をトーリック超Kähler多様体や中島箙多様体へ拡張する。
abstract_en: ""
summary_en: >-
  This work studies algebraic hyperkähler structures on projective crepant resolutions of conical symplectic quotients, with metrics asymptotic to a fixed cone metric. Their three Kähler classes define a period map that is already known to be injective in the author's framework. Under stability, freeness, and Kirwan-surjectivity assumptions for a linear hyperkähler quotient, the paper proves that every point of the stated period domain is realized. Thus the period map is bijective, extending the ALE Torelli picture to examples including toric hyperkähler and Nakajima quiver varieties.
abstract_ja: >-
  四元数ベクトル空間から得られる超Kähler商上で、固定した超Kähler錐計量に漸近する代数的超Kähler構造のモジュライを研究する。Kirwan写像の全射性を仮定して、三つのKähler形式のコホモロジー類を送る周期写像が全単射であることを証明する。これはKronheimerによるALE重力インスタントンのTorelli型定理の代数幾何的拡張で、トーリック超Kähler多様体と中島箙多様体を含む。
abstract_source_url: "https://arxiv.org/abs/2608.08680"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.08680v1](https://arxiv.org/abs/2608.08680)
- **著者:** Ryota Kotani
- **初回投稿日・最終更新日:** 2026年8月9日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

超Kähler錐に漸近する超Kähler計量は、モジュライ理論・表現論・代数幾何を結ぶ。KronheimerはALE重力インスタントンを周期で分類したが、本論文は円錐的シンプレクティック多様体の射影的クレパント解消上で、より広い代数的漸近超Kähler構造を扱う。

解消 $Y$ 上の構造 $(Y,g,I,J,K)$ に、Kähler形式の三つ組

$$
p(Y,g,I,J,K)=([\omega_I],[\omega_J],[\omega_K])\in H^2(Y;\mathbb R)\otimes\mathbb R^3
$$

を対応させる。先行研究のprincipal twistor modelによりこの周期写像は単射であり、本論文の核心は、超Kähler商の設定でその像が自然な周期領域全体になることを示す点にある。

安定部分の非空性、複素化群の自由作用、Kirwan写像の全射性という仮定の下で、周期写像は全単射となる。したがって許容される任意の周期三つ組がただ一つの漸近超Kähler構造を実現する。

## 背景と問題設定

円錐的シンプレクティック多様体 $X$ の正則部分に超Kähler錐計量 $g_0$ を固定し、射影的クレパント解消 $Y\to X$ 上で $\|g-g_0\|_{g_0}\to0$ を満たす代数的超Kähler構造のモジュライ $\mathcal M$ を考える。普遍Poisson変形の判別軌跡から実壁 $D_{\mathbb R}$ が定まり、周期領域は

$$
\Omega=(D_{\mathbb R}\otimes\mathbb R^3)^c\subset H^2(Y;\mathbb R)\otimes\mathbb R^3
$$

と定義される。非退化性から $p(\mathcal M)\subset\Omega$ であり、残る問題は全射性である。

## 主結果

### 周期写像の単射性（Proposition 1.1 / Proposition 3.2）

漸近条件を課した代数的超Kähler構造は周期三つ組で一意に決まる。これはprincipal twistor modelの普遍性による既存枠組みから導かれる、本論文の主定理への入力である。

### 超Kähler商のTorelli型定理（Theorem 1.4 / Theorem 4.37）

$G\subset Sp(n)$ が $M=\mathbb H^n$ に線形に作用し、$\mu:M\to\mathfrak g^*\otimes\mathbb R^3$ をmoment写像とする。中心商 $X_0=\mu^{-1}(0,0,0)/G$ について、(1) $\mu_{\mathbb C}^{-1}(0)^s\ne\varnothing$、(2) 一般の格子点 $\beta\in\mathfrak z^*_{\mathbb Z}$ が存在し、$G_{\mathbb C}$ が安定部分 $M^{\beta-s}$ に自由に作用してKirwan写像 $\kappa_\beta$ が全射、と仮定する。

このとき

$$
Y^\beta=\mu^{-1}(\beta,0,0)/G\simeq\mu_{\mathbb C}^{-1}(0)//_\beta G_{\mathbb C}
$$

は $X_0$ の射影的クレパント解消であり、$Y^\beta$ 上の代数的漸近超Kähler構造の周期写像 $p:\mathcal M\to\Omega$ は全単射である。Kronheimerの解析的ALE分類を代数幾何的枠組みへ拡げ、トーリック超Kähler多様体や中島箙多様体に適用できる点が新しい。

## 証明の見取り図

一意性にはprincipal twistor modelを用いる。存在側では超Kähler商のGIT表示と普遍Poisson変形を結び、Kirwan写像の全射性によって必要なコホモロジー方向を商のパラメータから実現する。安定部分の非空性は中心商への写像の双有理性を、自由作用は解消の滑らかさを保証し、これらを周期領域の壁構造と合わせて全射性へ到達する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.08680](https://arxiv.org/abs/2608.08680)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Proposition 1.1, Proposition 1.3, Theorem 1.4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
