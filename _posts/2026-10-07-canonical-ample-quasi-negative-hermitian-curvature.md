---
layout: paper
title: |-
  Positivity of the canonical bundle and Hermitian metrics with quasi-negative holomorphic sectional curvature
title_ja: 準負のHermitian正則断面曲率と標準束の豊富性
authors: Xueyuan Wan
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We prove that if a compact K\"ahler manifold admits a Hermitian metric with quasi-negative holomorphic sectional curvature for the Chern connection, then its canonical bundle is ample. The Hermitian metric realizing this curvature need not be K\"ahler. This proves the K\"ahler case of the quasi-negative conjecture of Yang and Zheng.
topic: differential-geometry
tags:
- positivity
- curvature
- monge-ampere-equations
arxiv_id: 2610.08111v1
arxiv_url: https://arxiv.org/abs/2610.08111v1
arxiv_submitted: '2026-10-06'
arxiv_updated: '2026-10-06'
summary: |-
  コンパクトKähler多様体上に、Chern接続に関する正則断面曲率が準負となるHermitian計量が存在すれば、標準束は豊富となる。曲率を測る計量自体にはKähler条件を課さず、基礎多様体のKähler性だけを仮定することで、Yang–Zhengの予想のKähler多様体の場合を扱う。
abstract_en: ''
summary_en: |-
  The paper investigates how a Hermitian curvature hypothesis controls the canonical line bundle of a compact complex manifold. Its setting distinguishes a manifold that admits some Kähler metric from the particular metric used to measure curvature. A symmetrized curvature expression and auxiliary Hessian equations provide the analytic bridge to positivity of the canonical class. The result addresses the Kähler setting of a broader conjecture, leaving its general non-Kähler formulation outside the theorem.
abstract_ja: |-
  本論文は、コンパクトKähler多様体がChern接続に関して準負の正則断面曲率を持つHermitian計量を備えるとき、標準束が豊富となることを主張する。ここで曲率条件を満たす計量そのものはKählerでなくてもよい。結論として多様体は射影的となり、Yang–Zhengの準負曲率に関する予想のうち、基礎多様体がKählerである場合が解決される。
abstract_source_url: https://arxiv.org/abs/2610.08111v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.08111v1](https://arxiv.org/abs/2610.08111v1)
- **著者:** Xueyuan Wan
- **初回投稿日:** 2026-10-06
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

負の曲率が標準束の正値性を強制するという考え方は、複素微分幾何と代数幾何を結ぶ基本的な問題である。負のRicci曲率より弱い正則断面曲率の仮定から、標準束の豊富性まで導けるかが焦点となる。

本論文の特徴は、二種類のKähler条件を区別する点にある。多様体は何らかのKähler計量を持つと仮定するが、負の曲率を与えるHermitian計量にはKähler性、pluriclosed性、balanced性を要求しない。曲率が至る所で非正であり、ある一点では全ての複素方向で負であれば、標準束は豊富になると主張する。

これにより、曲率を与える計量の非Kähler性に由来する障害を越えて、Yang–Zheng予想のKähler多様体の場合が得られる。一方、基礎多様体まで一般のコンパクト複素多様体に広げた予想全体を証明するものではない。

## 背景と問題設定

Kähler計量の負の正則断面曲率から標準束の豊富性を得る研究は、Heier–Lu–Wong、Wu–Yau、Tosatti–Yangへと発展し、Diverio–Trapaniらによって準負曲率へ拡張された。一般のHermitian計量ではChern曲率にKähler曲率と同じ対称性がなく、従来のSchwarz補題をそのまま使えない。

Introductionでは、Yang–Zhengによる実二断面曲率の結果、Broder–Stanfieldのpluriclosed計量の場合、Tangによる非正のHermitian正則断面曲率からの標準束のnef性などが整理される。今回の仕事は、このnef性から豊富性へ進むために、ある開集合での厳密な負性を利用する。

## 主結果

### 主定理：標準束の豊富性（Theorem 1.1）

コンパクトKähler多様体 $M$ が準負のChern正則断面曲率を持つHermitian計量 $h$ を備えるならば、

<div>
$$
K_M\ \text{は豊富であり、}\ M\ \text{は射影的である。}
$$
</div>

準負性の意味は、全ての点と非零の複素接方向について $H_h\leq0$ であり、ある点 $p\in M$ で

<div>
$$
H_h(p,[\xi])\lt 0
\qquad\text{for all }[\xi]\in\mathbb P(T_p^{1,0}M)
$$
</div>

が成り立つことである。一つの方向だけで負であるという条件ではない。また、曲率はChern接続について測る。

従来の定曲率の場合や特別なHermitian計量の場合と異なり、$h$ に追加の閉性条件を課さない。結論は標準束のnef性やbignessにとどまらず、豊富性である。ただし、多様体 $M$ 自体のKähler性は主定理の仮定として残る。

## 証明の見取り図

Introductionは、Chern–Lu公式に直接現れる曲率縮約に代えて、対称化した縮約を用いると説明する。Bergerの射影空間上の平均化によって、この量は至る所で非正となり、準負性を与える点の近傍では厳密に負となる。この段階では、$h$ の曲率にKählerの場合の追加の対称性を仮定しない。

既知のnef性を用い、固定したKähler形式 $\omega_0$ に対して $\alpha=2\pi c_1(K_M)$、$\beta=[\omega_0]$ と置く。補助的な $(n-1)$-Hessian方程式から、類 $\alpha+t\beta$ を持ち、

<div>
$$
\frac{\omega_h\wedge\omega_t^{n-1}}{(n-1)!}
=e^{\varphi_t}\Omega,
\qquad \Omega=\frac{\omega_0^n}{n!}
$$
</div>

を満たすKähler形式を構成する。許容解が実際にKählerとなることを示す零方向の議論も必要となる。

積分したChern–Lu恒等式と、固定した負曲率の近傍における混合体積の評価を組み合わせることで、

<div>
$$
V(t)=\frac1{n!}\int_M(\alpha+t\beta)^n
$$
</div>

に対する微分不等式を得て、$V(0)>0$、すなわち標準束のbignessへ進む。最後に射影性と有理曲線の不存在から豊富性を導く。これはIntroductionに述べられた証明方針の紹介であり、後続節の証明の検証ではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.08111](https://arxiv.org/abs/2610.08111)
- **Introduction:** Section 1、pp. 1–3。Section 2はp. 4から始まる。
- **主要定理:** Theorem 1.1。一般の複素多様体に対する予想はConjecture 1.1。
- **論文構成:** p. 3。Section 2で曲率と平均化、Section 3で積分Chern–Lu恒等式、Section 4で補助方程式と主定理を扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
