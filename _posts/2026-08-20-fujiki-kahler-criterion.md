---
layout: paper
title: 'Fujiki Class $\mathcal C$ Varieties and a Kähler Criterion'
title_ja: 'Fujikiクラス $\mathcal C$ の多様体とKähler判定法'
authors: "Christopher Hacon, Yi Li, Lingyao Xie"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this article, we show that flips and divisorial contractions preserve the Kähler condition (for strongly $\mathbb{Q}$-factorial compact Kähler generalized klt pairs with $B+β_X$ big), and we give a criterion for varieties in Fujiki's class $\mathcal C$ to be Kähler. We also prove the existence of small $\mathbb Q$-factorializations for generalized klt pairs and of dlt modifications for generalized pairs.
topic: algebraic-geometry
tags:
  - minimal-model-program
  - birational-geometry
  - singularities
  - positivity
arxiv_id: "2608.20588v1"
arxiv_url: "https://arxiv.org/abs/2608.20588"
arxiv_submitted: "2026-08-20"
arxiv_updated: "2026-08-20"
summary: >-
  compact Kähler generalized klt対のMMPでflipと因子収縮の後もKähler性が保たれることを、次元に依存しない形で示す。さらにFujikiクラス $\mathcal C$ の空間がKählerであるための有理曲線による判定法と、small $\mathbb Q$-factorial化・dlt modificationの存在を確立する。
abstract_en: ""
summary_en: >-
  This article supplies structural tools for a minimal-model program in the compact Kähler category. Under strong Q-factoriality and a bigness hypothesis, flipping and divisorial contractions are proved to have Kähler targets. A second theorem detects failure of Kählerness for generalized klt spaces in Fujiki class C through a negative rational-curve class or a small Kähler modification. The authors also globalize Q-factorial and dlt modifications in the analytic setting.
abstract_ja: >-
  強く $\mathbb Q$-factorialなコンパクトKähler generalized klt対で境界の一般化部分がbigなら、flipと因子収縮はKähler性を保つ。Fujikiクラス $\mathcal C$ に属する多様体のKähler性判定に加え、generalized klt対のsmall $\mathbb Q$-factorial化とgeneralized pairのdlt modificationも証明する。
abstract_source_url: "https://arxiv.org/abs/2608.20588"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.20588v1](https://arxiv.org/abs/2608.20588)
- **著者:** Christopher Hacon, Yi Li, Lingyao Xie
- **初回投稿日・最終更新日:** 2026-08-20
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体のMMPでは各収縮の底が再び射影的となるが、Kähler圏では同じ保証が自動的でない。高次元のKähler MMPを反復するためには、flipや因子収縮の後も対象がKähler空間に留まることが不可欠である。

本論文は、strongly $\mathbb Q$-factorialなcompact Kähler generalized klt対で $B+\beta_X$ がbigなら、この保存性が成り立つことを示す。従来の三次元で用いられたKleiman型判定を、高次元で使えるnefかつbigな随伴類の判定へ置き換える。

さらにFujikiクラス $\mathcal C$ のgeneralized klt空間が非Kählerである場合の二つの障害を与える。strongly $\mathbb Q$-factorialなら、負向きの有理曲線類が存在しないことがKähler性と同値になる。

## 背景と問題設定

Fujikiクラス $\mathcal C$ はcompact Kähler多様体からbimeromorphic modificationを受けるcompact complex空間からなる。Kähler MMPの予想される出力を構成するには、cone・contraction・flipの存在に加え、各段階でKähler性が失われないことが必要である。

## 主結果

### MMP操作によるKähler性の保存（Theorem 1.2）

$(X,B+\beta)$ をcompact、Kähler、strongly $\mathbb Q$-factorialなgeneralized klt対とし、$B+\beta_X$ をbigとする。極端射線に付随するflipまたは因子収縮 $f:X\to Y$ に対し、$Y$ はKählerである。

### FujikiクラスのKähler判定（Theorem 1.3, Corollary 1.4）

$X$ がFujikiクラス $\mathcal C$ のcompact generalized klt空間で非Kählerなら、負の有理曲線類 $-[C]\in NA(X)$ が存在するか、small $\mathbb Q$-factorial Kähler modification $X^{qf}\to X$ が存在する。とくに $X$ がstrongly $\mathbb Q$-factorialなら、

$$
X\text{ がKähler}\quad\Longleftrightarrow\quad -[C]\notin NA(X)\text{ for every rational curve }C
$$

である。

### 大域的な修正の存在（Theorems 1.5, 1.6）

compact generalized klt対にはsmall projective bimeromorphicなstrongly $\mathbb Q$-factorial化が存在する。またcompact analytic generalized pairには、例外因子とdiscrepancyを制御したglobal dlt modelが存在する。

## 証明の見取り図

収縮を支える類を底のnefかつbigな類 $\alpha_Y$ へ降ろし、そのnull locusが曲線で覆われるというKleiman型判定を用いて $\alpha_Y$ がKählerであることを示す。Kähler判定ではKähler解消から相対nef thresholdを取り、thresholdが0ならsmall modificationを得る。正なら相対MMPを進め、負の有理曲線を得るかKähler性を保つ収縮を反復し、log canonical modelの有限性で停止させる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.20588](https://arxiv.org/abs/2608.20588)
- **Introduction:** Section 1, pp. 1–4
- **主要定理:** Theorems 1.2, 1.3, 1.5, 1.6; Corollary 1.4
- **論文構成:** Section 1.2, p. 4
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
