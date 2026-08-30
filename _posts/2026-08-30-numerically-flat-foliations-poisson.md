---
layout: paper
title: "Numerically flat foliations and holomorphic Poisson geometry"
title_ja: "数値的平坦葉層と正則Poisson幾何"
authors: "Stéphane Druel, Jorge Vitório Pereira, Brent Pym, Frédéric Touzet"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.DG, math.SG]
arxiv_abstract: >-
  We investigate the structure of smooth holomorphic foliations with numerically flat tangent bundles on compact Kähler manifolds. Extending earlier results on non-uniruled projective manifolds by the second and fourth authors, we show that such foliations induce a decomposition of the tangent bundle of the ambient manifold, have leaves uniformized by Euclidean spaces, and have torsion canonical bundle. Additionally, we prove that smooth two-dimensional foliations with numerically trivial canonical bundle on projective manifolds are either isotrivial fibrations or have numerically flat tangent bundles. This in turn implies a global Weinstein splitting theorem for rank-two Poisson structures on projective manifolds. We also derive new Hodge-theoretic conditions for the existence of zeros of Poisson structures on compact Kähler manifolds.
topic: algebraic-geometry
tags: [foliations, positivity, vector-bundles-sheaves, symplectic-contact-geometry, uniformization]
arxiv_id: "2411.08806v1"
arxiv_url: "https://arxiv.org/abs/2411.08806"
arxiv_submitted: "2024-11-13"
arxiv_updated: "2024-11-13"
summary: >-
  コンパクトKähler多様体上の正則葉層について、接束の数値的平坦性からambient接束と普遍被覆の積分解、葉のEuclid一意化、標準束のtorsion性を導く。二次元葉層の構造定理を正則Poisson構造へ応用し、低次元射影多様体で大域的Weinstein分解を得る。
abstract_en: >-
  We investigate the structure of smooth holomorphic foliations with numerically flat tangent bundles on compact Kähler manifolds. Extending earlier results on non-uniruled projective manifolds by the second and fourth authors, we show that such foliations induce a decomposition of the tangent bundle of the ambient manifold, have leaves uniformized by Euclidean spaces, and have torsion canonical bundle. Additionally, we prove that smooth two-dimensional foliations with numerically trivial canonical bundle on projective manifolds are either isotrivial fibrations or have numerically flat tangent bundles. This in turn implies a global Weinstein splitting theorem for rank-two Poisson structures on projective manifolds. We also derive new Hodge-theoretic conditions for the existence of zeros of Poisson structures on compact Kähler manifolds.
summary_en: ""
abstract_ja: >-
  コンパクトKähler多様体上で接束が数値的平坦な正則葉層の構造を調べる。そのような葉層はambient接束の分解を誘導し、葉はEuclid空間で一意化され、標準束はtorsionとなる。さらに射影多様体上の標準束が数値的自明な二次元正則葉層を分類し、階数2のPoisson構造に対する大域的Weinstein分解と、Poisson構造の零点に関するHodge理論的条件を導く。
abstract_source_url: "https://arxiv.org/abs/2411.08806"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2411.08806v1](https://arxiv.org/abs/2411.08806v1)
- **著者:** Stéphane Druel, Jorge Vitório Pereira, Brent Pym, Frédéric Touzet
- **初回投稿日:** 2024年11月13日
- **最終更新日:** 2024年11月13日
- **主分類・副分類:** math.AG（主分類）, math.DG, math.SG
- **ライセンス:** [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

正則葉層$\mathcal F$の接束$T_{\mathcal F}$に曲率の消滅や数値的平坦性を仮定すると、葉だけでなくambient多様体の大域構造まで制約される。従来は非uniruled射影多様体で得られていた構造を、本論文は任意のコンパクトKähler多様体上の正則葉層へ拡張する。

$T_{\mathcal F}$が数値的平坦なら、実際にはHermitian平坦であり、ambient接束に補葉層が存在する。普遍被覆は$\mathbb C^p$との積に分解し、各葉の解析的閉包も可換Lie群の等変コンパクト化から記述される。

第二の結果は、射影多様体上の二次元正則葉層で$c_1(T_{\mathcal F})=0$の場合を扱う。接束がHermitian平坦であるか、有限étale被覆後に葉を与える曲面との積になるかという二分法を得る。

これらはPoisson構造のsymplectic葉層へ適用され、低次元射影多様体で大域的Weinstein分解を与える。より一般の分解や零点の存在については予想として区別され、論文は特定の次元・Fano条件下でそれらを証明する。

## 背景と問題設定

数値的平坦束とは束と双対束がともにnefな束であり、Chern類が消える。葉層に対しては、Kähler類の葉への制限を捉える「cohomologically Kähler」という条件が導入される。$c_1(T_{\mathcal F})=0$の下では、この条件が$T_X$内の補部分束の存在と結びつく。

## 主結果

### 数値的平坦葉層の分解（Theorem 1.1）

$X$をコンパクトKähler多様体、$\mathcal F$を次元$p$の正則葉層とし、$T_{\mathcal F}$が数値的平坦とする。このとき$T_{\mathcal F}$はHermitian平坦、$\det T_{\mathcal F}$はtorsionであり、ある葉層$\mathcal G$について

$$
T_X=T_{\mathcal F}\oplus T_{\mathcal G}
$$

となる。さらに普遍被覆は

$$
\widetilde X\cong\mathbb C^p\times Y
$$

と分解し、接束の分解もこの積分解へ持ち上がる。各葉の解析的閉包は、可換Lie群の等変コンパクト化の有限étale商として記述される。

### 数値的自明な二次元葉層（Theorem 1.2）

$X$を複素射影多様体、$\mathcal F$を$c_1(T_{\mathcal F})=0$である二次元正則葉層とする。すると標準束はtorsionであり、$T_{\mathcal F}$がHermitian平坦であるか、有限étale被覆が$L\times Y$と分解して$\mathcal F$が$Y$への射影から誘導される。ここで$L$は第一Chern類が0の曲面である。

### Poisson構造への応用（Theorems 1.5, 1.7）

Introductionでは、最小symplectic葉の次元に対応する積被覆の存在をConjecture 1.4として提示する。Theorem 1.2などから、これは$\dim X\leq5$の射影多様体で成立する。またPoisson構造の零点に関するHodge数条件のConjecture 1.6は、射影かつ$\dim X\leq6$などIntroductionに列挙された範囲で成立する。

## 証明の見取り図

Kähler類の葉方向への非退化をcohomologically Kähler条件として抽出し、$c_1(T_{\mathcal F})=0$のとき補部分束を構成する。数値的平坦束のfiltrationと平坦性を用いてこの分解を普遍被覆の積分解へ積分する。二次元の場合には葉の代数性・コンパクト性判定を組み合わせ、得られた葉層構造をPoisson tensorのsymplectic葉層へ移す。

## 原論文との対応

- **Abstractページ:** [arXiv:2411.08806v1](https://arxiv.org/abs/2411.08806v1)
- **Introduction:** Section 1, pp. 2–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.5, 1.7; Conjectures 1.4, 1.6
- **論文構成の説明:** Introductionの各小節とSection参照
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
