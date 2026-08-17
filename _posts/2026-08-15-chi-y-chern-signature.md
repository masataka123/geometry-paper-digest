---
layout: paper
title: "The $χ_y$-genus, Chern number inequalities and signature"
title_ja: "$χ_y$種数・Chern数不等式・符号数"
authors: "Ping Li, Yibo Ren"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.SG
arxiv_abstract: >-
  This article has two parts. In the first part we introduce two positivity conditions for the
  modified $χ_y$-genus on almost-complex manifolds and show that each of them implies a family of
  optimal Chern number inequalities. It turns out that many important Kähler and symplectic manifolds
  satisfy either of the two positivity conditions, and hence these Chern number inequalities hold true
  on them. In the second part we focus on the signature, a special value of the $χ_y$-genus, of
  symplectic manifolds equipped with symplectic circle actions and give applications. Our results in
  this part unify and generalize various related results in the existing literature.
topic: differential-geometry
tags:
  - positivity
  - chern-classes
  - symplectic-contact-geometry
arxiv_id: "2603.27964v1"
arxiv_url: "https://arxiv.org/abs/2603.27964"
arxiv_submitted: "2026-03-30"
arxiv_updated: "2026-03-30"
summary: >-
  概複素多様体の修正 $χ_y$ 種数に二つの正値性条件を導入し、それぞれから射影空間を基準とする最適なChern数不等式族を導く。さらにシンプレクティック円周作用を持つ多様体の符号数を調べ、既存の結果を統一・拡張する。
abstract_en: ""
summary_en: >-
  The paper studies two positivity notions for a modified Hirzebruch genus on compact almost-complex manifolds. Each notion is shown to force a sharp family of inequalities among Chern numbers, with projective space supplying the comparison values. The hypotheses cover several familiar Kähler and symplectic classes. A second part analyzes signatures of symplectic manifolds with circle actions and derives restrictions involving their topological data.
abstract_ja: >-
  修正Hirzebruch $χ_y$ 種数の係数に対する二種類の正値性を定め、いずれかを満たす概複素多様体には最適なChern数不等式族が成立することを示す。対象には有理等質多様体、滑らかなトーリック多様体、Fano接触多様体、Kähler双曲多様体、特定のシンプレクティック円周作用を持つ多様体が含まれる。後半では $χ_y$ 種数の特殊値である符号数を円周作用の観点から扱う。
abstract_source_url: "https://arxiv.org/abs/2603.27964v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.27964v1](https://arxiv.org/abs/2603.27964v1)
- **著者:** Ping Li, Yibo Ren
- **初回投稿日・最終更新日:** 2026年3月30日（v1）
- **主分類・副分類:** math.DG（主分類）、math.SG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Hirzebruchの $χ_y$ 種数は、Hirzebruch–Riemann–RochおよびAtiyah–Singer指数定理を通じてChern数の線形結合として表される。本論文は、符号を調整した $χ_{-y}$ の係数に正値性を課し、そこからChern数を一括して制御する。

二つの条件は「$χ$-positive」と「signed $χ$-positive」である。どちらの場合にも実次元 $2n$ の閉連結概複素多様体について $\lfloor n/2\rfloor+1$ 個の最適不等式が得られ、比較対象は複素射影空間 $\mathbb P^n$ となる。

Introductionは、この条件がKähler・シンプレクティック幾何の広い具体例で成立すると述べる。後半では $χ_y(M)|_{y=1}$ が符号数であることを用い、シンプレクティック円周作用を持つ多様体の符号数公式とBetti数への応用を扱う。

## 背景と問題設定

概複素多様体 $M$ に対し

$$
χ_y(M)=\sum_{p=0}^n χ^p(M)y^p
$$

はDolbeault型楕円作用素の指数を係数とする。複素多様体なら $χ^p(M)=\sum_q(-1)^q h^{p,q}(M)$ であり、$y=1$ で符号数を与える。問題は、これらの指数の符号情報がどこまでChern数と位相を拘束するかである。

## 主結果

### 最適Chern数不等式族（Introductionでの概略）

Introductionでは概略として次のように述べられている。$M$ が二つの正値性条件のいずれかを満たすと、$A_i$ を再帰的に定まるChern数多項式として

$$
A_i(c_1,\ldots,c_n)[M]\geq \varepsilon^n A_i(c_1,\ldots,c_n)[\mathbb P^n],
\qquad 0\leq i\leq \lfloor n/2\rfloor,
$$

という最適な族が成立する（$χ$-positiveなら $\varepsilon=1$、signed $χ$-positiveなら $\varepsilon=-1$）。Introductionは式の全成分ではなく、Section 2で詳述すると案内しているため、本記事も一般形に留める。

### 円周作用と符号数（Introductionでの概略）

シンプレクティック円周作用を持つ多様体について、符号数をNovikov数とBetti数で記述し、その公式からBetti数の制約を得る。Introductionの主張は既存結果の統一と一般化であり、正式な個別定理は後続節に置かれている。

## 原論文との対応

- **Abstractページ:** [arXiv:2603.27964v1](https://arxiv.org/abs/2603.27964v1)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** 最適Chern数不等式族、符号数公式とBetti数への応用（正式な定理はSections 2, 6, 7）
- **論文構成の説明:** pp. 1–2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
