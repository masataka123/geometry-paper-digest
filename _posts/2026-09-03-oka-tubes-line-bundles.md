---
layout: paper
title: "Oka tubes in holomorphic line bundles"
title_ja: "正則線束内のOka管状領域"
authors: "Franc Forstnerič, Yuta Kusakabe"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  Let $(E,h)$ be a semipositive hermitian holomorphic line bundle on a compact complex manifold $X$ with $\dim X>1$. Assume that for each point $x\in X$ there exists a divisor $D\in |E|$ in the complete linear system determined by $E$ whose complement $X\setminus D$ is a Stein neighbourhood of $x$ with the density property. Then, the disc bundle $\Delta_h(E)=\{e\in E:|e|_h<1\}$ is an Oka manifold while $D_h(E)=\{e\in E:|e|_h>1\}$ is a Kobayashi hyperbolic domain. In particular, the zero section of $E$ admits a basis of Oka neighbourhoods $\{|e|_h<c\}$ with $c>0$. We show that this holds if $X$ is a rational homogeneous manifold of dimension $>1$. This class of manifolds includes complex projective spaces, Grassmannians, and flag manifolds. This phenomenon contributes to the heuristic principle that Oka properties are related to metric positivity of complex manifolds.
topic: several-complex-variables
tags:
  - oka-theory
  - stein-geometry
  - positivity
  - hyperbolicity
  - vector-bundles-sheaves
arxiv_id: "2310.14871v4"
arxiv_url: "https://arxiv.org/abs/2310.14871"
arxiv_submitted: "2023-10-23"
arxiv_updated: "2024-12-29"
summary: >-
  半正値Hermite計量をもつ正則線束の単位円板束がOka多様体となる条件を、因子補集合のStein性とdensity propertyで与える。同じ単位円束の外側はKobayashi双曲的となり、射影空間、Grassmann多様体、旗多様体を含む有理等質多様体へ適用される。
abstract_en: >-
  Let $(E,h)$ be a semipositive hermitian holomorphic line bundle on a compact complex manifold $X$ with $\dim X>1$. Assume that for each point $x\in X$ there exists a divisor $D\in |E|$ in the complete linear system determined by $E$ whose complement $X\setminus D$ is a Stein neighbourhood of $x$ with the density property. Then, the disc bundle $\Delta_h(E)=\{e\in E:|e|_h<1\}$ is an Oka manifold while $D_h(E)=\{e\in E:|e|_h>1\}$ is a Kobayashi hyperbolic domain. In particular, the zero section of $E$ admits a basis of Oka neighbourhoods $\{|e|_h<c\}$ with $c>0$. We show that this holds if $X$ is a rational homogeneous manifold of dimension $>1$. This class of manifolds includes complex projective spaces, Grassmannians, and flag manifolds. This phenomenon contributes to the heuristic principle that Oka properties are related to metric positivity of complex manifolds.
summary_en: ""
abstract_ja: >-
  次元が1より大きいコンパクト複素多様体上の半正値Hermite正則線束を考える。各点が、線形系内の因子の補集合でdensity propertyをもつStein近傍を備えるなら、単位円板束はOka多様体であり、その外側はKobayashi双曲領域となる。特に零切断はOka近傍基をもつ。この条件は射影空間、Grassmann多様体、旗多様体などの有理等質多様体で成立する。
abstract_source_url: "https://arxiv.org/abs/2310.14871"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2310.14871](https://arxiv.org/abs/2310.14871)
- **著者:** Franc Forstnerič, Yuta Kusakabe
- **初回投稿日:** 2023年10月23日
- **最終更新日:** 2024年12月29日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Oka性は正則写像の柔軟性を表し、Kobayashi双曲性はその対極にある剛性を表す。本論文は一つの正則線束内で、Hermite計量の単位円束を境にこの二つの性質が分かれる現象を扱う。

半正値線束 $(E,h)$ の円板束 $\Delta_h(E)=\{|e|_h<1\}$ がOkaとなるための条件は、完全線形系 $|E|$ の因子補集合が局所的にSteinかつdensity propertyをもつことである。一方、外側 $D_h(E)=\{|e|_h>1\}$ はKobayashi双曲的となる。

条件は次元1より大きい有理等質多様体で成立する。したがって零切断には半径を変えたOka近傍基が存在し、複素幾何における計量的正値性と正則柔軟性の結び付きを具体化する。

## 背景と問題設定

Oka多様体ではStein多様体からの正則写像が近似と補間を伴うOka原理を満たす。線束 $\pi:E\to X$ とHermite計量 $h$ に対し、中心的な対象は

$$
\Delta_h(E)=\{e\in E:|e|_h<1\}
$$

である。計量の曲率は $i\Theta_h=-i\partial\bar\partial\log h$ であり、半正値性は円板束の境界を擬凹側にする。逆に負曲率点があれば強擬凸境界が現れ、Oka性を妨げる。

## 主結果

### 射影空間上の線束（Theorem 1.1）

$E=\mathcal O_{\mathbb{CP}^n}(k)$、$n\geq1$, $k\geq1$ とし、$h$ を半正値計量とする。穿孔円板束はOkaで円板束はOka-1であり、$n\geq2$ または $k=1$ なら円板束自体がOkaとなる。外側 $D_h(E)$ はKobayashi双曲的で擬凸境界をもつ。負線束と半負値計量には、内外を入れ替えた対応する結論が成り立つ。

### 因子補集合による一般判定（Theorem 1.5）

$X$ をコンパクト複素多様体、$E$ を正則線束とする。各 $x\in X$ に対し、$x$ のStein近傍でdensity propertyをもつ補集合 $X\setminus D$ を定める因子 $D\in|E|$ が存在すると仮定する。任意の半正値計量 $h$ について $\Delta_h(E)$ はOkaであり、$D_h(E)$ は擬凸境界をもつKobayashi双曲領域である。従って $\{|e|_h<c\}$, $c>0$ は零切断のOka近傍基をなす。

### 有理等質多様体への適用（Theorem 4.10のIntroductionでの記述）

Introductionでは概略として次のように述べられている。次元1より大きい任意の有理等質多様体はpolarised density propertyをもち、上の判定が任意の偏極に適用される。射影空間、Grassmann多様体、その積、旗多様体が含まれる。

## 証明の見取り図

射影空間のアフィンチャート上で円板束をHartogs領域として表し、半正値曲率から擬凹性を得る。density propertyをもつStein多様体での正則自己同型の豊富さと、Oka多様体の局所化定理を組み合わせて内側のOka性を示す。外側の双曲性には負線束の零切断を収縮するGrauertの結果を用い、双対化によって正負の線束に対する内外の主張を結ぶ。

## 原論文との対応

- **Abstractページ:** [arXiv:2310.14871](https://arxiv.org/abs/2310.14871)
- **Introduction:** Section 1, pp. 1–7
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.4, 1.5, 1.8, 1.9; Corollary 1.6
- **論文構成の説明:** Introduction, pp. 3–7
- **確認したarXivバージョン:** v4
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
