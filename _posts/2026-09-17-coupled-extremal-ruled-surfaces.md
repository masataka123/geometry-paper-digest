---
layout: paper
title: "On the existence of coupled extremal Kähler metrics on ruled surfaces"
title_ja: "ルールド曲面上のcoupled extremal Kähler計量の存在"
authors: "Ramesh Mete"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We investigate the existence conditions for coupled extremal Kähler metrics on minimal ruled surfaces over a genus 2 Riemann surface. Using the Calabi ansatz to reduce the coupled extremal equations to ordinary differential equations, we prove that a pair of coupled extremal metrics exists for normalized Kähler classes $Ω_a$ and $Ω_b$ if and only if their parameters $(a, b)$ belong to an explicitly defined open region $\mathcal{S}_{\mathrm{ext}}$ in the positive real quadrant. Furthermore, we show that this existence region inherently contains the diagonal segment corresponding to classical extremal Kähler metrics.
topic: differential-geometry
tags:
  - csck-extremal-kahler-metrics
arxiv_id: "2609.18418v1"
arxiv_url: "https://arxiv.org/abs/2609.18418"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  種数2のRiemann面上の最小ルールド曲面について、二つの正規化Kähler類がcoupled extremal計量をもつための必要十分条件を明示的な開領域として与える。Calabi ansatzで方程式を常微分方程式へ還元し、古典的extremal計量に対応する対角部分を含むことと、領域外での非存在も示す。
abstract_en: ""
summary_en: >-
  This paper analyzes coupled extremal Kähler metrics on a minimal ruled surface over a genus-two curve. Within the Calabi ansatz, the coupled equations become ordinary differential equations whose positivity determines an explicit parameter region. The resulting criterion is both necessary and sufficient in this ansatz, includes a diagonal family of ordinary extremal metrics, and yields concrete nonexistence ranges.
abstract_ja: >-
  種数2のRiemann面上の最小ルールド曲面においてcoupled extremal Kähler計量の存在条件を調べる。Calabi ansatzによってcoupled extremal方程式を常微分方程式へ還元し、正規化Kähler類 $\Omega_a,\Omega_b$ に計量対が存在することと、パラメータ $(a,b)$ が正実象限内の明示的な開領域 $\mathcal S_{\mathrm{ext}}$ に属することが同値であると示す。この存在領域は、古典的extremal Kähler計量に対応する対角線分を含む。
abstract_source_url: "https://arxiv.org/abs/2609.18418"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18418](https://arxiv.org/abs/2609.18418)
- **著者:** Ramesh Mete
- **初回投稿日:** 2026年9月16日
- **最終更新日:** 2026年9月16日
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

coupled extremal Kähler計量は、coupled cscK計量のスカラー曲率条件を、対応する勾配ベクトル場の正則性へ緩めたものである。本論文は種数2のRiemann面上の最小ルールド曲面 $X=\mathbb P(L\oplus\mathcal O)$ を対象とする。

正規化Kähler類 $\Omega_a=2\pi(C+aD_\infty)$ と $\Omega_b=2\pi(C+bD_\infty)$ に対し、Calabi ansatzを満たすcoupled extremal計量対が存在するパラメータ領域 $\mathcal S_{\mathrm{ext}}$ を特徴付ける。条件は一変数関数 $F(a,b,\tau)$ の区間内での正値性へ帰着する。

存在領域は開で、古典的extremal Kähler計量に対応する有限の対角線分を含む。一方、固定した一方のKähler類に対して他方のパラメータを十分大きくすると存在しないなど、具体的な非存在領域も得られる。

## 背景と問題設定

coupled計量は複数のKähler類を同時に扱う標準計量である。対象となる曲面では、任意の正規化Kähler類対はcoupled cscK計量をもたないことが既知である。本論文はextremal条件まで緩めることで存在が回復する範囲を精密に問う。

## 主結果

### 存在領域（Theorem 1.2）

$L$ を種数2のRiemann面上の次数 $-1$ の正則直線束とし、$X=\mathbb P(L\oplus\mathcal O)$ とする。Calabi ansatzを満たす $(\omega,\chi)\in\Omega_a\times\Omega_b$ がcoupled extremalであることと

$$
(a,b)\in\mathcal S_{\mathrm{ext}}
$$

は同値である。ここで $\mathcal S_{\mathrm{ext}}$ は開集合であり、対角線分

$$
\Delta_{k_1}=\{(x,x):0<x<k_1\},
$$

を含む。$k_1\simeq18.889$ は

$$
\wp(x)=x^4-16x^3-52x^2-48x-12
$$

の唯一の正根である。

### 非存在範囲（Corollary 1.3, Proposition 1.4, Corollary 1.5）

$k_0\simeq12.451$ を

$$
\vartheta(x)=9x^4-88x^3-280x^2-240x-48
$$

の唯一の正根とする。$a>k_0$ なら十分小さい $b>0$ に対して計量対は存在しない。また固定した $a>0$ に対し、$(a,b)\in\mathcal S_{\mathrm{ext}}$ となる $b$ は上に有界である。

## 証明の見取り図

Calabi ansatzの下で連立方程式をmomentum profile $\varphi(\tau)$ と補助関数 $\psi(\tau)$ の常微分方程式へ還元する。境界条件から $\psi$ を一意に決め、$F(\tau)=(1+\tau)\varphi(\tau)$ を積分表示で得る。計量が成立する条件は $F(a,b,\tau)>0$ が全ての $0<\tau<a$ で成り立つことと同値であり、この正値条件のパラメータ解析から開性、対角部分の存在、各非存在結果を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18418](https://arxiv.org/abs/2609.18418)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorem 1.2, Corollary 1.3, Proposition 1.4, Corollary 1.5
- **論文構成の説明:** p. 6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
