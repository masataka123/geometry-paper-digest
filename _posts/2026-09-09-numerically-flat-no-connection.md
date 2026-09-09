---
layout: paper
title: 'A numerically flat rank-two bundle without a holomorphic connection on a $\partial\bar\partial$-threefold'
title_ja: '$\partial\bar\partial$-三次元多様体上の正則接続をもたない数値的平坦階数2束'
authors: "Tianzhi Hu, Runze Zhang"
arxiv_primary_category: "math.CV"
arxiv_categories: [math.CV, math.AG, math.DG]
arxiv_abstract: >-
  We construct a numerically flat holomorphic vector bundle of rank two on a compact complex threefold satisfying the ordinary $\partial\bar\partial$-lemma and prove that it admits no holomorphic connection, thereby giving,in particular, a negative answer to a question posed by Cao--Deng--Matsumura.
topic: several-complex-variables
tags: [vector-bundles-sheaves, positivity]
arxiv_id: "2609.08757v1"
arxiv_url: "https://arxiv.org/abs/2609.08757"
arxiv_submitted: "2026-09-08"
arxiv_updated: "2026-09-08"
summary: >-
  通常の$\partial\bar\partial$-補題を満たすコンパクト複素三次元多様体上に、数値的平坦でありながら正則接続を一つももたない階数2ベクトル束を構成する。これはKähler・Fujikiの場合に成り立つ平坦性との対応が、通常の$\partial\bar\partial$-補題だけからは従わないことを示す反例である。
abstract_en: >-
  We construct a numerically flat holomorphic vector bundle of rank two on a compact complex threefold satisfying the ordinary $\partial\bar\partial$-lemma and prove that it admits no holomorphic connection, thereby giving,in particular, a negative answer to a question posed by Cao--Deng--Matsumura.
summary_en: ""
abstract_ja: >-
  通常の$\partial\bar\partial$-補題を満たすコンパクト複素三次元多様体上に、数値的平坦な階数2正則ベクトル束を構成する。しかしこの束は正則接続をもたない。したがってCao--Deng--Matsumuraが提起した、任意のコンパクト複素多様体上で数値的平坦性から適合する平坦正則接続が得られるかという問いに否定的な答えを与える。
abstract_source_url: "https://arxiv.org/abs/2609.08757"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2609.08757](https://arxiv.org/abs/2609.08757)
- **著者:** Tianzhi Hu, Runze Zhang
- **初回投稿日・最終更新日:** 2026年9月8日
- **主分類・副分類:** math.CV / math.AG / math.DG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

コンパクトKähler多様体では、数値的平坦ベクトル束はHermitian平坦な商をもつフィルトレーションを備え、平坦正則接続と強く結びつく。近年このフィルトレーションの存在は任意のコンパクト複素多様体へ拡張されたが、接続の存在まで従うかは未解決であった。

本論文は通常の$\partial\bar\partial$-補題を満たす三次元多様体に限定しても答えが否定的であることを示す。重要なのは、通常の補題が自明係数の場合だけを扱う一方、フィルトレーションに適合する接続の構成にはHermitian平坦束を係数とする捩れた$\partial\bar\partial$-補題が必要な点である。

反例は楕円曲線上の二次元複素トーラス族となる可解多様体上で、Hermitian平坦直線束$L$による$\mathcal O_X$の非自明拡大として構成される。拡大束は数値的平坦だが、局所係数の明示計算が正則接続の存在と矛盾する。

## 背景と問題設定

数値的平坦束$E$は$E$と$E^*$がnefとなる束である。既知の構造定理は
$$
0=E_0\subset E_1\subset\cdots\subset E_k=E
$$
で各商$E_i/E_{i-1}$がHermitian平坦となるフィルトレーションを与える。問題は、このフィルトレーションと両立する平坦正則接続が常に存在するかというものである。

## 主結果

### 主定理（Theorem A）

$\partial\bar\partial$-補題を満たすコンパクト複素三次元多様体$X$と、正則接続をもたない数値的平坦階数2束$E\to X$が存在する。具体的にはHermitian平坦直線束$L$を用いた
$$
0\longrightarrow L\longrightarrow E\longrightarrow\mathcal O_X\longrightarrow0
$$
として$E$を作る。局所的な拡大形式の係数を$f_1=e^{-2iz_3}$、$f_2=e^{2iz_3}$と選ぶと
$$
f_1f'_2-f_2f'_1=4i\ne0
$$
である。一方、正則接続が存在すればトーラスファイバー上の積分により左辺は零でなければならず、矛盾する。

## 証明の見取り図

まず格子による可解Lie群の商として$X$を構成し、DolbeaultおよびBott--Chernコホモロジーの既知の計算から通常の$\partial\bar\partial$-補題を確認する。次にユニタリ指標から平坦直線束$L$を作り、$L$値$(0,1)$形式で拡大類を定める。$L$と$L^*$のnef性は拡大を通じて$E$と$E^*$へ移る。最後に、正則接続が強制する微分関係をトーラス上で積分し、明示した係数がその関係を破ることを示す。

## 原論文との対応
- **Abstractページ:** [arXiv:2609.08757](https://arxiv.org/abs/2609.08757)
- **Introduction:** Section 1, pp. 1--3
- **主要定理:** Theorem A
- **論文構成:** Introduction末尾の構成説明
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
