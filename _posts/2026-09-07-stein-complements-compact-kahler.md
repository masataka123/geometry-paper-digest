---
layout: paper
title: "Stein complements in compact Kähler manifolds"
title_ja: "コンパクトKähler多様体におけるStein補集合"
authors: "Andreas Höring, Thomas Peternell"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  Given a projective or compact Kähler manifold X and a (smooth) hypersurface Y, we study conditions under which $X \setminus Y$ could be Stein. We apply this in particular to the case when X is the projectivization of the so-called canonical extension of the tangent bundle $T_M$ of a projective manifold M with Y being the projectivization of $T_M$ itself.
topic: algebraic-geometry
tags:
  - stein-geometry
  - positivity
  - vector-bundles-sheaves
  - minimal-model-program
arxiv_id: "2111.03303v1"
arxiv_url: "https://arxiv.org/abs/2111.03303"
arxiv_submitted: "2021-11-05"
arxiv_updated: "2021-11-05"
summary: >-
  コンパクトKähler多様体から滑らかな超曲面を除いた空間がSteinとなるための必要条件を調べる。Stein補集合なら超曲面の法束が擬有効であることを示し、接束の標準拡大の補集合へ適用して、低次元多様体のMori収縮や構造を強く制限する。
abstract_en: ""
summary_en: >-
  The paper studies when the complement of a smooth hypersurface in a compact Kähler manifold is Stein or affine. It proves that Steinness forces the hypersurface's normal bundle to be pseudoeffective, while an explicit threefold shows that nefness is too strong in general. The criterion is applied to canonical extensions arising from the tangent bundle of a compact Kähler manifold. In low dimensions, Steinness of such an extension restricts Mori contractions and yields a classification result for projective surfaces.
abstract_ja: >-
  射影多様体またはコンパクトKähler多様体 $X$ と滑らかな超曲面 $Y$ に対し、補集合 $X\setminus Y$ がSteinとなり得る条件を研究する。特に、射影多様体 $M$ の接束 $T_M$ の標準拡大を射影化した空間を $X$、$T_M$ の射影化を $Y$ とする場合へ適用する。
abstract_source_url: "https://arxiv.org/abs/2111.03303"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2111.03303](https://arxiv.org/abs/2111.03303)
- **著者:** Andreas Höring, Thomas Peternell
- **初回投稿日・最終更新日:** 2021年11月5日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体 $X$ と既約超曲面 $Y$ に対し、補集合 $X\setminus Y$ がSteinまたはaffineとなる条件を問う。曲面ではStein補集合から法束のnef性が従うが、高次元で同じ主張は成り立たず、本論文は反例となる滑らかな射影三次元多様体を構成する。

一般の場合の主結果は、$Y$ が滑らかで $X\setminus Y$ がSteinなら法束 $N_{Y/X}$ が擬有効になるという必要条件である。反例では法束が擬有効ではあるがnefでないため、この結論は一般には本質的に最良である。

主要な応用は、Kähler類 $\alpha\in H^1(M,\Omega_M)$ が定める拡大

$$
0\longrightarrow\mathcal O_M\longrightarrow V_\alpha\longrightarrow T_M\longrightarrow0
$$

から得られる標準拡大 $Z_M=\mathbb P(V_\alpha)\setminus\mathbb P(T_M)$ である。$Z_M$ がSteinなら $T_M$ は擬有効となり、Mori理論と安定性を組み合わせることで $M$ の双有理幾何に制約が生じる。

次元3以下の非単線織な射影多様体では、標準拡大がSteinなら $M$ はアーベル多様体のétale商になる。射影曲面については、トーラスのétale商、$\mathbb P^2$ または $\mathbb P^1\times\mathbb P^1$、あるいは曲線上の特定のルールド曲面という候補まで絞られる。

## 背景と問題設定

Greb–Wongは $Z_M$ が正次元コンパクト部分多様体を含まず、$M$ がトーラスまたは非負正則双断面曲率を持つ場合にSteinとなることを示していた。これを背景に、$Z_M$ がSteinであることと $T_M$ のnef性、affineであることと $T_M$ のnefかつbig性を対応させる予想が置かれる。

本論文はこの予想全体を解決するのではなく、一般の超曲面補集合に対する最適な必要条件と、標準拡大に特有の強い帰結を与える。したがってIntroductionに掲げられたConjectures 1.1、1.11、1.14、1.15は証明済み主張とは区別される。

## 主結果

### 接束がnefかつbigな場合（Theorem 1.2）

コンパクトKähler多様体 $M$ の接束 $T_M$ がnefかつbigなら、任意のKähler類が定める $Z_M$ はaffineである。これは標準拡大に関する予想の一方向を与える。

### 一般のStein補集合（Theorem 1.6）

$n$ 次元コンパクトKähler多様体 $X$ 内の滑らかな超曲面 $Y$ について、$X\setminus Y$ がSteinなら

$$
N_{Y/X}\ \text{は擬有効である}。
$$

滑らかさは、補集合上の解析関数と代数的データを結ぶ主要な技術結果が滑らかな超曲面についてのみ知られているために必要である。

### 標準拡大への帰結（Corollary 1.7, Corollary 1.8）

$Z_M$ がSteinなら $T_M$ は擬有効である。さらに $\dim M\leq3$ なら $M$ は双有理Mori収縮を持たず、$K_M$ がnefであるかMoriファイバー空間であるかのいずれかとなる。

### 非単線織な低次元の場合（Theorem 1.12）

$M$ が次元3以下の非単線織射影多様体で、あるKähler類に対する $Z_M$ がSteinなら、$M$ はアーベル多様体のétale商である。

### 射影曲面の分類（Theorem 1.13）

滑らかな射影曲面 $M$ で $Z_M$ がSteinなら、Introductionに列挙された三つの型のいずれかとなる。また $Z_M$ がaffineであることは $M=\mathbb P^2$ または $M=\mathbb P^1\times\mathbb P^1$ と同値である。

## 証明の見取り図

Theorem 1.6では、補集合上の解析関数を制御するKosarew–Peternellの結果と、Andreotti–Grauert定理の部分的逆を組み合わせて法束の擬有効性を得る。標準拡大では補集合が正次元コンパクト部分多様体を含まないことを用い、正則凸性、Mori収縮、接束の擬有効性を接続する。非単線織の場合には接束の安定性と葉層理論を加え、低次元でトーラス型の結論へ至る。

## 原論文との対応

本記事はIntroductionのTheorems 1.2, 1.6, 1.12, 1.13と主要な系を中心に扱った。Introductionにある予想は今後の方向としてのみ記し、後続節の証明詳細は扱っていない。
