---
layout: paper
title: "K-stability of Q-Fano Spherical Varieties via Compatible Divisors"
title_ja: "整合的因子によるQ-Fano球面多様体のK安定性"
authors: "Renpeng Zheng"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study the K-stability of $\mathbb{Q}$-Fano spherical varieties using compatible divisors. More precisely, if the $\mathbb{Q}$-Fano variety, with a reductive group action, has an open Borel subgroup orbit, then there is a unique anticanonical $\mathbb{Q}$-divisor computing the equivariant stability threshold. This $\mathbb{Q}$-divisor is invariant under the Borel subgroup action, and it characterizes the K-stability of a $\mathbb{Q}$-Fano spherical variety.
topic: algebraic-geometry
tags:
  - k-stability
  - fano-varieties
  - singularities
  - birational-geometry
arxiv_id: "2601.00054v2"
arxiv_url: "https://arxiv.org/abs/2601.00054"
arxiv_submitted: "2025-12-31"
arxiv_updated: "2026-08-30"
summary: >-
  Q-Fano球面多様体の等変安定性閾値を、Borel部分群不変な反標準Q因子一つで計算する公式を与える。有限個の不変因子的付値へ計算を還元し、K半安定性を整合的因子の対数的標準閾値で判定できる形にする。
abstract_en: ""
summary_en: >-
  The paper gives a divisor-based computation of equivariant stability thresholds for spherical Q-Fano varieties. A canonically determined Borel-invariant anticanonical rational divisor reduces the threshold to finitely many invariant divisorial valuations. This produces a linearization-free criterion for K-semistability and simplifies earlier valuative formulas.
abstract_ja: >-
  Q-Fano球面多様体のK安定性を整合的因子で調べる。開Borel軌道をもつ場合、等変安定性閾値を計算するBorel不変反標準Q因子が一意に存在し、この因子がK安定性を特徴づける。
abstract_source_url: "https://arxiv.org/abs/2601.00054"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.00054](https://arxiv.org/abs/2601.00054)
- **著者:** Renpeng Zheng
- **初回投稿日:** 2025-12-31
- **最終更新日:** 2026-08-30
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

K安定性はQ-Fano多様体上のKähler–Einstein計量の存在を捉える代数的条件であり、安定性閾値 $\delta(X)$ による付値的な判定が知られている。しかし一般の多様体で閾値を計算することは難しく、対称性の大きいトーリック多様体や球面多様体が重要な検証対象となる。

本論文はAbban–Zhuangの整合的因子の考えを使い、球面多様体の等変安定性閾値を一つのBorel不変反標準Q因子から計算する。従来の公式を単純化し、群作用の線形化を事前に選ぶ必要も除く。

Zhuangの等変判定と組み合わせると、この因子は通常のK半安定性を判定する。トーリックの場合には、トーラス不変素因子の和という古典的な反標準因子を回復する。

## 背景と問題設定

連結簡約群 $G$ とBorel部分群 $B$ に対し、開 $B$ 軌道をもつ正規多様体を球面 $G$ 多様体という。Q-Fano球面多様体 $X$ の $G$ 不変因子的付値全体を用いて定義される $\delta^G(X)$ を、有限で具体的なデータへ還元することが問題となる。

## 主結果

### 等変安定性閾値の公式（Theorem B / Theorem 4.1）

$X$ をQ-Fano球面 $G$ 多様体とすると、$X$ だけから一意に定まる有効なBorel不変反標準Q因子 $D_X^B$ が存在し、

$$
\delta^G(X)=\inf_{v\in \operatorname{DivVal}^{G,\circ}_X}
\frac{A_X(v)}{v(D_X^B)}
=\min_{i=1,\ldots,k}\frac{A_X(v_i)}{v_i(D_X^B)}
$$

となる。ここで $A_X(v)$ は対数的食い違い、$\{v_i\}$ は所定の有限個の $G$ 不変因子的付値である。したがって無限個の付値による下限が有限個の比の最小値へ還元される。

### トーリックの場合（Corollary A / Corollary 2.8）

トーリックQ-Fano多様体では $D_X^T=D_1+\cdots+D_k$ がK半安定性を特徴づける。この公式は球面多様体の主定理の基礎例である。

## 証明の見取り図

整合的因子を用いて基底型因子と付値の期待消滅次数を結び、球面多様体の有理線形系を表現論的に整理する。対数的食い違いが付値錐上で区分的線形であるため、下限は有限個の指定付値で達成される。最後に等変K半安定性と通常のK半安定性の同値を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2601.00054](https://arxiv.org/abs/2601.00054)
- **Introduction:** Introduction, pp. 1–2
- **Introduction中で言及された主要定理番号:** Corollary A、Theorem B
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
