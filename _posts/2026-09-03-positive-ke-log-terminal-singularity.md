---
layout: paper
title: "Kähler-Einstein metrics with positive curvature near an isolated log terminal singularity"
title_ja: "孤立 log terminal 特異点近傍の正曲率 Kähler–Einstein 計量"
authors: "Vincent Guedj, Antonio Trusiani, Sébastien Boucksom"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  We analyze the existence of Kähler-Einstein metrics of positive curvature in the neighborhood of a germ of a log terminal singularity $(X,p)$. This boils down to solve a Dirichlet problem for certain complex Monge-Ampère equations. We show that the solvability of the latter is independent of the shape of the domain and of the boundary data. We establish a Moser-Trudinger $(MT)_γ$ inequality in subcritical regimes $γ<γ_p$ and establish the existence of smooth solutions in that cases. We show that the expected critical exponent $\hatγ_p=\frac{n+1}{n} \widehat{\mathrm{vol}}(X,p)^{1/n}$ can be expressed in terms of the normalized volume, an important algebraic invariant of the singularity.
topic: differential-geometry
tags:
  - singularities
  - kahler-einstein-metrics
  - monge-ampere-equations
  - pluripotential-theory
arxiv_id: "2306.07900v1"
arxiv_url: "https://arxiv.org/abs/2306.07900"
arxiv_submitted: "2023-06-13"
arxiv_updated: "2023-06-13"
summary: >-
  孤立 log terminal 特異点の近傍で正曲率 Kähler–Einstein 計量を構成する問題を、複素 Monge–Ampère 方程式の Dirichlet 問題として研究する。Moser–Trudinger 不等式の臨界指数が領域や境界値によらない局所不変量であることを示し、alpha 不変量と正規化体積による上下界、および臨界未満での滑らかな解の存在を与える。
abstract_en: ""
summary_en: >-
  The local existence problem for positively curved Kähler-Einstein metrics near an isolated log terminal singularity is formulated as a Dirichlet problem for a complex Monge-Ampère equation. A critical coercivity exponent is shown to depend only on the singularity, rather than on the chosen neighborhood or boundary values. The paper bounds this exponent using an analytic alpha invariant and the normalized volume. Below the critical threshold, a smooth solution away from the singular point is obtained variationally.
abstract_ja: >-
  log terminal 特異点の芽 $(X,p)$ の近傍における正曲率 Kähler–Einstein 計量の存在を解析する。この問題を複素 Monge–Ampère 方程式の Dirichlet 問題へ帰着し、可解性が領域の形と境界データに依存しないことを示す。劣臨界域で Moser–Trudinger 不等式と滑らかな解の存在を確立し、期待される臨界指数を特異点の正規化体積と結び付ける。
