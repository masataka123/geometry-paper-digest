---
layout: paper
title: "On generalized canonical bundle formula and boundedness of complements in complex analytic setting"
title_ja: "複素解析的設定における一般化標準束公式と補集合の有界性"
authors: "Kenta Hashizume"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We establish the generalized canonical bundle formula for generalized lc-trivial fibrations with irrational coefficients over non-compact bases in the complex analytic setting, and we show that the discriminant b-divisor and moduli b-divisor are compatible with restriction to arbitrary open subsets. We also discuss the boundedness of complements in this setting.
topic: algebraic-geometry
tags:
  - birational-geometry
  - minimal-model-program
  - singularities
arxiv_id: "2603.17485v2"
arxiv_url: "https://arxiv.org/abs/2603.17485"
arxiv_submitted: "2026-03-18"
arxiv_updated: "2026-05-04"
summary: >-
  非コンパクトな複素解析的底上の一般化lc-trivial fibrationに対し、無理係数を許す標準束公式を確立する。判別b-divisorとmoduli b-divisorが任意の開集合への制限と整合することを示し、複素解析的局所設定で補集合の指数を次元などの離散データだけから一様に抑える。
abstract_en: >-
  We establish the generalized canonical bundle formula for generalized lc-trivial fibrations with irrational coefficients over non-compact bases in the complex analytic setting, and we show that the discriminant b-divisor and moduli b-divisor are compatible with restriction to arbitrary open subsets. We also discuss the boundedness of complements in this setting.
summary_en: ""
abstract_ja: >-
  複素解析的設定で、非コンパクトな底上の無理係数をもつ一般化lc-trivial fibrationに対する一般化標準束公式を確立する。判別b-divisorとmoduli b-divisorが任意の開部分への制限と両立することも示す。さらに、この設定における補集合の有界性を論じる。
abstract_source_url: "https://arxiv.org/abs/2603.17485"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.17485](https://arxiv.org/abs/2603.17485)
- **著者:** Kenta Hashizume
- **初回投稿日:** 2026年3月18日
- **最終更新日:** 2026年5月4日（v2）
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

標準束公式はfibrationの標準類を底上の判別部分とmoduli部分へ分解し、次元帰納を可能にする道具である。本論文はFilipazziによる一般化pairの公式を、Fujinoの複素解析的枠組みにある非コンパクトな底へ拡張する。

非コンパクト性のため大域的nef性やcompactificationを使えず、b-divisorの開集合への制限さえ自明ではない。論文は判別・moduli b-divisorの制限整合性を先に確立し、無理係数を許したままmoduli部分がb-nefかつ $\mathbb R$-b-Cartierであることを示す。

後半の主要結果は、Fano typeという局所的な正値性の下で補集合の指数を一様に選べるという複素解析版の有界性である。標準束公式と解析的MMPを組み合わせることで、射影多様体の理論をStein compact近傍へ移す。

## 背景と問題設定

一般化pair $(X,B+M)$ では、境界 $B$ に加えて上位modelから来るnef部分 $M$ を記録する。generalized lc-trivial fibration $f:(X,B+M)\to Z$ に対する標準束公式は概念的に

$$
K_X+B+M\sim_{\mathbb R}f^*(K_Z+G_Z+N_Z)
$$

と書かれ、$G$ が判別b-divisor、$N$ がmoduli b-divisorである。解析的な開底ではmodelの集合が制限後に増えるため、$G,N$ の制限が元のb-divisorから誘導されることを別途証明する必要がある。

## 主結果

### 一般化標準束公式（Theorem 1.1 / Theorem 3.10）

Stein compact $W\subset S$ の近傍で、nef部分 $M$ がb-nefな $\mathbb Q$-b-Cartier b-divisorの有限正係数線形結合であり、一般開集合上で $B$ がeffectiveであると仮定する。このときmoduli b-divisor $N$ も同型の有限線形結合となり、$(Z,G_Z+N_Z)$ は一般化sub-pairをなす。generalized lcまたはkltという特異点条件も底へ引き継がれる。

さらに任意の開集合 $\widetilde S\subset S$ への制限に対し、制限後に構成した判別・moduli b-divisorは元の $G,N$ の制限と一致する。この整合性は非コンパクト解析空間で相対MMPを動かすための核心である。

### 補集合の有界性（Theorem 1.3 / Theorem 4.2）

次元 $d$、nef部分のCartier指数を抑える整数 $p$、有理係数のDCC集合 $\Lambda$ を固定する。$X$ が $Z$ 上Fano type、$-(K_X+B+M)$ がnefであるgeneralized lc pairに対し、任意の $z\in Z$ の近傍で $B^+\ge B$ を満たす $n$-complementが存在する。整数 $n$ は $d,p,\Lambda$ のみに依存する。

## 証明の見取り図

標準束公式では、まずb-divisorの制限整合性を示し、generalized klt-trivialの場合を既存の解析的結果とFilipazziの方法で処理する。generalized lcの場合への移行には弱半安定還元と複素解析的MMPを用いる。補集合についてはFano type上のMMPと局所的なextensionを組み合わせ、Stein compactを含む底の近傍を必要に応じて縮小する。

## 原論文との対応

- **Abstractページ:** [arXiv:2603.17485](https://arxiv.org/abs/2603.17485)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems 1.1–1.4
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
