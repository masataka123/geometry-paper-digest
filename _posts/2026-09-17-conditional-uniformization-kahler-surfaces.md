---
layout: paper
title: "Conditional Uniformization of Kähler Surfaces"
title_ja: "Kähler曲面の条件付き一意化"
authors: "Jingcao Wu"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove that a complete noncompact Kähler surface with nonnegative Ricci and nonnegative quadratic orthogonal bisectional curvature is contractible, and hence homeomorphic to $\mathbb{R}^4$, if it is simply connected at infinity. Under positive bisectional curvature, this removes the contractibility assumption from the conditional uniformization theorem of Datar--Pingali--Seshadri: strong Steinness and simple connectivity at infinity suffice to identify the surface biholomorphically with $\mathbb{C}^2$. We also derive bounded-gradient strictly plurisubharmonic exhaustions and uniform holomorphic kernel estimates for complete $U(n)$-invariant Kähler metrics on $\mathbb{C}^n$ with nonnegative bisectional curvature.
topic: differential-geometry
tags:
  - curvature
  - noncompact-kahler-geometry
  - stein-geometry
  - uniformization
  - fundamental-groups
arxiv_id: "2609.18506v1"
arxiv_url: "https://arxiv.org/abs/2609.18506"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  無限遠で単連結な完備非コンパクトKähler曲面について、非負Ricci曲率と非負二次直交双正則断面曲率から可縮性と $\mathbb R^4$ への同相を導く。正の双正則断面曲率の下では、強Stein性を加えると可縮性を別に仮定せず $\mathbb C^2$ への双正則同型が従うため、曲面版の条件付き一意化定理の仮定が一つ除かれる。
abstract_en: ""
summary_en: >-
  The paper studies complete noncompact Kähler surfaces through curvature and topology at infinity. It shows that nonnegative Ricci curvature together with nonnegative quadratic orthogonal bisectional curvature and simple connectivity at infinity forces contractibility and the topology of four-dimensional Euclidean space. For positive bisectional curvature, this topological conclusion removes a hypothesis from a conditional biholomorphic uniformization theorem. The paper also obtains quantitative exhaustion and weighted-kernel statements for rotationally symmetric Kähler metrics.
abstract_ja: >-
  非負Ricci曲率と非負二次直交双正則断面曲率をもち、無限遠で単連結な完備非コンパクトKähler曲面は可縮であり、$\mathbb R^4$ と同相になる。特に正の双正則断面曲率の下では、強Stein性と無限遠での単連結性から $\mathbb C^2$ への双正則同型が従う。また $\mathbb C^n$ 上の完備 $U(n)$ 不変Kähler計量に対し、有界勾配をもつ強多重劣調和枯渇関数と一様な正則核評価を与える。
abstract_source_url: "https://arxiv.org/abs/2609.18506"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18506](https://arxiv.org/abs/2609.18506)
- **著者:** Jingcao Wu
- **初回投稿日・最終更新日:** 2026年9月16日
- **主分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yauの一意化予想は、正の双正則断面曲率をもつ完備非コンパクトKähler多様体が複素Euclid空間と双正則同型かを問う。曲面についてDatar–Pingali–Seshadriの条件付き定理は、強Stein性、可縮性、無限遠での単連結性を仮定していた。本論文は曲率と無限遠の位相から可縮性を導き、この仮定を独立に置く必要がないことを示す。

中心となる位相的結果は、非負Ricci曲率と非負二次直交双正則断面曲率（NQOBC）を備え、無限遠で単連結な完備非コンパクトKähler曲面が可縮であるというものである。さらにFreedmanの認識定理により、その基礎位相多様体は $\mathbb R^4$ と同相になる。ただし微分同相までは主張していない。

正の双正則断面曲率の場合、この可縮性を既存の条件付き一意化定理へ入力する。したがって強Stein性と無限遠での単連結性だけで $X\simeq\mathbb C^2$ が得られる。実断面曲率がコンパクト集合の外で非負なら、Busemann関数から強Stein性も確保される。

別の結果として、$\mathbb C^n$ 上の完備 $U(n)$ 不変Kähler計量に対し、計量の下界、有界勾配をもつ強多重劣調和枯渇関数、有限次多項式からなる重み付き正則関数空間の核を具体化する。

## 背景と問題設定

無限遠で単連結（SCI）とは、任意のコンパクト集合 $K$ に対し、十分大きいコンパクト集合 $L$ の外の閉曲線が $K$ の外で可縮になる性質である。曲率条件NQOBCは、任意のunitary frameと実数列 $(a_\alpha)$ に対して

$$
\sum_{\alpha,\beta}R_{\alpha\bar\alpha\beta\bar\beta}(a_\alpha-a_\beta)^2\ge0
$$

を要求する。これは非負双正則断面曲率より弱い条件である。

## 主結果

### 可縮性定理（Theorem 1.1）

完備非コンパクトKähler曲面 $(X,g)$ が $\operatorname{Ric}\ge0$、$\operatorname{NQOBC}\ge0$、SCIを満たすなら、$X$ は可縮で一つのendをもつ。系として $X$ は $\mathbb R^4$ と同相になる。

### 基本群とend（Theorems 1.2, 1.3）

任意次元で、$\operatorname{Ric}\ge0$ とSCIから $\pi_1(X)=0$ およびone-endednessが従う。曲面では $\operatorname{BK}\ge0$、単連結性、$H^1_\infty(X;\mathbb R)=0$ からも可縮性が従う。

### 条件付き一意化（Corollaries 1.5, 1.6）

$\operatorname{BK}>0$、SCI、強Stein性を満たす完備非コンパクトKähler曲面は $\mathbb C^2$ と双正則同型である。さらにコンパクト集合の外で実断面曲率が非負なら、強Stein性も結論できる。

## 証明の見取り図

Sormaniのloops-to-infinityと二重被覆分裂をCheeger–Gromoll分裂定理およびKähler構造と組み合わせ、SCIの下で基本群を消す。次にNQOBCが $(1,1)$-形式のBochner公式に与える非負性から $L^2$ 調和2形式を消去し、end cohomology、普遍係数定理、Poincaré双対性で整係数acyclicityを導く。単連結性とHurewicz–Whiteheadの議論が可縮性を与える。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18506](https://arxiv.org/abs/2609.18506)
- **Introduction:** Section 1, pp. 1–4
- **主要結果:** Theorems 1.1–1.4, 1.7; Corollaries 1.5–1.6
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
