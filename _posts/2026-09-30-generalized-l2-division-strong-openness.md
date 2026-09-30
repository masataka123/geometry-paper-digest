---
layout: paper
title: "A Generalized $L^2$ Division Theorem and the Strong Openness Property of Multiplier Ideal Sheaves"
title_ja: "一般化$L^2$除法定理と乗数イデアル層の強開性"
authors: "Masakazu Takakura"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  In this paper, we generalize Guan's sharp effective strong openness theorem to the case of several plurisubharmonic weights. The proof uses a generalized Skoda-type $L^2$ division theorem for multiplier ideal sheaves. We also discuss the relationships among the $L^2$-division theorem, the $L^2$-extension theorem and the effective openness theorem.
topic: several-complex-variables
tags:
  - l2-methods
  - multiplier-ideals-extension
  - pluripotential-theory
arxiv_id: "2609.36420v1"
arxiv_url: "https://arxiv.org/abs/2609.36420"
arxiv_submitted: "2026-09-29"
arxiv_updated: "2026-09-29"
summary: >-
  Guanのsharp effective strong openness theoremを複数の多重劣調和重みへ一般化する。乗数イデアル層に対するSkoda型 $L^2$ 除法定理から明示的評価を導き、$L^2$ 除法・$L^2$ 拡張・強開性の関係を整理する。
abstract_en: ""
summary_en: >-
  The paper extends a sharp quantitative form of strong openness from one plurisubharmonic weight to a finite tuple of weights. Its central tool is a generalized Skoda-type division estimate formulated for multiplier ideal sheaves. This estimate produces a global decomposition of a holomorphic function with explicit norm control. The discussion also clarifies how division estimates relate to extension theorems and effective openness.
abstract_ja: >-
  Guanによるsharp effective strong openness theoremを、複数の多重劣調和重みの場合へ一般化する。証明には乗数イデアル層に対する一般化Skoda型 $L^2$ 除法定理を用いる。また $L^2$ 除法定理、$L^2$ 拡張定理、有効開性定理の相互関係を論じる。
abstract_source_url: "https://arxiv.org/abs/2609.36420"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.36420](https://arxiv.org/abs/2609.36420)
- **著者:** Masakazu Takakura
- **初回投稿日・最終更新日:** 2026年9月29日
- **主分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

乗数イデアル層の強開性は、重みをわずかに強めても局所可積分性が保たれることを述べる。Guanは一つの多重劣調和重みに対しsharpで有効な評価を与えた。

本論文は複数の重み $\varphi_1,\ldots,\varphi_r$ を同時に扱う定量的評価を証明する。核となるのは、関数を複数の乗数イデアルに属する項へ分解しつつ $L^2$ ノルムを制御する一般化除法定理である。

## 背景と問題設定

擬凸領域 $\Omega\subset\mathbb C^n$、psh関数 $\psi$、負のpsh関数 $\varphi_i$ を考える。$m=\min(n,r)$ とし、各 $p_i>1$ が $\sum_i p_i^{-1}<m$ を満たす場合に、有効強開性の最小積分を評価する。

## 主結果

### 複数重みに対する有効強開性（Theorem 1.2）

$f$ が $e^{-(\psi+\sum_i\varphi_i)}$ に関して二乗可積分で、その積分を $I$ とする。Introductionで定義される最小積分 $c_{\varphi_1,\ldots,\varphi_r,f,\psi}(p_1,\ldots,p_r)$ は

$$
c_{\varphi_1,\ldots,\varphi_r,f,\psi}(p_1,\ldots,p_r)
\le \left(1-\frac1m\sum_{i=1}^r\frac1{p_i}\right)I
$$

を満たす。

### 一般化$L^2$除法（Theorem 1.3）

$q=\min(n,r-1)$ とし、$\sum_i e^{\varphi_i}<1$ とする。適切な可積分性を満たす正則関数 $f$ は $f=\sum_i h_i$ と分解でき、

$$
\int_\Omega\sum_{i=1}^r |h_i|^2e^{-\varphi_i-\psi}
\le \int_\Omega\frac{|f|^2e^{-\psi}}{(\sum_i e^{\varphi_i})^{q+1}}
$$

が成り立つ。これにより対応する乗数イデアル層の包含が従う。

## 証明の見取り図

商束と部分束のChern曲率をNakano正値性の下で比較し、twisted Hörmander型 $\bar\partial$ 解法を適用して除法評価を得る。この除法を最小積分問題へ組み込み、cut-off関数構成に頼らず複数重みの有効強開性へ到達する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.36420](https://arxiv.org/abs/2609.36420)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.2 and 1.3
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
