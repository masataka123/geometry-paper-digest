---
layout: paper
title: "Uniruledness and the sign of total scalar curvature"
title_ja: "単線織性と全スカラー曲率の符号"
authors: "Zehao Sha, Jian Wang"
arxiv_primary_category: "math.AG"
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: >-
  For every integer $n\ge3$, we construct a smooth projective manifold $X$ of complex dimension $n$ whose canonical bundle is not pseudoeffective, or equivalently, which is uniruled, but every Kähler metric has negative total scalar curvature. In particular, $X$ admits no Kähler metric of positive scalar curvature, while it admits a Riemannian metric of positive scalar curvature. Thus the equivalence between uniruledness and the existence of a Kähler metric with positive scalar curvature holds in complex dimensions one and two, but fails in higher dimensions.
topic: algebraic-geometry
tags:
- positivity
- curvature
- toric-geometry
arxiv_id: "2609.26640v1"
arxiv_url: "https://arxiv.org/abs/2609.26640"
arxiv_submitted: "2026-09-22"
arxiv_updated: "2026-09-22"
summary: >-
  複素次元 $n\geq3$ ごとに、単線織でありながら全てのKähler計量の全スカラー曲率が負となる滑らかな射影多様体を構成する。単線織性と正の全スカラー曲率をもつKähler計量の存在が同値だという予想への反例であり、Kähler計量と一般のRiemann計量の正スカラー曲率も分離する。
abstract_en: ''
summary_en: >-
  The authors construct smooth projective manifolds in every complex dimension at least three that are uniruled although all of their Kähler metrics have negative total scalar curvature. These examples disprove a proposed converse between uniruledness and Kähler metrics of positive total scalar curvature. Their underlying smooth manifolds nevertheless support Riemannian metrics of positive scalar curvature.
abstract_ja: >-
  各複素次元 $n\geq3$ で、標準束が擬有効でなく、したがって単線織である一方、全てのKähler計量の全スカラー曲率が負となる滑らかな射影多様体を構成する。この多様体は正スカラー曲率のKähler計量をもたないが、基礎となる滑らかな多様体は正スカラー曲率のRiemann計量をもつ。
abstract_source_url: "https://arxiv.org/abs/2609.26640"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.26640v1](https://arxiv.org/abs/2609.26640)
- **著者:** Zehao Sha, Jian Wang
- **初回投稿日・最終更新日:** 2026-09-22
- **主分類・副分類:** math.AG, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体では、標準束が擬有効でないことと単線織性が同値である。他方、Kähler計量の全スカラー曲率は第一Chern類とKähler類の交点数で決まり、正なら単線織性を導く。自然な逆問題は、単線織なら正の全スカラー曲率をもつKähler計量が存在するか、というものである。

曲線と曲面ではこの対応が成立するが、本論文は複素次元3以上で反例を構成する。例では $K_X$ は擬有効でないにもかかわらず、全Kähler類 $\alpha$ に対して $K_X\cdot\alpha^{n-1}>0$ となる。

したがって全てのKähler計量の全スカラー曲率が負であり、点ごとに非負なスカラー曲率をもつKähler計量も存在しない。それでも一般のRiemann計量には正スカラー曲率を実現でき、複素幾何的制約と滑らかな幾何の差も示される。

## 背景と問題設定

コンパクトKähler $n$-foldでは

$$
\int_X S(\omega)\omega^n
=2\pi n\,c_1(X)\cdot\alpha^{n-1}
=-2\pi n\,K_X\cdot\alpha^{n-1}
$$

である。従って正の全スカラー曲率は $K_X$ の非擬有効性を導く。本論文はYangの予想として定式化された逆向きを否定する。

## 主結果

### 高次元の反例（Theorem 1.2）

任意の整数 $n\geq3$ に対し、滑らかな射影 $n$-fold $X$ で次を満たすものが存在する。

1. $K_X\notin\operatorname{Psef}(X)$、同値に $X$ は単線織である。
2. 全ての $\alpha\in\operatorname{Kah}(X)$ に対して $K_X\cdot\alpha^{n-1}>0$ である。
3. $X$ は正スカラー曲率のRiemann計量をもつ。

特に (2) により、$X$ は非負スカラー曲率のKähler計量をもたない。

## 証明の見取り図

複素次元3では、条件を満たす滑らかな射影toric 3-foldから、単純正規交差する4本の因子に沿う次数27のabelian coverを構成する。Kummer理論と固有層分解で滑らかさ、コホモロジー、標準類の交点条件を制御する。高次元例はIntroductionが述べる拡張操作から得られ、正スカラー曲率Riemann計量は構成の位相的性質と既知の手法を組み合わせて示される。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.26640](https://arxiv.org/abs/2609.26640)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1.2
- **確認したarXivバージョン:** 2609.26640v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
