---
layout: paper
title: "A quantization proof of the uniform Yau-Tian-Donaldson conjecture"
title_ja: "一様Yau–Tian–Donaldson予想の量子化による証明"
authors: "Kewei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  Using quantization techniques, we show that the $δ$-invariant of Fujita-Odaka coincides with the optimal exponent in certain Moser-Trudinger type inequality. Consequently we obtain a uniform Yau-Tian-Donaldson theorem for the existence of twisted Kähler-Einstein metrics with arbitrary polarizations. Our approach mainly uses pluripotential theory, which does not involve Cheeger-Colding-Tian theory or the non-Archimedean language. A new computable criterion for the existence of constant scalar curvature Kähler metrics is also given.
topic: differential-geometry
tags:
  - k-stability
  - kahler-einstein-metrics
  - csck-extremal-kahler-metrics
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2102.02438v3"
arxiv_url: "https://arxiv.org/abs/2102.02438"
arxiv_submitted: "2021-02-04"
arxiv_updated: "2022-07-04"
summary: >-
  Fujita–Odakaの代数的 $\delta$-不変量がMoser–Trudinger型不等式の最適指数 $\delta_A$ と一致することを、Bergman空間上の量子化で証明する。これにより任意の実偏極に対するtwisted Kähler–Einstein計量の一様YTD定理を得るとともに、cscK計量の計算可能な存在判定を与える。
abstract_en: ""
summary_en: >-
  This work identifies the valuative delta invariant with an analytic threshold defined by a Moser–Trudinger inequality. The equality is proved through finite-dimensional Bergman-space approximations and yields a uniform Yau–Tian–Donaldson theorem for twisted Kähler–Einstein metrics with arbitrary real polarizations. The argument is based mainly on pluripotential and quantization methods rather than metric-limit or non-Archimedean machinery. It also produces an algebraic numerical condition ensuring the existence and uniqueness of a constant scalar curvature Kähler metric.
abstract_ja: >-
  量子化法により、Fujita–Odakaの $\delta$-不変量が特定のMoser–Trudinger型不等式における最適指数と一致することを示す。その帰結として、任意の偏極に対するtwisted Kähler–Einstein計量の存在について一様Yau–Tian–Donaldson定理を得る。手法は主に多重ポテンシャル論を用い、Cheeger–Colding–Tian理論や非Archimedes的言語を必要としない。さらに定スカラー曲率Kähler計量の存在に対する新しい計算可能な判定条件を与える。
abstract_source_url: "https://arxiv.org/abs/2102.02438"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2102.02438v3](https://arxiv.org/abs/2102.02438)
- **著者:** Kewei Zhang
- **初回投稿日:** 2021年2月4日
- **最終更新日:** 2022年7月4日
- **主分類・副分類:** math.DG（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準計量の存在を代数的安定性で特徴づけるYau–Tian–Donaldson問題において、Fujita–Odakaの $\delta$-不変量は一様Ding安定性を測る。一方、解析側にはMoser–Trudinger型不等式の最適指数として定まる $\delta_A$ があり、Ding汎関数の固有性とtwisted Kähler–Einstein計量の存在を支配する。

本論文の中心結果は、任意のample実線束について $\delta=\delta_A$ が成り立つことである。これによりFano条件に限らず、非有理な偏極も含めて一様Ding安定性からtwisted Kähler–Einstein方程式の解を得る。

証明は有限次元Bergman空間上の量子化へ問題を移す。従来の非Archimedes的形式やCheeger–Colding–Tian型の極限理論を使わず、Berndtssonの量子化最大値原理を鍵として二つの閾値を比較する。

さらに $\delta$-不変量、標準類、nef閾値だけからなる代数的条件を用い、一般偏極におけるcscK計量の存在と一意性を判定する。

## 背景と問題設定

射影多様体 $X$、ample実線束 $L$、klt特異性をもつ正閉current $\theta$ に対し、$\delta(L;\theta)$ はdivisorial valuationから定まる。解析的閾値 $\delta_A(L;\theta)$ は、Kähler potential $\varphi$ とMonge–Ampère energy $E(\varphi)$ に対する積分

$$
\int_X e^{-\lambda(\varphi-E(\varphi))}\,d\mu_\theta
$$

が全potentialについて一様有界となる最大の $\lambda$ である。両者の一致が、代数的安定性と解析的存在を直接結ぶ。

## 主結果

### $\delta$-不変量の一致（Theorem 2.2）

任意のample実線束 $L$ について

$$
\delta(L;\theta)=\delta_A(L;\theta)
$$

が成り立つ。非有理偏極まで含む点、および有限次元量子化から直接証明する点が新しい。

### twisted Kähler–Einstein計量（Theorem 2.3）

$(X,L,\theta)$ が一様Ding安定、すなわち $\delta(L;\theta)>1$ ならば、任意の滑らかな
$\eta\in c_1(X)-c_1(L)-[\theta]$ に対して $\omega_{tKE}\in c_1(L)$ が存在し、

$$
\operatorname{Ric}(\omega_{tKE})=\omega_{tKE}+\eta+\theta
$$

を満たす。

### cscK計量の判定（Theorem 2.4）

$L$ をample実線束とする。$K_X+\delta(L)L$ がampleで、

$$
\delta(L)>n\mu(L)-(n-1)s(L)
$$

ならば、$c_1(L)$ に一意なcscK計量が存在する。ここで $\mu(L)=-K_X\cdot L^{n-1}/L^n$、$s(L)=\sup\{s\in\mathbb R\mid-K_X-sL>0\}$ である。

## 証明の見取り図

先行研究で各量子化レベル $m$ の等式 $\delta_m=\delta_{A,m}$ と不等式 $\delta_A\leq\delta$ が得られていた。本論文はBerndtssonの量子化最大値原理によって有限次元データから $\delta_A$ の下界を与え、逆向き $\delta_A\geq\delta$ を証明する。ample cone上での両不変量の連続性により、ample有理線束から実線束へ拡張する。

## 原論文との対応

本記事はAbstract、Introduction、およびIntroductionが案内するTheorems 2.2–2.4の記述に基づく。big線束、特異多様体、同変版への拡張は将来方向として述べられており、証明済みの結論には含めていない。
