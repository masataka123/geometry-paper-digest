---
layout: paper
title: On global Chern-Calabi flows on compact complex surfaces
title_ja: 複素曲面上の大域Chern–Calabi流と共形極値計量
authors: Li Ma, Li Sheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
- math.CV
arxiv_abstract: In this paper, we propose the Chern-Calabi Flow for extremal metrics in conformal Hermitian geometry. After the existence of extremal metric, we consider the existence of global flows to the Chern-Calabi flows for extremal metrics on compact complex surfaces with Gauduchon metrics. To achieve this goal, we use the Adams inequality and the Gronwall inequality method to obtain fourth order derivative norm estimates. We also study the convergence of the global solution to the Chern-Calabi flow and its limit is the solution of the Chern-Calabi extremal metric problem. We propose a fourth order elliptic problem and derive the Bochner formula relevant to the elliptic estimates for the Chern-Calabi heat flow.
topic: differential-geometry
tags:
- curvature
arxiv_id: 2610.31068v1
arxiv_url: https://arxiv.org/abs/2610.31068
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: Gauduchon計量を備えたコンパクト複素曲面で、共形類内のChern–Calabi極値計量とそれへ向かう流を調べる。体積1の極値計量の一意性、大域的な流の存在、共形因子の有界性のもとでの収束を示す。極値計量のChernスカラー曲率は一般には定数とは限らない。
abstract_en: ''
summary_en: This work treats the conformal Chern–Calabi problem on compact complex surfaces. The Gauduchon condition reduces the stationary problem to an equation involving the background Chern Laplacian. The associated fourth-order evolution exists globally and admits convergence to the normalized extremal metric. The extremal condition concerns the curvature energy rather than constant Chern scalar curvature.
abstract_ja: 共形Hermitian幾何における極値計量のためにChern–Calabi流を導入する。Gauduchon計量を持つコンパクト複素曲面で極値計量の存在を示した後、Adams不等式とGronwall不等式を使う高階微分評価により流の大域存在を扱う。さらに大域解の収束と、その極限がChern–Calabi極値計量問題を解くことを研究する。
abstract_source_url: https://arxiv.org/abs/2610.31068
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31068v1](https://arxiv.org/abs/2610.31068)
- **著者:** Li Ma, Li Sheng
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.DG（主分類）; math.AP, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabiの極値計量はKähler類の幾何から生まれた概念だが、本論文は計量を共形類の中で変えるHermitian幾何の問題を扱う。対象は複素曲面であり、Chernスカラー曲率の二乗積分を体積1の条件のもとで考える。

Gauduchon背景を選ぶと、極値計量の方程式は線形なChern Laplacianを使う形へ簡約される。この方程式の解は定数を除いて一意で、体積正規化により一つの極値計量が決まる。ただし、その計量のChernスカラー曲率が一定になるとは限らない。

対応する4階の流については大域存在が示され、正の時刻以降の共形因子に一様上限評価が得られる。さらに一様有界な大域解が極値計量へ収束するという形で、静的な存在問題と時間発展を結びつける。

## 背景と問題設定

$M$をコンパクト複素曲面とし、背景Hermitian形式$\omega$はGauduchon条件$\partial\bar\partial\omega=0$を満たすとする。$L=\Delta^{\mathrm{Ch}}\_\omega$を背景のChern Laplacian、$L^*$を随伴、$R^{\mathrm{Ch}}(\omega)$をChernスカラー曲率とする。

体積1の共形計量$\omega\_f=e^f\omega$について

$$
\mathcal C(\omega\_f)=\frac12\int\_M\bigl(R^{\mathrm{Ch}}(\omega\_f)\bigr)^2\omega\_f^2,\qquad
\frac12\int\_Me^{2f}\omega^2=1
$$

を考える。曲率の変換式は

$$
R^{\mathrm{Ch}}(\omega\_f)=e^{-f}\bigl(R^{\mathrm{Ch}}(\omega)-2Lf\bigr)
$$

であり、論文の曲面上の流は

$$
\partial\_t f=e^{-2f}L^*\bigl(-2Lf+R^{\mathrm{Ch}}(\omega)\bigr)
$$

である。以下の時間規約は論文の式(6)、(8)に従う。

## 主結果

### 正規化した極値計量の一意性（Theorem 1）

体積1の共形類にChern–Calabi極値計量が一意に存在する。背景曲率の平均を$\overline{R^{\mathrm{Ch}}(\omega)}$と書くと、その共形因子$f\_e$は

$$
R^{\mathrm{Ch}}(\omega)-\overline{R^{\mathrm{Ch}}(\omega)}=2Lf\_e,
\qquad \frac12\int\_Me^{2f\_e}\omega^2=1
$$

を満たす。Gauduchon条件のもとで随伴作用素の核が定数になることが、この簡約の要点である。得られる曲率は

$$
R^{\mathrm{Ch}}(e^{f\_e}\omega)
=e^{-f\_e}\overline{R^{\mathrm{Ch}}(\omega)}
$$

となり、一般に定数ではない。

### 大域存在（Theorem 2）

Gauduchon計量を持つコンパクト複素曲面上で、正規化された滑らかな初期共形計量から始まる流は大域的に存在する。さらに任意の$\tau>0$に対し$C(\tau)>0$が存在して

$$
\Vert f(t)\Vert \_{L^\infty(M)}\leq C(\tau)\qquad(t>\tau)
$$

が成り立つ。有限時間の存在を繰り返すだけでなく、時間の先まで共形因子を制御する主張である。

### 極値計量への収束（Theorem 3）

大域解がすべての$t>0$について一様に$L^\infty$有界なら、流はTheorem 1の極値計量の解$f\_e$へ収束する。Introductionの定理文ではこの有界性を仮定として明示する。Theorem 2は正の時刻以降の評価を供給するため、滑らかな初期区間の制御と組み合わせて長時間挙動を扱う枠組みになる。

## 証明の見取り図

AbstractとIntroductionは、Adams不等式とGronwall不等式を用いて4階微分のノルム評価を得ることを大域存在の中心に置く。Adams不等式は高次元のMoser–Trudinger型評価として、共形因子が指数関数で体積と曲率に入る問題に適合する。論文は有限時間でのノルム評価、大域存在、収束の順に進み、最後に高次元の流とBochner型公式を議論する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31068)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31068v1) — Section 1（1.1、1.2を含む）、PDF pp. 1–9。
- **Introduction中で言及された主要結果:** Theorems 1, 2, 3、式(6)、(8)。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31068v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
