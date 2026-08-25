---
layout: paper
title: "On the existence of minimizer on a log Fano cone singularity"
title_ja: "log Fano錐特異点上の最小化付値の存在"
authors: "Donghyeon Kim"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove that if $x\in (X,Δ,\mathbb{T})$ is a log Fano cone singularity over an uncountable algebraically closed field, and $ν_0$ is a $\mathbb{T}$-invariant valuation with center $x$ and $A_{X,Δ}(ν_0)<\infty$, then the value $$ δ(X,Δ;ν_0):=\inf_{ν\in \mathrm{Val}^{\mathbb{T},*}_{X,\ni x}}\frac{A_{X,Δ}(ν)}{S(ν_0;ν)}$$ admits a minimum. The proof uses the generic limit argument. Note that there is a counterexample if we discard the log Fano cone structure.
topic: algebraic-geometry
tags:
  - singularities
  - fano-varieties
  - k-stability
arxiv_id: "2608.23019v1"
arxiv_url: "https://arxiv.org/abs/2608.23019"
arxiv_submitted: "2026-08-24"
arxiv_updated: "2026-08-24"
summary: >-
  log Fano錐特異点の局所delta不変量を定める下限が、トーラス不変な準monomial付値によって達成されることを示す。log Fano錐構造を外すと二次元でも反例があるため、局所K安定性に固有の存在定理である。
abstract_en: >-
  We prove that if $x\in (X,Δ,\mathbb{T})$ is a log Fano cone singularity over an uncountable algebraically closed field, and $ν_0$ is a $\mathbb{T}$-invariant valuation with center $x$ and $A_{X,Δ}(ν_0)<\infty$, then the value $$ δ(X,Δ;ν_0):=\inf_{ν\in \mathrm{Val}^{\mathbb{T},*}_{X,\ni x}}\frac{A_{X,Δ}(ν)}{S(ν_0;ν)}$$ admits a minimum. The proof uses the generic limit argument. Note that there is a counterexample if we discard the log Fano cone structure.
summary_en: ""
abstract_ja: >-
  非可算代数閉体上のlog Fano錐特異点 $x\in(X,\Delta,\mathbb T)$ と、中心が $x$ で有限log discrepancyを持つ $\mathbb T$ 不変付値 $\nu_0$ を考える。局所delta不変量を定める付値上の下限が実際に最小値として達成されることを証明する。証明にはgeneric limitを用い、log Fano錐構造を仮定しなければ反例が存在する。
abstract_source_url: "https://arxiv.org/abs/2608.23019"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.23019](https://arxiv.org/abs/2608.23019)
- **著者:** Donghyeon Kim
- **初回投稿日・最終更新日:** 2026年8月24日
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

付値で定義される不変量について、下限を実現する付値の存在はK安定性の安定退化問題と関係する。log canonical threshold、正規化局所体積、大域的alpha・delta不変量では最小化付値の存在が知られているが、局所delta不変量では中心を閉点に固定しただけでは達成が期待できない場合がある。

本論文はlog Fano錐特異点 $x\in(X,\Delta,\mathbb T)$ と有限log discrepancyを持つ $\mathbb T$ 不変付値 $\nu_0$ に対し、中心が $x$ へ特殊化する付値まで許した局所delta不変量を扱う。その下限が $\mathbb T$ 不変な準monomial付値によって達成されることを示す。

従来は $\nu_0$ がReebベクトルのweight付値である場合に結果が知られていた。ここでは任意の上記 $\nu_0$ へ拡張し、generic limit法を適用する際の可算性と降下の問題を解決する。

log Fano錐条件は単なる技術的仮定ではない。これを除けば二次元でも反例があり、formal filtrationを座標環へ降下できないことが証明法の破綻を説明する。

## 背景と問題設定

局所delta不変量は

$$
\delta(X,\Delta;\nu_0)
=\inf_{\nu\in\operatorname{Val}^{\mathbb T,*}_{X,\ni x}}
\frac{A_{X,\Delta}(\nu)}{S(\nu_0;\nu)}
$$

である。分子はlog discrepancy、分母は基準付値 $\nu_0$ に相対的な期待消滅量であり、中心が $x$ へ特殊化する $\mathbb T$ 不変付値を走る。

## 主結果

### 主定理（Theorem 1.1）

$k$ を非可算代数閉体、$x\in(X,\Delta;\mathbb T)$ を $n$ 次元log Fano錐特異点とする。$\nu_0\in\operatorname{Val}^{\mathbb T,*}_{X,x}$ が $A_{X,\Delta}(\nu_0)<\infty$ を満たすなら、ある $\mathbb T$ 不変準monomial付値 $\nu'$ が存在して

$$
\delta(X,\Delta;\nu_0)
=\frac{A_{X,\Delta}(\nu')}{S(\nu_0;\nu')}
$$

となる。Reeb weight付値に限られていた既知結果を一般の $\mathbb T$ 不変付値へ広げる。

## 証明の見取り図

Blum--Jonsson型のgeneric limit法に従うが、既存議論で用いられる命題に直接対応する結果がない。そこで $(X,\Delta,\mathbb T)$ と $\nu_0$ の全データを可算代数閉部分体へ降下し、Introductionで挙げられる補題を使って必要なgeneric limitの性質を回復する。log Fano錐構造は得られたformal filtrationを元の座標環へ降下する段階で本質的に働く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.23019](https://arxiv.org/abs/2608.23019)
- **Introduction:** Section 1, pp. 1--2
- **主要定理:** Theorem 1.1
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
