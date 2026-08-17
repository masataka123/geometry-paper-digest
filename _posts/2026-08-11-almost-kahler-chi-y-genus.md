---
layout: paper
title: "Hirzebruch $χ_{y}$-genus of compact almost Kähler manifold with negative sectional curvature"
title_ja: "負の断面曲率を持つコンパクト概Kähler多様体のHirzebruch χ_y 種数"
authors: "Teng Huang, Pan Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
tags:
  - curvature
  - symplectic-contact-geometry
arxiv_id: "2604.27423v1"
arxiv_url: "https://arxiv.org/abs/2604.27423"
arxiv_submitted: "2026-04-30"
arxiv_updated: "2026-04-30"
summary: >-
  負の断面曲率を持つ閉概Kähler多様体について、Nijenhuisテンソルが曲率尺度に比べて十分小さければHirzebruch $χ_y$ 種数の全成分に符号不等式が成立することを示す。特にEuler数についてHopf予想の符号を量的に強化し、GromovのKählerの場合の議論を非可積分設定へ拡張する。
abstract_en: >-
  Let $(X,J,\omega)$ be a closed $2n$-dimensional almost Kähler manifold with negative sectional curvature. We prove that if the Nijenhuis tensor of the almost complex structure is sufficiently small, then the components of the Hirzebruch $\chi_{y}$-genus satisfy the inequality $(-1)^{n-p}\chi_{p}(X)\geq 1$ for all $p=0,1,\cdots,n$. In particular, this result implies the Hopf conjecture in this setting, namely that the Euler number satisfies $(-1)^{n}\chi(X)\geq n+1$. The proof is based on new $L^{2}$-estimates for harmonic forms on the universal covering, combined with a refined vanishing theorem for the operator $\bar{\partial}+\bar{\partial}^{*}$ and Atiyah's $L^{2}$-index theorem. This work extends the classical result of Gromov [J. Differential Geom., 1991] from the Kähler to the almost Kähler setting under the stated smallness condition.
summary_en: ""
abstract_ja: >-
  負の断面曲率を持つ閉 $2n$ 次元概Kähler多様体 $(X,J,\omega)$ を考える。概複素構造のNijenhuisテンソルが十分小さければ、Hirzebruch $\chi_y$ 種数の成分は全て $(-1)^{n-p}\chi_p(X)\geq1$ を満たす。特にEuler数について $(-1)^n\chi(X)\geq n+1$ が従い、この設定でHopf予想が成立する。証明は普遍被覆上の調和形式に対する新しい $L^2$ 評価、$\bar\partial+\bar\partial^*$ の精密な消滅定理、Atiyahの $L^2$ 指数定理を組み合わせ、GromovのKählerの場合を概Kählerの場合へ拡張する。
abstract_source_url: "https://arxiv.org/abs/2604.27423v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.27423v1](https://arxiv.org/abs/2604.27423v1)
- **著者:** Teng Huang, Pan Zhang
- **初回投稿日:** 2026年4月30日
- **最終更新日:** 2026年4月30日（v1）
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

負の断面曲率を持つ閉偶数次元多様体のEuler数は次元に応じた符号を持つ、というHopf予想は高次元では未解決である。GromovはKähler多様体について、普遍被覆上の有界な原始形式、Kähler恒等式、$L^2$ 指数理論を用いてこれを証明した。

概Kähler多様体では概複素構造が非可積分なため、通常のDolbeault複体やKähler恒等式をそのまま使えない。本稿は非可積分性を測るNijenhuisテンソルを誤差項として吸収する新しい $L^2$ 評価を構成する。

その結果、断面曲率が $\mathrm{sec}\leq-K<0$ で、$|N_J|^2$ が次元だけに依存する定数倍の $K$ 以下なら、Hirzebruch $\chi_y$ 種数の各係数が一斉に符号不等式を満たす。Euler数の符号だけでなく、全ての $\chi_p$ について下界1が得られる点が強い。

