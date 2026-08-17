---
layout: paper
title: "Correspondences for hyperkähler varieties with large Picard numbers"
title_ja: "Picard数の大きい超Kähler多様体とアーベル多様体の対応"
authors: "Ljudmila Kamenova, Abhinav Kumar"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this note, we explore the connection between hyperkähler manifolds with large Picard numbers and
  abelian varieties. In particular, we are interested in Morrison's solution to the (modified) Oda's
  conjecture: every K3 surface whose Picard group is large enough (in a certain precise sense) must be
  related via an algebraic correspondence to an abelian surface. We generalize this theorem to the
  case of known examples of hyperkähler manifolds such as pointed Hilbert schemes on K3 surfaces.
topic: algebraic-geometry
tags:
  - hyperkahler-geometry
  - hodge-theory
arxiv_id: "2607.09622v1"
arxiv_url: "https://arxiv.org/abs/2607.09622v1"
arxiv_submitted: "2026-07-10"
arxiv_updated: "2026-07-10"
summary: >-
  Picard数の大きいK3曲面をアーベル曲面と結ぶOda--Morrison型の対応を、射影的な$K3^{[n]}$型超Kähler多様体へ拡張する。超越格子が$U^3$へ有理的に埋め込めるという仮定の下で、超越Hodge構造を同一視するアーベル多様体との代数的対応を構成する。
abstract_en: >-
  In this note, we explore the connection between hyperkähler manifolds with large Picard numbers and abelian varieties. In particular, we are interested in Morrison's solution to the (modified) Oda's conjecture: every K3 surface whose Picard group is large enough (in a certain precise sense) must be related via an algebraic correspondence to an abelian surface. We generalize this theorem to the case of known examples of hyperkähler manifolds such as pointed Hilbert schemes on K3 surfaces.
summary_en: ""
abstract_ja: >-
  Picard数の大きい超Kähler多様体とアーベル多様体の関係を調べる。特に、Picard群が十分大きいK3曲面を代数的対応によってアーベル曲面と結ぶMorrisonの修正版Oda予想の解決を、K3曲面上の点のHilbertスキームに代表される既知の超Kähler多様体へ一般化する。
abstract_source_url: "https://arxiv.org/abs/2607.09622v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.09622v1](https://arxiv.org/abs/2607.09622v1)
- **著者:** Ljudmila Kamenova, Abhinav Kumar
- **初回投稿日:** 2026年7月10日
- **最終更新日:** 2026年7月10日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## 要約

Kummer K3曲面はアーベル曲面の${\pm1\}$商の解消として得られる。Morrisonの定理はこの関係を広げ、K3曲面$X$の超越格子$T(X)$が3個の双曲平面の直和$U^3$へ適切に埋め込めるなら、$X$をアーベル曲面と代数的対応で結べることを示した。

本論文は、同じ問いを高次元の超Kähler多様体に対して考える。対象は$K3^{[n]}$型の射影的超Kähler多様体であり、超越格子の有理的埋め込みを仮定して、あるアーベル多様体との対応が超越部分のHodge等長を誘導することを証明する。

論証ではまず$X$と同じ超越Hodge構造をもつK3曲面$S$を格子論と周期写像から作る。次に$X$を$S$上の安定層のMukaiモジュライ空間と結び、Hilbertスキーム$S^{[n]}$を介する対応とK3曲面に対するOda--Morrisonの定理を合成する。

Picard数だけで仮定を言い換えられる場合もある。$\rho(X)=20,21$なら埋め込み条件は自動的であり、$\rho(X)=19$では超越格子に等方ベクトルがあること、$\rho(X)=18$では2次元等方部分格子があることが十分条件として与えられる。

## 背景と問題設定

射影的超Kähler多様体$X$の超越格子は、Beauville--Bogomolov--Fujiki形式に関するNéron--Severi格子の直交補空間

$$
T(X)=\operatorname{NS}(X)^\perp
$$

である。既知の超Kähler多様体はK3曲面またはアーベル曲面上の層のモジュライ空間から生じ、Picard数が大きいと$T(X)$が小さくなる。このため、そのHodge構造をアーベル多様体のコホモロジーに埋め、幾何学的対応として実現できるかが中心問題となる。

## 主結果

### Oda--Morrison型対応（Theorem 1.3）

$X$を$K3^{[n]}$型の射影的超Kähler多様体とし、$U$を階数2の双曲格子とする。$\mathbb Q$格子の埋め込み

$$
\phi:T(X)\otimes\mathbb Q\hookrightarrow U^3\otimes\mathbb Q
$$

が存在すれば、あるアーベル多様体$A$と$X$から$A$への代数的対応が存在し、

$$
T(X)\otimes\mathbb Q\simeq T(A)\otimes\mathbb Q
$$

というHodge等長を誘導する。これはK3曲面に対するMorrisonの修正版Oda予想の解決を、$K3^{[n]}$型へ拡張する結論である。

### Picard数による具体的条件（Corollary 3.4）

IntroductionのRemark 1.4で予告される格子論的判定を用いると、上の対応は次の場合に得られる。

- $\rho(X)\in\{20,21\}$。
- $\rho(X)=19$で、$T(X)$が等方ベクトルをもつ。
- $\rho(X)=18$で、$T(X)$が2次元等方部分格子、すなわち$x^2=y^2=x\cdot y=0$となる$\mathbb Zx+\mathbb Zy$をもつ。

## 証明の見取り図

超越格子をK3格子へ原始的に埋め、周期写像の全射性によって$T(S)\simeq T(X)$となる射影的K3曲面$S$を得る。Markmanらの結果から$X$は$S$上の安定層のMukaiモジュライ空間に双有理であり、さらに$S^{[n]}$と$S$の間にはHilbert--Chow写像と対角サイクルから対応を作れる。

最後に、K3曲面$S$とアーベル曲面の間のOda--Morrison対応、および$X$と$S^{[n]}$の間の代数的対応を合成する。各段階が超越コホモロジー上のHodge等長を保つため、主定理の対応が得られる。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.09622v1](https://arxiv.org/abs/2607.09622v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3; Remarks 1.2, 1.4
- **論文構成の説明:** Sections 2–3, pp. 3–5で主定理の準備と証明を配置
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