abstract_source_url: "https://arxiv.org/abs/2306.07900"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **著者**: Vincent Guedj, Antonio Trusiani, Sébastien Boucksom
- **arXiv**: [arXiv:2306.07900v1](https://arxiv.org/abs/2306.07900)
- **初回投稿日**: 2023年6月13日
- **更新日**: 2023年6月13日
- **主要カテゴリ**: math.DG
- **ライセンス**: [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

孤立特異点の芽 $(X,p)$ の近傍に正 Ricci 曲率の Kähler–Einstein 計量を構成できるのは、特異点が log terminal である場合に限られる。本稿はこの必要条件のもとで、局所計量の存在を特異複素 Monge–Ampère 方程式の Dirichlet 問題として定量化する。

滑らかな近傍 $\Omega$、境界値 $\varphi$、適合体積形式 $\mu_p$ に対し、求めるポテンシャルは

$$
(dd^c\phi)^n=\frac{e^{-\gamma\phi}\,d\mu_p}{\int_\Omega e^{-\gamma\phi}\,d\mu_p},
\qquad \phi|_{\partial\Omega}=\varphi
$$

を満たす。このとき $\omega_{\mathrm{KE}}=dd^c\phi$ は $\Omega\setminus\{p\}$ 上で $\operatorname{Ric}(\omega_{\mathrm{KE}})=\gamma\omega_{\mathrm{KE}}$ となる。

解析の鍵は Monge–Ampère エネルギーと Ding 型汎関数の coercivity を与える Moser–Trudinger 不等式である。その臨界指数は近傍や境界値ではなく特異点だけに依存し、解析的 alpha 不変量と代数的な正規化体積の間に置かれる。

臨界値未満では変分法と反復法により、特異点以外で滑らかで閉包上連続な解が存在する。一方、一般の臨界値での等号や一意性は完全には解決されず、Introduction は予想として区別している。

## 背景と問題設定

大域的な $\mathbb Q$-Fano 多様体上の特異 Kähler–Einstein 計量の特異点近傍を理解することが動機である。正規化体積 $\widehat{\mathrm{vol}}(X,p)$ は K 安定 Fano 多様体のモジュライでも重要な局所代数的不変量であり、本稿はこれを局所 PDE の可解性閾値に結び付ける。

相対 Monge–Ampère エネルギー $E_\varphi$ と

$$
F_\gamma(\phi)=E_\varphi(\phi)+\frac1\gamma\log\int_\Omega e^{-\gamma\phi}\,d\mu_p
$$

を導入し、$F_\gamma$ の Euler–Lagrange 方程式として上の Monge–Ampère 方程式を捉える。

## 主結果

### Moser–Trudinger 不等式（Theorem A）

$0<\gamma<\frac{n+1}{n}\alpha(X,\mu_p)$ なら定数 $C_\gamma>0$ が存在し、許容される全ポテンシャルについて

$$
\left(\int_\Omega e^{-\gamma\phi}\,d\mu_p\right)^{1/\gamma}
\le C_\gamma\exp\bigl(-E_\varphi(\phi)\bigr)
$$

が成り立つ。この評価が $F_\gamma$ の coercivity を与える。

### 臨界指数と不変量（Theorem B を含む）

$(MT)_\gamma$ が成立する上限を $\gamma_{\mathrm{crit}}(X,p)$ とすると、これは $\Omega$ と $\varphi$ に依存せず、

$$
\frac{n+1}{n}\alpha(X,\mu_p)
\le \gamma_{\mathrm{crit}}(X,p)
\le \frac{n+1}{n}\widehat{\mathrm{vol}}(X,p)^{1/n}
$$

を満たす。また alpha 不変量には、Introduction の記法で

$$
\frac{n}{\operatorname{mult}(X,p)^{1-1/n}}
\frac{\operatorname{lct}(X,p)}{1+\operatorname{lct}(X,p)}
\le \alpha(X,\mu_p)
\le \widehat{\mathrm{vol}}(X,p)^{1/n}
$$

という評価があり、admissible 特異点では右辺との等号が成立する。すべての log terminal 特異点での等号は予想であり、証明済みではない。

### 解の存在（Theorem C）

$\gamma<\gamma_{\mathrm{crit}}(X,p)$ なら、上の Dirichlet 問題には $\Omega\setminus\{p\}$ 上滑らかで $\Omega$ 上連続な plurisubharmonic 解が存在する。一意性は少なくとも一般的な Stein 近傍で期待されるが、Introduction では未解決の期待として述べられる。

## 証明の見取り図

変分法によって $F_\gamma$ の極値を構成するため、まず alpha 不変量による一様可積分性を Moser–Trudinger 型評価へ変換する。上からの評価には解析的 Green 関数と代数的特異性を持つ関数を使い、正規化体積を取り出す。臨界未満の coercivity から極値を得た後、Ricci 逆反復と一様評価により特異点外での滑らかさへ進む。

## 原論文との対応

本記事は Abstract と Introduction に記載された Theorems A–C、臨界指数の評価、および変分的方針を扱った。Sébastien Boucksom は Appendix の著者として arXiv metadata の著者一覧に含まれる。証明の技術的評価と Appendix の b-divisor による強化は対象外である。
