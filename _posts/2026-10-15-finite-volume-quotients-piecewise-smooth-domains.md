---
layout: paper
title: Finite volume quotients of bounded domains with piecewise smooth boundary
title_ja: 区分的に滑らかな境界と有限体積商による球の直積の特徴づけ
authors: Xingsi Pu, Lang Wang
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We prove that a bounded pseudoconvex domain with piecewise $C^2$-smooth boundary which has a finite volume quotient for the complete K\"ahler-Einstein metric is biholomorphic to a product of complex unit balls. More generally, the same conclusion holds for a bounded domain possessing a boundary point satisfying Kodama's conditions (C.1)-(C.5), provided the quotient has finite volume for a complete $\operatorname{Aut}(D)$-invariant K\"ahler metric. For piecewise Levi-flat boundary the product is a polydisk and in the smooth pseudoconvex case it is a single ball.
topic: several-complex-variables
tags:
- uniformization
- kahler-einstein-metrics
- noncompact-kahler-geometry
arxiv_id: 2610.19807v1
arxiv_url: https://arxiv.org/abs/2610.19807
arxiv_submitted: '2026-10-14'
arxiv_updated: '2026-10-14'
summary: 区分的にC²滑らかな境界をもつ有界擬凸領域に、完備Kähler–Einstein計量で有限体積となる自由な離散群商があれば、その領域は複素単位球の直積と双正則になることを示す。凸性を仮定せず、Levi-flat境界の場合は多重円板、滑らかな擬凸境界の場合は単一の球へ結論を絞る。
abstract_en: ''
summary_en: Finite-volume quotients impose global restrictions on a complex domain even when the quotient is noncompact. This paper combines that condition with boundary regularity to identify the domain as a product of balls. The principal theorem assumes pseudoconvexity and piecewise twice-differentiable boundary, but does not require convexity. A more local boundary criterion also yields the classification for suitable invariant metrics.
abstract_ja: 有界領域の境界の形と自己同型群による商の体積から、領域の双正則型を決定する。区分的にC²滑らかな擬凸境界と完備Kähler–Einstein計量に関する有限体積商の存在を仮定すると、複素単位球の直積が得られる。より一般には、Kodamaの局所境界条件と完備な自己同型不変Kähler計量で同じ結論を得る。Levi-flatな境界や滑らかな境界では、積の因子がさらに限定される。
abstract_source_url: https://arxiv.org/abs/2610.19807
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.19807v1](https://arxiv.org/abs/2610.19807)
- **著者:** Xingsi Pu, Lang Wang
- **初回投稿日:** 2026-10-14
- **最終更新日:** 2026-10-14
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素領域の境界の曲率と自己同型の多さから、その領域が球であると分かる場合がある。複数の境界面が交わる場合には、単一の球だけでなく球の直積が自然なモデルとなる。本論文は、自己同型群による商が有限体積であることを、そのような剛性を引き起こす条件として使う。

主定理は、有界擬凸領域の境界が区分的にC²滑らかであり、自由に作用する離散群による商が完備Kähler–Einstein計量で有限体積なら、領域は球の直積と双正則になるというものである。先行する凸領域の結果に対し、凸性を取り除く点が中心となる。

より一般の定理は、特定の局所条件を満たす境界点と、自己同型群に不変な完備Kähler計量を仮定する。そこから、区分的Levi-flat境界では多重円板、滑らかな擬凸境界では一つの球という特別な結論も導く。

## 背景と問題設定

Wong–Rosayの定理は、強擬凸境界点へ集積する自己同型軌道によって球を特徴づける。境界面が交わる場合にはPinchukやKodamaの局所理論が重要となる。一方、凸領域のコンパクト商や有限体積商は有界対称領域の剛性と結びついてきた。

本論文で有限体積とするのは領域のユークリッド体積ではなく、離散群$\Gamma\le\operatorname{Aut}(D)$による商$\Gamma\backslash D$の指定された不変計量に関する体積である。作用は自由とし、商のコンパクト性は要求しない。

## 主結果

### 球の直積への一意化（Theorem 1.1）

$n\ge2$の有界擬凸領域$D\subset\mathbb C^n$が区分的に$C^2$滑らかな境界をもち、自由に作用する離散群$\Gamma\le\operatorname{Aut}(D)$を備えるとする。完備な標準Kähler–Einstein計量について$\Gamma\backslash D$の体積が有限ならば、

$$
D\simeq \mathbb B^{n_1}\times\cdots\times\mathbb B^{n_k},\qquad \sum_{j=1}^k n_j=n
$$

である。$\mathbb B^{n_j}$は複素単位球であり、同型は双正則同型である。凸性を仮定せずに、境界の正則性と有限体積条件から領域の全体像を決定する。

### 一つの境界点を使う一般化（Theorem 1.2）

有界領域$D\subset\mathbb C^n$に、$k$個の局所定義関数についてKodamaの条件(C.1)–(C.5)を満たす境界点があるとする。$D$が完備な$\operatorname{Aut}(D)$-不変Kähler計量$g$をもち、自由な離散群商が

$$
\operatorname{Vol}_g(\Gamma\backslash D)<\infty
$$

を満たせば、同じく$k$個の球の直積へ双正則となる。Introductionでは条件(C.1)–(C.5)の具体的な定義を後続節に委ねているため、本記事ではこの定理をその条件名を含む形で紹介する。任意の角をもつ境界点だけで十分だとは解釈しない。

### Levi-flatな境界（Theorem 1.4）

有界領域$D\subset\mathbb C^n$の境界が区分的に$C^2$滑らかかつLevi-flatであり、同じ自由な離散群商が完備な標準Kähler–Einstein計量で有限体積ならば、

$$
D\simeq\Delta^n
$$

となる。$\Delta$は単位円板である。一般の球の直積から、各因子が一次元の多重円板へ結論が強まる。

### 滑らかな擬凸境界（Corollary 1.5）

有界擬凸領域の境界が$C^2$滑らかで、自由な離散群商がBergman、Kähler–Einstein、またはKobayashi–Eisenman体積について有限ならば、$D\simeq\mathbb B^n$である。これはZimmerによる既知の球の特徴づけを、一般定理から再び得る系として位置づけられる。

## 証明の見取り図

Introductionは、一般の境界点条件を用いるTheorem 1.2を主定理の基礎として位置づける。一方、Levi-flatな場合のTheorem 1.4はTheorem 1.1を使わずに得られると説明する。Section 2で定義と準備を整理し、Section 3で主要定理を証明する構成である。Introductionに詳細な解析的証明手順は示されないため、ここではその手順を推測して補わない。

## 原論文との対応

- **Abstractページ:** [Finite volume quotients of bounded domains with piecewise smooth boundary](https://arxiv.org/abs/2610.19807)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.19807v1) — Section 1, pp. 1–2（Section 2の開始前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2, 1.4; Corollary 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.19807v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
