---
layout: paper
title: "Non-embeddable torus and CR Paneitz operator"
title_ja: "非埋め込み可能トーラスとCR Paneitz作用素"
authors: "Pak Tung Ho, Yuya Takeuchi"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AP
  - math.CV
  - math.SP
topic: differential-geometry
tags:
  - curvature
  - cr-geometry
arxiv_id: "2606.24508v1"
arxiv_url: "https://arxiv.org/abs/2606.24508v1"
arxiv_submitted: "2026-06-23"
arxiv_updated: "2026-06-23"
summary: >-
  平面閉曲線から作る3次元トーラス上の $T^2$-不変strictly pseudoconvex CR構造を調べる。CR構造が埋め込み不可能で曲率が明示的不等式を満たすとき、CR Paneitz作用素が無限個の負固有値をもつことを証明する。
abstract_en: ""
summary_en: >-
  The authors analyze the CR Paneitz operator on a family of three-dimensional tori carrying invariant strictly pseudoconvex CR structures. Embeddability is characterized by two monodromy quantities and the simplicity of an associated plane curve. Under non-embeddability and an explicit curvature inequality, the Paneitz operator has infinitely many negative eigenvalues. Genericity and concrete families of plane curves supply examples satisfying the hypotheses.
abstract_ja: >-
  3次元トーラス上の $T^2$-不変strictly pseudoconvex CR構造を、付随する平面閉曲線と二つのholonomy型不変量を通じて記述する。埋め込み不可能性と曲率の微分不等式のもとで、CR Paneitz作用素の負スペクトルが無限になることを示す。Limaçon、hypotrochoid、epitrochoidから具体例も得る。
abstract_source_url: "https://arxiv.org/abs/2606.24508v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.24508v1](https://arxiv.org/abs/2606.24508v1)
- **著者:** Pak Tung Ho, Yuya Takeuchi
- **初回投稿日:** 2026年6月23日
- **最終更新日:** 2026年6月23日（v1）
- **主分類・副分類:** Differential Geometry (math.DG); Analysis of PDEs (math.AP); Complex Variables (math.CV); Spectral Theory (math.SP)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

CR Paneitz作用素はCR pluriharmonic関数や埋め込み可能性に関係する4階作用素である。本論文は平面閉曲線から構成される3次元トーラス上の不変CR構造に対し、そのスペクトルの負部分を調べる。

構成データから二つの量 $A,B$ と平面曲線 $\gamma$ を定める。このCR多様体が埋め込み可能であるための必要十分条件は $A=B=1$ かつ $\gamma$ がsimpleであることだと示される。

その否定と曲率 $\kappa$ の明示的な正値条件のもとで、CR Paneitz作用素は無限個の負固有値をもつ。仮定はgenericであり、複数の古典的平面曲線族が具体例を与える。

## 背景と問題設定

周期 $L$ の関数 $\alpha,\beta$ から

$$
\gamma(s)=\int_0^s(-\operatorname{Im}\alpha(t),\operatorname{Im}\beta(t))\,dt
$$

を作り、その曲率を $\kappa>0$ とする。$M=(\mathbb R/L\mathbb Z)\times T^2$ にcontact formと複素ベクトル場を定めると、$T^2$-不変strictly pseudoconvex CR構造を得る。さらに

$$
A=\exp\!\left(-\sqrt{-1}\int_0^L\alpha(t)\,dt\right),\qquad
B=\exp\!\left(-\sqrt{-1}\int_0^L\beta(t)\,dt\right)
$$

が大域的な埋め込み条件を測る。

## 主結果

### 負固有値の無限性（Theorem 1.1）

$(A,B)\ne(1,1)$ または $\gamma$ がsimpleでなく、かつ

$$
\kappa^4-\kappa\kappa''+(\kappa')^2>0
$$

と仮定する。このとき $(M,T^{1,0}M,\theta)$ 上のCR Paneitz作用素 $P$ は無限個の負固有値をもつ。前半はちょうど非埋め込み可能性を表し、後半は平面曲線の曲率から確認できる局所的条件である。

### 仮定の豊富さ

Introductionでは、上の仮定がgenericであることをProposition 4.5で示し、Limaçon、hypotrochoid、epitrochoidの族をSections 6–8で具体化すると説明されている。

## 証明の見取り図

トーラス作用を利用してFourier modeごとに作用素を解析する。非埋め込み可能性はKohn Laplacianの0近傍のスペクトル挙動に反映され、曲率不等式がPaneitz quadratic formの符号を制御する。これらを組み合わせ、異なるmodeから負方向を無限に作るという流れがIntroductionから読み取れる。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.24508v1](https://arxiv.org/abs/2606.24508v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1.1; Propositions 4.3 and 4.5
- **論文構成の説明:** Introduction, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
