---
layout: paper
title: A fake quadric that is not a bidisk quotient
title_ja: 双円板商にならない偽二次曲面の構成
authors: Zoltán Szabó
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.GT
arxiv_abstract: Fake quadrics are minimal complex surfaces of general type with $b_1=0$ and $e=4$. The paper gives a construction of a fake quadric $S$ that is a $32$-fold branched cover of $\mathbf{CP}^1\times\mathbf{CP}^1$ along nine curves. This configuration is given by four horizontal lines, four vertical lines and the diagonal. We show that $S$ is not aspherical. As a corollary the universal cover of $S$ is not the bidisk $\mathbf{H}\times\mathbf{H}$.
topic: algebraic-geometry
tags:
- uniformization
- fundamental-groups
arxiv_id: 2611.33669v1
arxiv_url: https://arxiv.org/abs/2611.33669
arxiv_submitted: '2026-11-25'
arxiv_updated: '2026-11-25'
summary: 射影直線の積上の九本の曲線に沿う32枚の分岐被覆として、普遍被覆が可縮でない偽二次曲面を構成する。これにより、数値不変量が二次曲面と一致しても普遍被覆が双円板になるとは限らないことが分かる。
abstract_en: ''
summary_en: The construction starts with a grid of eight lines on a quadric and adds the diagonal to its branch divisor. An explicit permutation action determines a connected cover with the numerical invariants of a fake quadric. A separate topological argument rules out the bidisk as its universal cover.
abstract_ja: 明示的なモノドロミーにより一般型の滑らかな極小曲面を得る。そのEuler数は4で第一ホモロジーは有限であるが、実射影平面からの写像で検出される位相的性質が双円板による一意化を妨げる。
abstract_source_url: https://arxiv.org/abs/2611.33669
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.33669v1](https://arxiv.org/abs/2611.33669)
- **著者:** Zoltán Szabó
- **初回投稿日:** 2026-11-25
- **最終更新日:** 2026-11-25
- **主分類・副分類:** math.AG（主分類）; math.GT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

偽二次曲面は第一Betti数が零でEuler数が4となる一般型の滑らかな極小曲面である。これらの数値だけで普遍被覆の複素構造をどこまで決定できるかが問題になる。

Szabóは、射影直線の積で四本の縦線と四本の横線に対角線を加え、その上の分岐被覆を指定する。分岐因子の成分だけでなく、各成分を巡る置換を決めることが構成の一部である。

こうして得た曲面のホモロジーを計算したうえで、普遍被覆の可縮性を別に調べる。偽二次曲面の数値条件を満たすことと双円板で一意化されることを、この一例が切り分ける。

## 背景と問題設定

$Q=\mathbb P^1\times\mathbb P^1$ の両因子で同じ四点を選ぶ。縦横の八直線と対角線の和 $D$ には三重点が四個、二重点が十二個ある。$Q\setminus D$ の基本群を32枚のシート $\mathbb F\_2^5$ に推移的に作用させるモノドロミーを指定する。

## 主結果

### 分岐被覆の不変量と普遍被覆（Theorem 1.1）

指定した32枚の分岐被覆 $S\to Q$ は滑らかな極小一般型曲面であり、
$$
e(S)=4,\qquad H\_1(S;\mathbb Z)\simeq(\mathbb Z/2)^3\oplus\mathbb Z/4 .
$$
従って $b\_1(S)=0$ で $S$ は偽二次曲面である。さらに $S$ はasphericalではない。$\mathbb H\times\mathbb H$ は可縮なので、$S$ の普遍被覆はこれと双正則にはならない。

## 証明の見取り図

シートの座標を順に忘れると8枚と16枚の中間被覆が現れる。最後の座標を変える対合で32枚の被覆と16枚の被覆の関係を調べる。非可縮性の証明について序論が示す着想は、基本群に非自明な写像を誘導する $\mathbb{RP}^2\to S$ を構成することである。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.33669)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.33669v1) — §1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.33669v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