結論はKählerの場合には $N_J=0$ としてGromovの状況を含むが、任意の概Kähler構造を扱うものではない。曲率尺度に対するNijenhuisテンソルの量的な小ささが不可欠な仮定である。

## 背景と問題設定

非可積分な概複素構造では

$$
d=\mu+\partial+\bar\partial+\bar\mu
$$

と分解され、一般に $\bar\partial^2\neq0$ である。それでも自己共役楕円作用素 $\Delta_\partial+\Delta_{\bar\partial}$ の核を調べ、Kählerの場合の調和 $(p,q)$-形式に対応する解析的対象を定義できる。

Hirzebruch種数は

$$
\chi_y(X)=\sum_{p=0}^n\chi_p(X)y^p
$$

であり、$y=-1,0,1$ でそれぞれEuler数、Todd種数、signatureに関係する。本稿は各 $\chi_p$ を、普遍被覆上の $\bar\partial+\bar\partial^*$ の $L^2$ 指数として制御する。

## 主結果

### 基本的な $L^2$ 評価（Theorem 1.1）

$(X,J,\omega)$ を完備な $2n$ 次元概Kähler多様体とし、$\omega=d\theta$ を満たす有界1形式 $\theta$ があるとする。$\alpha\in\Omega_0^{p,q}(X)$、$k=p+q\neq n$ に対し、Introductionでは

$$
\|\alpha\|_{L^2}
\leq c_2(n,k)\|\theta\|_{L^\infty}
\bigl((\Delta_\partial+\Delta_{\bar\partial})\alpha,\alpha\bigr)^{1/2}
$$

および $\bullet=\partial,\bar\partial$ に対する

$$
\|\alpha\|_{L^2}^2
\left(1-c_2(n,k)^2\|\theta\|_{L^\infty}^2\sup|N_J|^2\right)
\leq2c_2(n,k)^2\|\theta\|_{L^\infty}^2(\Delta_\bullet\alpha,\alpha)
$$

が示される。第二式の括弧が正になる小ささ条件が、非可積分誤差を吸収して消滅定理を導く。

### $\chi_y$ 種数とHopf予想（Theorem 1.2）

$(X,J,\omega)$ を閉 $2n$ 次元概Kähler多様体とし、ある $K>0$ について

$$
\operatorname{sec}\leq-K,
\qquad |N_J|^2\leq C(n)K
$$

を仮定する。このとき全ての $p=0,\ldots,n$ に対して

$$
(-1)^{n-p}\chi_p(X)\geq1
$$

が成立する。従って係数を足し合わせれば

$$
(-1)^n\chi(X)\geq n+1
$$

となり、Hopf予想の要求する正符号より強い下界が得られる。

### Taylor係数への帰結（Corollary 1.4）

$\chi_y(X)$ の $y=-t$ まわりのTaylor係数を $K_i(t)$ と書くと、同じ仮定の下で任意の $t\geq0$ と $0\leq i\leq n$ に対し

$$
(-1)^{n-i}K_i(t)\geq
\sum_{k=i}^n\binom{k}{i}t^{k-i}
$$

が成立する。これはTheorem 1.2の係数ごとの不等式をまとめた、$\chi_y$ 種数全体への量的制約である。

## 証明の見取り図

負の曲率を持つ単連結完備多様体では、有界な閉2形式 $\omega$ は有界な原始形式 $\theta$ を持つ。普遍被覆上でTheorem 1.1を適用し、Nijenhuisテンソル由来の誤差を小ささ条件で吸収すると、中間次数以外の $L^2$ 調和形式が消滅する。

次に $\bar\partial+\bar\partial^*$ の型ごとの核を精密に調べ、Atiyahの $L^2$ 指数定理でvon Neumann次元とコンパクト商上の指数 $\chi_p(X)$ を結ぶ。中間次数に残る $L^2$ 調和形式の非自明性と符号が各 $\chi_p$ の下界を与え、最後に $\chi_y$ の特殊化からEuler数の不等式を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.27423v1](https://arxiv.org/abs/2604.27423v1)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2; Corollary 1.4
- **論文構成の説明:** Section 1の解析方針
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
