---
layout: paper
title: "Pointwise energy monotonicity for stable Higgs bundles"
title_ja: "安定Higgs束の各点エネルギー単調性"
authors: "Tianzhi Hu"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We study a conjecture of Qiongling Li concerning the pointwise monotonicity of the energy density along the $\mathbb C^*$-flow of stable $\mathrm{SL}(n,\mathbb C)$ Higgs bundles. We prove that the conjecture holds in rank two: for every stable $\mathrm{SL}(2,\mathbb C)$ Higgs bundle, the energy density is pointwise nondecreasing along the $\mathbb C^*$-orbit. In contrast, we show that this phenomenon is genuinely rank-dependent. For every rank $n\geq 3$, we construct stable $\mathrm{SL}(n,\mathbb C)$ Higgs bundles for which the energy density fails to be monotone along the $\mathbb C^*$-flow.
topic: differential-geometry
tags:
  - higgs-nonabelian-hodge
  - stability
  - hermite-einstein-metrics
arxiv_id: "2609.35278v1"
arxiv_url: "https://arxiv.org/abs/2609.35278"
arxiv_submitted: "2026-09-28"
arxiv_updated: "2026-09-28"
summary: >-
  安定 $\mathrm{SL}(2,\mathbb C)$-Higgs束では、$\mathbb C^*$-flowに沿う調和写像のエネルギー密度が各点で非減少であることを証明する。他方、任意の階数 $n\ge3$ で単調性を破る安定Higgs束を構成し、この現象が本質的に階数2に固有であることを示す。
abstract_en: ""
summary_en: >-
  The paper resolves a pointwise energy-monotonicity problem for the scaling flow on stable Higgs bundles. It proves monotonicity in rank two by controlling the logarithmic variation of the harmonic metric. Equality at a point where the Higgs field is nonzero forces a fixed-point structure. Explicit stable examples in every rank at least three show that both the monotonicity statement and a related domination conjecture fail beyond rank two.
abstract_ja: >-
  安定 $\mathrm{SL}(n,\mathbb C)$-Higgs束の $\mathbb C^*$-flowに沿うエネルギー密度について、階数2では各点単調非減少性が成り立つことを証明する。これに対し、任意の $n\ge3$ で単調性が破れる安定Higgs束を構成する。したがって単調性は階数に本質的に依存する。
abstract_source_url: "https://arxiv.org/abs/2609.35278"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.35278](https://arxiv.org/abs/2609.35278)
- **著者:** Tianzhi Hu
- **初回投稿日・最終更新日:** 2026年9月28日
- **主分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Riemann面上の安定Higgs束 $(E,\Phi)$ は調和計量をもち、$\Phi$ を $t\Phi$ に拡大すると調和写像のエネルギー密度 $e_t$ が変化する。Liの予想は、この密度が $t$ とともに各点で増加するというものである。

階数2では予想が正しい。しかも $\Phi(x)\ne0$ の点で変化率が消えるなら、もとのHiggs束は $\mathbb C^*$-作用の固定点である。ところが階数3以上では、nilpotent cone内に大きな $t$ でエネルギーが減少する反例が存在する。

## 背景と問題設定

$(E,t\Phi)$ の正規化された調和計量を $h_t$ とし、対数変化を

$$
\Gamma_t=t\,h_t^{-1}\partial_t h_t
$$

と置く。階数2では $\Gamma_t$ の固有値が $\gamma_t,-\gamma_t$ となるため、行列値問題をスカラーのBochner不等式へ還元できる。

## 主結果

### 階数2の単調性と剛性（Theorem 1.1）

次数0の安定 $\mathrm{SL}(2,\mathbb C)$-Higgs束について、すべての $x$ と $t>0$ に対し $\partial_t e_t(x)\ge0$ が成り立つ。$\Phi(x)\ne0$ かつ等号が一点で成立すれば、$(E,\Phi)$ は $\mathbb C^*$-fixed Higgs bundleである。

### 高階数の反例（Theorem 1.3）

種数 $g\ge2$ の任意のコンパクトRiemann面と $n\ge3$ に対し、安定で $\mathbb C^*$-fixedでないHiggs束と点 $p$ が存在し、ある $a_{0,n}>0$ について

$$
e_{n,t}(p)=a_{0,n}t^{-2(n-2)}+O(t^{-3(n-2)})
$$

となる。従って十分大きな $t$ で $\partial_t e_{n,t}(p)<0$ であり、単調性は破れる。

## 証明の見取り図

線形化したHitchin方程式から $\gamma_t>1$ の領域にスカラーBochner不等式を導き、最大値原理で $\|\Gamma_t\|_{\mathrm{op}}\le1$ を得る。等号の場合はparallel gradingが生じる。高階数では、明示的なゲージ変換後にnilpotent harmonic bundleへ収束する族を構成し、その漸近展開から負の変化率を読み取る。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.35278](https://arxiv.org/abs/2609.35278)
- **Introduction:** pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1 and 1.3, Proposition 1.2
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
