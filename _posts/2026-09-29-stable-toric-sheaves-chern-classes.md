---
layout: paper
title: "Stable toric sheaves. I : Chern classes"
title_ja: "安定トーリック層 I：Chern類"
authors: "Carl Tipler"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We reduce Hartshorne's conjecture on indecomposable rank 2 vector bundles in the semistable case to the non-existence of smoothable rank 2 semistable toric sheaves on the projective space. We then study Chern classes for rank 2 torsion-free toric sheaves. For the reflexive ones, we derive a simple formula for the Chern polynomial, and in the general torsion-free case we introduce an iterative construction method based on elementary injections, allowing us to prescribe Chern classes. This yields infinite families of explicit examples on P4 and P5, and establishes existence on Pn for all n greater than 3, with Chern classes satisfying all known constraints arising from locally freeness and indecomposability. We also provide simple obstructions for smoothability.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - chern-classes
  - toric-geometry
arxiv_id: "2510.14651v3"
arxiv_url: "https://arxiv.org/abs/2510.14651"
arxiv_submitted: "2025-10-16"
arxiv_updated: "2026-09-28"
summary: >-
  射影空間上の階数2トーリックtorsion-free層のChern類を計算・処方する構成法を与え、Hartshorne予想の半安定な場合をsmoothableな半安定トーリック層の非存在問題へ帰着する。反射的層のChern多項式とelementary injectionによる反復構成が中心である。
abstract_en: >-
  We reduce Hartshorne's conjecture on indecomposable rank 2 vector bundles in the semistable case to the non-existence of smoothable rank 2 semistable toric sheaves on the projective space. We then study Chern classes for rank 2 torsion-free toric sheaves. For the reflexive ones, we derive a simple formula for the Chern polynomial, and in the general torsion-free case we introduce an iterative construction method based on elementary injections, allowing us to prescribe Chern classes. This yields infinite families of explicit examples on P4 and P5, and establishes existence on Pn for all n greater than 3, with Chern classes satisfying all known constraints arising from locally freeness and indecomposability. We also provide simple obstructions for smoothability.
summary_en: ""
abstract_ja: >-
  Hartshorneの分解不能な階数2ベクトル束に関する予想を、半安定な場合には射影空間上のsmoothableな階数2半安定トーリック層が存在しないという問題へ帰着する。階数2のtorsion-freeトーリック層のChern類を調べ、反射的な場合にはChern多項式の簡明な公式を導く。一般の場合にはelementary injectionに基づく反復構成でChern類を処方し、明示例とsmoothabilityの障害を与える。
abstract_source_url: "https://arxiv.org/abs/2510.14651"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.14651](https://arxiv.org/abs/2510.14651)
- **著者:** Carl Tipler
- **初回投稿日:** 2025年10月16日
- **最終更新日:** 2026年9月28日
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Hartshorne予想は、高次元射影空間上の階数2ベクトル束が分解するはずだと主張する。著者はベクトル束をトーリックtorsion-free層の変形として捉え、半安定な場合の予想をsmoothabilityの判定問題へ移す。

反射的階数2トーリック層ではChern類をfanのデータから直接計算する。一般のtorsion-free層では、反射的包への包含をelementary injectionへ分解し、各段階のChern多項式の変化を制御する。

## 背景と問題設定

$\mathbb P^n$ 上の階数2torsion-free層 $E$ について $c_k(E)=c_kH^k$ と書く。反射的トーリック層はrayごとの整数 $c_\rho$ と直線 $L_\rho\subset\mathbb C^2$ で記述され、この組合せ論的データをChern類と変形可能性へ結び付けることが課題となる。

## 主結果

### 反射的トーリック層のChern類（Proposition 1.1）

正規化された階数2の非局所自由反射的トーリック層に対し、

$$
c_k=\sum_{\sigma\in\Sigma(k)}\prod_{\rho\in\sigma(1)}c_\rho
$$

が成り立つ。この公式からBogomolov–Gieseker不等式を直接導き、第三Chern類の消滅が局所自由性と同値であることも得る。

### Elementary injectionへの分解（Theorem 1.2）

滑らかなトーリック多様体上の同階数torsion-freeトーリック層の同変包含 $E\hookrightarrow F$ は、商のsupportの次元が増加する有限個のelementary injectionへ分解できる。これによりChern類の処方問題を段階的な計算へ変える。

## 証明の見取り図

Perlingによるトーリック層の記述とresolutionを用いて反射的場合の公式を得る。一般の場合は $E\hookrightarrow E^{\vee\vee}$ を純粋な既約supportと階数1の商をもつ包含へ分解し、saturated elementary injectionごとのChern多項式比を計算する。この反復計算から明示例とsmoothabilityの障害を抽出する。

## 原論文との対応

- **Abstractページ:** [arXiv:2510.14651](https://arxiv.org/abs/2510.14651)
- **Introduction:** pp. 1–7
- **Introduction中で言及された主要定理番号:** Proposition 1.1, Theorem 1.2, Propositions 1.3 and 1.4
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v3
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
