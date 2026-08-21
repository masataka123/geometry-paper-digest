---
layout: paper
title: "An almost Kähler Cheeger--Gromoll splitting theorem with applications"
title_ja: "概Kähler版Cheeger--Gromoll分裂定理とその応用"
authors: "Anthony Nguyen, Shengzhen Ning, Lauren Pusey-Nazzaro"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.SG
arxiv_abstract: >-
  In this paper, we establish an almost Kähler analogue of the Cheeger--Gromoll splitting theorem for complete almost Kähler manifolds with nonnegative Ricci curvature. As applications, we use the splitting to obtain Goldberg-type integrability results and establish a relation between symplectic non-hyperbolicity and nonnegative Ricci curvature via a theorem of Bangert.
topic: differential-geometry
tags:
  - curvature
  - noncompact-kahler-geometry
  - symplectic-contact-geometry
  - hyperbolicity
arxiv_id: "2608.18477v1"
arxiv_url: "https://arxiv.org/abs/2608.18477"
arxiv_submitted: "2026-08-19"
arxiv_updated: "2026-08-19"
summary: >-
  非負Ricci曲率をもつ完備概Kähler多様体について、Riemannian lineの存在から普遍被覆の複素1次元因子が分裂することを示す。分裂定理を用いて、閉概Kähler多様体の概複素構造が可積分になる条件と、symplectic non-hyperbolicityを導く曲率条件を得る。
abstract_en: >-
  In this paper, we establish an almost Kähler analogue of the Cheeger--Gromoll splitting theorem for complete almost Kähler manifolds with nonnegative Ricci curvature. As applications, we use the splitting to obtain Goldberg-type integrability results and establish a relation between symplectic non-hyperbolicity and nonnegative Ricci curvature via a theorem of Bangert.
summary_en: ""
abstract_ja: >-
  非負Ricci曲率をもつ完備概Kähler多様体に対し、Cheeger--Gromoll分裂定理の概Kähler版を確立する。この分裂を応用してGoldberg型の可積分性結果を導き、さらにBangertの定理を介してsymplectic non-hyperbolicityと非負Ricci曲率の関係を示す。
