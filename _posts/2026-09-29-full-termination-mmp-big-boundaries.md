---
layout: paper
title: "Full termination of MMP for klt pairs with big boundaries"
title_ja: "big境界をもつklt対に対するMMPの完全停止"
authors: "Kenta Hashizume"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove the full termination of the minimal model program for klt pairs with big boundaries.
topic: algebraic-geometry
tags:
  - minimal-model-program
  - birational-geometry
  - singularities
arxiv_id: "2609.33679v1"
arxiv_url: "https://arxiv.org/abs/2609.33679"
arxiv_submitted: "2026-09-27"
arxiv_updated: "2026-09-27"
summary: >-
  $K_X+\Delta$ または境界 $\Delta$ がbigである射影klt対について、任意のMMPが有限回で停止することを証明する。極端射線関数の有限性、Mori fiber spaceの基底に対する次元帰納、逆向きMMPの一様制御を組み合わせ、高次元でMMP with scalingを越える完全停止を得る。
abstract_en: >-
  We prove the full termination of the minimal model program for klt pairs with big boundaries.
summary_en: ""
abstract_ja: >-
  bigな境界をもつklt対について、極小モデル・プログラムが完全に停止することを証明する。
abstract_source_url: "https://arxiv.org/abs/2609.33679"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.33679](https://arxiv.org/abs/2609.33679)
- **著者:** Kenta Hashizume
- **初回投稿日・最終更新日:** 2026年9月27日
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

MMPの停止は双有理幾何の中心的未解決問題である。一般型やbig境界の場合にはMMP with scalingの停止が知られていたが、任意に選んだ負の極端射線を縮約するMMPの完全停止は高次元で残っていた。

本論文は、$K_X+\Delta$ または $\Delta$ がbigである射影klt対について、無限に続くMMPが存在しないことを証明する。さらに、$\Delta$ がbigで $K_X+\Delta$ がpseudo-effectiveでない場合、固定した対から得られるmarked Mori fiber spaceが有限個しかないことを示す。

## 背景と問題設定

既知の一様Cartier指数評価と極端射線の長さの有界性を、固定した出発対から生じるすべてのMMPへ同時に適用する。minimal log discrepancyに関する予想は使わない一方、対象となる対について極小モデルまたはMori fiber spaceが存在することを本質的に用いる。

## 主結果

### 完全停止（Theorem 1.1）

$(X,\Delta)$ を射影klt対とし、$K_X+\Delta$ または $\Delta$ がbigであるとする。このとき $(K_X+\Delta)$-MMPのstepからなる無限列は存在しない。次元制限はなく、任意のMMPを対象とする。

### Marked Mori fiber spaceの有限性（Theorem 1.2）

$(X,\Delta)$ が射影的、$\mathbb Q$-factorialかつkltで、$\Delta$ がbig、$K_X+\Delta$ がpseudo-effectiveでないとする。この固定した対からMMPを走らせて得られるmarked Mori fiber spaceは、markingと両立する同型を除いて有限個である。

## 証明の見取り図

一様Cartier指数と極端射線の長さをShokurov polytopeの議論へ入れ、現れ得る極端射線関数と縮約され得る素因子を有限個に抑える。Mori fiber spaceの基底を一様なklt条件をもつ低次元の小双有理モデルとして整理し、次元帰納で終端モデルを有限化する。逆MMP stepにも有限性を確立し、終端モデルまでのstep数を一様に抑えることで完全停止へ戻る。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.33679](https://arxiv.org/abs/2609.33679)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1 and 1.2
- **論文構成の説明:** Section 1.3, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
