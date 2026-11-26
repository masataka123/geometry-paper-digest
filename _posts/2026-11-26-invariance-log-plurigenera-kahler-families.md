---
layout: paper
title: Invariance of log plurigenera in families of compact Kähler manifolds
title_ja: コンパクトKähler多様体の族における対数多重種数の不変性
authors: Zhengyu Hu, Kefeng Liu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $(X_t,B_t)$ be a smooth proper family of pairs with Kähler fibres, where the boundary has relative simple normal crossings and real coefficients in $[0,1)$. We show that for every $m\ge1$, every section of $mK_{X_t}+\lfloor mB_t\rfloor$ extends locally over the base. In particular, the log plurigenera are locally constant, and for $B_t=0$ we obtain the deformation invariance of the plurigenera $P_m(X_t)$. Since the total space need not be Kähler, we run the minimal model program on the central fibre, using the work of Hacon-Wang and Hacon-Xie, and extend its steps over a disc. The obstruction to lifting a jet vanishes along the fixed part determined by the final model, and so it is square-integrable for the weight in the extension theorem of Cao-Păun. As an application, if the adjoint is pseudoeffective on one fibre, then the pair has a relative good minimal model near each point of the base and a relative canonical model over the whole base.
topic: algebraic-geometry
tags:
- minimal-model-program
- multiplier-ideals-extension
arxiv_id: 2611.34933v1
arxiv_url: https://arxiv.org/abs/2611.34933
arxiv_submitted: '2026-11-25'
arxiv_updated: '2026-11-25'
summary: 各ファイバーがKählerである滑らかな固有族において、境界を加えた多重標準切断が底のStein近傍に延長することを示す。境界を零にすると、すべての多重種数についてSiuの変形不変性予想が従う。
abstract_en: ''
summary_en: A family can have Kähler fibres even when its total space is not Kähler. Hu and Liu use a minimal model of one fibre to control obstructions to extending pluricanonical sections. This yields a base change statement for spaces of sections, including sections with prescribed logarithmic boundary.
abstract_ja: 全空間にKähler計量を仮定せず、中心ファイバーの極小モデルの固定部分から切断の延長障害を制御する。境界係数は1未満の実数まで許され、一つのファイバーで随伴類が擬有効なら相対標準モデルも構成される。
abstract_source_url: https://arxiv.org/abs/2611.34933
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.34933v1](https://arxiv.org/abs/2611.34933)
- **著者:** Zhengyu Hu, Kefeng Liu
- **初回投稿日:** 2026-11-25
- **最終更新日:** 2026-11-25
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな射影族では、多重標準形式の空間の次元は変形しても変わらない。Siuが問うたのは、この性質がコンパクトKählerファイバーだけを仮定しても保たれるかである。

著者らは次元の一定性を、各切断を底の方向へ延ばせるという形で示す。相対単純正規交差の境界を許し、次数ごとに境界の整数部分を取る。

極小モデルについては局所と大域で結論が異なる。良い極小モデルは底の各点の近くで得られ、そこから定まる標準モデルは底全体で定義できる。

## 背景と問題設定

$p:\mathcal X\to S$ は連結なファイバーをもつ固有全射正則沈め込みで、底は連結な複素多様体とする。全空間は底上局所的にさえKählerとは限らず、射影族の場合の相対MMPをそのまま使えない。

## 主結果

### 多重標準切断の延長（Theorem 1.1）

各 $X\_t$ がKählerで、相対単純正規交差境界 $B$ の係数が $[0,1)$ に属すれば、すべての整数 $m\ge1$ について
$$
h^0(X\_t,mK\_{X\_t}+\lfloor mB\_t\rfloor)
$$
は $t$ に依存しない。対応する相対直像層は局所自由で正則基底変換と可換であり、各ファイバーの切断はその点の任意のStein開近傍の逆像へ延長する。$B=0$ が通常の多重種数の変形不変性である。

### 相対モデル（Theorem 1.3）

ある $s$ で $K\_{X\_s}+B\_s$ が擬有効なら、底の各点の解析的近傍上に良い極小モデルが存在する。相対標準モデルは大域的に存在し、その各ファイバーは元の対の標準モデルである。有理境界なら相対標準環は局所有限生成であり、相対Projでこのモデルが得られる。

## 証明の見取り図

中心ファイバー上のMMPを終結させ、収縮とフリップを円板上に延長する。共通解消上で半豊富なモデルと比較すると、ジェット延長の障害を固定部分に沿って消える代表で書ける。この消滅次数がCao–Păunの延長定理に必要な重み付き可積分性を与える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.34933)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.34933v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1、Corollary 1.2、Theorem 1.3。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.34933v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
