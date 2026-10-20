---
layout: paper
title: The Sharp Generalized Bogomolov Inequality
title_ja: 半安定性を仮定しない鋭い一般化Bogomolov不等式
authors: Chuanjing Zhang, Xi Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: Let $(X,\omega)$ be a compact Gauduchon and astheno-K\"ahler manifold. Using $L^p$-approximate critical Hermitian structures, we establish a sharp generalized Bogomolov inequality for holomorphic vector bundles on $X$, without any semistability assumption. We further characterize the equality case by studying the Hermitian-Yang-Mills flow. If equality holds, every Harder-Narasimhan-Seshadri filtration is by holomorphic subbundles, and its stable quotients admit projectively flat Hermitian metrics. If, in addition, the bundle is not $\omega$-semistable, then $X$ is projective.
topic: differential-geometry
tags:
- chern-classes
- vector-bundles-sheaves
- stability
- hermite-einstein-metrics
arxiv_id: 2610.24987v1
arxiv_url: https://arxiv.org/abs/2610.24987
arxiv_submitted: '2026-10-18'
arxiv_updated: '2026-10-18'
summary: コンパクトGauduchon・astheno-Kähler多様体上の正則ベクトル束について、Chern数の負値をHarder–Narasimhan型の不安定性で抑える鋭い不等式を示す。等号の場合には安定商の射影的平坦性が現れ、束が半安定でなければ底多様体の射影性まで従う。
abstract_en: ''
summary_en: The paper measures how far a bundle can fall below the usual Chern-number bound by recording its Harder–Narasimhan slopes. A sharp correction term makes the estimate applicable without assuming semistability, on a class of compact Hermitian manifolds. Equality is described through the stable pieces of the filtration and imposes additional geometric restrictions on the base.
abstract_ja: 本論文は、Gauduchon条件とastheno-Kähler条件を満たすコンパクトHermitian多様体上で、半安定でない束も含むBogomolov型不等式を扱う。Harder–Narasimhan傾斜の分散を補正項とする最良の下界を得て、Hermitian–Yang–Mills流を用いて等号成立を解析する。その場合、Harder–Narasimhan–Seshadri filtrationは正則部分束からなり、安定商は射影的平坦な計量を持つ。非半安定な等号例では底多様体は射影的となる。
abstract_source_url: https://arxiv.org/abs/2610.24987
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.24987v1](https://arxiv.org/abs/2610.24987)
- **著者:** Chuanjing Zhang, Xi Zhang
- **初回投稿日:** 2026-10-18
- **最終更新日:** 2026-10-18
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bogomolov不等式は、束の半安定性をChern数の非負性に結び付ける。しかし半安定性を外すと、そのChern数は負になり得る。本論文は、負値をどこまで許すかを束の不安定性そのものから定量化する。

補正に用いるのはHarder–Narasimhan商の傾斜と束全体の傾斜の差の二乗和である。著者らはコンパクトGauduchon・astheno-Kähler多様体上で、この量から鋭い下界を与える。半安定な場合には補正が消え、従来の不等式に戻る。

等号成立も数値だけの現象ではない。安定商は射影的平坦となり、特異な層として現れ得たfiltrationが正則部分束のfiltrationになる。さらに束が半安定でないなら、当初はHermitianでしかなかった計量がKählerとなり、底多様体は射影的になる。

## 背景と問題設定

複素次元$n$のコンパクトHermitian多様体$(X,\omega)$に対して、仮定は
$$
\partial\bar\partial\omega^{n-1}=0,\qquad \partial\bar\partial\omega^{n-2}=0
$$
である。体積と傾斜の規格化を
$$
V\_\omega=\int\_X\frac{\omega^n}{n!},\quad
\deg\_\omega F=\int\_X c\_1^{\mathrm{BC}}(F)\wedge\frac{\omega^{n-1}}{(n-1)!},\quad
\mu\_\omega(F)=\frac{\deg\_\omega F}{\operatorname{rank}F}
$$
とする。上付き$\mathrm{BC}$は実Bott–Chern類を表す。

階数$r$の束$E$のHarder–Narasimhan商を$Q\_\alpha$、その階数・傾斜を$r\_\alpha,\mu\_\alpha$とおき、
$$
I\_\omega(E)=\sum\_\alpha r\_\alpha\bigl(\mu\_\alpha-\mu\_\omega(E)\bigr)^2,\qquad
\Delta\_\omega(E)=\int\_X\left(2c\_2^{\mathrm{BC}}(E)-\frac{r-1}{r}c\_1^{\mathrm{BC}}(E)^2\right)\wedge\frac{\omega^{n-2}}{(n-2)!}
$$
を考える。$I\_\omega(E)=0$と半安定性は同値である。

## 主結果

### 鋭い下界（Theorem 1.1）

上記の任意の正則ベクトル束について、
$$
\Delta\_\omega(E)\geq-\frac{n-1}{nV\_\omega}I\_\omega(E)
$$
が成立する。半安定性を仮定する必要はない。Remark 1.2では、射影空間のFubini–Study計量と、次数の異なる直線束$\mathcal O\_{\mathbb P^n}(k\_j)$の直和が等号を実現するため、係数$(n-1)/n$は改善できないと述べられる。

### 等号による束と底空間の剛性（Theorem 1.3）

等号が成り立つなら、任意のHarder–Narasimhan–Seshadri filtrationの安定商$Q\_{\alpha,\beta}$は局所自由で射影的平坦なHermitian計量を持ち、filtration全体が正則部分束からなる。反射的graded束上には、直和成分が直交し、各曲率が
$$
\sqrt{-1}F\_{\alpha,\beta}=\left(\gamma+\frac{2\pi}{nV\_\omega}\bigl(\mu\_\alpha-\mu\_\omega(E)\bigr)\omega\right)\otimes\operatorname{Id}\_{Q\_{\alpha,\beta}^{**}}
$$
となる計量$H\_\infty$がある。ここで$\gamma=(\sqrt{-1}/r)\operatorname{tr}F\_{H\_\infty}$は実閉$(1,1)$形式である。局所自由性、上記曲率表示、部分束filtrationという条件からの逆も成立する。

各Harder–Narasimhan商は$\Delta\_\omega(Q\_\alpha)=0$を満たす。さらに$E$が半安定でなければ$d\omega=0$であり、$[\omega]$は有理Kähler類の正の実数倍となる。このため$X$は射影的である。束自体が安定商の正則直和になるとまでは述べていない。

### 非Kähler計量での帰結（Corollary 1.4）

$d\omega\neq0$なら、等号成立は$E$が半安定かつ$\Delta\_\omega(E)=0$であることと同値である。この場合の安定な射影的平坦商$F\_j/F\_{j-1}$は
$$
\frac{c\_1^{\mathrm{BC}}(F\_j/F\_{j-1})}{\operatorname{rank}(F\_j/F\_{j-1})}=\frac{c\_1^{\mathrm{BC}}(E)}{r}
$$
を満たす。

## 証明の見取り図

Introductionでは、既存の$L^p$近似臨界Hermitian構造を鋭い不等式の入力とし、等号の場合はHermitian–Yang–Mills流によって解析すると説明される。半安定束の近似Hermitian–Einstein構造を用いる従来の枠組みから、Harder–Narasimhan型を残した近似構造へ移ることが出発点である。詳細な流の収束証明は本記事では扱わない。

## 原論文との対応

- **Abstractページ:** [The Sharp Generalized Bogomolov Inequality](https://arxiv.org/abs/2610.24987)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.24987v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3; Remark 1.2; Corollary 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.24987v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
