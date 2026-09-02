---
layout: paper
title: "New extremal Kähler metrics on projective bundles"
title_ja: "射影束上の新しいextremal Kähler計量"
authors: "Simon Jubert"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  Consider a holomorphic vector bundle $E$ over a compact complex curve $C$ which decomposes as a sum of stable vector bundles. For the projectivization $\mathbb{P}(E)$, we prove that the existence of a compatible extremal almost Kähler (aK) metric of involutive type in the sense of Lejmi is equivalent to the existence of a Calabi extremal Kähler metric. This result rests on the Yau--Tian--Donaldson correspondence in terms of the moment polytope $Δ$ for $\mathbb{P}(E)$, proved by the author and Yin in a previous work. The main advantage is that compatible extremal aK metrics of involutive type are solutions to a second-order linear PDE, rather than a fourth-order nonlinear PDE for Calabi's extremal Kähler metrics. As an application, we prove that when $E$ has rank $4$ and $C$ is an elliptic curve or the projective line, $\mathbb{P}(E)$ is a Calabi dream manifold, i.e. admits an extremal Kähler metric in every Kähler class.
topic: differential-geometry
tags:
  - csck-extremal-kahler-metrics
  - k-stability
  - vector-bundles-sheaves
arxiv_id: "2609.01094v1"
arxiv_url: "https://arxiv.org/abs/2609.01094"
arxiv_submitted: "2026-09-01"
arxiv_updated: "2026-09-01"
summary: >-
  安定束の直和として分解する曲線上の正則ベクトル束 $E$ について、$\mathbb{P}(E)$ 上のinvolutive type extremal almost Kähler計量の存在とCalabi extremal Kähler計量の存在が同値であることを示す。階数4で基底が楕円曲線または射影直線なら、$\mathbb{P}(E)$ は全Kähler類にextremal計量をもつCalabi dream manifoldとなる。
abstract_en: ""
summary_en: >-
  This work converts an extremal-metric existence problem on projective bundles over curves into a tractable equation on a moment simplex. For bundles splitting into stable summands, an involutive extremal almost Kähler metric forces weighted uniform K-stability and hence a genuine Calabi extremal Kähler metric. Together with the converse implications, this gives a three-way equivalence among metric and stability conditions. A rank-four construction produces projective bundles carrying extremal metrics in every Kähler class.
abstract_ja: >-
  コンパクト複素曲線上で安定ベクトル束の直和に分解する正則ベクトル束 $E$ を考える。射影化 $\mathbb{P}(E)$ について、Lejmiの意味でinvolutive typeのcompatible extremal almost Kähler計量が存在することと、Calabi extremal Kähler計量が存在することが同値である。応用として、$E$ の階数が4で基底が楕円曲線または射影直線なら、$\mathbb{P}(E)$ はすべてのKähler類にextremal Kähler計量をもつことを示す。
abstract_source_url: "https://arxiv.org/abs/2609.01094"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.01094](https://arxiv.org/abs/2609.01094)
- **著者:** Simon Jubert
- **初回投稿日:** 2026年9月1日
- **最終更新日:** 2026年9月1日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

extremal Kähler計量の存在はrelative uniform K-stabilityで特徴づけられるが、一般にはtest configurationをすべて検査することが難しい。本論文は曲線上の射影束に大きな対称性を利用し、問題をmoment polytope上の安定性へ移す。

$E\to C$ が安定ベクトル束の直和に分解するとき、$\mathbb{P}(E)$ のmoment polytopeは標準単体となる。involutive typeのalmost Kähler構造は単体上の行列値函数 $H$ で記述され、そのextremal条件は4階非線形方程式ではなく2階線形偏微分方程式になる。

主定理は、このalmost Kähler解からpolytopeのweighted uniform K-stabilityを導く。既知のYau–Tian–Donaldson対応と合わせることで、almost Kähler解、Calabi extremal Kähler計量、安定性の三条件が同値になる。

階数4の場合には方程式を代数方程式系へ落とし、楕円曲線または $\mathbb{P}^1$ 上の射影束が全Kähler類にextremal計量をもつことを証明する。

## 背景と問題設定

固定したKähler類でCalabi extremal計量を直接探す問題は4階非線形である。ここでは $v,w$ を射影束の位相的データから定まる函数として、単体 $\Delta$ 上で

$$
\sum_{i,j=1}^{\ell}(H_{ij}v)_{,ij}=vw
$$

を解く。この線形化が、存在判定を具体化する利点である。

## 主結果

### almost Kähler計量から安定性へ（Theorem A）

$E\to C$ が安定ベクトル束の直和に分解し、$\mathbb{P}(E)$ にcompatible involutive extremal almost Kähler計量が存在するなら、moment polytope $\Delta$ は $(v,w)$-uniformly K-stableである。

### 三条件の同値（Corollary A）

同じ仮定の下で、固定Kähler類におけるCalabi extremal Kähler計量の存在、compatible involutive extremal almost Kähler計量の存在、$\Delta$ の $(v,w)$-uniform K-stabilityは同値である。

### 階数4のCalabi dream manifold（Corollary B）

$E$ が楕円曲線または射影直線上の階数4の安定束の直和なら、$\mathbb{P}(E)$ はすべてのKähler類にextremal Kähler計量をもつ。

## 証明の見取り図

Theorem Aでは、almost Kähler解から凸函数に対する安定性不等式を得る。境界で重み $v$ が消え得るため、重み付き測度に関する $L^1$ compactnessを新たに用いる。Corollary Aはこの安定性と、射影束について既に得られているmoment polytope版Yau–Tian–Donaldson対応を接続する。

Corollary Bでは $vH_{ij}$ をmoment座標の5次多項式として選び、線形偏微分方程式を代数方程式系に変換する。Introductionは、この部分にcomputer-assisted computationを用いることを明記している。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.01094](https://arxiv.org/abs/2609.01094)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem A; Corollaries A, B
- **論文構成の説明:** Introduction, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
