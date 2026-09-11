---
layout: paper
title: "Local classification of chsc Kähler metrics with cone singularities"
title_ja: "錐特異点を持つ定正則断面曲率Kähler計量の局所分類"
authors: "Martin de Borbon"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  Let $B\subset\mathbb{C}^n$ be a ball centred at the origin and $D=\{z^1=0\}$. Let $g$ be a Kähler metric of constant holomorphic sectional curvature (chsc) on $B\setminus D$, uniformly equivalent to the model cone metric of angle $2πβ$, with $0<β<1$, and polyhomogeneous along $D$. We prove that, in suitable holomorphic coordinates $(w^1, \ldots, w^n)$ centred at the origin, the metric $g$ is the pullback of the corresponding complex space form by the map $(w^1,w^2,\dots,w^n)\longmapsto \bigl((w^1)^β,w^2,\dots,w^n\bigr)$.
topic: differential-geometry
tags:
  - curvature
  - singularities
arxiv_id: "2609.11760v1"
arxiv_url: "https://arxiv.org/abs/2609.11760"
arxiv_submitted: "2026-09-10"
arxiv_updated: "2026-09-10"
summary: >-
  滑らかな因子に沿って角度 $2\pi\beta$ の錐特異点を持つ定正則断面曲率Kähler計量を局所分類する。多重斉次性を仮定すると、適切な正則座標で標準複素空間形を分岐写像 $(w^1,w')\mapsto((w^1)^\beta,w')$ により引き戻した計量に一致し、この正則性仮定はKähler--Einstein方程式から自動的に従う。
abstract_en: ""
summary_en: >-
  The paper classifies constant-holomorphic-sectional-curvature Kähler metrics near a smooth cone divisor. Under uniform equivalence to the standard cone and a polyhomogeneous expansion, suitable holomorphic coordinates identify the metric with the pullback of the matching complex space form by a fractional-power map in the normal coordinate. An appendix shows that the expansion assumption follows automatically from the Kähler--Einstein equation and the cone bound. The flat and nonflat cases are handled through logarithmic connections and a flat first-jet bundle, respectively.
abstract_ja: >-
  原点を中心とする $\mathbb C^n$ の球と超平面因子 $D=\{z^1=0\}$ を考える。$B\setminus D$ 上の定正則断面曲率Kähler計量が角度 $2\pi\beta$、$0<\beta<1$ の模型錐計量と一様同値で、$D$ に沿って多重斉次的であると仮定する。このとき適切な正則座標では、計量は対応する複素空間形を $(w^1,w^2,\ldots,w^n)\mapsto((w^1)^\beta,w^2,\ldots,w^n)$ で引き戻したものになる。
abstract_source_url: "https://arxiv.org/abs/2609.11760"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.11760](https://arxiv.org/abs/2609.11760)
- **著者:** Martin de Borbon
- **初回投稿日:** 2026年9月10日
- **最終更新日:** 2026年9月10日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな点の近傍では、定正則断面曲率Kähler計量は古典的に標準複素空間形で局所分類される。本論文はこのBochner型分類を、滑らかな因子に沿って錐特異点を持つ場合へ拡張する。

計量は角度 $2\pi\beta$ の平坦模型錐と一様同値であるとし、因子方向に多重斉次展開を持つと仮定する。主定理は、正則座標を取り直すと計量が標準的な分数冪の分岐写像による空間形の引き戻しに一致することを示す。

曲率0では模型錐計量そのものになり、非零曲率では射影空間または単位球の標準計量の引き戻しになる。したがって曲率符号と錐角以外の局所的な自由度は残らない。

主定理では多重斉次性を明示的に仮定するが、付録はKähler--Einstein計量が模型錐との一様同値性を満たせばこの正則性が自動的に従うことを示す。定正則断面曲率計量はKähler--Einsteinなので、分類の適用上この仮定は追加制約にならない。

## 背景と問題設定

$B\subset\mathbb C^n$、$D=\{z^1=0\}$ とし、模型錐計量を

$$
g_\beta=|z^1|^{2\beta-2}|dz^1|^2+\sum_{a=2}^n|dz^a|^2
$$

と置く。対象となる計量は $B\setminus D$ 上で $C^{-1}g_\beta\leq g\leq Cg_\beta$ を満たす。曲率規約は

$$
R_{i\bar j k\bar l}=\frac c2
(g_{i\bar j}g_{k\bar l}+g_{i\bar l}g_{k\bar j})
$$

であり、このとき $\operatorname{Ric}(g)=\frac{n+1}{2}cg$ となる。

## 主結果

### 局所分類（Theorem 1.2）

$g$ を曲率 $c$ の定正則断面曲率Kähler計量とし、$D$ に沿う錐角が $2\pi\beta$、$0<\beta<1$ で、多重斉次的であるとする。球を縮小すれば原点中心の正則座標 $w=(w^1,\ldots,w^n)$ が存在する。

$c=0$ の場合は

$$
g=|w^1|^{2\beta-2}|dw^1|^2+\sum_{a=2}^n|dw^a|^2.
$$

$c\neq0$ の場合、$\sigma=\operatorname{sgn}c$ と置くとKähler形式は

$$
\omega=\frac{2\sigma}{|c|}i\partial\bar\partial
\log\left(1+\sigma\left(|w^1|^{2\beta}+\sum_{a=2}^n|w^a|^2\right)\right).
$$

いずれも $F(w)=((w^1)^\beta,w^2,\ldots,w^n)$ による対応する複素空間形の引き戻しという統一的表示を持つ。

### 正則性仮定の自動性（Remark 1.3 and Appendix A）

Introductionでは、模型錐との一様同値性を満たすKähler--Einstein計量は主定理が要求する多重斉次性を自動的に持つと述べられている。したがって定正則断面曲率の場合、模型錐との比較条件から分類を適用できる。

## 証明の見取り図

平坦な場合、$B\setminus D$ 上のLevi--Civita接続を $TB$ 上の対数極を持つ接続へ延長し、その留数が階数1でtrace $\beta-1$ であることを示す。次に平坦かつtorsion-freeな対数接続の正規座標を構成し、$\nabla g=0$ を積分して模型錐表示を得る。

非平坦な場合は、第一jetの束上のHermite形式に付随する平坦Chern接続へ問題を移す。この平坦な対象に対数接続の方法を適用し、標準的な正または負曲率空間形の引き戻し表示を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.11760](https://arxiv.org/abs/2609.11760)
- **Introduction:** Section 1, pp. 1--2
- **Introduction中で言及された主要定理番号:** Theorem 1.2, Remark 1.3
- **論文構成の説明:** IntroductionのOutline, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
