---
layout: paper
title: "$L^2$-vanishing theorem and a conjecture of Kollár"
title_ja: "$L^2$消滅定理とKollár予想"
authors: "Ya Deng, Botong Wang"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CV]
arxiv_abstract: >-
  In 1995, Kollár conjectured that a smooth complex projective $n$-fold $X$ with generically large fundamental group has Euler characteristic $χ(X, K_X)\geq 0$. In this paper, we prove the conjecture assuming $X$ has linear fundamental group, i.e., there exists a representation $π_1(X)\to {\rm GL}_N(\mathbb{C})$ with finite kernel. We deduce the conjecture by proving a stronger $L^2$ vanishing theorem: for the universal cover $\widetilde{X}$ of such $X$, its $L^2$-Dolbeault cohomology $H_{(2)}^{n,q}(\widetilde{X})=0$ for $q\neq 0$. The main ingredients of the proof are techniques from the linear Shafarevich conjecture along with some analytic methods.
topic: algebraic-geometry
tags: [fundamental-groups, l2-methods]
arxiv_id: "2409.11399v2"
arxiv_url: "https://arxiv.org/abs/2409.11399"
arxiv_submitted: "2024-09-17"
arxiv_updated: "2025-08-06"
summary: >-
  generically largeな線形表現をもつ滑らかな複素射影多様体の普遍被覆上で$L^2$-Dolbeaultコホモロジーの消滅を示す。Atiyahの$L^2$指数定理を通じて$\chi(X,K_X)\geq0$を導き、基本群が線形な場合のKollár予想を解決する。
abstract_en: >-
  In 1995, Kollár conjectured that a smooth complex projective $n$-fold $X$ with generically large fundamental group has Euler characteristic $χ(X, K_X)\geq 0$. In this paper, we prove the conjecture assuming $X$ has linear fundamental group, i.e., there exists a representation $π_1(X)\to {\rm GL}_N(\mathbb{C})$ with finite kernel. We deduce the conjecture by proving a stronger $L^2$ vanishing theorem: for the universal cover $\widetilde{X}$ of such $X$, its $L^2$-Dolbeault cohomology $H_{(2)}^{n,q}(\widetilde{X})=0$ for $q\neq 0$. The main ingredients of the proof are techniques from the linear Shafarevich conjecture along with some analytic methods.
summary_en: ""
abstract_ja: >-
  Kollárは、generically largeな基本群をもつ滑らかな複素射影$n$次元多様体$X$について$\chi(X,K_X)\geq0$と予想した。本論文は、有限核をもつ表現$\pi_1(X)\to\mathrm{GL}_N(\mathbb C)$が存在する線形基本群の場合に予想を証明する。より強く、普遍被覆$\widetilde X$の$L^2$-Dolbeaultコホモロジー$H^{n,q}_{(2)}(\widetilde X)$が$q\ne0$で消滅する。証明には線形Shafarevich予想の技法と解析的方法を用いる。
abstract_source_url: "https://arxiv.org/abs/2409.11399"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2409.11399v2](https://arxiv.org/abs/2409.11399v2)
- **著者:** Ya Deng, Botong Wang
- **初回投稿日:** 2024年9月17日
- **最終更新日:** 2025年8月6日
- **主分類・副分類:** math.AG（主分類）、math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Kollár予想は、generically largeな基本群をもつ滑らかな複素射影多様体$X$の標準束の正則Euler標数が非負になると予測する。generically largeとは、非常に一般の点を通る任意の正次元部分多様体の基本群の像が無限になるという条件である。

本論文は、基本群が線形な場合に予想を証明する。実際には有限核表現より少し一般に、generically largeな表現$\rho:\pi_1(X)\to\mathrm{GL}_N(\mathbb C)$が存在する場合を扱う。

中心は普遍被覆上の$L^2$-Dolbeaultコホモロジーの消滅である。正則Euler標数の不等式だけでなく、低次数の$L^2$正則形式の消滅を示し、Euler標数が正なら非自明な最高次$L^2$正則形式の存在と$X$の一般型性も従う。

従来、最大Albanese次元の場合やKähler双曲的な場合に関連する結果が知られていた。新規性は、線形Shafarevich予想の技法とEuclid buildingへの調和写像を用いて、一般の線形表現で必要な部分消滅を確立する点にある。

## 背景と問題設定

$X$がgenerically largeな基本群をもつとは、非常に一般の点を通る正次元既約部分多様体$Z$に対して

$$
\operatorname{Im}\bigl[\pi_1(Z^{\rm norm})\to\pi_1(X)\bigr]
$$

が無限であることをいう。表現$\rho$については、この像を$\rho$で送った像が無限であることを要求する。普遍被覆$\widetilde X$にはKähler計量の引き戻しを入れ、$H^{p,q}_{(2)}(\widetilde X)$を考える。

## 主結果

### $L^2$消滅とEuler標数（Theorem A）

$X$を滑らかな複素射影$n$次元多様体とし、generically largeな表現

$$
\rho:\pi_1(X)\to\mathrm{GL}_N(\mathbb C)
$$

が存在するとする。このとき

$$
H^{p,0}_{(2)}(\widetilde X)=0\quad(0\leq p\leq n-1),
\qquad
H^{n,q}_{(2)}(\widetilde X)=0\quad(1\leq q\leq n)
$$

が成り立ち、さらに

$$
\chi(X,K_X)\geq0
$$

を得る。厳密な不等式$\chi(X,K_X)>0$なら、$\widetilde X$上に非自明な$L^2$正則$n$形式が存在し、$X$は一般型である。

特に$\pi_1(X)$が有限核をもつ複素線形表現をもてば、基本群自体のgenerically large性から仮定が満たされ、線形基本群の場合のKollár予想が従う。

## 証明の見取り図

最難関は$H^{p,0}_{(2)}(\widetilde X)$の消滅である。半単純表現だけに限定せず扱うため、Euclid buildingへの調和写像から1形式を構成し、線形Shafarevich予想で発達した手法と解析的な部分消滅定理を組み合わせる。得られた$L^2$消滅をAtiyahの$L^2$指数定理へ入力すると、最高次だけがEuler標数へ寄与し、その非負性が従う。

## 原論文との対応

- **Abstractページ:** [arXiv:2409.11399v2](https://arxiv.org/abs/2409.11399v2)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Conjecture 1.1, Theorem A
- **論文構成の説明:** Section 1.1, p. 2
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
