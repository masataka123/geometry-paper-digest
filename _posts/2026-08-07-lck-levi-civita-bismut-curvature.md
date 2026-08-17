---
layout: paper
title: "Locally conformally Kähler manifolds with constant Levi-Civita or Bismut holomorphic sectional curvature"
title_ja: "Levi-Civita または Bismut 正則断面曲率が一定な局所共形 Kähler 多様体"
authors: "Shuwen Chen, Fangyang Zheng"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  An old conjecture in non-Kähler geometry states that any compact Hermitian manifold with constant
  Chern holomorphic sectional curvature must be either Kähler or Chern flat. The conjecture is known
  to be true in dimension 2 but still open in dimensions 3 or higher, except for several special
  classes of Hermitian manifolds. For the important class of locally conformally Kähler manifolds, the
  conjecture was proved by H. Chen, L. Chen, and Nie in 2021 when the constant holomorphic sectional
  curvature is non-positive and the remaining case was solved recently by Huang and Wan using the
  result of Kamishima on Bochner-Kähler manifolds. In this article, we use their technique to answers
  similar questions for locally conformally Kähler manifolds with constant Levi-Civita or Bismut
  holomorphic sectional curvature.
topic: differential-geometry
tags:
  - curvature
arxiv_id: "2608.01893v1"
arxiv_url: "https://arxiv.org/abs/2608.01893"
arxiv_submitted: "2026-08-03"
arxiv_updated: "2026-08-03"
summary: >-
  コンパクト局所共形 Kähler 多様体で Levi-Civita 正則断面曲率が一定なら Kähler であり、Bismut 版では Kähler か、曲率ゼロの等脚 Hopf 多様体に限ることを示す。Chern 接続で知られていた剛性を二つの標準接続へ拡張する。
abstract_en: ""
summary_en: >-
  The article examines compact locally conformally Kähler manifolds whose holomorphic sectional curvature is constant for either the Levi-Civita or Bismut connection. Constancy for the Levi-Civita connection forces the metric to be Kähler. For the Bismut connection, the only non-Kähler alternative has zero curvature and is an isosceles Hopf manifold. The proof transfers a Bochner-Kähler method from the Chern-connection setting through conformal curvature identities.
abstract_ja: >-
  コンパクト局所共形 Kähler 多様体において、Chern 接続を Levi-Civita 接続または Bismut 接続に置き換えた一定正則断面曲率問題を解く。Levi-Civita 曲率一定なら計量は Kähler であり、Bismut 曲率一定なら Kähler であるか、曲率がゼロで等脚 Hopf 多様体となる。Chern 接続の場合の手法が、接続間の曲率差の単純な形を通じて拡張される。
abstract_source_url: "https://arxiv.org/abs/2608.01893"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.01893v1](https://arxiv.org/abs/2608.01893)
- **著者:** Shuwen Chen, Fangyang Zheng
- **初回投稿日:** 2026年8月3日
- **最終更新日:** 2026年8月3日
- **主分類・副分類:** math.DG（副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト Hermite 多様体の Chern 正則断面曲率が一定なら Kähler または Chern 平坦である、という古典的予想は高次元では一般に未解決だが、局所共形 Kähler（LCK）多様体では解決済みである。この論文は同じ問いを Levi-Civita 接続と Bismut 接続について扱う。

Levi-Civita 版では、一定正則断面曲率をもつコンパクト LCK 計量は必ず Kähler であり、したがって複素空間形になる。Bismut 版では例外があり、非 Kähler なら定数はゼロで、多様体は等脚 Hopf 多様体に限られる。

Bismut のゼロ曲率の場合に「平坦」とまでは結論しない点が重要である。実際、ゼロ Bismut 正則断面曲率をもちながら Bismut 平坦でない Hermite 多様体が存在するため、例外族を正確に残す必要がある。

## 背景と問題設定

LCK 多様体は局所的には Kähler 計量へ共形同値な Hermite 多様体である。Chern、Levi-Civita、Bismut の三接続は Kähler の場合には一致するが、非 Kähler では異なる。Introduction の中心的観察は、LCK 条件の下では三者の正則断面曲率の一定性を表す式の差が曲率の Bochner 成分を含まない単純な項になる、という点である。

## 主結果

### Levi-Civita 版（Theorem 2）

$(M^n,g)$ をコンパクト LCK 多様体とする。Levi-Civita 正則断面曲率が一定なら、$g$ は Kähler である。従って、計量の正の定数倍まで、その普遍被覆は $\mathbb{CP}^n$、$\mathbb C^n$、$\mathbb{CH}^n$ のいずれかの標準計量をもつ複素空間形となる。

### Bismut 版（Theorem 3）

同じく $(M^n,g)$ をコンパクト LCK 多様体とし、Bismut 正則断面曲率が定数 $c$ であるとする。このとき、$g$ は Kähler であるか、または

$$
c=0
$$

で $(M^n,g)$ は等脚 Hopf 多様体である。Introduction では、その有限不分岐被覆を

$$
(\mathbb C^n\setminus\{0\})/\langle\gamma\rangle,
\qquad
\gamma(z_1,\ldots,z_n)=(a_1z_1,\ldots,a_nz_n),
\quad |a_1|=\cdots=|a_n|\in(0,1),
$$

かつ Kähler 形式を

$$
\omega=\frac{\alpha}{|z|^2}\sqrt{-1}\,\partial\bar\partial|z|^2,
\qquad \alpha>0
$$

と表している。この例は Bismut 正則断面曲率がゼロで、Bismut 平坦となるのは $n=2$ の場合に限る。

## 証明の見取り図

Introduction によれば、LCK 計量の共形変換における三接続の曲率公式を計算し、Chern 版を解いた Huang–Wan の Bochner–Kähler 的手法を借用する。まず大域共形 Kähler の場合を扱い、その後、厳密に局所共形 Kähler の場合へ移る。Levi-Civita と Bismut の一定性条件が Chern の条件と同じ Bochner 成分をもつことが、既知の剛性を移す鍵となる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01893](https://arxiv.org/abs/2608.01893)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 2, 3
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
