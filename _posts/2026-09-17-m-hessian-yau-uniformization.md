---
layout: paper
title: "An $m$-Hessian approach to Yau uniformization conjecture"
title_ja: "Yau一意化予想への$m$-Hessianアプローチ"
authors: "Truong Dinh Dat"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  We develop an \(m\)-Hessian approach to the construction of finite-Monge--Ampère weights on complete noncompact Kähler manifolds. Let \((M^n,g)\) be a complete noncompact Kähler manifold of complex dimension \(n\ge3\) with positive holomorphic bisectional curvature. The main new ingredient is a quantitative capacity mechanism based on lower-order complex Hessian operators. More precisely, we obtain decay estimates for suitable relative \(m\)-Hessian capacities on dyadic annuli and show that these estimates imply the summability of the top-degree Monge--Ampère masses of a uniformly Lipschitz plurisubharmonic exhaustion. Consequently, we construct a proper function $$ u\in PSH(M)\cap C^{0,1}(M) $$ such that $$ \int_M(dd^c u)^n<+\infty. $$ The key point is the passage from lower-order \(m\)-Hessian capacity decay to finite Monge--Ampère mass, which is not a formal consequence of \(m<n\) Hessian mass estimates. We then explain how this finite-Monge--Ampère weight fits into the weighted holomorphic-function and analytic Bezout framework for uniformization. In particular, the construction provides a higher-dimensional pluripotential-theoretic mechanism that complements recent surface results and opens a route toward uniformization under positive curvature in complex dimensions \(n\ge3\).
topic: several-complex-variables
tags:
  - pluripotential-theory
  - monge-ampere-equations
  - noncompact-kahler-geometry
  - curvature
  - uniformization
arxiv_id: "2609.18171v1"
arxiv_url: "https://arxiv.org/abs/2609.18171"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  正の双正則断面曲率をもつ複素次元 $n\ge3$ の完備非コンパクトKähler多様体上で、低階の複素Hessian容量の減衰から有限Monge–Ampère質量をもつLipschitz多重劣調和枯渇関数を構成する。これを重み付き正則関数と解析的Bézout評価へ接続し、高次元のYau一意化問題に向けた多重ポテンシャル論的機構を与える。
abstract_en: ""
summary_en: >-
  This work develops a lower-order complex Hessian capacity method for complete noncompact Kähler manifolds with positive holomorphic bisectional curvature. Decay on dyadic annuli is converted into a proper Lipschitz plurisubharmonic exhaustion with finite top Monge–Ampère mass. The resulting weight is then placed in a program involving weighted holomorphic functions, divisor estimates, and degree bounds. The construction supplies an analytic route toward higher-dimensional uniformization rather than merely assuming a finite-mass weight.
abstract_ja: >-
  正の双正則断面曲率をもつ複素次元3以上の完備非コンパクトKähler多様体を扱う。相対 $m$-Hessian容量の減衰を使い、有限の最高次Monge–Ampère質量をもつproperなLipschitz多重劣調和関数を構成する。この重みを重み付き正則関数と解析的Bézoutの枠組みに組み込み、高次元の一意化へ至るための新しい橋渡しを提示する。
abstract_source_url: "https://arxiv.org/abs/2609.18171"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18171](https://arxiv.org/abs/2609.18171)
- **著者:** Truong Dinh Dat
- **初回投稿日・最終更新日:** 2026年9月16日
- **主分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yauの一意化予想は、正の双正則断面曲率をもつ完備非コンパクトKähler多様体が $\mathbb C^n$ と双正則同型であると予想する。本論文は、直接大域座標を作る代わりに、曲率正値性を有限Monge–Ampère質量の重みへ変換する解析的経路を調べる。

複素Hessian作用素

$$
H_m(u)=(dd^cu)^m\wedge\beta^{n-m},\qquad 1\le m\le n
$$

の低階部分がもつ柔軟な容量評価を利用する。二進annulus上の相対 $m$-Hessian容量の減衰を非線形なcapacity–volume不等式と組み合わせ、最高次Monge–Ampère質量の総和可能性を導く。

その結果、properで一様Lipschitzな

$$
u\in\operatorname{PSH}(M)\cap C^{0,1}(M),\qquad
\int_M(dd^cu)^n<+\infty
$$

を構成する。$m<n$ のHessian質量の有限性だけから最高次質量の有限性は形式的には従わず、この昇格が新規な解析的段階である。

Introductionは、この重みから重み付きBergman・Hörmander理論、因子currentの比較、Bézout型次数評価へ進む構想も説明する。ただし有限質量だけでは一様Bergman評価やproperな正則写像の次数1は自動的に従わず、それらを別の解析的課題として明示している。

## 背景と問題設定

重み付きHilbert空間

$$
\mathcal H_q(M,u)=\left\{f\in\mathcal O(M):\int_M|f|^2e^{-qu}\,dV_g<\infty\right\}
$$

から十分な正則関数を作り、その零点因子を有限Monge–Ampère測度で制御することが狙いである。最終的にはproperな正則写像 $F:M\to\mathbb C^n$ の次数をBézout評価で抑え、次数1なら双正則性を得る。

## 主結果

### 有限Monge–Ampère質量をもつ枯渇関数

Introductionでは概略として次のように述べられている。複素次元 $n\ge3$、正の双正則断面曲率をもつ完備非コンパクトKähler多様体上で、相対 $m$-Hessian容量の定量的減衰を確立し、上記のproperな $u$ を構成する。

### 一意化への解析的連鎖

論文が提示する経路は

$$
\operatorname{Bisec}_g>0
\Longrightarrow m\text{-Hessian容量制御}
\Longrightarrow \int_M(dd^cu)^n<\infty
\Longrightarrow \text{重み付き正則関数とBézout評価}
$$

である。Abstractの主張は有限質量重みの構成と、この枠組みへの接続に重点があるため、本記事もそれを一意化予想そのものの無条件解決とは区別する。

## 証明の見取り図

大きな測地的annulusごとにLipschitz多重劣調和近似を作り、その $m$-Hessian質量を評価する。容量の減衰とcapacity–volume不等式によって各annulus上の最高次質量を可算和可能にする。その後はHörmander型重み付き $\bar\partial$ 評価とBergman核を用いて局所jetを実現する正則関数を作り、Poincaré–Lelong公式を通じて零点因子と $(dd^cu)^n$ を結ぶ構想である。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18171](https://arxiv.org/abs/2609.18171)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中の中心式:** finite Monge–Ampère mass, weighted Hilbert spaces, analytic Bézout chain
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
