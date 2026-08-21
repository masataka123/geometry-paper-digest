---
layout: paper
title: A unified calculation for Gromov norm of Kähler class of bounded symmetric domains
title_ja: 有界対称領域のKähler類のGromov normの統一的計算
authors: Yuan Liu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We provide a unified way to calculate the Gromov norm of the Kähler class of all (compact manifolds uniformized by) bounded symmetric domains. This was done for three classical domains by Domin and Toledo and for the general case by Clerc and Ørsted. Here, the calculation is much simplified by a combination of the ideas in Domin-Toledo and a work of Toledo, with the help of the Polydisc Theorem. The equality is achieved if and only if the triangle is ideal with three vertices on the Shilov boundary.
topic: differential-geometry
tags:
- curvature
- uniformization
arxiv_id: 2603.01572v2
arxiv_url: https://arxiv.org/abs/2603.01572
arxiv_submitted: '2026-03-02'
arxiv_updated: '2026-03-04'
summary: rank $r$ の有界対称領域に標準化Bergman計量を入れたとき、Kähler類のGromov normが $r\pi$ であることを統一的に導く。Polydisc定理と特殊potentialにより一般のgeodesic triangleをpolydiscへ還元し、等号成立をShilov境界上のideal triangleで特徴づける。
abstract_en: ''
summary_en: The paper gives a streamlined computation of the Gromov norm of the canonical Kähler class for every bounded symmetric domain. A group action, the Polydisc Theorem, and a special Kähler potential reduce the estimate to a maximal polydisc. It also identifies the ideal triangles on the Shilov boundary as the equality cases.
abstract_ja: 有界対称領域およびそれでuniformizeされるcompact manifoldのKähler類のGromov normを統一的に計算する。Polydisc定理を用いて従来計算を簡略化し、等号は三頂点がShilov境界上にあるideal triangleの場合に限ることを示す。
abstract_source_url: https://arxiv.org/abs/2603.01572
license_name: arXiv non-exclusive distribution license
license_url: https://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.01572v2](https://arxiv.org/abs/2603.01572)
- **著者:** Yuan Liu
- **初回投稿日:** 2026-03-02
- **最終更新日:** 2026-03-04
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有界対称領域 $X$ の標準Kähler形式のbounded cohomology的な大きさをGromov normで測る。Bergman計量をholomorphic sectional curvatureが $-1$ から $-1/r$ の間になるよう正規化すると、rank $r$ だけで値が決まる。

主結果は

$$
\|\omega\|_\infty=r\pi
$$

である。古典型ごとの計算と一般論を、Polydisc定理を軸に一つの幾何学的議論へまとめる。

## 背景と問題設定

Gromov normはcohomology classを表すsingular cocycleのsup normのinfimumである。負曲率の完備性により、$[\omega]$ の評価はgeodesic triangle $T$ 上の $\int_T\omega$ の評価へ還元される。

## 主結果

### Gromov normの値（Equation 1.1）

rank $r$ の有界対称領域と、その領域でuniformizeされるcompact Kähler manifoldについて、標準Kähler類のnormは $r\pi$ である。等号はtriangleがidealで、三頂点がShilov boundary上にある場合にちょうど成立する。

## 証明の見取り図

automorphismで第一頂点を基点へ移し、isotropy作用とPolydisc定理で第二頂点を固定maximal polydiscへ置く。第三頂点をgeodesicに沿ってpolydiscへ直交射影してもKähler形式のtriangle積分が変わらないことをspecial potentialで示す。最後にdisc上の計算と積に関する加法性から $r\pi$ を得る。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–2
- **中心式:** Equation (1.1)
- **Abstractページ:** [arXiv:2603.01572](https://arxiv.org/abs/2603.01572)
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
