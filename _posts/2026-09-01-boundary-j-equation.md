---
layout: paper
title: "Boundary Cases of the $J$-Equation: Divisorial Rigidity and a Global $C^0$ Estimate"
title_ja: "J方程式の境界場合：因子的剛性と大域的C⁰評価"
authors: "Jixiang Fu, Ziyi Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We study two boundary cases of the stability condition for the $J$-equation. First, under the $J$-semistable condition, we show that the destabilizing prime divisors form an exceptional family in the sense of Boucksom, with a uniform numerical gap away from them. The related modified nef estimate can remove the $J$-big assumption in Liu's work~\cite{Liu2026Boundary}. Second, under the smooth boundary cone condition, we obtain a uniform global $C^0$ estimate for solutions of the approximating twisted $J$-equations. As a consequence, we construct a bounded-potential Bedford--Taylor solution of the $J$-equation, which is smooth outside the destabilizing prime divisors.
topic: differential-geometry
tags:
  - positivity
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2608.29736v1"
arxiv_url: "https://arxiv.org/abs/2608.29736"
arxiv_submitted: "2026-08-30"
arxiv_updated: "2026-08-30"
summary: >-
  J半安定なコンパクトKähler多様体では、不安定化素因子がBoucksomの意味で例外族をなし、その個数がPicard数で抑えられることを示す。滑らかな境界錐条件の下では近似twisted J方程式の一様な大域 $C^0$ 評価を確立し、不安定化因子の外で滑らかな有界ポテンシャルBedford–Taylor解を構成する。
abstract_en: ""
summary_en: >-
  The paper analyzes the semistable and boundary-cone regimes of the J-equation. A quantitative estimate against every modified nef class forces the destabilizing prime divisors to form an exceptional family. In the stronger smooth boundary-cone setting, a singular barrier leads to a uniform global bound for approximating twisted equations. Passing to the limit produces a bounded Bedford–Taylor solution that is smooth away from the divisorial obstruction locus.
abstract_ja: >-
  J方程式の安定性条件に関する二つの境界場合を扱う。J半安定条件の下で、不安定化素因子がBoucksomの意味で例外族をなし、それらから離れた一様な数値的ギャップがあることを示す。滑らかな境界錐条件の下では近似twisted J方程式の解に一様な大域 $C^0$ 評価を与え、その帰結として不安定化素因子の外で滑らかな有界ポテンシャルBedford–Taylor解を構成する。
abstract_source_url: "https://arxiv.org/abs/2608.29736"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.29736](https://arxiv.org/abs/2608.29736)
- **著者:** Jixiang Fu, Ziyi Zhang
- **初回投稿日:** 2026-08-30
- **最終更新日:** 2026-08-30
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

J方程式はKähler形式 $\chi,\omega$ に対し、$\chi_u=\chi+\sqrt{-1}\partial\bar\partial u>0$ が

$$
\chi_u^n=n\chi_u^{n-1}\wedge\omega
$$

を満たすことを求める。厳密なJ安定領域では滑らかな可解性が理解されているが、交叉不等式で等号が生じる境界では解の退化軌跡と正則性が問題となる。

本論文はまずJ半安定条件の下で、不安定化素因子がBoucksomの意味で例外族をなすことを示す。したがって因子は有限個で、その個数はPicard数以下である。

より強い滑らかな境界錐条件の下では、不安定化因子に沿って対数特異性をもつbarrierを用い、近似twisted J方程式に大域的な一様 $C^0$ 評価を与える。極限として有界ポテンシャルのBedford–Taylor解が得られ、因子軌跡の外では滑らかである。

## 背景と問題設定

$p$ 次元既約部分多様体 $Z$ に対し

$$
F_p(\chi)=\chi^p-p\chi^{p-1}\wedge\omega
$$

と置き、$\int_ZF_p(\chi)=0$ となるものを不安定化部分多様体と呼ぶ。J半安定条件はこれらの積分が全て非負であることを要求する。滑らかな境界錐条件 $\chi^{n-1}-(n-1)\chi^{n-2}\wedge\omega\geq0$ はJ半安定性を含意する。

## 主結果

### 不安定化素因子の例外性（Theorem 1.2）

J半安定条件の下で、Introductionの式 (1.6) により定まる $c>0$ を用い、

$$
\mathcal S=\left\{D:\ D\text{ は素因子},\quad
\int_DF_{n-1}(\chi)<c\int_D\omega^{n-1}\right\}
$$

と置く。$\mathcal S$ の任意の有限部分集合はBoucksomの意味で例外族をなし、特に $\#\mathcal S$ は $M$ のPicard数以下である。積分が0の不安定化素因子もこの集合に入る。

### modified nef評価（Proposition 1.3）

任意のmodified nef類 $\beta$ に対して

$$
\int_M F_{n-1}(\chi)\wedge\beta
\geq c\int_M\omega^{n-1}\wedge\beta
$$

が成り立つ。この評価により先行研究のJ-big仮定を除去できる。

### 境界での有界弱解（Theorem 1.4）

$n\geq3$ とし、滑らかな境界錐条件を仮定する。不安定化素因子の合併を $Z$ とすると、$u_\infty\in L^\infty(M)\cap C^\infty(M\setminus Z)$ が存在し、J方程式を全体でBedford–Taylorの意味で、$M\setminus Z$ では滑らかな意味で満たす。

## 証明の見取り図

質量集中法からまずKähler類 $\beta$ に対する定量的不等式を証明し、modified nef錐への近似で一般の $\beta$ へ拡張する。この評価と例外族の錐論的特徴づけを合わせ、因子の剛性と有限性を得る。境界錐の場合には先行研究の特異barrierを利用し、近似twisted方程式の局所評価を大域 $C^0$ 評価へ高める。因子外で高階評価を得た後に極限を取り、Bedford–Taylor解を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.29736](https://arxiv.org/abs/2608.29736)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.4; Proposition 1.3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
