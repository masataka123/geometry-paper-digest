---
layout: paper
title: "The dHYM equation on crepant resolutions of Calabi-Yau cones"
title_ja: "Calabi–Yau錐のcrepant解消上のdHYM方程式"
authors: "Eder M. Correa"
arxiv_primary_category: "math.DG"
arxiv_categories:
- math.DG
- math-ph
- math.AG
- math.AP
- math.CA
arxiv_abstract: >-
  In this paper, we study the deformed Hermitian-Yang-Mills (dHYM) equation on the non-compact Calabi-Yau manifold $Z = {\rm{Tot}}({\bf{K}}_{X})$, where $X$ is a rational homogeneous variety. Since $X$ is a Fano variety, $Z$ is a resolution of the singularity at the vertex of the affine cone ${\rm{Aff}}(X)$, provided the cone is built using the anticanonical polarization ${\bf{L}} = {\bf{K}}_{X}^{-1}$. Using the cohomogeneity-one symmetry of the Ricci-flat Kähler metric obtained via the Calabi ansatz on $Z$, we reduce the fully nonlinear PDE underlying the dHYM equation to a scalar, asymptotically autonomous ordinary differential equation (ODE). From this, we determine the exact condition on the topological phase that guarantees global existence of solutions. As an application, we show that every holomorphic line bundle over $Z$ admits a smooth, globally defined Hermitian connection solving the dHYM equation, provided the total phase lies in an explicit open interval determined by the Lie-theoretic data. Also, we prove a rigidity result classifying the exact geometric conditions under which the dHYM solution collapses into a classical Hermitian-Yang-Mills (HYM) connection. The results established generalize previous constructions and provide a substantial new class of examples. Furthermore, the approach presented allows one to study the behavior of the dHYM solutions through ODE methods. Using this approach, we construct the first explicit non-trivial example of a Hermitian-Einstein connection on a line bundle over a non-toric Calabi-Yau manifold which is not dHYM.
topic: differential-geometry
tags:
- calabi-yau-geometry
- fano-varieties
- hermite-einstein-metrics
- noncompact-kahler-geometry
- vector-bundles-sheaves
arxiv_id: "2609.25309v1"
arxiv_url: "https://arxiv.org/abs/2609.25309"
arxiv_submitted: "2026-09-21"
arxiv_updated: "2026-09-21"
summary: >-
  有理等質Fano多様体 $X$ の標準束全空間 $Z=\operatorname{Tot}(K_X)$ 上でdHYM方程式を研究する。Calabi ansatzの対称性により完全非線形PDEを常微分方程式へ還元し、位相が明示的な開区間に入るときの大域解を構成する。
abstract_en: ''
summary_en: >-
  The paper studies deformed Hermitian–Yang–Mills connections on the canonical-bundle total space of a rational homogeneous variety. Cohomogeneity-one symmetry turns the nonlinear equation into a scalar ODE and yields an explicit phase window for global solvability. This produces connections on all pulled-back line bundles and identifies when a solution also satisfies the classical Hermitian–Yang–Mills condition.
abstract_ja: >-
  有理等質多様体 $X$ の標準束全空間という非コンパクトCalabi–Yau多様体で、deformed Hermitian–Yang–Mills方程式を扱う。Calabi ansatzで得るRicci平坦Kähler計量の対称性から方程式を漸近自励的ODEへ落とし、大域解を保証する位相条件を決定する。線束への応用と、解が古典的HYM接続になる場合の剛性も与える。
abstract_source_url: "https://arxiv.org/abs/2609.25309"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.25309v1](https://arxiv.org/abs/2609.25309)
- **著者:** Eder M. Correa
- **初回投稿日・最終更新日:** 2026-09-21
- **主分類・副分類:** math.DG; math-ph, math.AG, math.AP, math.CA
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

dHYM方程式はKähler幾何、ゲージ理論、ミラー対称性を結ぶ完全非線形方程式である。コンパクトな場合には安定性や位相条件をめぐる研究が進む一方、非コンパクトCalabi–Yau多様体上の明示的構成は限られていた。

本論文は有理等質多様体 $X=G^{\mathbb C}/P$ と、その標準束全空間 $Z=\operatorname{Tot}(K_X)$ を扱う。$X$ がFanoであるため、$Z$ は反標準偏極で作るアフィン錐の頂点のcrepant解消となり、Calabi ansatzによる完備Ricci平坦Kähler計量をもつ。

主結果は、cohomogeneity-one ansatzの下でdHYM方程式をスカラーODEへ正確に還元し、初期値問題が大域解をもつ位相区間を与える。これにより引き戻し線束すべてに対するdHYM接続が得られ、HYM接続へ退化する条件も分類される。

## 背景と問題設定

基本方程式は、Kähler形式 $\omega$ と実 $(1,1)$-形式 $\chi$ に対する

$$
\operatorname{Im}(\omega+\sqrt{-1}\chi)^n
=\tan(\widehat\Theta)\operatorname{Re}(\omega+\sqrt{-1}\chi)^n
$$

である。対象 $Z$ では $p^*:H^{1,1}(X,\mathbb R)\to H^{1,1}(Z,\mathbb R)$ が同型であり、基底上のLie理論的固有値が位相を制御する。

## 主結果

### ODE還元と大域存在（Theorem A）

ansatz $\Upsilon_\phi=p^*\chi-\sqrt{-1}\partial\bar\partial\phi(s)$ の下でdHYM方程式はIntroductionの式 (1.9) の一階ODEへ還元される。位相が

$$
\widehat\Theta_{\rm tot}\in
\left(\Theta_{\omega_0}(\chi)-\frac\pi2,
\Theta_{\omega_0}(\chi)+\frac\pi2\right)
$$

に入れば、初期条件 $\psi(0)=0$ をもつ解が全ての $s\geq0$ で一意に存在し、$Z$ 上の滑らかなdHYM解を定める。

### 線束への帰結（Corollary A）

$X$ 上の任意の正則線束 $L$ の引き戻し $p^*L$ は、対応する位相区間内で大域的に滑らかなdHYM Hermitian計量をもつ。さらにIntroductionは、Lie理論的固有値がすべて等しい場合にHYM条件も満たすための位相較正を明示する。

## 証明の見取り図

Calabi ansatzの動径変数 $s$ と等質空間の対称性により、曲率固有値を基底方向とファイバー方向に分離する。dHYMの位相方程式は漸近自励的ODEとなり、位相区間が解の障壁と大域延長を保証する。これは一般の楕円型評価を経ずに解の漸近挙動まで追跡できる点に特徴がある。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.25309](https://arxiv.org/abs/2609.25309)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要結果:** Theorem A, Corollary A
- **確認したarXivバージョン:** 2609.25309v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
