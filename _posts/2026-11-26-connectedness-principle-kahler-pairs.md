---
layout: paper
title: Connectedness Principle in the Complex Analytic Setting
title_ja: コンパクトKähler一般化対の非klt軌跡の連結性
authors: Swapnajit Das
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: We show that if $(X,B)$ is a normal compact Kähler pair and $f:X\to Z$ is a proper morphism with connected fibers to a normal compact Kähler variety $Z$ such that $(-K_X+B)$ is nef over $Z$, then $\mathrm{Nklt}(X,B)\cap f^{-1}(z)$ has at most two connected components for every $z\in Z$. More generally, we prove the result for generalized pairs whose nef part is allowed to be transcendental. Moreover, we record that the same result holds for projective morphism between analytic varieties (possibly non-compact).
topic: algebraic-geometry
tags:
- singularities
- minimal-model-program
- positivity
arxiv_id: 2611.34654v1
arxiv_url: https://arxiv.org/abs/2611.34654
arxiv_submitted: '2026-11-25'
arxiv_updated: '2026-11-25'
summary: 反対数標準類が底上nefなコンパクトKähler一般化対では、各ファイバー中の非klt軌跡は高々二つの連結成分をもつ。非連結な場合は二点付き射影直線を一般ファイバーにもつモデルが現れる。
abstract_en: ''
summary_en: The question concerns a single fibre, even if the non-klt locus is connected in the total space. Das follows the fibre through contractions over a compact Kähler base. A disconnected intersection forces a model with a two-pointed rational curve as its general fibre.
abstract_ja: nef部分が実因子で表せない一般化対にも連結性原理を拡張する。相対的にbigなら連結であり、nef性だけのもとで連結性が破れる場合には対数標準性と双有理的な構造を同時に得る。
abstract_source_url: https://arxiv.org/abs/2611.34654
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.34654v1](https://arxiv.org/abs/2611.34654)
- **著者:** Swapnajit Das
- **初回投稿日:** 2026-11-25
- **最終更新日:** 2026-11-25
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

係数一の点をいくつも境界に入れた射影直線では、その非klt軌跡はいくつもの連結成分をもつ。成分数を制約するのは、対の反対数標準類の正値性である。

Dasは相対的なnef性のもとで、一つのファイバーに現れ得る成分が高々二つであることを示す。相対的にbigでもあれば一つのファイバーで非連結になることはない。

二つに分かれた場合には、その理由が双有理モデルの一般ファイバー上で可視化される。境界は射影直線上の二点になり、一般化対のnef部分はそこで数値的に消える。

## 背景と問題設定

$f:X\to S$ は正規コンパクトKähler空間の間の連結ファイバーをもつ射とし、境界を $B$、一般化対のnef部分を $\beta$ とする。$\beta$ は上のモデルにわたる $(1,1)$ カレントのデータであり、実因子による表示を仮定しない。

## 主結果

### ファイバー上の連結性と二成分の場合（Theorem 1.1）

$-(K\_X+B+\beta)$ が $S$ 上nefかつbigなら、すべての $s$ で $\mathrm{Nklt}(X,B+\beta)\cap f^{-1}(s)$ は連結である。nef性だけを仮定し、この交わりが非連結なら成分はちょうど二つで、対は $s$ 上一般化対数標準である。

そのときクレパントな上のモデル $W$ と $S$ 上の収縮 $W\to Z$ があり、$\dim Z=\dim X-1$ である。その一般ファイバー $F$ は
$$
(F,B\_W|\_F)\simeq(\mathbb P^1,p\_1+p\_2),\qquad \beta\_W|\_F\equiv0
$$
を満たす。

## 証明の見取り図

射影的な場合の局所的な議論と異なり、底を小近傍に取り替えると、使いたいKähler MMPのコンパクト性仮定を失う。そこで元の底全体の上でMMPを走らせ、指定ファイバーの非連結性が各段階でどう移るかを追跡する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.34654)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.34654v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1、解析空間の射影射に関するTheorem 4.3への言及。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.34654v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
