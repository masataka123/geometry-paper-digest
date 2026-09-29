---
layout: paper
title: "Weak positivity and weak flatness of vector bundles"
title_ja: "ベクトル束の弱正値性と弱平坦性"
authors: "Adrian Langer"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study Viehweg's weak positivity for vector bundles on quasi-projective schemes over noetherian rings, including mixed characteristic. We prove that weak positivity is preserved under tensor products, symmetric powers, divided powers, and exterior powers. We introduce weakly flat bundles, generalizing numerically flat bundles, and we use them to construct an S-fundamental group scheme for normal varieties admitting a small projective compactification. We compare weak flatness with strong numerical flatness and establish analogues of the Demailly-Peternell-Schneider theorem. For smooth complex varieties admitting a small compactification, we prove that the semisimple objects in the category of weakly flat bundles are precisely the unitary flat bundles. We also show that a vector bundle equipped with an integrable algebraic connection and an invariant filtration with unitary flat quotients is weakly flat. As applications, we characterize quotients of abelian varieties in terms of weak positivity of some standard vector bundles.
topic: algebraic-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - fundamental-groups
arxiv_id: "2609.32751v1"
arxiv_url: "https://arxiv.org/abs/2609.32751"
arxiv_submitted: "2026-09-26"
arxiv_updated: "2026-09-26"
summary: >-
  Viehwegの弱正値性が、Noether環上の準射影schemeでもtensor・対称・divided・外冪により保たれることを示す。弱平坦束を導入して非射影多様体へ数値的平坦束の理論を拡張し、S基本群schemeとDemailly–Peternell–Schneider型の特徴づけを構成する。
abstract_en: ""
summary_en: >-
  This work develops weak positivity for vector bundles over arbitrary noetherian bases and proves its stability under the standard tensor operations. It defines weakly flat bundles by requiring weak positivity for a bundle and its dual, thereby extending numerical flatness to nonprojective settings. For normal varieties with small projective compactifications, these bundles form a Tannakian category and define an S-fundamental group scheme. Comparison theorems connect weak flatness with strong numerical flatness and unitary flat filtrations.
abstract_ja: >-
  Noether環上の準射影schemeにあるベクトル束のViehweg弱正値性を研究し、tensor積、対称冪、divided power、外冪で保存されることを証明する。束と双対束がともに弱正値である弱平坦性を導入し、small projective compactificationをもつ正規多様体のS基本群schemeを構成する。強数値的平坦性との比較とDemailly–Peternell–Schneider定理の類似も与える。
abstract_source_url: "https://arxiv.org/abs/2609.32751"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.32751](https://arxiv.org/abs/2609.32751)
- **著者:** Adrian Langer
- **初回投稿日・最終更新日:** 2026年9月26日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Viehwegの弱正値性は、偏極多様体のmoduliや非射影空間の正値性を扱う道具である。本論文は任意のNoether基底上でtensor演算に対する閉性を確立し、mixed characteristicも含む統一的な枠組みを与える。

非射影多様体では曲線だけによる数値的平坦性は弱すぎる。そこで $E$ と $E^*$ が全空間上で弱正値であることを弱平坦性と定義し、small compactificationをもつ場合にTannakian圏とS基本群schemeを得る。

## 主結果

### 弱正値性のtensor演算による保存（Theorem 0.1）

Noether環上の準射影scheme $X$ とZariski稠密開集合 $X_0$ を固定する。$X_0$ 上で弱正値なベクトル束は、有限直和、商束、tensor積、正の対称冪・divided power・正階数の外冪で閉じている。

### 弱平坦性と数値的平坦性の比較（Theorem 0.2）

正規射影多様体 $\overline X$ のbig open subset $X$ 上の束 $E$ を考え、反射的延長が局所自由、または $\overline X$ が滑らかと仮定する。このとき弱平坦性は、強数値的平坦性、反射的延長の強slope半安定性と

$$
\int_{\overline X}\operatorname{ch}_1(F)H^{n-1}
=\int_{\overline X}\operatorname{ch}_2(F)H^{n-2}=0
$$

という条件、および数値的平坦性と同値である。

## 証明の見取り図

非proper scheme上のample vector bundleに対するtensor演算の結果を用いてTheorem 0.1を示す。弱平坦束が双対・tensor積に閉じることからrigid symmetric monoidal categoryを作り、点でのevaluationをfiber functorとしてTannaka双対を取る。compactificationを越える延長とFrobenius pullbackを比較し、特性0ではunitary flat filtrationへ接続する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.32751](https://arxiv.org/abs/2609.32751)
- **Introduction:** pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 0.1 and 0.2, Corollary 0.3
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
