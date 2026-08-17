---
layout: paper
title: "Condensed Mathematics and Complex Geometry"
title_ja: "凝縮数学による複素幾何"
authors: "Dustin Clausen, Peter Scholze"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.FA
  - math.KT
topic: several-complex-variables
tags:
  - complex-analytic-spaces
arxiv_id: "2605.11731v1"
arxiv_url: "https://arxiv.org/abs/2605.11731"
arxiv_submitted: "2026-05-12"
arxiv_updated: "2026-05-12"
summary: >-
  凝縮数学とanalytic ringの形式を用いて、コンパクト複素多様体の古典的複素解析・複素幾何を代数的かつ局所的な方法で再構成する講義録である。連接コホモロジーの有限性、Serre双対、GAGA、Hirzebruch--Riemann--Rochを、解析的積分に依存しない共通の枠組みへ置く。
abstract_en: ""
summary_en: >-
  These lecture notes rebuild classical complex-analytic geometry within condensed mathematics. Their program replaces topological vector spaces by suitable condensed and liquid objects, packages convergence through analytic rings, and derives familiar geometric theorems by categorical and local methods. The resulting framework is used for coherent-cohomology finiteness, Serre duality, GAGA, and Hirzebruch--Riemann--Roch on compact complex manifolds.
abstract_ja: >-
  本講義録は、凝縮数学に基づく一般的な解析幾何の方法を複素解析幾何に具体化する。新しい幾何学を導入するのではなく、正則関数から連接層までを異なる基礎付けで再構成し、コンパクト複素多様体に対する連接コホモロジーの有限性、Serre双対、代数的場合のGAGA、Hirzebruch--Riemann--Rochを再証明することを目標とする。
abstract_source_url: "https://arxiv.org/abs/2605.11731"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.11731v1](https://arxiv.org/abs/2605.11731v1)
- **著者:** Dustin Clausen, Peter Scholze
- **初回投稿日:** 2026年5月12日
- **最終更新日:** 2026年5月12日（v1）
- **主分類・副分類:** math.CV（主分類）, math.AG, math.FA, math.KT
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

本講義録の目標は、凝縮数学という「代数と位相を組み合わせるための基礎」を用い、古典的複素解析幾何を別の視点から組み立て直すことである。対象となるのは新種の空間ではなく、正則関数、複素解析空間、連接層といった古典的対象である。

最初の試金石は、円板上の正則関数の層を、収束冪級数という局所データから一意に構成し、高次コホモロジーが消えることを導く課題である。通常の証明がCauchy積分公式、$\bar\partial$作用素、partition of unityに依存するのに対し、本稿はanalytic spectrumとanalytic ringの一般論に還元する「analysis-free」な経路を目指す。

このため、位相アーベル群がアーベル圏をなさないという障害を、profinite集合上の層としての凝縮アーベル群で回避する。さらに収束和を形式化するanalytic ringと、適切な液状ベクトル空間を導入し、層コホモロジーを制御できるアーベル・テンソル圏の中で解析を扱う。

講義全体では、この局所的・圏論的枠組みを複素解析空間と連接層へ拡張し、連接コホモロジーの有限性、Serre双対、GAGA、Hirzebruch--Riemann--Rochを再証明する。Introductionは、少なくとも最初の三結果について、従来とは大きく異なる局所的証明と非コンパクト版を得ることを狙いとして述べている。

## 背景と問題設定

複素解析の基本事実は、複素微分可能性が強い剛性をもち、正則関数が収束冪級数で表されることである。しかし伝統的証明は積分や微分作用素という解析的装置を用いる。著者らは、非アルキメデス解析におけるTate acyclicityとの統一も念頭に、アルキメデス側をより代数的に記述する。

概念的には、$\mathbb C[T]$ をanalytic ringとし、そのanalytic spectrum $\operatorname{AnSpec}\mathbb C[T]$ の開部分として円板を捉える。正則関数はその構造層の切断として「発見」され、非コンパクトの場合も含む消滅結果は一般理論と計算から導かれる、という構想である。

## 主結果

### Theorem 1.1：円板上の正則関数層

Introductionで基礎課題として掲げられる結論は、位相空間 $\mathbb C$ 上に一意な層 $\mathcal O$ が存在し、任意の円板 $D=D(x,r)$ に対して

$$
\mathcal O(D)=\left\{\sum_{n=0}^{\infty}a_n(T-x)^n\ \middle|\ a_n\in\mathbb C,\ \forall r'<r,\ a_n(r')^n\to0\right\}
$$

となり、さらに

$$
H^i(D,\mathcal O)=0\qquad(i>0)
$$

が成り立つ、というものである。前半は局所的に定義した正則関数が円板全体で一つの収束Taylor展開をもつこと、後半はその記述が層コホモロジーに対して安定であることを表す。

### 講義全体の到達目標

Introductionでは、コンパクト複素多様体について、連接コホモロジーの有限性、Serre双対、代数的場合のGAGA、Grothendieck--Hirzebruch--Riemann--Rochを再証明することが列挙される。これらはTheorem 1.1だけから直ちに従う一つの定理ではなく、全15講を通じてanalytic ring、analytification、nuclear module、連接層、proper pushforwardを構築した先の成果である。

## 証明の見取り図

円板の場合、$\mathbb C[T]$ に収束和を形式的に付加するanalytic ring構造を与え、円板をanalytic spectrumの開部分として表す。すると構造層とそのacyclicityを一般論から得て、具体的な切断を収束冪級数として計算する。これはCauchy積分や $\bar\partial$ 分解による通常の証明と対照的である。

圏論を機能させる鍵は、位相ベクトル空間そのものではなく凝縮対象を用いる点にある。凝縮アーベル群はアーベル圏をなし、液状ベクトル空間は必要なテンソル構造と完備性を担う。以後の講義はこの形式をanalytification、連接層、proper pushforwardへ順に拡張する。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.11731v1](https://arxiv.org/abs/2605.11731v1)
- **Introduction:** Lecture I, pp. 6--10
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** Contents, pp. 3--4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
