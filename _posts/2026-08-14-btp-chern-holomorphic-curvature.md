---
layout: paper
title: "Bismut-Torsion-Parallel Hermitian Manifolds With Constant Chern Holomorphic Sectional Curvature"
title_ja: "一定 Chern 正則断面曲率をもつ Bismut 捩率平行 Hermite 多様体"
authors: "Haohao Wang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  A well-known conjecture in complex geometry states that a compact Hermitian manifold with constant
  Chern holomorphic sectional curvature must be Kähler when the constant is nonzero and Chern flat
  when the constant is zero. The conjecture is known in complex dimension two and in several special
  classes in higher dimensions. For Hermitian metrics with Bismut-parallel torsion, the non-balanced
  case and the balanced threefold case were established by Chen--Zheng, while the balanced fourfold
  case was settled recently by Wang--Zheng. In this article, we prove the nonzero case for balanced
  Bismut-torsion-parallel Hermitian manifolds in every complex dimension. As a corollary, we confirm
  that a compact BTP Hermitian manifold with Chern holomorphic sectional curvature is a nonzero
  constant, then $g$ is Kähler.
topic: differential-geometry
tags:
  - curvature
  - chern-classes
arxiv_id: "2608.13386v1"
arxiv_url: "https://arxiv.org/abs/2608.13386"
arxiv_submitted: "2026-08-13"
arxiv_updated: "2026-08-13"
summary: >-
  一定で非零の Chern 正則断面曲率をもつ Hermite 計量がいつ Kähler になるかを、Bismut 捩率平行という条件の下で研究する。balanced な任意の複素次元で捩率が消えることを点ごとの Lie 代数論で証明し、既知の non-balanced 結果と合わせて compact BTP の場合の予想を解決する。
abstract_en: ""
summary_en: >-
  The paper studies a rigidity problem for Hermitian metrics whose Bismut torsion is parallel. It proves that a balanced metric in this class, in any complex dimension at least two, has zero torsion whenever its Chern holomorphic sectional curvature is a nonzero constant. The conclusion is local and does not require compactness or completeness. Combined with earlier work on the non-balanced case, the result establishes Kählerness for compact BTP metrics under the same nonzero curvature condition.
abstract_ja: >-
  非零の一定 Chern 正則断面曲率をもつ compact Hermite 多様体は Kähler になる、という予想を Bismut 捩率平行（BTP）計量について調べる。balanced BTP 三次元・四次元で知られていた結果を任意次元へ拡張し、balanced、$\nabla^bT=0$、$H^c\equiv c\ne0$ なら Chern 捩率 $T$ が消えることを示す。証明は点ごとの有限次元 Lie 代数論で、compact 性や完備性を必要としない。既知の non-balanced BTP の結果と合わせ、compact BTP の非零曲率の場合を解決する。
abstract_source_url: "https://arxiv.org/abs/2608.13386"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2608.13386](https://arxiv.org/abs/2608.13386)
- **著者:** Haohao Wang
- **初回投稿日・最終更新日:** 2026年8月13日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler 計量では正則断面曲率が曲率テンソル全体を決め、一定曲率の完備多様体は複素空間形になる。非 Kähler Hermite 計量では Chern 曲率の対称性が弱く、Chern 正則断面曲率だけでは曲率全体を復元できない。この差が一定曲率から Kähler 性を導く問題を難しくする。

本論文は Bismut 接続の捩率が平行な BTP 計量に対象を絞る。non-balanced の場合は既知であり、balanced の場合も複素次元3と4で解決されていたが、高次元が残っていた。

主定理は balanced BTP 計量について、Chern 正則断面曲率が非零定数なら捩率が恒等的に消えることを任意次元で示す。結論は点ごとの議論から従うため、compact 性・完備性・斉次性や分類定理を仮定しない。

曲率ゼロの場合には非 Kähler な Chern-flat BTP 例が存在するため、$c\ne0$ は本質的である。したがって本論文が解決するのは予想の非零曲率部分であり、零曲率部分を Kähler 性へ強めるものではない。

## 背景と問題設定

$T^{1,0}M$ の非零ベクトル $X$ に対し Chern 正則断面曲率は

$$
H^c(X)=\frac{R^c(X,\overline X,X,\overline X)}{\lVert X\rVert^4}
$$

で定義される。BTP 条件は Chern 捩率 $T$ を用いて $\nabla^bT=0$ と書ける。balanced 条件は Gauduchon 捩率1形式の消滅、点ごとの捩率 Lie 代数では unimodular 性に対応する。

## 主結果

### 主定理（Theorem 1.2）

複素次元 $n\ge2$ の balanced Hermite 多様体 $(M^n,J,g)$ が

$$
\nabla^bT=0,\qquad H^c\equiv c\ne0
$$

を満たすなら $T=0$ であり、したがって $g$ は Kähler である。

### compact BTP への帰結（Corollary 1.3）

compact BTP Hermite 多様体の Chern 正則断面曲率が非零定数なら、その計量は Kähler である。これは主定理と Chen–Zheng による non-balanced BTP の結果を合わせた帰結である。

## 証明の見取り図

点 $p$ で $V=T_p^{1,0}M$ とし、$[x,y]=T_p(x,y)$ と置く。BTP 恒等式によりこれは複素 Lie 括弧となり、Bismut 曲率作用素はその導分になる。balanced 性は $\operatorname{tr}(\operatorname{ad}_x)=0$、一定 Chern 曲率条件は曲率を定数 $c$ と括弧の二次式から復元する関係を与える。

有限次元の議論は三段階である。曲率導分の縮約から半単純商を排除して可解性を得て、Lie の定理と随伴重みの不変性から非冪零な可解代数を排除する。最後に非零冪零 Lie 代数の中心方向へ曲率恒等式を適用し、中心値をもつ括弧成分、続いて括弧全体を消す。

## 原論文との対応
- **Abstractページ:** [arXiv:2608.13386](https://arxiv.org/abs/2608.13386)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Conjecture 1.1, Theorem 1.2, Corollary 1.3
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
