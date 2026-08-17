---
layout: paper
title: "Arakelov inequality for families of pairs"
title_ja: "対の族に対するArakelov不等式"
authors: "Junchao Shentu"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We establish an Arakelov-type inequality for a morphism $f \colon (X,Δ) \to S$, where $(X,Δ)$ is a
  simple normal crossing semi-log canonical pair and $S$ is a smooth projective variety. As a
  consequence, we derive a bound on the Iitaka volumes of algebraic fiber spaces whose geometric
  generic fiber admits a good minimal model.
topic: algebraic-geometry
tags:
  - singularities
  - vector-bundles-sheaves
arxiv_id: "2605.24323v1"
arxiv_url: "https://arxiv.org/abs/2605.24323"
arxiv_submitted: "2026-05-23"
arxiv_updated: "2026-05-23"
summary: >-
  単純正規交差slc対からなる高次元の族について、pluricanonical直像の部分層の第一Chern類を対数標準類と分岐で抑える有効なArakelov型不等式を証明する。曲線上では鋭い評価となり、good minimal modelを持つ一般ファイバーのIitaka体積にも上界を与える。
abstract_en: >-
  We establish an Arakelov-type inequality for a morphism $f \colon (X,\Delta) \to S$, where $(X,\Delta)$ is a simple normal crossing semi-log canonical pair and $S$ is a smooth projective variety. As a consequence, we derive a bound on the Iitaka volumes of algebraic fiber spaces whose geometric generic fiber admits a good minimal model.
summary_en: ""
abstract_ja: >-
  滑らかな射影多様体 $S$ への単純正規交差semi-log canonical対 $(X,\Delta)$ の射に対し、Arakelov型不等式を確立する。その帰結として、幾何的一般ファイバーがgood minimal modelを持つ代数的ファイバー空間のIitaka体積に上界を与える。
abstract_source_url: "https://arxiv.org/abs/2605.24323"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2605.24323v1](https://arxiv.org/abs/2605.24323)
- **著者:** Junchao Shentu
- **初回投稿日・最終更新日:** 2026年5月23日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

古典的Arakelov不等式は曲線族の数値的不変量を制御し、幾何的Shafarevich予想に重要な役割を果たした。本論文はこれを、複素数体上の高次元基底と、境界を含む単純正規交差slc対の族へ拡張する。

主定理は、相対pluricanonical直像のテンソル冪に含まれる任意のcoherent subsheafの第一Chern類を、基底の対数標準類、退化因子、族の分岐因子で上から評価する。境界モジュライに現れる退化族を扱えるよう、全空間をlog smoothに限定しない点が重要である。

基底が曲線の場合には簡潔で鋭い次数評価が得られ、特定のShimura族で等号が成立する。さらにこの評価から、一般ファイバーがgood minimal modelを持つファイバー空間の相対標準束のIitaka体積を制御する。

先行するKovács--Tajiの方法と比べ、巨大なfiber productへの埋込みを交代和構成による小さいfiber productへ置き換える。Deligne延長のparabolic semistabilityも併用することで、定量的に改善された評価へ到達する。

## 背景と問題設定

$f:(X,\Delta)\to S$ の相対次元を $n$、$d=\dim S$ とし、滑らかな族でない場所の余次元1部分を $D$、分岐因子を $R_f$ とする。strictly semistable in codimension oneなら $R_f=0$ であり、定理中の誤差項が消える。

## 主結果

### 高次元Arakelov不等式（Theorem 1.1）

$K_S+D$ がpseudo-effectiveで、rank $l$ の

$$
\mathcal W\subset\bigl(f_*\mathcal O_X(kK_{X/S}+\lfloor k\Delta\rfloor)\bigr)^{\otimes r}
$$

をとる。任意のmovable curve class $\alpha$ と整数 $m>0$ に対し

$$
c_1(\mathcal W)\cdot\alpha\le
\frac{klrn}{2d}m^{klrn-1}(K_S+D)\cdot\alpha
+\frac{2}{m}D\cdot\alpha+r\deg\lceil kR_f\rceil\cdot\alpha.
$$

$\dim S=1$ では、より鋭く

$$
\deg\mathcal W\le\frac{klrn}{2}\deg(K_S+D)+r\deg\lceil kR_f\rceil
$$

となる。log smoothかつ $K_S+D$ がampleの場合にも、$(K_S+D)^{d-1}$ との交点数に対する精密化がある。

### Iitaka体積の上界（Theorem 1.2）

$S$ が曲線で一般ファイバー $F$ がgood minimal modelを持ち、$L$ がnef、$K_S+D$ がnefなら、$\operatorname{Ivol}(\omega_{X/S}\otimes f^*L)$ を $\operatorname{Ivol}(\omega_F)$、$\kappa(\omega_F)$、$\deg(K_S+D)$、$\deg L$ と分岐項で上から抑える。特に $\kappa(\omega_F)>1$ または $R_f=0$ なら分岐の極限項が消える。

## 証明の見取り図

交代和構成によりdeterminant of direct imageを $lr$ 重fiber productの直像へ埋め、幾何的起源の混合Hodge構造のcanonical extensionへ移す。対数余接束の正値性に加え、Deligne延長のparabolic semistabilityを使って曲線基底で最適な係数を得る。Iitaka体積評価はIntroductionによればLu--Tan--Zuoの議論をこの不等式に適用する。

## 原論文との対応
- **Abstractページ:** [arXiv:2605.24323](https://arxiv.org/abs/2605.24323)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** Section 1.1, pp. 2--3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
