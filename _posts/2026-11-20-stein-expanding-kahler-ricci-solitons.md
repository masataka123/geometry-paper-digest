---
layout: paper
title: Steinness and Complete Expanding Kähler-Ricci Solitons
title_ja: 完備な膨張型Kähler–RicciソリトンによるStein性の特徴付け
authors: Soumya Ganguly
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DG
arxiv_abstract: We prove that complete expanding Kähler-Ricci solitons with complete soliton fields characterize Steinness of relatively compact domains in Stein manifolds, and hence pseudoconvexity of bounded domains in $\mathbb{C}^n$. We construct canonical, instantaneously complete Kähler-Ricci flows from positive closed $(1,1)$-currents with global plurisubharmonic potentials and vanishing Lelong numbers. Nonzero currents homogeneous under a complete real holomorphic flow yield nontrivial expanders with prescribed soliton fields. We obtain a product criterion and uniformization results for balls and finite-type domains in complex surfaces. If $D$ is a relatively compact Stein domain in a reduced pure-dimensional Stein space of dimension at least two and $\operatorname{Sing} D$ is finite and nonempty, we prove that $\operatorname{Aut}(\operatorname{Reg} D)$ is compact, excluding nontrivial expanders with complete soliton fields.
topic: several-complex-variables
tags:
- kahler-ricci-flow-solitons
- stein-geometry
- noncompact-kahler-geometry
- uniformization
arxiv_id: 2611.25227v1
arxiv_url: https://arxiv.org/abs/2611.25227
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: 滑らかなStein多様体の相対コンパクトな領域がSteinであることを、完備なベクトル場を伴う完備膨張型ソリトンの存在で特徴付ける。正閉カレントを初期値とする流から、非自明なソリトンも構成する。
abstract_en: ''
summary_en: The soliton vector field and the metric play distinct roles in detecting Stein domains. A homogeneous current allows the field of a nontrivial solution to be prescribed in advance. Boundary orbit accumulation then links this construction to rigidity of the underlying domain.
abstract_ja: 境界の正則性を仮定せず、完備な自己相似解を複素領域の判定に用いる。非自明な解では自己同型群に非コンパクトな動きが生じ、境界の幾何を仮定すると球の一意化に、孤立特異点がある場合には存在の障害につながる。
abstract_source_url: https://arxiv.org/abs/2611.25227
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.25227v1](https://arxiv.org/abs/2611.25227)
- **著者:** Soumya Ganguly
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.CV（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有界領域の擬凸性を計量で検出できるだろうか。負のKähler–Einstein計量を使う判定を出発点として、著者は流に沿って形を保ちながら膨張する計量を扱う。

ここでは計量の完備性に加え、自己相似変形を生む実正則ベクトル場の流が全時間存在することを課す。ソリトンが非自明であることは、Stein性そのものを判定する段階では要求しない。

一方、非自明な解を指定した場から構成するには、その流で一定の重みに従って拡大されるカレントを用いる。自己同型群の軌道が境界に近づく様子は、そのような解が存在できる領域をさらに制約する。

## 背景と問題設定

ソリトン方程式は $\operatorname{Ric}(\omega)+K\omega=\mathcal L\_Y\omega$、$K>0$ である。右辺が恒等的に零なら負のKähler–Einstein計量を得る。

## 主結果

### Stein性との同値（Theorem 1.1）

滑らかなStein多様体内の相対コンパクトな領域がSteinであることは、上の方程式を満たす完備計量と完備な実正則場が存在することと同値である。特に複素Euclid空間の有界領域では擬凸性の判定となる。

### 場を指定した構成（Theorem 1.2）

その領域がSteinで、完備場 $Y$ の流 $\Phi\_s$ に関し非零の正閉 $(1,1)$ カレント $T$ が

$$
\Phi\_s^\ast  T=e^{Ks}T
$$

を満たせば、同じ $Y,K$ に対する完備で非自明なソリトンが存在する。

### 直積（Theorem 1.3）

滑らかなStein多様体内の相対コンパクトな二領域のうち、第一因子に非自明な完備解があるとする。完備場を伴う非自明な完備解が直積に存在する必要十分条件は、第二因子がSteinであることである。

### 球の特徴付け（Theorem 1.4）

次元二以上の複素多様体内の相対コンパクト領域で、有界正則関数が点を分離し、自己同型群の境界軌道集積点がすべて $C^2$ 級強擬凸点であるとする。完備場に付随する非自明な完備膨張解の存在は、領域が単位球と双正則であることと同値である。

### 特異点がもたらす障害（Theorem 1.5）

純次元二以上の被約Stein空間内の相対コンパクトな連結Stein領域で、特異集合が有限かつ非空なら、その正則部分の自己同型群はコンパクトである。したがってこの正則部分は完備場を伴う非自明な完備膨張解を持てない。

## 証明の見取り図

大域的な多重劣調和ポテンシャルを持ちLelong数が消える正閉カレントから、正の時刻に直ちに完備となる標準的なKähler–Ricci流を構成する。双正則変換と定数倍に対する自然性が、初期値の斉次性を流の自己相似性に移す。球の判定には非自明な流の非コンパクト性とWong–Rosayの定理を組み合わせる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.25227)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.25227v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1–1.5, Corollaries 1.6–1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.25227v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
