---
layout: paper
title: 'Uniform estimates for complex Monge-Ampère equations: big cohomology classes'
title_ja: big cohomology classにおける複素Monge–Ampère方程式の一様評価
authors: Quang-Tuan Dang, Lei Zhang, Bin Zhou
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: 'We prove uniform a priori estimates for solutions to degenerate complex Monge--Ampère equations in big cohomology classes, using both auxiliary-function technique developed by Guo, Phong and Tong [On $L^\infty$-estimates for complex Monge-Ampère equations, Ann. of Math. (2) 198 (2023), no.1, 393-418], and quasi-psh envelope approach developed by Guedj and Lu [Quasi-plurisubharmonic envelopes 1: Uniform estimates on Kähler manifolds, J. Eur. Math. Soc. (JEMS) 27 (2025), no. 3, 1185-1208.]. As an application, we apply our method to prove the Moser-Trudinger and Brezis-Merle-type inequalities for complex Monge-Ampère equations.'
topic: differential-geometry
tags:
- monge-ampere-equations
- pluripotential-theory
arxiv_id: 2608.19600v1
arxiv_url: https://arxiv.org/abs/2608.19600
arxiv_submitted: '2026-08-20'
arxiv_updated: '2026-08-20'
summary: big cohomology class上の退化複素Monge–Ampère方程式について、Orlicz密度の下で解のminimal singularityからの一様評価を証明する。auxiliary function法とquasi-psh envelope法を組み合わせ、Brezis–Merle型指数積分評価も導く。
abstract_en: ''
summary_en: Uniform estimates are established for degenerate complex Monge–Ampère equations in big cohomology classes with Orlicz densities. The argument combines auxiliary equations with quasi-plurisubharmonic envelopes to handle singular reference potentials. Exponential and energy-type integrability estimates follow.
abstract_ja: big cohomology classにおける退化複素Monge–Ampère方程式の解に対し、広いOrlicz classの密度の下で一様a priori estimateを証明する。さらにMoser–Trudinger型およびBrezis–Merle型不等式を得る。
abstract_source_url: https://arxiv.org/abs/2608.19600
license_name: arXiv non-exclusive distribution license
license_url: https://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.19600v1](https://arxiv.org/abs/2608.19600)
- **著者:** Quang-Tuan Dang, Lei Zhang, Bin Zhou
- **初回投稿日:** 2026-08-20
- **最終更新日:** 2026-08-20
- **主分類・副分類:** math.DG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

bigだがnefとは限らないcohomology classでは、基準potential自身が特異となり、古典的なmaximum principleを直接使いにくい。本論文はOrlicz密度をもつ退化complex Monge–Ampère方程式に定量的一様評価を与える。

Guo–Phong–Tongのauxiliary-function techniqueとGuedj–Luのquasi-psh envelope approachを結合することが新規性である。さらに指数積分可能性とenergy estimateを同じ枠組みから得る。

## 背景と問題設定

$\theta$ をbig classを表すclosed real $(1,1)$-formとし、full-mass solution $\varphi$ を

$$
\operatorname{MA}_\theta(\varphi)=\mu,\qquad \sup_X\varphi=-1
$$

で定める。$V_\theta$ はminimal singularitiesをもつenvelopeである。

## 主結果

### 一様評価（Theorem A）

$\theta\leq A\omega_X$、$\mu=f\,dV$、$f$ がcondition (K)を満たすOrlicz spaceに属するとき、minimal singularitiesをもつ一意解が存在し、

$$
\varphi\geq V_\theta-C
$$

が成り立つ。$C$ の依存量はIntroductionに明記された背景dataと $\|f\|_w$ に限られる。

### 指数積分評価（Theorem B）

$w(t)=t(\log(1+t))^p$ の場合、$0\leq p<n$ なら

$$
\int_X e^{c(V_\theta-\varphi)^{n/(n-p)}}\omega_X^n\leq C
$$

を得る。$p\geq n$ では任意の正指数 $N$ に対する対応する評価が成立する。

## 証明の見取り図

sublevel set上に重みを集中したauxiliary Monge–Ampère equationを解き、その解をquasi-psh envelopeで元の解と比較する。まず $L^{1+\varepsilon}$ 密度でDe Giorgi型反復を行い、その後Orlicz条件をこの場合へ還元する。

## 原論文との対応

- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems A, B
- **Abstractページ:** [arXiv:2608.19600](https://arxiv.org/abs/2608.19600)
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
