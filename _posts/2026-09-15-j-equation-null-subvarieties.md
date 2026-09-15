---
layout: paper
title: "Finiteness of null subvarieties and optimal destabilizers for the J-equation"
title_ja: "J方程式の零部分多様体と最適不安定化部分多様体の有限性"
authors: "Junbang Liu"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AP
arxiv_abstract: >-
  Let $X$ be a compact Kähler manifold and $(\alpha,\beta)$ be a pair of Kähler classes. We show that when $(\alpha,\beta)$ is $J$-semistable, the collection of positive-dimensional irreducible $J$-null subvarieties is finite. We also obtain a uniform positive lower bound for the normalized $J$-slope of every irreducible non-$J$-null subvariety. As a corollary, we show that the collection of optimal destabilizers is finite when the stability threshold is nonpositive.
topic: differential-geometry
tags:
  - positivity
  - csck-extremal-kahler-metrics
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2609.14713v1"
arxiv_url: "https://arxiv.org/abs/2609.14713"
arxiv_submitted: "2026-09-13"
arxiv_updated: "2026-09-13"
summary: >-
  コンパクトKähler多様体上の $J$-semistable なKähler類の対について、正次元の既約 $J$-null 部分多様体が有限個しかないことを証明する。非null部分多様体の正規化 $J$-slopeには一様な正の隔たりがあり、安定性閾値が非正なら最適不安定化部分多様体も有限かつ存在する。
abstract_en: >-
  Let $X$ be a compact Kähler manifold and $(\alpha,\beta)$ be a pair of Kähler classes. We show that when $(\alpha,\beta)$ is $J$-semistable, the collection of positive-dimensional irreducible $J$-null subvarieties is finite. We also obtain a uniform positive lower bound for the normalized $J$-slope of every irreducible non-$J$-null subvariety. As a corollary, we show that the collection of optimal destabilizers is finite when the stability threshold is nonpositive.
summary_en: ""
abstract_ja: >-
  $X$ をコンパクトKähler多様体、$(\alpha,\beta)$ をKähler類の対とする。対が $J$-semistable なら、正次元の既約 $J$-null 部分多様体は有限個である。また、既約な非 $J$-null 部分多様体の正規化 $J$-slopeに一様な正の下界を与える。系として、安定性閾値が非正なら最適不安定化部分多様体の集合が有限であることを示す。
abstract_source_url: "https://arxiv.org/abs/2609.14713"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "http://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.14713](https://arxiv.org/abs/2609.14713)
- **著者:** Junbang Liu
- **初回投稿日:** 2026年9月13日
- **最終更新日:** 2026年9月13日
- **主分類・副分類:** math.DG（主分類）, math.AP（副分類）
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

$J$-equationは、コンパクトKähler多様体 $X$ 上の二つのKähler類 $(\alpha,\beta)$ に対し、$\omega\in\alpha$ を求める方程式である。可解性は交叉数による狭義不等式と結びつき、その等号を実現する部分多様体は滑らかな解を妨げる候補となる。

本論文は、非狭義の数値条件である $J$-nefness、すなわち $J$-semistabilityだけを仮定して、すべての正次元既約 $J$-null 部分多様体が有限であることを示す。さらに非null部分多様体の $J$-量には体積に比例する一様な正の下界があり、零となるものとそれ以外の間にgapが存在する。

この結果は、既知だった曲線・因子や三次元の場合を任意次元の中間次元へ拡張する。また安定性閾値が非正の場合には、最小の正規化slopeを実現する最適不安定化部分多様体が存在し、有限個しかなく、非最適なものとの間にも一様なgapがある。

## 背景と問題設定

$\chi\in\beta$ を固定すると、$J$-equationは

$$
n\omega^{n-1}\wedge\chi=c_{\alpha,\beta}\omega^n,
\qquad
c_{\alpha,\beta}=\frac{n\,\beta\alpha^{n-1}}{\alpha^n}
$$

である。$p$ 次元部分多様体 $V$ に対して

$$
J(V,\alpha,\beta)=\int_V\left(c_{\alpha,\beta}\alpha^p-p\beta\alpha^{p-1}\right)
$$

と置き、すべての固有な正次元 $V$ で $J(V,\alpha,\beta)\geq0$ となる条件を $J$-nefnessという。等号となる $V$ が $J$-null 部分多様体である。

## 主結果

### 零部分多様体の有限性（Theorem 2）

$(\alpha,\beta)$ が $J$-nefなら、null部分多様体は有限個である。さらに $(X,\alpha,\beta)$ のみに依存する $\delta>0$ が存在し、非nullな固有既約 $p$ 次元部分多様体 $V$ は

$$
J(V,\alpha,\beta)\geq\delta\int_V\beta^p
$$

を満たす。したがって小さい正規化slopeをもつ部分多様体は、有限個のnull部分多様体に限られる。

### 最適不安定化部分多様体（Theorem 3）

Introductionの記号で安定性閾値を

$$
\Gamma=\inf_{V\subsetneq X,\ 0<\dim V<n}
\frac{J(V,\alpha,\beta)}{(n-\dim V)\int_V\alpha^{\dim V}}
$$

とする。$\Gamma\leq0$ なら、最適不安定化部分多様体は空でなく、全次元を合わせても有限である。またある $\sigma>0$ が存在し、非最適な $V$ の正規化slopeは $\Gamma+\sigma$ 以上となる。$\Gamma\leq0$ の制約は射影空間の例が示すように本質的である。

## 証明の見取り図

各既約部分多様体 $Z$ に対し、真の解析部分集合 $E_Z$ の外にある低次元部分多様体へ一様な下界を与える補題が核心となる。$Z$ の解消上で二つのpullback類を独立な速度で摂動し、Chenの補助方程式とDemailly--Păunの対角mass concentrationから正カレントを構成する。局所potentialを正則化して固定Lelong level setの外で貼り合わせ、$E_Z$ の有限個の既約成分に帰納を反復することでTheorem 2を得る。最後に $\beta_0=\beta-\Gamma\alpha$ と類を変えてTheorem 3を $J$-nefの場合へ帰着する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.14713](https://arxiv.org/abs/2609.14713)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 2, 3
- **論文構成の説明:** Section 1.1, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
