---
layout: paper
title: "Asymptotic Chow stability of uniformly K-stable toric varieties"
title_ja: "一様K安定トーリック多様体の漸近Chow安定性"
authors: "King leung Lee, Naoto Yotsutani"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  For a polarized toric variety, we provide a sufficient criterion ensuring that a uniformly K-stable polarized toric variety $(X,L)$ is asymptotically Chow polystable, under the assumption that the obstruction to asymptotic Chow semistability (the Futaki-Ono invariant) vanishes. Our approach is based on a detailed study of triangulations of neighborhoods of the vertices of the associated moment polytope $\Delta$. As an application, we prove that every uniformly K-stable polarized smooth toric variety $(X,L)$ with vanishing Futaki-Ono invariant is asymptotically Chow polystable.
topic: algebraic-geometry
tags:
  - k-stability
  - csck-extremal-kahler-metrics
  - toric-geometry
arxiv_id: "2405.06883v2"
arxiv_url: "https://arxiv.org/abs/2405.06883v2"
arxiv_submitted: "2024-05-11"
arxiv_updated: "2026-06-02"
summary: >-
  一様K安定な偏極トーリック多様体について、Futaki–Ono不変量が消え、moment polytopeの各頂点錐がsmallなsemi-canonical triangulationをもてば漸近Chow polystableであることを示す。特に滑らかな偏極トーリック多様体では三角形分割条件を解消し、一様K安定性とFutaki–Ono不変量の消滅から漸近Chow polystabilityを組合せ論的に導く。
abstract_en: ""
summary_en: >-
  The paper relates uniform K-stability to asymptotic Chow polystability for polarized toric varieties. It gives a sufficient criterion formulated through the vanishing of Futaki–Ono invariants and controlled triangulations of every vertex cone of the moment polytope. The proof is combinatorial and studies lattice-point approximations near the vertices. For smooth polarized toric varieties, the triangulation condition is automatic in the required form, yielding asymptotic Chow polystability from uniform K-stability and vanishing obstruction.
abstract_ja: >-
  偏極トーリック多様体について、一様K安定性と、漸近Chow半安定性の障害であるFutaki–Ono不変量の消滅から、漸近Chow polystabilityを保証する十分条件を与える。方法は対応するmoment polytopeの頂点近傍の三角形分割を詳しく調べるものである。応用として、Futaki–Ono不変量が消える一様K安定な滑らかな偏極トーリック多様体はすべて漸近Chow polystableであることを示す。
abstract_source_url: "https://arxiv.org/abs/2405.06883v2"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2405.06883v2](https://arxiv.org/abs/2405.06883v2)
- **著者:** King leung Lee, Naoto Yotsutani
- **初回投稿日:** 2024年5月11日
- **最終更新日:** 2026年6月2日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

cscK計量の存在に対応する一様K安定性と、射影埋め込みのGIT安定性である漸近Chow安定性は密接に関連する。しかし自己同型群をもつ場合、Chow側には高次Futaki不変量、トーリックの場合には同値なFutaki–Ono不変量という追加の障害が現れる。

本論文は、偏極トーリック多様体について、一様K安定性とFutaki–Ono不変量の消滅に加え、moment polytopeの各頂点錐にsmallなsemi-canonical triangulationが存在すれば、漸近Chow polystableになることを示す。

滑らかなトーリック多様体では、必要な頂点錐の組合せ論的条件が満たされる。したがって、一様K安定でFutaki–Ono不変量がすべて消える滑らかな偏極トーリック多様体は漸近Chow polystableである。

既知のcscK存在定理とMabuchi–Futakiの結果を経由すれば同種の結論は得られるが、本論文の狙いはmoment polytopeの三角形分割から直接導くことにある。以前の方針で残っていた頂点近傍の技術的障害を、small polytopeとsemi-canonical triangulationの導入により解決する。

## 背景と問題設定

moment polytope $\Delta$ に対応する偏極トーリック多様体の一様K安定性は、凸関数 $f$ に対する

$$
L_a(f)\geq \lambda\int_{\partial\Delta}f(x)\,d\sigma,
\qquad
L_a(f)=\int_{\partial\Delta}f(x)\,d\sigma-a\int_\Delta f(x)\,d\mu,
$$

$$
a=\frac{\operatorname{vol}(\partial\Delta,d\sigma)}{\operatorname{vol}(\Delta)}
$$

という不等式で表される。$\lambda=0$ はK半安定性に対応する。

他方、Futaki–Ono不変量は、正整数 $k$ とaffine関数 $\ell$ に対して

$$
\operatorname{FO}(\ell;k)=
\frac{1}{|k\Delta\cap\mathbb Z^n|}\sum_{p\in k\Delta\cap\mathbb Z^n}\ell(p)
-\frac{1}{\operatorname{vol}(k\Delta)}\int_{k\Delta}\ell(x)\,d\mu
$$

と定義され、格子点平均と体積平均のずれを測る。これが全て消えることが漸近Chow半安定性の必要条件である。

## 主結果

### 頂点錐による十分条件（Theorem 1.4 = Theorem 5.12）

整数polytope $\Delta$ をもつ偏極トーリック多様体 $(X,L)$ が、(1) 一様K安定、(2) 全Futaki–Ono不変量が消滅、(3) $\Delta$ の各頂点錐がsmallなsemi-canonical triangulationをもつ、という三条件を満たすとする。このとき $(X,L)$ は漸近Chow polystableである。

三番目の条件は、頂点近傍で凸関数の積分を格子点和によって一様に制御するための組合せ論的仮定である。これにより、一様K安定性の境界積分評価をChow weightの有限レベル評価へ移す。

### 滑らかな場合（Corollary 1.5 = Corollary 5.13）

$(X,L)$ が滑らかな偏極トーリック多様体なら、上の三角形分割条件を別に仮定する必要がない。したがって、一様K安定性と全Futaki–Ono不変量の消滅だけから漸近Chow polystabilityが従う。これはIntroductionのQuestion 1.3への直接的な組合せ論的解答である。

## 証明の見取り図

各頂点 $p$ のvertex cone

$$
C(p)=\{p+\lambda(x-p)\mid x\in\Delta,\ \lambda\geq0\}
$$

を調べ、頂点近傍をsmall polytopeとsemi-canonical triangulationで分割する。Bramble–Hilbert型の評価によって凸関数の格子点和と積分の誤差を制御し、Futaki–Ono不変量の消滅でaffine成分のずれを除く。

残る項を一様K安定性の不等式で下から評価し、十分大きな $k$ におけるChow weightの非負性と閉軌道条件へ結びつける。滑らかな場合にはDelzantな頂点錐に必要なsemi-canonical triangulationを構成できるため、一般定理から系が従う。

## 原論文との対応

- **Abstractページ:** [arXiv:2405.06883v2](https://arxiv.org/abs/2405.06883v2)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.4; Corollary 1.5
- **論文構成の説明:** Introduction, p. 5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
