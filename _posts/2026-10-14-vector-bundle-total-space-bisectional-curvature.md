---
layout: paper
title: Holomorphic Bisectional Curvature on Total Spaces of Holomorphic Vector Bundles
title_ja: 正則ベクトル束の全空間における双断面曲率の符号と分解
authors: Xingluan Wang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We study complete K$\"a$hler metrics with prescribed signs of holomorphic bisectional curvature on total spaces of holomorphic vector bundles over compact complex manifolds. We establish necessary and sufficient conditions in the nonnegative and strictly negative cases, characterized respectively by unitary flatness and Griffiths negativity of the bundle, together with the corresponding curvature conditions on the base. We also obtain a global metric splitting in the nonnegative case, rule out strictly positive curvature over positive-dimensional bases, and construct counterexamples to the converse in the nonpositive case.
topic: differential-geometry
tags:
- vector-bundles-sheaves
- curvature
- noncompact-kahler-geometry
- positivity
arxiv_id: 2610.15271v1
arxiv_url: https://arxiv.org/abs/2610.15271
arxiv_submitted: '2026-10-11'
arxiv_updated: '2026-10-11'
summary: コンパクト複素多様体上の正則ベクトル束の全空間が、指定した符号の双断面曲率を持つ完備Kähler計量を許す条件を調べる。非負の場合はユニタリ平坦性、厳密に負の場合はGriffiths負性と底の曲率条件で特徴づけ、非正の場合の逆は反例で否定する。
abstract_en: ''
summary_en: 'The geometry of a vector bundle can be tested through metrics on its noncompact total space. This paper separates the four possible sign conditions on holomorphic bisectional curvature and relates them to the compact base and bundle curvature. It gives equivalences in the nonnegative and strictly negative cases, as well as a normal form for every admissible metric in the former case. The nonpositive case has a different outcome: the natural necessary conditions do not suffice.'
abstract_ja: コンパクトな底の上の正則ベクトル束について、その全空間の完備Kähler計量の正則双断面曲率を調べる。非負曲率の存在は底の非負曲率と束のユニタリ平坦性に同値であり、厳密に負の曲率の存在は底の負曲率と束のGriffiths負性に同値となる。非負の場合には各計量の大域的な分解も得る。正次元の底では厳密に正の曲率は不可能であり、非正曲率の必要条件には逆が成り立たない。
abstract_source_url: https://arxiv.org/abs/2610.15271
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.15271v1](https://arxiv.org/abs/2610.15271)
- **著者:** Xingluan Wang
- **初回投稿日:** 2026-10-11
- **最終更新日:** 2026-10-11
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則ベクトル束の全空間は、コンパクトな零切断と非コンパクトなファイバーを併せ持つ。そこに良い曲率を持つ完備Kähler計量が存在するかという問題は、底の幾何と束の曲率の双方を反映する。本論文は正則双断面曲率の四つの符号を分けて調べる。

非負の場合には、底が非負双断面曲率を持ち、束がユニタリ平坦であることが必要十分となる。さらに存在の判定だけでなく、各計量が普遍被覆上の積計量の商として表せることを示す。厳密に負の場合も、底の負曲率と束のGriffiths負性による必要十分条件を得る。

一方、正次元のコンパクトな底があれば厳密に正の双断面曲率は不可能である。非正の場合には底の非正曲率と束のGriffiths半負性が必要だが、十分ではない。この違いは、厳密な符号を弱い符号へ機械的に置き換えることができない例となる。

## 背景と問題設定

<p>連結コンパクト複素多様体 $M$ 上の階数 $r\ge1$ の正則ベクトル束 $E$ と、その全空間 $N=\operatorname{Tot}(E\to M)$ を考える。論文の $\mathrm{cHBC}_{\ge0}$ などの記号は、指定された符号の正則双断面曲率を持つ完備Kähler計量が存在することを意味する。</p>

<p>ユニタリ平坦性は、平坦なユニタリChern接続が存在すること、同値に普遍被覆 $\widetilde M$ 上で</p>

<div>
$$
\operatorname{Tot}(E)\simeq(\widetilde M\times\mathbb C^r)/_\rho\pi_1(M),
\qquad\rho:\pi_1(M)\to U(r)
$$
</div>

と書けることである。Griffiths負性・半負性は束のChern曲率に対する条件であり、全空間の双断面曲率とは異なる概念である。

## 主結果

### 曲率符号の特徴づけ（Theorem 1.1）

全空間に完備な非負双断面曲率のKähler計量が存在することは、底にそのような計量が存在し、束がユニタリ平坦であることと同値である。厳密に負の双断面曲率の計量が存在することは、底にそのような計量が存在し、束がGriffiths負であることと同値である。

<p>厳密に正の双断面曲率の場合には底は一点でなければならない。この例外では全空間は $\mathbb C^r$ となり、そのような完備計量の存在が知られる。</p>

非正の場合には、全空間の計量の存在から底の非正双断面曲率と束のGriffiths半負性が従う。しかし逆は成り立たず、底が厳密に負の双断面曲率を持ち束がGriffiths半負であっても、全空間には非正双断面曲率のKähler計量すら存在しない例を構成する。反例は線束から高階数にも拡張される。

### 非負計量の大域的標準形（Theorem 1.4）

<p>$N$ 上の任意の完備Kähler計量 $g_N$ が非負双断面曲率を持つとする。零切断を点ごとに固定する正則自己同型 $f_N:N\to N$ と、$\mathbb C^r$ 上の $\pi_1(M)$-不変な完備非負双断面曲率計量 $g_0$ を取って、</p>

<div>
$$
f_N^*g_N=(\widetilde g_M\oplus g_0)/\pi_1(M),\qquad g_M=g_N|_M
$$
</div>

<p>と表せる。$\widetilde g_M$ は底の計量を普遍被覆へ持ち上げたものである。逆にこのような積計量は全空間上の完備非負双断面曲率計量に降りる。束が平坦であってもファイバーの計量 $g_0$ 自体をEuclid計量に限定する主張ではない。</p>

## 証明の見取り図

非正・負の場合の必要条件は、零切断と束を部分多様体・部分束として見る曲率公式から得る。正の場合の障害には、全空間の狭義多重劣調和関数をコンパクトな零切断へ制限すると最大値原理と矛盾することを使う。

非負の場合にはNi–Tamの結果による滑らかな多重劣調和関数と、そのLevi形式の平行な零分布を利用する。普遍被覆上で零切断を分解の一方の因子と同定し、法束としての正則ベクトル束のユニタリ平坦性を得る。続いてde Rham分解から計量の標準形へ進む。

負の場合には底の計量とGriffiths負な束計量からCalabi型の完備計量を構成する。非正の場合の反例は、複素球商の射影余接束上の線束を出発点とし、Mohsenの定理を適用して構成される。ここではIntroductionに記された構成方針までを紹介する。

## 原論文との対応

- **Abstractページ:** [Holomorphic Bisectional Curvature on Total Spaces of Holomorphic Vector Bundles](https://arxiv.org/abs/2610.15271)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.15271v1) — Section 1, pp. 1–3（Section 2より前）。
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.4、Section 1.2で説明される非正曲率の場合の反例。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.15271v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
