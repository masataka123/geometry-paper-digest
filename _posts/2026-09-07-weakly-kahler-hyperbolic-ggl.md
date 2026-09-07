---
layout: paper
title: "Weakly Kähler hyperbolic manifolds and the Green--Griffiths--Lang conjecture"
title_ja: "弱Kähler双曲多様体とGreen–Griffiths–Lang予想"
authors: "Francesco Bei, Simone Diverio, Philippe Eyssidieux, Stefano Trapani"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.DG
arxiv_abstract: >-
  We introduce the notion of weakly Kähler hyperbolic manifold which generalizes that of Kähler hyperbolic manifold given in the early '90s by M. Gromov, and establish its basic features. We then investigate its spectral properties and show a spectral gap result (on a suitable modification). As applications, we prove that weakly Kähler hyperbolic manifolds are of general type and we study the geometry of their subvarieties and entire curves, verifying -- among other things -- various aspects of the Lang and the Green--Griffiths conjectures for this class of manifolds.
topic: several-complex-variables
tags: 
  - hyperbolicity
  - pluripotential-theory
  - l2-methods
arxiv_id: "2204.04096v3"
arxiv_url: "https://arxiv.org/abs/2204.04096"
arxiv_submitted: "2022-04-08"
arxiv_updated: "2023-11-17"
summary: >-
  GromovのKähler双曲性をbigかつnefな類へ弱め、なお一般型性と整曲線の代数的退化が従うことを示す。適切な修正上の $L^2$ スペクトルギャップを核として、Kähler双曲多様体の特異部分多様体までLang予想型の結論を拡張する。
abstract_en: ""
summary_en: >-
  The paper weakens Gromov’s Kähler hyperbolicity by allowing a big and nef cohomology class with a bounded primitive upstairs. It obtains an L² spectral gap after modification and derives general type results. It also constrains entire curves to a proper exceptional locus and proves a Lang-type statement for every subvariety of a Kähler hyperbolic manifold.
abstract_ja: >-
  GromovのKähler双曲性をbigかつnefなコホモロジー類へ拡張し、その基本性質とスペクトル的帰結を調べる。適切な修正上で $L^2$ Dolbeaultラプラシアンのスペクトルギャップを得て、弱Kähler双曲多様体が一般型であることを導く。さらに整曲線が真の部分多様体に含まれること、およびKähler双曲多様体の任意の特異部分多様体が一般型であることを示す。
abstract_source_url: "https://arxiv.org/abs/2204.04096"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2204.04096](https://arxiv.org/abs/2204.04096)
- **著者:** Francesco Bei, Simone Diverio, Philippe Eyssidieux, Stefano Trapani
- **初回投稿日:** 2022-04-08
- **最終更新日:** 2023-11-17
- **主分類・副分類:** math.CV（主分類）, math.AG, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

GromovのKähler双曲多様体では、普遍被覆へ引き戻したKähler形式が有界な原始形式をもつ。論文はKähler類をbigかつnefな類に置き換えた「弱Kähler双曲性」を導入する。これは例外集合上で正値性が退化し得るため、特異部分多様体の解消を扱う双有理幾何に適した概念である。

主な解析的成果は、適切な修正上での $L^2$ Dolbeaultラプラシアンのスペクトルギャップである。これから弱Kähler双曲多様体の一般型性を導き、古典的Kähler双曲多様体については特異なものも含む全ての閉部分多様体が一般型であることを示す。

さらに、弱Kähler双曲性を与える類の非Kähler locusが全整曲線を含む真部分多様体になる。したがってGreen–Griffiths予想が期待する整曲線の代数的退化が、このクラスで成立する。

## 背景と問題設定

弱Kähler双曲性とは、コンパクトKähler多様体 $M$ にbigかつnefな実 $(1,1)$ 類を表す滑らかな閉形式 $\mu$ があり、普遍被覆 $\pi:\widetilde M\to M$ 上で

$$
\pi^*\mu=d\alpha,\qquad |\alpha|_{\pi^*\omega}\ \text{が有界}
$$

となることである。Kähler形式そのものを要求するGromovの定義より弱い一方、有界原始形式という大域的条件は保持する。

動機は、Kähler双曲多様体の特異部分多様体を解消すると引き戻し形式が例外集合で退化し、通常の完全な $L^2$ Hodge理論をそのまま使えない点にある。

## 主結果

### 定理A（スペクトルギャップ）

複素次元 $m$ の弱Kähler双曲多様体 $M$ には修正 $\nu:M'\to M$ とKähler形式 $\omega$ が存在し、$M'$ のKähler普遍被覆上の $L^2$ $\bar\partial$-ラプラシアン $\Delta_{\bar\partial,p,0}$ について、$0\le p\le m-1$ では $0$ がスペクトルに属さない。最高次数では $\Delta_{\bar\partial,m,0}$ の像が閉で、その核は非自明、実際には無限次元である。

### 定理B（Kähler双曲多様体に対するLang予想）

Kähler双曲多様体 $M$ はKobayashi双曲的であり、任意の閉部分多様体 $X\subseteq M$ は、特異であっても任意の特異点解消 $\widehat X\to X$ が一般型になる。

### 定理C（整曲線の代数的退化）

弱Kähler双曲多様体 $M$ には真の部分多様体 $Z\subsetneq M$ が存在し、全ての正則写像 $\mathbb C\to M$ の像が $Z$ に含まれる。

## 証明の見取り図

定理AではGromovとEyssidieuxの $L^2$ 戦略を、big類の複素Monge–Ampère方程式と多重ポテンシャル論によって退化した正値性へ適応する。スペクトルの消滅・非消滅をAtiyahの $L^2$ 理論と結び付け、標準束のbignessへ移す。

定理CではAhlfors currentと、弱Kähler双曲性から得られる正則円板の線形等周不等式を組み合わせ、整曲線を非Kähler locusへ閉じ込める。

## 原論文との対応

- **Abstractページ:** [arXiv:2204.04096](https://arxiv.org/abs/2204.04096)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems A, B, C
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
