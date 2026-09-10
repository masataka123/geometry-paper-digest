---
layout: paper
title: "Prime Fano fourfolds in classical and generalized Grassmannians"
title_ja: "古典型・一般化Grassmann多様体内の素Fano四次元多様体"
authors: "Alessandro Frassineti"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We provide a complete classification of Fano fourfolds of Picard rank 1 and index 1 obtained as zero loci of completely reducible homogeneous vector bundles in generalized Grassmannians, i.e. Grassmannians of Dynkin type different from A. This extends the classification done by Küchle in standard Grassmannians. In doing so, we exhibit three new families of Fano fourfolds of Picard rank 1 and index 1. For each of the studied Fano fourfolds, we compute several numerical invariants, such as volume and Hodge numbers.
topic: algebraic-geometry
tags:
  - fano-varieties
  - vector-bundles-sheaves
arxiv_id: "2609.09310v1"
arxiv_url: "https://arxiv.org/abs/2609.09310"
arxiv_submitted: "2026-09-08"
arxiv_updated: "2026-09-08"
summary: >-
  一般化Grassmann多様体上の完全可約斉次ベクトル束の一般切断の零点として得られる、Picard数1・指数1のFano四次元多様体を分類する。Küchleの古典型Grassmann多様体における分類を非$A_n$型へ拡張し、既知でなかった三族を取り出すとともに体積とHodge数を計算する。
abstract_en: ""
summary_en: >-
  The paper classifies smooth Fano fourfolds of Picard rank one and index one that arise as general zero loci of completely reducible, globally generated homogeneous bundles on generalized Grassmannians. It extends Küchle's construction from type A to the other Dynkin types. The resulting list contains three previously unknown deformation families, and the author computes invariants that distinguish the models and clarify their deformation behavior.
abstract_ja: >-
  一般化Grassmann多様体、すなわち$A_n$型以外のDynkin型に属するGrassmann多様体上で、完全可約斉次ベクトル束の零点として実現されるPicard数1・指数1のFano四次元多様体を完全分類する。これは通常のGrassmann多様体に対するKüchleの分類を拡張するものであり、文献にない三つの族を与える。さらに、対象となる各族について体積やHodge数などの数値的不変量を計算する。
abstract_source_url: "https://arxiv.org/abs/2609.09310"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.09310](https://arxiv.org/abs/2609.09310)
- **著者:** Alessandro Frassineti
- **初回投稿日:** 2026年9月8日
- **最終更新日:** 2026年9月8日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体は各次元で有限個の変形族しか持たないが、完全分類は三次元までに限られ、四次元では部分的なリストが中心である。Picard数1の素Fano多様体は他の族を双有理操作から理解する際の出発点となり、なかでも指数1の四次元多様体は分類が未完である。

本論文は、単連結単純Lie群$G$と極大放物部分群$P$からなる一般化Grassmann多様体$G/P$上で、完全可約かつ大域生成された斉次ベクトル束$E$の一般切断の零点を調べる。零点が滑らかなPicard数1・指数1のFano四次元多様体となる組$[G/P,E]$を一覧化する。

この分類は、通常のGrassmann多様体に対するKüchleのリストを非$A_n$型へ拡張する。Introductionは、直交Grassmann多様体上の三つのモデルが新しい族であると述べ、これにより既知の素Fano四次元多様体の族が35に増えるとしている。

各モデルの体積、Hodge数、反標準束の切断数、接束のEuler標数も計算される。これらは族を識別するだけでなく、異なる表示が同じ族を与える例外的同型を検出する役割を持つ。

## 背景と問題設定

Fano多様体$Y$の指数は、標準束$K_Y$がPicard群内で割り切れる最大の正整数である。Mukaiのベクトル束法は三次元の素Fano多様体を斉次ベクトル束の零点として記述し、Küchleはこの考えを標準Grassmann多様体内の四次元零点へ進めた。本論文は、非$A_n$型の斉次空間を避けては四次元の同種の分類を完結できないことを示す。

記号$[X,E]$は、$E$の一般切断を動かして得られる零点多様体の変形族を表す。分類では滑らかさ、次元4、Picard数1、指数1、大域生成性、完全可約性を同時に課す。

## 主結果

### 分類定理（Theorem 1.1）

結論は、非$A_n$型の連結単連結単純Lie群$G$、極大放物部分群$P$、一般化Grassmann多様体$X=G/P$、完全可約で大域生成された斉次ベクトル束$E$に対し、$E$の一般切断が滑らかなPicard数1・指数1のFano四次元多様体を定めるための必要十分条件を与えることである。その条件は論文のTable 1に列挙された組$[X,E]$に一致する。

Introductionが新規とする三族は

$$
[\operatorname{OGr}(3,9),\mathcal S^{\oplus 4}],\qquad
[\operatorname{OGr}(5,10)^+,\mathcal O(2)\oplus\mathcal O(1)^{\oplus 5}],\qquad
[\operatorname{OGr}(2,7),\operatorname{Sym}^2\mathcal S]
$$

である。ここで$\mathcal S$は直交Grassmann多様体上のspinor束を表す。分類はCalabi--Yau三次元多様体に関するBenedettiの表を基礎としつつ、例外的同型を除いて実際に異なるFano族を確定する。

### 新しい族の変形と不変量（Remarks 1.2--1.4）

三つの新モデルについて局所完全性を調べ、そのうち一つは局所完全でないことが示される。また一つは次数3のコホモロジーにlevel oneのHodge構造を持つ。三族を含む35族はいずれも$\chi(T_Y)<0$を満たし、Bott消滅を満たさない。

## 証明の見取り図

Introductionの論文構成によれば、まず斉次ベクトル束の零点表示の間にある例外的同型を示し、表から重複する族を除く。次に新しい三モデルを個別に解析し、Hodge数、体積、変形の局所完全性を計算する。Picard数が1より大きい周辺的なモデルも別に処理される。

不変量の計算では、随伴公式$K_Y=(K_X+c_1(E))|_Y$、余接束列、Koszul複体、Bottの定理を組み合わせる。これによりHodge数などを計算し、候補族の相違と新規性を確認するという流れである。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.09310](https://arxiv.org/abs/2609.09310)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Remarks 1.2--1.4
- **論文構成の説明:** Section 2冒頭, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
