---
layout: paper
title: Quadratic growth rigidity for the complex Monge--Ampère equation
title_ja: 二次増大だけで決まる複素Monge–Ampère方程式の全空間解
authors: Jianchun Chu, Yaxiong Liu
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AP
- math.DG
arxiv_abstract: For the complex Monge--Amp\`ere equation on $\mathbb{C}^{n}$, we prove the Liouville theorem for solutions with quadratic growth.
topic: several-complex-variables
tags:
- monge-ampere-equations
- pluripotential-theory
- noncompact-kahler-geometry
- calabi-yau-geometry
arxiv_id: 2610.26016v1
arxiv_url: https://arxiv.org/abs/2610.26016
arxiv_submitted: '2026-10-19'
arxiv_updated: '2026-10-19'
summary: 複素Euclid空間上で行列式が1の複素Monge–Ampère方程式を満たす滑らかな多重劣調和関数は、両側から二次増大で抑えられれば二次多項式となることを示す。計量の完備性や標準二次式への精密な漸近を追加せず、零階の増大条件から剛性を得る。
abstract_en: ''
summary_en: A global potential is subjected only to two-sided quadratic growth and a constant complex Monge–Ampère determinant. The result identifies it as a quadratic polynomial without an extra completeness hypothesis. The main analytic step obtains controlled second-order information from growth by combining envelopes with Dirichlet solutions.
abstract_ja: 複素Monge–Ampère方程式の全空間解に対するLiouville型問題を扱う。ポテンシャルが定数倍の二次式で上下から評価されるだけで、解は二次多項式に限られると示す。証明ではtwisted envelopeとDirichlet問題を用い、零階の増大情報をLaplacianの一様評価を持つ近似列へ変換する。
abstract_source_url: https://arxiv.org/abs/2610.26016
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.26016v1](https://arxiv.org/abs/2610.26016)
- **著者:** Jianchun Chu, Yaxiong Liu
- **初回投稿日:** 2026-10-19
- **最終更新日:** 2026-10-19
- **主分類・副分類:** math.CV（主分類）; math.AP, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Monge–Ampère方程式$\det(u\_{i\bar j})=1$は、Ricci平坦なKähler計量のポテンシャルを記述する。全空間上の解であっても一般には標準的な二次式に限られないため、どの程度の無限遠条件が剛性を与えるかが問題となる。

本論文は、滑らかな多重劣調和解が上下から定数倍の$|z|^2+1$で抑えられるなら、二次多項式であると示す。計量の完備性を追加したり、$u=|z|^2+o(|z|^2)$というより強い漸近を要求したりしない。

二次増大は関数値の情報であり、そのままでは二階微分を制御しない。著者らはtwisted envelopeとDirichlet問題を使ってLaplacianを一様に抑えた近似列を作り、既知の二階評価に基づく剛性へ接続する。

## 背景と問題設定

$u\in\operatorname{PSH}(\mathbb C^n)\cap C^\infty(\mathbb C^n)$とし、$u\_{i\bar j}=\partial^2u/\partial z\_i\partial\bar z\_j$と書く。方程式
$$
\det(u\_{i\bar j})=1\quad\text{on }\mathbb C^n
$$
を満たすと、$\omega=\sqrt{-1}\partial\bar\partial u$はRicci平坦である。

Introductionは、完備Calabi–Yau計量の最大体積増大だけでは高次元の平坦性を強制できない既知の反例を紹介する。一方、$\Delta u\leq C$のような二階の評価があれば剛性は既知である。Székelyhidiが提起したProblem 1.1は、それをポテンシャルの二次増大という零階条件から導けるかという問いである。

## 主結果

### 両側二次増大のLiouville定理（Theorem 1.2）

上記の滑らかな多重劣調和解について、ある$C\_0>0$が存在して
$$
C\_0^{-1}(|z|^2+1)\leq u(z)\leq C\_0(|z|^2+1)\quad\text{on }\mathbb C^n
$$
が成り立つなら、$u$は二次多項式である。これによりProblem 1.1が追加仮定なしで解決される。

上下両側の評価が仮定であり、上から二次増大であることだけに置き換えた主張ではない。また結論を特定の規格化された関数$|z|^2$そのものと同一視する必要はなく、原文の結論は二次多項式性である。既存の結果が仮定していた完備性や標準二次式への精密な漸近を取り除くことに意義がある。

## 証明の見取り図

Introductionでは、
$$
\Delta v\_j\leq C,\qquad v\_j\longrightarrow u\quad\text{in }L^1\_{\mathrm{loc}}(\mathbb C^n)
$$
を満たす近似列の構成を主要課題としている。$u$を滑らかに正則化した境界値を持つ複素Monge–Ampère Dirichlet問題を解き、領域半径$R$と正則化パラメータ$t$を同時に調整する。

twisted envelopeは、二次増大からこの調整に必要な定量評価を取り出す道具となる。Dirichlet問題の評価と合わせ、近似列の収束とLaplacian制御を両立させる。論文はSection 2でDirichlet問題の評価、Section 3でenvelope、Section 4で主定理の証明を扱う。本記事ではIntroductionに示された方針までを対象とする。

## 原論文との対応

- **Abstractページ:** [Quadratic growth rigidity for the complex Monge--Ampère equation](https://arxiv.org/abs/2610.26016)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.26016v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.2; Problem 1.1を解決
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.26016v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
