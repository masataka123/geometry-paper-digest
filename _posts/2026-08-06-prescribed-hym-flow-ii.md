---
layout: paper
title: "The prescribed Hermitian-Yang-Mills flow II"
title_ja: "指定Hermitian--Yang--Mills flow II"
authors: "Zhiyao Xiong, Xiaokui Yang, Shing-Tung Yau"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove an analogue of the classical Donaldson-Uhlenbeck-Yau theorem by using the prescribed
  Hermitian-Yang-Mills flow. Let $E$ be a holomorphic vector bundle over a compact Kähler manifold
  $(M,ω_g)$. Suppose that for every proper coherent subsheaf $F\subset E$, the following inequality
  holds: $$ deg_{ω_g}(F)<deg_{ω_g}(E). $$ Then, for any initial Hermitian metric $h_0$ on $E$ and any
  positive-definite Hermitian tensor $P\in Γ(M,E^*\otimes \overline E^*)$, the prescribed
  Hermitian-Yang-Mills flow $$ \ \frac{\partial h}{\partial t} = -Λ_{ω_g}\left(\sqrt{-1}\, R^h\right)
  + P, $$ admits a global smooth solution on $[0,\infty)$. Moreover, as $t\rightarrow\infty$, the flow
  converges smoothly to a Hermitian metric $h_\infty$ on $E$ satisfying $$ Λ_{ω_g}\left(\sqrt{-1}\,
  R^{h_\infty}\right) = P. $$ As an application, we establish that on a Fano manifold $M$, for any
  Hermitian metric form $ω$ and any positive-definite Hermitian tensor $P\inΓ(M,T^{*1,0}M\otimes
  T^{*0,1}M)$, there exists a unique Hermitian metric tensor $h$ on $T^{1,0}M$ such that $$
  Λ_ω\left(\sqrt R^h\right)=P.$$ This may be viewed as an analogue of the Calabi-Yau theorem for Fano
  manifolds.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - hermite-einstein-metrics
  - curvature
  - fano-varieties
arxiv_id: "2606.21073v1"
arxiv_url: "https://arxiv.org/abs/2606.21073v1"
arxiv_submitted: "2026-06-19"
arxiv_updated: "2026-06-19"
summary: >-
  指定Hermitian--Yang--Mills flowを、微分幾何的仮定ではなく層の次数条件の下で収束させる。極限は指定曲率tensor方程式を解き、Fano多様体や有理連結多様体の接束に対する存在・一意性へ応用される。
abstract_en: >-
  We prove an analogue of the classical Donaldson-Uhlenbeck-Yau theorem by using the prescribed Hermitian-Yang-Mills flow. Let $E$ be a holomorphic vector bundle over a compact K\"ahler manifold $(M,\omega_g)$. Suppose that for every proper coherent subsheaf $F\subset E$, the following inequality holds: $$ deg_{\omega_g}(F)<deg_{\omega_g}(E). $$ Then, for any initial Hermitian metric $h_0$ on $E$ and any positive-definite Hermitian tensor $P\in \Gamma(M,E^*\otimes \overline E^*)$, the prescribed Hermitian-Yang-Mills flow $$ \frac{\partial h}{\partial t} = -\Lambda_{\omega_g}\left(\sqrt{-1}\, R^h\right) + P, $$ admits a global smooth solution on $[0,\infty)$. Moreover, as $t\rightarrow\infty$, the flow converges smoothly to a Hermitian metric $h_\infty$ on $E$ satisfying $$ \Lambda_{\omega_g}\left(\sqrt{-1}\, R^{h_\infty}\right) = P. $$ As an application, we establish that on a Fano manifold $M$, for any Hermitian metric form $\omega$ and any positive-definite Hermitian tensor $P\in\Gamma(M,T^{*1,0}M\otimes T^{*0,1}M)$, there exists a unique Hermitian metric tensor $h$ on $T^{1,0}M$ such that $$ \Lambda_\omega\left(\sqrt{-1} R^h\right)=P.$$ This may be viewed as an analogue of the Calabi-Yau theorem for Fano manifolds.
