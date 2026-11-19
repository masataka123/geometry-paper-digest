---
layout: paper
title: Unboundedness of regular del Pezzo surfaces over imperfect fields
title_ja: 基礎体の不完全性と正則del Pezzo曲面の有界性
authors: Hiromu Tanaka
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Over an F-finite field, regular del Pezzo surfaces are bounded. Over a non-F-finite field of characteristic two or three, regular del Pezzo surfaces are unbounded.
topic: algebraic-geometry
tags:
- positive-characteristic
- fano-varieties
arxiv_id: 2611.24087v1
arxiv_url: https://arxiv.org/abs/2611.24087
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 正標数の体の不完全性に一様な上限を課すと、正則del Pezzo曲面は有界族をなす。標数2と3では、その制約を外すと、一つの基礎体の上でさえ反標準次数と不正則数が同時にいくらでも大きくなる。
abstract_en: ''
summary_en: The degree of a regular del Pezzo surface can reflect arithmetic properties of its ground field. Tanaka bounds the possible Hilbert polynomials under a uniform restriction on the field. Explicit examples show that both the degree and the irregularity escape any bound over certain fixed fields.
abstract_ja: 正則曲面は不完全体上で幾何学的に滑らかとは限らない。田中はこの違いを用いて非有界な例を構成するとともに、不完全性を制限した場合のHilbert多項式を制御し、高指数の場合に現れる曲面を記述する。
abstract_source_url: https://arxiv.org/abs/2611.24087
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24087v1](https://arxiv.org/abs/2611.24087)
- **著者:** Hiromu Tanaka
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

代数閉体上では滑らかなdel Pezzo曲面の反標準次数には上限がある。不完全体上で局所環の正則性だけを仮定すると、基礎体を拡大した後に特異性や非被約構造が現れ得る。

論文が調べるのは、この状況で曲面全体を有限型の族に収められるかという問題である。基礎体の不完全性を一様に抑えれば有界性が回復する。

一方、標数2と3では無限の不完全次数を持つ体を固定して反例を構成できる。非有界性は基礎体を次々に取り替えた結果に限られない。

## 背景と問題設定

ここで $k^p$ は $k$ の元の $p$ 乗からなる部分体である。デルペッツォ条件は反標準因子の豊富性を要求する。曲線の場合には任意の基礎体上の正則Fano曲線が平面二次曲線となるので、曲面で初めて異なる現象が現れる。

## 主結果

### 不完全性を制限した有界性（Theorem 1.1）

正整数 $e\_0$ を固定する。標数 $p>0$ の体 $k$ が $[k:k^p]\le p^{e\_0}$ を満たすとき、その上の正則del Pezzo曲面は有界である。

### 次数と不正則数の同時発散（Theorem 1.2）

$p=2,3$ かつ $[k:k^p]=\infty$ なら、任意の正整数 $L$ に対して同じ体上に

$$
K\_X^2\ge L,\qquad h^1(X,\mathcal O\_X)\ge L
$$

を同時に満たす正則del Pezzo曲面が存在する。

### 高指数の曲面（Theorem 1.3）

$H^0(X,\mathcal O\_X)=k$ を満たす射影的正規 $\mathbb Q$ 分解的曲面で、豊富なCartier因子 $A$ に対し $-K\_X\equiv rA$ とする。すると $r\le3$ で、$r=3$ なら $X\simeq\mathbb P^2\_k$ である。$r=2$ なら構造層の一次と二次のコホモロジーは消え、$\mathbb P^3\_k$ の二次曲面で $K\_X^2=8$ となるか、標数2で $\rho(X)=1$、$K\_X^2=16$ となる。

## 証明の見取り図

既知の非常に豊富な因子 $-12K\_X$ に関するHilbert多項式は $1-h^1(X,\mathcal O\_X)+6m(12m+1)K\_X^2$ である。次数の既知の上界に加え、純非分離被覆と高指数曲面の消滅を用いて不正則数を抑える。一方の例では指数一の純非分離体拡大の独立な元を増やし、二つの不変量を同時に大きくする。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24087)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24087v1) — §1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24087v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
