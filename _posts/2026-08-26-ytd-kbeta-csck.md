---
layout: paper
title: "A YTD correspondence for constant scalar curvature metrics"
title_ja: "定スカラー曲率計量に対するYTD対応"
authors: "Tamás Darvas, Kewei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  Given a compact K\"ahler manifold, to better understand Mabuchi's $K$ energy we introduce a family of $K^\beta$ energies, whose favorable properties are similar to those of the Ding energy from the Fano case. The construction uses Berman's transcendental quantization, and we show that the slope of the $K^\beta$ energies along test configurations can be computed using intersection theory. With these ingredients in place we provide a uniform Yau-Tian-Donaldson correspondence that characterizes the existence of a unique constant scalar curvature K\"ahler metric using test configurations. Combining our techniques with the non-Archimedean approach to $K$-stability pioneered by Boucksom--Jonsson, we show that the properness of the classical $K$ energy can be tested by checking its slope along a distinguished subclass of Chi Li-type models, called log discrepancy models, thus yielding another $G$-uniform Yau--Tian--Donaldson correspondence.
topic: differential-geometry
tags:
  - csck-extremal-kahler-metrics
  - k-stability
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2509.15173v2"
arxiv_url: "https://arxiv.org/abs/2509.15173"
arxiv_submitted: "2025-09-18"
arxiv_updated: "2025-11-03"
summary: >-
  Mabuchiの$K$エネルギーを超越的に量子化した$K^\beta$エネルギーを導入し、その連続性とtest configurationに沿う傾き公式を用いてcscK計量の存在を特徴付ける。偏極Kähler多様体が一意なcscK計量を持つことと、ある$\beta>0$に対する一様$K^\beta$安定性が同値である。
abstract_en: ""
summary_en: >-
  The authors introduce quantized $K^\beta$ energies that retain the properness behavior of Mabuchi's energy while enjoying stronger continuity properties. Their slopes along test configurations admit intersection-theoretic descriptions. This leads to a uniform Yau--Tian--Donaldson criterion: a polarized Kähler manifold has a unique constant scalar curvature Kähler metric exactly when it is uniformly $K^\beta$-stable for some positive $\beta$. A further non-Archimedean formulation reduces testing properness to log discrepancy models.
abstract_ja: >-
  コンパクトKähler多様体上でMabuchiの$K$エネルギーを理解するため、Fanoの場合のDingエネルギーに似た性質を持つ$K^\beta$エネルギー族を導入する。Bermanの超越的量子化を用い、test configurationに沿う傾きを交点理論で計算する。これにより一意な定スカラー曲率Kähler計量の存在を一様安定性で特徴付け、さらに古典的$K$エネルギーの固有性をlog discrepancy model上の傾きで検査できることを示す。
abstract_source_url: "https://arxiv.org/abs/2509.15173"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.15173](https://arxiv.org/abs/2509.15173)
- **著者:** Tamás Darvas, Kewei Zhang
- **初回投稿日:** 2025年9月18日
- **最終更新日:** 2025年11月3日（v2）
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

cscK方程式の解はMabuchiの$K$エネルギーの臨界点であり、その存在は$K$エネルギーの固有性と結び付く。しかしエントロピー項は$d_1$位相で下半連続にとどまり、test configurationによる代数的検査へ移す際の障害となる。

著者らはエントロピーをBermanの超越的量子化に基づく$\beta$-エントロピーで置き換え、$K^\beta$エネルギーを構成する。$\beta\to\infty$で古典的$K$エネルギーへ単調に近づきつつ、$d_1$位相および測地線rayの弦距離について良い連続性を持つ。

この連続性と、test configurationに沿う$K^\beta$の傾きの交点理論的公式を組み合わせることで、一意なcscK計量の存在を一様$K^\beta$安定性で特徴付ける。検査対象がample test configurationである点が結果の具体性である。

さらにBoucksom--Jonsson型の非Archimedes的手法を組み合わせ、古典的$K$エネルギーの固有性をlog discrepancy modelという特別なモデル群だけで検査する別の$G$-一様YTD対応も得る。

## 背景と問題設定

$\omega$と同じ類のKähler計量を$\omega_u=\omega+dd^cu$と書くと、cscK方程式は$S_{\omega_u}=\bar S$である。$K$エネルギーはエントロピーとMonge--Ampèreエネルギーから成り、その非連続性を緩和するため

$$
\operatorname{Ent}_\beta(u)=\sup_{v\in\mathcal H_\omega}
\left(-\log\frac1V\int_Xe^{\beta(v-u)}\omega^n+\beta(I(v)-I(u))\right)
$$

を導入する。対応する$u_\beta$は

$$
(\omega+dd^cu_\beta)^n=e^{\beta(u_\beta-u)}\omega^n
$$

を満たし、$\operatorname{Ent}_\beta(u)=\beta(I(u_\beta)-I(u))$となる。これが超越的量子化と呼ばれる理由である。

## 主結果

### 一様YTD対応（Theorem 1.1）

偏極Kähler多様体$(X,L)$について、次の二条件は同値である。

1. $c_1(L)$内に一意なcscK計量が存在する。
2. ある$\beta>0$について$(X,L)$が一様$K^\beta$安定である。

後者は、すべてのample test configuration $\mathcal T$に対し、ある$\gamma>0$が存在して

$$
K^\beta_{\mathcal T}\ge\gamma J_{\mathcal T}
$$

となる条件である。Introductionでは、$K$エネルギーの固有性と十分大きい$\beta$での$K^\beta$の固有性の同値、およびray上の$K^\beta$の連続性が鍵だと説明される。

## 証明の見取り図

cscK計量があればChen--Cheng型の結果から$K$エネルギーが固有となり、量子化エネルギーとの固有性の同値を通じて一様$K^\beta$安定性を得る。逆向きでは、有限の$K$傾きを持つ測地線rayがtest configuration由来のrayで近似できるというChi Liの結果を使う。近似上の安定性不等式を弦距離に関する$K^\beta$と$J$の連続性で極限へ移し、$K\ge K^\beta$から$K$の測地線的固有性、したがってcscK計量の存在を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2509.15173](https://arxiv.org/abs/2509.15173)
- **Introduction:** Section 1 “The main results”, pp. 2–9
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2
- **論文構成の説明:** Contents, p. 1
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