summary_en: ""
abstract_ja: >-
  任意の真の整合部分層 $\mathcal F\subset E$ が $\deg(\mathcal F)<\deg(E)$ を満たすとき、正定値Hermitian tensor $P$ を指定したHermitian--Yang--Mills flowが全時間存在し、$\Lambda_\omega(\sqrt{-1}R^h)=P$ の解へ滑らかに収束する。Fano多様体などの接束に適用し、指定tensorをもつ計量の存在と一意性を得る。
abstract_source_url: "https://arxiv.org/abs/2606.21073v1"
license_name: "CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.21073v1](https://arxiv.org/abs/2606.21073v1)
- **著者:** Zhiyao Xiong, Xiaokui Yang, Shing-Tung Yau
- **初回投稿日:** 2026年6月19日
- **最終更新日:** 2026年6月19日（v1）
- **主分類・副分類:** Differential Geometry (math.DG)
- **ライセンス:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

Hermitian--Einstein方程式が安定性と結び付くのに対し、本論文は曲率縮約全体を与えられたtensor $P$ に一致させる方程式を扱う。これはvector bundle版の指定Ricci曲率問題とみなされる。

著者らの先行研究では微分幾何的仮定の下でflowを収束させた。本論文は、全ての真の整合部分層の次数が $E$ の次数より小さいという代数幾何的条件から収束を導く。

さらにquotientの行列式のpseudo-effectivityによる可解性の特徴づけを与え、ample束、Fano多様体、有理連結多様体の接束へ適用する。

## 背景と問題設定

指定方程式とflowは

$$
\Lambda_{\omega_g}(\sqrt{-1}R^h)=P,
\qquad
\frac{\partial h}{\partial t}=-\Lambda_{\omega_g}(\sqrt{-1}R^h)+P
$$

である。通常のslope安定性のrankで割った不等式とは異なり、主定理の仮定は $\deg_{\omega_g}(\mathcal F)<\deg_{\omega_g}(E)$ という強い次数条件である。

## 主結果

### 大域存在と収束（Theorem 1.1）

$\partial\bar\partial\omega_g^{n-1}=0$ を満たすcompact Hermitian多様体上で、全ての真の整合部分層 $\mathcal F\subset E$ が

$$
\deg_{\omega_g}(\mathcal F)<\deg_{\omega_g}(E)
$$

を満たすとする。任意の初期計量と正定値 $P$ に対してflowは一意な大域滑らかな解をもち、$t\to\infty$ で指定方程式の解へ滑らかに収束する。

### 代数幾何的特徴づけ（Theorem 1.3）

compact complex多様体上の束 $E$ について、全ての非零整合quotient $\mathcal Q$ の $\det(\mathcal Q^{**})$ がpseudo-effectiveだがunitary flatではないことと、任意のHermitian form $\omega$ および（準）正定値 $P$ に指定方程式の一意解があることが同値である。

### 有理連結多様体への応用（Theorem 1.4）

$M$ が有理連結射影多様体で $-K_M$ がnefなら、任意の $\omega$ と（準）正定値 $P$ に対し $T^{1,0}M$ 上で

$$
\Lambda_\omega(\sqrt{-1}R^h)=P
$$

を満たす一意な計量が存在する。特にFano多様体が含まれる。

## 証明の見取り図

先行論文の放物型比較原理から一様な下界を得る。上界が破れると仮定し、計量行列を正規化してUhlenbeck--Yau法による弱極限を取り、$\deg(\mathcal F)\geq\deg(E)$ を満たす真の整合部分層を作る。これは仮定に反するため $C^0$ 上界が成立し、既存の高階評価と合わせて収束する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.21073v1](https://arxiv.org/abs/2606.21073v1)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.4; Corollaries 1.2, 1.5–1.7
- **論文構成の説明:** Contents and proof outline, pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC0 1.0 Universal
- **source_scope:** Abstract and Introduction
