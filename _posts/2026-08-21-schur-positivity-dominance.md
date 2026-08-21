---
layout: paper
title: Positivity of vector bundles and Dominance
title_ja: ベクトル束の正値性とdominance順序
authors: Laytimi Fatima, Werner Nahm
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $E$ be a vector bundle and $S_a$, $S_b$ the Schur functors associated to partitions $a$ and $b$. Previously we have shown that ampleness of $S_aE$ implies ampleness of $S_bE$ when $a$ is greater than $b$ in the dominance partial order. Here we prove that this result generalizes to $k$-ample, semiample and nef vector bundles. Our proof uses the common algebraic nature of these three properties and an investigation of the Littlewood-Richardson rules.
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
arxiv_id: 2603.02037v1
arxiv_url: https://arxiv.org/abs/2603.02037
arxiv_submitted: '2026-03-02'
arxiv_updated: '2026-03-02'
summary: Schur functor $S_aE$ の正値性がpartitionのdominance順序に沿って $S_bE$ へ伝播する原理を、ampleだけでなく$k$-ample、semiample、nefへ拡張する。Littlewood–Richardson則の共通構造によって、これらを一つの「algebraic property」として扱う。
abstract_en: ''
summary_en: This paper identifies a common formal structure behind several positivity notions for vector bundles. Using Littlewood–Richardson theory, it shows that positivity of one Schur functor propagates to another under the normalized dominance order. The result applies simultaneously to ampleness, k-ampleness, semiampleness, and nefness.
abstract_ja: ベクトル束 $E$ とpartition $a,b$ に対応するSchur functorを考える。$S_aE$ のample性がdominance順序の下で $S_bE$ のample性を導く既知結果を、$k$-ample、semiample、nefの場合へ拡張する。
abstract_source_url: https://arxiv.org/abs/2603.02037
license_name: arXiv non-exclusive distribution license
license_url: https://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.02037v1](https://arxiv.org/abs/2603.02037)
- **著者:** Laytimi Fatima, Werner Nahm
- **初回投稿日:** 2026-03-02
- **最終更新日:** 2026-03-02
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ベクトル束のpositivityをSchur functorで変換したとき、異なるpartitionの間で性質がどう移るかを調べる。既知のampleの場合を、$k$-ample、semiample、nefへ同時に一般化する。

鍵は、直和・tensor積・tensor冪からの指数除去に閉じた性質をalgebraic propertyと呼ぶ抽象化である。これら三つのpositivityはいずれもこの条件を満たす。

partition $a,b$ の正規化されたdominance条件の下で、$S_aE$ の性質が $S_bE$ へ伝わる。証明はcohomological criterionに依存せず、Littlewood–Richardson則の構造だけを用いる。

## 背景と問題設定

同じweightのpartitionでは、$a\succeq b$ をすべての初期部分和が大きいこととして定める。weightが異なる場合は $|b|a$ と $|a|b$ を比較する。

## 主結果

### positivityのalgebraic性（Theorem 1.2）

semiampleness、$k$-ampleness、nefnessは、直和・tensor積・指数除去に関してalgebraic propertyである。

### dominanceによる伝播（Theorem 1.3）

$a,b$ をpartitionとし、

$$
|b|a\succeq |a|b
$$

とする。$A$ がalgebraic propertyなら、$A(S_aE)$ から $A(S_bE)$ が従う。特に正整数 $n$ に対して $A(S_{na}E)$ と $A(S_aE)$ は同値である。

## 証明の見取り図

Schur functorをtensor冪の直和因子として分解し、Littlewood–Richardson係数が非零となるpartitionの集合を比較する。適切な冪を取ると必要な直和因子が包含され、additivityとmultiplicativityで性質を移し、最後にexponent eliminationを適用する。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–4
- **主要結果:** Theorems 1.2, 1.3
- **Abstractページ:** [arXiv:2603.02037](https://arxiv.org/abs/2603.02037)
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
