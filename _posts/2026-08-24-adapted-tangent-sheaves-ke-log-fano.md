---
layout: paper
title: "Stability properties of adapted tangent sheaves on Kähler--Einstein log Fano pairs"
title_ja: "Kähler–Einstein log Fano対上の適合接層の安定性"
authors: "Louis Dailly"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  Let $(X, \Delta)$ be a log Fano pair with standard coefficients endowed with a singular Kähler--Einstein metric. We show that the adapted tangent sheaf $\mathcal{T}_{X, \Delta, f}$ and the adapted canonical extension $\mathcal{E}_{X, \Delta, f}$ are polystable with respect to $f^*c_1(X, \Delta)$ for any strictly $\Delta$-adapted morphism $f: Y \to X$.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - kahler-einstein-metrics
  - fano-varieties
arxiv_id: "2601.19608v1"
arxiv_url: "https://arxiv.org/abs/2601.19608"
arxiv_submitted: "2026-01-27"
arxiv_updated: "2026-01-27"
summary: >-
  特異Kähler–Einstein計量をもつ標準係数のlog Fano対について、任意のstrictly adapted morphism上の適合接層と適合canonical extensionが偏極 $f^*c_1(X,\Delta)$ に関してpolystableであることを示す。この安定性を既知の等号場合の議論と組み合わせ、orbifold Miyaoka–Yau等式を満たす対を射影空間の有限商として特徴づける。
abstract_en: >-
  Let $(X, \Delta)$ be a log Fano pair with standard coefficients endowed with a singular Kähler--Einstein metric. We show that the adapted tangent sheaf $\mathcal{T}_{X, \Delta, f}$ and the adapted canonical extension $\mathcal{E}_{X, \Delta, f}$ are polystable with respect to $f^*c_1(X, \Delta)$ for any strictly $\Delta$-adapted morphism $f: Y \to X$.
summary_en: >-

abstract_ja: >-
  標準係数をもつlog Fano対が特異Kähler–Einstein計量を備えるとき、任意のstrictly adapted morphismに付随する適合接層と適合canonical extensionが、反標準類の引き戻しに関してpolystableとなる。境界因子の分岐をorbifold構造に取り込むことで、滑らかなFano多様体に対するTianの結果と境界なしの特異Fano多様体に対する先行結果を統一的に拡張する。
abstract_source_url: "https://arxiv.org/abs/2601.19608"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2601.19608](https://arxiv.org/abs/2601.19608)
- **著者:** Louis Dailly
- **初回投稿日・最終更新日:** 2026年1月27日（v1）
- **主分類・副分類:** math.DG; math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかなFano多様体がKähler–Einstein計量をもつと、その接束はKobayashi–Hitchin対応によってpolystableとなり、Tianの定理はcanonical extensionにもより強いpolystabilityを与える。本論文はこの構図を、境界を含む一般のlog Fano対へ拡張する。

境界因子がある場合には、係数が指定する分岐を記録するorbisheafが自然な対象となる。有限Galois射 $f:Y\to X$ を通じてこれを具体化したものが、適合接層 $\mathcal T_{X,\Delta,f}$ と適合canonical extension $\mathcal E_{X,\Delta,f}$ である。

主定理は、標準係数をもつlog Fano対 $(X,\Delta)$ が特異Kähler–Einstein計量を備えるなら、これら二つの適合層がすべてのstrictly adapted morphismに対してpolystableとなると述べる。さらにMiyaoka–Yau等式の場合には、対が射影空間の有限群商に一意化される。

## 背景と問題設定

既知の結果は、log smooth対におけるorbifold接束・canonical extensionのsemistabilityと、境界をもたない$\mathbb Q$-Fano多様体におけるpolystabilityを扱っていた。一般の境界付き対では、ramificationを正確に反映する適合射と適合層を使う必要がある。

## 主結果

### 適合層のpolystability（Theorem A）

$(X,\Delta)$ を特異Kähler–Einstein計量をもつlog Fano対とする。任意のstrictly adapted morphism $f:Y\to X$ に対し、
$\mathcal T_{X,\Delta,f}$ と $\mathcal E_{X,\Delta,f}$ はともに $f^*c_1(X,\Delta)$ に関してpolystableである。

### 等号場合の一意化（Corollary B）

$\dim X=n$ とし、特異Kähler–Einstein計量が存在して

$$
\bigl(2(n+1)c_2(X,\Delta)-n c_1(X,\Delta)^2\bigr)\cdot c_1(X,\Delta)^{n-2}=0
$$

が成り立つなら、有限群 $G\subset \operatorname{PGL}(n+1,\mathbb C)$ が存在して
$$(X,\Delta)\simeq(\mathbb P^n/G,\Delta_G)$$
となる。

## 証明の見取り図

Introductionによれば、対のlog resolution上で特異Kähler–Einstein計量を摂動Monge–Ampère方程式のorbifold計量によって近似し、そこでorbifold束のsemistabilityを導く。適合被覆を構成してresolution上の結論を $X$ 上の任意の適合被覆へ移し、境界なしの場合の手法を適応してpolystabilityへ強める。

## 原論文との対応
- **Abstractページ:** [arXiv:2601.19608](https://arxiv.org/abs/2601.19608)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中の主要結果:** Theorem A, Corollary B
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
