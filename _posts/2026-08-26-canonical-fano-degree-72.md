---
layout: paper
title: 'A canonical Fano threefold has degree $\leq 72$'
title_ja: "canonical Fano三次元多様体の次数は72以下である"
authors: "Chen Jiang, Tianqi Zhang, Yu Zou"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We show that the anti-canonical volume of a canonical weak Fano $3$-fold is at most $72$. This upper bound is optimal.
topic: algebraic-geometry
tags:
  - fano-varieties
  - birational-geometry
  - minimal-model-program
arxiv_id: "2510.06856v1"
arxiv_url: "https://arxiv.org/abs/2510.06856"
arxiv_submitted: "2025-10-08"
arxiv_updated: "2025-10-08"
summary: >-
  canonical弱Fano三次元多様体の反標準体積が高々72であることを示し、Prokhorovの予想を解決する。反標準線型系の次元にも鋭い上界を与え、等号成立を $\mathbb P(1,1,1,3)$ または $\mathbb P(1,1,4,6)$ へのcrepantな双有理射で特徴づける。
abstract_en: ""
summary_en: >-
  The paper determines the sharp maximum of the anticanonical volume among canonical weak Fano threefolds. It also bounds every anticanonical section space and identifies equality through crepant birational morphisms to one of two weighted projective spaces. The proof uses the minimal model program to compare terminal and canonical birational models, then reduces the volume estimate to surface calculations associated with Mori fiber structures.
abstract_ja: >-
  canonical弱Fano三次元多様体の反標準体積が72以下であることを示す。この上界は最良である。
abstract_source_url: "https://arxiv.org/abs/2510.06856"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.06856](https://arxiv.org/abs/2510.06856)
- **著者:** Chen Jiang, Tianqi Zhang, Yu Zou
- **初回投稿日・最終更新日:** 2025年10月8日（v1）
- **主分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

canonical Fano三次元多様体は有界族をなし、その反標準体積には上界がある。最適上界が72であるというProkhorovの予想は、Gorensteinの場合やPicard数1の特定の場合には知られていたが、一般のcanonical弱Fano三次元多様体には未解決であった。

本論文は全てのcanonical弱Fano三次元多様体 $X$ に対して $(-K_X)^3\le72$ を証明する。さらに全ての正整数 $m$ について反標準切断数を抑え、いずれかの等号が成立する場合を二つの重み付き射影空間へのcrepantな双有理射で完全に特徴づける。

MMPによってterminalなfibration modelとcanonical弱Fano modelを同時に構成し、Mori fiber spaceの構造を使って三次元の体積評価を曲面上の具体的計算へ還元する点が証明の骨格である。

## 背景と問題設定

正規射影多様体 $X$ は $-K_X$ がampleならFano、nefかつbigなら弱Fanoと呼ばれる。三次元の場合の次数は反標準体積 $(-K_X)^3$ であり、滑らかなFano三次元多様体の分類でも中心的な不変量である。

## 主結果

### 最適体積上界と等号成立（Theorem 1.1）

$X$ をcanonical弱Fano三次元多様体とする。このとき

$$
(-K_X)^3\le72
$$

であり、任意の正整数 $m$ に対して

$$
h^0(X,-mK_X)\le(2m+1)(6m^2+6m+1)
$$

が成り立つ。いずれかの不等式が等号となることと、$X_0\simeq\mathbb P(1,1,1,3)$ または $\mathbb P(1,1,4,6)$ への双有理射 $g:X\to X_0$ が存在して

$$
g^*K_{X_0}=K_X
$$

となることは同値である。特に $X$ 自身がcanonical Fanoなら、等号成立は $X\simeq X_0$ と同値である。

## 証明の見取り図

MMPを用いて $X$ から二つのmodelを作る。一方はfibration $Y\to S$ をもつterminal三次元多様体、他方は同じPicard数をもつ $\mathbb Q$-factorial canonical弱Fano三次元多様体 $Z$ であり、問題を $(-K_Z)^3=\operatorname{Vol}(Y,-K_Y)$ の評価へ移す。

Picard数1のcanonical Fanoへの双有理縮約があれば既知結果を適用する。なければMori fiber space、とりわけconic bundleを解析する。適切な自由因子 $G$ に対して $-K_Y-wG$ がbigとなる閾値 $w$ を抑え、$\rho\ge3$ では $\mathbb Q$-fixed素因子の縮約またはconic bundleによって帰納する。最後に $G$ 上の因子の体積計算が上界72を与える。

## 原論文との対応

- **Abstractページ:** [arXiv:2510.06856](https://arxiv.org/abs/2510.06856)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中の主要定理:** Theorem 1.1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
