---
layout: paper
title: "Constant $k$th-mixed curvature on locally conformal Kähler manifolds"
title_ja: "局所共形Kähler多様体上の定数第k混合曲率"
authors: "Kai Tang, Zuocai Wang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we consider compact locally conformal Kähler manifolds with constant $k$th-mixed curvature. By using a recent method of Huang-Wan for constant Chern holomorphic sectional curvature, we prove that if a compact LCK manifold has nonzero constant $k$th-mixed curvature, then its Hermitian metric is Kähler. For the second mixed curvature, the same conclusion also holds when the curvature constant is zero. We also study some special parameters related to the general constant mixed curvature conjecture. In particular, we obtain a torsion-energy identity and a sign obstruction for compact Hermitian manifolds, and characterize an exceptional Kähler case by Bochner--Kähler geometry.
topic: differential-geometry
tags:
  - curvature
arxiv_id: "2609.05852v1"
arxiv_url: "https://arxiv.org/abs/2609.05852"
arxiv_submitted: "2026-09-05"
arxiv_updated: "2026-09-05"
summary: >-
  コンパクト局所共形Kähler多様体の定数第$k$混合曲率を扱い、曲率定数または対応する係数が非零なら計量がKählerになることを示す。特に第2混合曲率では曲率定数が零でも結論が成り立ち、例外的なパラメータではBochner–Kähler幾何が現れる。
abstract_en: ""
summary_en: >-
  The paper studies constant combinations of Chern-Ricci and holomorphic sectional curvature on compact locally conformally Kähler manifolds. It proves Kähler rigidity outside explicitly identified zero-curvature degeneracies, with no sign restriction on the curvature constant. It also derives a torsion-energy identity for general compact Hermitian manifolds and describes a Bochner–Kähler branch in the Kähler case.
abstract_ja: >-
  コンパクト局所共形Kähler多様体上で、第$k$ Chern–Ricci曲率と正則断面曲率を組み合わせた混合曲率を考える。定数曲率が非零なら計量はKählerであり、第2混合曲率については定数が零の場合にも同じ剛性が成り立つ。さらに一般のコンパクトHermite多様体に対する捩率のエネルギー恒等式と符号障害を与え、例外的なKählerの場合をBochner–Kähler幾何で特徴付ける。
abstract_source_url: "https://arxiv.org/abs/2609.05852"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.05852](https://arxiv.org/abs/2609.05852)
- **著者:** Kai Tang, Zuocai Wang
- **初回投稿日:** 2026年9月5日
- **最終更新日:** 2026年9月5日
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則断面曲率が一定であるコンパクトHermite多様体はKählerか、という古典的な剛性問題を、Chern–Ricci曲率との線形結合へ拡張する研究である。第$k$混合曲率は

$$
C^{(k)}_{\alpha,\beta}(X)=\frac{\alpha}{|X|^2}\operatorname{Ric}^{(k)}(X,\overline X)+\beta H(X),\qquad \beta\ne0
$$

で与えられる。

主結果は、コンパクト局所共形Kähler（LCK）多様体では、定数第$k$混合曲率の非零の場合にKähler性が強制されるというものだ。さらに曲率定数が零でも、パラメータの退化を除けば同じ結論が成立する。第2混合曲率には退化がなく、任意の曲率定数でKählerとなる。

この剛性とは別に、一般のコンパクトHermite多様体について捩率の$L^2$エネルギーと曲率定数を結ぶ恒等式を示す。またKähler計量に限定すると、通常は複素空間形となる一方、特別なパラメータ直線上では定スカラー曲率Bochner–Kähler計量がちょうど例外を構成する。

## 背景と問題設定

LCK計量$h$はLee形式$\theta$により$d\omega_h=\theta\wedge\omega_h$、$d\theta=0$を満たす。普遍被覆では$\pi^*h=e^{2F}g$と書け、$g$はKähler計量である。従来の積分法にはパラメータや曲率定数の符号条件があったが、本論文は普遍Kähler被覆上の曲率分解を使ってそれを外す。

## 主結果

### 主定理1（Theorem 1.4）

複素次元$n\ge2$のコンパクトLCK多様体$(M,h)$が$C^{(k)}_{\alpha,\beta}\equiv c$、$\beta\ne0$を満たすとする。

$$
\varepsilon_1=n\alpha+\beta,\qquad \varepsilon_2=\beta,\qquad
\varepsilon_3=\varepsilon_4=\alpha+\beta
$$

とおくと、$c\ne0$または$\varepsilon_k\ne0$なら$h$はKählerである。特に$\varepsilon_2=\beta\ne0$なので、第2混合曲率については任意の$c$でKähler性が従う（Corollary 1.5）。

### 捩率エネルギー恒等式（Theorem 1.6）

一般のコンパクトHermite多様体で$(n+1)\alpha+2\beta=0$なら、Chern捩率1形式$\eta$について

$$
-\frac{n(n+1)c}{\beta}\operatorname{Vol}(M,g)=\int_M|\eta|^2dV_g\quad(k=1,2),
$$

$$
\frac{n(n+1)c}{\beta}\operatorname{Vol}(M,g)=\int_M|\eta|^2dV_g\quad(k=3,4)
$$

が成り立つ。したがって曲率定数には符号障害があり、$c=0$は計量がbalancedであることと同値である。

### Kählerの場合の分類（Theorem 1.7）

$D=(n+2)\alpha+4\beta$とする。$D\ne0$なら計量は定正則断面曲率をもち、$D=0$なら定スカラー曲率$s=2(n+1)c/\alpha$のBochner–Kähler計量である。後者では逆も成立し、コンパクトなら局所対称となる。

## 証明の見取り図

普遍Kähler被覆上で$A=\partial\bar\partial F$とおくと、定数混合曲率方程式はIntroduction中で

$$
\alpha L(\operatorname{Ric}_g)+4\beta R_g-2\varepsilon_kL(A)=2\Phi_kG_g
$$

と書かれる。追加項はKähler曲率分解のRicci成分とスカラー成分にのみ入り、Bochner成分への射影から$4\beta B_g=0$が従う。大域共形Kählerの場合はコンパクトBochner–Kähler計量の剛性を使い、strict LCKの場合は一意化定理と共形因子のautomorphyを組み合わせて排除する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.05852](https://arxiv.org/abs/2609.05852)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.4, Corollary 1.5, Theorem 1.6, Theorem 1.7
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
