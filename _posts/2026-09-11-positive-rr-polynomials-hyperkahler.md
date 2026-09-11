---
layout: paper
title: "Positivity of Riemann-Roch polynomials and Todd classes of hyperkähler manifolds"
title_ja: "超Kähler多様体のRiemann–Roch多項式とTodd類の正値性"
authors: "Chen Jiang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  For a hyperkähler manifold $X$ of dimension $2n$, Huybrechts showed that there are constants $a_0, a_2, \dots, a_{2n}$ such that $$χ(L) =\sum_{i=0}^n\frac{a_{2i}}{(2i)!}q_X(c_1(L))^{i}$$ for any line bundle $L$ on $X$, where $q_X$ is the Beauville-Bogomolov-Fujiki quadratic form of $X$. Here the polynomial $\sum_{i=0}^n\frac{a_{2i}}{(2i)!}q^{i}$ is called the Riemann-Roch polynomial of $X$. In this paper, we show that all coefficients of the Riemann-Roch polynomial of $X$ are positive. This confirms a conjecture proposed by Cao and the author, which implies Kawamata's effective non-vanishing conjecture for projective hyperkähler manifolds. It also confirms a question of Riess on strict monotonicity of Riemann-Roch polynomials. In order to estimate the coefficients of the Riemann-Roch polynomial, we produce a Lefschetz-type decomposition of $\text{td}^{1/2}(X)$, the root of the Todd genus of $X$, via the Rozansky-Witten theory following the ideas of Hitchin, Sawon, and Nieper-Wißkirchen.
topic: algebraic-geometry
tags:
  - positivity
  - hyperkahler-geometry
  - chern-classes
arxiv_id: "2008.04685v3"
arxiv_url: "https://arxiv.org/abs/2008.04685"
arxiv_submitted: "2020-08-11"
arxiv_updated: "2021-12-23"
summary: >-
  超Kähler多様体のRiemann–Roch多項式について、すべての係数が正であることを証明する。Todd genusの平方根をRozansky–Witten理論でLefschetz型分解し、Hodge–Riemann双線形関係へ結びつけることで、実効非消滅予想や多項式の狭義単調性への帰結を得る。
abstract_en: ""
summary_en: >-
  The paper proves coefficientwise positivity for the Riemann–Roch polynomial attached to every hyperkähler manifold. This settles a conjecture of Cao and Jiang and gives consequences for effective non-vanishing and strict monotonicity in the projective case. Its main structural tool is a Lefschetz-type decomposition of the square root of the Todd class. Rozansky–Witten theory supplies the decomposition, while Hodge–Riemann relations turn it into the required estimates.
abstract_ja: >-
  $2n$ 次元超Kähler多様体では、線束のEuler標数がBeauville–Bogomolov–Fujiki二次形式の一変数多項式で表される。本論文は、そのRiemann–Roch多項式の全係数が正であることを示す。これはCaoと著者の予想を解決し、射影超Kähler多様体に対するKawamataの実効非消滅予想およびRiessの狭義単調性に関する問題へ帰結する。係数評価のため、Rozansky–Witten理論を通じてTodd genusの平方根のLefschetz型分解を構成する。
abstract_source_url: "https://arxiv.org/abs/2008.04685"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2008.04685v3](https://arxiv.org/abs/2008.04685)
- **著者:** Chen Jiang
- **初回投稿日:** 2020年8月11日
- **最終更新日:** 2021年12月23日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$2n$ 次元超Kähler多様体 $X$ と線束 $L$ に対し、Huybrechtsの公式はEuler標数を

$$
\chi(L)=\sum_{i=0}^{n}\frac{a_{2i}}{(2i)!}q_X(c_1(L))^i
$$

と表す。右辺を変数 $q$ の多項式とみた $RR_X(q)$ は変形不変量であり、線束の幾何を理解する基本データである。

本論文は任意の超Kähler多様体について $RR_X(q)$ の全係数が正であることを証明する。既知例や低次元だけに依存しない一般定理であり、Cao–Jiangの非負性予想を強めた形で解決する。

応用として、射影超Kähler多様体に対するKawamataの実効非消滅予想と、Riemann–Roch多項式の狭義単調性に関するRiessの問題が解決される。一方、係数列の対数凹性や根が負の実数になるという性質はIntroductionでは予想として区別されている。

証明の新しい入力は、$\operatorname{td}^{1/2}(X)$ のLefschetz型分解である。従来の $c_2(X)$ の分解では高次元の直交補空間を制御できなかったが、Rozansky–Witten理論を用いる分解は全次元を扱える。

## 背景と問題設定

超Kähler多様体はK3曲面の高次元類似であり、第一Chern類が消える多様体の重要なクラスである。Beauville–Bogomolov–Fujiki形式が線束のEuler標数を一変数へ圧縮するため、その係数の符号は線束の切断の存在や変形族での振る舞いに直結する。

## 主結果

### Riemann–Roch多項式の正値性（Theorem 1.1）

任意の超Kähler多様体 $X$ に対し、

$$
RR_X(q)=\sum_{i=0}^{n}\frac{a_{2i}}{(2i)!}q^i
$$

のすべての係数は正である。射影性を仮定せずに係数正値性を得る点が重要であり、射影的な場合には実効非消滅への応用をもつ。

### Todd類のLefschetz型分解（Theorem 1.4）

Introductionでは概略として次のように述べられている。非零正則シンプレクティック形式 $\sigma$ を固定すると、$\operatorname{td}^{1/2}(X)$ の各次数成分は、明示的に構成された $(\sigma+\bar\sigma)$-primitive類 $\operatorname{tp}_{2i}$ と $(\sigma\bar\sigma)$ の冪の和に分解される。この構造定理が係数評価を可能にする。

## 証明の見取り図

Rozansky–Witten類への作用とJacobi図式上の微分作用を比較し、Todd類の平方根に対するprimitive成分を構成する。得られたLefschetz型分解へHodge–Riemann双線形関係を適用し、$\int_X\operatorname{td}(X)e^{\sigma+\bar\sigma}$ を評価して係数の正値性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2008.04685](https://arxiv.org/abs/2008.04685)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.4; Corollaries 1.5, 1.6
- **論文構成の説明:** p. 5
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
