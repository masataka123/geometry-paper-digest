---
layout: paper
title: "The canonical submersion of $\\mathcal{S}$-manifolds and transverse Kähler-Einstein structures"
title_ja: "$\\mathcal{S}$-多様体の標準沈め込みと横断的Kähler–Einstein構造"
authors: "Ioannis Chrysikos"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - curvature
arxiv_id: "2608.08072v1"
arxiv_url: "https://arxiv.org/abs/2608.08072"
arxiv_submitted: "2026-08-08"
arxiv_updated: "2026-08-08"
summary: >-
  Sasaki幾何を高いCR余次元へ拡張する $\mathcal S$-多様体について、平行歪みtorsionを持つ特性接続のholonomyと標準沈め込みを調べる。基底および横断方向のKähler–Einstein条件を全空間の一般化η-Einstein条件と対応させ、特性接続のRicci平坦性を特徴づける。
abstract_en: ""
summary_en: >-
  The paper treats $\mathcal S$-manifolds as higher-CR-codimensional analogues of Sasakian manifolds equipped with a characteristic connection having parallel skew torsion. It establishes reducible but indecomposable special holonomy behavior and constructs a local canonical Riemannian submersion onto a Kähler manifold. Curvature identities identify the Kähler–Einstein condition downstairs with a generalized eta-Einstein condition upstairs and with transverse Kähler–Einstein geometry. As a consequence, Ricci-flatness of the characteristic connection is equivalent to a transverse Einstein constant equal to $4s$.
abstract_ja: >-
  $2n+s$ 次元の $\mathcal S$-多様体を、平行な完全反対称torsionを持つ幾何として研究する。特性接続のholonomyが可約だが分解不能な特殊型であることを示し、局所的にKähler多様体への標準Riemann沈め込みを構成する。基底のKähler–Einstein条件、全空間の一般化η-Einstein条件、横断的Kähler–Einstein条件の対応を確立し、特性接続のRicci平坦性が横断Einstein定数 $4s$ と同値であることを導く。
abstract_source_url: "https://arxiv.org/abs/2608.08072"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.08072v1](https://arxiv.org/abs/2608.08072)
- **著者:** Ioannis Chrysikos
- **初回投稿日・最終更新日:** 2026年8月8日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

完全反対称torsionを持つ計量接続はLevi-Civita接続と同じ測地線を保ちながら、非可積分な幾何構造に適合する。$\mathcal S$-多様体はSasaki多様体（$s=1$）をCR余次元 $s\ge1$ へ一般化し、特性接続

$$
\nabla=\nabla^g+\frac12T,\qquad T=\sum_{i=1}^s\eta_i\wedge d\eta_i
$$

を自然に備える。

本論文はこの特性接続のholonomyが可約でありながら、torsion付き幾何の局所積へは分解できないことを示す。また接束の水平・垂直分解から、任意の $\mathcal S$-多様体にKähler多様体を基底とする局所Riemann沈め込みを構成する。

この沈め込みの曲率公式により、基底のKähler–Einstein条件と全空間の一般化η-Einstein条件が一対一に対応する。さらに特性葉層の横断Kähler幾何を介して、η-Einstein $\mathcal S$-構造と横断的Kähler–Einstein計量が対応し、Sasaki幾何の古典的関係が任意のCR余次元へ拡張される。

## 背景と問題設定

平行歪みtorsionを持つ接続では、holonomy表現が可約でもde Rham分解定理のような局所積分解は一般に成立しない。本論文は $TM=\mathcal D\oplus\mathcal D^\perp$ をtorsionの安定化代数 $\mathfrak u(n)$ による標準分解として読み替え、垂直分布 $\mathcal D^\perp=\langle\xi_1,\ldots,\xi_s\rangle$ に沿う特性葉層と水平Kähler幾何を結ぶ。

コンパクト正則の場合、標準沈め込みは主トーラス束になるが、主要な対応は局所的沈め込みおよび横断幾何の言葉でも定式化される。

## 主結果

### Holonomyと標準沈め込み（Theorem 4.12ほか）

$\mathcal S$-多様体の特性接続は平行torsionを持ち、そのholonomyは可約だが幾何は分解不能で、special typeに属する。標準 $\mathfrak u(n)$-分解から局所沈め込み

$$
\pi:M^{2n+s}\longrightarrow N^{2n}
$$

が得られ、ファイバーは全測地的、基底 $N$ はKählerとなる。

### η-Einstein条件と横断Kähler–Einstein条件（Theorem 4.23）

Introductionでは概略として次のように述べられている。基底 $N$ がKähler–Einsteinであることと、全空間 $M$ が一般化η-Einstein条件を満たすことは同値である。さらにη-Einstein $\mathcal S$-構造は特性葉層の横断Kähler–Einstein計量と一対一に対応する。

### 特性接続のRicci平坦性

特性接続について $\operatorname{Ric}^{\nabla}=0$ であることは、横断Kähler計量がEinstein定数

$$
\lambda=4s
$$

を持つことと同値である。これは奇次元のSasakiの場合だけでなく、$\mathcal S$-構造が存在する偶数次元も含む。

## 証明の見取り図

torsion $T$ の安定化代数と $f$-構造が与える水平・垂直分解を比較し、標準沈め込み理論を適用する。次にO'Neill型の曲率関係と特性接続・Levi-Civita接続・横断接続のRicciテンソルの関係を計算し、基底のEinstein条件を全空間のη方向を含む式へ翻訳する。最後に横断計量との同一視を通じて、Ricci平坦条件を定数 $4s$ の横断Kähler–Einstein条件へ還元する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.08072](https://arxiv.org/abs/2608.08072)
- **Introduction:** Sections 1.1–1.5, pp. 1–6（主要結果の概観は1.2, pp. 2–4）
- **Introduction中で言及された主要結果:** Theorems 4.12, 4.14, 4.23; $\operatorname{Ric}^{\nabla}$-flat characterization
- **論文構成の説明:** Section 1.2, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
