---
layout: paper
title: 'A canonical Fano threefold has Fano index $\leq 66$'
title_ja: "標準特異点をもつFano三次元多様体のFano指数は66以下"
authors: "Chen Jiang, Haidong Liu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We show that the $\mathbb{Q}$-Fano index of a canonical weak Fano $3$-fold is at most $66$. This upper bound
  is optimal and gives an affirmative answer to a conjecture of Chengxi Wang in dimension $3$. During the proof,
  we establish a new Riemmann--Roch formula for canonical $3$-folds and provide a detailed study of non-isolated
  singularities on canonical Fano $3$-folds, concerning both their local and global properties. Our proof also
  involves a Kawamata--Miyaoka type inequality and geometry of foliations of rank $2$ on canonical Fano
  $3$-folds.
topic: algebraic-geometry
tags:
  - fano-varieties
  - singularities
  - foliations
arxiv_id: "2508.16364v2"
arxiv_url: "https://arxiv.org/abs/2508.16364"
arxiv_submitted: "2025-08-22"
arxiv_updated: "2025-10-20"
summary: >-
  標準特異点をもつ弱Fano三次元多様体の $\mathbb Q$-
  Fano指数が66以下であることを証明し、重み付き射影空間の例により最適性を示す。標準三次元多様体用のRiemann–Roch公式、Kawamata–Miyaoka型不等式、階数2
  の葉層の幾何を組み合わせる。
abstract_en: >-
  We show that the $\mathbb{Q}$-Fano index of a canonical weak Fano $3$-fold is at most $66$. This upper bound
  is optimal and gives an affirmative answer to a conjecture of Chengxi Wang in dimension $3$. During the proof,
  we establish a new Riemmann--Roch formula for canonical $3$-folds and provide a detailed study of non-isolated
  singularities on canonical Fano $3$-folds, concerning both their local and global properties. Our proof also
  involves a Kawamata--Miyaoka type inequality and geometry of foliations of rank $2$ on canonical Fano
  $3$-folds.
summary_en: ""
abstract_ja: >-
  標準特異点をもつ弱Fano三次元多様体の $\mathbb Q$-
  Fano指数が高々66であることを示す。この上界は最適であり、証明では新しいRiemann–Roch公式、非孤立特異点の局所・大域的解析、Kawamata–Miyaoka型不等式、
  階数2の葉層を用いる。
abstract_source_url: "https://arxiv.org/abs/2508.16364"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---
## 書誌情報

- **arXiv:** [arXiv:2508.16364](https://arxiv.org/abs/2508.16364)
- **著者:** Chen Jiang, Haidong Liu
- **主分類:** math.AG
- **ライセンス:** CC BY 4.0

## 要約

弱Fano多様体の $\mathbb Q$-Fano指数は $-K_X\sim_{\mathbb Q}qA$ と書ける最大の $q$ である。terminal三次元の場合と違い、canonical特異点は非孤立にもなり分類もないため、従来の上界は極めて粗かった。

本論文はcanonical弱Fano三次元多様体に対して最適上界66を証明する。等号例 $\mathbb P(5,6,22,33)$ が存在するため改善できない。

証明はcanonical三次元多様体のWeil因子に対する新しいRiemann–Roch公式を構築し、特異曲線と孤立特異点の寄与を可積分性条件として利用する。Kawamata–Miyaoka型不等式で候補を絞り、最後に階数2の代数的可積分葉層の交点数から残りを排除する。

## 背景と問題設定

$$q_{\mathbb Q}(X)=\max\{q\mid -K_X\sim_{\mathbb Q}qA,\ A\in\operatorname{Cl}(X)\}$$

と定める。canonical特異点ではterminal化に移ると $A$ のWeil因子としての情報が失われ、Reidの公式も直接適用できないことが障害である。

## 主結果

### Theorem 1.1

canonical弱Fano三次元多様体 $X$ なら

$$q_{\mathbb Q}(X)\le 66$$

である。重み付き射影空間 $\mathbb P(5,6,22,33)$ の指数が66なので最適であり、Wangの三次元の場合の予想を肯定する。

## 証明の見取り図

$X$ をPicard数1かつtorsion-freeなWeil類群をもつ場合へ還元し、terminal化上のWeil pullbackでコホモロジーを保存してRiemann–Rochを適用する。特異曲線の次数に対する整数合同条件とKawamata–Miyaoka型不等式から $q>66$ の候補を36型へ絞る。24型は切断次元の非整数性で排除し、残る12型では誘導された階数2葉層の一般葉 $L$ に対する上界 $( -K_{\mathcal F})^2\cdot L\le8$ と、$L\sim sA$, $s\ge60$ から来る反対向きの評価を矛盾させる。

## 原論文との対応

- **Abstractページ:** [arXiv:2508.16364](https://arxiv.org/abs/2508.16364)
- **Introduction:** Section 1, pp. 1–4
- **確認したarXivバージョン:** 2508.16364v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
