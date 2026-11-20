---
layout: paper
title: The Holomorphic Reduction of Pseudoconvex Homogeneous Manifolds
title_ja: 擬凸な複素等質多様体の正則簡約
authors: Bruce Gilligan
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Suppose $G$ is a connected complex Lie group and $H$ is a closed complex subgroup. Then there exists a closed complex subgroup $J$ of $G$ containing $H$ such that the fibration $π:G/H \to G/J$ is the holomorphic reduction of $G/H$, i.e., $G/J$ is holomorphically separable and ${\mathcal O}(G/H) \cong π^*{\mathcal O}(G/J)$. In this paper we prove that if $G/H$ is pseudoconvex, i.e., if $G/H$ admits a continuous plurisubharmonic exhaustion function, then $G/J$ is Stein and $J/H$ has no non-constant holomorphic functions.
topic: several-complex-variables
tags:
- stein-geometry
- pluripotential-theory
arxiv_id: 2611.24922v1
arxiv_url: https://arxiv.org/abs/2611.24922
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 擬凸な複素等質多様体の正則簡約では、底がSteinであり、ファイバー上の正則関数は定数に限られる。作用する連結複素Lie群が可解でも簡約的でもない場合を含め、以前の証明の欠落を埋める。
abstract_en: ''
summary_en: Holomorphic reduction groups points according to the global functions that can distinguish them. Functions defined only on a fiber need not normally extend to the ambient space. Gilligan shows that pseudoconvexity of a complex homogeneous manifold eliminates this possible source of extra functions and forces its reduction base to be Stein.
abstract_ja: 大域正則関数が二点を区別できるかで等質多様体を分解する。擬凸性を仮定すると、底には正則分離性より強いStein性が従い、ファイバーには全空間に延長できない非定数正則関数さえ存在しない。
abstract_source_url: https://arxiv.org/abs/2611.24922
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24922v1](https://arxiv.org/abs/2611.24922)
- **著者:** Bruce Gilligan
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素等質多様体上の正則関数をすべて記録する商が正則簡約である。その底の正則関数は点を分離するが、一般にはそれだけでStein性は保証されない。

もう一つの問題はファイバーにある。全空間の関数が一つのファイバー上で一定でも、ファイバー自身に定義された関数が全空間に延びるとは限らない。

著者は連続な多重劣調和尽くし関数が存在する場合に、この二つの問いに同時に答える。論文は可解群と簡約群で知られていた結果を一般の連結複素Lie群に統一し、以前に発表した同じ主張の証明を修正する。

## 背景と問題設定

$G$ は連結複素Lie群、$H$ は閉複素部分群とする。正則簡約は $H\subset J\subset G$ に対する商写像 $\pi:G/H\to G/J$ で、底が正則分離的かつ $\mathcal O(G/H)=\pi^\ast \mathcal O(G/J)$ となるものである。

## 主結果

### 底のStein性とファイバーの正則関数（Theorem 1.1）

$G/H$ が連続な多重劣調和尽くし関数を持てば、

$$
G/J\ \text{はStein},\qquad \mathcal O(J/H)=\mathbb C
$$

である。これはファイバーのコンパクト性を仮定せずに得られる結論である。例えば $\mathbb C^n\setminus\lbrace 0\rbrace $（$n>1$）は正則関数で点を分離できてもSteinではなく、底に関する主張には擬凸性が実質的に働く。

## 証明の見取り図

序論は、一般の場合を可解、半単純、両者の混合の場合に帰着すると説明する。混合の場合には根基とLevi部分群がともに正次元であり、以前の議論で不足していた軌道の閉性などを扱う必要がある。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24922)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24922v1) — §1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24922v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
