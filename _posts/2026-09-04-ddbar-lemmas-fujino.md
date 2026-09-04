---
layout: paper
title: '$\partial\bar\partial$-lemmas and a conjecture of O. Fujino'
title_ja: '$\partial\bar\partial$ 補題と藤野予想'
authors: "Junyan Cao, Mihai Păun"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  It contains the proof of a very general $\partial\bar\partial$-lemma, together with a decomposition theorem for currents with values in a (singular) Hermitian line bundle. As a corollary, we establish the Kähler version on an injectivity theorem due to O. Fujino in the projective case.
topic: algebraic-geometry
tags:
  - l2-methods
  - vector-bundles-sheaves
arxiv_id: "2303.16239v1"
arxiv_url: "https://arxiv.org/abs/2303.16239"
arxiv_submitted: "2023-03-28"
arxiv_updated: "2023-03-28"
summary: >-
  特異Hermite計量を持つ線束に値を取るカレントに対し、通常のHodge理論と特異計量の $L^2$ 理論を補間する一般化 $\partial\bar\partial$ 補題を証明する。これを用いて、単純正規交差対を対象とする藤野の単射性定理を射影的場合からコンパクトKählerの場合へ拡張する。
abstract_en: >-
  It contains the proof of a very general $\partial\bar\partial$-lemma, together with a decomposition theorem for currents with values in a (singular) Hermitian line bundle. As a corollary, we establish the Kähler version on an injectivity theorem due to O. Fujino in the projective case.
summary_en: ""
abstract_ja: >-
  非常に一般的な $\partial\bar\partial$ 補題と、特異Hermite線束に値を取るカレントの分解定理を証明する。その系として、射影的場合に藤野が得た単射性定理のKähler版を確立する。
abstract_source_url: "https://arxiv.org/abs/2303.16239"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2303.16239](https://arxiv.org/abs/2303.16239)
- **著者:** Junyan Cao, Mihai Păun
- **初回投稿日:** 2023年3月28日
- **最終更新日:** 2023年3月28日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

半正曲率の滑らかな計量に対する $L^2$ 理論では、曲率作用素を用いた可積分条件のもとで $\bar\partial$ 方程式を解ける。一方、単純正規交差因子に沿って対数極を持つ形式にはHodge理論による $\partial\bar\partial$ 補題がある。しかし因子から定まる自然な計量は特異であり、通常の $L^2$ 条件を直接課すと形式に因子上での消滅を要求してしまうため、両者はそのままでは接続しない。

本論文は、特異Hermite線束に値を取るカレントを導入し、円錐特異性を持つKähler計量に対するHodge分解を整備する。これにより、Hodge理論と $L^2$ 理論を補間する消滅定理を得る。

主要な応用は藤野が予想した単射性定理のコンパクトKähler版である。単純正規交差対 $(X,E)$、半正な線束 $F$、その冪の切断 $s$ に対し、$s$ の零点集合が対のlc中心を含まなければ、$s$ によるコホモロジーの乗法写像が全次数で単射となる。

## 背景と問題設定

$X$ をコンパクトKähler多様体、$E$ を単純正規交差因子とする。対数形式に対する古典的な $\partial\bar\partial$ 補題と、半正曲率線束に値を取る形式の $L^2$ 可解性は異なる特異性を扱う。本論文の課題は、因子に沿う極を許したまま特異線束係数のカレントを解析し、両理論を同時に含む分解と消滅を確立することである。

## 主結果

### 一般化 $\partial\bar\partial$ 補題（Theorem 1.1）

$X$ を $n$ 次元コンパクトKähler多様体、$E$ を単純正規交差因子とし、線束 $(L,h_L)$ の曲率が

$$
i\Theta_{h_L}(L)=\sum_i q_i[Y_i]+\theta_L,
\qquad q_i\in(0,1)\cap\mathbb Q,
$$

と書けるとする。ここで $E+\sum_iY_i$ は単純正規交差であり、$\theta_L$ は滑らかな半正形式である。$L+E$ 値の滑らかな $\bar\partial$ 閉 $(n,q)$ 形式 $\lambda$ が、補集合上で

$$
\frac{\lambda}{s_E}=D'_{h_L}\beta_1+\theta_L\wedge\beta_2
$$

を満たすならば、$[\lambda]=0$ が $H^q(X,K_X+L+E)$ で成り立つ。$\beta_1,\beta_2$ はIntroductionに指定された型を持ち、因子に沿う対数極を許される。

### 藤野の単射性予想（Theorem 1.2）

$E=\sum E_i$ を $X$ 上の単純正規交差因子、$F$ を半正線束、$s$ を $mF$ の正則切断とする。$s$ の零点集合がlc対 $(X,E)$ のlc中心を一つも含まなければ、任意の $q$ に対して

$$
s\otimes:H^q(X,K_X+E+F)\longrightarrow
H^q(X,K_X+E+(m+1)F)
$$

は単射である。Introductionでは、任意特異性を持つ半正特異計量への拡張はQuestion 1.3として提示され、証明済みの主張とは区別されている。

## 証明の見取り図

円錐特異Kähler計量に適合する滑らかな形式を試験形式として、特異Hermite束値カレントのGreen作用素を双対性により定義する。得られるKodaira–de Rham型分解

$$
T=H(T)+\Delta''G(T)
$$

とGreenカレントの正則性を用いてTheorem 1.1の消滅を導き、先行研究の補題と組み合わせてTheorem 1.2の単射性へ進む。

## 原論文との対応

- **Abstractページ:** [arXiv:2303.16239](https://arxiv.org/abs/2303.16239)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2; Question 1.3
- **論文構成の説明:** p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