abstract_source_url: "https://arxiv.org/abs/2608.18477"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.18477](https://arxiv.org/abs/2608.18477)
- **著者:** Anthony Nguyen, Shengzhen Ning, Lauren Pusey-Nazzaro
- **初回投稿日:** 2026年8月19日
- **最終更新日:** 2026年8月19日（v1）
- **主分類・副分類:** math.DG（主分類）, math.SG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

古典的Cheeger--Gromoll分裂定理は、非負Ricci曲率をもつ完備Riemann多様体にlineが存在すれば、実直線因子が等長に分裂することを述べる。Kählerの場合には複素構造が平行であるため、普遍被覆の最大Euclid因子は複素構造で不変となり、複素Euclid因子が現れる。概Kähler構造では複素構造の平行性も可積分性も仮定できず、同じ結論は自動的ではない。

本論文は、非負Ricci曲率をもつ完備概Kähler多様体にRiemannian lineがあれば、その普遍被覆が概Kähler多様体として $\mathbb{C}$ 因子を分裂することを示す。通常のRiemannian分裂が与える実直線を、symplectic formと調和1形式を用いて $J$-不変な実2平面へ拡張する点が概Kähler版の核心である。

第一の応用は概複素構造の自動可積分性である。閉概Kähler多様体が非負Ricci曲率をもち、symplectically asphericalである場合、または実4次元で基礎多様体が有理曲面と微分同相でない場合には、概複素構造が可積分となる。Goldberg予想型の結論を、Einstein条件とは異なる曲率・位相条件から得る結果である。

第二の応用では、symplectically asphericalな閉概Kähler多様体の非負Ricci曲率から、symplectic formのnon-hyperbolicityを導く。ここでnon-hyperbolicとは、任意の適合する概複素構造に対して非定数の $J$-正則写像 $\mathbb{C}\to X$ が存在するという意味であり、Brody双曲性のsymplectic analogueとして定式化される。

## 背景と問題設定

概Kähler多様体は、Riemann計量 $g$、概複素構造 $J$、symplectic form $\omega$ が

$$
g(\,·\,,\,·\,)=\omega(\,·\,,J\,·\,)
$$

を満たす組 $(X,\omega,J,g)$ である。論文では、概Kähler多様体がsplitであるとは

$$
(X,\omega,J,g)\cong
(\mathbb{C}\times X',\,ds\wedge dt+\omega',\,i\oplus J',\,ds^2+dt^2+g')
$$

と書けることと定義する。

Goldberg予想は、コンパクトな概Kähler Einstein多様体はKählerであると予想する。非負スカラー曲率の場合はSekigawaにより証明済みである。本論文は、Einstein条件の代わりに非負Ricci曲率とsymplectic asphericityまたは4次元の位相条件を用い、分裂定理を通じて可積分性を得る。

## 主結果

### 概Kähler分裂（Theorem 1）

$(X,\omega,J,g)$ を完備かつ $\operatorname{Ric}_g\geq0$ の概Kähler多様体とする。$(X,g)$ がRiemannian line $\gamma:\mathbb{R}\to X$ を含むなら、その普遍被覆は概Kähler多様体として $\mathbb{C}\times X'$ に分裂する。

古典定理から直接得られるのは実1次元の因子である。主定理は、概複素構造が一般には平行でないにもかかわらず、symplectic構造との両立性により分裂を複素1次元へ強める。

### 自動可積分性（Theorem 2）

$(X,\omega,J,g)$ を $\operatorname{Ric}_g\geq0$ を満たす閉概Kähler多様体とする。次のいずれかが成り立てば $J$ は可積分である。

1. $(X,\omega)$ がsymplectically asphericalである。
2. $\dim_{\mathbb{R}}X=4$ であり、$X$ が有理曲面と微分同相でない。

symplectically asphericalとは、任意の滑らかな写像 $f:S^2\to X$ に対して

$$
\int_{S^2}f^*\omega=0
$$

となることである。Introductionは、二つの追加条件を同時に除くことはできないと述べ、del Pezzo曲面上で正Ricci曲率を保つ非可積分な適合概複素構造を反例として説明する。

### symplectic non-hyperbolicity（Corollary 4）

$(X,\omega,J,g)$ が $\operatorname{Ric}_g\geq0$ を満たす閉概Kähler多様体で、$(X,\omega)$ がsymplectically asphericalなら、$\omega$ はnon-hyperbolicである。すなわち、任意の $\omega$-tameな概複素構造に対し、非定数の $J$-正則写像 $\mathbb{C}\to X$ が存在する。

symplectic asphericityを外した同様の主張は未解決であるとIntroductionに明記される。この留保は、特定の可積分複素構造についてのnon-hyperbolicityと、すべてのtame概複素構造についての本論文の定義との差を反映する。

## 証明の見取り図

Theorem 1では、まずCheeger--Gromoll定理でlineの方向を与える平行ベクトル場 $V$ を得る。$\alpha=\iota_V\omega$ と置くと、$\omega$ の閉性と概Kähler構造の両立性を利用して $\alpha$ が調和的であることを示す。Bochner型の議論と非負Ricci曲率から $\alpha$、従って対応する $JV$ も平行となる。$V$ と $JV$ が張る $J$-不変な平行2平面が、普遍被覆上の $\mathbb{C}$ 因子を与える。

可積分性への応用では、この分裂を普遍被覆に反復適用し、残る因子の次元と基礎多様体の位相を組み合わせる。4次元の場合には、既知のsymplectic 4-manifoldの分類結果と非負Ricci曲率下のBochner論法を用い、有理曲面でない場合に $J$ の可積分性へ到達する。symplectically asphericalな場合には球面因子が排除され、全次元で必要な分裂構造が得られる。

non-hyperbolicityについては、普遍被覆の $\mathbb{C}$ 因子から正則平面を構成する場合と、基本群が有限な4次元の場合を分ける。後者では可積分性結果と既知の正則球面の存在を用い、Bangertの方法と合わせて任意のtame概複素構造に対する非定数平面を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.18477](https://arxiv.org/abs/2608.18477)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1, 2; Corollary 4
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
