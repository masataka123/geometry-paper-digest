---
layout: paper
title: "Pluripotential geometry on semi-positive effective divisors of numerical dimension one"
title_ja: "数値次元1の半正有効因子上の多重ポテンシャル幾何"
authors: "Takayuki Koike"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  We study the complex-analytic geometry of semi-positive holomorphic line bundles on compact Kähler manifolds. In one of our main results, for a $\mathbb{Q}$-effective line bundle satisfying a natural torsion-type assumption, we show the equivalence between semi-positivity and semi-ampleness. More generally, for an effective nef divisor of numerical dimension one, we characterize the semi-positivity of the associated line bundle in terms of the existence of a certain type of pseudoflat fundamental system of neighborhoods of the support. Furthermore, for an effective semi-positive divisor, we prove a dichotomy: either the divisor is the pull-back of a $\mathbb{Q}$-divisor by a fibration onto a Riemann surface, or the Hartogs extension phenomenon holds on the complement of its support. Our proof is based on a pluripotential method that has previously been used for studying the boundaries of pseudoconvex domains, which allows us to investigate the complex-analytic structure of neighborhoods of the support of the divisor even when the manifold is non-compact.
topic: several-complex-variables
tags:
  - positivity
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2511.13903v2"
arxiv_url: "https://arxiv.org/abs/2511.13903v2"
arxiv_submitted: "2025-11-17"
arxiv_updated: "2026-01-21"
summary: >-
  コンパクトKähler多様体上の数値次元1の有効nef因子について、付随する直線束の半正値性を台の近傍のunitary flat性によって特徴づける。torsion型仮定のもとでは半正値性と半豊富性が同値となり、一般の半正有効因子には曲線へのファイブレーションと補集合上のHartogs延長との二者択一が成立する。
abstract_en: >-
  
summary_en: >-
  This work analyzes semipositive line bundles associated with effective divisors on compact Kähler manifolds. In numerical dimension one, semipositivity is characterized through flat behavior near the divisor, and under a torsion condition it becomes equivalent to a fibration over a curve. A pluripotential argument also produces a dichotomy between such fibrations and Hartogs extension on the complement.
abstract_ja: >-
  コンパクトKähler多様体上の半正正則直線束の解析幾何を研究する。数値次元1の有効nef因子では、半正値性が台のpseudoflatな基本近傍系の存在と同値である。自然なtorsion型仮定のもとで半正値性と半豊富性の同値を示し、さらに曲線へのファイブレーションか補集合上のHartogs延長かという二者択一を証明する。
abstract_source_url: "https://arxiv.org/abs/2511.13903v2"
license_name: "arXiv.org perpetual, non-exclusive license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2511.13903v2](https://arxiv.org/abs/2511.13903v2)
- **著者:** Takayuki Koike
- **初回投稿日:** 2025年11月17日
- **最終更新日:** 2026年1月21日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

半正値直線束の局所weightがもつ多重劣調和性から、因子の台の近傍構造を読み取る問題を扱う。対象はコンパクトKähler多様体上の有効因子 $D$ で、付随する束 $[D]$ の数値次元が1の場合である。

第一の結果は、$D$ がnefなら $[D]$ の半正値性が台の近傍でのunitary flat性、および絶対値1の遷移関数をもつ局所定義関数の存在と同値であることを示す。滑らかな超曲面に限られていたUeda理論的手法と異なり、一般の有効因子を扱える。

$[mD]|_Y$ が正の整数 $m$ について自明というtorsion型仮定を加えると、半正値性は曲線へのファイブレーションから $D$ が引き戻される半豊富性と同値になる。最後に半正有効因子について、曲線のファイバーである場合と補集合でHartogs延長が成り立つ場合の排他的二者択一を得る。

## 背景と問題設定

数値次元は
$$\operatorname{nd}(L)=\max\{k\in\{0,\ldots,n\}\mid c_1^{\mathbb R}(L)^k\neq0\}$$
である。bigな極端 $\operatorname{nd}(L)=n$ とunitary flatな極端 $0$ の中間で、数値次元1はabundance予想とも結びつく難しい場合である。

## 主結果

### Theorem 1.1

コンパクトKähler多様体上の有効nef因子 $D$ が $\operatorname{nd}([D])=1$ を満たすとき、(i) $[D]$ が半正値、(ii) 台 $Y$ のある近傍で $[D]$ がunitary flat、(iii) $Y$ の局所定義関数 $s_j$ を $|s_j/s_k|=1$ となるよう取れる、の三条件は同値である。

### Theorem 1.2

$D\neq0$ かつ $[mD]|_Y$ が自明なら、$[D]$ の半正値性は、コンパクトRiemann面への連結ファイバー付き全射 $\pi:X\to R$ と有効因子 $D_R$ が存在して
$$\pi^*D_R=m'D$$
となることと同値である。

### Theorem 1.4

連結な台 $Y$ をもつ半正有効因子について、$D$ が曲線へのファイブレーションのファイバーの有理数倍であるか、$X\setminus Y$ 上でHartogs型延長が成り立つかのちょうど一方が成立する。

## 証明の見取り図

半正値計量から得る多重劣調和関数 $\rho$ のlevel set上で、境界Monge–Ampère型量 $d^c\rho\wedge(dd^c\rho)^{n-1}$ を調べる。Demailly、Nemirovski、Fu–Shawに由来するこの量の制御により、台の近くのlevel setがLevi-flatとなる。これがunitary flat性または互いに交わらないコンパクト超曲面族を生み、コンパクトの場合にはファイブレーション／Hartogs延長の二者択一へつながる。

## 原論文との対応

- **Abstractページ:** [arXiv:2511.13903v2](https://arxiv.org/abs/2511.13903v2)
- **Introduction:** Section 1, pp. 1–4
- **主要結果:** Theorems 1.1–1.4
- **確認したarXivバージョン:** v2
- **source_scope:** Abstract and Introduction
