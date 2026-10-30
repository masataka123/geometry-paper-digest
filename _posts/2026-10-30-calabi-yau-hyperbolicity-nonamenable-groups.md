---
layout: paper
title: Calabi-Yau Hyperbolicity
title_ja: Calabi–Yau双曲性と非従順基本群
authors: Abdelouahab Khelifati
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: The goal of this paper is to introduce a new notion of hyperbolicity for compact complex manifolds with trivial canonical bundle, called \textit{Calabi--Yau hyperbolicity}. We investigate its fundamental properties and establish a characterization in terms of the fundamental group. In particular, we show that no compact K\"ahler Calabi--Yau manifold is Calabi--Yau hyperbolic, highlighting the genuinely non-K\"ahler nature of this notion. We also investigate different techniques for constructing examples of such manifolds. Finally, we examine the relationship between Calabi--Yau hyperbolicity and Kobayashi hyperbolicity in the examples considered, highlighting obstructions to the latter in the Calabi--Yau setting.
topic: algebraic-geometry
tags:
- calabi-yau-geometry
- hyperbolicity
- fundamental-groups
arxiv_id: 2610.37996v1
arxiv_url: https://arxiv.org/abs/2610.37996
arxiv_submitted: '2026-10-27'
arxiv_updated: '2026-10-27'
summary: 正則標準束が自明なコンパクト複素多様体に対し、普遍被覆上の体積形式の有界原始形式を用いたCalabi–Yau双曲性を導入する。主結果は基本群の非従順性による特徴づけであり、Kählerの場合はこの性質を持たない。Kobayashi双曲性とは異なる概念として非Kähler例と構成法を調べる。
abstract_en: ''
summary_en: The article proposes a large-scale notion for compact complex manifolds with a holomorphic volume form. Its central characterization uses the fundamental group rather than positivity of the canonical bundle. Non-Kähler constructions illustrate the notion, and the introduction separately records conclusions that depend on claims made in other preprints.
abstract_ja: 本論文は正則体積形式から生じる普遍被覆の大域幾何に着目し、Calabi–Yau双曲性という条件を定義する。標準束が自明なコンパクト複素多様体では、この条件が基本群の非従順性と同値であると示す。半単純複素Lie群のコンパクト商や一般化Calabi–Gray多様体を例として取り上げ、積、有限étale被覆などとの関係を調べる。Kobayashi双曲性に関する結論の一部は他のプレプリントの主張を前提としており、その依存関係を区別する必要がある。
abstract_source_url: https://arxiv.org/abs/2610.37996
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.37996v1](https://arxiv.org/abs/2610.37996)
- **著者:** Abdelouahab Khelifati
- **初回投稿日:** 2026-10-27
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler双曲性は、普遍被覆へ引き戻したKähler形式が有界な原始形式を持つという大域条件を使う。本論文は、標準束が自明なコンパクト複素多様体に対して、正則体積形式から得られる体積形式に同様の考え方を適用する。

得られるCalabi–Yau双曲性は、基本群が非従順であることと同値になると述べられる。そのためコンパクトKähler Calabi–Yau多様体では成立せず、非Kähler幾何の例が中心となる。ここでCalabi–Yauは標準束の正則自明性を指す設定であり、Kähler性を定義に含めない。

この双曲性はKobayashi双曲性とは別の条件である。論文は高次元の正則写像の成長に対する制約や構成法を与える一方、Fujiki類や複素曲面について他のプレプリントの証明主張に依存する箇所もある。本記事ではその依存を明示する。

## 背景と問題設定

$K\_X\simeq\mathcal O\_X$であるコンパクト複素多様体$X$の普遍被覆を考え、正則体積形式に由来する体積形式が有界な原始形式を持つことを要求する。局所的な曲率の符号ではなく、普遍被覆の大域幾何に関する条件である。

Kobayashi双曲性は正則円板から作る擬距離が距離となる条件であり、コンパクトな場合には非定数の整曲線の不存在と結びつく。今回の定義を、そのまま整曲線を排除する条件と読んではならない。

## 主結果

### 基本群による特徴づけ（Theorem A）

標準束が自明なコンパクト複素多様体について、

$$
X\text{ がCalabi–Yau双曲的}\quad\Longleftrightarrow\quad\pi\_1(X)\text{ が非従順}
$$

となる。特にコンパクトKähler Calabi–Yau多様体はCalabi–Yau双曲的ではない。定義に用いた体積形式の条件が基本群の性質で判定できる点が中心的な主張である。

### 高次元正則写像への制約（Theorem C）

基本群が非従順なコンパクト複素多様体は、$n=\dim\_{\mathbb C}X$について$n$-cyclically hyperbolicである。この概念は、所定のsubexponential成長条件を満たす非退化正則写像$\mathbb C^n\to X$が存在しないことを意味する。成長条件の詳細はIntroductionが引用する定義に依存するため、あらゆる非退化正則写像を排除すると強めてはならない。

### 例と構成（Theorem D）

単連結半単純複素Lie群の余コンパクト格子による商が基本例となる。一般化Calabi–Gray多様体では、構成に使う底$Y$の$\pi\_1(Y)$が非従順であることが対応する判定となる。

Calabi–Yau双曲的な多様体とコンパクトCalabi–Yau多様体の積は同じ性質を保つ。またコンパクトCalabi–Yau多様体間の有限étale被覆$f:X\to Y$では、$X$と$Y$のCalabi–Yau双曲性が同値となる。crepant modificationによる像、指定されたCalabi–GrayやGhysの変形族、正則主楕円束についても保存の主張が述べられる。これを任意の変形や任意の写像に対する保存と一般化しない。

### 外部の主張に依存する部分（Theorems B、E）

Fujiki類$\mathcal C$のCalabi–Yau多様体の基本群がvirtually abelianであるというTheorem Bは、Introduction自身がCampanaのabelianity予想を証明したと主張する別プレプリントに依拠すると説明している。またTheorem Eの複素曲面に関する結論は、Global Spherical Shell予想の証明主張の正しさを明示的に仮定する。これらを本論文だけで独立に確立した無条件の定理として扱わない。

さらに$\partial\bar\partial$性を持つCalabi–Yau多様体の基本群の従順性はConjecture 1.2であり、未証明の予想として提示される。

## 証明の見取り図

Introductionが与える全体像は、体積形式の有界原始形式と普遍被覆の大域幾何を結び、基本群の従順性という判定へ移すことである。その判定から既存の非Kähler構成に適用し、積や被覆を使って例を広げる。個々の解析的同値や構成の証明はIntroductionに詳細がないため、ここで補完しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.37996)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.37996v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems A–E; Conjecture 1.2（BおよびEの一部の外部依存を区別）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.37996v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
