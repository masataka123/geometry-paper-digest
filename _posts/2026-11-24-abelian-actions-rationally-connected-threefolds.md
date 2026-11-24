---
layout: paper
title: 'Finite abelian groups acting on rationally connected threefolds III: Classification'
title_ja: 有理連結三次元多様体に忠実に作用する有限可換群
authors: Konstantin Loginov
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We complete the classification of finite abelian groups that admit a faithful action on a rationally connected threefold. For a finite abelian group $G$ with invariant factors $1<d_1\mid\cdots\mid d_s$, put $c(G)=\sum_i(1-1/d_i)$. We prove that for $1\le n\le3$ such a group admits a faithful action on a rationally connected variety of dimension $n$ if and only if $c(G)\le n$. We also show that finite abelian subgroups of the Cremona group of rank three are, up to isomorphism, precisely the products of finite abelian subgroups of the Cremona groups of ranks one and two. Four further groups can act faithfully on rationally connected threefolds. For each of these groups, the faithful action is unique up to birational conjugacy and automorphism of the acting group.
topic: algebraic-geometry
tags:
- birational-geometry
- fano-varieties
arxiv_id: 2611.28885v1
arxiv_url: https://arxiv.org/abs/2611.28885
arxiv_submitted: '2026-11-21'
arxiv_updated: '2026-11-21'
summary: 有限可換群の不変因子から計算できる一つの有理数により、三次元以下の有理連結多様体への忠実作用の存在を特徴づける。三次元Cremona群に入る群と、それ以外の四つの群の作用も決定する。
abstract_en: ''
summary_en: The invariant factors of an abelian group yield a numerical bound on the dimension needed for a faithful action. In dimension three the rational case consists exactly of groups of product type. Four exceptional groups instead act on nonrational rationally connected models.
abstract_ja: 有理的な三次元多様体に作用できる群と、有理連結性だけを仮定したときに初めて現れる群を分類する。例外的な四群は非有理なモデルに作用し、それぞれの作用は群の自己同型と双有理共役を除いて一意となる。
abstract_source_url: https://arxiv.org/abs/2611.28885
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.28885v1](https://arxiv.org/abs/2611.28885)
- **著者:** Konstantin Loginov
- **初回投稿日:** 2026-11-21
- **最終更新日:** 2026-11-21
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有理連結多様体と有理多様体では、忠実に作用できる有限群の範囲が違う。本論文はその差を、複素三次元で有限可換群について決定する。

まず群の不変因子から数値を定め、与えた次元で有理連結な作用空間が存在するための判定を得る。次に有理三次元多様体に作用する場合を取り出す。

有理連結三次元多様体に特有の四群では、存在だけでなく、どの忠実作用も特定の対角作用と双有理に同一視できる。

## 背景と問題設定

階数三のCremona群は射影三次元空間の双有理自己変換群である。ここで積型とは、低次元のCremona群の部分群の直積に抽象群として同型であることを指す。

## 主結果

### 次元の数値条件（Theorem 1.2）

不変因子 $1<d\_1\mid\cdots\mid d\_s$ を持つ群 $G$ が次元 $1\le n\le3$ の有理連結多様体に忠実に作用できるための必要十分条件は
$$
c(G)=\sum\_{j=1}^s(1-1/d\_j)\le n
$$
である。この条件の十分性は任意次元で成立する。

### 有理な場合と四つの例外（Theorems 1.4・1.5）

$\mathrm{Cr}\_3(\mathbb C)$ に埋め込める群は $\mathrm{Cr}\_1$ と $\mathrm{Cr}\_2$ の有限可換部分群の直積に限り、そのすべてが埋め込める。積型以外の四群の巡回因子の位数は $(4,4,4,4)$、$(6,6,6,2)$、$(6,6,3,3)$、$(8,8,4,2)$ である。それぞれの忠実作用は指定されたFermat型超曲面上の作用に双有理共役となる。ここで作用する群の自己同型を許す。

### Fanoモデル（Theorem 1.6）

積型でない場合、作用は反標準線形系が空でない $G\mathbb Q$-Fano三次元多様体上で双有理に実現できる。

## 証明の見取り図

既存の同変双有理分類で残っていたのは、反標準線形系が空となるFanoモデルの可能性である。反標準線形系が空でないモデルを同じ同変双有理類に見つけることで、積型と四群の明示的な作用へ帰着する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.28885)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.28885v1) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.4–1.6, Proposition 1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.28885v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
