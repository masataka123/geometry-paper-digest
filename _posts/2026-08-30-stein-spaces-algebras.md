---
layout: paper
title: "Stein spaces and Stein algebras"
title_ja: "Stein空間とStein代数"
authors: "Olivier Benoist"
arxiv_primary_category: "math.CV"
arxiv_categories: [math.CV]
arxiv_abstract: >-
  We prove that the category of Stein spaces and holomorphic maps is anti-equivalent to the category of Stein algebras and $\mathbb{C}$-algebra morphisms. This removes a finite dimensionality hypothesis from a theorem of Forster.
topic: several-complex-variables
tags: [complex-analytic-spaces, stein-geometry, oka-theory]
arxiv_id: "2410.05521v2"
arxiv_url: "https://arxiv.org/abs/2410.05521"
arxiv_submitted: "2024-10-07"
arxiv_updated: "2026-03-01"
summary: >-
  Stein空間を大域正則関数のFréchet代数へ送る反変関手が、有限次元性を仮定せず圏同値を与えることを示す。核心は任意のStein空間から$\mathbb C^2$への、全ファイバーが有限次元となる正則写像の構成と、Stein代数準同型の自動連続性である。
abstract_en: >-
  We prove that the category of Stein spaces and holomorphic maps is anti-equivalent to the category of Stein algebras and $\mathbb{C}$-algebra morphisms. This removes a finite dimensionality hypothesis from a theorem of Forster.
summary_en: ""
abstract_ja: >-
  Stein空間と正則写像の圏が、Stein代数と$\mathbb C$-代数準同型の圏に反同値であることを示す。これによりForsterの定理から有限次元性の仮定が除かれる。
abstract_source_url: "https://arxiv.org/abs/2410.05521"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2410.05521v2](https://arxiv.org/abs/2410.05521v2)
- **著者:** Olivier Benoist
- **初回投稿日:** 2024年10月7日
- **最終更新日:** 2026年3月1日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

アフィン代数多様体が有限生成代数から復元されるのと同様に、Stein空間はその大域正則関数環から復元できる。本論文は、この対応を非被約または無限次元でもよい第二可算Stein空間に対して確立する。

Stein空間$S$の正則関数環$\mathcal O(S)$は自然なFréchet位相をもち、この形の位相代数をStein代数と呼ぶ。従来、連続な準同型に限る場合や有限次元の場合にはForsterの定理があった。本論文は任意の$\mathbb C$-代数準同型が自動的に連続となることを導き、制限を除く。

技術的核心は、任意のStein空間$S$に対して、全ファイバーが有限次元となる正則写像$S\to\mathbb C^2$を構成することである。この次元削減によりForsterの有限次元理論へ帰着する。

## 背景と問題設定

複素空間は局所的に有限個の正則関数の零点集合として定義され、Stein性は任意の連接層$\mathcal F$に対する

$$
H^k(S,\mathcal F)=0\qquad(k>0)
$$

で特徴づけられる。有限埋め込み次元のStein空間はある$\mathbb C^N$の閉複素部分空間であり、アフィン代数幾何との類似がある。しかし無限次元を許すと、代数準同型の連続性が自明でなく、圏論的復元の障害となる。

## 主結果

### Stein空間とStein代数の反同値（Theorem 0.1 / Theorem 3.3）

反変関手

$$
S\longmapsto\mathcal O(S)
$$

は、Stein空間と正則写像の圏からStein代数と$\mathbb C$-代数準同型の圏への反同値を与える。準同型に連続性をあらかじめ仮定せず、空間にも有限次元性を課さない点が新しい。

### 有限次元ファイバーをもつ写像（Theorem 0.2 / Theorem 2.1）

任意のStein空間$S$について、全ファイバーが有限次元である正則写像

$$
f:S\to\mathbb C^2
$$

が存在する。$\mathbb C$を値域とする同様の写像は一般には存在しないため、$\mathbb C^2$という結論は最適である。

## 証明の見取り図

Forstnerič–Woldが構成した$\mathbb C^2$内のOka多様体と、Stein空間からOka多様体への正則写像の拡張定理を用いて$S\to\mathbb C^2$を作る。そのファイバーが有限次元になるよう制御した後、各有限次元部分でForsterの自動連続性を適用する。これにより一般のStein代数準同型の連続性を得て、連続準同型について既知の反同値へ帰着する。

## 原論文との対応

- **Abstractページ:** [arXiv:2410.05521v2](https://arxiv.org/abs/2410.05521v2)
- **Introduction:** pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 0.1, 0.2
- **論文構成の説明:** p. 2
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
