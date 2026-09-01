---
layout: paper
title: "Limiting Behavior of a Class of Hermitian Yang--Mills Metrics, II: Exponential Approximation"
title_ja: "Hermitian Yang–Mills計量の極限挙動II：指数精度の近似"
authors: "Jixiang Fu, Dekai Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  This paper is a sequel to [9], where the first-named author constructed a family of approximate Hermitian Yang--Mills metrics $H_{0,ε}$ on stable rank-two holomorphic vector bundles arising from double spectral covers over the product of two one-dimensional complex tori. We prove that these approximate metrics give an all-order, exponentially accurate asymptotic description of the exact Hermitian Yang--Mills metrics in the large Kähler limit. More precisely, the mean curvature of $H_{0,ε}$ decays exponentially in every $C^k$-norm. Moreover, if $H_{1,ε}$ denotes the exact Hermitian Yang--Mills metric and $H_ε=H_{0,ε}^{-1}H_{1,ε}$, then, after normalization, for every nonnegative integer $k$, there exist positive constants $C_k$ and $c_k$ such that $\|H_ε- Id\|_{C^k}\leq C_k e^{-\frac{c_{k}}ε}$. The main analytic difficulty lies in the global $C^0$-comparison. Obtaining $C^0$-estimates for the coupled nonlinear Hermitian Yang--Mills system is intrinsically difficult; moreover, the equation controls only the contraction of the curvature, and hence only certain combinations of second derivatives, whereas one needs global control of the full matrix-valued metric.
topic: differential-geometry
tags:
  - hermite-einstein-metrics
  - vector-bundles-sheaves
  - stability
  - curvature
arxiv_id: "2608.29554v1"
arxiv_url: "https://arxiv.org/abs/2608.29554"
arxiv_submitted: "2026-08-30"
arxiv_updated: "2026-08-30"
summary: >-
  二つの楕円曲線の積上の安定階数2束について、スペクトル二重被覆から作る近似Hermitian Yang–Mills計量が厳密解を全階で指数精度に近似することを示す。退化するKähler計量の下でも大域的 $C^0$ 比較を確立し、高階評価へ引き上げる。
abstract_en: ""
summary_en: >-
  The work analyzes stable rank-two bundles obtained from double spectral covers on a product of elliptic curves. In the large Kähler limit, a geometrically constructed approximate Hermitian Yang–Mills metric is shown to approach the exact solution exponentially in every derivative. The central step is a global zeroth-order comparison that remains effective despite degeneration of the background metrics.
abstract_ja: >-
  スペクトル二重被覆から得られる安定階数2正則ベクトル束上で、近似Hermitian Yang–Mills計量が大Kähler極限における厳密解を全階・指数精度で記述する。近似解の平均曲率も全ての $C^k$ ノルムで指数減衰する。
abstract_source_url: "https://arxiv.org/abs/2608.29554"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.29554](https://arxiv.org/abs/2608.29554)
- **著者:** Jixiang Fu, Dekai Zhang
- **初回投稿日:** 2026-08-30
- **最終更新日:** 2026-08-30
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Donaldson–Uhlenbeck–Yau定理は安定正則ベクトル束上のHermitian Yang–Mills計量の存在を与えるが、計量の具体的な漸近形までは与えない。本論文は、大Kähler極限でスペクトル被覆から作った近似計量が厳密解をどれほど正確に捉えるかを問う。

対象は一-dimensional complex tori $B,T$ の積 $X=B\times T$ と、面積がそれぞれ $\varepsilon^{-1},\varepsilon$ となる積Kähler計量 $\omega_\varepsilon$ である。スペクトル二重被覆から得る $c_1(V)=0$ の安定階数2束 $V$ 上で近似計量 $H_{0,\varepsilon}$ と厳密解 $H_{1,\varepsilon}$ を比較する。

主結果は、正規化後の相対自己準同型 $H_\varepsilon=H_{0,\varepsilon}^{-1}H_{1,\varepsilon}$ が恒等写像へ全階で指数収束することである。これは存在定理を越えて、厳密計量の定量的な漸近モデルを与える。

## 背景と問題設定

分岐点の外では極限計量をスペクトルデータから明示できるが、分岐点では特異となる。そこで非線形動径方程式の滑らかな局所HYMモデルを貼り合わせ、跡成分を除く共形正規化によって大域的な $H_{0,\varepsilon}$ を作る。

## 主結果

### 厳密解への指数近似（Theorem 1.1）

$\det H_\varepsilon=1$ と正規化すると、任意の非負整数 $k$ に対して $C_k,c_k>0$ が存在し、十分小さい $\varepsilon>0$ で

$$
\|H_\varepsilon-\operatorname{Id}\|_{C^k}\leq C_k e^{-c_k/\varepsilon}
$$

が成り立つ。すなわち $H_{0,\varepsilon}$ は厳密HYM計量の全階指数精度の漸近モデルである。

### 近似計量の平均曲率（Theorem 1.2）

任意の $k$ に対して

$$
\|\Lambda_{\omega_\varepsilon}\Theta(H_{0,\varepsilon})\|_{C^k}
\leq C_k e^{-c_k/\varepsilon}
$$

が成り立つ。誤差は固定された貼り合わせ環状領域だけに支えをもつ。

## 証明の見取り図

局所動径解と特異極限解の差に最大値原理を適用し、貼り合わせ領域で指数減衰を得る。大域比較ではHYM方程式から $\operatorname{Tr}H_\varepsilon$ の微分不等式を作り、退化計量に適応したSobolev不等式とMoser反復を使う。安定束の単純性による固定Poincaré型不等式で平均成分を制御し、$C^0$ 評価から楕円型評価で全階へ進む。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.29554](https://arxiv.org/abs/2608.29554)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
